import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatamockService } from 'src/service/datamock.service';

@Component({
  selector: 'app-minhas-acoes',
  templateUrl: './minhas-acoes.component.html',
  styleUrls: ['./minhas-acoes.component.scss']
})
export class MinhasAcoesComponent implements OnInit {
  myactionsnext: any[];
  myactionshistoric: any[];

  constructor(
    private router: Router,
    private datamockservice: DatamockService,

  ) { }

  ngOnInit(): void {
    this.myactionsnext = this.datamockservice.actionsnext;
    this.myactionshistoric = this.datamockservice.actionshistoric;


  }
  goBack() {
    this.router.navigate(['logged/perfil']);
  }

}
