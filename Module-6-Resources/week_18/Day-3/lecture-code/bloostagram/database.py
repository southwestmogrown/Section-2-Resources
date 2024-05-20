from datetime import date
from app import app
from app.models import db, User, Post
bloo = {
  "name": "Blooregard Q. Kazoo",
  'username': "Bloo",
}

pepper = {
  "name": "Pepper Anne",
  "username": "Pepper",
}

daisy = {
  "name": "Daisy Mae",
  "username": "Daisy",
}

users = [bloo, pepper, daisy]

bloo_posts = [
  {
    "caption": "Napping with Pep is always fun...",
    "image": "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774556/sleepy-doggos_rmkal5.jpg",
    "created_at": date(2023, 9, 11),
  },
  {
    "caption": "Now THIS is a party!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/happy-family_k9qd3h.jpg",
    "created_at": date(2024, 1, 6),
  }
]

pepper_posts = [
  {
    "caption": "Napping alone is pretty awesome too...",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774555/pepper-mlem_iaspy9.jpg",
    "created_at": date(2023, 9, 12),
  },
  {
    "caption": "I am good gurl!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
    "created_at": date(2024, 1, 17),
  }
]

daisy_posts = [
  {
    "caption": "Snoozin by the tree!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-holiday-daisy_sg8sol.jpg",
    "created_at": date(2023, 10, 23),
  },
  {
    "caption": "Look who I saw at the lake today...",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774545/lake-boi_l4eyoa.jpg",
    "created_at": date(2024, 1, 2),
  }
]


with app.app_context():
  db.drop_all()
  print("Dropped all tables")
  db.create_all()
  print("Created all tables")

  for user in users:
    current_user = User(**user)
    # print(current_user)
    db.session.add(current_user)


  for post in bloo_posts:
    current_post = Post(**post)
    # current_post.author_id = 1
    user_1 = User.query.get(1)
    # current_post.author = user_1
    user_1.posts.append(current_post)
    db.session.add(current_post)
    # print(current_post.author_id)

  for post in pepper_posts:
    current_post = Post(**post)
    user_2 = db.session.get(User, 2)
    current_post.author = user_2
    db.session.add(current_post)

  for post in daisy_posts:
    current_post = Post(**post)

    user_3 = db.session.get(User, 3)
    current_post.author = user_3

    db.session.add(current_post)
  
  
  db.session.commit()