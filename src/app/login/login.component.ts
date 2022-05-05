import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValidated: boolean = false;
  isAdmin: boolean = false;
  token: string = 'successfully login'
  adminToken: string = 'Admin Connected'
  public loginForm! : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private http: HttpClient) { }

  ngOnInit(): void {
    localStorage.removeItem('token')
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(loginForm: FormGroup){
    this.api.loginUser().subscribe(res => {
      Object.entries(res).forEach(entry => {
        let email = entry[1].email;
        let password = entry[1].password;
        if(email === loginForm.value.email && password === loginForm.value.password){
          this.isValidated = true;
        }
      });
    })
    this.api.loginAdmin().subscribe(res => {
      Object.entries(res).forEach(entry => {
        let email = entry[1].email;
        let password = entry[1].password;
        if(email === loginForm.value.email && password === loginForm.value.password){
          this.isAdmin = true;
        }
      });
    })

    
    if(this.isValidated){
      alert("Login Successfully");
      localStorage.setItem('token', this.token)
      this.loginForm.reset();
      this.router.navigate(['dashboard'])
    }else if(this.isAdmin){
      alert("Login Successfully");
      localStorage.setItem('token', this.adminToken)
      this.loginForm.reset();
      this.router.navigate(['dashboard'])
    }else{
      alert("Login Failure")
    }
  }

}
