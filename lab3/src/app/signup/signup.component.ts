import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signup:FormGroup
constructor()
{
  this.signup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email ,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)]),
    password:new FormControl('',[Validators.minLength(8),Validators.required,    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
 
  ]),
    Name:new FormControl('',[Validators.minLength(3),Validators.required]),
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmpassword:new FormControl('',[Validators.required]),
  })
}
}
