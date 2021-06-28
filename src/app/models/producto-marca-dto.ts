export class ProductoMarcaDto {
    id?: number;
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
