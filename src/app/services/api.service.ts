import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/product';
import { UserForLogin, UserForRegister } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  
   }

  postProduct(data:Product[]){
    return this.http.post<Product[]>("http://localhost:3000/productList/", data)
  }

  getProduct(){
    return this.http.get<Product[]>("http://localhost:3000/productList/")
  }

  putProduct(data:Product, id:number){
    return this.http.put<Product[]>("http://localhost:3000/productList/"+id, data)
  }

  deleteProduct(id:number){
    return this.http.delete<Product[]>("http://localhost:3000/productList/"+id)
  }

  signUpUser(newUser:any){
    return this.http.post<UserForRegister>("http://localhost:3000/signupUsers", newUser)
  }

  loginUser(){
    return this.http.get<UserForLogin>("http://localhost:3000/signupUsers")
  }

  loginAdmin(){
    return this.http.get<UserForLogin>("http://localhost:3000/loginUsers")
  }

}
