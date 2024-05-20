from datetime import date

bloo = {
  "id": 1,
  "name": "Blooregard Q. Kazoo",
  'username': "Bloo",
  'profile':
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/bloo_eou41m.jpg",
}

pepper = {
  "id": 2,
  "name": "Pepper Anne",
  "username": "Pepper",
  "profile":
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
}

daisy = {
  "id": 3,
  "name": "Daisy Mae",
  "username": "Daisy",
  "profile":
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-daisy_yxtrgr.jpg",
}

users = [bloo, pepper, daisy]

posts = [
  {
    "id": 1,
    "caption": "Napping with Pep is always fun...",
    "image": "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774556/sleepy-doggos_rmkal5.jpg",
    "author": bloo,
    "date": date(2023, 9, 11),
    "comments": ["Love the pic!", "Enjoy your nap!"],
    "likes": 4,
  },
  {
    "id": 2,
    "caption": "Napping alone is pretty awesome too...",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774555/pepper-mlem_iaspy9.jpg",
    "author": pepper,
    "date": date(2023, 9, 12),
    "comments": ["That looks so cozy!", "I want a pillow"],
    "likes": 2,
  },
  {
    "id": 3,
    "caption": "Snoozin by the tree!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-holiday-daisy_sg8sol.jpg",
    "author": daisy,
    "date": date(2023, 10, 23),
    "comments": ["Thats a big fish!", "I want a turn...", "Here fishy fishy!"],
    "likes": 8,
  },
  {
    "id": 4,
    "caption": "Now THIS is a party!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/happy-family_k9qd3h.jpg",
    "author": bloo,
    "date": date(2024, 1, 6),
    "comments": ["Why wasn't I invited? 😩", "Room for more?"],
    "likes": 3,
  },
  {
    "id": 5,
    "caption": "I am good gurl!",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
    "author": pepper,
    "date": date(2024, 1, 17),
    "comments": ["How dare he!!!", "Awww, its a cat in a tent!"],
    "likes": 1,
  },
  {
    "id": 6,
    "caption": "Look who I saw at the lake today...",
    "image":
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774545/lake-boi_l4eyoa.jpg",
    "author": daisy,
    "date": date(2024, 1, 2),
    "comments": ["No way!!!", "Its MIMI!!!"],
    "likes": 2,
  }
]


