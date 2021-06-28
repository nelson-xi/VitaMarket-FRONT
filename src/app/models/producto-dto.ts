export class ProductoDto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imgUrl: string;
    marca: string;
    categoria: string;
    createDateTime?: string;
    updateDateTime?: string;

    constructor(
        nombre: string,
        descripcion: string,
        precio: number,
        stock: number,
        imgUrl: string,
        marca: string,
        categoria: string
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imgUrl = imgUrl;
        this.marca = marca;
        this.categoria = categoria;
    }
}
