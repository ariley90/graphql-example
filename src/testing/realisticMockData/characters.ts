import { createDynamicMockCharacter } from "../generated/dynnamicMockDataCreator";

// Main Characters (1-10)
const mainCharacters = [
  createDynamicMockCharacter({ 
    id: "1",
    name: "Eric Cartman",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/cartman.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "2",
    name: "Stan Marsh",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/stan.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "3",
    name: "Kyle Broflovski",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/kyle.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "4",
    name: "Kenny McCormick",
    status: "Unknown",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/kenny.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "5",
    name: "Butters Stotch",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/butters.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "6",
    name: "Randy Marsh",
    status: "Alive",
    species: "Human",
    type: "Scientist/Farmer",
    gender: "Male",
    image: "https://example.com/randy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "7",
    name: "Mr. Garrison",
    status: "Alive",
    species: "Human",
    type: "Teacher",
    gender: "Other",
    image: "https://example.com/garrison.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "8",
    name: "Chef",
    status: "Deceased",
    species: "Human",
    type: "School Chef",
    gender: "Male",
    image: "https://example.com/chef.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "9",
    name: "Towelie",
    status: "Alive",
    species: "Towel",
    type: "Sentient Towel",
    gender: "Other",
    image: "https://example.com/towelie.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "10",
    name: "Mr. Hankey",
    status: "Alive",
    species: "Christmas Poo",
    type: "Holiday Spirit",
    gender: "Male",
    image: "https://example.com/mrhankey.jpg"
  })
];

// Students (11-40)
const students = [
  createDynamicMockCharacter({ 
    id: "11",
    name: "Wendy Testaburger",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/wendy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "12",
    name: "Craig Tucker",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/craig.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "13",
    name: "Tweek Tweak",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/tweek.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "14",
    name: "Clyde Donovan",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/clyde.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "15",
    name: "Token Black",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/token.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "16",
    name: "Jimmy Valmer",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/jimmy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "17",
    name: "Timmy Burch",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/timmy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "18",
    name: "Bebe Stevens",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/bebe.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "19",
    name: "Red",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/red.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "20",
    name: "Annie Knitts",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/annie.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "21",
    name: "Scott Malkinson",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/scott.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "22",
    name: "Bradley Biggle",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/bradley.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "23",
    name: "Pip Pirrup",
    status: "Deceased",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/pip.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "24",
    name: "Dougie",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/dougie.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "25",
    name: "DogPoo Petuski",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/dogpoo.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "26",
    name: "Kevin Stoley",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/kevin.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "27",
    name: "Heidi Turner",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/heidi.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "28",
    name: "Nichole Daniels",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/nichole.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "29",
    name: "Jason White",
    status: "Deceased",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/jason.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "30",
    name: "Jenny Simons",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/jenny.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "31",
    name: "Francis",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/francis.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "32",
    name: "Sally Turner",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/sally.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "33",
    name: "Bill Allen",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/bill.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "34",
    name: "Fosse McDonald",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Male",
    image: "https://example.com/fosse.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "35",
    name: "Lizzy",
    status: "Alive",
    species: "Human",
    type: "Student",
    gender: "Female",
    image: "https://example.com/lizzy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "36",
    name: "Michael",
    status: "Alive",
    species: "Human",
    type: "Student/Goth",
    gender: "Male",
    image: "https://example.com/michael.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "37",
    name: "Pete",
    status: "Alive",
    species: "Human",
    type: "Student/Goth",
    gender: "Male",
    image: "https://example.com/pete.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "38",
    name: "Henrietta Biggle",
    status: "Alive",
    species: "Human",
    type: "Student/Goth",
    gender: "Female",
    image: "https://example.com/henrietta.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "39",
    name: "Firkle",
    status: "Alive",
    species: "Human",
    type: "Student/Goth",
    gender: "Male",
    image: "https://example.com/firkle.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "40",
    name: "Ike Broflovski",
    status: "Alive",
    species: "Human",
    type: "Student/Kindergartner",
    gender: "Male",
    image: "https://example.com/ike.jpg"
  })
];

// Adults (41-70)
const adults = [
  createDynamicMockCharacter({ 
    id: "41",
    name: "Sharon Marsh",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/sharon.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "42",
    name: "Gerald Broflovski",
    status: "Alive",
    species: "Human",
    type: "Lawyer",
    gender: "Male",
    image: "https://example.com/gerald.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "43",
    name: "Sheila Broflovski",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/sheila.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "44",
    name: "Liane Cartman",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/liane.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "45",
    name: "Stuart McCormick",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Male",
    image: "https://example.com/stuart.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "46",
    name: "Carol McCormick",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/carol.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "47",
    name: "Stephen Stotch",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Male",
    image: "https://example.com/stephen.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "48",
    name: "Linda Stotch",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/linda.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "49",
    name: "Mr. Mackey",
    status: "Alive",
    species: "Human",
    type: "School Counselor",
    gender: "Male",
    image: "https://example.com/mackey.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "50",
    name: "PC Principal",
    status: "Alive",
    species: "Human",
    type: "School Principal",
    gender: "Male",
    image: "https://example.com/pcprincipal.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "51",
    name: "Strong Woman",
    status: "Alive",
    species: "Human",
    type: "Vice Principal",
    gender: "Female",
    image: "https://example.com/strongwoman.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "52",
    name: "Officer Barbrady",
    status: "Alive",
    species: "Human",
    type: "Police Officer",
    gender: "Male",
    image: "https://example.com/barbrady.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "53",
    name: "Sergeant Yates",
    status: "Alive",
    species: "Human",
    type: "Police Officer",
    gender: "Male",
    image: "https://example.com/yates.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "54",
    name: "Mayor McDaniels",
    status: "Alive",
    species: "Human",
    type: "Mayor",
    gender: "Female",
    image: "https://example.com/mcdaniels.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "55",
    name: "Jimbo Kern",
    status: "Alive",
    species: "Human",
    type: "Hunter",
    gender: "Male",
    image: "https://example.com/jimbo.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "56",
    name: "Ned Gerblansky",
    status: "Alive",
    species: "Human",
    type: "Hunter",
    gender: "Male",
    image: "https://example.com/ned.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "57",
    name: "Dr. Alphonse Mephesto",
    status: "Alive",
    species: "Human",
    type: "Scientist",
    gender: "Male",
    image: "https://example.com/mephesto.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "58",
    name: "Father Maxi",
    status: "Alive",
    species: "Human",
    type: "Priest",
    gender: "Male",
    image: "https://example.com/maxi.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "59",
    name: "Richard Tweak",
    status: "Alive",
    species: "Human",
    type: "Coffee Shop Owner",
    gender: "Male",
    image: "https://example.com/richardtweak.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "60",
    name: "Mrs. Tweak",
    status: "Alive",
    species: "Human",
    type: "Coffee Shop Owner",
    gender: "Female",
    image: "https://example.com/mrstweak.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "61",
    name: "Thomas Tucker",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Male",
    image: "https://example.com/thomas.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "62",
    name: "Laura Tucker",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/laura.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "63",
    name: "Steve Black",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Male",
    image: "https://example.com/steve.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "64",
    name: "Linda Black",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/lindablack.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "65",
    name: "Roger Donovan",
    status: "Alive",
    species: "Human",
    type: "Parent",
    gender: "Male",
    image: "https://example.com/roger.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "66",
    name: "Betsy Donovan",
    status: "Deceased",
    species: "Human",
    type: "Parent",
    gender: "Female",
    image: "https://example.com/betsy.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "67",
    name: "Dr. Tom",
    status: "Alive",
    species: "Human",
    type: "Doctor",
    gender: "Male",
    image: "https://example.com/drtom.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "68",
    name: "Richard Adler",
    status: "Alive",
    species: "Human",
    type: "Shop Teacher",
    gender: "Male",
    image: "https://example.com/adler.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "69",
    name: "Mrs. Nelson",
    status: "Alive",
    species: "Human",
    type: "Librarian",
    gender: "Female",
    image: "https://example.com/nelson.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "70",
    name: "Mr. Venezuela",
    status: "Alive",
    species: "Human",
    type: "City Wok Owner",
    gender: "Male",
    image: "https://example.com/venezuela.jpg"
  })
];

// Special Characters (71-100)
const specialCharacters = [
  createDynamicMockCharacter({ 
    id: "71",
    name: "ManBearPig",
    status: "Unknown",
    species: "Cryptid",
    type: "Mythical Creature",
    gender: "Male",
    image: "https://example.com/manbearpig.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "72",
    name: "Satan",
    status: "Deceased",
    species: "Demon",
    type: "Prince of Darkness",
    gender: "Male",
    image: "https://example.com/satan.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "73",
    name: "Jesus Christ",
    status: "Alive",
    species: "Divine Being",
    type: "Son of God",
    gender: "Male",
    image: "https://example.com/jesus.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "74",
    name: "Santa Claus",
    status: "Alive",
    species: "Magical Being",
    type: "Holiday Figure",
    gender: "Male",
    image: "https://example.com/santa.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "75",
    name: "Visitors",
    status: "Alive",
    species: "Alien",
    type: "Extraterrestrial",
    gender: "Unknown",
    image: "https://example.com/visitors.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "76",
    name: "Cthulhu",
    status: "Immortal",
    species: "Old God",
    type: "Cosmic Entity",
    gender: "Unknown",
    image: "https://example.com/cthulhu.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "77",
    name: "Death",
    status: "Immortal",
    species: "Cosmic Entity",
    type: "Horseman",
    gender: "Unknown",
    image: "https://example.com/death.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "78",
    name: "Woodland Critters",
    status: "Alive",
    species: "Demon Animals",
    type: "Christmas Creatures",
    gender: "Various",
    image: "https://example.com/woodlandcritters.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "79",
    name: "Moses",
    status: "Unknown",
    species: "Divine Being",
    type: "Prophet",
    gender: "Male",
    image: "https://example.com/moses.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "80",
    name: "Saddam Hussein",
    status: "Deceased",
    species: "Human/Demon",
    type: "Satan's Ex",
    gender: "Male",
    image: "https://example.com/saddam.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "81",
    name: "Tooth Decay",
    status: "Unknown",
    species: "Magical Being",
    type: "Dental Monster",
    gender: "Male",
    image: "https://example.com/toothdecay.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "82",
    name: "Sexual Harassment Panda",
    status: "Alive",
    species: "Mascot",
    type: "Educational Character",
    gender: "Male",
    image: "https://example.com/panda.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "83",
    name: "Snacky S'more",
    status: "Unknown",
    species: "Food",
    type: "Mascot",
    gender: "Male",
    image: "https://example.com/snacky.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "84",
    name: "Jakovasaurs",
    status: "Alive",
    species: "Alien",
    type: "Endangered Species",
    gender: "Various",
    image: "https://example.com/jakovasaurs.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "85",
    name: "Big Gay Al",
    status: "Alive",
    species: "Human",
    type: "Camp Counselor",
    gender: "Male",
    image: "https://example.com/bigayal.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "86",
    name: "Mr. Slave",
    status: "Alive",
    species: "Human",
    type: "Teaching Assistant",
    gender: "Male",
    image: "https://example.com/mrslave.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "87",
    name: "Starvin' Marvin",
    status: "Alive",
    species: "Human",
    type: "Ethiopian Child",
    gender: "Male",
    image: "https://example.com/marvin.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "88",
    name: "Marklar",
    status: "Alive",
    species: "Alien",
    type: "Alien Race",
    gender: "Unknown",
    image: "https://example.com/marklar.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "89",
    name: "Underpants Gnomes",
    status: "Alive",
    species: "Gnome",
    type: "Magical Creature",
    gender: "Male",
    image: "https://example.com/gnomes.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "90",
    name: "Succubus",
    status: "Unknown",
    species: "Demon",
    type: "Supernatural Being",
    gender: "Female",
    image: "https://example.com/succubus.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "91",
    name: "Barbara Streisand",
    status: "Unknown",
    species: "Human/Monster",
    type: "Mechanical Monster",
    gender: "Female",
    image: "https://example.com/streisand.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "92",
    name: "Scott the Dick",
    status: "Alive",
    species: "Human",
    type: "Canadian",
    gender: "Male",
    image: "https://example.com/scott.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "93",
    name: "Terrance and Phillip",
    status: "Alive",
    species: "Human",
    type: "Canadian Celebrities",
    gender: "Male",
    image: "https://example.com/terrance-phillip.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "94",
    name: "Ugly Bob",
    status: "Alive",
    species: "Human",
    type: "Canadian",
    gender: "Male",
    image: "https://example.com/uglybob.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "95",
    name: "Canadian Devil",
    status: "Alive",
    species: "Demon",
    type: "Canadian Supernatural",
    gender: "Male",
    image: "https://example.com/canadiandevil.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "96",
    name: "Member Berries",
    status: "Alive",
    species: "Fruit",
    type: "Sentient Food",
    gender: "Unknown",
    image: "https://example.com/memberberries.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "97",
    name: "PC Babies",
    status: "Alive",
    species: "Human",
    type: "Babies",
    gender: "Various",
    image: "https://example.com/pcbabies.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "98",
    name: "Splatty",
    status: "Unknown",
    species: "AI",
    type: "Digital Assistant",
    gender: "Unknown",
    image: "https://example.com/splatty.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "99",
    name: "AWESOM-O",
    status: "Unknown",
    species: "Robot",
    type: "Cartman in Disguise",
    gender: "Male",
    image: "https://example.com/awesomo.jpg"
  }),
  createDynamicMockCharacter({ 
    id: "100",
    name: "Mitch Conner",
    status: "Unknown",
    species: "Hand Drawing",
    type: "Cartman's Hand",
    gender: "Male",
    image: "https://example.com/mitch.jpg"
  })
];

export const allCharacters = [
  ...mainCharacters,
  ...students,
  ...adults,
  ...specialCharacters
];