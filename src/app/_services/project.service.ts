import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getAllProjects()
  {
    let userName=sessionStorage.getItem("userName");
    console.log(userName);
    return this.http.get<[]>(`http://localhost:9090/project/all/`+userName);
  }
}
