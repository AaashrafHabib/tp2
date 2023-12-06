import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCvComponentComponent } from './add-cv-component.component';

describe('AddCvComponentComponent', () => {
  let component: AddCvComponentComponent;
  let fixture: ComponentFixture<AddCvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCvComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
