import { Component, OnInit } from '@angular/core';
import { TodoService } from "./todo.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todo-list.component.html',
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {

  curTodos: Array<Todo>;
  newTodoText: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
    this.newTodoText = "";
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.curTodos = this.allTodo || [];
      let filter: string = params.get("filter") || "";
      filter.trim() == "completed" && (this.curTodos = this.completedTodos);
      filter.trim() == "active" && (this.curTodos = this.activeTodos);
      filter.trim() == "all" && (this.curTodos = this.allTodo);
    })
  }

  get allTodo() {
    return this.todoService.todos;
  }
  get activeTodos() {
    return this.todoService.getRemaining();
  }
  get completedTodos() {
    return this.todoService.getCompleted();
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }
  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }
  updateEditingTodo(todo: Todo, editedTitle: string) {
    todo.editing = false;

    if (!editedTitle.trim().length) this.todoService.remove(todo);
    else todo.title = editedTitle;
  }
  toggleCompleted(todo: Todo) {
    this.todoService.toggleCompleted(todo);
  }
  editTodo(todo: Todo) {
    todo.editing = true;
  }
  removeCompleted() {
    this.todoService.removeCompleted()
  }
  remove(todo: Todo) {
    this.todoService.remove(todo);
  }
  add() {
    if (!!this.newTodoText.trim()) {
      this.todoService.add(this.newTodoText);
      this.newTodoText = "";
    }
  }
}
