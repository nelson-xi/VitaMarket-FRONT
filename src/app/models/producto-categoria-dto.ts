export class ProductoCategoriaDto {
    id?: number;
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
