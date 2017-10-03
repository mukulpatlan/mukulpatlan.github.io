import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { Recipe } from '../../models'
import { DataStorageService } from '../../shared/services/data-storage.service';
import { RecipeService } from '../../shared/services/recipe.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

	constructor(
			private dataStorage: DataStorageService,
			public toast: ToastsManager,
			public vcr: ViewContainerRef,
			private recipeService: RecipeService,
			private authService: AuthService
			){
		this.toast.setRootViewContainerRef(vcr);
	}

	onSaveData(){
		this.dataStorage.storeRecipe()
			.subscribe(
				response => {
					this.toast.success('Recipe successfully saved!');
				},
				error => {
					this.toast.error(error);
				}
			);
	}

	onLoadData(){
		this.dataStorage.loadRecipe()
  			.subscribe(
	  			(recipes: Recipe[]) => {
	  				this.recipeService.setRecipes(recipes);
	  				this.toast.success('Recipe successfully loaded!');
	  			},
	  			error => {
	  				this.toast.error(error);	
	  			}
	  		);
	}

	onLogOut(){
		this.authService.logout()
			.then(
				success => {
					console.log(this.authService.token);
					this.authService.token = null;
					console.log(this.authService.token);
					this.toast.success('Logged out successfully!');
				}
			)
	}
}
