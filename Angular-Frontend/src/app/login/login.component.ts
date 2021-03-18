import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators }from '@angular/forms';

import { User } from '../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	public form: FormGroup;
	public users: User[] = [];
  constructor(private fb:FormBuilder) {
	this.form = this.fb.group({userName:['',Validators.required]
	})
  }
	addUser(){
		const userName = this.form.controls['userName'].value;
		this.users.push( new User(userName,false));
		this.form.reset();
	}
  ngOnInit(): void {
  }

}
