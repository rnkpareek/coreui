import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

	 constructor( private _router: Router ) {}
public login(): void{
	alert("ready to login")

	this._router.navigate(['/dashboard']);
}

 }
