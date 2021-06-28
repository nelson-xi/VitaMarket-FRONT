import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoMarcaDto } from 'src/app/models/producto-marca-dto';
import { ProductoMarcaService } from 'src/app/services/producto-marca.service';

@Component({
	selector: 'app-editar-marca',
	templateUrl: './editar-marca.component.html',
	styleUrls: ['./editar-marca.component.css']
})
export class EditarMarcaComponent implements OnInit {

	marca: ProductoMarcaDto = null;

	constructor(
		private marcaService: ProductoMarcaService,
		private activatedRoute: ActivatedRoute,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		this.marcaService.detalle(id).subscribe(
			data => {
				this.marca = data;
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/marcas']);
			}
		);
	}

	onUpdate(): void {
		const id = this.activatedRoute.snapshot.params.id;
		this.marcaService.actualizar(id, this.marca).subscribe(
			data => {
				this.toastr.success('Marca Actualizada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['/admin/marcas']);
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.router.navigate(['/admin/marcas']);
			}
		);
	}

	volver(): void {
		this.router.navigate(['/admin/marcas']);
	}

}
