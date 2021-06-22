import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { NewediteventComponent } from './neweditevent/neweditevent.component';
import { NeweditpostComponent } from './neweditpost/neweditpost.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'neweditpost', component: NeweditpostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'neweditevent', component: NewediteventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }