import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Project } from '../class/project';
import { ProjectService } from '../_services/project.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-ta',
  templateUrl: './ta.component.html',
  styleUrls: ['./ta.component.css']
})
export class TaComponent implements OnInit {

   message: any | undefined;
   projects!:Project[];
   currentProject!:Project;
   temp: any;
  constructor(private projectService:ProjectService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.projectService.getAllProjects().subscribe(
      response=>
      {
        this.projects=response;
      }
    );
  }
 async reject(index:any)
  {
    
    this.projectService.getProjectById(index).subscribe(
      response=>
      {
        this.currentProject=response;
        this.currentProject.approved=false;
        this.projectService.updateProject(index,this.currentProject).subscribe(
          response=>
          {
            this.router.navigate(["/ta"]);
            this.getAll();
          }
        );
      }
    );
    

  }
  public getColor(balance:boolean): string{
    return balance ===true ? "rgba(11, 184, 11, 0.59)" :balance===null ?"rgba(255, 255, 0, 0.59)": "rgba(222, 67, 67, 0.59)";
 }
 async accept(index:any)
  {
    
    this.projectService.getProjectById(index).subscribe(
      response=>
      {
        this.currentProject=response;
        this.currentProject.approved=true;
        this.projectService.updateProject(index,this.currentProject).subscribe(
          response=>
          {
            this.router.navigate(["/ta"]);
            this.getAll();
          }
        );
      }
    );
    

  }

}
