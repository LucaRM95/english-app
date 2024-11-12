import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LayoutComponent } from './layout.component';
import { AuthRoutingModule } from '../auth-routing.module';
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [
        ButtonModule,
        ImageModule,
        RippleModule,
        ToastModule,
        ProgressSpinnerModule,
        AuthRoutingModule,
    ],
})
export class LayoutModule {}
