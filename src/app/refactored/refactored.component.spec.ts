import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from "../common.service";
import { of, Subject } from "rxjs";
import { RefactoredComponent } from "./refactored.component";

describe('RefactoredComponent', () => {
  let fixture: ComponentFixture<RefactoredComponent>;
  let evenMockSubject: Subject<number>;

  beforeEach(async () => {
    evenMockSubject = new Subject<number>();

    TestBed.configureTestingModule({
      declarations: [RefactoredComponent],
      providers: [{ provide: CommonService, useValue: { even$: evenMockSubject } }],
    });

    fixture = TestBed.createComponent(RefactoredComponent);
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
