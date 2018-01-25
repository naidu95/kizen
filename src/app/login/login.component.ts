import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name:string;
  password:string;
  constructor() { }
  signin(){
    var name=this.name;
    var password=this.password;
    if(this.name == null){
      document.getElementById("demo1").innerHTML="Invalid Username (or) password ";
    }
    else{
      if(this.password == null){
        document.getElementById("demo1").innerHTML="Invalid Username (or) password ";
      }
      else{
        document.getElementById("demo1").innerHTML="";
        alert("Successfullly Logedin");
      }
    }
    }
}
