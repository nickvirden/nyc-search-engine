import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UsersListComponent }    from './users-list/users-list.component';
import { UserPageComponent }  from './user-page/user-page.component';
 
const usersRoutes: Routes = [
  { path: 'users',  component: UsersListComponent },
  { path: 'users/:id', component: UserPageComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }