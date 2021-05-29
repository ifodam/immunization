import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getIdentifierForm } from '../../../shared/forms/identifier.form';
import { getCodeableConceptForm } from '../../../shared/forms/codeableConcept.form';

@Component({
  selector: 'app-immunization-create',
  templateUrl: './immunization-create.component.html',
  styleUrls: ['./immunization-create.component.scss']
})

export class ImmunizationCreateComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ImmunizationCreateComponent>, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: this.fb.control(null),
      status: this.fb.control(null, Validators.required),
      occurrenceString: this.fb.control(null, Validators.required),
      patient: this.fb.group({
        display: this.fb.control(null, Validators.required)
      }),
      encounter: this.fb.group({
        display: this.fb.control(null)
      }),
      primarySource: this.fb.control(null),
      lotNumber: this.fb.control(null),
      expirationDate: this.fb.control(''),
      identifier: this.fb.array([
        getIdentifierForm()
      ]),
      vaccineCode: this.fb.group({
        text: this.fb.control(null)
      }),
    });
  }

  get getIdentifier(): FormArray {
    return this.form?.get('identifier') as FormArray;
  }

  addIdentifier(): void {
    const idFormArray = this.form?.get('identifier') as FormArray;
    idFormArray.push(getIdentifierForm());
  }



  ngOnInit(): void {
  }

}
