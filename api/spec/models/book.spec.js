var mongoose = require('mongoose');

require('../mongodb_helper');
var Book = require('../../models/book');

describe('Book model', () => {
    beforeEach((done) => {
        mongoose.connection.collections.books.drop(() => {
            done();
        });
    });

    it("contains all relevant book data on initialising", () => {
        var book = new Book({genre: "Some genre", 
                            author: "Some author",
                            title: "Some title", 
                            year_published: "Some year",
        });
        expect(book.title).toEqual("Some title");
    });

    it("can list all books", (done) => {
        Book.find((err, books) => {
        expect(err).toBeNull();
        expect(books).toEqual([]);
        done();
        });
    });

    it("can save a book", (done) => {
        var book = new Book({genre: "Some genre", 
                            author: "Some author",
                            title: "Some title", 
                            year_published: "Some year",
        });

        book.save((err) => {
        expect(err).toBeNull();

        Book.find((err, books) => {
            expect(err).toBeNull();

            expect(books[0]).toMatchObject(
                {genre: "Some genre", 
                author: "Some author",
                title: "Some title", 
                year_published: "Some year",
                });

            done();
        });
        });
    });
});
