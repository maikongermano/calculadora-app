import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl + "/calculadora";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(private http: HttpClient) { }

  getOperacao(tipo: string, primeiro: string, segundo: string): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/operacao/${tipo}?primeiro=${primeiro}&segundo=${segundo}`);
  }
}
