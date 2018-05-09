import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from './login.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'

})
export class LoginComponent {
loginCredentials: LoginInterface;
constructor( private _router: Router ,private toastr: ToastrService,) {}
   

   ngOnInit() {
    this.loginCredentials = {
      email: '',
        password:''
    };
  }
   public login(model: LoginInterface): void{
	console.log("the value are ",model)
	if(model.email=="ronak@gmail.com" && model.password=="loveu"){
		this.showSuccess();
		this._router.navigate(['/dashboard']);
	}
else{
   this.showError();
}
	
}

 showSuccess() {
    this.toastr.success('Welcome admin!', 'Success!');
  }
  showError(){
    this.toastr.error('password or user not matching!', 'Error!');
  }

 }
