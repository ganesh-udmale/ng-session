import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path : '',    
    component :LoginComponent
  },
  {
    path: 'userlist',
    loadChildren : 'src/app/user-management/user-management.module#UserManagementModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
