import { Component, Input, OnInit, Output } from '@angular/core';
import { Immunization } from 'src/app/shared/models/immunization.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { ImmunizationUpdateComponent } from '../update/immunization-update.component';

@Component({
  selector: 'app-immunization-card',
  templateUrl: './immunization-card.component.html',
  styleUrls: ['./immunization-card.component.scss']
})
export class ImmunizationCardComponent implements OnInit {
  @Input() immunization?: Immunization;

  constructor(private dialog: MatDialog, private service: FbBaseService<Immunization>) { }

  ngOnInit(): void {
  }

  onDelete(id: string): void {
    if (confirm("Delete? : " + this.immunization?.patient.display)) {
    this.service.delete('immunization', id);
    }
  }

  formatDate(date: any): string {
    return date.toDate();
  }
  onUpdate(id: string): void {

    const dialogRef = this.dialog.open(ImmunizationUpdateComponent, {
      panelClass: 'my-class',
    });
    dialogRef.componentInstance.currentId = id;
    dialogRef.afterClosed().subscribe((immunization: Immunization) => {
      if (immunization?.status) {
        this.service.update('immunization', id, immunization);
      }
    }, err => {
      console.warn(err);
    });
  }

}
