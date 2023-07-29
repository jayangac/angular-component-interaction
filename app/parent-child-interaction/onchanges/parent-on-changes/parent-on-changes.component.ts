import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-on-changes',
  templateUrl: './parent-on-changes.component.html',
  styleUrls: ['./parent-on-changes.component.css']
})
export class ParentOnChangesComponent {
  userLoggedIn: boolean = true;
}
