
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Competence } from '../models/competence.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CompetenceService } from '../services/competence.service'; 
@Component({
  selector: 'app-gestion-competences',
  templateUrl: './gestion-competences.component.html',
  styleUrls: ['./gestion-competences.component.css']
})
export class GestionCompetencesComponent implements OnInit {
  competences: Competence[] = [];
  modalRef!: BsModalRef;
  nouvelleCompetence: Competence = { id: 0, nom: '', niveau: '' };

  constructor(private modalService: BsModalService, private competenceService: CompetenceService) {}

  ngOnInit(): void {
    this.competences = this.competenceService.getCompetences();
  }

  ouvrirModalAjouterCompetence(modalTemplate: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(modalTemplate);
  }

  ajouterCompetence(): void {
    if (this.nouvelleCompetence.nom && this.nouvelleCompetence.niveau) {
      this.competenceService.ajouterCompetence(this.nouvelleCompetence);
      this.nouvelleCompetence = { id: 0, nom: '', niveau: '' };
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


  
