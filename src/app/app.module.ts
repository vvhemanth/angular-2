import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ListenersComponent } from './listeners/listeners.component';
import { FormsComponent } from './forms/forms.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { changeTextDirective } from './directive/directive.component';
import { OtherConceptsComponent } from './other-concepts/other-concepts.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DynamicComponent,
    ListenersComponent,
    FormsComponent,
    LifecycleComponent,
    changeTextDirective,
    OtherConceptsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
