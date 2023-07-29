import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-getters-and-setters',
  templateUrl: './parent-getters-and-setters.component.html',
  styleUrls: ['./parent-getters-and-setters.component.css']
})
export class ParentGettersAndSettersComponent {
  userLoggedIn: boolean = true;
}
