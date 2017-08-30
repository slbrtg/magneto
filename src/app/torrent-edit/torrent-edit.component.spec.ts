import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentEditComponent } from './torrent-edit.component';

describe('TorrentEditComponent', () => {
  let component: TorrentEditComponent;
  let fixture: ComponentFixture<TorrentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
