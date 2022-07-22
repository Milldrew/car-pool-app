import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedBaseComponent } from './news-feed-base.component';

describe('NewsFeedBaseComponent', () => {
  let component: NewsFeedBaseComponent;
  let fixture: ComponentFixture<NewsFeedBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
