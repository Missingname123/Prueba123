import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  cont = 0;

  constructor(private service:ProductoService,public auth:UsuarioService ) {}
  
  get producto$(){
    return this.service.productos$;
  }
  get contadorCompra(){
    return this.cont;
  }
  aumentarCantProductos(){
    this.cont++;
  }
  ngOnInit() {
    
  }

}
