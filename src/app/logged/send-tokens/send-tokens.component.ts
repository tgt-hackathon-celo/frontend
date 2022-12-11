import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatamockService} from "../../../service/datamock.service";

@Component({
  selector: 'app-send-tokens',
  templateUrl: './send-tokens.component.html',
  styleUrls: ['./send-tokens.component.scss']
})
export class SendTokensComponent implements OnInit {

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
