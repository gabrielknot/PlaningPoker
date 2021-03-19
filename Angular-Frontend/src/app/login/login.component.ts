import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators }from '@angular/forms';

import { User } from '../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	public currentUser = new User('',false)
	public users: User[] = [];
	userProfileForm = new FormGroup({
		userName: new FormControl('',Validators.required),
		owner: new FormControl(false)
	});
	addUser(){
		const userName = this.userProfileForm.controls['userName'].value;
		const owner = this.userProfileForm.controls['owner'].value;
		this.users.push( new User(userName,owner));
		this.userProfileForm.reset();
	}
	onCheckChange(event: any) {
  		this.currentUser = new User(this.currentUser.userName,event.target.value)

  }
  ngOnInit(): void {
  }

}
