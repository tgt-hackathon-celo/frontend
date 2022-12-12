import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatamockService} from "../../../../service/datamock.service";

@Component({
  selector: 'app-token-send-confirmation',
  templateUrl: './token-send-confirmation.component.html',
  styleUrls: ['./token-send-confirmation.component.scss']
})
export class TokenSendConfirmationComponent implements OnInit {

  myactionsnext: any[];
  myactionshistoric: any[];

  toggle = true;
  toggle1= false;


  tokensend = [
    {
      name: 'Ação coletiva na praia de Intermares',
      date: 'Domingo, 10 de Dezembro, às 08:00h',
      time: '8h'
    },
  ]

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

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.toggle1 = false;
    this.toggle= true;


  }
  enableDisableRules() {
    this.toggle1 = !this.toggle1;
    this.toggle = false;
    this.toggle1 = true;
    console.log('chegou')
  }
}
