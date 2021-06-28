import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoMarcaDto } from 'src/app/models/producto-marca-dto';
import { ProductoMarcaService } from 'src/app/services/producto-marca.service';

@Component({
	selector: 'app-nueva-marca',
	templateUrl: './nueva-marca.component.html',
	styleUrls: ['./nueva-marca.component.css']
})
export class NuevaMarcaComponent implements OnInit {

	nombre: "";

	constructor(
		private marcaService: ProductoMarcaService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
	}

	onCreate(): void {
		const nuevaMarca = new ProductoMarcaDto(this.nombre);
		this.marcaService.registrar(nuevaMarca).subscribe(
			data => {
				this.toastr.success('Marca guardada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.router.navigate(['admin/marcas']);
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
