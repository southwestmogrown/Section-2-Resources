const bloo = {
  name: "Blooregard Q. Kazoo",
  username: "Bloo-berry",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
};

const pepper = {
  name: "Pepper Anne",
  username: "Pepper-oni",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
};
const daisy = {
  name: "Daisy Mae",
  username: "Daisy-doge",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
};

export const users = [bloo, pepper, daisy];

const seedData = [
  {
    id: 1,
    title: "Napping Outside is always fun...",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: bloo,
    date: new Date(2023, 9, 23),
    comments: ["Love the pic!", "Enjoy your nap!"],
    likes: 4,
  },
  {
    id: 2,
    title: "Napping inside is pretty awesome too...",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: pepper,
    date: new Date(2023, 10, 12),
    comments: ["That looks so cozy!", "I want a pillow"],
    likes: 2,
  },
  {
    id: 3,
    title: "I like my fish",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: daisy,
    date: new Date(2023, 11, 23),
    comments: ["Thats a big fish!", "I want a turn...", "Here fishy fishy!"],
    likes: 8,
  },
  {
    id: 4,
    title: "Now THIS is a party!",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: bloo,
    date: new Date(2024, 0, 6),
    comments: ["Why wasn't I invited? 😩", "Room for more?"],
    likes: 3,
  },
  {
    id: 5,
    title: "This punk stole my tent! ⛺️",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: pepper,
    date: new Date(2024, 0, 17),
    comments: ["How dare he!!!", "Awww, its a cat in a tent!"],
    likes: 1,
  },
  {
    id: 6,
    title: "Look who I saw outside today...",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1709664041/shemp.jpg",
    author: daisy,
    date: new Date(2024, 1, 2),
    comments: ["No way!!!", "Its MIMI!!!"],
    likes: 2,
  },
];

export default seedData;
