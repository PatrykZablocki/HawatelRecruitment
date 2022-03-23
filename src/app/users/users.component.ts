import { Component, OnInit } from '@angular/core';
import { MetaPagination } from '../meta-pagination';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  pagination: MetaPagination;

  constructor(private usersService: UsersService) {}

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
    this.usersService.getUsers(page).subscribe(({ data, meta }) => {
      this.users = data;
      this.pagination = meta.pagination;
    });
  }
}
