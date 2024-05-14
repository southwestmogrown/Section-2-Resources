from app.models import db, Post, User
from random import choice, sample, randint
from sqlalchemy.sql import text
from faker import Faker
fake = Faker()
from datetime import date



def seed_posts(all_users):
 
    post1 = Post(
        caption= "Naptime photobomb",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/daisy-bloo-photobomb_avrsia.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    ) 

    post2 = Post(
        caption= "Napping inside is pretty awesome too...",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/sleepy-cozy-family_wxchs0.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    )

    post3 = Post(
        caption= "mlem...",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774555/pepper-mlem_iaspy9.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    )       
    
    post4 = Post(
        caption= "Now THIS is a party!",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/sleepy-boi_sxrfek.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    )

    post5 = Post(
        caption= "This punk stole my tent! ⛺️",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/peek_ciduyj.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    )

    post6 = Post(
        caption= "Look who I saw at the lake today...",
        image= "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774545/lake-boi_l4eyoa.jpg",
        post_date= fake.date_between(start_date='-1y', end_date='today'),
        user= choice(all_users),
        post_likes= sample(all_users, randint(0, len(all_users))),
    )

    all_posts = [post1, post2, post3, post4, post5]
    add_posts = [db.session.add(post) for post in all_posts]
    db.session.commit()



def undo_posts():
    db.session.execute(text("DELETE FROM likes"))  
    db.session.execute(text("DELETE FROM posts"))   
    db.session.commit()