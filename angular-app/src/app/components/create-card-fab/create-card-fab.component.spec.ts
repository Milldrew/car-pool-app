import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardFabComponent } from './create-card-fab.component';

describe('CreateCardFabComponent', () => {
  let component: CreateCardFabComponent;
  let fixture: ComponentFixture<CreateCardFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
