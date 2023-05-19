import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { Books } from '../interface';
import { book } from '../interface';
import { BooksService } from '../books.service';
import { CardService } from '../card.service';
@Component({
  selector: 'app-booklib',
  templateUrl: './booklib.component.html',
  styleUrls: ['./booklib.component.css']
})
export class BooklibComponent implements OnInit {
  @Input() book: book = {} as book;
 // @Output() bookEmiiter = new EventEmitter<book>(); using service

   isInCardt:boolean=false;
  constructor(private addcardservice:CardService) { }
  adcard() {
    //console.log(this.book);
    this.isInCardt=true;
    this.addcardservice.add(this.book);
  ///  this.bookEmiiter.emit(this.book); insance user card service
  }
  
  Remove(){
    this.isInCardt=false;
    this.addcardservice.remove(this.book);
  }

  ngOnInit(): void {
    //book=this.bookservice.getBook();
  }

}
