import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { NavigationComponent } from './core/component/navigation/navigation.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingsComponent } from './bindings/two-way-bindings/two-way-bindings.component';
import { FormsModule } from '@angular/forms';
import { SplitTwoWayBindingsComponent } from './bindings/split-two-way-bindings/split-two-way-bindings.component';
import { GettersAndSettersComponent } from './bindings/getters-and-setters/getters-and-setters.component';
import { ViewChildDecoratorComponent } from './bindings/view-child-decorator/view-child-decorator.component';
import { ParentInputDecoratorComponent } from './parent-child-interaction/input/parent-input-decorator/parent-input-decorator.component';
import { ChildInputDecoratorComponent } from './parent-child-interaction/input/child-input-decorator/child-input-decorator.component';
import { ParentGettersAndSettersComponent } from './parent-child-interaction/getters-and-setters/parent-getters-and-setters/parent-getters-and-setters.component';
import { ChildGettersAndSettersComponent } from './parent-child-interaction/getters-and-setters/child-getters-and-setters/child-getters-and-setters.component';
import { ParentOnChangesComponent } from './parent-child-interaction/onchanges/parent-on-changes/parent-on-changes.component';
import { ChildOnChangesComponent } from './parent-child-interaction/onchanges/child-on-changes/child-on-changes.component';
import { ParentTemplateComponent } from './parent-child-interaction/template-reference-variable/parent-template/parent-template.component';
import { ChildTemplateComponent } from './parent-child-interaction/template-reference-variable/child-template/child-template.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NavigationComponent,
    EventBindingComponent,
    TwoWayBindingsComponent,
    SplitTwoWayBindingsComponent,
    GettersAndSettersComponent,
    ViewChildDecoratorComponent,
    ParentInputDecoratorComponent,
    ChildInputDecoratorComponent,
    ParentGettersAndSettersComponent,
    ChildGettersAndSettersComponent,
    ParentOnChangesComponent,
    ChildOnChangesComponent,
    ParentTemplateComponent,
    ChildTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
