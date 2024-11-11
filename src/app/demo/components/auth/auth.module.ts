import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { MessageService } from 'primeng/api';

@NgModule({
    imports: [AuthRoutingModule],
    providers: [MessageService],
})
export class AuthModule {}
