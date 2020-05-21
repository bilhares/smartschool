import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = "Alunos";
  public alunoSelect: Aluno;
  public alunoForm: FormGroup;
  public modalRef: BsModalRef;

  public alunos: Aluno[];

  constructor(private fb: FormBuilder, private modalService: BsModalService,
    private alunoService: AlunoService) {
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => { this.alunos = alunos },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectAluno(aluno: Aluno) {
    this.alunoSelect = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelect = null;
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }


}
