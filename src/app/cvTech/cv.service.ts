import { Injectable } from '@angular/core';
import { Personne } from '../Model/Persoone';
import {HttpClient, HttpParams} from "@angular/common/http";
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
  // deletePersonne(id: number){
  //   return this.httpClient.delete(this.link+`/${id}`);
  // } 
  getPersonneById(id: number):Personne{ 
    return this.personnes.find(p => p.id == id) || new Personne(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
  }



}
  