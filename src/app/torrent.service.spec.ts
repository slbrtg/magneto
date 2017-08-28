import { TestBed, inject } from '@angular/core/testing';

import { TorrentService } from './torrent.service';

describe('TorrentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorrentService]
    });
  });

  it('should ...', inject([TorrentService], (service: TorrentService) => {
    expect(service).toBeTruthy();
  }));
});
