/* eslint-disable @typescript-eslint/no-unused-vars */
import { fakerEN as faker } from '@faker-js/faker';
import { Character, Characters, Episode, Episodes, FilterCharacter, FilterEpisode, FilterLocation, Info, Location, Locations, Query, CacheControlScope } from '@/generated/types';

faker.seed(0);

export const createDynamicMockCharacter = (overrides?: Partial<Character>): Character => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [createDynamicMockEpisode(), createDynamicMockEpisode(), createDynamicMockEpisode()],
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : faker.lorem.word(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createDynamicMockLocation(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : createDynamicMockLocation(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : faker.lorem.word(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : faker.lorem.word(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockCharacters = (overrides?: Partial<Characters>): Characters => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createDynamicMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createDynamicMockCharacter(), createDynamicMockCharacter(), createDynamicMockCharacter()],
    };
};

export const createDynamicMockEpisode = (overrides?: Partial<Episode>): Episode => {
    return {
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : faker.lorem.word(),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [createDynamicMockCharacter(), createDynamicMockCharacter(), createDynamicMockCharacter()],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
    };
};

export const createDynamicMockEpisodes = (overrides?: Partial<Episodes>): Episodes => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createDynamicMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createDynamicMockEpisode(), createDynamicMockEpisode(), createDynamicMockEpisode()],
    };
};

export const createDynamicMockFilterCharacter = (overrides?: Partial<FilterCharacter>): FilterCharacter => {
    return {
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : faker.lorem.word(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : faker.lorem.word(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockFilterEpisode = (overrides?: Partial<FilterEpisode>): FilterEpisode => {
    return {
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
    };
};

export const createDynamicMockFilterLocation = (overrides?: Partial<FilterLocation>): FilterLocation => {
    return {
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockInfo = (overrides?: Partial<Info>): Info => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : faker.number.int({ min: 0, max: 9999 }),
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : faker.number.int({ min: 0, max: 9999 }),
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : faker.number.int({ min: 0, max: 9999 }),
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : faker.number.int({ min: 0, max: 9999 }),
    };
};

export const createDynamicMockLocation = (overrides?: Partial<Location>): Location => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [createDynamicMockCharacter(), createDynamicMockCharacter(), createDynamicMockCharacter()],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockLocations = (overrides?: Partial<Locations>): Locations => {
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : createDynamicMockInfo(),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [createDynamicMockLocation(), createDynamicMockLocation(), createDynamicMockLocation()],
    };
};

export const createDynamicMockQuery = (overrides?: Partial<Query>): Query => {
    return {
        character: overrides && overrides.hasOwnProperty('character') ? overrides.character! : createDynamicMockCharacter(),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : createDynamicMockCharacters(),
        charactersByIds: overrides && overrides.hasOwnProperty('charactersByIds') ? overrides.charactersByIds! : [createDynamicMockCharacter(), createDynamicMockCharacter(), createDynamicMockCharacter()],
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : createDynamicMockEpisode(),
        episodes: overrides && overrides.hasOwnProperty('episodes') ? overrides.episodes! : createDynamicMockEpisodes(),
        episodesByIds: overrides && overrides.hasOwnProperty('episodesByIds') ? overrides.episodesByIds! : [createDynamicMockEpisode(), createDynamicMockEpisode(), createDynamicMockEpisode()],
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : createDynamicMockLocation(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : createDynamicMockLocations(),
        locationsByIds: overrides && overrides.hasOwnProperty('locationsByIds') ? overrides.locationsByIds! : [createDynamicMockLocation(), createDynamicMockLocation(), createDynamicMockLocation()],
    };
};

export const seedMocks = (seed: number) => faker.seed(seed);
