import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { RefactoredComponent } from './refactored/refactored.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { LateSubscriberComponent } from './late-susbcriber/late-subscriber.component';
import { FunWithOperatorsComponent } from './fun-with-operators/fun-with-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    RefactoredComponent,
    AsyncPipeComponent,
    LateSubscriberComponent,
    FunWithOperatorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
