import { Component, OnDestroy, OnInit } from '@angular/core';
import { Immunization } from 'src/app/shared/models/immunization.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  list: Observable<Immunization[]> | null = null;


  constructor(private service: FbBaseService<Immunization>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.read('immunization');
  }

}
