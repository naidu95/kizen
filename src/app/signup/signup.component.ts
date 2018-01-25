
import { Component } from '@angular/core';
import { Http, Response, Headers,RequestOptions} from '@angular/http';
import { RequestMethod } from '@angular/http/src/enums';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fname:string;
  mail:string;
  password:string;
  cpassword:string;
  dob:number;
  gender:string;
  phone:string;
  constructor(public http:Http) {
    
   }
  sendform(){
    var name=this.fname;
    var email=this.mail;
    var password=this.password;
    var cpassword=this.cpassword;
    var dob=this.dob;
    var gender=this.gender;
    var phone=this.phone;
   
    if(this.fname == null){
      document.getElementById("demo2").innerHTML="Invalid Name";
    }
    else{
      document.getElementById("demo2").innerHTML="";
      if(this.mail == null){
        document.getElementById("demo3").innerHTML="incorrect mail";
      }
      else{
        document.getElementById("demo3").innerHTML="";
        if(this.password == this.cpassword){
          if(this.password==null && this.cpassword==null){
            document.getElementById("demo").innerHTML="Incorrect password ";
          }
          else{
            document.getElementById("demo").innerHTML="";
            if(this.dob == null){
              document.getElementById("demo4").innerHTML="Invalid DOB";
            }
            else{
              document.getElementById("demo4").innerHTML="";
              if(this.gender == null){
                document.getElementById("demo5").innerHTML="Invalid Gender";
              }
              else{
                document.getElementById("demo5").innerHTML="";
                if(this.phone == null){
                  document.getElementById("demo6").innerHTML="Invalid Phone Number";
                }
                else{
                  document.getElementById("demo6").innerHTML="";
                  //alert("Successfully created account");
                  console.log(this.fname);
                  console.log(this.mail);
                  console.log(this.password);
                  console.log(this.cpassword);
                  console.log(this.gender);
                  console.log(this.phone);


                 
                  let headers = new Headers({ 'content-type': 'application/json','cache-control':'no-cache'});
                  let options = new RequestOptions({ headers: headers });
                
                  let body2 = JSON.stringify({"phone":"8712702739"});
                  alert(JSON.stringify(body2))
                 console.log(this.http.post("https://kizen1.herokuapp.com/signup",JSON.stringify(body2))
                  .subscribe(res=>console.log(res.json)));
                }
              }
              
            }
          }
        }
      }
       }
     } 
}
