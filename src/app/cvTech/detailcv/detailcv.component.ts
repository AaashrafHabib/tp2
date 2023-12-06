import { Component ,Input, OnInit} from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';
import { EmbaucheService } from '../embauche.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {

  
  @Input() personne: Personne;
  constructor(private embaucheservice:EmbaucheService,  private router : Router) {
    this.personne=new Personne();
  
}

ngOnInit(): void {
   
}
embaucher() { 
  this.embaucheservice.embaucher(this.personne);
}
moreinfo() {
  const link = ['cv', this.personne.id];
  this.router.navigate(link);

}
}