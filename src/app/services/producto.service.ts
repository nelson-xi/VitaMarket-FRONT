import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoDto } from '../models/producto-dto';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	apiRest = 'http://localhost:8080/api/productos';

	constructor(private httpClient: HttpClient) { }

	public listar(): Observable<ProductoDto[]> {
		return this.httpClient.get<ProductoDto[]>(this.apiRest);
	}

	public filtrar(nombre: string, marca: string, categoria: string, orden: string, tipo: string): Observable<ProductoDto[]> {
		return this.httpClient.get<ProductoDto[]>(
			this.apiRest + `?nombre=${nombre}&marca=${marca}&categoria=${categoria}&sort=${orden},${tipo}`
		);
	}

	public detalle(id: number): Observable<ProductoDto> {
		return this.httpClient.get<ProductoDto>(this.apiRest + `/${id}`);
	}

	public registrar(producto: ProductoDto): Observable<any> {
		return this.httpClient.post<any>(this.apiRest, producto);
	}

	public actualizar(id: number, producto: ProductoDto): Observable<any> {
		return this.httpClient.put<any>(this.apiRest + `/${id}`, producto);
	}

	public eliminar(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.apiRest + `/${id}`);
	}

}
