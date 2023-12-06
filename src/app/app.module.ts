import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListecvComponent } from './cvTech/listecv/listecv.component';
import { ItemcvComponent } from './cvTech/itemcv/itemcv.component';
import { DetailcvComponent } from './cvTech/detailcv/detailcv.component';
import { Personne } from './Model/Persoone';
import { RotatingCardComponent } from './carte_visite/rotating-card/rotating-card.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule } from "@angular/forms";
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveDirective } from './directive.directive';
import { ArcEncielComponent } from './arc-enciel/arc-enciel.component';
import { ArcEncielDirective } from './arc-enciel/arc-enciel.directive';
import { DefaultImageComponent } from './default-image/default-image.component';
import { DefaultImagePipe } from './default-image/default-image-pipe.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { DeleteCvComponent } from './cvTech/delete-cv-component/delete-cv-component.component';
import { AddCvComponent} from './cvTech/add-cv/add-cv-component.component';
import { DetailPersonneComponent } from './cvTech/detail-personne/detail-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListecvComponent,
    ItemcvComponent,
    DetailcvComponent,
    RotatingCardComponent,
    MiniWordComponent,
    ColorComponent,
    FilsComponent,
    ParentComponent,
    DirectiveDirective,
    ArcEncielComponent,
    ArcEncielDirective,
    DefaultImageComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    DeleteCvComponent,
    AddCvComponent,
    DetailPersonneComponent,
 
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule, ToastrModule.forRoot(),ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
