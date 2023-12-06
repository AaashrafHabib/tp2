import { Component } from '@angular/core';
import { CvService } from '../cv.service';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-add-cv-component',
  templateUrl: './add-cv-component.component.html',
  styleUrls: ['./add-cv-component.component.css']
})
export class AddCvComponent{
  errorMessage = ''; 
  constructor( 
    private cvService :CvService,
    private router : Router
  ) {} 


}
