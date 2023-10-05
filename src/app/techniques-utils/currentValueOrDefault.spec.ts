import { firstValueFrom, NEVER, ReplaySubject } from "rxjs";
import { currentValueOrDefault } from "./currentValueOrDefault";

describe('currentValueOrDefault', () => {
  it('emits the source if exists', async () => {
    const bs = new ReplaySubject<number>(1);
    bs.next(3);

    await expect(firstValueFrom(bs.pipe(currentValueOrDefault(5)))).resolves.toBe(3);
  });

  it('emits the default value if no event are available', async () => {
    await expect(firstValueFrom(NEVER.pipe(currentValueOrDefault(3)))).resolves.toBe(3);
  });
});
