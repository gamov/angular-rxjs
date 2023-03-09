import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription, tap } from "rxjs";
import { CommonService } from "../common.service";

@Component({
  selector: 'app-common',
  template: '<p>Current value: {{currentValue}}</p>'
})
export class CommonComponent implements OnInit, OnDestroy {

  public currentValue?: number;
  public data$Subscription?: Subscription;

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    this.data$Subscription = this.commonService.even$
      .subscribe(nextValue => this.currentValue = nextValue);
  }

  ngOnDestroy(): void {
    this.data$Subscription?.unsubscribe();
  }
}
