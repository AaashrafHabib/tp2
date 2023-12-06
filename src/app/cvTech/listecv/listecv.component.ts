import { Component ,OnInit,Input,EventEmitter,Output} from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';

@Component({
  selector: 'app-listecv',
  templateUrl: './listecv.component.html',
  styleUrls: ['./listecv.component.css']
})
export class ListecvComponent implements OnInit  {
  @Input () personnes :Personne[];  
  @Output() selectedPersonne = new EventEmitter<Personne>();
  constructor(){  
    this.personnes=[];
  }
  ngOnInit(): void {
  
}
selectPersonne(selectedPersonne:any){ 
  this.selectedPersonne.emit(
    selectedPersonne
  ) 
}
}
