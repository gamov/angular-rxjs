import { mergeWith, of, pipe, take } from "rxjs";

export const currentValueOrDefault = <T>(defaultValue: T) => pipe(mergeWith(of(defaultValue)), take(1));
