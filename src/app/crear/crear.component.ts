import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../services/modelos/product.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  form=new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    imageURL: new FormControl('')
  });

  constructor(private service:ProductoService,public auth:UsuarioService) { }

  get nombre() {
    return this.form.get('nombre');
  }
  get precio(){
    return this.form.get('precio');
  }
  get imageURL(){
    return this.form.get('imageURL');
  }

  ngOnInit() {
    
  }
  crearProducto(){
    const prod = (this.form.value) as Producto;
    this.form.get('nombre').setValue('');
    this.imageURL.setValue('');
    this.precio.setValue('');
    this.auth.user$.pipe(switchMap((usuario)=>{
      prod.usuarioVendedor=`/users/${usuario.uid}`;
      prod.usuarioCompra = null;
      return this.service.createProductos(prod);
    }))
    .subscribe(value => {
      console.log(value);
    });
    
    
    
    
 
  

  }
 
 

}
