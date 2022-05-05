import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-ta',
  templateUrl: './ta.component.html',
  styleUrls: ['./ta.component.css']
})
export class TaComponent implements OnInit {

   message: string | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.forTA();
  }
  forTA() {
    this.userService.forTA().subscribe(
      (response) =>{
        console.log(response);
        this.message = response;
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }

}
