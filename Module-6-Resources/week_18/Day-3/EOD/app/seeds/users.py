from app.models import db, User
from sqlalchemy import text
from faker import Faker

fake = Faker()

def seed_users():
  users = []

  for _ in range(250):
    users.append(fake.name())

  make_users = [User(username=name) for name in users]
  add_users = [db.session.add(user) for user in make_users]
  # print(users)
  db.session.commit()
  return make_users

def undo_users():
  db.session.execute(text("DELETE FROM users"))
  db.session.commit()
