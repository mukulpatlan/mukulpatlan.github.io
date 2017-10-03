import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/';
import { ShoppingListComponent } from './shopping-list/';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const APP_ROUTES: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'shopping-list', component: ShoppingListComponent},
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule{}