import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBook(){

    return   [{
      name:'Green Law',
      author:'Sundar',
      image:'https://m.media-amazon.com/images/I/51+-TEJk0sL._SX326_BO1,204,203,200_.jpg',
      amount:700
    },
    {
      name:'Math Law',
      author:'Kumar',
      image:'https://m.media-amazon.com/images/I/41a6cinT9RL._SX312_BO1,204,203,200_.jpg',
      amount:900
    },
    {
      name:'In a Thousand Different Ways',
      author:'Cecelia Ahern',
      image:'https://m.media-amazon.com/images/I/51CdGXLod1L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount:700
    },
    {
      name:'Happiness is Success',
      author:'AiR Atman in Ravi',
      image:'https://m.media-amazon.com/images/I/41kA4c9GYIL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount:900
    }
  ];
  
  }
}
