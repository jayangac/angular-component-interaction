import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input-decorator',
  templateUrl: './child-input-decorator.component.html',
  styleUrls: ['./child-input-decorator.component.css']
})
export class ChildInputDecoratorComponent {
  // 1. normal input binding
  @Input() loggedIn?: boolean;

  // 2. use alias
  // @Input('loggedIn') loggedInFlag?: boolean; 

  // 3. set default value to the input property
  // In the parent component no need bindings
  // Ex : 
  // <app-child-input-decorator></app-child-input-decorator>
  // @Input('loggedIn') loggedInFlag?: boolean = false;
}
