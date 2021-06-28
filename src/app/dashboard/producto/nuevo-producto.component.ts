import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoDto } from '../../models/producto-dto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductoCategoriaDto } from '../../models/producto-categoria-dto';
import { ProductoMarcaDto } from '../../models/producto-marca-dto';
import { ProductoMarcaService } from '../../services/producto-marca.service';
import { ProductoCategoriaService } from '../../services/producto-categoria.service';

@Component({
	selector: 'app-nuevo-producto',
	templateUrl: './nuevo-producto.component.html',
	styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

	categorias: ProductoCategoriaDto[] = [];
	marcas: ProductoMarcaDto[] = [];
	nuevoProducto: ProductoDto;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	imgUrl: string;
	marca: string;
	categoria: string;

	constructor(
		private productoService: ProductoService,
		private categoriaService: ProductoCategoriaService,
		private marcaService: ProductoMarcaService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		this.cargarCategorias();
		this.cargarMarcas();
	}

	onCreate(): void {
		this.nuevoProducto = new ProductoDto(this.nombre, this.descripcion, this.precio, this.stock, this.imgUrl, this.marca, this.categoria);
		this.productoService.registrar(this.nuevoProducto).subscribe(
			data => {
				this.toastr.success('Producto guardado', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['admin/productos']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['admin/productos/registro']);
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
