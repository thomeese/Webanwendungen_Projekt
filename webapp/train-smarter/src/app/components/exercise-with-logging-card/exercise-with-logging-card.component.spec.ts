import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseWithLoggingCardComponent } from './exercise-with-logging-card.component';

describe('ExerciseWithLoggingCardComponent', () => {
  let component: ExerciseWithLoggingCardComponent;
  let fixture: ComponentFixture<ExerciseWithLoggingCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseWithLoggingCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseWithLoggingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
