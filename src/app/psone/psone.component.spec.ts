import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsoneComponent } from './psone.component';

describe('PsoneComponent', () => {
  let component: PsoneComponent;
  let fixture: ComponentFixture<PsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
