import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { RechercheProfessionnelsComponent } from './recherche-professionnels/recherche-professionnels.component';
import { GestionCompetencesComponent } from './gestion-competences/gestion-competences.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'profil-utilisateur', component: ProfilUtilisateurComponent},
  {path: 'recherche-professionels', component: RechercheProfessionnelsComponent},
  {path: 'gestion-competences', component: GestionCompetencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
