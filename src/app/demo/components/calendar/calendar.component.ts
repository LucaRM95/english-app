import { Component, enableProdMode } from '@angular/core';

import { Appointment, CalendarService } from '../../service/calendar.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: `./calendar.component.html`,
  providers: [ CalendarService ],
})
export class CalendarComponent {
  public appointmentsData: Appointment[];
  public currentDate: Date = new Date(2021, 2, 28);

  constructor(service: CalendarService) {
    this.appointmentsData = service.getAppointments();
  }
}