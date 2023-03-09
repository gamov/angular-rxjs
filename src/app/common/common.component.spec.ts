import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';
import { CommonService } from "../common.service";
import { of, Subject } from "rxjs";

describe('CommonComponent', () => {
  let fixture: ComponentFixture<CommonComponent>;
  let evenMockSubject: Subject<number>;

  beforeEach(async () => {
    evenMockSubject = new Subject<number>();

    TestBed.configureTestingModule({
      declarations: [CommonComponent],
      providers: [{ provide: CommonService, useValue: { even$: evenMockSubject } }],
    });

    fixture = TestBed.createComponent(CommonComponent);
    fixture.detectChanges();
  });

  it('starts with no value', () => {
    expect(fixture.nativeElement.textContent).toBe('Current value: ')
  });

  it('updates the value when a new one arrives', () => {
    evenMockSubject.next(3);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('Current value: 3')
  });

  it('unsubscribes when the component is destroyed', () => {
    fixture.destroy();
    expect(evenMockSubject.observed).toBeFalsy();
  });
});
