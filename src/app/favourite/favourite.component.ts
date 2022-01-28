import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isFavourite = false;
  @Output() change = new EventEmitter();
 
  OnFavouriteClick(){
    this.change.emit(this.isFavourite);
    this.isFavourite= ! this.isFavourite;
  }

}
