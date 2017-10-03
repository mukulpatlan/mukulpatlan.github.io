import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeListComponent } from './recipe-list';
import { RecipeItemComponent, } from './recipe-item';
import { RecipeEditComponent, } from './recipe-edit';
import { RecipeDetailComponent } from './recipe-detail';

import { RecipesRoutingModule } from './recipes.routing.module';

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
		CommonModule,
		HttpModule,
		RecipesRoutingModule,
		ReactiveFormsModule
	]
})

export class RecipeModule{}