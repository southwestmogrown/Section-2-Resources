from ..models import db, Post
from sqlalchemy import text
from faker import Faker
from random import randint

fake = Faker()

def seed_posts():
  posts = []

  for _ in range(750):
    posts.append(fake.sentence())

  make_posts = [Post(user_id=randint(1, 251), content=post) for post in posts]
  add_posts = [db.session.add(post) for post in make_posts]

  db.session.commit()
  return make_posts

def undo_posts():
  db.session.execute(text("DELETE FROM posts"))
  db.session.commit()
