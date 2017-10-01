import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Recipe, Ingredient } from '../../models';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<any>();
  recipes: Recipe[] = [
      new Recipe('Food Circles', 'Fries', 'http://images.all-free-download.com/images/graphiclarge/mcdonalds_3d_logo_29787.jpg', [
          new Ingredient('French Fries', 2),
          new Ingredient('Pork Meat', 3)
        ]),
    new Recipe('KFC', 'Chicken', 'http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png', []),
    new Recipe('Dominos', 'Chessy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/220px-Dominos_pizza_logo.svg.png', []),
    new Recipe('Cafe Coffee Day', 'Refreshing', 'https://upload.wikimedia.org/wikipedia/en/6/65/CafeCoffeeDay.jpg', []),
    new Recipe('BurgerKing', 'Spicey', 'https://seeklogo.com/images/B/Burger_King-logo-67A54F414B-seeklogo.com.png', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
    this.recipeChanges.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

}
