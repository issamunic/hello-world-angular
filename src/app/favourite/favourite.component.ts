import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isFavourite = false;

  OnFavouriteClick(){
    this.isFavourite= ! this.isFavourite;
  }

}
