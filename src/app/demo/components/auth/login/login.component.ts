import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public isLoading = false;
    public loginForm = new FormGroup({
        email: new FormControl<string>('', { nonNullable: true }),
        password: new FormControl<String>('', { nonNullable: true }),
    });
    public valCheck: string[] = ['remember'];

    constructor(
        private router: Router,
        private messageService: MessageService
    ) {}

    public onSubmit(): void {
        if (this.loginForm.invalid) return;
        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
            if (
                this.loginForm.value.email !== 'lucasrojas95@gmail.com' &&
                this.loginForm.value.password !== 'Luca123456'
            )
                return this.showError('User and password might be invalid.');

            this.router.navigateByUrl('/');
        }, 1000);
    }

    public showSuccess(message: string) {
        this.messageService.clear();
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: message,
        });
    }
    public showError(message: string) {
        this.messageService.clear();
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }
}
