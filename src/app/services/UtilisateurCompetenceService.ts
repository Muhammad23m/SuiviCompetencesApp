import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model'; // Assurez-vous d'adapter le chemin selon l'emplacement du modèle

@Injectable({
  providedIn: 'root'
})
export class UtilisateurCompetenceService {
  private utilisateurs: Utilisateur[] = [
    {
        id: 1,
        nom: 'Doumbia',
        prenom: 'Amadou',
        profession: 'Développeur Web',
        contact: 'doumbiaama23@gmail.com',
        motDepasse:'',
        email:'',
        listeCompetence: [
          { id: 1, nom: 'HTML', niveau: 'junior' },
          { id: 3, nom: 'JavaScript', niveau: 'senior' }
        ]
      },
      {
        id: 2,
        nom: 'Coulibaly',
        prenom: 'Seydou',
        profession: 'Développeur Fron end',
        contact: 'coulibalysey12@gmail.com',
        motDepasse:'',
        email:'',
        listeCompetence: [
          { id: 1, nom: 'HTML', niveau: 'senior' },
          { id: 2, nom: 'CSS', niveau: 'senior' },
          { id: 3, nom: 'JavaScript', niveau: 'junior' }
        ]
      },
      {
        id: 3,
        nom: 'Coulibaly',
        prenom: 'Seydou',
        profession: 'Développeuse Full Stack',
        contact: 'coulibalysey12@gmail.com',
        motDepasse:'',
        email:'',
        listeCompetence: [
          { id: 1, nom: 'html', niveau: 'senior' },
          { id: 2, nom: 'CSS', niveau: 'senior' },
          { id: 3, nom: 'JavaScript', niveau: 'junior' },
          { id: 4, nom: 'Java', niveau: 'junior' },
          { id: 5, nom: 'Ruby', niveau: 'senior' }
        ]
      },
      {
        id: 4,
        nom: 'Touré',
        prenom: 'Karim',
        profession: 'Développeuse Full Stack',
        contact: 'coulibalysey12@gmail.com',
        motDepasse:'',
        email:'',
        listeCompetence: [
          { id: 2, nom: 'CSS', niveau: 'senior' },
          { id: 3, nom: 'JavaScript', niveau: 'junior' },
          { id: 4, nom: 'Java', niveau: 'junior' },
          { id: 5, nom: 'Ruby', niveau: 'senior' }
        ]
      }
    
  ];

  // Méthode pour obtenir la liste complète des utilisateurs avec leurs compétences
  getUtilisateursAvecCompetences(): Utilisateur[] {
    return this.utilisateurs;
  }

  // Méthode pour rechercher des utilisateurs en fonction d'une compétence spécifique
  rechercherUtilisateursParCompetence(nomCompetence: string): Utilisateur[] {
    return this.utilisateurs.filter(utilisateur =>
      utilisateur.listeCompetence.some(competence => competence.nom === nomCompetence)
    );
  }

  getUtilisateur(id: number): Utilisateur | undefined {
    return this.utilisateurs.find(utilisateur => utilisateur.id === id);
  }
}
