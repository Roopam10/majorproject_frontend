import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-ta',
  templateUrl: './ta.component.html',
  styleUrls: ['./ta.component.css']
})
export class TaComponent implements OnInit {

   message: any | undefined;
   projects:any;
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.projectService.getAllProjects().subscribe(
      response=>
      {
        this.projects=response;
        console.log(response);
      }
    );
  }
  reject()
  {

  }
  public getColor(balance:boolean): string{
    return balance ===true ? "rgba(11, 184, 11, 0.59)" : "rgba(222, 67, 67, 0.59)";
 }

}
