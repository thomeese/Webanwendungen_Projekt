import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-event-card',
  templateUrl: './calendar-event-card.component.html',
  styleUrls: ['./calendar-event-card.component.scss'],
})
export class CalendarEventCardComponent implements OnInit {

  @Input() calendarEvent;
  startDate;

  constructor() {

  }

  ngOnInit() {
    this.startDate = new Date(this.calendarEvent.startDate.replace(' ', 'T'));
  }

}
