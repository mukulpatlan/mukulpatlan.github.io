import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { RecipeService, ShoppingListService, AuthService, DataStorageService, SharedModule } from '../shared';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
	declarations: [HomeComponent, HeaderComponent],
	imports: [
		SharedModule,
		AppRoutingModule,
		RouterModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
		ShoppingListService, 
		RecipeService, 
		AuthService, 
		DataStorageService
	],
})

export class CoreModule{}