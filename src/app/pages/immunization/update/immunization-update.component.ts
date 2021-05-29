import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { getIdentifierForm } from 'src/app/shared/forms/identifier.form';
import { Immunization } from 'src/app/shared/models/immunization.model';
import { FbBaseService } from './../../../services/fb-base.service';

@Component({
  selector: 'app-immunization-update',
  templateUrl: './immunization-update.component.html',
  styleUrls: ['./immunization-update.component.scss']
})

export class ImmunizationUpdateComponent implements OnInit, OnDestroy {

  form: FormGroup;
  currentId!: string;
  currentImmunization?: Immunization;
  subscription: any;

  constructor(public dialogRef: MatDialogRef<ImmunizationUpdateComponent>, private fb: FormBuilder, private service: FbBaseService<Immunization>) {
    this.form = this.fb.group({
      id: this.fb.control(''),
      status: this.fb.control('', Validators.required),
      occurrenceString: this.fb.control('', Validators.required),
      patient: this.fb.group({
        display: this.fb.control('', Validators.required)
      }),
      encounter: this.fb.group({
        display: this.fb.control('')
      }),
      primarySource: this.fb.control(''),
      lotNumber: this.fb.control(''),
      expirationDate: this.fb.control(''),
      identifier: this.fb.array([
        getIdentifierForm()
      ]),
      vaccineCode: this.fb.group({
        text: this.fb.control('')
      }),
    });
  }

  ngOnInit(): void {
    this.myObservableHandlerFunction();
  }

  myObservableHandlerFunction(): void {
    this.subscription = this.service.getById('immunization', this.currentId).subscribe((data: Immunization) => {
      this.currentImmunization = data;
      this.updateDetails();
    }, (error: any) => {
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  formatDate(date: any): string {
    if (date === '') {
      return '';
    }
    return date.toDate();
  }

  updateDetails(): void {
    this.form.patchValue({
      status: this.currentImmunization?.status,
      occurrenceString: this.formatDate(this.currentImmunization?.occurrenceString),
      patient: {
        display: this.currentImmunization?.patient.display,
      },
      encounter: {
        display: this.currentImmunization?.encounter?.display,
      },
      primarySource: this.currentImmunization?.primarySource,
      lotNumber: this.currentImmunization?.lotNumber,
      expirationDate: this.formatDate(this.currentImmunization?.expirationDate),
      vaccineCode: {
        text: this.currentImmunization?.vaccineCode.text,
      },
    });
  }

  get getIdentifier(): FormArray {
    return this.form?.get('identifier') as FormArray;
  }

  addIdentifier(): void {
    const idFormArray = this.form?.get('identifier') as FormArray;
    idFormArray.push(getIdentifierForm());
  }


}
