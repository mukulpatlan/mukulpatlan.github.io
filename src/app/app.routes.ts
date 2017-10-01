import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/';
import { ShoppingListComponent } from './shopping-list/';
import { RECIPE_ROUTES } from './recipes/recipes.routes';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const APP_ROUTES: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
	{ path: 'shopping-list', component: ShoppingListComponent},
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);