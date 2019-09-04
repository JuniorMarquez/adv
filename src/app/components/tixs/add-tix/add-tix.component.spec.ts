import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTixComponent } from './add-tix.component';

describe('AddTixComponent', () => {
  let component: AddTixComponent;
  let fixture: ComponentFixture<AddTixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
