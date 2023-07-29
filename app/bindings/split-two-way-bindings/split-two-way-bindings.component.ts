import { Component } from '@angular/core';

@Component({
  selector: 'app-split-two-way-bindings',
  templateUrl: './split-two-way-bindings.component.html',
  styleUrls: ['./split-two-way-bindings.component.css']
})
export class SplitTwoWayBindingsComponent {
  userName: string = '';

  greetings(updateValue: string): void {
    this.userName = updateValue;
    if (updateValue == "jayanga") {
      alert("Welcome back Jayanga");
    }
  }
}
