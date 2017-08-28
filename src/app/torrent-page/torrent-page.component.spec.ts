import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentPageComponent } from './torrent-page.component';

describe('TorrentPageComponent', () => {
  let component: TorrentPageComponent;
  let fixture: ComponentFixture<TorrentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
