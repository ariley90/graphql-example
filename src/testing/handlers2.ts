import {
  mockCharacterQuery,
  mockCharactersQuery,
  mockEpisodeQuery,
  mockEpisodesQuery,
  mockLocationQuery,
  mockLocationsQuery,
} from "@/testing/generated/mswHandlers";
import { HttpResponse } from "msw";
import { characters, charactersQuery, episodes, episodesQuery, locations, locationsQuery } from "./setupData";


export const handlers = [
  mockCharacterQuery(({variables}) => {
    const characterData = characters.find(c=> c.id === variables?.characterId);
    if (characterData) {
        return HttpResponse.json({
          data: {
            character: characterData
          },
        });
    }
        return HttpResponse.json({
          errors: [
            {
              message: `Character with id ${variables?.characterId} not found`,
              extensions: {
                code: "NOT_FOUND",
              },
            },
          ]
        });
  }),
  mockCharactersQuery(() => {
    return HttpResponse.json({
      data: {
            characters: charactersQuery
          }
    });
  }),
  mockEpisodeQuery(({variables}) => {
     const episodeData = episodes.find(c=> c.id === variables?.episodeId);
    if (episodeData) {
        return HttpResponse.json({
          data: {
            episode: episodeData
          },
        });
    }
        return HttpResponse.json({
          errors: [
            {
              message: `Episode with id ${variables?.episodeId} not found`,
              extensions: {
                code: "NOT_FOUND",
              },
            },
          ]
        });
  }),
  mockEpisodesQuery(() => {
    return HttpResponse.json({
      data: {
        episodes: episodesQuery,
      },
    });
  }),
  mockLocationQuery(({variables}) => {
     const locationData = locations.find(c=> c.id === variables?.locationId);
    if (locationData) {
        return HttpResponse.json({
          data: {
            location: locationData
          },
        });
    }
        return HttpResponse.json({
          errors: [
            {
              message: `Location with id ${variables?.locationId} not found`,
              extensions: {
                code: "NOT_FOUND",
              },
            },
          ]
        });
  }),
  mockLocationsQuery(() => {
    return HttpResponse.json({
      data: {
        locations: locationsQuery
      },
    });
  }),
];
