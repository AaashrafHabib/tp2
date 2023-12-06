import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
personnes:Personne []=[]; 
constructor(private embaucheService:EmbaucheService) { }
 
ngOnInit(): void {
  this.personnes=this.embaucheService.getEmbauche(); 
}

}
