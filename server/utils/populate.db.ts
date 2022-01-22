/* eslint-disable no-await-in-loop */
const fetch = require("node-fetch");

import fetch from "node-fetch";

const usersArray = [
  {
    firstName: "Tim",
    lastName: "MacDonald",
    email: "t@t.com",
    password: "1234",
  },
  {
    firstName: "Chris",
    lastName: "Farlowe",
    email: "c@c.com",
    password: "4321",
  },
  {
    firstName: "Kat",
    lastName: "Kristianssen",
    email: "k@k.com",
    password: "abcd",
  },
  {
    firstName: "Sam",
    lastName: "Wise",
    email: "s@s.com",
    password: "dcba",
  },
  {
    firstName: "Pat",
    lastName: "Butcher",
    email: "p@b.com",
    password: "pb1888",
  },
  {
    firstName: "Rocky",
    lastName: "Erikkson",
    email: "r@e.com",
    password: "13243546",
  },
  {
    firstName: "Neko",
    lastName: "Collier",
    email: "n@collier.com",
    password: "dc123456",
  },
  {
    firstName: "Bazyl",
    lastName: "Brush",
    email: "bazy@fox.com",
    password: "foxy123",
  },
];
const itemsArray = [
  {
    title: "Gold Watch",
    description: "Brand new, white watch face and some wear on the strap",
    brand: "Rolex",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637586060/watch_gzkkry.jpg",
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
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637586096/husky_yzsyrk.jpg",
    location: "Victoria Park, Waterloo - by the playground",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Sandwich",
    description: "Half-eaten, looks like it was a BMT with some pickles on it",
    brand: "Subway",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637586111/sandwich_os9mmt.jpg",
    location: "76a bus to Bakersfield",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Engagement Ring",
    description:
      "It's gold with a diamond in it. We were at the Cavern and I dropped it somewhere by the stage.",
    brand: "Cartier",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637586077/engagement-ring_nsnb7d.jpg",
    location: "The Cavern Club",
    lostOrFound: true,
    submittedBy: "",
  },
  {
    title: "Wallet",
    description:
      "Hi - I found this expensive looking brown wallet at the bus stop on Aigburth rd. Unfortunately there were no cards or identifying information left inside.",
    brand: "Leather",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637677356/21_pocket_wallet_faggio_3.2200x0.1615569417_scvml2.jpg",
    location: "56a Bus stop, Aigburth rd",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Scarf",
    description:
      "I must have dropped it when shopping with my kids. Please return it - it was very expensive!",
    brand: "M&S",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637682537/scarf_fnlkof.jpg",
    location: "Clayton Square shopping center",
    lostOrFound: true,
    submittedBy: "",
  },
  {
    title: "Pearl Earring",
    description:
      "I found a single earring (like the ones pictured) on the sink in the ladies' bathroom.",
    brand: "Cartier",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637677182/bsc-001-fw-er-x.l-main_zgpf1q.png",
    location: "Lydiate Village Fete",
    lostOrFound: false,
    submittedBy: "",
  },
  {
    title: "Child's Toy",
    description:
      "Hi all, I think my child threw his toy from the pram as we were walking to the station. Please return this - he's distraught without it!",
    brand: "Toy Story",
    image:
      "https://res.cloudinary.com/diuadqc2m/image/upload/v1637677258/gh-best-toys-every-age-index-1572461597_fwju6a.png",
    location: "St Johns' rd",
    lostOrFound: true,
    submittedBy: "",
  },
];

const populateDb = async () => {
  try {
    // eslint-disable-next-line no-plusplus
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
      console.log("Added data field");
    }
  } catch (error) {
    console.log("error populating database", error);
    return error;
  }
};

populateDb();
