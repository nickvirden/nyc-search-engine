import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize/dist/materialize-module';

import { UsersService } from './services/users.service';
import { SearchService } from './services/search.service';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { SearchComponent } from './components/search/search.component';

import { UsersRoutingModule } from './components/users-routing.module';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: NewUserFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NewUserFormComponent,
    ResultsListComponent,
    SearchComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersRoutingModule, // Must come before root because routes are loaded in order
    RouterModule.forRoot(routes),
    FormsModule,
    MaterializeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UsersService,
    SearchService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
