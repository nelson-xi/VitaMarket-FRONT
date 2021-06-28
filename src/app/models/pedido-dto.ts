export class PedidoDto {
    id?: number;
    cliente: string;
    direccion: string;
    idProducto: number;
    cantidad: number;
    total?: number;
    fecha?: string;
    entregado?: number;

    constructor(
        cliente: string,
        direccion: string,
        idProducto: number,
        cantidad: number
    ) {
        this.cliente = cliente;
        this.direccion = direccion;
        this.idProducto = idProducto;
        this.cantidad = cantidad
    }
}
