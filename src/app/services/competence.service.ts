import { Injectable } from '@angular/core';
import { Competence } from '../models/competence.model'; // Assurez-vous que le chemin vers le modèle est correct

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  competences: Competence[] = [];

  constructor() {
    // Exemple d'initialisation de la liste des compétences
    this.competences = [
      { id: 1, nom: 'JavaScript', niveau: 'Avancé' },
      { id: 2, nom: 'Java', niveau: 'Intermédiaire' },
      { id: 3, nom: 'C++', niveau: 'Avancé' },
      { id: 4, nom: 'C#', niveau: 'Intermédiaire' }
    ];
  }

  getCompetences(): Competence[] {
    return this.competences;
  }

  ajouterCompetence(competence: Competence): void {
    if (competence.nom && competence.niveau) {
      const nouvelId = this.competences.length + 1;
      const nouvelleCompetence: Competence = {
        id: nouvelId,
        nom: competence.nom,
        niveau: competence.niveau,
      };
      this.competences.push(nouvelleCompetence);
    }
  }

  mettreAJourCompetence(competence: Competence): void {
    const index = this.competences.findIndex(comp => comp.id === competence.id);
    if (index !== -1) {
      this.competences[index] = competence;
    }
  }

  supprimerCompetence(id: number): void {
    const index = this.competences.findIndex(comp => comp.id === id);
    if (index !== -1) {
      this.competences.splice(index, 1);
    }
  }
}
