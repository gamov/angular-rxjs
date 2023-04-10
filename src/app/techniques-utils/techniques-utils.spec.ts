import { filter, of } from "rxjs";
import inputIsNotNullOrUndefined from "./input-is-not-null-or.undefined";
import { firstValuesFrom } from "./test-support$";

describe('Techniques - Utils', () => {
  describe('inputIsNotNullOrUndefined for filter operator', () => {
    it('filters null and undefined values', async () => {
      await expect(firstValuesFrom(2,
        of(1, undefined, 3, null)
          .pipe(filter(inputIsNotNullOrUndefined))
      )).resolves.toEqual([1, 3]);
    });
  });
});
