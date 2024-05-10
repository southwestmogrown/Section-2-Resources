from app.models import db, User
from sqlalchemy.sql import text
from faker import Faker

fake = Faker()

def seed_users():
  all_users = [
    {
      "name": "Blooregard Q. Kazoo",
      "username": "Bloo"
    },
    {
      "name": "Pepper Ann",
      "username": "Pepper"
    },
    {
      "name": "Daisy Mae",
      "username": "Daisy"
    },
  ]

  for _ in range(10):
    name = fake.name()
    name_ls = name.split(' ')
    username = name_ls[0][0] + name_ls[1]
    # print(username)
    new_user = {
      "name": name,
      "username": username
    }

    all_users.append(new_user)

  create_users = [User(**user) for user in all_users]
  add_users = [db.session.add(user) for user in create_users]
  db.session.commit()
  return create_users

def undo_users():
  db.session.execute(text("DELETE FROM users"))
  db.session.commit()