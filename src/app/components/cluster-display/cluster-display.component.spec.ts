import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterDisplayComponent } from './cluster-display.component';

describe('ClusterDisplayComponent', () => {
  let component: ClusterDisplayComponent;
  let fixture: ComponentFixture<ClusterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
