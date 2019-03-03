# W1-Application-structure
Práctica para el sprint de la primera semana, correspondiente a los temas **0-Hello** y **1-Base**.

## Objetivos

- Funcionalidad básica para mantener proyectos.

- Usar distintas rutas y cargarlas de manera dinámica.

- Formulario para recogida de datos

- Tabla para presentación

## Tareas

- [x] use dummyData from **environment.ts** see resources below
- [x] create **HomeModule** with lazy loading
- [x] Create **HomeComponent**
- [x] Enable routing HomeComponent
- [x] Show Number of projects in HomeComponent
- [x] create **ProjectsModule** with lazy loading
- [x] Create **ProjectsComponent**
- [x] Enable routing ProjectsComponent
- [x] Show List of projects in ProjectsComponent
- [x] Create **EditorProjectComponent**
- [x] Enable routing EditorProjectComponent
- [x] Show Project with for current id in EditorProjectComponent
- [x] Create **NewProjectComponent**
- [x] Enable routing NewProjectComponent
- [x] Show form to create a new project in NewProjectComponent
- [x] Push new project in **environment**

## Recursos

Usa estos datos como punto de partida.
```typescript
export const environment = {
 appName: 'your practice election',
 production: false,
 projects: [
 { id: 0, name: 'Learn Angular' },
 { id: 1, name: 'Develop My Dream app' },
 { id: 2, name: 'Travel around the world' },
 { id: 3, name: 'Clean my room' }
 ]
};
```
Puedes importarlo en dónde lo necesites usando algo como...
```typescript
import { environment } from '../../environments/environment';
...
let projects = environment.projects;
...
```
> Recomendación: Seguir los guiones de las lecciones 2 y 3.