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
  public modo = 'post';

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
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  alunoNovo() {
    this.alunoSelect = new Aluno();
    this.alunoForm.patchValue(this.alunoSelect);
  }

  salvarAluno(aluno: Aluno) {

    (aluno.id == 0) ? this.modo = 'post' : this.modo = 'put';

    this.alunoService[this.modo](aluno).subscribe(
      (retorno: Aluno) => {
        this.carregarAlunos();
        console.log(retorno);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  desativar(id: number) {
    this.alunoService.delete(id).subscribe(
      () => {
        this.carregarAlunos();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
