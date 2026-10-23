# Verificación de navegación y presentación móvil

Las comprobaciones se realizaron con la aplicación servida por Ionic CLI en
`http://127.0.0.1:8100` y con Ionic Lab en `http://127.0.0.1:8200`.

## Resultados observados

| Comprobación | Resultado |
| --- | --- |
| Entrada por `/` | Redirige a `/home` y muestra SkeletonAPP. |
| Botón Abrir Login en Inicio | Navega a `/login` y muestra la página Login. |
| Enlace Volver al inicio en Login | Regresa a `/home`. |
| Acceso directo a `/login` en modo iOS | La página carga y el botón Volver regresa a Inicio. |
| Acceso directo a `/login` en modo Android | La página carga y el enlace Volver al inicio regresa a Inicio. |
| Inicio en Ionic Lab | Se muestra en las vistas iOS y Android. |
| Login en Ionic Lab | Se muestra en las vistas iOS y Android. |
| Modo aplicado a los marcos de Ionic Lab | El marco izquierdo usa la clase `ios`; el derecho usa `md`. |
| Consola de la vista final de Ionic Lab | Sin errores JavaScript registrados. |

## Capturas

- [Inicio en iOS y Android](ionic-lab-inicio.jpg).
- [Login en iOS y Android](ionic-lab-login.jpg).

## Comprobaciones del proyecto

El registro [verificacion-local.txt](verificacion-local.txt) contiene los
resultados de los comandos ejecutados:

- `npm run lint`: correcto.
- `npm test -- --watch=false`: 3 archivos de prueba y 3 pruebas aprobadas.
- `ionic build --no-interactive`: compilación de producción correcta en `www/`.

## Alcance de las vistas

Ionic Lab presenta la aplicación web con los modos visuales de iOS y Android.
Estas comprobaciones corresponden a la visualización web y la navegación de la
actividad de la semana 1. La página Login contiene su estructura inicial y
controles de navegación. La construcción de APK o IPA y la autenticación se
desarrollarán cuando corresponda incorporarlas al proyecto.

El servidor de desarrollo usa `prebundle: false` para evitar el error de
renderizado de los componentes Ionic observado con el preempaquetado activado.
Las capturas corresponden a la configuración corregida.
