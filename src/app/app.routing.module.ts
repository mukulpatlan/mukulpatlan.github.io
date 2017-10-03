import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/';

const APP_ROUTES: Routes = [
	{ path: 'shopping-list', component: ShoppingListComponent},
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule{}