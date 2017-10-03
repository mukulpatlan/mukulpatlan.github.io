import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng2-toastr';

import { DropdownDirective } from '../dropdown.directive';

@NgModule({
	declarations: [
		DropdownDirective
	],
	imports: [
    	ToastModule.forRoot()
	],
	exports: [
		CommonModule,
    	ToastModule
	]
})

export class SharedModule{}