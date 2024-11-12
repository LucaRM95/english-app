import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        ButtonModule,
        ChartModule,
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MenuModule,
        PanelMenuModule,
        StyleClassModule,
        CardModule,
        TableModule,
    ],
    declarations: [HomeComponent]
})
export class DashboardModule { }
