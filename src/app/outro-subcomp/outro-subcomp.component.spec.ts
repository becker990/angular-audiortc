import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroSubcompComponent } from './outro-subcomp.component';

describe('OutroSubcompComponent', () => {
  let component: OutroSubcompComponent;
  let fixture: ComponentFixture<OutroSubcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroSubcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroSubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
