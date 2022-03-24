import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationWrapperComponent } from './pagination-wrapper/pagination-wrapper.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    TodosComponent,
    NavbarComponent,
    CardComponent,
    UserCardComponent,
    PaginationComponent,
    PaginationWrapperComponent,
    TodoCardComponent,
    PostCardComponent,
    AddUserComponent,
    AddPostComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
