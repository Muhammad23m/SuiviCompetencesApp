import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service'; // Assurez-vous d'adapter le chemin
import { Utilisateur } from '../models/utilisateur.model'; // Assurez-vous d'adapter le chemin
import { Competence } from '../models/competence.model';
import { UtilisateurCompetenceService } from '../services/UtilisateurCompetenceService';

@Component({
  selector: 'app-recherche-professionnels',
  templateUrl: './recherche-professionnels.component.html',
  styleUrls: ['./recherche-professionnels.component.css']
})
export class RechercheProfessionnelsComponent implements OnInit {

  utilisateurs: Utilisateur[] = []; // Définissez le tableau d'utilisateurs
  competences: Competence[] = []; // Définissez le tableau de compétences

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilisateurCompetenceService: UtilisateurCompetenceService
    ) {}


  ngOnInit(): void {
    // Obtenez la liste des utilisateurs avec compétences depuis le service
    this.utilisateurs = this.utilisateurCompetenceService.getUtilisateursAvecCompetences();
  }
  

  rechercherUtilisateursParCompetence(nomCompetence: string): void {
    // Utilisez la méthode du service pour rechercher des utilisateurs par compétence
    this.utilisateurs = this.utilisateurCompetenceService.rechercherUtilisateursParCompetence(nomCompetence);
  }

  afficherProfilUtilisateur(utilisateurId: any): void {
    // Naviguez vers le composant profile-pro en passant l'ID de l'utilisateur
    this.router.navigate(['../profile-pro', utilisateurId], { relativeTo: this.route });
  }
  
}
