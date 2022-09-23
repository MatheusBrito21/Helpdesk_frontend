import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(cred: Credenciais){
    return this.http.post(`${API_CONFIG.baseUrl}login`,cred,{
      observe: 'response',
      responseType:'text'
    })
  }
}
