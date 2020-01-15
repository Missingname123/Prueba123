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
  uid: string = '';
  listaproductovendidosusuario;
  constructor(public auth:UsuarioService,public producto:ProductoService) {
    this.auth.user$.pipe(switchMap((usuario)=>{
      if(usuario) this.uid = `/users/${usuario.uid}`;
      return this.uid; 
    }));
   }

  get producto$(){
    return this.producto.productos$;
  }
  get idUser(){
    this.auth.user$.pipe(switchMap((usuario)=>{
    if(usuario) this.uid = `/users/${usuario.uid}`;
    return this.uid; 
    }))
    .subscribe(value => {
      console.log(value);
    });
    
    return this.uid;
  }
  get ListaProductosVendido(){
    this.producto.getProductforUserId(this.idUser)
    .valueChanges().pipe(
      map(productossUsuarioVende=>{
        console.log(productossUsuarioVende);
      }));
      return console.log();
  }
 

  ngOnInit() {
    this.listaproductovendidosusuario = this.producto.getProductforUserId(this.idUser)
    .valueChanges().pipe(
      map(productossUsuarioVende=>{
        return productossUsuarioVende as Producto[];
      }
    ));
  }
  

}
