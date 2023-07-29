import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTwoWayBindingsComponent } from './split-two-way-bindings.component';

describe('SplitTwoWayBindingsComponent', () => {
  let component: SplitTwoWayBindingsComponent;
  let fixture: ComponentFixture<SplitTwoWayBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitTwoWayBindingsComponent]
    });
    fixture = TestBed.createComponent(SplitTwoWayBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
