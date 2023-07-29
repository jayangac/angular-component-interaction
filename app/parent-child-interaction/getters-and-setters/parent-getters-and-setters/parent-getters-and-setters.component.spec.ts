import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGettersAndSettersComponent } from './parent-getters-and-setters.component';

describe('ParentGettersAndSettersComponent', () => {
  let component: ParentGettersAndSettersComponent;
  let fixture: ComponentFixture<ParentGettersAndSettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentGettersAndSettersComponent]
    });
    fixture = TestBed.createComponent(ParentGettersAndSettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
