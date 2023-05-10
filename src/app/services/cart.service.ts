import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart:Cart = new Cart();

  // AddToCart
  addToCart(food:Foods):void{
    let cartItem=this.cart.items.find(item=>item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  // Remove From Cart
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.food.id != foodId)
  }

  // Change Quantity
  changeQuantity(quantity:number, foodId:number){
    let cartItem=this.cart.items.find(item=> item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }  

  // Get Cart
  getCart():Cart{
    return this.cart;
  }
}
