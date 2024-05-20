from app.models import db, Post
from sqlalchemy.sql import text
from faker import Faker
from random import choice, sample, randint

fake = Faker()


def seed_posts(all_users):
  all_posts = [
    {
      "caption": "Napping with Pep is always fun...",
      "image": "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774556/sleepy-doggos_rmkal5.jpg",
      "author": all_users[0],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    },
    {
      "caption": "Napping alone is pretty awesome too...",
      "image":
        "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774555/pepper-mlem_iaspy9.jpg",
      "author": all_users[1],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    },
    {
      "caption": "Snoozin by the tree!",
      "image":
        "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-holiday-daisy_sg8sol.jpg",
      "author": all_users[2],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    },
    {
      "caption": "Now THIS is a party!",
      "image":
        "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/happy-family_k9qd3h.jpg",
      "author": all_users[0],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    },
    {
      "caption": "I am good gurl!",
      "image":
        "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
      "author": all_users[1],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    },
    {
      "caption": "Look who I saw at the lake today...",
      "image":
        "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774545/lake-boi_l4eyoa.jpg",
      "author": all_users[2],
      "created_at": fake.date_between("-1y", "today"),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    }
  ]

  for _ in range(100):
    new_post = {
      "caption": fake.sentence(),
      "image": fake.image_url(width=300, height=300),
      "created_at": fake.date_between(start_date="-1y", end_date="today"),
      "author": choice(all_users),
      "user_likes": sample(all_users, randint(0, len(all_users)))
    }

    all_posts.append(new_post)

  create_posts = [Post(**post) for post in all_posts]
  add_posts = [db.session.add(post) for post in create_posts]
  db.session.commit()
  return create_posts


def undo_posts():
  db.session.execute(text("DELETE FROM likes"))
  db.session.execute(text("DELETE FROM posts"))
  db.session.commit()