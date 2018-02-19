import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { TodoModule } from "./todo/todo.module";
import { TodoRoutingModule } from "./todo/todo-routing.module";

import { AppComponent } from './app.component';
import { PageNotNotFoundComponent } from "./page-not-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoRoutingModule,
    AppRoutingModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
