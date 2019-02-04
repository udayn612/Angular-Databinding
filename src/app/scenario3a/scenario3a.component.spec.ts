import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3aComponent } from './scenario3a.component';

describe('Scenario3aComponent', () => {
  let component: Scenario3aComponent;
  let fixture: ComponentFixture<Scenario3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
