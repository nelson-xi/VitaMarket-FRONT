import { Component, OnInit } from '@angular/core';
import { ProductoMarcaDto } from 'src/app/models/producto-marca-dto';
import { ProductoMarcaService } from 'src/app/services/producto-marca.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-lista-marca',
	templateUrl: './lista-marca.component.html',
	styleUrls: ['./lista-marca.component.css']
})
export class ListaMarcaComponent implements OnInit {

	marcas: ProductoMarcaDto[] = [];

	constructor(private marcaService: ProductoMarcaService, private toastr: ToastrService) { }

	ngOnInit() {
		this.cargarMarcas();
	}

	cargarMarcas(): void {
		this.marcaService.listar().subscribe(
			data => {
				this.marcas = data;
			},
			err => {
				console.log(err);
			}
		);
	}

	borrar(id: number) {
		this.marcaService.eliminar(id).subscribe(
			data => {
				this.toastr.success('Marca Eliminada', 'OK', {
					timeOut: 3000, positionClass: 'toast-top-center'
				});
				this.cargarMarcas();
			},
			err => {
				this.toastr.error(err.error.mensaje, 'Fail', {
					timeOut: 3000, positionClass: 'toast-top-center',
				});
			}
		);
	}

}
