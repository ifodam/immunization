import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Immunization } from 'src/app/shared/models/immunization.model';
import { ImmunizationCreateComponent } from '../immunization/create/immunization-create.component';
import { FbBaseService } from './../../services/fb-base.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog,private service: FbBaseService<Immunization>) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImmunizationCreateComponent, {
      panelClass: 'my-class'
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((immunization: Immunization) => {
      if (immunization?.status) {
        this.service.create('immunization', immunization);
      }
    }, err => {
      console.warn(err);
    });
  }
}

