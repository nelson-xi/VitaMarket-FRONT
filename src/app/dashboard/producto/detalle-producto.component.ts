import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoDto } from '../../models/producto-dto';

@Component({
	selector: 'app-detalle-producto',
	templateUrl: './detalle-producto.component.html',
	styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

	producto: ProductoDto = null;

	constructor(
		private productoService: ProductoService,
		private activatedRoute: ActivatedRoute,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		this.productoService.detalle(id).subscribe(
			data => {
				this.producto = data;
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.volver();
			}
		);
	}

	volver(): void {
		this.router.navigate(['/admin/productos']);
	}

}
