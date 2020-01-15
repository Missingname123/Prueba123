import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Producto} from 'src/app/services/modelos/product.model';
import { map } from 'rxjs/operators';
import { FirebaseFirestore } from 'angularfire2';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ProductosPath = '/productos';
  productoList:AngularFirestoreCollection<any>=null;
  productos$:Observable<Producto[]>;
  productoListUsuarioVende:Observable<Producto[]>;
  productosfiltr: AngularFirestoreCollection<unknown>=null;

  constructor(private db:AngularFirestore) { 

    this.productoList = db.collection(this.ProductosPath);
    this.productos$ = this.productoList.valueChanges()
    .pipe(
      map(productoss=>{
        return productoss as Producto[];
      })
  )
  }
  
  createProductos(productos:Producto){
    return this.productoList.add(productos);
  }

  updateProductos(key:string,value:any) {
    return this.productoList.doc(key).update(value);
  }
  getProductforUserId(uId){
    return this.productosfiltr = this.db.collection('/productos',
    ref =>ref.where('usuarioVendedor','==',uId));
    
  }

}
