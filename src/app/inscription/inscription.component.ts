import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Assurez-vous d'adapter le chemin
import { Utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  dernierIdUtilise: number = 0; // Garder une trace du dernier ID utilisé
  emailNonUnique = false;

  ngOnInit(): void {}

  utilisateur: Utilisateur = {
    id: this.dernierIdUtilise, // Vous pouvez générer un ID unique ici si nécessaire
    nom: '',
    prenom: '',
    email: '',
    profession: '',
    contact: '',
    motDepasse: '',
    listeCompetence: [] // Initialisez la liste des compétences comme un tableau vide
  };

  utilisateurs: Utilisateur[] = [];

  constructor(private authService: AuthService) {}

  onSubmit() {
    const emailSaisi = this.utilisateur.email.trim(); // Nettoyez l'email de tout espace supplémentaire
    const emailDejaUtilise = this.utilisateurs.some(u => u.email === emailSaisi);
    
    if (emailDejaUtilise) {
      this.emailNonUnique = true;
      // Arrêtez ici si l'e-mail n'est pas unique
      return;
    }

    // Incrémentez le dernier ID utilisé avant de l'affecter à l'utilisateur
    this.dernierIdUtilise++;
    this.utilisateur.id = this.dernierIdUtilise;
    // Appel à une méthode du service d'authentification pour stocker les données dans le localStorage
    this.authService.enregistreUtilisateur(this.utilisateur);
    
    // Ajouter le nouvel utilisateur au tableau
    this.utilisateurs.push(this.utilisateur);
    // Réinitialiser le modèle utilisateur pour effacer les champs du formulaire
    this.utilisateur = {
      id: this.dernierIdUtilise, // Vous pouvez générer un ID unique ici si nécessaire
      nom: '',
      prenom: '',
      email: '',
      profession: '',
      contact: '',
      motDepasse: '',
      listeCompetence: [] // Initialisez la liste des compétences comme un tableau vide
    };
  }

  afficher() {
    // Appel à une méthode du service d'authentification pour obtenir les utilisateurs enregistrés
    this.utilisateurs = this.authService.getUtilisateursEnregistres();
  }
}
