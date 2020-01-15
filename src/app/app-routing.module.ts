import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error-component/error-component.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearComponent } from './crear/crear.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{

  path: 'comentariosUsuarios',
  component: ComentariosComponent

},
{

  path:'logIn',
  component: UsuariosComponent 

},
{
  path:'productos',
  component: ProductosComponent
},
{
  path:'crear',
  component: CrearComponent
},
{

  path: '**',
  component: ErrorComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
