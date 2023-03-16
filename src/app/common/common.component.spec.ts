import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';
import { CommonService } from "../common.service";
import { Subject } from "rxjs";

describe('CommonComponent', () => {
  let fixture: ComponentFixture<CommonComponent>;
  let evenSubject: Subject<number>;

  beforeEach(async () => {
    evenSubject = new Subject<number>();

    TestBed.configureTestingModule({
      declarations: [CommonComponent],
      providers: [{ provide: CommonService, useValue: { even$: evenSubject } }],
    });

    fixture = TestBed.createComponent(CommonComponent);
    fixture.detectChanges();
  });

  it('starts with no value', () => {
    expect(fixture.nativeElement.textContent).toBe('Current value: ');
  });

  it('updates the value when a new one arrives', () => {
    evenSubject.next(3);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toBe('Current value: 3');
  });

  it('unsubscribes when the component is destroyed', () => {
    fixture.destroy();

    expect(evenSubject.observed).toBeFalsy();
  });
});
