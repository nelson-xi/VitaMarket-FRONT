import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoDto } from '../models/pedido-dto';

@Injectable({
	providedIn: 'root'
})
export class PedidoService {

	apiRest = 'http://localhost:8080/api/pedidos';

	constructor(private httpClient: HttpClient) { }

	public listar(): Observable<PedidoDto[]> {
		return this.httpClient.get<PedidoDto[]>(this.apiRest);
	}

	public misPedidos(cliente: string): Observable<PedidoDto[]> {
		return this.httpClient.get<PedidoDto[]>(this.apiRest + `/get?username=${cliente}`);
	}

	public detalle(id: number): Observable<PedidoDto> {
		return this.httpClient.get<PedidoDto>(this.apiRest + `/${id}`);
	}

	public registrar(pedido: PedidoDto): Observable<any> {
		return this.httpClient.post<any>(this.apiRest, pedido);
	}

	public actualizar(id: number, pedido: PedidoDto): Observable<any> {
		return this.httpClient.put<any>(this.apiRest + `/${id}`, pedido);
	}

	public eliminar(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.apiRest + `/${id}`);
	}

}
