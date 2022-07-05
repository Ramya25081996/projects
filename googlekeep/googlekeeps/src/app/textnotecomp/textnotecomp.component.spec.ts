import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextnotecompComponent } from './textnotecomp.component';

describe('TextnotecompComponent', () => {
  let component: TextnotecompComponent;
  let fixture: ComponentFixture<TextnotecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextnotecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextnotecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
