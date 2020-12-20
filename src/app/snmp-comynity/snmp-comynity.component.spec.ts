import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnmpComynityComponent } from './snmp-comynity.component';

describe('SnmpComynityComponent', () => {
  let component: SnmpComynityComponent;
  let fixture: ComponentFixture<SnmpComynityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnmpComynityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnmpComynityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
