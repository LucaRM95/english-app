import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        ButtonModule,
        CheckboxModule,
        CommonModule,
        FormsModule,
        ImageModule,
        InputTextModule,
        LoginRoutingModule,
        PasswordModule,
        ReactiveFormsModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }