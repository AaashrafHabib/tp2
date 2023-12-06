import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color='red'; 
  colordefault='red'
  changecolor(inputcolor:HTMLInputElement){
  
    this.color=inputcolor.value ;
  } 
  reset() { 
  
  this.color=this.colordefault; 
  
  
  }
}
