import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoCategoriaDto } from 'src/app/models/producto-categoria-dto';
import { ProductoCategoriaService } from 'src/app/services/producto-categoria.service';

@Component({
	selector: 'app-editar-categoria',
	templateUrl: './editar-categoria.component.html',
	styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

	categoria: ProductoCategoriaDto = null;

	constructor(
		private categoriaService: ProductoCategoriaService,
		private activatedRoute: ActivatedRoute,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		this.categoriaService.detalle(id).subscribe(
			data => {
				this.categoria = data;
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/categorias']);
			}
		);
	}

	onUpdate(): void {
		const id = this.activatedRoute.snapshot.params.id;
		this.categoriaService.actualizar(id, this.categoria).subscribe(
			data => {
				this.toastr.success('Categoría Actualizada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['/admin/categorias']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/categorias']);
			}
		);
	}

	volver(): void {
		this.router.navigate(['/admin/categorias']);
	}

}
