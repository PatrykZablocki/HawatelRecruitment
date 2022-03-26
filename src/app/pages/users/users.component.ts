import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MetaPagination } from 'src/app/interfaces/meta-pagination';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  pagination: MetaPagination;
  subscription$: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription$ = this.usersService.usersObs$.subscribe(
      ({ meta, data }) => {
        this.pagination = meta.pagination;
        this.users = data;
      }
    );
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getData = (page?: string | null) => {
    this.usersService.getUsers(page);
  };
}
