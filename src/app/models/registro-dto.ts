export class RegistroDto {
    nombres: string;
    apellidos: string;
    email: string;
    celular: string;
    username: string;
    password: string;

    constructor(
        nombres: string,
        apellidos: string,
        email: string,
        celular: string,
        username: string,
        password: string
    ) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.celular = celular;
        this.username = username;
        this.password = password;
    }
}
