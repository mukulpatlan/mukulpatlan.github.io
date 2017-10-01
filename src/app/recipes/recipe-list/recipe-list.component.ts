import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { RecipeItemComponent } from './../recipe-item';

import { Recipe } from '../../models/recipe';

import { RecipeService } from '../../shared';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	
  	constructor(private recipeService: RecipeService) { }

  	ngOnInit() {
  		this.recipes = this.recipeService.getRecipes();
    	this.recipeService.recipeChanges.subscribe(
    		(recipes: Recipe[]) => {
    			console.log(recipes);
    			this.recipes = recipes
    		}
    	);
  	}

}
