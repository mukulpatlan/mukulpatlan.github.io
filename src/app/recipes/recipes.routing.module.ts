import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit';

import { AuthGuard } from './../shared/guard/auth.guard'

const RECIPE_ROUTES: Routes = [
	{ path: 'recipes', component: RecipesComponent, children: [
		{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
		{ path: ':id', component: RecipeDetailComponent},
		{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
		{ path: '', component: RecipeStartComponent}
	]},
]; 

@NgModule({
	imports: [RouterModule.forChild(RECIPE_ROUTES)],
	exports: [RouterModule]
})

export class RecipesRoutingModule{}