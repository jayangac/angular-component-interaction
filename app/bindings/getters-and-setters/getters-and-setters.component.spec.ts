import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettersAndSettersComponent } from './getters-and-setters.component';

describe('GettersAndSettersComponent', () => {
  let component: GettersAndSettersComponent;
  let fixture: ComponentFixture<GettersAndSettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GettersAndSettersComponent]
    });
    fixture = TestBed.createComponent(GettersAndSettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
