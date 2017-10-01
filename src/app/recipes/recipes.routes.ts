import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit';

import { AuthGuard } from './../shared/guard/auth.guard'

export const RECIPE_ROUTES: Routes = [
	{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
	{ path: ':id', component: RecipeDetailComponent},
	{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
	{ path: '', component: RecipeStartComponent}
]; 