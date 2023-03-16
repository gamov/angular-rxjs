import { filter, MonoTypeOperatorFunction, pipe } from "rxjs";

export default (number: number): MonoTypeOperatorFunction<number> =>
  pipe(filter(value => value !== number));
