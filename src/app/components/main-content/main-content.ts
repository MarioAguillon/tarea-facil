import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea';
import { NuevaTarea } from '../nueva-tarea/nueva-tarea'; 
import { NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TareaComponent, NuevaTarea],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContentComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  // Tu lista de tareas completa
  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Aprender todas las características básicas y avanzadas de Angular.',
      expira: '2026-04-14',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda.',
      expira: '2026-03-16',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras.',
      expira: '2026-03-30',
    },
  ];

  get tareasUsuarioSeleccionado() {
    return this.tareas.filter((tarea) => tarea.idUsuario === this.idUsuario);
  }

  alCompletarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  alIniciarNuevaTarea(){
    this.estaAgregandoTareaNueva = true;
  }

  alCancelarTareaNueva(){
    this.estaAgregandoTareaNueva = false;
  }

  alAgregarTarea(infoDeTarea: NuevaTareaInfo) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
      idUsuario: this.idUsuario 
    });

    this.estaAgregandoTareaNueva = false;
  }
} // <--- ESTA ES LA ÚNICA LLAVE QUE CIERRA TODO EL COMPONENTE