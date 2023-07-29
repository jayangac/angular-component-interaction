import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnChangesComponent } from './child-on-changes.component';

describe('ChildOnChangesComponent', () => {
  let component: ChildOnChangesComponent;
  let fixture: ComponentFixture<ChildOnChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOnChangesComponent]
    });
    fixture = TestBed.createComponent(ChildOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
