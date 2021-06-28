import { Component, OnInit } from "@angular/core";
import { TokenService } from "../../services/token.service";
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: "app-menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {

	isLogged = false;
	isAdmin = false;
	isUser = false;
	nombreUsuario = "";
	roles: string[];


	constructor(
		private toastr: ToastrService,
		private tokenService: TokenService
	) { }

	ngOnInit() {
		if (this.tokenService.getToken()) {
			this.isLogged = true;
			this.nombreUsuario = this.tokenService.getUserName();
		} else {
			this.isLogged = false;
			this.nombreUsuario = "";
		}
		this.roles = this.tokenService.getAuthorities();
		this.roles.forEach(rol => {
			if (rol === 'ROLE_ADMIN') {
				this.isAdmin = true;
			} else {
				this.isUser = true;
			}
		});
	}

	onLogOut(): void {
		this.tokenService.logOut();
		window.location.reload();
	}

}
