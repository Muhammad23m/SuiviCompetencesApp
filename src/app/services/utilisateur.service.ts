import { Injectable } from '@angular/core';
import { Competence } from '../models/competence.model';
import { Utilisateur } from '../models/utilisateur.model'; // Assurez-vous d'adapter le chemin selon l'emplacement du modèle


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateur: Utilisateur = {
    id: 1,
    nom: 'Mohamed',
    prenom: 'Diarra',
    listeCompetence: []
  };

  getUtilisateur(): Utilisateur {
    return this.utilisateur;
  }

  ajouterCompetence(competence: Competence): void {
    this.utilisateur.listeCompetence.push(competence);
  }

  mettreAJourCompetence(competence: Competence): void {
    const index = this.utilisateur.listeCompetence.findIndex(comp => comp.id === competence.id);
    if (index !== -1) {
      this.utilisateur.listeCompetence[index] = competence;
    }
  }

  supprimerCompetence(competence: Competence): void {
    const index = this.utilisateur.listeCompetence.findIndex(comp => comp.id === competence.id);
    if (index !== -1) {
      this.utilisateur.listeCompetence.splice(index, 1);
    }
  }
}
