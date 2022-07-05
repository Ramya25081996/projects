import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashchildComponent } from './trashchild.component';

describe('TrashchildComponent', () => {
  let component: TrashchildComponent;
  let fixture: ComponentFixture<TrashchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
