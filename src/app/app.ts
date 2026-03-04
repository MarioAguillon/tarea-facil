import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content/main-content';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Sidebar, MainContent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idSeleccionado = 'u1'; // Usuario que aparece seleccionado al cargar

  // Esta función busca los datos completos del usuario según el ID
  get usuarioSeleccionado() {
    return this.usuarios.find((u) => u.id === this.idSeleccionado)!;
  }

  // Esta función se activa cuando el Sidebar emite el evento 'seleccion'
  alElegirUsuario(id: string) {
    this.idSeleccionado = id;
  }
}