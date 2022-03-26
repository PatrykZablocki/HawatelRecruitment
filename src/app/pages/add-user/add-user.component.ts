import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user: CreateUserDto = {
    name: '',
    email: '',
    gender: '',
    status: '',
  };
  disableFormFields: boolean;
  // object with info for response p tag
  response: {
    msg: string;
    type: 'success' | 'error';
  };

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.disableFormFields = true;
    this.usersService
      .addUser(this.user)
      .then(() => {
        this.response = {
          msg: `User was added.`,
          type: 'success',
        };
        this.usersService.invalidateUsersData();
      })
      .catch((err) => {
        console.error(err);
        this.response = {
          msg: `Failed to add user (${err.statusText})`,
          type: 'error',
        };
      })
      .finally(() => {
        this.disableFormFields = false;
      });
  }
}
