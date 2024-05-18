import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonwordSetToolbarComponent } from './nonword-set-toolbar.component';

describe('NonwordSetToolbarComponent', () => {
  let component: NonwordSetToolbarComponent;
  let fixture: ComponentFixture<NonwordSetToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonwordSetToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonwordSetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
