import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Assurez-vous d'adapter le chemin
import { Utilisateur } from '../models/utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  utilisateur: Utilisateur = {
    email: '',
    motDepasse: '',
    id: undefined,
    nom: '',
    prenom: '',
    profession: '',
    contact: '',
    listeCompetence: []
  };

  messageErreur: string | null = null; // Variable pour afficher le message d'erreur

  constructor(private authService: AuthService, private router: Router) {}


  onSubmit() {
    const utilisateurTrouve = this.authService.connexion(this.utilisateur.email, this.utilisateur.motDepasse);

    if (utilisateurTrouve) {
      //redirection vers une page d'accueil
      this.router.navigate(['/accueil']);
    } else {
      // Affichez un message d'erreur
      this.messageErreur = 'L\'utilisateur n\'a pas été trouvé. Veuillez vérifier vos informations de connexion.';
    }
  }
}
