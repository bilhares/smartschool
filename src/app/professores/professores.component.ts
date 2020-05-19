import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores"

  public professores = [
    { id: 1, nome: 'Adalberto', disciplina: 'Matematica' },
    { id: 2, nome: 'Patrick', disciplina: 'Historia' },
    { id: 3, nome: 'Fernando', disciplina: 'Fisica' },
    { id: 4, nome: 'Licio', disciplina: 'Geografia' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
