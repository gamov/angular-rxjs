import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';
import { firstValueFrom, lastValueFrom, of, take } from "rxjs";
import { TestScheduler } from "rxjs/internal/testing/TestScheduler";

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

  describe('Using marbles', () => {
    // https://rxjs.dev/guide/testing/marble-testing
    const testScheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected));

    it('generates the stream correctly', () => {
      testScheduler.run(({ expectObservable }) => {
        expectObservable(service.data$.pipe(take(3)))
          .toBe('a 499ms b 499ms (c|)', { a: 1, b: 2, c: 3 });
      });
    });
  });
});
