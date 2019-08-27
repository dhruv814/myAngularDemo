import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  addUser(user): Observable<any> {
    return this.http.post<any>("http://localhost:3000/user",user);
  }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/user");
  }

}
