import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { FormsComponent } from "./forms/forms.component";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { ListenersComponent } from "./listeners/listeners.component";
import { ParentComponent } from "./parent/parent.component";


const routes: Routes = [
    {
        path:'parent',
        component:ParentComponent
    },{
        path:'child',
        component:ChildComponent
    },
    {
        path:'lifecycle',
        component:LifecycleComponent
    },
    {
        path:'forms',
        component:FormsComponent
    },
    {
        path:'dynamic-component',
        component:DynamicComponent
    },
    {
        path:'listeners',
        component:ListenersComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule{}