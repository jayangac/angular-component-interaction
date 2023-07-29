import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnChangesComponent } from './parent-on-changes.component';

describe('ParentOnChangesComponent', () => {
  let component: ParentOnChangesComponent;
  let fixture: ComponentFixture<ParentOnChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOnChangesComponent]
    });
    fixture = TestBed.createComponent(ParentOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
