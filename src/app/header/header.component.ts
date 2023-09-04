import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  utilisateur: Utilisateur | null = null;
   @Input() collapsed = false ;
   @Input() screenWidth = 0;

   constructor(private authService: AuthService) {}
   ngOnInit(): void {
      // Récupérez les informations de l'utilisateur connecté depuis le localStorage
      const utilisateurJSON = localStorage.getItem('utilisateurConnecte');
      this.utilisateur = utilisateurJSON ? JSON.parse(utilisateurJSON) : null;
  }
  // Définissez
   // Méthode pour vérifier si l'utilisateur est connecté
   utilisateurEstConnecte(): boolean {
     // Utilisez la méthode du service d'authentification pour vérifier l'état de connexion
     return this.authService.utilisateurEstConnecte();
   }
 
   // Méthode de déconnexion
   deconnexion(): void {
     // Utilisez la méthode du service d'authentification pour déconnecter l'utilisateur
     this.authService.deconnexion();
     

   }
}
