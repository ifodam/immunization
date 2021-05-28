import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { FormsModule } from '@angular/forms';
import { ImmunizationCardModule } from '../immunization/card/immunization-card.module';
import { MatIconModule } from '@angular/material/icon';
import { ImmunizationCreateModule } from '../immunization/create/immunization-create.module';
import { ImmunizationUpdateModule } from '../immunization/update/immunization-update.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, NavModule, FormsModule, ImmunizationCardModule, ImmunizationCreateModule, ImmunizationUpdateModule,MatIconModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
