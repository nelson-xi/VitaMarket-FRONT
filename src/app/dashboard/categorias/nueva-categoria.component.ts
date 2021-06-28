import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductoCategoriaService } from 'src/app/services/producto-categoria.service';
import { ProductoCategoriaDto } from 'src/app/models/producto-categoria-dto';

@Component({
	selector: 'app-nueva-categoria',
	templateUrl: './nueva-categoria.component.html',
	styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

	nuevaCategoria: ProductoCategoriaDto;
	nombre: "";

	constructor(
		private categoriaService: ProductoCategoriaService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
	}

	onCreate(): void {
		this.nuevaCategoria = new ProductoCategoriaDto(this.nombre);
		this.categoriaService.registrar(this.nuevaCategoria).subscribe(
			data => {
				this.toastr.success('Categoría guardada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['admin/categorias']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['admin/categorias/registro']);
			}
		);
	}

	volver(): void {
		this.router.navigate(['/admin/categorias']);
	}

}
