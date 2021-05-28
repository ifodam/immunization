import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationCardComponent } from './immunization-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ImmunizationCardComponent],
  imports: [
    CommonModule, MatCardModule, MatExpansionModule, MatDividerModule, MatListModule, MatFormFieldModule, MatButtonModule
  ],
  exports: [ImmunizationCardComponent]
})
export class ImmunizationCardModule { }
