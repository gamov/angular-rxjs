import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { RefactoredComponent } from './refactored/refactored.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    RefactoredComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
