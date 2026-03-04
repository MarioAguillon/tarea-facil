import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
  // El profesor usa @Input para recibir datos desde afuera
  // La exclamación '!' indica que el valor llegará después (cuando el mouse pase por encima)
  @Input({ required: true }) nombre!: string;
}