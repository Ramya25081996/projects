import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepscompComponent } from './keepscomp.component';

describe('KeepscompComponent', () => {
  let component: KeepscompComponent;
  let fixture: ComponentFixture<KeepscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
