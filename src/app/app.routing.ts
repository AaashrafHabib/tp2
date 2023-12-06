import {RouterModule, Routes} from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ColorComponent } from "./color/color.component";
import { DeleteCvComponent } from "./cvTech/delete-cv-component/delete-cv-component.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv-component.component";
import { DetailPersonneComponent } from "./cvTech/detail-personne/detail-personne.component";


const APP_ROUTING :Routes = [ 
    {path: 'cv', children: [
        {path: '',component: CvComponent},
        {path: 'delete/:id', component: DeleteCvComponent},
        {path: 'add', component: AddCvComponent},
        {path: ':id', component: DetailPersonneComponent},
      ] },
    {path: 'color/:default', component: ColorComponent},
   {path: '', component: CvComponent}, 
]
  
  
  export const ROUTING = RouterModule.forRoot(APP_ROUTING);