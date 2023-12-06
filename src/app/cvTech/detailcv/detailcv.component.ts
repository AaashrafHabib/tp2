import { Component ,Input, OnInit} from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {

  @Input() personne: Personne;
  constructor(private embaucheservice:EmbaucheService) {
    this.personne=new Personne();
}

ngOnInit(): void {
   
}
embaucher() { 
  this.embaucheservice.embaucher(this.personne);
}
}