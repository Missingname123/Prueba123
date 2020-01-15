import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ProductoService } from '../services/producto.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from '../services/modelos/product.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  uid: String;
  listaproductovendidosusuario;
  constructor(public auth:UsuarioService,public producto:ProductoService) {
  }

  get producto$(){
    return this.producto.productos$;
  }

  ngOnInit() {
    this.uid = this.auth.getUid();
    this.listaproductovendidosusuario = this.producto.getProductforUserId(this.uid)
      .valueChanges().pipe( map((producto) => {        
        return producto;
      }));
  }
  

}
