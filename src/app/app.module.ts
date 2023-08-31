import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { GestionCompetencesComponent } from './gestion-competences/gestion-competences.component';
import { RechercheProfessionnelsComponent } from './recherche-professionnels/recherche-professionnels.component';
import { BodyComponent } from './body/body.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileProComponent } from './profile-pro/profile-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    ProfilUtilisateurComponent,
    GestionCompetencesComponent,
    RechercheProfessionnelsComponent,
    BodyComponent,
    AccueilComponent,
    ProfileProComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
