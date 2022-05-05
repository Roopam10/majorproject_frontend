import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  localsetItem!: string | null;
  localsetToken!: string | null;
  constructor() { }
  

  public setRoles(roles:[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles() :[]{
    this.localsetItem=localStorage.getItem('roles');
    if(this.localsetItem ===null)
    return [];
    else
    return JSON.parse(this.localsetItem);
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken() :string{
    this.localsetToken=localStorage.getItem("jwtToken");
    if(this.localsetToken === null)
    return "";
    else
    return this.localsetToken;
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
}
