export class Torrent {
  seeders = 0;
  leechers = 0;
  album = null;
  author = null;
  dimensions = null;
  image = 'default';
  constructor(  public title: string,
                public category: string,
                public description: string,
                public filetype: string,
                public systems: string,
                public filesize: string,
                public magnet: string) {
                }
}
