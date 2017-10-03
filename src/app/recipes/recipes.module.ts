import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeListComponent } from './recipe-list';
import { RecipeItemComponent, } from './recipe-item';
import { RecipeEditComponent, } from './recipe-edit';
import { RecipeDetailComponent } from './recipe-detail';

import { RecipesRoutingModule } from './recipes.routing.module';
import { SharedModule } from './../shared';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeStartComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeEditComponent,
		RecipeDetailComponent
	],
	imports: [
		RecipesRoutingModule,
		ReactiveFormsModule,
		SharedModule
	]
})

export class RecipesModule{}