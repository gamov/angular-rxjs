import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, ReplaySubject, Subscription } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnDestroy {
  public even$ = new ReplaySubject<number>(1);
  private data$Subscription: Subscription;

  constructor(
    dataService: DataService
  ) {
    this.data$Subscription = dataService.data$.subscribe(nextValue => {
      if (nextValue % 2 == 0)
        this.even$.next(nextValue);
    });
  }

  ngOnDestroy(): void {
    this.data$Subscription.unsubscribe();
    this.even$.complete();
  }
}
