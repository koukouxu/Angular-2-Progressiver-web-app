import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CreateRoutingModule } from './create.routing';
import { SharedModule } from './../shared/shared.module';
import { CreateComponent }   from './create/create.component';
import {UsersService} from './../services/users.service';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    CreateRoutingModule,SharedModule,
    FormsModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [CreateComponent],
  providers: [UsersService],
})
export class CreateModule { }