import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflowComponent } from './reflow.component';

describe('ReflowComponent', () => {
  let component: ReflowComponent;
  let fixture: ComponentFixture<ReflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
