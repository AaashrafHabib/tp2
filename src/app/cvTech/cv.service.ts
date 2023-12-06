import { Injectable } from '@angular/core';
import { Personne } from '../Model/Persoone';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes :Personne[]; 
  constructor() { 
    this.personnes=[
      // new Personne(0,'habib','achraf',1366666,'thew.jpg',"cs student"), 
      new Personne(1,'weekend','the',33,'thew.jpg',"singer"),
      new Personne(2,'adam','levine',44,'adam.jpg',"singer"),
      new Personne(3,'eminem','shady',51,'eminem.jpg',"singer"),


    ];

  } 
  getpersonnes():Personne[]{

    return this.personnes ; 
  }
}
