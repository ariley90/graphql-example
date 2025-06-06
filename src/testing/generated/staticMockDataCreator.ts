/* eslint-disable @typescript-eslint/no-unused-vars */
import { Character, Characters, Episode, Episodes, FilterCharacter, FilterEpisode, FilterLocation, Info, Location, Locations, Query, CacheControlScope } from '@/generated/types';

export const createStaticMockCharacter = (overrides?: Partial<Character>): Character => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'laboriosam',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [createStaticMockEpisode(), createStaticMockEpisode(), createStaticMockEpisode()],
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'pariatur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b27edb72-7fd6-49c4-898a-d53727bbfccf',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'animadverto',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createStaticMockLocation(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'beatae',
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : createStaticMockLocation(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'tabgo',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'tristis',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'audio',
    };
};

export const createStaticMockCharacters = (overrides?: Partial<Characters>): Characters => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createStaticMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createStaticMockCharacter(), createStaticMockCharacter(), createStaticMockCharacter()],
    };
};

export const createStaticMockEpisode = (overrides?: Partial<Episode>): Episode => {
    return {
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : 'dignissimos',
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [createStaticMockCharacter(), createStaticMockCharacter(), createStaticMockCharacter()],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'ventus',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'calcar',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7d55cfbc-b432-4e88-a086-661f705990e6',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'vulticulus',
    };
};

export const createStaticMockEpisodes = (overrides?: Partial<Episodes>): Episodes => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createStaticMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createStaticMockEpisode(), createStaticMockEpisode(), createStaticMockEpisode()],
    };
};

export const createStaticMockFilterCharacter = (overrides?: Partial<FilterCharacter>): FilterCharacter => {
    return {
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'ventus',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'confero',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'subseco',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'tamisium',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'tego',
    };
};

export const createStaticMockFilterEpisode = (overrides?: Partial<FilterEpisode>): FilterEpisode => {
    return {
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'asper',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odio',
    };
};

export const createStaticMockFilterLocation = (overrides?: Partial<FilterLocation>): FilterLocation => {
    return {
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'tendo',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'comprehendo',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'placeat',
    };
};

export const createStaticMockInfo = (overrides?: Partial<Info>): Info => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 4434,
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 5511,
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : 6704,
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : 8830,
    };
};

export const createStaticMockLocation = (overrides?: Partial<Location>): Location => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'commodi',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'eaque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'afe52c08-ad42-41df-a93d-4264c80b41fe',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sublime',
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [createStaticMockCharacter(), createStaticMockCharacter(), createStaticMockCharacter()],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'adhuc',
    };
};

export const createStaticMockLocations = (overrides?: Partial<Locations>): Locations => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createStaticMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createStaticMockLocation(), createStaticMockLocation(), createStaticMockLocation()],
    };
};

export const createStaticMockQuery = (overrides?: Partial<Query>): Query => {
    return {
        character: overrides && overrides.hasOwnProperty('character') ? overrides.character! : createStaticMockCharacter(),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : createStaticMockCharacters(),
        charactersByIds: overrides && overrides.hasOwnProperty('charactersByIds') ? overrides.charactersByIds! : [createStaticMockCharacter(), createStaticMockCharacter(), createStaticMockCharacter()],
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : createStaticMockEpisode(),
        episodes: overrides && overrides.hasOwnProperty('episodes') ? overrides.episodes! : createStaticMockEpisodes(),
        episodesByIds: overrides && overrides.hasOwnProperty('episodesByIds') ? overrides.episodesByIds! : [createStaticMockEpisode(), createStaticMockEpisode(), createStaticMockEpisode()],
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createStaticMockLocation(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : createStaticMockLocations(),
        locationsByIds: overrides && overrides.hasOwnProperty('locationsByIds') ? overrides.locationsByIds! : [createStaticMockLocation(), createStaticMockLocation(), createStaticMockLocation()],
    };
};
