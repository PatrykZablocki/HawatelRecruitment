import { Component, OnInit } from '@angular/core';
import { MetaPagination } from '../meta-pagination';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

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

  onPrevious = () => {
    const prevPage = this.pagination.links.previous;
    this.getData(prevPage);
  };

  onNext = () => {
    const nextPage = this.pagination.links.next;
    this.getData(nextPage);
  };

  getData(page?: string | null) {
    this.todosService.getTodos(page).subscribe(({ data, meta }) => {
      this.todos = this.transformTodoData(data);
      this.pagination = meta.pagination;
    });
  }

  transformTodoData(todos: Todo[]) {
    return todos.map((todo) => ({
      ...todo,
      due_on: new Date(todo.due_on).toLocaleDateString(),
    }));
  }
}
