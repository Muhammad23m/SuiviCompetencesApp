import { Component, OnInit, TemplateRef } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { Competence } from '../models/competence.model';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../models/utilisateur.model';



@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur | null = null;

   
  competences: Competence[] = []; // Liste des compétences de l'utilisateur

  constructor(private competenceService: CompetenceService, private  authService: AuthService) {}
  
  ngOnInit(): void {
    // Vérifiez d'abord le localStorage pour l'utilisateur connecté
    const utilisateurLocalStorage = localStorage.getItem('utilisateurConnecte');
  
    if (utilisateurLocalStorage) {
      // S'il y a un utilisateur dans le localStorage, utilisez-le
      this.utilisateur = JSON.parse(utilisateurLocalStorage);
    } else {
      // Sinon, appelez la méthode pour récupérer l'utilisateur connecté depuis le service d'authentification
      this.authService.getUtilisateurConnecte().subscribe((utilisateur) => {
        this.utilisateur = utilisateur;
      });
    }
  
    // Utilisez le service pour récupérer les compétences de l'utilisateur
    this.competences = this.competenceService.getCompetences();
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



