import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingsComponent } from './bindings/two-way-bindings/two-way-bindings.component';
import { SplitTwoWayBindingsComponent } from './bindings/split-two-way-bindings/split-two-way-bindings.component';
import { GettersAndSettersComponent } from './bindings/getters-and-setters/getters-and-setters.component';
import { ViewChildDecoratorComponent } from './bindings/view-child-decorator/view-child-decorator.component';
import { ParentGettersAndSettersComponent } from './parent-child-interaction/getters-and-setters/parent-getters-and-setters/parent-getters-and-setters.component';
import { ParentInputDecoratorComponent } from './parent-child-interaction/input/parent-input-decorator/parent-input-decorator.component';
import { ParentOnChangesComponent } from './parent-child-interaction/onchanges/parent-on-changes/parent-on-changes.component';
import { ParentTemplateComponent } from './parent-child-interaction/template-reference-variable/parent-template/parent-template.component';

const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'propertybinding',
    component: PropertyBindingComponent
  },
  {
    path: 'eventbinding',
    component: EventBindingComponent
  },
  {
    path: 'twowaybinding',
    component: TwoWayBindingsComponent
  },
  {
    path: 'splittwowaybinding',
    component: SplitTwoWayBindingsComponent
  },
  {
    path: 'gettersandsetters',
    component: GettersAndSettersComponent
  },
  {
    path: 'viewchilddecorator',
    component: ViewChildDecoratorComponent
  },
  {
    path: 'parentchildinput',
    component: ParentInputDecoratorComponent
  },
  {
    path: 'gettersandsettersparent',
    component: ParentGettersAndSettersComponent
  },
  {
    path: 'parentonchanges',
    component: ParentOnChangesComponent
  },
  {
    path: 'parenttemplate',
    component: ParentTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
