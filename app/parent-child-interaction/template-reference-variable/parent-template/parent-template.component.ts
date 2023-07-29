import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-template',
  templateUrl: './parent-template.component.html',
  styleUrls: ['./parent-template.component.css']
})
export class ParentTemplateComponent {
  userLoggedIn?: boolean = true;
}
