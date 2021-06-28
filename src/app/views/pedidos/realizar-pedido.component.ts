import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PedidoDto } from 'src/app/models/pedido-dto';
import { ProductoDto } from 'src/app/models/producto-dto';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-realizar-pedido',
	templateUrl: './realizar-pedido.component.html',
	styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {

	calle: string;
	distrito: string;
	ciudad: string;
	precio: number;
	preciototal: number;

	producto: ProductoDto = null;
	nuevoPedido: PedidoDto;
	cliente: string;
	direccion: string;
	idProducto: number;
	cantidad: number;

	constructor(
		private productoService: ProductoService,
		private pedidoService: PedidoService,
		private activatedRoute: ActivatedRoute,
		private tokenService: TokenService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		this.idProducto = id;
		this.productoService.detalle(id).subscribe(
			data => {
				this.producto = data;
				this.precio = this.producto.precio;
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.volver();
			}
		);
	}

	onCreate(): void {
		this.cliente = this.tokenService.getUserName();
		this.direccion = this.calle + " - " + this.distrito + " - " + this.ciudad;
		this.nuevoPedido = new PedidoDto(this.cliente, this.direccion, this.idProducto, this.cantidad);
		this.pedidoService.registrar(this.nuevoPedido).subscribe(
			data => {
				this.toastr.success('Pedido realizado', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['/productos']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/productos']);
			}
		);
	}

	volver(): void {
		this.router.navigate(['/productos']);
	}

}
