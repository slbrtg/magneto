import { TestBed, inject } from '@angular/core/testing';

import { TorrentserviceService } from './torrentservice.service';

describe('TorrentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorrentserviceService]
    });
  });

  it('should ...', inject([TorrentserviceService], (service: TorrentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
