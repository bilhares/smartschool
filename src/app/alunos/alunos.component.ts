import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = "Alunos";
  public alunos = [
    {nome:'Ana'},
    {nome:'Felipe'},
    {nome:'João'},
    {nome:'José'},
    {nome:'Marta'},
    {nome:'Paulo'},
    {nome:'Pedro'},
    {nome:'Vitor'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
