// utilisateur.model.ts
import { Competence } from './competence.model';

export interface Utilisateur {
  id: any;
  nom: string;
  prenom: string;
  email: string;
  profession: string;
  contact: string;
  motDepasse: string;
  listeCompetence: Competence[];
}
