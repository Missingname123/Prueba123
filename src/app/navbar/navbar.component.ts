import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:UsuarioService) { }

  ngOnInit() {
  }

}
