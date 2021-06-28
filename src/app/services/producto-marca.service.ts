import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoMarcaDto } from '../models/producto-marca-dto';

@Injectable({
	providedIn: 'root'
})
export class ProductoMarcaService {

	apiRest = 'http://localhost:8080/api/productos/marcas';

	constructor(private httpClient: HttpClient) { }

	public listar(): Observable<ProductoMarcaDto[]> {
		return this.httpClient.get<ProductoMarcaDto[]>(this.apiRest);
	}

	public detalle(id: number): Observable<ProductoMarcaDto> {
		return this.httpClient.get<ProductoMarcaDto>(this.apiRest + `/${id}`);
	}

	public registrar(marca: ProductoMarcaDto): Observable<any> {
		return this.httpClient.post<any>(this.apiRest, marca);
	}

	public actualizar(id: number, marca: ProductoMarcaDto): Observable<any> {
		return this.httpClient.put<any>(this.apiRest + `/${id}`, marca);
	}

	public eliminar(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.apiRest + `/${id}`);
	}

}
