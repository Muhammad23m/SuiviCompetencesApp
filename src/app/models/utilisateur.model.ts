import { Competence } from './competence.model';

export class Utilisateur {
  constructor(public id: number, public nom: string, public prenom: string, public listeCompetence: Competence[]) {}
}
