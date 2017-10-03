import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const RECIPE_ROUTES: Routes = [
	{ path: '', component: ShoppingListComponent},
]; 

@NgModule({
	imports: [RouterModule.forChild(RECIPE_ROUTES)],
	exports: [RouterModule]
})

export class ShoppingListRoutingModule{}