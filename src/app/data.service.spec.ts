import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';
import { firstValueFrom, lastValueFrom } from "rxjs";

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('starts counting from 1', async () => {
    let firstValuePromise = firstValueFrom(service.data$);

    await expect(firstValuePromise).resolves.toBe(1);
  });

  it('updates every 500ms', fakeAsync(() => {
    let currentValue = 1;
    const sub = service.data$.subscribe(nextValue => {
      currentValue = nextValue;
    });
    tick(499);
    expect(currentValue).toBe(1);
    tick(1)
    expect(currentValue).toBe(2);

    sub.unsubscribe();
  }));

  it('stops at 100 and completes', fakeAsync(() => {
    const lastValuePromise = lastValueFrom(service.data$);
    tick(50000);
    expect(lastValuePromise).resolves.toBe(100);
  }));
});
