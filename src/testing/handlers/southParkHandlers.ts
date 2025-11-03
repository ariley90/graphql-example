import {
  mockCharacterQuery,
  mockCharactersQuery,
  mockEpisodeQuery,
  mockEpisodesQuery,
  mockLocationQuery,
  mockLocationsQuery,
} from "@/testing/generated/mswHandlers";
import { HttpResponse } from "msw";
import { 
  allCharacters as characters, 
  allLocations as locations, 
  allEpisodes as episodes
} from "../realisticMockData/index";
import type { Character, Episode, FilterCharacter, FilterEpisode, FilterLocation, Location } from "@/generated/types";

const ITEMS_PER_PAGE = 20;

// Helper function to paginate results
const paginateResults = <T>(items: T[], page?: number | null): T[] => {
  if (!page) return items.slice(0, ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  return items.slice(start, start + ITEMS_PER_PAGE);
};

// Helper function to create info object
const createInfoObject = (totalItems: number, currentPage?: number | null) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const page = currentPage || 1;
  
  return {
    count: totalItems,
    pages: totalPages,
    next: page < totalPages ? page + 1 : null,
    prev: page > 1 ? page - 1 : null
  };
};

export const handlers = [
  // Character Handlers
  mockCharacterQuery(({ variables }) => {
    const character = characters.find((c: Character) => c.id === variables?.characterId);
    
    if (character) {
      return HttpResponse.json({
        data: {
          character
        }
      });
    }

    return HttpResponse.json({
      errors: [{
        message: `Character with id ${variables?.characterId} not found`,
        extensions: {
          code: "NOT_FOUND"
        }
      }]
    }, { status: 404 });
  }),

  mockCharactersQuery(({ variables }) => {
    let filteredCharacters = [...characters];

    // Apply filters if they exist
    if (variables && 'filter' in variables) {
      const { name, status, species, type, gender } = variables.filter as FilterCharacter;
      
      filteredCharacters = filteredCharacters.filter(char => {
        return (!name || char.name?.toLowerCase().includes(name.toLowerCase())) &&
               (!status || char.status === status) &&
               (!species || char.species === species) &&
               (!type || char.type === type) &&
               (!gender || char.gender === gender);
      });
    }

    const paginatedCharacters = paginateResults(filteredCharacters, variables?.page);
    const info = createInfoObject(filteredCharacters.length, variables?.page);

    return HttpResponse.json({
      data: {
        characters: {
          info,
          results: paginatedCharacters
        }
      }
    });
  }),

  // Episode Handlers
  mockEpisodeQuery(({ variables }) => {
    const episode = episodes.find((e: Episode) => e.id === variables?.episodeId);
    
    if (episode) {
      return HttpResponse.json({
        data: {
          episode
        }
      });
    }

    return HttpResponse.json({
      errors: [{
        message: `Episode with id ${variables?.episodeId} not found`,
        extensions: {
          code: "NOT_FOUND"
        }
      }]
    }, { status: 404 });
  }),

  mockEpisodesQuery(({ variables }) => {
    let filteredEpisodes = [...episodes];

    // Apply filters if they exist
    if (variables && 'filter' in variables) {
      const { name, episode } = variables.filter as FilterEpisode;
      
      filteredEpisodes = filteredEpisodes.filter(ep => {
        return (!name || ep.name?.toLowerCase().includes(name.toLowerCase())) &&
               (!episode || ep.episode === episode);
      });
    }

    const paginatedEpisodes = paginateResults(filteredEpisodes, variables?.page);
    const info = createInfoObject(filteredEpisodes.length, variables?.page);

    return HttpResponse.json({
      data: {
        episodes: {
          info,
          results: paginatedEpisodes
        }
      }
    });
  }),

  // Location Handlers
  mockLocationQuery(({ variables }) => {
    const location = locations.find((l: Location) => l.id === variables?.locationId);
    
    if (location) {
      return HttpResponse.json({
        data: {
          location
        }
      });
    }

    return HttpResponse.json({
      errors: [{
        message: `Location with id ${variables?.locationId} not found`,
        extensions: {
          code: "NOT_FOUND"
        }
      }]
    }, { status: 404 });
  }),

  mockLocationsQuery(({ variables }) => {
    let filteredLocations = [...locations];

    // Apply filters if they exist
    if (variables && 'filter' in variables) {
      const { name, type, dimension } = variables.filter as FilterLocation;
      
      filteredLocations = filteredLocations.filter(loc => {
        return (!name || loc.name?.toLowerCase().includes(name.toLowerCase())) &&
               (!type || loc.type === type) &&
               (!dimension || loc.dimension === dimension);
      });
    }

    const paginatedLocations = paginateResults(filteredLocations, variables?.page);
    const info = createInfoObject(filteredLocations.length, variables?.page);

    return HttpResponse.json({
      data: {
        locations: {
          info,
          results: paginatedLocations
        }
      }
    });
  })
];