import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatListModule, MatSelectionList} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { ChatsComponent } from './chats/chats.component';
import { NeweditpostComponent } from './neweditpost/neweditpost.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { AppState } from './store/Store';

import { rootReducer } from './store/store';
import { LoginComponent } from './login/login.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsPipe } from './posts.pipe';
import { EventComponent } from './event/event.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { NewediteventComponent } from './neweditevent/neweditevent.component';
import { EventsPipe } from './events.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PostsComponent,
    EventsComponent,
    ChatsComponent,
    NeweditpostComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    PostsPipe,
    EventComponent,
    PastEventsComponent,
    NewediteventComponent,
    EventsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, AppRoutingModule,
    MatInputModule, MatCardModule, MatGridListModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
//    this.ngRedux.configureStore(rootReducer, {});
 
      ngReduxRouter.initialize(/* args */);   
  }
 
 }
