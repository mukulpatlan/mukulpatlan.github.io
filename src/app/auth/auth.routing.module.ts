import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, SignupComponent } from './';


const AUTH_ROUTES :Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'signup', component: SignupComponent}
];

@NgModule({
	imports: [RouterModule.forChild(AUTH_ROUTES)],
	exports: [RouterModule]
})

export class AuthRoutingModule{}