import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = `${environment.base_url}/api/aluno`;

  constructor(private Http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.Http.get<Aluno[]>(this.baseUrl);
  }

  getById(id: number): Observable<Aluno> {
    return this.Http.get<Aluno>(`${this.baseUrl}/${id}`);
  }

  post(aluno: Aluno) {
    return this.Http.post(this.baseUrl, aluno);
  }

  put(aluno: Aluno) {
    return this.Http.put(`${this.baseUrl}/${aluno.id}`, aluno);
  }

  delete(id: number) {
    return this.Http.delete(`${this.baseUrl}/${id}`);
  }
}
