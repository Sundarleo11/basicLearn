import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardservice:CardService) { }

  Card(){
    return this.cardservice.getcard();
  }

  ngOnInit(): void {
   
  }

}
