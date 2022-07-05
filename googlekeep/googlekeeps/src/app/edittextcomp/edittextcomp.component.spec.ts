import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittextcompComponent } from './edittextcomp.component';

describe('EdittextcompComponent', () => {
  let component: EdittextcompComponent;
  let fixture: ComponentFixture<EdittextcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittextcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittextcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
