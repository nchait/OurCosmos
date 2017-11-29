import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPicturesComponent } from './get-pictures.component';

describe('GetPicturesComponent', () => {
  let component: GetPicturesComponent;
  let fixture: ComponentFixture<GetPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
