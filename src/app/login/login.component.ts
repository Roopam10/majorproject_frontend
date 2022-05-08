import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private userAuthService:UserAuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  userName:any;

  login(loginForm:NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        console.log(response.jwtToken);
        console.log(response.user.role);

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
       
        const role=response.user.role[0].roleName;
        if(role === 'Admin'){
          this.router.navigate(['/admin']);
        }
        else if(role === 'User'){
          this.router.navigate(['/user']);
        }
        else{
          this.router.navigate(['/ta']);
        }
        sessionStorage.setItem('userName',this.userName);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}

