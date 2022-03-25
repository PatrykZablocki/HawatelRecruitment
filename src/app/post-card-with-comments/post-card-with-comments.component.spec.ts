import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardWithCommentsComponent } from './post-card-with-comments.component';

describe('PostCardWithCommentsComponent', () => {
  let component: PostCardWithCommentsComponent;
  let fixture: ComponentFixture<PostCardWithCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardWithCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
