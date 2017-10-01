import { Ingredient } from '../../models';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
	private items: Ingredient[] = [];
  ingredientsChanged = new Subject<any>();

  	constructor() { }

  	getItems(){
  		return this.items.slice();
  	}

  	addItems(items: Ingredient[]){
  		this.items.push(...items);
      this.updateIngredients(this.items.slice());
  	}

  	addItem(item: Ingredient){
  		this.items.push(item);
      this.updateIngredients(this.items.slice());
  	}

    editItem(oldItem: Ingredient, newItem: Ingredient){
      this.items[this.items.indexOf(oldItem)] = newItem;
      this.updateIngredients(this.items.slice());
    }

    deleteItem(item: Ingredient){
      this.items.splice(this.items.indexOf(item), 1);
      this.updateIngredients(this.items.slice());
    }

    updateIngredients(item: Ingredient[]){
      this.ingredientsChanged.next(item);
    }
}
