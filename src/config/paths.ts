export const paths = {
  home: {
    getHref: () => '/',
  },
  characters: {
    getHref: () => '/characters',
  },
  character: {
    getHref: (id:string|number) => '/characters/' + id,
  },
  episodes: {
    getHref: (page?:string|number) => '/episodes' + (page ? `?page=${page}` : ''),
  },
  episode: {
    getHref: (id:string|number) => '/episodes/' + id,
  },
  locations: {
    getHref: () => '/locations',
  },
  location: {
    getHref: (id:string|number) => '/locations/' + id,
  },
} as const;
