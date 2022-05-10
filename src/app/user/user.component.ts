import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { Project } from '../class/project';
import { ProjectService } from '../_services/project.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})    
export class UserComponent implements OnInit {

  message: string | undefined;
  project!:Project;
  show:any;
  description:any;
  link:any;
  pro:Project={} as Project;




  constructor(private userService: UserService,private projectService:ProjectService
    ,private router:Router) { 

    }

  ngOnInit(): void {
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
      (response) =>{
        console.log(response);
        this.message = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  public getColor(balance:boolean): string{
    return balance ===true ? "rgba(11, 184, 11, 0.59)" :balance===null ?"rgba(255, 255, 0, 0.59)": "rgba(222, 67, 67, 0.59)";
 }
 reject()
 {
   
   console.log(this.project);
 }
 select()
 {
  this.show=true;
   let userName=sessionStorage.getItem("userName");
   this.projectService.getProjectByName(userName).subscribe(
     response=>{
       this.project=response;
       console.log(response);
     }
   );
 }
 update(data1:any,data2:any,index:number)
 {
   this.project.approved=null;
   this.project.description=data1.innerText;
   this.project.projectLink=data2.innerText;
   console.log(this.project);
   this.projectService.updateProject(index,this.project).subscribe(
    response=>
    {

      console.log(this.project);

    }
  );
 }
 addProject()
 {
   this.pro.approved=null;
   this.pro.uid=null;
   this.pro.ta=null;
   this.pro.description=this.description;
   this.pro.projectLink=this.link;
   this.projectService.projectAdd(this.pro).subscribe((res)=>{
        console.log(res);
        this.project=res;
        this.router.navigate(["/user"]);

   });

 }
}
