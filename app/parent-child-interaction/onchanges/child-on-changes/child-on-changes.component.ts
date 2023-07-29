import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-on-changes',
  templateUrl: './child-on-changes.component.html',
  styleUrls: ['./child-on-changes.component.css']
})
export class ChildOnChangesComponent implements OnChanges {
  @Input() loggedIn?: boolean;
  message?: string;

  constructor() { }

  // ngOnChanges will works only child componet 
  // If you have more than one input parameters changes is good
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const value = changes['loggedIn'];
    if (value.currentValue == true) {
      this.message = "Welcome back Jayanga";
    } else {
      this.message = "Please logged in";
    }
  }

}
