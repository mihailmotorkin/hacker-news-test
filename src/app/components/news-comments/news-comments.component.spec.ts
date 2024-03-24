import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentsComponent } from './news-comments.component';

describe('NewsCommentsComponent', () => {
  let component: NewsCommentsComponent;
  let fixture: ComponentFixture<NewsCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCommentsComponent]
    });
    fixture = TestBed.createComponent(NewsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
