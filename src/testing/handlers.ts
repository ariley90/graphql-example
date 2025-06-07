import {
  mockCharacterQuery,
  mockCharactersQuery,
  mockEpisodeQuery,
  mockEpisodesQuery,
  mockLocationQuery,
  mockLocationsQuery,
} from "@/testing/generated/mswHandlers";
import { HttpResponse } from "msw";
import { createDynamicMockQuery } from "./generated/dynnamicMockDataCreator";

const mocks = createDynamicMockQuery();

export const handlers = [
  mockCharacterQuery(() => {
        return HttpResponse.json({
          data: mocks,
        });
  }),
  mockCharactersQuery(() => {
    return HttpResponse.json({
      data: mocks,
    });
  }),
  mockEpisodeQuery(() => {
    return HttpResponse.json({
      data: mocks,
    });
  }),
  mockEpisodesQuery(() => {
    return HttpResponse.json({
      data: mocks,
    });
  }),
  mockLocationQuery(() => {
    return HttpResponse.json({
      data: mocks,
    });
  }),
  mockLocationsQuery(() => {
    return HttpResponse.json({
      data: mocks,
    });
  }),
];
