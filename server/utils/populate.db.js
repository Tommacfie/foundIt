const fetch = require("node-fetch");

const usersArray = [
  {
    firstName: "Tom",
    lastName: "Macfie",
    email: "t@t.com",
    password: "ajax",
  },
  {
    firstName: "Chris",
    lastName: "Macfie",
    email: "cm@cm.com",
    password: "everton",
  },
  {
    firstName: "Kat",
    lastName: "Kowalska",
    email: "k@k.com",
    password: "bazy",
  },
  {
    firstName: "Sam",
    lastName: "Andrus",
    email: "s@s.com",
    password: "miri",
  },
];
const itemsArray = [
  {
    title: "Gold Watch",
    description: "Brand new, white watch face and some wear on the strap",
    brand: "Rolex",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1634982535/11111watch_b0mcez.webp",
    location: "Winchester pub, Oxford st",
    lostOrFound: true,
    submittedBy: "",
  },
  {
    title: "Dog",
    description:
      "He ran towards me in the park, I couldn't see the owner anywhere",
    brand: "Husky",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1634903567/11111Husky_wnlt5x.jpg",
    location: "Victoria Park, Waterloo - by the playground",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Sandwich",
    description: "Half-eaten, looks like it was a BMT with some pickles on it",
    brand: "Subway",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1634982238/1111sandwich_jbigyl.jpg",
    location: "76a bus to Bakersfield",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Wife",
    description: "We were at the Cavern and she disappeared with a doorman",
    brand: "Blonde",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1635145746/3_The-Cavern-Club-on-Mathew-Street-Liverpool_rwh6in.jpg",
    location: "The Cavern Club",
    lostOrFound: true,
    submittedBy: "",
  },
];

const populateDb = async () => {
  try {
    for (let i = 0; i < usersArray.length; i++) {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersArray[i]),
      });
      const userObj = await response.json();
      const { _id } = userObj;

      itemsArray[i].submittedBy = _id;

      await fetch("http://localhost:3001/test/items", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(itemsArray[i]),
      });
    }
  } catch (error) {
    return error;
  }
};

populateDb();
