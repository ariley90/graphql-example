/* eslint-disable @typescript-eslint/no-unused-vars */
import { Character, Characters, Episode, Episodes, FilterCharacter, FilterEpisode, FilterLocation, Info, Location, Locations, Query, CacheControlScope } from './types';

export const createMockCharacter = (overrides?: Partial<Character>): Character => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'laboriosam',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [createMockEpisode(), createMockEpisode(), createMockEpisode()],
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'pariatur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b27edb72-7fd6-49c4-898a-d53727bbfccf',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'animadverto',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createMockLocation(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'beatae',
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : createMockLocation(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'tabgo',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'tristis',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'audio',
    };
};

export const createMockCharacters = (overrides?: Partial<Characters>): Characters => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createMockCharacter(), createMockCharacter(), createMockCharacter()],
    };
};

export const createMockEpisode = (overrides?: Partial<Episode>): Episode => {
    return {
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : 'dignissimos',
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [createMockCharacter(), createMockCharacter(), createMockCharacter()],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'ventus',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'calcar',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7d55cfbc-b432-4e88-a086-661f705990e6',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'vulticulus',
    };
};

export const createMockEpisodes = (overrides?: Partial<Episodes>): Episodes => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createMockEpisode(), createMockEpisode(), createMockEpisode()],
    };
};

export const createMockFilterCharacter = (overrides?: Partial<FilterCharacter>): FilterCharacter => {
    return {
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'ventus',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'confero',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'subseco',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'tamisium',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'tego',
    };
};

export const createMockFilterEpisode = (overrides?: Partial<FilterEpisode>): FilterEpisode => {
    return {
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'asper',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odio',
    };
};

export const createMockFilterLocation = (overrides?: Partial<FilterLocation>): FilterLocation => {
    return {
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'tendo',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'comprehendo',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'placeat',
    };
};

export const createMockInfo = (overrides?: Partial<Info>): Info => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 4434,
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 5511,
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : 6704,
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : 8830,
    };
};

export const createMockLocation = (overrides?: Partial<Location>): Location => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'commodi',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'eaque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'afe52c08-ad42-41df-a93d-4264c80b41fe',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sublime',
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [createMockCharacter(), createMockCharacter(), createMockCharacter()],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'adhuc',
    };
};

export const createMockLocations = (overrides?: Partial<Locations>): Locations => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createMockLocation(), createMockLocation(), createMockLocation()],
    };
};

export const createMockQuery = (overrides?: Partial<Query>): Query => {
    return {
        character: overrides && overrides.hasOwnProperty('character') ? overrides.character! : createMockCharacter(),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : createMockCharacters(),
        charactersByIds: overrides && overrides.hasOwnProperty('charactersByIds') ? overrides.charactersByIds! : [createMockCharacter(), createMockCharacter(), createMockCharacter()],
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : createMockEpisode(),
        episodes: overrides && overrides.hasOwnProperty('episodes') ? overrides.episodes! : createMockEpisodes(),
        episodesByIds: overrides && overrides.hasOwnProperty('episodesByIds') ? overrides.episodesByIds! : [createMockEpisode(), createMockEpisode(), createMockEpisode()],
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createMockLocation(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : createMockLocations(),
        locationsByIds: overrides && overrides.hasOwnProperty('locationsByIds') ? overrides.locationsByIds! : [createMockLocation(), createMockLocation(), createMockLocation()],
    };
};
