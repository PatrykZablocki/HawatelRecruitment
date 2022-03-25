import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationWrapperComponent } from './components/pagination-wrapper/pagination-wrapper.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { PostCardWithCommentsComponent } from './components/post-card-with-comments/post-card-with-comments.component';

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
    PostCardWithCommentsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
