# SkeletonAPP

Proyecto de Programación Aplicaciones Móviles (PGY4221, Duoc UC). La versión de la
semana 2, **No es todo**, continúa la plantilla en blanco de Ionic con Angular
creada durante la [semana 1](https://github.com/fesantibanezl/SkeletonApp/tree/semana-1).

## Ejecutar

Requiere Node.js 22.12+ de la serie 22 o Node.js 24 y npm. Desde la raíz del proyecto:

```powershell
npm ci
npm start -- --host=127.0.0.1 --port=8100
```

Abre http://127.0.0.1:8100. Si tienes Ionic CLI, también puedes iniciar el
proyecto con `ionic serve --host=127.0.0.1 --port=8100`. Para ver los dos formatos
móviles con Ionic Lab, mantén el servidor activo y ejecuta `npm run lab` en otra
terminal; Lab queda en http://127.0.0.1:8200.

## Probar la actividad

1. Al abrir la app aparece **Login**. Prueba un usuario corto o con símbolos y un
   PIN de tamaño incorrecto: aparecen los mensajes de validación y no se avanza.
2. Usa, por ejemplo, **Demo07** y el PIN **0042**. **Ingresar** abre Home y muestra
   el usuario recibido. Es un acceso de demostración: la validación es de formato.
3. En **Información adicional**, completa nombre y apellido, elige un nivel y
   selecciona la fecha en el calendario de Angular Material. El calendario parte
   en la selección de año y muestra los textos en español.
4. **Mostrar** presenta nombre y apellido en un mensaje emergente. **Limpiar**
   vacía los cuatro campos y desplaza los campos de nombre y apellido de izquierda
   a derecha una vez en un segundo. El título se anima al abrir Home. Las
   animaciones respetan la preferencia de movimiento reducido del dispositivo.
5. **Salir** vuelve a Login.

## Decisiones de implementación

- Formularios reactivos de Angular para el estado, la validación y el borrado.
- `NavigationExtras.state` transporta únicamente el nombre de usuario. La ruta
  resuelve ese valor y Home lo lee desde `ActivatedRoute`; la URL no lleva el PIN.
- La tarjeta común recibe su título mediante una entrada de Angular y presenta el
  contenido de cada página con `ng-content`.
- Se usa [MatDatepicker](https://material.angular.dev/components/datepicker/overview)
  y el controlador de animaciones de Ionic. La fecha no admite valores futuros.
- Los archivos históricos de la semana 1 se conservan en el repositorio; describen
  la versión anterior.

## Verificación

```powershell
npm run lint
npm test -- --watch=false
npm run build
```

Repositorio público: [fesantibanezl/SkeletonApp](https://github.com/fesantibanezl/SkeletonApp).
Rama de la actividad: [semana-2](https://github.com/fesantibanezl/SkeletonApp/tree/semana-2).
