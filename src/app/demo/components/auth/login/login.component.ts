import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `,],
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public loginForm = new FormGroup({
        email: new FormControl<string>('', { nonNullable: true }),
        password: new FormControl<String>('', { nonNullable: true })
    });
    public valCheck: string[] = ['remember'];

    constructor(public layoutService: LayoutService) { }

    public onSubmit(): void {
        console.log(this.loginForm.value)
    }
}
