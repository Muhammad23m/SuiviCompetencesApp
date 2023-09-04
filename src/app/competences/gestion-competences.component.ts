import { Component, OnInit, TemplateRef } from '@angular/core';
import { Competence } from '../models/competence.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; // Assurez-vous que le chemin vers ngx-bootstrap est correct
import { CompetenceService } from '../services/competence.service'; // Assurez-vous que le chemin vers le service est correct
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-competences',
  templateUrl: './gestion-competences.component.html',
  styleUrls: ['./gestion-competences.component.css']
})
export class GestionCompetencesComponent implements OnInit {
  competences: Competence[] = [];
  modalRef!: BsModalRef;
  nouvelleCompetence: Competence = { id: 0, nom: '', niveau: '' };
  nouvellComp = new FormGroup({
    nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
    niveau:new FormControl('')
  })

  constructor(private modalService: BsModalService, private competenceService: CompetenceService) {}

  ngOnInit(): void {
    this.competences = this.competenceService.getCompetences();
  }

  ouvrirModalAjouterCompetence(modalTemplate: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(modalTemplate);
  }

  ajouterCompetence(): void {
    if(this.nouvellComp.valid){
      this.competenceService.ajouterCompetence(
        this.nouvelleCompetence = { id: 0, nom: this.nouvellComp.value.nom??'', niveau: this.nouvellComp.value.niveau??'' } 
      );
      this.modalRef.hide();
    }
  }

  mettreAJourCompetence(competence: Competence): void {
    this.competenceService.mettreAJourCompetence(competence);
  }

  supprimerCompetence(competence: Competence): void {
    this.competenceService.supprimerCompetence(competence.id);
  }
}


  // ajouterCompetence(): void {
  //   // Assurez-vous que la nouvelle compétence a été correctement remplie
  //   if (this.nouvelleCompetence.nom && this.nouvelleCompetence.niveau) {
  //     // Générez un nouvel ID pour la compétence (par exemple, en utilisant la longueur de la liste)
  //     const nouvelId = this.competences.length + 1;
  
  //     // Ajoutez la nouvelle compétence à la liste
  //     const nouvelleCompetence: Competence = {
  //       id: nouvelId,
  //       nom: this.nouvelleCompetence.nom,
  //       niveau: this.nouvelleCompetence.niveau,
    
  //     };
  //     this.competences.push(nouvelleCompetence);
  
  //     // Réinitialisez le modèle de nouvelle compétence
  //     this.nouvelleCompetence = { id: 0, nom: '', niveau: '' };
  
  //     // Fermez le modal
  //     this.modalRef.hide();
  //   }
  // }
  


  // Méthode pour mettre à jour une compétence
 


  

