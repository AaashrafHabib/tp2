import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcEncielComponent } from './arc-enciel.component';

describe('ArcEncielComponent', () => {
  let component: ArcEncielComponent;
  let fixture: ComponentFixture<ArcEncielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcEncielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcEncielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
