import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PstwoComponent } from './pstwo.component';

describe('PstwoComponent', () => {
  let component: PstwoComponent;
  let fixture: ComponentFixture<PstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
