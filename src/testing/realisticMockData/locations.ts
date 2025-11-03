import { createDynamicMockLocation } from "../generated/dynnamicMockDataCreator";
import { allCharacters } from "./characters";

// Schools (1-5)
const schools = [
  createDynamicMockLocation({
    id: "1",
    name: "South Park Elementary",
    type: "School",
    dimension: "Base Reality",
    residents: [...allCharacters.slice(0, 40), allCharacters[6], allCharacters[48]] // Students and school staff
  }),
  createDynamicMockLocation({
    id: "2",
    name: "Middle Park Elementary",
    type: "School",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "3",
    name: "North Park Elementary",
    type: "School",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "4",
    name: "South Park Community Center",
    type: "Community Building",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "5",
    name: "Park County High School",
    type: "School",
    dimension: "Base Reality",
    residents: []
  })
];

// Businesses (6-15)
const businesses = [
  createDynamicMockLocation({
    id: "6",
    name: "Tegridy Farms",
    type: "Marijuana Farm",
    dimension: "Base Reality",
    residents: [allCharacters[5], allCharacters[40]] // Randy and Sharon
  }),
  createDynamicMockLocation({
    id: "7",
    name: "Casa Bonita",
    type: "Restaurant",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "8",
    name: "City Wok",
    type: "Restaurant",
    dimension: "Base Reality",
    residents: [allCharacters[69]] // Mr. Venezuela (City Wok Guy)
  }),
  createDynamicMockLocation({
    id: "9",
    name: "Tweek Bros. Coffee",
    type: "Coffee Shop",
    dimension: "Base Reality",
    residents: [allCharacters[58], allCharacters[59]] // Mr. and Mrs. Tweak
  }),
  createDynamicMockLocation({
    id: "10",
    name: "Tom's Rhinoplasty",
    type: "Medical Office",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "11",
    name: "Skeeter's Bar",
    type: "Bar",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "12",
    name: "South Park Mall",
    type: "Shopping Mall",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "13",
    name: "Jimbo's Guns",
    type: "Gun Store",
    dimension: "Base Reality",
    residents: [allCharacters[54], allCharacters[55]] // Jimbo and Ned
  }),
  createDynamicMockLocation({
    id: "14",
    name: "Park County Police Station",
    type: "Police Station",
    dimension: "Base Reality",
    residents: [allCharacters[51], allCharacters[52]] // Officer Barbrady and Sergeant Yates
  }),
  createDynamicMockLocation({
    id: "15",
    name: "South Park Church",
    type: "Religious Building",
    dimension: "Base Reality",
    residents: [allCharacters[57]] // Father Maxi
  })
];

// Residential Areas (16-25)
const residentialAreas = [
  createDynamicMockLocation({
    id: "16",
    name: "Cartman Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[0], allCharacters[43]] // Cartman and Liane
  }),
  createDynamicMockLocation({
    id: "17",
    name: "Marsh Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[1], allCharacters[40]] // Stan and Sharon
  }),
  createDynamicMockLocation({
    id: "18",
    name: "Broflovski Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[2], allCharacters[41], allCharacters[42]] // Kyle, Gerald, and Sheila
  }),
  createDynamicMockLocation({
    id: "19",
    name: "McCormick Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[3], allCharacters[44], allCharacters[45]] // Kenny, Stuart, and Carol
  }),
  createDynamicMockLocation({
    id: "20",
    name: "Stotch Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[4], allCharacters[46], allCharacters[47]] // Butters, Stephen, and Linda
  }),
  createDynamicMockLocation({
    id: "21",
    name: "Black Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[14], allCharacters[62], allCharacters[63]] // Token and parents
  }),
  createDynamicMockLocation({
    id: "22",
    name: "Tweak Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[12], allCharacters[58], allCharacters[59]] // Tweek and parents
  }),
  createDynamicMockLocation({
    id: "23",
    name: "Valmer Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[15]] // Jimmy
  }),
  createDynamicMockLocation({
    id: "24",
    name: "Tucker Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[11], allCharacters[60], allCharacters[61]] // Craig and parents
  }),
  createDynamicMockLocation({
    id: "25",
    name: "Donovan Residence",
    type: "House",
    dimension: "Base Reality",
    residents: [allCharacters[13], allCharacters[64], allCharacters[65]] // Clyde and parents
  })
];

// Special Locations (26-30)
const specialLocations = [
  createDynamicMockLocation({
    id: "26",
    name: "Imaginationland",
    type: "Fictional Realm",
    dimension: "Imagination",
    residents: allCharacters.slice(70, 80) // Special characters
  }),
  createDynamicMockLocation({
    id: "27",
    name: "Hell",
    type: "Afterlife",
    dimension: "Supernatural",
    residents: [allCharacters[71], allCharacters[79]] // Satan and Saddam Hussein
  }),
  createDynamicMockLocation({
    id: "28",
    name: "Canada",
    type: "Country",
    dimension: "Base Reality",
    residents: [allCharacters[91], allCharacters[92], allCharacters[93]] // Scott, Terrance and Phillip
  }),
  createDynamicMockLocation({
    id: "29",
    name: "Stark's Pond",
    type: "Natural Landmark",
    dimension: "Base Reality",
    residents: []
  }),
  createDynamicMockLocation({
    id: "30",
    name: "Dr. Mephesto's Genetic Engineering Ranch",
    type: "Laboratory",
    dimension: "Base Reality",
    residents: [allCharacters[56]] // Dr. Mephesto
  })
];

export const allLocations = [
  ...schools,
  ...businesses,
  ...residentialAreas,
  ...specialLocations
];