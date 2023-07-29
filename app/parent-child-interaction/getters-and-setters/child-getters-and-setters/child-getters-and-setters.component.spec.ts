import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGettersAndSettersComponent } from './child-getters-and-setters.component';

describe('ChildGettersAndSettersComponent', () => {
  let component: ChildGettersAndSettersComponent;
  let fixture: ComponentFixture<ChildGettersAndSettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildGettersAndSettersComponent]
    });
    fixture = TestBed.createComponent(ChildGettersAndSettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
