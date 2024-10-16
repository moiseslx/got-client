import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDTO } from '../interface/token';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { LoginDTO } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(login: LoginDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.apiUrl}user/login`, login);
  }
}
