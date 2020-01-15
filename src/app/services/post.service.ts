import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorCreado } from '../Errores/error';
import { ErrorServer } from '../Errores/errorServer';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url).pipe(catchError(this.ManejarError));
  }

  createPost(post){
    return this.http.post(this.url,post).pipe(catchError(this.ManejarError));
  }

  deletePost(id){
    return this.http.delete(this.url+'/'+id).pipe(catchError(this.ManejarError));
  }


  ManejarError(errorBrijido:Response){

    if(errorBrijido.status === 404){
      return throwError(new ErrorServer(errorBrijido));//Crear error Server
    }

    return throwError(new ErrorCreado(errorBrijido)); // Crear error en common
  }
}

