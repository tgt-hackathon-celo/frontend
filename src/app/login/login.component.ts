import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  splash: boolean = true;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    let splashTime = setInterval(() => {
      let splashAnimationOut = document.getElementById('splash-animation')
      splashAnimationOut.classList.add("animate__fadeOut");
    }, 2000);
    let splashRemove = setInterval(() => {
      this.splash = false;
      if (this.splash === false) {
        clearInterval(splashTime)
        clearInterval(splashRemove)
      }
    }, 2300);
  }

  confirm() {

  }

}
