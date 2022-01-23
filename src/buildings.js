const buildingsList = [
  // Library : Tarun
  {
    _id: "1",
    name: "Library",
    image_url: "/images/library/lib_image.jpg",
    rating: 4.5,
    numReviews: 12,
    description: "University Reading center",
    address: "18110, Northridge, CA 91225",
    operating_hours: "M-F 8AM–4:45PM",
    lot: "F10 (0.3 miles)",
    reviews: [
      {
        id: "1",
        comment: "This is the best place to read",
        rating: "4",
      },

      {
        id: "3",
        comment: "This is not good during exams, overcrowded",
        rating: "3",
      },
      {
        id: "2",
        comment: "This is place is pathetic. No proper equipment",
        rating: "1",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "/images/library/main.PNG", // floor 1 == main; floor 2 == second.png
        features: [
          {
            id: "1",
            location: "N",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "4",
            location: "West",
            accessable: false,
            name: "elevator",
          },

          {
            id: "5",
            location: "North",
            accessable: true,
            name: "elevator",
          },

          {
            id: "5",
            location: "North",
            accessable: true,
            name: "stairs",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "/images/library/second.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "4",
            location: "East",
            accessable: false,
            name: "bathroom",
          },

          {
            id: "5",
            location: "East",
            accessable: true,
            name: "stairs",
          },
        ],
      },

      {
        id: "3",
        name: "Floor 3",
        image: "/images/library/third.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },

      {
        id: "4",
        name: "Floor 4",
        image: "/images/library/fourth.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },
    ],
  },

  {
    _id: "2",
    name: "SRC",
    image_url: "/images/SRC/SRC.JPG",
    rating: 4.9,
    numReviews: 4,
    description: "Computer Scince Department building",
    address: "18110, Northridge, CA 91225",
    lot: "G4 (0.1 miles)",
    operating_hours: "M-F 6:00AM-10:00PM && Sat-Sun 9:00am-5:00pm",

    reviews: [
      {
        id: "1",
        comment: "This gym is amazing to work out!!",
        rating: "5",
      },

      {
        id: "2",
        comment: "SRC has a rock climbing now",
        rating: "4",
      },
      {
        id: "3",
        comment: "thank you for adding gender exclusive restrooms",
        rating: "5",
      },
      {
        id: "4",
        comment: "SRC has a bunch of activities that are really moving!",
        rating: "5",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "/images/SRC/main.PNG",
        features: [
          {
            id: "1",
            location: "North",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "2",
            location: "North",
            accessable: true,
            name: "elevator",
          },
          {
            id: "3",
            location: "South East",
            accessable: false,
            name: "elevator",
          },
          {
            id: "4",
            location: "North West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "5",
            location: "Center",
            accessable: false,
            name: "stairs",
          },
          {
            id: "6",
            location: "South East",
            accessable: false,
            name: "stairs",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "/images/SRC/second.PNG",
        features: [
          {
            id: "1",
            location: "North",
            accessable: false,
            name: "elevator",
          },
          {
            id: "2",
            location: "South East",
            accessable: true,
            name: "elevator",
          },
          {
            id: "3",
            location: "South",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "4",
            location: "South",
            accessable: true,
            name: "bathroon",
          },
          {
            id: "5",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "6",
            location: "Center",
            accessable: false,
            name: "stairs",
          },
          {
            id: "7",
            location: "South East",
            accessable: false,
            name: "stairs",
          },
        ],
      },

      {
        id: "3",
        name: "Floor 3",
        image: "/images/SRC/third.PNG",
        features: [
          {
            id: "1",
            location: "North",
            accessable: false,
            name: "elevator",
          },
          {
            id: "2",
            location: "South East",
            accessable: false,
            name: "elevator",
          },
          {
            id: "3",
            location: "Center",
            accessable: true,
            name: "elevator",
          },
          {
            id: "4",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "5",
            location: "Center",
            accessable: false,
            name: "stairs",
          },
          {
            id: "6",
            location: "South East",
            accessable: false,
            name: "stairs",
          },
        ],
      },
    ],
  },

  {
    _id: "3",
    name: "Chaparral Hall",
    image_url: "/images/chaparralHall/chaparralHall.JPG",
    rating: 4.6,
    numReviews: 3,
    description: "Computer Scince Department building",
    address: "18110, Northridge, CA 91225",
    lot: "F2 (0.1 miles)",
    operating_hours: "M-F 8:00AM-5:00PM",

    reviews: [
      {
        id: "1",
        comment: "Very useful to study for math exams",
        rating: "4",
      },

      {
        id: "2",
        comment: "Has accessible restrooms!",
        rating: "5",
      },
      {
        id: "3",
        comment: "Took my lab classes here love this place",
        rating: "4",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "/images/chaparralHall/main.PNG",
        features: [
          {
            id: "1",
            location: "West",
            accessable: false,
            name: "elevator",
          },
          {
            id: "2",
            location: "Central",
            accessable: true,
            name: "bathroon",
          },
          {
            id: "3",
            location: "Central",
            accessable: true,
            name: "bathroom",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "/images/chaparralHall/second.PNG",
        features: [
          {
            id: "1",
            location: "Central",
            accessable: true,
            name: "bathroon",
          },
          {
            id: "2",
            location: "Central",
            accessable: false,
            name: "bathroon",
          },
          {
            id: "3",
            location: "Central",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "4",
            location: "West",
            accessable: false,
            name: "elevator",
          },
        ],
      },

      {
        id: "3",
        name: "Floor 3",
        image: "/images/chaparralHall/third.PNG",
        features: [
          {
            id: "1",
            location: "Central",
            accessable: false,
            name: "bathroon",
          },
          {
            id: "2",
            location: "Central",
            accessable: false,
            name: "bathroon",
          },
          {
            id: "3",
            location: "West",
            accessable: true,
            name: "elevator",
          },
        ],
      },

      {
        id: "4",
        name: "Floor 4",
        image: "/images/chaparralHall/fourth.PNG",
        features: [
          {
            id: "1",
            location: "Central",
            accessable: false,
            name: "bathroon",
          },
          {
            id: "2",
            location: "Central",
            accessable: false,
            name: "bathroon",
          },
          {
            id: "3",
            location: "West",
            accessable: true,
            name: "elevator",
          },
        ],
      },
    ],
  },
  // EU : Sergio
  {
    _id: "4",
    name: "Extended University",
    image_url: "/images/EU/extended_university.jpg",
    rating: 4.5,
    numReviews: 4,
    description: "Tseng College of Extended Learning",
    address: "18111 Nordhoff Street, Northridge, CA 91330",
    lot: "B4 (0.2 miles)",
    operating_hours: "M-F 8:00AM - 5:00PM",
    reviews: [
      {
        id: "1",
        comment: "Very easy to get to where I need to go!",
        rating: "5",
      },

      {
        id: "2",
        comment: "I always end up finding the stairs before the elevator.",
        rating: "3",
      },
      {
        id: "3",
        comment: "Rooms are numbered clearly so I was able to find rooms fast.",
        rating: "5",
      },
      {
        id: "4",
        comment: "Bathrooms are right next to the elevator!",
        rating: "5",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "/images/EU/main.PNG",
        features: [
          {
            id: "1",
            location: "South East",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "South East",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "South East",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "4",
            location: "South East",
            accessable: true,
            name: "elevator",
          },
          {
            id: "5",
            location: "Central",
            accessable: false,
            name: "stairs",
          },
          {
            id: "6",
            location: "East",
            accessable: false,
            name: "stairs",
          },
          {
            id: "7",
            location: "South",
            accessable: true,
            name: "stairs",
          },
          {
            id: "8",
            location: "West",
            accessable: true,
            name: "entrance",
          },
          {
            id: "9",
            location: "East",
            accessable: false,
            name: "entrance",
          },
          {
            id: "10",
            location: "East",
            accessable: true,
            name: "ramp",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "/images/EU/second.PNG",
        features: [
          {
            id: "1",
            location: "South West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "2",
            location: "South West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "3",
            location: "South West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "4",
            location: "South West",
            accessable: false,
            name: "elevator",
          },
          {
            id: "5",
            location: "East",
            accessable: true,
            name: "stairs",
          },
          {
            id: "6",
            location: "West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "7",
            location: "South",
            accessable: true,
            name: "stairs",
          },
          {
            id: "8",
            location: "South",
            accessable: true,
            name: "entrance",
          },
        ],
      },

      {
        id: "3",
        name: "Floor 3",
        image: "/images/EU/third.PNG",
        features: [
          {
            id: "1",
            location: "South West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "South West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "3",
            location: "South West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "4",
            location: "South West",
            accessable: true,
            name: "elevator",
          },
          {
            id: "5",
            location: "East",
            accessable: true,
            name: "stairs",
          },
          {
            id: "6",
            location: "West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "7",
            location: "South",
            accessable: true,
            name: "stairs",
          },
          {
            id: "8",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "9",
            location: "South",
            accessable: false,
            name: "entrance",
          },
        ],
      },
    ],
  },

  // Redwood Halls : Sergio
  {
    _id: "5",
    name: "Redwood Hall",
    image_url: "/images/redwoodHalls/redwood_hall.jpg",
    rating: 2.5,
    numReviews: 4,
    description: "Athletics Department",
    address: "18111 Nordhoff St, Northridge, CA 91330",
    lot: "F5 (0.1 miles)",
    operating_hours: "M-F 9:00AM - 3:00PM",

    reviews: [
      {
        id: "1",
        comment:
          "It is a really big building, so you need to go far to go to certain buildings.",
        rating: "2",
      },

      {
        id: "2",
        comment: "The building is too big, but they have lots of bathrooms.",
        rating: "3",
      },
      {
        id: "3",
        comment: "Elevator are hidden away.",
        rating: "2",
      },
      {
        id: "4",
        comment: "The hallways are way too narrow going to the elevators.",
        rating: "2",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "/images/redwoodHalls/main.PNG",
        features: [
          {
            id: "1",
            location: "North West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "North West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "4",
            location: "North West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "5",
            location: "North West",
            accessable: false,
            name: "elevator",
          },
          {
            id: "6",
            location: "North",
            accessable: true,
            name: "elevator",
          },
          {
            id: "7",
            location: "North",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "8",
            location: "North",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "9",
            location: "West",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "10",
            location: "West",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "11",
            location: "South",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "12",
            location: "South",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "13",
            location: "South",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "14",
            location: "South",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "15",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "16",
            location: "North",
            accessable: true,
            name: "stairs",
          },
          {
            id: "17",
            location: "North",
            accessable: true,
            name: "stairs",
          },
          {
            id: "18",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "19",
            location: "North West",
            accessable: true,
            name: "stairs",
          },
          {
            id: "20",
            location: "North West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "21",
            location: "North East",
            accessable: true,
            name: "stairs",
          },
          {
            id: "22",
            location: "South",
            accessable: false,
            name: "stairs",
          },
          {
            id: "23",
            location: "South",
            accessable: false,
            name: "stairs",
          },
          {
            id: "24",
            location: "South West",
            accessable: true,
            name: "stairs",
          },
          {
            id: "25",
            location: "South West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "26",
            location: "South East",
            accessable: true,
            name: "stairs",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "/images/redwoodHalls/second.png",
        features: [
          {
            id: "1",
            location: "North West",
            accessable: true,
            name: "elevator",
          },
          {
            id: "2",
            location: "North",
            accessable: false,
            name: "elevator",
          },
          {
            id: "3",
            location: "North East",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "4",
            location: "North East",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "5",
            location: "South",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "6",
            location: "North West",
            accessable: true,
            name: "stairs",
          },
          {
            id: "7",
            location: "North West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "8",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "9",
            location: "North",
            accessable: false,
            name: "stairs",
          },
          {
            id: "10",
            location: "North",
            accessable: true,
            name: "stairs",
          },
          {
            id: "11",
            location: "South",
            accessable: false,
            name: "stairs",
          },
          {
            id: "12",
            location: "South",
            accessable: true,
            name: "stairs",
          },
          {
            id: "13",
            location: "South East",
            accessable: false,
            name: "stairs",
          },
          {
            id: "14",
            location: "South West",
            accessable: false,
            name: "stairs",
          },
          {
            id: "15",
            location: "South West",
            accessable: true,
            name: "stairs",
          },
        ],
      },
    ],
  },
  // Jacaranda Hall : Tarun
  {
    _id: "6",
    name: "Jacaranda",
    image_url: "/images/jacaranda/jh_image.jpg",
    rating: 4.5,
    numReviews: 12,
    description: "Computer Scince Department building",
    address: "18110, Northridge, CA 91225",

    reviews: [
      {
        id: "1",
        comment: "This is the best place to read",
        rating: "4",
      },

      {
        id: "3",
        comment: "This is not good during exams",
        rating: "3",
      },
      {
        id: "2",
        comment: "This is place is pathetic",
        rating: "1",
      },
    ],
    floor: [
      {
        id: "1",
        name: "Floor 1",
        image: "images/jacaranda/main.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },

      {
        id: "2",
        name: "Floor 2",
        image: "images/jacaranda/second.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },

      {
        id: "3",
        name: "Floor 3",
        image: "images/jacaranda/third.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },

      {
        id: "4",
        name: "Floor 4",
        image: "images/jacaranda/fourth.png",
        features: [
          {
            id: "1",
            location: "SW",
            accessable: false,
            name: "bathroom",
          },
          {
            id: "2",
            location: "SW",
            accessable: true,
            name: "bathroom",
          },
          {
            id: "3",
            location: "North",
            accessable: true,
            name: "entrance",
          },
          {
            id: "5",
            location: "East",
            accessable: false,
            name: "bathroom",
          },
        ],
      },
    ],
  },
];

export default buildingsList;
