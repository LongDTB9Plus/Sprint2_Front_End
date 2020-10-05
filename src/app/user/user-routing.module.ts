import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {LockUserComponent} from './lock-user/lock-user.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {path: '', children: [
      {path: '', component: ListUserComponent},
      {path: 'lock-user/:ids', component: LockUserComponent},
      {path: 'add-user', component: AddUserComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class UserRoutingModule { }
