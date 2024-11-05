import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

import { AppFooterComponent } from './components/footer/app.footer.component';
import { AppLayoutComponent } from './app.layout.component';
import { AppMenuComponent } from './components/menu/app.menu.component';
import { AppSidebarComponent } from './components/sidebar/app.sidebar.component';
import { AppTopBarComponent } from './components/topbar/app.topbar.component';
import { AppMenuitemComponent } from './components/menu-item/app.menuitem.component';

@NgModule({
    declarations: [
        AppFooterComponent,
        AppLayoutComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppSidebarComponent,
        AppTopBarComponent,
    ],
    imports: [
        BadgeModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        InputSwitchModule,
        InputTextModule,
        RadioButtonModule,
        RippleModule,
        RouterModule,
        SidebarModule,
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
