import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  subscription$: Subscription;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.subscription$ = this.todosService.todosObs$.subscribe(
      ({ data, meta }) => {
        this.todos = data;
        this.pagination = meta.pagination;
      }
    );
    this.getData();
  }

  getData = (page?: string | null) => {
    this.todosService.getTodos(page);
  };
}
