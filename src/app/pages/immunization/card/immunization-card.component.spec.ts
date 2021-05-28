import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImmunizationUpdateComponent } from '../update/immunization-update.component';

describe('ImmunizationCardComponent', () => {
  let component: ImmunizationUpdateComponent;
  let fixture: ComponentFixture<ImmunizationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
