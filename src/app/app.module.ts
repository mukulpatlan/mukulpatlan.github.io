import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';

import { AppRoutingModule } from './app.routing.module';

import { RecipeModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastComponent } from './shared/components/toast/toast.component';

import { DropdownDirective } from './dropdown.directive';

import { RecipeService, ShoppingListService, AuthService, DataStorageService, AuthGuard } from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    LoginComponent,
    SignupComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    RecipeModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
