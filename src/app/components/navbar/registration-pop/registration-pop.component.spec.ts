import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPopComponent } from './registration-pop.component';

describe('RegistrationPopComponent', () => {
  let component: RegistrationPopComponent;
  let fixture: ComponentFixture<RegistrationPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
