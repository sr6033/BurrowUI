import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDisplayListComponent } from './topic-display-list.component';

describe('TopicDisplayListComponent', () => {
  let component: TopicDisplayListComponent;
  let fixture: ComponentFixture<TopicDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
