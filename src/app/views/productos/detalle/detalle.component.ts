import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ProductoDto } from "src/app/models/producto-dto";
import { ProductoService } from "src/app/services/producto.service";

@Component({
	selector: "app-detalle",
	templateUrl: "./detalle.component.html",
	styleUrls: ["./detalle.component.css"],
})
export class DetalleComponent implements OnInit {

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
				this.toastr.error(err.error.mensaje, 'Error', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
				this.volver();
			}
		);
	}

	volver(): void {
		this.router.navigate(['/productos']);
	}

}
