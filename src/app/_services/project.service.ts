import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../class/project';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = environment.apiURL;
  constructor(private http:HttpClient) { }

  getAllProjects()
  {
    let userName=sessionStorage.getItem("userName");
    console.log(userName);
    return this.http.get<Project[]>(`${this.url}/project/all/`+userName);
  }

  getProjectById(index:number)
  {
    return this.http.get<Project>(`${this.url}/project/`+index);
  }

  updateProject(index:number,project:Project)
  {
    console.log("asd");
    let temp=`${this.url}/project/update/`+index;
    console.log(temp);
    return this.http.put(temp,project);
  }

  getProjectByName(name:string|any)
  {
    return this.http.get<Project>(`${this.url}/project/user/${name}`);
  }
  projectAdd(project:Project)
  {
    let userName=sessionStorage.getItem("userName");
    project.uid=userName;
    project.name=userName;
    return this.http.post<Project>(`${this.url}/project/add`,project);
  }
}
