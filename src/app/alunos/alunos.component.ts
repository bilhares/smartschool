import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = "Alunos";
  public alunos = [
    { id: 1, nome: 'Ana', sobrenome: 'Souza', telefone: '3354-6521' },
    { id: 2, nome: 'Felipe', sobrenome: 'Bilhares', telefone: '3354-6521' },
    { id: 3, nome: 'João', sobrenome: 'Cunha', telefone: '3354-6521' },
    { id: 4, nome: 'José', sobrenome: 'Temer', telefone: '3354-6521' },
    { id: 5, nome: 'Marta', sobrenome: 'Rouseff', telefone: '3354-6521' },
    { id: 6, nome: 'Paulo', sobrenome: 'Biroliro', telefone: '3354-6521' },
    { id: 7, nome: 'Pedro', sobrenome: 'Cardoso', telefone: '3354-6521' },
    { id: 8, nome: 'Vitor', sobrenome: 'Oliveiras', telefone: '3354-6521' },
  ]

  public alunoSelect: Aluno;

  selectAluno(aluno: Aluno) {
    this.alunoSelect = aluno;
  }

  voltar() {
    this.alunoSelect = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
