import { Component, OnInit, TemplateRef } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CompetenceService } from '../services/competence.service';
import { Competence } from '../models/competence.model';



@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  competences: Competence[] = []; // Liste des compétences de l'utilisateur

  constructor(private competenceService: CompetenceService) {}

  ngOnInit(): void {
    // Utilisez le service pour récupérer les compétences de l'utilisateur
    this.competences = this.competenceService.getCompetences();
  }

  // Méthode pour obtenir la classe CSS de la barre de progression en fonction du niveau
  getProgressBarClass(niveau: string): string {
    switch (niveau) {
      case 'Intermédiaire':
        return 'progress-bar bg-info';
      case 'Avancé':
        return 'progress-bar bg-success';
      // Ajoutez d'autres cas en fonction des niveaux
      default:
        return 'progress-bar';
    }
  }

 
  

  // Méthode pour obtenir la largeur en pourcentage de la barre de progression en fonction du niveau
  getProgressBarWidth(niveau: string): number {
    switch (niveau) {
      case 'Intermédiaire':
        return 50;
      case 'Avancé':
        return 90;
      // Ajoutez d'autres cas en fonction des niveaux
      default:
        return 0;
    }
  }
}




  // modalRef!: BsModalRef;
  
  // constructor(private modalService: BsModalService) {}

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
 //  }

