import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import { DataService } from "./data.service";
import { bufferCount, firstValueFrom, lastValueFrom, Subject, Subscription, take } from "rxjs";

describe('CommonService', () => {
  let service: CommonService;
  let data$Mock: Subject<number>;

  beforeEach(() => {
    data$Mock = new Subject<number>();
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useValue: { data$: data$Mock } }
      ]
    });
    service = TestBed.inject(CommonService);
  });

  it('only emits the even numbers', async () => {
    const lastValuesPromise = lastValueFrom(service.even$.pipe(bufferCount(3), take(1)));

    [0, 1, 2, 3, 4].forEach(value => data$Mock.next(value));

    await expect(lastValuesPromise).resolves.toEqual([0, 2, 4]);
  });

  it('holds the last published value for late subscribers', async () => {
    data$Mock.next(6);

    await expect(firstValueFrom(service.even$)).resolves.toBe(6);
  });

  describe('When destroyed', () => {
    let subscription: Subscription;

    beforeEach(() => {
      subscription = service.even$.subscribe();
      service.ngOnDestroy();
    });

    it('unsubscribes from the source', () => {
      expect(data$Mock.observed).toBeFalsy();
    });

    it('completes the exposed stream', () => {
      expect(subscription.closed).toBeTruthy();
    });
  });
});
