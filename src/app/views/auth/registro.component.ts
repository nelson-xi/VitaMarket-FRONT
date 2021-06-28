import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth.service";
import { TokenService } from "../../services/token.service";
import { RegistroDto } from "src/app/models/registro-dto";

@Component({
	selector: "app-registro",
	templateUrl: "./registro.component.html",
	styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
	isLogged = false;
	isRegisterFail = false;
	nuevoUsuario: RegistroDto;
	nombres: string;
	apellidos: string;
	email: string;
	celular: string;
	username: string;
	password: string;
	errMsj: string;

	constructor(
		private tokenService: TokenService,
		private authService: AuthService,
		private router: Router,
		private toastr: ToastrService
	) { }

	ngOnInit() {
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		}
	}

	onRegister(): void {
		this.nuevoUsuario = new RegistroDto(this.nombres, this.apellidos, this.email, this.celular, this.username, this.password);
		this.authService.registro(this.nuevoUsuario).subscribe(
			(data) => {
				this.toastr.success('Registro exitoso', 'HECHO', {
					timeOut: 3000, positionClass: 'toast-top-center'
				})
				this.router.navigate(["/login"]);
			},
			(err) => {
				this.isRegisterFail = true;
				this.errMsj = err.error.mensaje;
				this.toastr.error(this.errMsj, 'Ha ocurrido un error', {
					timeOut: 3000, positionClass: 'toast-top-center'
				})
				console.log(err.error.nombres);
			}
		);
	}

}
