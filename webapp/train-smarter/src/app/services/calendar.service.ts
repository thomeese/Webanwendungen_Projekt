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
  isMobileDevice;

  constructor(private calendar: Calendar,
              private platform: Platform) {
    this.isMobileDevice = this.platform.is('cordova');
    if (this.isMobileDevice) {
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
  }

  getCalendar() {
    if (this.isMobileDevice) {
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
  }

  addToCalendar(data) {
    if (this.isMobileDevice) {
      const date = new Date();
      console.log(date);
      console.log(data);
      let recurrenceTyp;
      if (data.period === 'Tage') {
        recurrenceTyp = 'daily';
      } else if (data.period === 'Wochen') {
        recurrenceTyp = 'weekly';
      } else if (data.period === 'Monate') {
        recurrenceTyp = 'monthly';
      }

      if (this.platform.is('ios')) {
        const options = {
          calendarId: this.trainSmarterCalendar.id,
          calendarName: this.trainSmarterCalendar.name,
          firstReminderMinutes: 30,
          recurrence: recurrenceTyp,
          recurrenceInterval: parseInt(data.periodInterval, 10)
        };
        this.calendar.createEventInteractivelyWithOptions(data.name, null, data.description, date, date, options).then(() => {
        });
      } else { // Android
        const options = {
          firstReminderMinutes: 30
        };
        this.calendar.createEventInteractivelyWithOptions(data.name, null, data.description, date, date, options).then(() => {
        });
      }
    }
  }

  getNextEvents(): Promise<any> {
    if (this.isMobileDevice) {
      const date = new Date();
      return this.calendar.listEventsInRange(date, new Date(new Date().getTime() + (14 * 24 * 60 * 60 * 1000))) as Promise<any>;
    }
    return Promise.resolve('error');
  }
}
