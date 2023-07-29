import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingsComponent } from './two-way-bindings.component';

describe('TwoWayBindingsComponent', () => {
  let component: TwoWayBindingsComponent;
  let fixture: ComponentFixture<TwoWayBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindingsComponent]
    });
    fixture = TestBed.createComponent(TwoWayBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
