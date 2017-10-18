import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsingPingComponent } from './esign-ping.component';

describe('EsingPingComponent', () => {
  let component: EsingPingComponent;
  let fixture: ComponentFixture<EsingPingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsingPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsingPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
