import { Injectable, Signal, signal } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';

let n = 1;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  constructor(private loggerService: LoggerService) {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Signal<Todo[]> (lecture seule)
   */
  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos().indexOf(todo);
    if (index > -1) {
      this.todos.update((todos) => todos.filter((t) => t !== todo));
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.loggerService.logger(this.todos());
  }
}
