import { Component, OnInit } from '@angular/core';
import { MetaPagination } from 'src/app/interfaces/meta-pagination';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  pagination: MetaPagination;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData = (page?: string | null) => {
    this.todosService.getTodos(page).subscribe(({ data, meta }) => {
      this.todos = this.transformTodoData(data);
      this.pagination = meta.pagination;
    });
  };

  transformTodoData(todos: Todo[]) {
    return todos.map((todo) => ({
      ...todo,
      due_on: new Date(todo.due_on).toLocaleDateString(),
    }));
  }
}
