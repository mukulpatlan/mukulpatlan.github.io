import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { RecipeModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';

import { DropdownDirective } from './dropdown.directive';

import { RecipeService, ShoppingListService, AuthService, DataStorageService, AuthGuard, SharedModule } from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    RecipeModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
