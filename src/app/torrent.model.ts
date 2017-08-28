export class Torrent {
  seeders = 0;
  leechers = 0;
  constructor(public name: string, public description: string, public category: string, public magnet: string){

  }

}
