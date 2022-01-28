import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HomeComponent } from './pages/home/home.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
{path: '',component: HomeComponent},
{path: 'users',component: UsersComponent},
{path: 'users/:id',component: SingleComponent},
{path: 'posts',component: PostsComponent},
{path: 'posts/:id',component: SingleComponent},
{path: 'todos',component: TodosComponent},
{path: 'todos/:id',component: SingleComponent},
{path:'**',component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
