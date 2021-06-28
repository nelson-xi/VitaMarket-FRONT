import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginDto } from '../models/login-dto';
import { RegistroDto } from '../models/registro-dto';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authURL = 'http://localhost:8080/auth/'

	constructor(private httpClient: HttpClient) { }

	public registro(registroDto: RegistroDto): Observable<any> {
		return this.httpClient.post<any>(this.authURL + 'registro', registroDto);
	}

	public login(loginDto: LoginDto): Observable<JwtDto> {
		return this.httpClient.post<any>(this.authURL + 'login', loginDto);
	}

}
