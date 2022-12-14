import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goMyActions() {
    this.router.navigate(['logged/actions']);
  }
  sendtokens() {
    this.router.navigate(['logged/send-tokens']);
  }
  goBack() {
    this.router.navigate(['logged/map']);
  }

  logOut() {
    this.router.navigate(['/'])
  }

}
