import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilUtilisateurComponent } from './utilisateur/profil-utilisateur.component';
import { RechercheProfessionnelsComponent } from './recherche-professionnels/recherche-professionnels.component';
import { GestionCompetencesComponent } from './competences/gestion-competences.component';
import { ProfileProComponent } from './profile-pro/profile-pro.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component:InscriptionComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'profil-utilisateur', component: ProfilUtilisateurComponent},
  {path: 'recherche-professionels', component: RechercheProfessionnelsComponent},
  {path: 'gestion-competences', component: GestionCompetencesComponent},
  {path: 'profile-pro', component: ProfileProComponent},
  {path: 'profile-pro/:id', component: ProfileProComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
