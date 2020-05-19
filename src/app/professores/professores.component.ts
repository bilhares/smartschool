import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professorSelecionado: Professor;
  titulo = "Professores"
  professorForm: FormGroup;

  public professores = [
    { id: 1, nome: 'Adalberto', disciplina: 'Matematica' },
    { id: 2, nome: 'Patrick', disciplina: 'Historia' },
    { id: 3, nome: 'Fernando', disciplina: 'Fisica' },
    { id: 4, nome: 'Licio', disciplina: 'Geografia' },
  ]

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  selecionarProfessor(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);    
  }
}
