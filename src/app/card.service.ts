import { Injectable } from '@angular/core';
import { book} from './interface'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  card:Array<book>=[];

  constructor() { }

  add(Book:book){
    console.log(Book);
    
   this.card.push(Book);
  }

  getcard(){
    return this.card;
  }

  remove(Book:book){
    this.card=this.card.filter((b)=>b!=Book)
  }
}
