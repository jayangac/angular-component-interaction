import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrls: ['./child-template.component.css']
})
export class ChildTemplateComponent {
  message?: string;
  name: string = "Mishelle Silva";
  @Input() loggedIn?:boolean;

  greetingFromChild(): void {
    alert("Hello Jayanga");
  }
}
