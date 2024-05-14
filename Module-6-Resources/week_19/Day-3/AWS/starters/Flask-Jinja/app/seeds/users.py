from app.models import db, User 
from sqlalchemy.sql import text


def seed_users():
    user1 = User(
            username="Bloo",
            email="blooqkazoo@gmail.com",
            profile_pic="https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/bloo_eou41m.jpg",
            bio= "I love naps and food",
    )

    user2 = User(
            username="Pepper",
            email="peppep@aol.com",
            profile_pic="https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
            bio="I am a ninja! 🥷🏻",
    )

    user3 = User(
            username="Daisy",
            email="daisymae@gmail.com",
            profile_pic="https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-holiday-daisy_sg8sol.jpg",
            bio="I like to bark at nothing!",
    )



    all_users = [user1, user2, user3]
    add_users = [db.session.add(user) for user in all_users]
    db.session.commit()
    return all_users


def undo_users():
    db.session.execute(text("DELETE FROM users"))   
    db.session.commit()