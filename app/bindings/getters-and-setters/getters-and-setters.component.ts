import { Component } from '@angular/core';

@Component({
  selector: 'app-getters-and-setters',
  templateUrl: './getters-and-setters.component.html',
  styleUrls: ['./getters-and-setters.component.css']
})
export class GettersAndSettersComponent {

  private _name: string = '';

  get customerName(): string {
    return this._name;
  }

  set customerName(value: string) {
    this._name = value;
    if (value == "jayanga") {
      alert("Hello Jayanga");
    }
  }

}
