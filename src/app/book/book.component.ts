import { Component, OnInit } from '@angular/core';
import { book } from '../interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  Books:book[]=[] ;


  
  src:string="https://m.media-amazon.com/images/I/51+-TEJk0sL._SX326_BO1,204,203,200_.jpg";
  name:string="Sundar ";
  book:string="Green Law";
  src1:string="https://m.media-amazon.com/images/I/41a6cinT9RL._SX312_BO1,204,203,200_.jpg";

  onsave(){
    alert("I'm working on it");
  }
  
  card:book[]=[];
   Myname:string='';
  //  handleInput(event:any){
  //    this.Myname=this.event.value;
  //  }
  
  isShow:boolean=true;
  toggle(){
  this.isShow=!this.isShow;
  }

  // AddToCard(event:any){
  //   console.log(event);
  // }
  constructor(private bookservice:BooksService) { }

  ngOnInit(): void {
    this.Books=this.bookservice.getBook();
  }

}
