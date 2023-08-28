import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProfessionnelsComponent } from './recherche-professionnels.component';

describe('RechercheProfessionnelsComponent', () => {
  let component: RechercheProfessionnelsComponent;
  let fixture: ComponentFixture<RechercheProfessionnelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheProfessionnelsComponent]
    });
    fixture = TestBed.createComponent(RechercheProfessionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
