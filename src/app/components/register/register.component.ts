import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
repeatPass: string = 'none';
  constructor() { }
 

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z].*")]),
    firstname: new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    rpwd: new FormControl(""),
  });

  registerSubmit(){
    if (this.Pwd.value == this.Rpwd.value){
      console.log(this.registerForm.valid); 
      this.repeatPass = 'none'
    }
    else
    {
      this.repeatPass = 'inline'
    }
  }

get UserName(): FormControl
{
  return this.registerForm.get("username") as FormControl;
}    

get FirstName(): FormControl
{
  return this.registerForm.get("firstname") as FormControl;
}

get LastName(): FormControl
{
  return this.registerForm.get("lastname") as FormControl;
}

get Email(): FormControl
{
  return this.registerForm.get("email") as FormControl;
}

get Pwd(): FormControl
{
  return this.registerForm.get("pwd") as FormControl;
}

get Rpwd(): FormControl
{
  return this.registerForm.get("rpwd") as FormControl;
}

}


