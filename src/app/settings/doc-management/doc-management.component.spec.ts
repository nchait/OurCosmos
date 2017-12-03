import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManagementComponent } from './doc-management.component';

describe('DocManagementComponent', () => {
  let component: DocManagementComponent;
  let fixture: ComponentFixture<DocManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
