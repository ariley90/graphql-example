import { createDynamicMockEpisode } from "../generated/dynnamicMockDataCreator";
import { allCharacters } from "./characters";

// Season 25 Episodes (1-15)
const season25 = [
  createDynamicMockEpisode({
    id: "1",
    name: "Tegridy Special",
    air_date: "2025-10-01",
    episode: "S25E01",
    characters: [allCharacters[5], allCharacters[1], allCharacters[0]] // Randy, Stan, Cartman
  }),
  createDynamicMockEpisode({
    id: "2",
    name: "PC Babies Go to College",
    air_date: "2025-10-08",
    episode: "S25E02",
    characters: [allCharacters[49], allCharacters[50], allCharacters[96]] // PC Principal, Strong Woman, PC Babies
  }),
  createDynamicMockEpisode({
    id: "3",
    name: "The Return of Mitch Conner",
    air_date: "2025-10-15",
    episode: "S25E03",
    characters: [allCharacters[0], allCharacters[99], allCharacters[2]] // Cartman, Mitch Conner, Kyle
  }),
  createDynamicMockEpisode({
    id: "4",
    name: "Kenny's 100th Death",
    air_date: "2025-10-22",
    episode: "S25E04",
    characters: [allCharacters[3], allCharacters[76], allCharacters[1], allCharacters[2]] // Kenny, Death, Stan, Kyle
  }),
  createDynamicMockEpisode({
    id: "5",
    name: "Butters' NFT Empire",
    air_date: "2025-10-29",
    episode: "S25E05",
    characters: [allCharacters[4], allCharacters[46], allCharacters[47]] // Butters, Stephen, Linda
  }),
  createDynamicMockEpisode({
    id: "6",
    name: "Towelie's Last Hit",
    air_date: "2025-11-05",
    episode: "S25E06",
    characters: [allCharacters[8], allCharacters[5], allCharacters[95]] // Towelie, Randy, Canadian Devil
  }),
  createDynamicMockEpisode({
    id: "7",
    name: "The Streaming Wars Part 3",
    air_date: "2025-11-12",
    episode: "S25E07",
    characters: [allCharacters[0], allCharacters[1], allCharacters[2], allCharacters[3]] // Main boys
  }),
  createDynamicMockEpisode({
    id: "8",
    name: "Casa Bonita Returns",
    air_date: "2025-11-19",
    episode: "S25E08",
    characters: [allCharacters[0], allCharacters[4], allCharacters[2]] // Cartman, Butters, Kyle
  }),
  createDynamicMockEpisode({
    id: "9",
    name: "Garrison's Identity Crisis",
    air_date: "2025-11-26",
    episode: "S25E09",
    characters: [allCharacters[6], allCharacters[85], allCharacters[86]] // Mr. Garrison, Big Gay Al, Mr. Slave
  }),
  createDynamicMockEpisode({
    id: "10",
    name: "The Underpants Gnomes Strike Back",
    air_date: "2025-12-03",
    episode: "S25E10",
    characters: [allCharacters[88], allCharacters[0], allCharacters[4]] // Underpants Gnomes, Cartman, Butters
  }),
  createDynamicMockEpisode({
    id: "11",
    name: "Token's NFT Adventure",
    air_date: "2025-12-10",
    episode: "S25E11",
    characters: [allCharacters[14], allCharacters[62], allCharacters[63]] // Token and parents
  }),
  createDynamicMockEpisode({
    id: "12",
    name: "The Member Berries Remember",
    air_date: "2025-12-17",
    episode: "S25E12",
    characters: [allCharacters[95], allCharacters[1], allCharacters[5]] // Member Berries, Stan, Randy
  }),
  createDynamicMockEpisode({
    id: "13",
    name: "Christmas with Mr. Hankey",
    air_date: "2025-12-24",
    episode: "S25E13",
    characters: [allCharacters[9], allCharacters[73], allCharacters[0]] // Mr. Hankey, Jesus, Cartman
  }),
  createDynamicMockEpisode({
    id: "14",
    name: "Craig and Tweek's Wedding",
    air_date: "2025-12-31",
    episode: "S25E14",
    characters: [allCharacters[11], allCharacters[12], allCharacters[85]] // Craig, Tweek, Big Gay Al
  }),
  createDynamicMockEpisode({
    id: "15",
    name: "ManBearPig's Revenge",
    air_date: "2026-01-07",
    episode: "S25E15",
    characters: [allCharacters[70], allCharacters[1], allCharacters[2], allCharacters[0]] // ManBearPig, Stan, Kyle, Cartman
  })
];

// Season 26 Episodes (16-30)
const season26 = [
  createDynamicMockEpisode({
    id: "16",
    name: "The Vaccination Special",
    air_date: "2026-02-01",
    episode: "S26E01",
    characters: [allCharacters[66], allCharacters[0], allCharacters[1], allCharacters[2]]
  }),
  createDynamicMockEpisode({
    id: "17",
    name: "Jimmy's Comedy Tour",
    air_date: "2026-02-08",
    episode: "S26E02",
    characters: [allCharacters[15], allCharacters[16], allCharacters[4]]
  }),
  createDynamicMockEpisode({
    id: "18",
    name: "The New Principal",
    air_date: "2026-02-15",
    episode: "S26E03",
    characters: [allCharacters[49], allCharacters[50], allCharacters[48]]
  }),
  createDynamicMockEpisode({
    id: "19",
    name: "Woodland Critter Christmas 2",
    air_date: "2026-02-22",
    episode: "S26E04",
    characters: [allCharacters[77], allCharacters[0], allCharacters[71]]
  }),
  createDynamicMockEpisode({
    id: "20",
    name: "Cartman's Crypto Scheme",
    air_date: "2026-03-01",
    episode: "S26E05",
    characters: [allCharacters[0], allCharacters[4], allCharacters[2]]
  }),
  createDynamicMockEpisode({
    id: "21",
    name: "Return to Casa Bonita",
    air_date: "2026-03-08",
    episode: "S26E06",
    characters: [allCharacters[0], allCharacters[4], allCharacters[1], allCharacters[2]]
  }),
  createDynamicMockEpisode({
    id: "22",
    name: "Satan's Sweet 16",
    air_date: "2026-03-15",
    episode: "S26E07",
    characters: [allCharacters[71], allCharacters[79], allCharacters[73]]
  }),
  createDynamicMockEpisode({
    id: "23",
    name: "Kenny's Space Adventure",
    air_date: "2026-03-22",
    episode: "S26E08",
    characters: [allCharacters[3], allCharacters[74], allCharacters[87]]
  }),
  createDynamicMockEpisode({
    id: "24",
    name: "The Goth Kids Return",
    air_date: "2026-03-29",
    episode: "S26E09",
    characters: [allCharacters[35], allCharacters[36], allCharacters[37], allCharacters[38]]
  }),
  createDynamicMockEpisode({
    id: "25",
    name: "Stan's Depression",
    air_date: "2026-04-05",
    episode: "S26E10",
    characters: [allCharacters[1], allCharacters[5], allCharacters[40]]
  }),
  createDynamicMockEpisode({
    id: "26",
    name: "The Sexual Harassment Panda Strikes Back",
    air_date: "2026-04-12",
    episode: "S26E11",
    characters: [allCharacters[81], allCharacters[49], allCharacters[6]]
  }),
  createDynamicMockEpisode({
    id: "27",
    name: "Clyde's Dating Service",
    air_date: "2026-04-19",
    episode: "S26E12",
    characters: [allCharacters[13], allCharacters[17], allCharacters[18]]
  }),
  createDynamicMockEpisode({
    id: "28",
    name: "The Return of AWESOM-O",
    air_date: "2026-04-26",
    episode: "S26E13",
    characters: [allCharacters[0], allCharacters[98], allCharacters[4]]
  }),
  createDynamicMockEpisode({
    id: "29",
    name: "Canadian Invasion",
    air_date: "2026-05-03",
    episode: "S26E14",
    characters: [allCharacters[92], allCharacters[93], allCharacters[94]]
  }),
  createDynamicMockEpisode({
    id: "30",
    name: "The New Pandemic",
    air_date: "2026-05-10",
    episode: "S26E15",
    characters: [allCharacters[66], allCharacters[0], allCharacters[1], allCharacters[2]]
  })
];

// Season 27 Episodes (31-45)
const season27 = [
  createDynamicMockEpisode({
    id: "31",
    name: "Cartman's Metaverse",
    air_date: "2026-09-01",
    episode: "S27E01",
    characters: [allCharacters[0], allCharacters[97], allCharacters[98]]
  }),
  createDynamicMockEpisode({
    id: "32",
    name: "The New Teacher",
    air_date: "2026-09-08",
    episode: "S27E02",
    characters: [allCharacters[6], allCharacters[48], allCharacters[49]]
  }),
  createDynamicMockEpisode({
    id: "33",
    name: "Butters' NFT Empire Collapses",
    air_date: "2026-09-15",
    episode: "S27E03",
    characters: [allCharacters[4], allCharacters[46], allCharacters[0]]
  }),
  createDynamicMockEpisode({
    id: "34",
    name: "Randy's Last Tegridy",
    air_date: "2026-09-22",
    episode: "S27E04",
    characters: [allCharacters[5], allCharacters[40], allCharacters[1]]
  }),
  createDynamicMockEpisode({
    id: "35",
    name: "Token's Identity Crisis",
    air_date: "2026-09-29",
    episode: "S27E05",
    characters: [allCharacters[14], allCharacters[62], allCharacters[63]]
  }),
  createDynamicMockEpisode({
    id: "36",
    name: "The PC Babies Graduate",
    air_date: "2026-10-06",
    episode: "S27E06",
    characters: [allCharacters[49], allCharacters[50], allCharacters[96]]
  }),
  createDynamicMockEpisode({
    id: "37",
    name: "Kenny's 101st Death",
    air_date: "2026-10-13",
    episode: "S27E07",
    characters: [allCharacters[3], allCharacters[76], allCharacters[71]]
  }),
  createDynamicMockEpisode({
    id: "38",
    name: "The Return of Chef's Ghost",
    air_date: "2026-10-20",
    episode: "S27E08",
    characters: [allCharacters[7], allCharacters[0], allCharacters[1], allCharacters[2]]
  }),
  createDynamicMockEpisode({
    id: "39",
    name: "Halloween Special",
    air_date: "2026-10-27",
    episode: "S27E09",
    characters: [allCharacters[77], allCharacters[71], allCharacters[75]]
  }),
  createDynamicMockEpisode({
    id: "40",
    name: "City People vs. Country People",
    air_date: "2026-11-03",
    episode: "S27E10",
    characters: [allCharacters[5], allCharacters[54], allCharacters[55]]
  }),
  createDynamicMockEpisode({
    id: "41",
    name: "The Marshes Split Up",
    air_date: "2026-11-10",
    episode: "S27E11",
    characters: [allCharacters[1], allCharacters[5], allCharacters[40]]
  }),
  createDynamicMockEpisode({
    id: "42",
    name: "South Park: The Next Generation",
    air_date: "2026-11-17",
    episode: "S27E12",
    characters: [allCharacters[96], allCharacters[0], allCharacters[1]]
  }),
  createDynamicMockEpisode({
    id: "43",
    name: "The Battle for Tegridy Farms",
    air_date: "2026-11-24",
    episode: "S27E13",
    characters: [allCharacters[5], allCharacters[8], allCharacters[95]]
  }),
  createDynamicMockEpisode({
    id: "44",
    name: "Christmas Special 2026",
    air_date: "2026-12-01",
    episode: "S27E14",
    characters: [allCharacters[9], allCharacters[73], allCharacters[74]]
  }),
  createDynamicMockEpisode({
    id: "45",
    name: "The End of an Era",
    air_date: "2026-12-08",
    episode: "S27E15",
    characters: [allCharacters[0], allCharacters[1], allCharacters[2], allCharacters[3]]
  })
];

// Special Episodes (46-50)
const specialEpisodes = [
  createDynamicMockEpisode({
    id: "46",
    name: "Post COVID: 2027",
    air_date: "2026-12-25",
    episode: "SPCL01",
    characters: [...allCharacters.slice(0, 10), ...allCharacters.slice(40, 50)]
  }),
  createDynamicMockEpisode({
    id: "47",
    name: "The Pandemic Special 2027",
    air_date: "2027-01-01",
    episode: "SPCL02",
    characters: [...allCharacters.slice(0, 5), allCharacters[66], allCharacters[49]]
  }),
  createDynamicMockEpisode({
    id: "48",
    name: "South Park: 30 Years Later",
    air_date: "2027-02-01",
    episode: "SPCL03",
    characters: [...allCharacters.slice(0, 10), ...allCharacters.slice(90, 95)]
  }),
  createDynamicMockEpisode({
    id: "49",
    name: "The Return of the Return of ManBearPig",
    air_date: "2027-03-01",
    episode: "SPCL04",
    characters: [allCharacters[70], ...allCharacters.slice(0, 4)]
  }),
  createDynamicMockEpisode({
    id: "50",
    name: "South Park: The Final Episode",
    air_date: "2027-04-01",
    episode: "SPCL05",
    characters: allCharacters.slice(0, 20)
  })
];

export const allEpisodes = [
  ...season25,
  ...season26,
  ...season27,
  ...specialEpisodes
];