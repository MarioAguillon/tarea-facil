// 1. Definimos la interface para la estructura de la tarea
export interface Tarea {
  id: string;
  idUsuario: string;
  titulo: string;
  resumen: string;
  expira: string;
}

// NUEVA INTERFAZ: El molde para los datos del formulario
export interface NuevaTareaInfo {
  titulo: string;
  resumen: string;
  fecha: string;
}