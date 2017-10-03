import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

	constructor(private auth: AuthService, private route: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		if(this.auth.isAuth()){
			return true;
		}	
		else{
			this.route.navigate(['/auth/login']);
		}
	}	
}