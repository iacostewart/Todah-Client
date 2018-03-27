import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLogedInComponent } from './is-loged-in.component';

describe('IsLogedInComponent', () => {
  let component: IsLogedInComponent;
  let fixture: ComponentFixture<IsLogedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsLogedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsLogedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
