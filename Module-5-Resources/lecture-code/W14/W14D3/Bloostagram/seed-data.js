const bloo = {
  name: "Blooregard Q. Kazoo",
  username: "Blooberry",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/bloo_eou41m.jpg",
};

const pepper = {
  name: "Pepper Anne",
  username: "Pepperoni",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774555/pepper-mlem_iaspy9.jpg",
};
const daisy = {
  name: "Daisy Mae",
  username: "Daisy-doge",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/sleepy-daisy_yxtrgr.jpg",
};

const lily = {
  name: "Lilly Lou",
  username: "Lil Mama",
  profile:
    "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774557/lily-pepper-chill_bb0wbv.jpg",
};

export const users = [bloo, pepper, daisy, lily];

const seedData = [
  {
    id: 1,
    title: "I'm a dapper boy!",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/bloo_eou41m.jpg",
    author: bloo,
    date: new Date(2023, 9, 23),
    comments: ["Love the pic!", "Handsome Boi!"],
    likes: 4,
  },
  {
    id: 2,
    title: "Good nap with Pop",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774553/bloo-pepper-nap_cn4ypy.jpg",
    author: pepper,
    date: new Date(2023, 10, 12),
    comments: ["That looks so cozy!", "I want a pillow"],
    likes: 2,
  },
  {
    id: 3,
    title: "Photobombed!",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774562/daisy-bloo-photobomb_avrsia.jpg",
    author: daisy,
    date: new Date(2023, 11, 23),
    comments: ["Aw, what a jerk!", "Still look comfy", "He he he"],
    likes: 8,
  },
  {
    id: 4,
    title: "Now THIS is a party!",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774551/sleepy-cozy-family_wxchs0.jpg",
    author: bloo,
    date: new Date(2024, 0, 6),
    comments: ["Why wasn't I invited? 😩", "Room for more?"],
    likes: 3,
  },
  {
    id: 5,
    title: "I was just a baby! 🐶",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774546/baby-pep_jev7vx.jpg",
    author: pepper,
    date: new Date(2024, 0, 17),
    comments: ["So adorable!!!", "What a good gurl!"],
    likes: 1,
  },
  {
    id: 6,
    title: "Look who I saw at the lake today!...",
    image:
      "https://res.cloudinary.com/ddxcued5s/image/upload/v1712774545/lake-boi_l4eyoa.jpg",
    author: daisy,
    date: new Date(2024, 1, 2),
    comments: ["No way!!!", "Its BLOO!!!"],
    likes: 2,
  },
];

export default seedData;
