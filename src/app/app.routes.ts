import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/';
import { ShoppingListComponent } from './shopping-list/';
import { RECIPE_ROUTES } from './recipes/recipes.routes';

const APP_ROUTES: Routes = [
	{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
	{ path: 'shopping-list', component: ShoppingListComponent},
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);