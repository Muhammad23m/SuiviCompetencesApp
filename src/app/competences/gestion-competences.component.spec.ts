import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompetencesComponent } from './gestion-competences.component';

describe('GestionCompetencesComponent', () => {
  let component: GestionCompetencesComponent;
  let fixture: ComponentFixture<GestionCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCompetencesComponent]
    });
    fixture = TestBed.createComponent(GestionCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
