import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DxSchedulerModule } from 'devextreme-angular';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

import { CalendarComponent } from './calendar.component'
import { CalendarRoutingModule } from './calendar-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
    imports: [
        ButtonModule,
        ChartModule,
        CommonModule,
        CalendarRoutingModule,
        FormsModule,
        MenuModule,
        PanelMenuModule,
        StyleClassModule,
        TableModule,
        DxSchedulerModule
    ],
    declarations: [ CalendarComponent ]
})
export class CalendarModule { }

platformBrowserDynamic().bootstrapModule(CalendarModule);