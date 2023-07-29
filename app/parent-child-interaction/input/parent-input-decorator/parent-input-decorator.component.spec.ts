import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputDecoratorComponent } from './parent-input-decorator.component';

describe('ParentInputDecoratorComponent', () => {
  let component: ParentInputDecoratorComponent;
  let fixture: ComponentFixture<ParentInputDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentInputDecoratorComponent]
    });
    fixture = TestBed.createComponent(ParentInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
