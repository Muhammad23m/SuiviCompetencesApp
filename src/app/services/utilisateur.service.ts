import { Injectable } from '@angular/core';
import { Competence } from '../models/competence.model';
import { Utilisateur } from '../models/utilisateur.model'; 


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  rechercherUtilisateursParCompetence(nomCompetence: string): Utilisateur[] {
    throw new Error('Method not implemented.');
  }
 
  private utilisateur: Utilisateur = {
      id: 1,
      nom: 'Mohamed',
      prenom: 'Diarra',
      profession: 'Developpeur',
      motDepasse:'',
      email:'',
      listeCompetence: [],
      contact: '71090098'
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
export { Utilisateur };

