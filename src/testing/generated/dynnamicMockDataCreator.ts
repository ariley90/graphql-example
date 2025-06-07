/* eslint-disable @typescript-eslint/no-unused-vars */
import { fakerEN as faker } from '@faker-js/faker';
import { Character, Characters, Episode, Episodes, FilterCharacter, FilterEpisode, FilterLocation, Info, Location, Locations, Query, CacheControlScope } from '@/generated/types';

faker.seed(0);

export const createDynamicMockCharacter = (overrides?: Partial<Character>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Character' } & Character => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Character');
    return {
        __typename: 'Character',
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit)],
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : faker['image']['urlPicsumPhotos'](),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker['person']['fullName'](),
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : faker['helpers']['arrayElement'](...[["Human","Alien","Robot","Mythological Creature"]]),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : faker['helpers']['arrayElement'](...[["Alive","Dead","unknown"]]),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockCharacters = (overrides?: Partial<Characters>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Characters' } & Characters => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Characters');
    return {
        __typename: 'Characters',
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : createDynamicMockInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit)],
    };
};

export const createDynamicMockEpisode = (overrides?: Partial<Episode>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Episode' } & Episode => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Episode');
    return {
        __typename: 'Episode',
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : faker.lorem.word(),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit)],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
    };
};

export const createDynamicMockEpisodes = (overrides?: Partial<Episodes>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Episodes' } & Episodes => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Episodes');
    return {
        __typename: 'Episodes',
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : createDynamicMockInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit)],
    };
};

export const createDynamicMockFilterCharacter = (overrides?: Partial<FilterCharacter>, _relationshipsToOmit: Set<string> = new Set()): FilterCharacter => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterCharacter');
    return {
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : faker.lorem.word(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : faker.lorem.word(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockFilterEpisode = (overrides?: Partial<FilterEpisode>, _relationshipsToOmit: Set<string> = new Set()): FilterEpisode => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterEpisode');
    return {
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
    };
};

export const createDynamicMockFilterLocation = (overrides?: Partial<FilterLocation>, _relationshipsToOmit: Set<string> = new Set()): FilterLocation => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterLocation');
    return {
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : faker.lorem.word(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockInfo = (overrides?: Partial<Info>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Info' } & Info => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Info');
    return {
        __typename: 'Info',
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : faker.number.int({ min: 0, max: 9999 }),
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : faker.number.int({ min: 0, max: 9999 }),
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : faker.number.int({ min: 0, max: 9999 }),
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : faker.number.int({ min: 0, max: 9999 }),
    };
};

export const createDynamicMockLocation = (overrides?: Partial<Location>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Location' } & Location => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Location');
    return {
        __typename: 'Location',
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : faker.lorem.word(),
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.string.uuid(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : faker.lorem.word(),
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit)],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : faker.lorem.word(),
    };
};

export const createDynamicMockLocations = (overrides?: Partial<Locations>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Locations' } & Locations => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Locations');
    return {
        __typename: 'Locations',
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : createDynamicMockInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit), relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit), relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit)],
    };
};

export const createDynamicMockQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Query' } & Query => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Query');
    return {
        __typename: 'Query',
        character: overrides && overrides.hasOwnProperty('character') ? overrides.character! : relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : relationshipsToOmit.has('Characters') ? {} as Characters : createDynamicMockCharacters({}, relationshipsToOmit),
        charactersByIds: overrides && overrides.hasOwnProperty('charactersByIds') ? overrides.charactersByIds! : [relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit), relationshipsToOmit.has('Character') ? {} as Character : createDynamicMockCharacter({}, relationshipsToOmit)],
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit),
        episodes: overrides && overrides.hasOwnProperty('episodes') ? overrides.episodes! : relationshipsToOmit.has('Episodes') ? {} as Episodes : createDynamicMockEpisodes({}, relationshipsToOmit),
        episodesByIds: overrides && overrides.hasOwnProperty('episodesByIds') ? overrides.episodesByIds! : [relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit), relationshipsToOmit.has('Episode') ? {} as Episode : createDynamicMockEpisode({}, relationshipsToOmit)],
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.has('Locations') ? {} as Locations : createDynamicMockLocations({}, relationshipsToOmit),
        locationsByIds: overrides && overrides.hasOwnProperty('locationsByIds') ? overrides.locationsByIds! : [relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit), relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit), relationshipsToOmit.has('Location') ? {} as Location : createDynamicMockLocation({}, relationshipsToOmit)],
    };
};

export const seedMocks = (seed: number) => faker.seed(seed);
