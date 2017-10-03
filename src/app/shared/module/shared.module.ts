import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';

@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
    	ToastModule.forRoot()
	],
	exports: [
		CommonModule,
		BrowserAnimationsModule,
    	ToastModule
	]
})

export class SharedModule{}