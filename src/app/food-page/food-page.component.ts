import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit{
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService, private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}