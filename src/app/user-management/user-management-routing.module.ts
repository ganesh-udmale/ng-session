import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path :'',
    component :UserManagementComponent,
    children : [      
      { path:':id/detail', component: UserDetailComponent},
      { path : '', component: UserListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
