import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:63558/api"

  constructor(private http:HttpClient) { }
  login(userInfo:Login):Observable<any>
  {
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    localStorage.setItem('user',userInfo.uname);
    return this.http.get(this.baseUrl+'/login?user='+userInfo.uname+'&pass='+userInfo.pass)
  }
  
 
  public isLoggedin()
  {
    return localStorage.getItem('ACCESS_TOKEN') !==null;
  }
 
  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('email');
  }
}
