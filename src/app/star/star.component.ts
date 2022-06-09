import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
 @Output() starClicked= new EventEmitter<number>();
  rate: number=3.5
  width: number=90;
  @Input() rating: number=0;

  
  constructor() { }

  ngOnInit(): void {

    this.width= this.rating*90/5;
  }

  showrating()
  {
  this.starClicked.emit(this.rating);
  }
}
