from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .likes import seed_likes, undo_likes


seed_commands = AppGroup("seed")

@seed_commands.command("all")
def seed():
  print("Seeding Users")
  seed_users()
  print("Users Seeded")
  print("Seeding Posts")
  seed_posts()
  print("Posts Seeded")
  print("Seeding Likes")
  seed_likes()
  print("Likes Seeded")


@seed_commands.command("undo")
def undo():
  print("Undoing Likes")
  undo_likes()
  print("Likes Undone")
  print("Undoing Posts")
  print("Posts Undone")
  undo_posts()
  print("Undoing Users")
  undo_users()
  print("Users Undone")
  