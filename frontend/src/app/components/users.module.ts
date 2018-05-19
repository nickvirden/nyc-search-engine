import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { UsersListComponent }    from './users-list/users-list.component';
import { UsersDetailComponent }  from './users-detail/users-detail.component';
 
import { UsersService } from '../services/users.service';
 
import { UsersRoutingModule } from './users-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UsersDetailComponent
  ],
  providers: [ UsersService ]
})
export class UsersModule {}
