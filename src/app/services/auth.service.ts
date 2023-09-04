// Dans votre service d'authentification
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Méthode pour récupérer la liste des utilisateurs depuis le localStorage
  getUtilisateursEnregistres(): Utilisateur[] {
    const utilisateursJSON = localStorage.getItem('utilisateurs');
    if (utilisateursJSON) {
      return JSON.parse(utilisateursJSON);
    }
    return [];
  }
  constructor(private router: Router) {}
  // Méthode pour enregistrer un utilisateur dans la liste et la stocker dans le localStorage
  enregistreUtilisateur(utilisateur: Utilisateur): void {
    const utilisateurs = this.getUtilisateursEnregistres();
    utilisateurs.push(utilisateur);

    // Convertir la liste des utilisateurs en chaîne JSON
    const utilisateursJSON = JSON.stringify(utilisateurs);

    // Stocker la liste des utilisateurs dans le localStorage sous la clé 'utilisateurs'
    localStorage.setItem('utilisateurs', utilisateursJSON);
  }

  utilisateurConnecteId: number | null = null; // Stockez l'ID de l'utilisateur connecté
  connexion(email: string, motDePasse: string): Utilisateur | null {
    const utilisateursEnregistres = this.getUtilisateursEnregistres();
    const utilisateurTrouve = utilisateursEnregistres.find(
      utilisateur => utilisateur.email === email && utilisateur.motDepasse === motDePasse
    );
      
    if (utilisateurTrouve) {
      // Si l'utilisateur est trouvé, stockez son ID dans utilisateurConnecteId
      this.utilisateurConnecteId = utilisateurTrouve.id;
      // Stockez l'utilisateur dans le localStorage
      localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurTrouve));
      // Après une connexion réussie
      localStorage.setItem('utilisateurConnecte', 'true');

 
    } else {
      // Si l'utilisateur n'est pas trouvé, réinitialisez utilisateurConnecteId à null
      this.utilisateurConnecteId = null;
    }
  
    return utilisateurTrouve || null; // Renvoie l'utilisateur trouvé ou null s'il n'est pas trouvé
  }
  
  // Méthode pour vérifier si l'utilisateur est connecté
  estConnecte(): boolean {
      // Vérifiez si l'état de connexion existe dans le localStorage
      const etatConnexion = localStorage.getItem('utilisateurConnecte');
      return etatConnexion === 'true';
  }
  //Récupérer les informations de l'utilisateur connecté
  utilisateurConnecte: Utilisateur | null = null;
  getUtilisateurConnecte(): Observable<Utilisateur | null> {
    // Récupérez l'ID de l'utilisateur connecté depuis votre système d'authentification
    const idUtilisateurConnecte = this.utilisateurConnecteId;

    // Récupérez le tableau d'utilisateurs depuis le local storage
    const utilisateursJSON = localStorage.getItem('utilisateurs');

    // Si aucun tableau d'utilisateurs n'est stocké, retournez null
    if (!utilisateursJSON) {
      return of(null);
    }

    // Parsez la chaîne JSON en un tableau d'utilisateurs
    const utilisateursRecuperes: Utilisateur[] = JSON.parse(utilisateursJSON);

    // Trouvez l'utilisateur connecté dans le tableau d'utilisateurs en fonction de son ID
    const utilisateurConnecte = utilisateursRecuperes.find(u => u.id === idUtilisateurConnecte);

    // Retournez l'utilisateur connecté ou null s'il n'est pas connecté
    return of(utilisateurConnecte || null);
  }


  deconnexion(): void {
    // Supprimez les informations de l'utilisateur connecté du local storage
    localStorage.removeItem('utilisateurConnecte');
    // Redirigez l'utilisateur vers la page de connexion 
    this.router.navigate(['/connexion']);
  }

  
  

}




