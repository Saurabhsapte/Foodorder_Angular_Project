import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=> food.id==id)!;//! to remove undefined error
  }

  getAllFoodByTag(tag:string): Foods[]{
    return tag=='All'?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));

    // if(tag=='all')
    //   return this.getAll()
    // else
    //   return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 6},
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 5 },
      { name: 'SlowFood', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/food-1.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name: 'Meatball',
        cookTime:'20-30',
        price:20,
        favorite:true,
        origins:['persia','middle east','china'],
        star:4.7,
        imageUrl:'/assets/food-2.jpg',
        tags:['Slowfood','Lunch'],
      },
      {
        id:3,
        name: 'Hamburger',
        cookTime:'10-15',
        price:5,
        favorite:false,
        origins:['germeny','us'],
        star:3.5,
        imageUrl:'/assets/food-3.jpg',
        tags:['FastFood','Hamburger'],
      },
      {
        id:4,
        name: 'Fried Potatoes',
        cookTime:'15-20',
        price:2,
        favorite:true,
        origins:['belgium','france','india'],
        star:3.3,
        imageUrl:'/assets/food-4.jpg',
        tags:['FastFood','Fry'],
      },
      {
        id:5,
        name: 'Chicken Soup',
        cookTime:'40-50',
        price:11,
        favorite:false,
        origins:['indian','asia'],
        star:3.0,
        imageUrl:'/assets/food-5.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:6,
        name: 'Vegetable Pizza',
        cookTime:'40-50',
        price:9,
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/food-6.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:7,
        name: 'Vegetable Spicy Pizza',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/food-8.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:8,
        name: 'Vegetable burger',
        cookTime:'10-15',
        price:5,
        favorite:true,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/food-7.jpg',
        tags:['FastFood','Lunch'],
      },
    ]
  }
}
