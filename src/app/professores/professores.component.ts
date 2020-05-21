import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professorSelecionado: Professor;
  titulo = "Professores"
  professorForm: FormGroup;
  modalRef: BsModalRef;

  public professores: Professor[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService, private professorService: ProfessorService) {
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores) => { this.professores = professores },
      (error) => {
        console.log(error);
      }
    );
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
      id:[''],
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }
}
