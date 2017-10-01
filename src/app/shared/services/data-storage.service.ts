import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

import { Recipe } from '../../models';

import { RecipeService } from './recipe.service';
import { AuthService } from './auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private auth: AuthService) { }

  storeRecipe(){
    const token = this.auth.getToken();
  	return this.http.put('https://recipe-book-f584f.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  loadRecipe(){
    const token = this.auth.getToken();
    console.log(token);
  	return this.http.get('https://recipe-book-f584f.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      );
  }

}
