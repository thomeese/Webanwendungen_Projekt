import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveTrainingLoggingPage } from './live-training-logging.page';

describe('LiveTrainingLoggingPage', () => {
  let component: LiveTrainingLoggingPage;
  let fixture: ComponentFixture<LiveTrainingLoggingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrainingLoggingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveTrainingLoggingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
