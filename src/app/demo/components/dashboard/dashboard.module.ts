import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        ButtonModule,
        ChartModule,
        CommonModule,
        DashboardsRoutingModule,
        FormsModule,
        MenuModule,
        PanelMenuModule,
        StyleClassModule,
        TableModule,
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
