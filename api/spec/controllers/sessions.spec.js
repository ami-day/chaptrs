const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Book = require ('../../models/book');
const Session = require('../../models/session');
const User = require('../../models/user')
const JWT = require("jsonwebtoken");
const { afterAll } = require("@jest/globals");
const secret = process.env.JWT_SECRET;

let token;

describe("/sessions", () => {
    beforeAll( async () => {
        const user = new User({ username: "new_user_1", email: "user_email@gmail.com", password: "12345678@"});
        await user.save();

        token = JWT.sign({
            user_id: user.id,
            // Backdate this token of 5 minutes
            iat: Math.floor(Date.now() / 1000) - (5 * 60),
            // Set the JWT token to expire in 20 minutes
            exp: Math.floor(Date.now() / 1000) + (20 * 60)
        }, secret);
    });

    beforeEach( async () => {
        await Book.deleteMany({});
        await Session.deleteMany({});
    });

    afterAll( async () => {
        await User.deleteMany({});
        await Book.deleteMany({});
        await Session.deleteMany({});
    });

    // will need to edit this to represent changes to the schema / session model
    describe.skip("POST session when token is present", () => {
        it('response with a 201 status', async () => {
            let response = await request(app)
            .post('/sessions')
            .set("Authorization", `Bearer ${token}`)
            .send({
                date: "12.08.2023",
                location: "Zetland House",
                users: [
                    1, 2, 3, 4, 5
                ]
            });
            let sessions = await Session.find();
            expect(sessions.users.length).toEqual(5);
            expect(sessions[0].date).toEqual("12.08.2023")
        })
    })



})




// previous test from acebook codebase: posts.spec.js for the post controller:



/*
const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Post = require('../../models/post');
const User = require('../../models/user');
const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

let token;

describe("/posts", () => {
    beforeAll( async () => {
        const user = new User({email: "test@test.com", password: "12345678"});
        await user.save();

        token = JWT.sign({
        user_id: user.id,
        // Backdate this token of 5 minutes
        iat: Math.floor(Date.now() / 1000) - (5 * 60),
        // Set the JWT token to expire in 10 minutes
        exp: Math.floor(Date.now() / 1000) + (10 * 60)
        }, secret);
    });

    beforeEach( async () => {
        await Post.deleteMany({});
    })

    afterAll( async () => {
        await User.deleteMany({});
        await Post.deleteMany({});
    })

    describe("POST, when token is present", () => {
        test("responds with a 201", async () => {
        let response = await request(app)
            .post("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({ message: "hello world", token: token });
        expect(response.status).toEqual(201);
        });
    
        test("creates a new post", async () => {
        await request(app)
            .post("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({ message: "hello world", token: token });
        let posts = await Post.find();
        expect(posts.length).toEqual(1);
        expect(posts[0].message).toEqual("hello world");
        });
    
        test("returns a new token", async () => {
        let response = await request(app)
            .post("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({ message: "hello world", token: token })
        let newPayload = JWT.decode(response.body.token, process.env.JWT_SECRET);
        let originalPayload = JWT.decode(token, process.env.JWT_SECRET);
        expect(newPayload.iat > originalPayload.iat).toEqual(true);
        });  
    });
    
    describe("POST, when token is missing", () => {
        test("responds with a 401", async () => {
        let response = await request(app)
            .post("/posts")
            .send({ message: "hello again world" });
        expect(response.status).toEqual(401);
        });
    
        test("a post is not created", async () => {
        await request(app)
            .post("/posts")
            .send({ message: "hello again world" });
        let posts = await Post.find();
        expect(posts.length).toEqual(0);
        });
    
        test("a token is not returned", async () => {
        let response = await request(app)
            .post("/posts")
            .send({ message: "hello again world" });
        expect(response.body.token).toEqual(undefined);
        });
    })

    describe("GET, when token is present", () => {
        test("returns every post in the collection", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({token: token});
        let messages = response.body.posts.map((post) => ( post.message ));
        expect(messages).toEqual(["howdy!", "hola!"]);
        })

        test("the response code is 200", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({token: token});
        expect(response.status).toEqual(200);
        })

        test("returns a new token", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts")
            .set("Authorization", `Bearer ${token}`)
            .send({token: token});
        let newPayload = JWT.decode(response.body.token, process.env.JWT_SECRET);
        let originalPayload = JWT.decode(token, process.env.JWT_SECRET);
        expect(newPayload.iat > originalPayload.iat).toEqual(true);
        })
    })

    describe("GET, when token is missing", () => {
        test("returns no posts", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts");
        expect(response.body.posts).toEqual(undefined);
        })

        test("the response code is 401", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts");
        expect(response.status).toEqual(401);
        })

        test("does not return a new token", async () => {
        let post1 = new Post({message: "howdy!"});
        let post2 = new Post({message: "hola!"});
        await post1.save();
        await post2.save();
        let response = await request(app)
            .get("/posts");
        expect(response.body.token).toEqual(undefined);
        })
    })
});
*/