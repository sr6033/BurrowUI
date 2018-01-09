import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterDisplayListComponent } from './cluster-display-list.component';

describe('ClusterDisplayListComponent', () => {
  let component: ClusterDisplayListComponent;
  let fixture: ComponentFixture<ClusterDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
