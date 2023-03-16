import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateSubscriberComponent } from './late-subscriber.component';
import { By } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { CommonService } from "../common.service";

describe('LateSubscriberComponent', () => {
  let fixture: ComponentFixture<LateSubscriberComponent>;
  let evenSubject: Subject<number>;

  const comp = {
    button: () => fixture.debugElement.query(By.css('button')),
    value: () => fixture.debugElement.query(By.css('p'))
  }

  beforeEach(async () => {
    evenSubject = new Subject<number>();
    await TestBed.configureTestingModule({
      declarations: [LateSubscriberComponent],
      providers: [{ provide: CommonService, useValue: { even$: evenSubject } }],
    }).compileComponents();

    fixture = TestBed.createComponent(LateSubscriberComponent);
    fixture.detectChanges();
  });

  it('starts with no value', () => {
    expect(comp.value()).toBeNull();
  });

  describe('When clicking the button', () => {
    beforeEach(() => {
      comp.button().nativeElement.click();
      evenSubject.next(42);
      fixture.detectChanges();
    });

    it('displays the latest number', () => {
      expect(comp.value().nativeElement.textContent).toBe('Late value: 42');
    });
  });
});
