import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';

@Component({
  selector: 'app-itemcv',
  templateUrl: './itemcv.component.html',
  styleUrls: ['./itemcv.component.css']
})
export class ItemcvComponent implements OnInit { 
@Input() personne :Personne=new Personne();
@Output() selectedPersonne= new EventEmitter<Personne>; 
constructor(){ 
}

  ngOnInit(): void {
    
  }
  selectPersonne() {

    this.selectedPersonne.emit(
      this.personne
    );
  }

}
