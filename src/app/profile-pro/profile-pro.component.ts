// profile-pro.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurCompetenceService } from '../services/UtilisateurCompetenceService';
import { Utilisateur } from '../models/utilisateur.model';


@Component({
  selector: 'app-profile-pro',
  templateUrl: './profile-pro.component.html',
  styleUrls: ['./profile-pro.component.css']
})
export class ProfileProComponent implements OnInit {
  utilisateur!: Utilisateur; // Pas besoin d'initialisation ici

  constructor(
    private route: ActivatedRoute,
    private utilisateurCompetenceService: UtilisateurCompetenceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const utilisateurIdString = params.get('id');
      if (utilisateurIdString) {
        const utilisateurId = +utilisateurIdString;
        const utilisateurTrouve = this.utilisateurCompetenceService.getUtilisateur(utilisateurId);
  
        if (utilisateurTrouve) {
          this.utilisateur = utilisateurTrouve;
        } else {
          // Gérer le cas où l'utilisateur n'a pas été trouvé, par exemple, redirection ou affichage d'un message d'erreur
        }
      }
    });
  }

  
niveauCouleurMap: { [key: string]: string } = {
  'débutant': '#4B8BCF',
  'junior': '#2C658F',
  'senior': '#1B5477'      
};

// Méthode pour obtenir la couleur en fonction du niveau
getProgressBarColor(niveau: string): string {
  return this.niveauCouleurMap[niveau] || '#F3F3F3';  // Couleur par défaut si le niveau n'est pas dans le mappage
}


  // Méthode pour obtenir la classe CSS de la barre de progression en fonction du niveau
  getProgressBarClass(niveau: string): string {
    switch (niveau) {
      case 'débutant':
        return 'progress-bar bg-danger';
      case 'junior':
        return 'progress-bar bg-warning';
      case 'senior':
        return 'progress-bar bg-success';
      default:
        return 'progress-bar';
    }
  }
  

 
  

  // Méthode pour obtenir la largeur en pourcentage de la barre de progression en fonction du niveau
  getProgressBarWidth(niveau: string): number {
    switch (niveau) {
      case 'débutant':
        return 25;
      case 'junior':
        return 45;
      case 'senior':
        return 90;
      default:
        return 0;
    }
  }
}

  
  

