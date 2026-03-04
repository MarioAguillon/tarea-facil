import { Component } from '@angular/core';

// Importamos tus componentes y los datos falsos
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content/main-content';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sidebar, MainContent], // Tus componentes reales
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. Cargamos la lista de usuarios del archivo usuarios-falsos.ts
  usuarios = USUARIOS_FALSOS;

  // 2. Definimos qué usuario empieza seleccionado por defecto (u1)
  idUsuarioSeleccionado = 'u1';

  // 3. Esta función busca los datos del usuario que coincide con el ID seleccionado
  get usuarioSeleccionado() {
    // Usamos 'find' para buscar en tu lista de usuarios
    return this.usuarios.find((user) => user.id === this.idUsuarioSeleccionado)!;
  }

  // 4. Esta es la función que se activa al pasar el mouse por el sidebar
  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}