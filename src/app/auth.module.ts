import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent, SignupComponent } from './auth';
import { SharedModule } from './shared';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
	imports: [
		FormsModule,
		SharedModule,
		AuthRoutingModule
	]
})

export class AuthModule{}