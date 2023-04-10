import { bufferCount, firstValueFrom, Observable } from "rxjs";

export const firstValuesFrom = async <T>(nbrOfElements: number, obs: Observable<T>) =>
  firstValueFrom(obs.pipe(bufferCount(nbrOfElements)));
