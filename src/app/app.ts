import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para que funcionen cosas básicas
// Importamos tus 3 componentes:
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content/main-content';

@Component({
  selector: 'app-root',
  standalone: true, // Esto confirma que es modo moderno
  imports: [
    CommonModule, 
    Header,   // <--- Agrégalo aquí
    Sidebar,  // <--- Agrégalo aquí
    MainContent // <--- Agrégalo aquí
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'tarea-facil';
}