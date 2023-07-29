import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-decorator',
  templateUrl: './view-child-decorator.component.html',
  styleUrls: ['./view-child-decorator.component.css']
})
export class ViewChildDecoratorComponent implements AfterViewInit {
  
  userName: string = '';
  @ViewChild('userNameRef') userNameElementRef?: ElementRef

  ngAfterViewInit(): void {
    this.userNameElementRef?.nativeElement.focus();
  }
}
