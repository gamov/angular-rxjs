import { Injectable, OnDestroy } from '@angular/core';
import { DataService } from "./data.service";
import { filter, Observable, shareReplay, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RefactoredService implements OnDestroy{
  public even$: Observable<number>;
  private readonly destroyedSubject: Subject<void>;

  constructor(
    dataService: DataService
  ) {
    this.destroyedSubject = new Subject();

    this.even$ = dataService.data$.pipe(
      takeUntil(this.destroyedSubject),
      filter(value => value % 2 == 0),
      shareReplay(1)
    )
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }
}
