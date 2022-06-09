import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  star: number[]=[2,4,5,3.5]
  title = 'starRating';
  @ViewChild('par',{static:true , read:ElementRef})par: ElementRef | undefined;

  constructor(private _elementRef: ElementRef,private _renderer: Renderer2){
    
  }

 public onStarClick(rate: number)
  {
    console.log(`the Rating is ${rate}`)

    this._renderer.setProperty(this.par?.nativeElement,'innerHTML',`${rate}`);
  }

 

}
