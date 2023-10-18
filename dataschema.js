Schema: {
    Ami_Bookclub: {
        Books: {
            Book: {
                Genre: 
                ID:
                Author:
                Title:
                Year_Published: 
                Session_ID:
                Cover_photo:
                Personal_Rating:
                External_Rating:
            }
        }
        Members: {
            Member_ID: {
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
                members: []
                session_book_info: {
                    title: 'And then there were none',
                    author: "",
                    suggested_by: Member_ID
                }

            }
            Session_ID: {
                date:
                location:
                members: [],
                session_book_info: {
                    title: 'And then there were none',
                    author: "",
                    suggested_by: Member_ID

            }
        }

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
        Members: {
            Member_ID: {
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
                members: []
                book_id: XXX
            }
        }
    }
}
