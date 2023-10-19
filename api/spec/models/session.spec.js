var mongoose = require('mongoose');

require('../mongodb_helper');
var Session = require('../../models/session');
const User = require('../../models/user');

describe('Session model', () => {
    beforeEach((done) => {
        mongoose.connection.collections.sessions.drop(() => {
            done();
        });
    });

    it('contains all relevant session data on initialising', () => {
        var user = new User({
            username: "user_new", 
            email: "user@email.com",
            password: "12345"
        })
        var session = new Session({
            date: "12.08.2023",
            location: "London", 
            users: [user]
            })
        
            expect(session.users[0]).toEqual(user);
    });

})