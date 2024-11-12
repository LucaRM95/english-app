import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        ButtonModule,
        CheckboxModule,
        CommonModule,
        FormsModule,
        ImageModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RippleModule,
        ToastModule,
        ProgressSpinnerModule,
    ],
    declarations: [ LayoutComponent, LoginComponent, ],
    providers: [MessageService],
})
export class AuthModule {}
