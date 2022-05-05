import { Component, OnInit } from '@angular/core';

 import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../_services/user.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  created :string= '';
 
  constructor(
    private userservice:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.created='';
  }
   public create(createUserForm: NgForm){
     console.log(createUserForm.value);
     this.userservice.createNewUser(createUserForm.value).subscribe({
       next: (response: any)=>{
         console.log(response);
         this.created='1';
         this.router.navigateByUrl('/login');
       },
       error:(error)=>{
         console.log(error);
         this.created='0';
       }
     })


   }
   


}
