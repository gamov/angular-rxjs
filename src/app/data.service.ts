import { Injectable } from '@angular/core';
import { map, Observable, takeWhile, timer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data$: Observable<number>;

  constructor() {
    this.data$ = timer(0,500).pipe(
      map(value => value + 1),
      takeWhile(value => value <= 100)
    );
  }
}
