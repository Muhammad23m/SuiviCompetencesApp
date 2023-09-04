import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ProfilUtilisateurComponent } from './utilisateur/profil-utilisateur.component';
import { GestionCompetencesComponent } from './competences/gestion-competences.component';
import { RechercheProfessionnelsComponent } from './recherche-professionnels/recherche-professionnels.component';
import { BodyComponent } from './body/body.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileProComponent } from './profile-pro/profile-pro.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

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
    ProfileProComponent,
    ConnexionComponent,

    InscriptionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
