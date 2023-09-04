import { Injectable } from '@angular/core';
import { Competence } from '../models/competence.model';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  competences: Competence[] = [];

  constructor(private authService: AuthService) {}

  getCompetencesUtilisateur(): Competence[] {
    // Récupérez les informations de l'utilisateur connecté depuis le localStorage
    const utilisateurLocalStorage = localStorage.getItem('utilisateurConnecte');

    if (utilisateurLocalStorage) {
        // Si l'utilisateur est connecté, parsez les informations
        const utilisateurConnecte = JSON.parse(utilisateurLocalStorage);
        
        // Obtenez les compétences de l'utilisateur
        const competencesUtilisateur = utilisateurConnecte.listeCompetence;

        // Assurez-vous de renvoyer un tableau, même s'il est vide
        return competencesUtilisateur || [];
    } else {
        // Aucun utilisateur n'est connecté, renvoyez une liste vide
        return [];
    }
}

ajoutCompetence(nouvelleCompetence: Competence): void {
  // Récupérez l'utilisateur connecté depuis le localStorage
  const utilisateurLocalStorage = localStorage.getItem('utilisateurConnecte');

  if (utilisateurLocalStorage) {
      // Si l'utilisateur est connecté, parsez les informations
      const utilisateurConnecte = JSON.parse(utilisateurLocalStorage);
      
      // Obtenez les compétences actuelles de l'utilisateur
      const competencesUtilisateur = utilisateurConnecte.listeCompetences || [];

      // Ajoutez la nouvelle compétence à la liste
      competencesUtilisateur.push(nouvelleCompetence);

      // Mettez à jour les compétences de l'utilisateur
      utilisateurConnecte.listeCompetences = competencesUtilisateur;

      // Mettez à jour les informations de l'utilisateur dans le localStorage
      localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
  }
}

modifCompetence(idCompetence: number, nouvelleCompetence: Competence): void {
  // Récupérez l'utilisateur connecté depuis le localStorage
  const utilisateurLocalStorage = localStorage.getItem('utilisateurConnecte');

  if (utilisateurLocalStorage) {
      // Si l'utilisateur est connecté, parsez les informations
      const utilisateurConnecte = JSON.parse(utilisateurLocalStorage);
      
      // Obtenez les compétences actuelles de l'utilisateur
      const competencesUtilisateur = utilisateurConnecte.listeCompetences || [];

      // Recherchez la compétence à modifier par son ID
      const indexCompetence = competencesUtilisateur.findIndex((comp:Competence) => comp.id === idCompetence);

      if (indexCompetence !== -1) {
          // Remplacez la compétence existante par la nouvelle compétence
          competencesUtilisateur[indexCompetence] = nouvelleCompetence;

          // Mettez à jour les compétences de l'utilisateur
          utilisateurConnecte.listeCompetences = competencesUtilisateur;

          // Mettez à jour les informations de l'utilisateur dans le localStorage
          localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
      }
  }
}

supprimerCompetence(idCompetence: number): void {
  // Récupérez l'utilisateur connecté depuis le localStorage
  const utilisateurLocalStorage = localStorage.getItem('utilisateurConnecte');

  if (utilisateurLocalStorage) {
      // Si l'utilisateur est connecté, parsez les informations
      const utilisateurConnecte = JSON.parse(utilisateurLocalStorage);
      
      // Obtenez les compétences actuelles de l'utilisateur
      const competencesUtilisateur = utilisateurConnecte.listeCompetences || [];

      // Recherchez la compétence à supprimer par son ID
      const indexCompetence = competencesUtilisateur.findIndex((comp:Competence) => comp.id === idCompetence);

      if (indexCompetence !== -1) {
          // Supprimez la compétence du tableau
          competencesUtilisateur.splice(indexCompetence, 1);

          // Mettez à jour les compétences de l'utilisateur
          utilisateurConnecte.listeCompetences = competencesUtilisateur;

          // Mettez à jour les informations de l'utilisateur dans le localStorage
          localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
      }
  }
}

}
