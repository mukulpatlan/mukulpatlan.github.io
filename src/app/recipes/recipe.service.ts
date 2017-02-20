import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
      new Recipe('Food Circles', 'Very tasty', 'http://images.all-free-download.com/images/graphiclarge/mcdonalds_3d_logo_29787.jpg', [
          new Ingredient('French Fries', 2),
          new Ingredient('Pork Meat', 3)
        ]),
    new Recipe('KFC', 'Okayish', 'http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png', []),
    new Recipe('Dinware Dines Out', 'Okayish', 'http://blogs.delawareonline.com/secondhelpings/files/2011/09/DDO-logo.png', []),
    new Recipe('Windmills-rest&cater-vector', 'Free', 'https://lh3.googleusercontent.com/TfG5dn5uaYS4SygOM81qdv6JzraSR_PQR_s11_e5Dt9U0PEIF_mrg1n4dGOHynxBYmkoe14=s170', []),
    new Recipe('BurgerKing', '7.00 LE', 'http://img.zanda.com/item/96060060000053/1024x768/Burger_King_Logo.png', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
