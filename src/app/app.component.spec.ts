import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RefactoredComponent } from "./refactored/refactored.component";
import { CommonComponent } from "./common/common.component";
import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";
import { LateSubscriberComponent } from "./late-susbcriber/late-subscriber.component";
import { FunWithOperatorsComponent } from "./fun-with-operators/fun-with-operators.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent,
        CommonComponent,
        RefactoredComponent,
        AsyncPipeComponent,
        LateSubscriberComponent,
        FunWithOperatorsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-rxjs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-rxjs');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('❤️');
  });
});
