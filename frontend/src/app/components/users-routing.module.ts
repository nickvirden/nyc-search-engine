import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UsersListComponent }    from './users-list/users-list.component';
import { UsersDetailComponent }  from './users-detail/users-detail.component';
 
const usersRoutes: Routes = [
  { path: 'users',  component: UsersListComponent },
  { path: 'users/:id', component: UsersDetailComponent }
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