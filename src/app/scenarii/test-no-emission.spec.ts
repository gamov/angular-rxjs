import { filter, NEVER } from "rxjs";
import { TestScheduler } from 'rxjs/testing';

describe('Scenario: test No Emission', () => {
  it('does not emit', () => {
    testScheduler.run(({ expectObservable }) =>
      expectObservable(NEVER).toBe('-'));
  });

  it('does not emit numbers smaller than 10', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const e1 = cold(' a-b', { a: 1, b: 2 });
      expectObservable(e1.pipe(filter(n => n >= 10))).toBe('-');
    });
  });
});

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});
