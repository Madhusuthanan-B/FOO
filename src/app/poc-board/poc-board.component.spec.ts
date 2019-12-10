import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocBoardComponent } from './poc-board.component';

describe('PocBoardComponent', () => {
  let component: PocBoardComponent;
  let fixture: ComponentFixture<PocBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
