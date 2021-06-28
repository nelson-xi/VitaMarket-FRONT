import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PedidoDto } from 'src/app/models/pedido-dto';
import { ProductoDto } from 'src/app/models/producto-dto';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-lista-pedido',
	templateUrl: './lista-pedido.component.html',
	styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

	pedidos: PedidoDto[] = [];
	productos: ProductoDto[] = [];
	cliente: string;

	constructor(
		private pedidoService: PedidoService,
		private tokenService: TokenService,
	) { }

	ngOnInit() {
		this.cliente = this.tokenService.getUserName();
		this.cargarPedidos();
	}

	cargarPedidos(): void {
		this.pedidoService.misPedidos(this.cliente).subscribe(
			data => {
				this.pedidos = data;
			},
			err => {
				console.log(err);
			}
		);
	}

}
