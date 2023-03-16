import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateSubscriberComponent } from './late-subscriber.component';

describe('LateSubscriberComponent', () => {
  let component: LateSubscriberComponent;
  let fixture: ComponentFixture<LateSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // ??? add test?
    expect(component).toBeTruthy();
  });
});
