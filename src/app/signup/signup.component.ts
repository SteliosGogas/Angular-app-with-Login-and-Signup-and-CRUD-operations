import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm! : FormGroup
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required]
    })
  }

  signUp(){
    this.api.signUpUser(this.signupForm.value).subscribe(res=>{
      alert("Signup successfully");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Signup failed");
    })
  }

}
