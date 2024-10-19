import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCoversComponent } from './album-covers.component';

describe('AlbumCoversComponent', () => {
  let component: AlbumCoversComponent;
  let fixture: ComponentFixture<AlbumCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumCoversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
