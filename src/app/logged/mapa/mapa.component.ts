import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { DatamockService } from 'src/service/datamock.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  form: FormGroup;
  searchresult: any[];
  searchzone = false;
  sidebar = false;
  linebar = false;
  constructor(
    private formBuilder: FormBuilder,
    private datamockservice: DatamockService,
    public router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.searchresult = this.datamockservice.result;

  }

  goSearch() {
    this.searchzone = !this.searchzone;
  }
  btnsidebar(){
    this.linebar = !this.linebar;
    this.sidebar = !this.sidebar;
  }

}
