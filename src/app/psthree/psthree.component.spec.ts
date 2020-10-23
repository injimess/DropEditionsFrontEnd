import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsthreeComponent } from './psthree.component';

describe('PsthreeComponent', () => {
  let component: PsthreeComponent;
  let fixture: ComponentFixture<PsthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
