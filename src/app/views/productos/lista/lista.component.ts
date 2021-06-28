import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCategoriaDto } from 'src/app/models/producto-categoria-dto';
import { ProductoDto } from 'src/app/models/producto-dto';
import { ProductoMarcaDto } from 'src/app/models/producto-marca-dto';
import { ProductoCategoriaService } from 'src/app/services/producto-categoria.service';
import { ProductoMarcaService } from 'src/app/services/producto-marca.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	productos: ProductoDto[] = [];
	categorias: ProductoCategoriaDto[] = [];
	marcas: ProductoMarcaDto[] = [];

	nombre: string;
	categoria: string;
	marca: string;
	orden: string;
	tipo: string;

	constructor(
		private productoService: ProductoService,
		private categoriaService: ProductoCategoriaService,
		private marcaService: ProductoMarcaService
	) { }

	ngOnInit() {
		this.cargarProductos();
		this.cargarCategorias();
		this.cargarMarcas();
	}

	cargarProductos(): ProductoDto[] {
		this.productoService.listar().subscribe(
			data => {
				this.productos = data;
			},
			err => {
				console.log(err);
			}
		);
		return this.productos;
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

	onFilter(): ProductoDto[] {
		if (!this.nombre) { this.nombre = "" }
		if (!this.categoria) { this.categoria = "" }
		if (!this.marca) { this.marca = "" }
		if (!this.orden) { this.orden = "" }
		if (!this.tipo) { this.tipo = "" }
		this.productoService.filtrar(this.nombre, this.marca, this.categoria, this.orden, this.tipo).subscribe(
			data => {
				this.productos = data;
				console.log(this.nombre)
			},
			err => {
				console.log(err);
			}
		);
		return this.productos;
	}

	onClear(): void {
		this.nombre = "";
		this.categoria = "";
		this.marca = "";
		this.orden = "";
		this.tipo = "";
		this.cargarProductos();
	}

}
