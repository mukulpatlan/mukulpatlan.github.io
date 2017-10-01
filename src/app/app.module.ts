import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastComponent } from './shared/components/toast/toast.component';

import { DropdownDirective } from './dropdown.directive';

import { RecipeService, ShoppingListService, AuthService, DataStorageService, AuthGuard } from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LoginComponent,
    SignupComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [ShoppingListService, RecipeService, AuthService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
