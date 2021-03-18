import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPokerRootComponent } from './planning-poker-root.component';

describe('PlanningPokerRootComponent', () => {
  let component: PlanningPokerRootComponent;
  let fixture: ComponentFixture<PlanningPokerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningPokerRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningPokerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
