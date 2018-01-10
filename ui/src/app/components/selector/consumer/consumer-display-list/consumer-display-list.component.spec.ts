import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDisplayListComponent } from './consumer-display-list.component';

describe('ConsumerDisplayListComponent', () => {
  let component: ConsumerDisplayListComponent;
  let fixture: ComponentFixture<ConsumerDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
