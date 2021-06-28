import { Component, OnInit } from '@angular/core';
import { ProductoDto } from '../../models/producto-dto';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-lista-producto',
	templateUrl: './lista-producto.component.html',
	styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

	productos: ProductoDto[] = [];

	constructor(private productoService: ProductoService, private toastr: ToastrService) { }

	ngOnInit() {
		this.cargarProductos();
	}

	cargarProductos(): void {
		this.productoService.listar().subscribe(
			data => {
				this.productos = data;
			},
			err => {
				console.log(err);
			}
		);
	}

	borrar(id: number) {
		this.productoService.eliminar(id).subscribe(
			data => {
				this.toastr.success('Producto Eliminado', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.cargarProductos();
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
			}
		);
	}

}
