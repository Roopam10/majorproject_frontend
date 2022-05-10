import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getAllProjects()
  {
    let userName=sessionStorage.getItem("userName");
    console.log(userName);
    return this.http.get<Project[]>(`http://localhost:9090/project/all/`+userName);
  }

  getProjectById(index:number)
  {
    return this.http.get<Project>(`http://localhost:9090/project/`+index);
  }

  updateProject(index:number,project:Project)
  {
    console.log("asd");
    let temp=`http://localhost:9090/project/update/`+index;
    console.log(temp);
    return this.http.put(temp,project);
  }

  getProjectByName(name:string|any)
  {
    return this.http.get<Project>(`http://localhost:9090/project/user/${name}`);
  }
  projectAdd(project:Project)
  {
    let userName=sessionStorage.getItem("userName");
    project.uid=userName;
    project.name=userName;
    return this.http.post<Project>(`http://localhost:9090/project/add`,project);
  }
}
