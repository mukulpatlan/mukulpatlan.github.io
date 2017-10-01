import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListAddComponent } from './shopping-list-add.component';

import { Ingredient } from "../models";
import { ShoppingListService } from './../shared';
 
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	items: Ingredient[] = [];
	selectedItem: Ingredient = null;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  	this.items = this.sls.getItems();
    this.subscription = this.sls.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.items = ingredients;
        }
      );
  }

  onSelectItem(item: Ingredient){
  	this.selectedItem = item;
  }

  onCleared(){
    this.selectedItem = null;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
