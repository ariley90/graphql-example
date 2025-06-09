import {
  createDynamicMockCharacter,
  createDynamicMockCharacters,
  createDynamicMockEpisode,
  createDynamicMockEpisodes,
  createDynamicMockInfo,
  createDynamicMockLocation,
  createDynamicMockLocations,
} from "./generated/dynnamicMockDataCreator";

export const characters = [
  createDynamicMockCharacter({ id: "1" }),
  createDynamicMockCharacter({ id: "2" }),
  createDynamicMockCharacter({ id: "3" }),
  createDynamicMockCharacter({ id: "4" }),
];
const charactersInfo = createDynamicMockInfo({
  count: characters.length,
  pages: 1,
  next:null,
  prev:null
});

export const charactersQuery = createDynamicMockCharacters({
  info: charactersInfo,
  results: characters,
});

export const locations = [
  createDynamicMockLocation({
    id: "1",
    residents: [characters[0], characters[1]],
  }),
  createDynamicMockLocation({
    id: "2",
    residents: [characters[2], characters[3]],
  }),
  createDynamicMockLocation({ id: "3" }),
];

const locationsInfo = createDynamicMockInfo({
  count: locations.length,
  pages: 1,
  next:null,
  prev:null
});

export const locationsQuery = createDynamicMockLocations({
  info: locationsInfo,
  results: locations,
});


export const episodes = [
  createDynamicMockEpisode({
    id: "1",
    characters: [characters[0], characters[1]],
  }),
  createDynamicMockEpisode({
    id: "2",
    characters: [characters[2], characters[3]],
  }),
  createDynamicMockEpisode({
    id: "3",
    characters: [characters[0], characters[2]],
  }),
  createDynamicMockEpisode({
    id: "4",
    characters: [characters[1], characters[3]],
  }),
];

const episodesInfo = createDynamicMockInfo({
  count: episodes.length,
  pages: 1,
  next:null,
  prev:null
});

export const episodesQuery = createDynamicMockEpisodes({
  info: episodesInfo,
  results: episodes,
});
