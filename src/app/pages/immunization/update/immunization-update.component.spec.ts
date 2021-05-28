import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationCreateComponent } from './immunization-update.component';

describe('ImmunizationCreateComponent', () => {
  let component: ImmunizationCreateComponent;
  let fixture: ComponentFixture<ImmunizationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
