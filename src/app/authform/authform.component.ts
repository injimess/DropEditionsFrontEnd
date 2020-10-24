import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.css']
})
export class AuthformComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService:AuthServiceService , private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      usernameOrEmail: new FormControl('',[Validators.compose([Validators.required])]),
      password: new FormControl('',[Validators.compose([Validators.required])])
    });
  }  

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.accessToken){
          console.log(result);
          alert("Authenticated!");
          this.router.navigateByUrl("/home");}
          console.log(result);
        if (result.status == 401) {
          console.log(result);
          alert(result.error);}
      })
    }
  }
}
