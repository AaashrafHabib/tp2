import { Component, OnInit,EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';



@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  personnes:Personne [];
  SelectedPesonne!:Personne;
  constructor() {
    this.personnes=[
      // new Personne(0,'habib','achraf',1366666,'thew.jpg',"cs student"), 
      new Personne(1,'weekend','the',33,'thew.jpg',"singer"),
      new Personne(2,'adam','levine',44,'adam.jpg',"singer"),
      new Personne(3,'eminem','shady',51,'eminem.jpg',"singer"),


    ];

  }

  ngOnInit(): void {
  }

  selectPersonne(personne:Personne){
  this.SelectedPesonne=personne;
  }

} 