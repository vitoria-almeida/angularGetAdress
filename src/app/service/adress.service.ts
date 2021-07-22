import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from '../interface/interfaceAdress'

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  private readonly apiUrl: string = 'https://viacep.com.br/ws'

  constructor(private http: HttpClient) { }

  getAdress(cep: string): Observable<Adress> {
    return this.http.get<Adress>(`${this.apiUrl}/${cep}/json`)
  }
}
