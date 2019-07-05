import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHomeComponent } from './ds-home.component';

describe('DsHomeComponent', () => {
  let component: DsHomeComponent;
  let fixture: ComponentFixture<DsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
