import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorServer } from '../Errores/errorServer';
import { ErrorCreado } from '../Errores/error';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http:HttpClient) { }

  getImagenes(){
    return this.http.get(this.url).pipe(catchError(this.ManejarError));
  }

  ManejarError(errorcuatico:Response){
    if(errorcuatico.status === 404){
      return throwError(new ErrorServer);
    }
    return throwError(new ErrorCreado);
  }
}
