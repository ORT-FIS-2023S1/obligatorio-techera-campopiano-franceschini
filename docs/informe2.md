# Informe académico - Entrega 2

## Objetivos

En esta segunda entrega del proyecto, nos planteamos los siguientes objetivos:

- Construir la aplicación utilizando las tecnologías definidas.

- Desarrollar la interfaz de usuario siguiendo principios de usabilidad y accesibilidad.

- Aplicar prácticas de calidad de código y test unitario.

- Realizar pruebas de sistema.

- Reportar issues y realizar una evaluación global de calidad.

## Construcción

Durante el desarrollo del proyecto, hemos aplicado diversas técnicas de ingeniería de software y hemos adquirido importantes aprendizajes. Hemos utilizado Node.js, Express y EJS como tecnologías principales. A continuación, se detalla el motivo por el cual hemos seleccionado cada una de estas tecnologías:

- **Node.js**: Elegimos Node.js debido a su capacidad para manejar grandes volúmenes de peticiones concurrentes y su eficiencia en la construcción de aplicaciones web escalables.

- **Express**: Utilizamos Express como framework de aplicaciones web en Node.js debido a su simplicidad y flexibilidad. Nos permite crear fácilmente rutas, gestionar middleware y trabajar con solicitudes y respuestas HTTP de manera eficiente.

- **EJS (Embedded JavaScript)**: Optamos por EJS como motor de plantillas para generar vistas dinámicas en nuestra aplicación. EJS nos permite mezclar código JavaScript con HTML, lo cual facilita la generación de contenido dinámico y la reutilización de componentes.

A lo largo del proyecto, hemos explorado y aplicado buenas prácticas de desarrollo, como el uso de controladores, modelos, enrutamiento modular, validación de datos, gestión de sesiones, entre otros. También hemos realizado pruebas unitarias y pruebas de sistema para asegurar la calidad de nuestro código y la funcionalidad de la aplicación.

## Interfaz de Usuario

### Sección para usuarios generales

Esta sección está destinada a los usuarios que navegan por el sitio y brinda información general y de interés sobre comidas saludables para colegios. Algunos aspectos destacados de esta sección son:

- Promovemos hábitos saludables: Se proporciona información y recursos para fomentar hábitos alimenticios saludables entre los estudiantes.
- Fija límites de consumo diario: Se destacan los límites recomendados de consumo diario para diferentes grupos de alimentos, ayudando a los usuarios a tomar decisiones informadas sobre sus elecciones alimenticias.
- Sin efectivo: Se informa a los usuarios que el sistema no utiliza dinero en efectivo como forma de pago, brindando alternativas y explicando cómo se realizan los pagos.
- Información nutricional a tu alcance: Se destaca la accesibilidad a la información nutricional de los platos y menús disponibles, brindando transparencia y ayudando a los usuarios a tomar decisiones informadas.
- Suscripciones a menús: Se presenta la opción de suscribirse a menús semanales, lo que brinda comodidad y planificación a los usuarios.

Además, en esta sección se muestra un botón con el texto "Comenzar", el cual redirige a los usuarios a la pantalla de inicio de sesión.

### Sección de inicio de sesión y registro

En esta sección, los usuarios del colegio pueden iniciar sesión o registrarse en el sitio. Algunas características de esta sección son:

- Inicio de sesión: Los usuarios existentes pueden ingresar sus credenciales para acceder a las funcionalidades del sitio.
- Registro: Los nuevos usuarios tienen la posibilidad de registrarse como usuarios del colegio, proporcionando la información necesaria para crear una cuenta.

### Sección de administración (para usuarios administradores)

Esta sección está destinada a los usuarios administradores y proporciona funcionalidades avanzadas para la gestión de colegios. Algunos elementos clave de esta sección son:

- Gestión de platos y menús: Los administradores pueden agregar nuevos platos y menús, lo que les permite mantener actualizada la oferta alimenticia del colegio.
- Comensales y grupos: Los administradores pueden ver la lista de comensales asociados al colegio, así como gestionar los grupos de comensales existentes. Pueden registrar nuevos comensales, asignarlos a grupos y editar información relevante.
- Pedidos: Los administradores tienen la capacidad de registrar pedidos de comidas para los comensales del colegio, facilitando la organización y el control de la distribución de alimentos.
- Edición y eliminación de grupos: Los administradores pueden editar la información de los grupos existentes, como el nombre y la descripción, y también tienen la opción de eliminar grupos si es necesario.
- Gestión de comedores: Los administradores pueden editar información relevante de los comedores, como el nombre y la ubicación, brindando flexibilidad para adaptarse a los cambios en la infraestructura escolar.

En cuanto al diseño de la interfaz de usuario, se utilizará una paleta de colores basada en tonos verdes para transmitir una sensación de frescura y salud.

## Codificación

### Estructura de carpetas

La estructura de carpetas de la aplicación es la siguiente:

```
- src
  -- admin
    --- controllers
    --- interface
      ---- views
       ----- layout
    --- routes
    --- validations
  -- shared
    --- controllers
    --- domain
      ---- entities
      ---- types
    --- interface
      ---- components
      ---- views
    --- middlewares
    --- predata
    --- public
      ---- css
      ---- images
      ---- stylesheets
      ---- temp
  -- tests
    --- units
  -- user
    --- controllers
    --- interface
      ---- components
    --- routes
    --- utils
    --- validations
app.ts
```

La estructura de carpetas se organiza en función de los distintos módulos y componentes de la aplicación. A continuación, se describe brevemente cada una de las carpetas:

- `src`: Carpeta principal del proyecto.
  - `admin`: Contiene los controladores, rutas y validaciones relacionadas con la funcionalidad de administración.
    - `controllers`: Controladores específicos para la sección de administración.
    - `interface`: Contiene la interfaz de usuario para la sección de administración.
      - `views`: Vistas de la interfaz de usuario para la sección de administración.
      - `layout`: Plantillas de diseño para las vistas de la interfaz de usuario.
    - `routes`: Definición de las rutas relacionadas con la sección de administración.
    - `validations`: Validaciones de datos para la sección de administración.
  - `shared`: Contiene los controladores, dominios, interfaces y utilidades compartidas entre diferentes partes de la aplicación.
    - `controllers`: Controladores compartidos.
    - `domain`: Contiene las entidades y tipos relacionados con el dominio de la aplicación.
      - `entities`: Definición de las entidades del dominio.
      - `types`: Tipos de datos relacionados con el dominio.
    - `interface`: Contiene los componentes y vistas compartidos.
      - `components`: Componentes reutilizables.
      - `views`: Vistas compartidas.
    - `middlewares`: Middlewares compartidos.
    - `predata`: Datos precargados utilizados en la aplicación.
    - `public`: Archivos públicos accesibles desde la aplicación.
      - `css`: Archivos CSS.
      - `images`: Imágenes utilizadas en la aplicación.
      - `stylesheets`: Hojas de estilo utilizadas en la aplicación.
      - `temp`: Archivos temporales.
  - `tests`: Contiene pruebas unitarias para el proyecto.
    - `units`: Pruebas unitarias para diferentes componentes y funciones.
  - `user`: Contiene los controladores, rutas, utilidades y validaciones relacionadas con la funcionalidad de usuario.
    - `controllers`: Controladores específicos para la sección de usuario.
    - `interface`: Contiene los componentes de la interfaz de usuario para la sección de usuario.
      - `components`: Componentes específicos para la sección de usuario.
    - `routes`: Definición de las rutas relacionadas con la sección de usuario.
    - `utils`: Utilidades específicas para la sección de usuario.
    -

`validations`: Validaciones de datos para la sección de usuario.

- `app.ts`: Archivo principal de la aplicación que configura y ejecuta el servidor.

### Tecnologías utilizadas

La aplicación utiliza las siguientes tecnologías:

- Node.js: Entorno de ejecución para JavaScript basado en el motor V8 de Chrome.
- Express: Marco de aplicación web de Node.js para crear API y aplicaciones web.
- Express Session: Middleware de Express para el manejo de sesiones.
- dotenv: Módulo de carga de variables de entorno desde un archivo `.env`.
- Node-cache: Módulo para la gestión de caché de datos en la aplicación.

El archivo `app.ts` contiene la configuración principal de la aplicación, donde se inicializan las tecnologías utilizadas y se configuran los middleware, rutas y el servidor.

### Middleware `validateToken`

El archivo `validateToken.ts` define un middleware utilizado para validar el token de autenticación de los usuarios. Este middleware se utiliza en las rutas privadas de la aplicación y verifica si el token es válido antes de permitir el acceso a esas rutas.

El middleware realiza las siguientes acciones:

- Verifica la existencia de una sesión en la solicitud.
- Valida el token de autorización obtenido de la sesión.
- Si el token es válido, busca al usuario correspondiente en la caché y lo pasa al siguiente middleware.
- Si el token no es válido o no se encuentra el usuario correspondiente, redirige a la página de inicio de sesión.

### Clase `Cache`

El archivo `cache.ts` contiene la implementación de la clase `Cache`, que utiliza el módulo `node-cache` para guardar temporalmente los datos precargados en la aplicación.

La clase `Cache` proporciona los siguientes métodos:

- `initialize()`: Inicializa el caché si aún no ha sido creado.
- `saveEntity<T>(entityName: ENTITIES, value: T | any)`: Guarda una entidad en el caché.
- `updateEntity<T>(entityName: ENTITIES, value: T | any)`: Actualiza una entidad en el caché.
- `getEntity<T>(entityName: ENTITIES, key: string): T`: Obtiene una entidad del caché según su nombre y clave.
- `getEntities<T>(entityName: ENTITIES): T[]`: Obtiene todas las entidades de un tipo del caché.
- `getEntitiesByKeys<T>(entityName: ENTITIES, keys: string[]): T[]`: Obtiene las entidades del caché según las claves proporcionadas.
- `removeEntity(entityName: ENTITIES, entityId: string): void`: Elimina una entidad del caché.

La clase `Cache` utiliza un mapa para almacenar las entidades en memoria y proporciona métodos para guardar, actualizar, obtener y eliminar entidades según su nombre y clave.

### Rutas del administrador

El archivo `admin/routes.ts` contiene las rutas relacionadas con la funcionalidad de administración de la aplicación. Estas rutas son utilizadas para manejar diferentes acciones y vistas en la interfaz de usuario de administración.

Las rutas del administrador se definen utilizando el enrutador `Router` de Express y se configuran para responder a las solicitudes HTTP correspondientes. Algunas de las rutas disponibles son:

- `/admin/index`: Ruta para la página de inicio del panel de administración.
- `/admin/index/dishe`: Ruta para mostrar el formulario de agregar plato.
- `/admin/index/order`: Ruta para mostrar el formulario de agregar pedido

.

- `/admin/index/group/add`: Ruta para mostrar el formulario de agregar grupo.
- `/admin/index/group/edit`: Ruta para mostrar el formulario de editar grupo.
- `/admin/index/group/delete`: Ruta para mostrar el formulario de eliminar grupo.
- `/admin/index/diner/add`: Ruta para mostrar el formulario de agregar comensal.
- `/admin/index/logout`: Ruta para cerrar sesión del administrador.

Estas rutas utilizan controladores correspondientes para procesar la lógica de negocio asociada a cada acción. Los controladores se importan desde diferentes archivos ubicados en la carpeta `admin/controllers`.

## Test Unitario

Se adjuntan los test unitarios realizados en el proyecto en la carpeta **test\units**, para cada entidad del dominio implementada en el proyecto, teniendo una cobertura del 100% del código para cada test realizado.

## Reflexión Trabajo individual

Cada integrante del equipo ha realizado actividades en todas las áreas del proyecto, brindando su aporte en el desarrollo de funcionalidades, diseño de la interfaz de usuario, implementación de pruebas y revisión de código. Todos los integrantes han documentado sus actividades a través de commits en el repositorio.

**Integrante: Andrés Campopiano**

Durante esta etapa del proyecto, me enfoqué en desarrollar las siguientes funcionalidades, tanto en el backend como en el frontend, utilizando todas las herramientas disponibles:

1.  **Registrar un nuevo plato en el menú**: Implementé la lógica necesaria para permitir a un usuario administrador registrar un nuevo plato en el menú del comedor. Esto incluyó la creación de las rutas correspondientes, la validación de los datos ingresados y el almacenamiento adecuado en el cache de la aplicación. En el frontend, diseñé y desarrollé la interfaz de usuario, en conjunto con parte del equipo, para ingresar la información del plato y enviarla al servidor.

2.  **Registrar un pedido**: Desarrollé la funcionalidad que permite a un usuario administrador registrar un pedido en nombre de un comensal. Esto implicó la creación de las rutas y controladores necesarios, la validación de los datos del pedido y su almacenamiento en el cache de la aplicación. En el frontend, diseñé la interfaz de usuario para mostrar los platos disponibles y permitir la selección de los mismos, junto con la información del comensal y la confirmación del pedido.

3.  **Ver pedidos**: Implementé la funcionalidad que permite a un usuario administrador ver los pedidos procesados y sin procesar que tiene el comedor. Esto incluyó la creación de las rutas correspondientes, la consulta de los pedidos en el cache de la aplicación y la presentación de la información en el frontend de manera clara y organizada.

4.  **Crear un nuevo grupo de comensales**: Desarrollé la funcionalidad para permitir a un usuario administrador registrar un nuevo grupo de comensales. Esto involucró la creación de las rutas y controladores correspondientes, la validación de los datos del grupo de comensales y su almacenamiento en el cache de la aplicación. En el frontend, diseñé y desarrollé la interfaz de usuario para ingresar la información del grupo de comensales y enviarla al servidor.

5.  **Editar un grupo de comensales existente**: Implementé la funcionalidad que permite a un usuario administrador editar la información de un grupo de comensales existente. Esto incluyó la creación de las rutas y controladores necesarios, la validación de los datos actualizados y la actualización correspondiente en el cache de la aplicación. En el frontend, diseñé la interfaz de usuario para mostrar los datos del grupo de comensales y permitir su edición.

6.  **Eliminar grupo de comensales**: Desarrollé la funcionalidad que permite a un usuario administrador eliminar un grupo de comensales. Esto implicó la creación de las rutas y controladores correspondientes, la validación de la solicitud de eliminación y la eliminación efectiva del grupo de comensales en el cache de la aplicación. En el frontend, diseñé la interfaz de usuario para mostrar la lista de grupos de comensales y permitir la eliminación de uno específico.

7.  **Registrar un nuevo comensal**: Implementé la funcionalidad para permitir a un usuario administrador registrar un comensal y asociarlo a un grupo de comensales existente. Esto involucró la creación de las rutas y controladores correspondientes, la validación de los datos del comensal y su almacenamiento en el cache de la aplicación. En el frontend, diseñé y desarrollé la interfaz de usuario para ingresar la información del comensal y su asociación con un grupo de comensales.

Además de las funcionalidades mencionadas, también realicé las pruebas de sistema correspondientes para verificar el correcto funcionamiento de la aplicación en su conjunto. Esto incluyó la ejecución de pruebas unitarias y pruebas de integración para garantizar la calidad y estabilidad del sistema. También elaboré y participé en los planes de testing para evaluar el sistema del grupo asignado.

**Integrante: Horacio Franceschini**

En esta etapa del proyecto, colaboré con el desarrollo Frontend de diferentes funcionalidades, las cuales fueron siendo adaptadas en conjunto con mis compañeros a medida que se avanzaba en el proyecto.

Desarrollé los Test Unitarios para las clases del dominio y ayude a probar las nuevas funcionalidades a medida que se subían cambios, para garantizar su correcto funcionamiento.

Durante el desarrollo de estas funcionalidades, aplicamos buenas prácticas de ingeniería de software, como el uso de patrones de diseño adecuados, la modularización del código, la implementación de pruebas unitarias y la adopción de estándares de calidad de código.
También elaboré y participé en los planes de testing para evaluar el sistema del grupo asignado.

**Integrante: Bryan Techera**
Me encargue de realizar la arquitectura del proyecto, decidi aplicar una arquitectura mvc, configure express, typescript y jest. Cree las carpetas del proyecto y decidi dividir el codigo en 3 contextos.
El primer contexto es el de user, aqui se encontrara toda la logica relacionada a las funcionalidades especificas que tienen acceso los usuario ( tutores en nuestro caso). Luego defini otro contexto admin, en este contexto se ubicaria toda la logica relacionada a las funcionalidades exclusivas de los administradores. Por ultimo defini el contexto shares, aqui estarian las funcionalidades compartidas como por ejemplo el login.

1. **MVC**: implemente un arquitectura mvc utilizando express, defini el flujo de la siguiente manera. Todas las peticiones llegarian a un Router, el router validaria la informacion mediante un middleware que utilizaria la libreria Joi, luego el flujo pasaria a un controller, este controller contiene toda la logica del caso de uso y como respuesta envia una vista en ejs al cliente.
2. **Autenticacion**: Para la autenticacion configure un middleware, el cual seria invocado antes del controlador de todas las rutas privadas de nuestra app, este middleware lee un token envado por medio de una cookie, valida ese toke y si todo esta bien envia el flujo al controlador.
3. **Predata**: Cree las clases loadCanteens, loadDailyMenu,loadDiners,loadDishes,loadGroups,loadUsers y las pobre con datos de prueba para que al iniciar la aplicacion se cargaran automaticamente y el usuario no encontrara una app totalmente vacia, esta clase tambien me sirvio para prbar el almacenamiento en cache.
4. **Creacion de entidades**: Creo las entidades Canteen,DailyMenu,Diner,Dishes,Group, User y defino su logica, metodos setter, getter, etc.
5. **Cache**: Implemente la clase cache, aplicandole un patron de disenio singelton, defini en toda esta clase la logica necesaria para poder almacenar informacion en el sistema, usando la libreria node cache de una forma sencilla.
6. **Main page**: Disenio e implementacion de toda la logica de la pagina principal, tambien la parte visual con ejs y bootstrap. Se incluye informacion relevante de la aplicacion y sus veneficios.
7. **Login de usuario**: Disenio de interfaz y logica para el login de usuario, este requerimiento fue utilizado por los demas integrantes del grupo como guia para la implementacion de los posteriores requerimientos. Aqui defini el flujo del MVC, como deberian configurarse las rutas y los controladores, inclui la libreria Joi para la validacion del dto de entrada mediante un middleware. Tambien inclui la libreria jswowebtoken para manejar la autenticacion de usuarios mediante el uso de un token.
8. **Vista principal de usuario**: Desarolle la logica y la interfaz de la vista principal de usuario. En esta vista se pueden obserbar los comensales asociados al usuario, los comedores e informacion relevante de los mismos y una seccion de platos destacados de dichos comedores.
9. **Vista principal de comedor**: Desarolle la logica y la interfaz de la vista del comedor, en esta vista se puede obserbar los platos destacados del dia (dia actual), el menu semanal y las opciones desayuno almuerzo y merienda. Tambien se puede obserbar el menu completo con la informacion de cada plato, nombre ingrediente y precio.
   Para el desarollo de las vistas utilice ejs, html, css y bootstrap 4. El desarollo de estas dos vistan implico tambien el desarollar rutas y controladores los cuales obtienen la informacion actualizada desde nuestra fuente de datos (el cache) y retornan las vistas mencionadas, utilizando nodejs y express principalmente.
10. **Test unitarios**: Colabore en la codificacion de test unitarios a las clases del dominio y del cache, para asi lograr el nivel de cobertura solicitado.

Además de las funcionalidades mencionadas, también realicé las pruebas de sistema correspondientes para verificar el correcto funcionamiento de la aplicación en su conjunto. Esto incluyó la ejecución de pruebas unitarias y pruebas de integración para garantizar la calidad y estabilidad del sistema.
