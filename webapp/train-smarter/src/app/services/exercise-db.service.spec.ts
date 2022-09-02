import { TestBed } from '@angular/core/testing';

import { ExerciseDBService } from './exercise-db.service';

describe('ExerciseDBService', () => {
  let service: ExerciseDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
