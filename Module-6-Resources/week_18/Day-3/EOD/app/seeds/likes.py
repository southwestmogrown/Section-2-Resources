from ..models import db, User, Post
from sqlalchemy import text
from random import randint


def seed_likes():

  for _ in range(1500):
    user = User.query.get(randint(1,250))
    post = Post.query.get(randint(1,750))
    if post not in user.liked_posts:
      user.liked_posts.append(post)
  
  db.session.commit()


def undo_likes():
  db.session.execute(text("DELETE FROM likes"))
  db.session.commit()