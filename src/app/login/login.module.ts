import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SectionCardComponent } from '../shared/section-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SectionCardComponent
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
