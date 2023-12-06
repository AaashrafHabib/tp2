import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Persoone';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit{
personne !:Personne;  
constructor(  private cvService : CvService,
  private activatedRoute : ActivatedRoute,
  private router:Router){} 

ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    (params) => {
      console.log(params['id']);
     if (params['id']) {
        this.personne = this.cvService.getPersonneById(params['id']);
        console.log(this.cvService.getPersonneById(1));
      } else {
        console.error("ID is undefined");
      }
    }
  );
}

}
