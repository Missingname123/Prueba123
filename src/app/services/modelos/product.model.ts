import {Observable} from 'rxjs';

export interface Producto{
    id?:string;
    nombre:string;
    precio:number;
    imageURL:string;
    usuarioCompra?:string;
    usuarioVendedor?:string;
}