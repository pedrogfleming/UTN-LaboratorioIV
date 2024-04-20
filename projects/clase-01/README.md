# Ejercicio en clase: 
## AppComponent (app.component.html)

Crear una aplicación que acepte dos edades en dos cuadros de texto:
- `edadUno`
- `edadDos`

Mostrar el promedio y la suma en dos nuevos cuadros de texto.

Botones: 
- "calcular" 
- "limpiar cuadros de texto"

## Componentes nuevos

Crear la clase `Usuario` con `nombre` y `clave`.

Crear los siguientes componentes:
- `Bienvenido`
- `Login`
- `Error`

(Opcional) Realizar el enrutamiento.

### Comandos
cd ejercicios-clases/
ng generate application clase-01
ng generate component formEdad --project clase-01
ng generate class --project clase-01 --skip-tests
ng generate component bienvenido --project clase-01
ng generate component login --project clase-01
ng generate component error --project clase-01
ng serve clase-01
ng build clase-01