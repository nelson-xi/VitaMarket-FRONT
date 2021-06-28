import { Component, OnInit } from '@angular/core';
import { ProductoDto } from '../../models/producto-dto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoCategoriaDto } from '../../models/producto-categoria-dto';
import { ProductoMarcaDto } from '../../models/producto-marca-dto';
import { ProductoCategoriaService } from '../../services/producto-categoria.service';
import { ProductoMarcaService } from '../../services/producto-marca.service';

@Component({
	selector: 'app-editar-producto',
	templateUrl: './editar-producto.component.html',
	styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

	categorias: ProductoCategoriaDto[] = [];
	marcas: ProductoMarcaDto[] = [];
	producto: ProductoDto = null;

	constructor(
		private productoService: ProductoService,
		private categoriaService: ProductoCategoriaService,
		private marcaService: ProductoMarcaService,
		private activatedRoute: ActivatedRoute,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		this.cargarCategorias();
		this.cargarMarcas();
		const id = this.activatedRoute.snapshot.params.id;
		this.productoService.detalle(id).subscribe(
			data => {
				this.producto = data;
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/productos']);
			}
		);
	}

	onUpdate(): void {
		const id = this.activatedRoute.snapshot.params.id;
		this.productoService.actualizar(id, this.producto).subscribe(
			data => {
				this.toastr.success('Producto Actualizado', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['/admin/productos']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/productos']);
			}
		);
	}

	volver(): void {
		this.router.navigate(['/admin/productos']);
	}

	cargarCategorias(): ProductoCategoriaDto[] {
		this.categoriaService.listar().subscribe(
			data => {
				this.categorias = data;
			},
			err => {
				console.log(err);
			}
		);
		return this.categorias;
	}

	cargarMarcas(): ProductoMarcaDto[] {
		this.marcaService.listar().subscribe(
			data => {
				this.marcas = data;
			},
			err => {
				console.log(err);
			}
		);
		return this.marcas;
	}

}
