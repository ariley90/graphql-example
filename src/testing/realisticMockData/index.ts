import { createDynamicMockInfo, createDynamicMockCharacters, createDynamicMockLocations, createDynamicMockEpisodes } from "../generated/dynnamicMockDataCreator";
import { allCharacters } from "./characters";
import { allLocations } from "./locations";
import { allEpisodes } from "./episodes";

// Create info objects for pagination
const charactersInfo = createDynamicMockInfo({
  count: allCharacters.length,
  pages: Math.ceil(allCharacters.length / 20),
  next: 2,
  prev: null
});

const locationsInfo = createDynamicMockInfo({
  count: allLocations.length,
  pages: Math.ceil(allLocations.length / 20),
  next: 2,
  prev: null
});

const episodesInfo = createDynamicMockInfo({
  count: allEpisodes.length,
  pages: Math.ceil(allEpisodes.length / 20),
  next: 2,
  prev: null
});

// Create the query results
export const charactersQuery = createDynamicMockCharacters({
  info: charactersInfo,
  results: allCharacters,
});

export const locationsQuery = createDynamicMockLocations({
  info: locationsInfo,
  results: allLocations,
});

export const episodesQuery = createDynamicMockEpisodes({
  info: episodesInfo,
  results: allEpisodes,
});

// Export everything for individual access
export {
  allCharacters,
  allLocations,
  allEpisodes
};