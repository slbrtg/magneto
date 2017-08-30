export class Torrent {
  seeders = 0;
  leechers = 0;
  constructor(  public title: string,
                public album: string,
                public author: string,
                public category: string,
                public description: string,
                public filetype: string,
                public dimensions: string,
                public systems: string,
                public filesize: number,
                public magnet: string) {
                }
}
