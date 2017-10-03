import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const APP_ROUTES: Routes = [
	{ path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
	{ path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
	{ path: '', component: HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})]
})

export class AppRoutingModule{}