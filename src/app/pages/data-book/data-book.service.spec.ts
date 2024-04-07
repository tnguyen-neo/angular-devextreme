import { TestBed } from '@angular/core/testing';

import { DataBookService } from './data-book.service';

describe('TasksService', () => {
  let service: DataBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
