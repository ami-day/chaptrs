Schema: {
    Ami_Bookclub: {
        Books: [
            Book: {
                Genre:
                ID: 1
                Author:
                Title:
                Year_Published:
                Session_ID:
                Cover_photo:
                Personal_Rating:
                External_Rating:
            }
            Book: {
                Genre:
                ID: 2
                Author:
                Title:
                Year_Published:
                Session_ID:
                Cover_photo:
                Personal_Rating:
                External_Rating:
            }
            ]
        Users: [
            User: {
                User_ID:
                username:
                profile_pic:
                location:
                date_joined:
            }
            User: {
                User_ID:
                username:
                profile_pic:
                location:
                date_joined:
            }
        ]
        Sessions: [
            Session: {
                Session_ID:
                date:
                location:
                attending: [user_id, user_id]
                chosen_book: 1
                suggested_books: [{user_id: book_id},{user_id: book_id}]
                },
            Session: {
                Session_ID: {
                date:
                location:
                users: []
                read_book: 1
                suggested_books: [2, 3, 4]
                }
                }
            ]
    }
    Ellie_Bookclub: {
        Books: {
            Book: {
                Genre:
                ID:
                Author:
                Title:
                Year_Published:
                Session_ID:
            }
        }
        Users: {
            User_ID: {
                username:
                profile_pic:
                location:
                date_joined:
            }
        }
        Sessions: {
            Session_ID: {
                date:
                location:
                users: []
                book_id: XXX
            }
        }
    }
}