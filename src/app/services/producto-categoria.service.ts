import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoCategoriaDto } from '../models/producto-categoria-dto';

@Injectable({
	providedIn: 'root'
})
export class ProductoCategoriaService {

	apiRest = 'http://localhost:8080/api/productos/categorias';

	constructor(private httpClient: HttpClient) { }

	public listar(): Observable<ProductoCategoriaDto[]> {
		return this.httpClient.get<ProductoCategoriaDto[]>(this.apiRest);
	}

	public detalle(id: number): Observable<ProductoCategoriaDto> {
		return this.httpClient.get<ProductoCategoriaDto>(this.apiRest + `/${id}`);
	}

	public registrar(categoria: ProductoCategoriaDto): Observable<any> {
		return this.httpClient.post<any>(this.apiRest, categoria);
	}

	public actualizar(id: number, categoria: ProductoCategoriaDto): Observable<any> {
		return this.httpClient.put<any>(this.apiRest + `/${id}`, categoria);
	}

	public eliminar(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.apiRest + `/${id}`);
	}

}
