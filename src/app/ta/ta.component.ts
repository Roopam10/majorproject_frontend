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
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    
  }

}
