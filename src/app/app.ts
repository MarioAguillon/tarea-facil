import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContentComponent } from './components/main-content/main-content';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sidebar, MainContentComponent], // El profesor los llama Encabezado, Usuario, Tareas
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tarea Fácil - Davis');
  
  usuarios = USUARIOS_FALSOS;
  
  // CAMBIO CLAVE: idUsuarioSeleccionado puede ser string o estar vacío
  idUsuarioSeleccionado?: string;

  // El getter busca al usuario en la lista basándose en ese ID
  get usuarioSeleccionado() {
    return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSeleccionado);
  }

  // Cuando haces clic, guardamos el ID
  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}