import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  declarations: [
     UserListComponent,
     UserDetailComponent,
     UserManagementComponent
    ],
  imports: [
    CommonModule,
    UserManagementRoutingModule    
  ]
})
export class UserManagementModule { }
