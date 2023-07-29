import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-getters-and-setters',
  templateUrl: './child-getters-and-setters.component.html',
  styleUrls: ['./child-getters-and-setters.component.css']
})
export class ChildGettersAndSettersComponent {
  private _loggedIn?: boolean;
  message?: string;

  get loggedIn(): boolean | undefined {
    return this._loggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value == true) {
      this.message = "Welcome back Jayanga";
    } else {
      this.message = "Please logged in";
    }
  }
}
