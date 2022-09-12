import {Injectable} from '@angular/core';
import {Calendar} from '@awesome-cordova-plugins/calendar/ngx';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  calendarId;
  calendars;
  public trainSmarterCalendar;

  constructor(private calendar: Calendar,
              private platform: Platform) {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.calendar.createCalendar({calendarName: 'Train-Smarter', calendarColor: '#1e88fc'}).then((r) => {
          this.getCalendar();
        });
      } else { // Android
          this.getCalendar();
      }
    });
  }

  getCalendar() {
    this.calendar.listCalendars().then(calendars => {
      for (const cal of calendars) {
        if (cal.name === 'Train-Smarter') {
          this.trainSmarterCalendar = cal;
          console.log(this.trainSmarterCalendar);
        }
      }
      this.calendars = calendars;
      console.log(calendars);
      return calendars;
    });
  }

  addToCalendar(data) {
    const date = new Date();
    console.log(date);
    console.log(data);
    const options = {calendarId: this.trainSmarterCalendar.id, calendarName: this.trainSmarterCalendar.name, firstReminderMinutes: 30};
    this.calendar.createEventInteractivelyWithOptions(data.name, null, data.description, date, date, options).then(() => {

    });
  }
}
