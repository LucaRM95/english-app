import { OnInit, Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Chat', icon: 'pi pi-fw pi-comments', routerLink: ['/chat'] },
                    { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendar'] },
                ]
            },
            {
                label: 'Comunity',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Comunity',
                        icon: 'pi pi-fw pi-discord',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Notifications',
                        icon: 'pi pi-fw pi-bell',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Events',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                ]
            }
        ];
    }
}
