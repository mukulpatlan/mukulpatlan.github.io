import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/module/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingListAddComponent
	],
	imports: [
		SharedModule,
		FormsModule
	],
	exports: [
		ShoppingListComponent,
		ShoppingListAddComponent
	]
})

export class ShoppingListModule{}