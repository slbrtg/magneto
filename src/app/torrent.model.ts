export class Torrent {
  seeder: number = 1;

  constructor(public name: string, public description: string, public magnet: string){
    
  }
}
