import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LockUserComponent } from './lock-user/lock-user.component';
import {UserRoutingModule} from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import {SendMailComponent} from './send-mail/send-mail.component';
import {ActivatedAccountComponent} from './activated-account/activated-account.component';



@NgModule({
  declarations: [ListUserComponent, LockUserComponent, AddUserComponent, SendMailComponent, ActivatedAccountComponent],
  exports: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
