import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";

import { TodoListComponent } from "./todo-list.component";

import { TodoService } from "./todo.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListComponent
  ],
  exports: [
    TodoListComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
