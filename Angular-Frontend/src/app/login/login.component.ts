import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators }from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	public form: FormGroup;
  constructor(private fb:FormBuilder) {
	this.form = this.fb.group({userName:['',Validators.required]
	})
  }

  ngOnInit(): void {
  }

}
