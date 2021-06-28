import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoCategoriaDto } from 'src/app/models/producto-categoria-dto';
import { ProductoCategoriaService } from 'src/app/services/producto-categoria.service';

@Component({
	selector: 'app-lista-categoria',
	templateUrl: './lista-categoria.component.html',
	styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

	categorias: ProductoCategoriaDto[] = [];

	constructor(private categoriaService: ProductoCategoriaService, private toastr: ToastrService) { }

	ngOnInit() {
		this.cargarCategorias();
	}

	cargarCategorias(): void {
		this.categoriaService.listar().subscribe(
			data => {
				this.categorias = data;
			},
			err => {
				console.log(err);
			}
		);
	}

	borrar(id: number) {
		this.categoriaService.eliminar(id).subscribe(
			data => {
				this.toastr.success('Categoría Eliminada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.cargarCategorias();
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
			}
		);
	}

}
