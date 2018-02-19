import { Injectable } from '@angular/core';

import { Todo } from "./todo";

@Injectable()
export class TodoService {
  todos: Array<Todo>;
  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    this.todos = persistedTodos.map((
      todo: { _title: string, completed: boolean }) => new Todo(todo._title, todo.completed));
  }
  private updateStore() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  private getWithCompleted(completed: boolean): Array<Todo> {
    return this.todos.filter((t: Todo) => t.completed === completed);
  }
  allCompleted(): boolean {
    return this.todos.length === this.getWithCompleted(true).length;
  }
  setAllTo(completed: boolean) {
    this.todos.forEach((t: Todo) => t.completed = completed);
    this.updateStore();
  }
  removeCompleted() {
    this.todos = this.getRemaining();
    this.updateStore();
  }
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateStore();
  }
  getRemaining() {
		return this.getWithCompleted(false);
	}

	getCompleted() {
		return this.getWithCompleted(true);
	}
  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }
  add(title: string) {
    this.todos.push(new Todo(title));
    this.updateStore();
  }
}
