export const paths = {
  home: {
    getHref: () => '/',
  },
  characters: {
    getHref: (page?:string|number) => '/characters' + (page ? `?page=${page}` : ''),
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
    getHref: (page?:string|number) => '/locations' + (page ? `?page=${page}` : ''),
  },
  location: {
    getHref: (id:string|number) => '/locations/' + id,
  },
} as const;
