# Informe de Testing

## Sumario de Issues

- [ ] Issue 1 - El botón "Realizar pedido" sigue visible después de eliminar el único producto del carrito
- [ ] Issue 2 - Carga inconsistente de menús en la pantalla "Secciones" al hacer clic en Menú
- [ ] Issue 3 - Al agregar 2 o más unidades de un mismo producto en el carrito, sus costos no se suman.
- [ ] Issue 4 - El sistema no arroja un error al agregar o editar platos con sus campos vacíos.
- [ ] Issue 5 - No se muestra ningún mensaje de error al agregar un plato ya existente.
- [ ] Issue 6 - Si utilizo el boton de ir hacia atras del navegador, no importa en que pqagina este, no me carga el contenido.
- [ ] Issue 7 - Al cargar la pagina principal se obserban errores en consola.
- [ ] Issue 8 - Las secciones y recursos no implementados no son correctamente informados al usuario, muestran un error de carga de una imagen.
- [ ] Issue 9 - El buscador no realiza ninguna accion, no queda del todo claro si no funciona o no es parte de la implementacion.
- [ ] Issue 10 - No se esta validando el tipado de dichi formulrio, es posible establecer el precio como un texto y no existe limite de numero de caracteres para los campos.
- [ ] Issue 11 - Si bien al navegar entre paginas la informacion persiste, al recargar el navegador (NO la aplicacion) la informacion se pierde.

### Errores de Funcionalidad

#### Severidad Crítica

#### Severidad Importante

- [ ] Issue 3 - Al agregar 2 o más unidades de un mismo producto en el carrito, sus costos no se suman.

- [ ] Issue 4 - El sistema no arroja un error al agregar o editar platos con sus campos vacíos.

- [ ] Issue 6 - Si utilizo el boton de ir hacia atras del navegador, no importa en que pqagina este, no me carga el contenido.

- [ ] Issue 8 - Las secciones y recursos no implementados no son correctamente informados al usuario, muestran un error de carga de una imagen.

- [ ] Issue 9 - El buscador no realiza ninguna accion, no queda del todo claro si no funciona o no es parte de la implementacion.

- [ ] Issue 10 - No se esta validando el tipado de dichi formulrio, es posible establecer el precio como un texto y no existe limite de numero de caracteres para los campos.

- [ ] Issue 11 - Si bien al navegar entre paginas la informacion persiste, al recargar el navegador (NO la aplicacion) la informacion se pierde.

#### Severidad Moderada

- [ ] Issue 1 - El botón "Realizar pedido" sigue visible después de eliminar el único producto del carrito

- [ ] Issue 2 - Carga inconsistente de menús en la pantalla "Secciones" al hacer clic en Menú

- [ ] Issue 5 - No se muestra ningún mensaje de error al agregar un plato ya existente.

- [ ] Issue 7 - Al cargar la pagina principal se obserban errores en consola.

### Problemas de Usabilidad

#### Severidad Moderada

### Fallas de Accesibilidad

#### Severidad Baja

### Otros Issues

## Casos de Prueba Generados

- [ ] Caso de prueba 1 - Eliminar producto del carrito sin pedidos

**Descripción:**

Este caso de prueba verifica el comportamiento del sistema al eliminar un producto del carrito de compras cuando es el único pedido en el carrito. Se evalúa si el botón "Realizar pedido" sigue disponible y si se muestra un mensaje incorrecto al intentar realizar el pedido.

**Pasos:**

1. Ingresar en la aplicación.

2. Navegar a la pantalla del carrito de compras.

3. Verificar que hay al menos un producto agregado al carrito.

4. Observar la presencia de los botones "Más" y "Menos" para agregar o restar unidades del producto.

5. Observar la presencia del botón "Eliminar" para eliminar el producto del carrito.

6. Verificar la presencia del botón "Realizar pedido" fuera del carrito.

7. Hacer clic en el botón "Eliminar" para eliminar el único producto del carrito.

8. Verificar que el botón "Realizar pedido" sigue visible después de eliminar el producto.

9. Hacer clic en el botón "Realizar pedido".

**Resultado esperado:**

- El sistema debe ocultar el botón "Realizar pedido" si se elimina el único producto del carrito.

- Al hacer clic en el botón "Realizar pedido" sin productos en el carrito, se debe mostrar un mensaje de error o advertencia indicando que no hay productos para realizar el pedido.

**Datos de prueba:**

- Producto: Producto de ejemplo

- Cantidad inicial en el carrito: 1

**Entorno de prueba:**

- Dispositivo: Windows 10

- Navegador: Mozilla Firefox versión 114.0.2(64-bit)

**Observaciones:**

- El mensaje de error o advertencia al intentar realizar el pedido sin productos en el carrito debería ser descriptivo y claro para el usuario, indicando que no hay productos seleccionados y que se deben agregar antes de realizar un pedido.

- Se debe verificar si el botón "Realizar pedido" se encuentra en el estado correcto (habilitado o deshabilitado) después de eliminar el producto del carrito.

---

- [ ] Caso de prueba 2 - Carga inconsistente de menús en la pantalla "Secciones"

**Descripción:**

Este caso de prueba verifica el comportamiento del sistema al hacer clic en la opción "Menú" en la pantalla "Secciones". Se evalúa si los menús de comida disponibles se cargan de manera consistente o si a veces la pantalla queda vacía sin mostrar los menús.

**Pasos:**

1. Ingresar en la aplicación.

2. Localizar y hacer clic en el botón de inicio ubicado en el área del footer.

3. Navegar a la pantalla "Secciones".

4. Observar la presencia de las opciones de menú seleccionable en la pantalla "Secciones".

5. Hacer clic en la opción "Menú".

6. Observar si los menús de comida disponibles se cargan correctamente.

7. Repetir los pasos del 4 al 6 varias veces para evaluar la consistencia de la carga.

**Resultado esperado:**

- Al hacer clic en la opción "Menú", los menús de comida disponibles deben cargarse de manera consistente sin dejar la pantalla vacía.

**Entorno de prueba:**

- Dispositivo: Windows 10

- Navegador: Mozilla Firefox versión 114.0.2(64-bit)

**Observaciones:**

- Se deben realizar varias repeticiones del caso de prueba para verificar si el problema de carga inconsistente ocurre con cierta frecuencia.

- Registrar el número de veces que se cargan correctamente los menús y el número de veces que la pantalla queda vacía sin mostrar los menús.

- Tomar nota de cualquier patrón o circunstancia específica que parezca afectar la carga de los menús.

---

- [ ] Caso de prueba 3 - Agregar el mismo producto varias veces al carrito.

**Descripción:**

Este caso de prueba verifica el comportamiento del sistema al agregar el mismo producto repetidas veces al carrito. Se evalúa si aumenta el costo total del carrito.

**Pasos:**

1. Ingresar en la aplicación.

2. Navegar a la pantalla de Menú.

3. Agregar un menú al carrito.

4. Navegar a la pantalla del carrito de compras..

5. Verificar que se haya agregado el producto correctamente.

6. Aumentar la cantidad de unidades del producto.

7. Verificar que el costo total aumente.

**Resultado esperado:**

- El sistema debe aumentar el costo total del carrito a medida que se agrega un mismo producto.

**Datos de prueba:**

- Producto: Producto de ejemplo

- Cantidad inicial en el carrito: 2 o más

**Entorno de prueba:**

- Dispositivo: Ubuntu 22.04 LTS

- Navegador: Google Chrome Version 114.0.5735.133 (Official Build) (64-bit)

**Observaciones:**

- Al agregar varias cantidades de un mismo producto, el costo se mantiene igual y no aumenta de forma relativa a la cantidad de productos que haya en el carrito.

- Se debe verificar que al agregar una nueva unidad del producto, su valor se sume al valor acumulado.

---

- [ ] Caso de prueba 4 - Agregar un nuevo plato o editar un plato y dejar sus campos vacíos.

**Descripción:**

Este caso de prueba verifica el comportamiento del sistema al agregar o editar un plato dejando todos sus campos vacíos.

**Pasos:**

1. Ingresar en la aplicación.

2. Navegar a la pantalla Editar Menú.

3. Agregar un nuevo plato o editar un plato existente.

4. Dejar todos los campos vacíos y guardar los cambios.

**Resultado esperado:**

- El sistema debe mostrar un error al guardar los cambios con los campos vacíos.

**Datos de prueba:**

- Plato: Nuevo plato

- Datos del plato: Nulos

**Entorno de prueba:**

- Dispositivo: Ubuntu 22.04 LTS

- Navegador: Google Chrome Version 114.0.5735.133 (Official Build) (64-bit)

**Observaciones:**

- Al crear un nuevo plato y no llenar ninguno de sus campos, el sistema permite crear el plato igualmente, sin mostrar ningún mensaje de error.

- Al editar un plato existente y borrar todos sus datos, el sistema permite guardar los cambios, sin mostrar ningún mensaje de error.

---

- [ ] Caso de prueba 5 - Agregar un plato ya existente

**Descripción:**

Este caso de prueba verifica el comportamiento del sistema al agregar un plato ya existente.

**Pasos:**

1. Ingresar en la aplicación.

2. Navegar a la pantalla de Editar Menú.

3. Agregar un nuevo plato.

4. Completar los datos para que tengan la misma información que un plato ya existente.

5. Verificar que se haya agregado el plato correctamente.

**Resultado esperado:**

- El sistema debe mostrar un mensaje de error informando que el nuevo plato que se intenta agregar, ya existe.

**Datos de prueba:**

- Plato: Plato ya existente

**Entorno de prueba:**

- Dispositivo: Ubuntu 22.04 LTS

- Navegador: Google Chrome Version 114.0.5735.133 (Official Build) (64-bit)

**Observaciones:**

- Al agregar un nuevo plato que contiene los mismos datos que uno existente, el sistema lo agrega igualmente.

- Se debe verificar que al agregar un nuevo plato, el mismo no exista previamente en el sistema.

---

- [ ] Caso de prueba 6 - Navegacion entre diferentes paginas

**Descripción:**

Validar los enlaces de navecagion y la navegacion general entre diferentes paginas de la app.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Clickeo en la opcion dinero del menu principal.
3.  Clickeo en la opcion carrito del menu principal.
4.  Clickeoen el menu de hamburguesa, seleciono la opcion perfil.
5.  Clickeoen el menu de hamburguesa, seleciono la opcion editar menu.
6.  Clickeoen el menu de hamburguesa, seleciono la opcion ver reservas.
7.  Clickeoen el menu de hamburguesa, seleciono la opcion Historial de compras.

**Resultado esperado:**

- El sistema debe mostrar la informacion esperada en cada una de las paginas.

**Datos de prueba:**

- N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- Al navegar a un sitio que no esta impelmentado se obserba un mensaje de error al querer cargar una imagen.
- Si intento retroceder a una dirrecion ya visitada utilizando el boton de ir hacia atras, no me carga el contenido de la pagina.

---

---

- [ ] Caso de prueba 7 - Mensajes en la consola del navegador

**Descripción:**
Validar la presencia de mensajes de error en la consola del navegador.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Clickeo en la opcion dinero del menu principal.
3.  Clickeo en la opcion carrito del menu principal.
4.  Clickeoen el menu de hamburguesa, seleciono la opcion perfil.
5.  Clickeoen el menu de hamburguesa, seleciono la opcion editar menu.
6.  Clickeoen el menu de hamburguesa, seleciono la opcion ver reservas.
7.  Clickeoen el menu de hamburguesa, seleciono la opcion Historial de compras.

**Resultado esperado:**

- El sistema debe mostrar la informacion esperada en cada una de las paginas.

**Datos de prueba:**

- N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- Al navegar a un sitio que no esta impelmentado se obserba un mensaje de error al querer cargar una imagen.
- Si intento retroceder a una dirrecion ya visitada utilizando el boton de ir hacia atras, no me carga el contenido de la pagina.

  ***

- [ ] Caso de prueba 8 - Prueba del buscador

**Descripción:**
Realizar una busqueda en el buscador.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Ingreso el texto 'Pasta' en el buscador .
3.  Clickeo en buscar.

**Resultado esperado:**

- El sistema me muestra una lista de resultados.

**Datos de prueba:**

- N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- No se obserba accion aparente en el sistema, tampoco se obserba mensaje de error o advertencia ni resultados.

---

- [ ] Caso de prueba 9 - Prueba valores validos y limites al agregar un nuevo plato.

**Descripción:**
Tipado y rangos del formulario agregar nuevo plato.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Eligo la opcion editar menu.
3.  Eligo la opcion agregar nuevo plato.
4.  Agrego un precio en formato texto

**Resultado esperado:**

- El sistema muestra un mensaje de error indicando que ese es un campo numerico.

**Datos de prueba:**

- Dia: Lunes
- Nombre: Test P1
- Descripcion: Test desc
- Precio: esto es un texto
- Tipo: Regular
- Imagen: N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- El sistema registra el nuevo plato sin mostrar advertencias o mensajes de error.

---

- [ ] Caso de prueba 10 - Prueba valores validos y limites al agregar un nuevo plato.

**Descripción:**
Tipado y rangos del formulario agregar nuevo plato.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Eligo la opcion editar menu.
3.  Eligo la opcion agregar nuevo plato.
4.  Agrego un nombre con un largo de 100 caracteres

**Resultado esperado:**

- El sistema muestra un mensaje de error indicando el largo maximo que permite el campo.

**Datos de prueba:**

- Dia: Lunes
- Nombre: T\*100 (100 caracteres)
- Descripcion: Test desc
- Precio: 200
- Tipo: Regular
- Imagen: N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- El sistema registra el nuevo plato sin mostrar advertencias o mensajes de error.

---

- [ ] Caso de prueba 10 - Prueba valores validos y limites al agregar un nuevo plato.

**Descripción:**
Tipado y rangos del formulario agregar nuevo plato.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Eligo la opcion editar menu.
3.  Eligo la opcion agregar nuevo plato.
4.  Agrego un precio negativo

**Resultado esperado:**

- El sistema muestra un mensaje de error indicando que el precio debe ser un numero positivo.

**Datos de prueba:**

- Dia: Lunes
- Nombre: Test-price
- Descripcion: Test desc
- Precio: -10
- Tipo: Regular
- Imagen: N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- El sistema registra el nuevo plato sin mostrar advertencias o mensajes de error.

---

- [ ] Caso de prueba 11 - Validar persistencia de datos.

**Descripción:**
Validar la persistencia en la aplicacion.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Eligo la opcion editar menu.
3.  Eligo la opcion agregar nuevo plato.
4.  Completo el formulario.
5.  Preciono en guardar cambios.
6.  Me dirigo al inicio de la aplicacion.
7.  Selecciono la opcion Menu se las secciones.

**Resultado esperado:**

- El sistema deberia mostrarme la lista de platos incluido el nuevo plato que agregue.

**Datos de prueba:**

- Dia: Lunes
- Nombre: Test-price
- Descripcion: Test desc
- Precio: 200
- Tipo: Regular
- Imagen: N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- El sistema realiza lo que se espera.

---

- [ ] Caso de prueba 12 - Validar persistencia de datos.

**Descripción:**
Validar la persistencia en la aplicacion.

**Pasos:**

1.  Ingresar en la aplicación.
2.  Eligo la opcion editar menu.
3.  Eligo la opcion agregar nuevo plato.
4.  Completo el formulario
5.  Preciono en guardar cambios.
6.  Me dirigo al inicio de la aplicacion.
7.  Selecciono la opcion Menu se las secciones.
8.  Recargo el navegador.

**Resultado esperado:**

- El sistema deberia mostrarme la lista de platos incluido el nuevo plato que agregue.

**Datos de prueba:**

- Dia: Lunes
- Nombre: Test-price
- Descripcion: Test desc
- Precio: 200
- Tipo: Regular
- Imagen: N/A

**Entorno de prueba:**

- Dispositivo: Windows 10
- Navegador: Google Chrome Version 114.0.5735.143 (Official Build) (64-bit)

**Observaciones:**

- El sistema muestra unicamente los platos cargados por defecto en la app, y toda la informacion de las acciones del usuario se pierden.

---

## Sesiones de Prueba Exploratoria

| Fecha | Tester | Misión | Duración | Notas |

|-------------|--------|----------------------------------------------------------------|----------|-------------------------------------------------------------------------------------|

| 2023-06-22 | Andrés | Eliminación de producto del carrito sin pedidos y realizar pedido | 20 minutos | -Verificado el comportamiento del botón "Realizar pedido" tras eliminar un producto. -Confirmado el mensaje de error al intentar realizar pedido sin productos en el carrito |

|2023-06-22| Andrés| Carga inconsistente de menús en la pantalla "Secciones" al hacer clic en Menú | 10 minutos | Realizada la prueba de manera repetida para evaluar la consistencia de la carga. Encontrado el problema de carga inconsistente, en algunas ocasiones no se cargan los menús.|

|2023-06-22| Horacio| Inconsistencia en valor de productos en el carrito. | 5 minutos | Al aumentar la cantidad de productos en el carrito, el precio no varía, siempre es el mismo.|

|2023-06-22| Horacio| Agregar nuevo plato y Edición de Plato con datos vacíos. | 10 minutos | El sistema permite dejar los campos de un plato vacíos al crearlo o editarlo (Nombre, Descripción, Precio, Tipo, Imagen).|

|2023-06-22| Horacio| Agregar plato ya existente. | 10 minutos | Al agregar un plato ya existente no realiza ninguna comprobación previa y lo agrega igualmente.|

|2023-06-22| Bryan| Validar la navegación entre diferentes paginas | 10 minutos | Si utilizo el botón de ir hacia atrás del navegador, no importa en que pagina este, no me carga el contenido.|

|2023-06-22| Bryan| Validar la presencia de mensajes de error en la consola del navegador | 10 minutos | Al cargar la pagina principal se observan errores en consola.|

|2023-06-22| Bryan| Validar la consistencia de los mensajes devueltos al usuario | 10 minutos | Las secciones y recursos no implementados no son correctamente informados al usuario, muestran un error de carga de una imagen.|

|2023-06-22| Bryan| Funcionamiento del buscador | 10 minutos | El buscador no realiza ninguna acción, no queda del todo claro si no funciona o no es parte de la implementacion.|

|2023-06-22| Bryan| Tipado y rangos del formulario registrar menu | 10 minutos | No se esta validando el tipado de dicho formulario, es posible establecer el precio como un texto y no existe limite de número de caracteres para los campos.|

|2023-06-22| Bryan| Validar la persistencia en la aplicación | 10 minutos | Si bien al navegar entre páginas la información persiste, al recargar el navegador (NO la aplicación) la información se pierde.|

|2023-06-22| Bryan| Validar el diseño responsivo de la aplicación | 15 minutos |

- [x] 375 \* 667
- [x] 393 \* 851
- [x] 540 \* 720
- [x] 1024 \* 600
- [x] 1280 \* 800
- [x] 1920 \* 1080

## Evaluación Global de la Calidad

Se han identificado varios errores de funcionalidad, algunos de los cuales tienen una severidad importante o moderada. Estos errores incluyen problemas con el cálculo del costo total del carrito al agregar varias unidades del mismo producto, la falta de validación de campos vacíos al agregar o editar platos, y la falta de detección de platos ya existentes al agregar nuevos platos. Además, se ha encontrado una inconsistencia en la carga de menús en la pantalla "Secciones" al hacer clic en la opción "Menú". Estos problemas afectan la usabilidad y la funcionalidad del sistema.

Se han generado casos de prueba para abordar cada uno de los problemas identificados. Estos casos de prueba cubren diferentes escenarios y se enfocan en verificar el comportamiento esperado del sistema. También se han realizado sesiones de prueba exploratoria para evaluar el sistema desde diferentes perspectivas y descubrir posibles problemas adicionales.

En general, se recomienda abordar los errores identificados y realizar pruebas adicionales para garantizar la calidad del sistema. Es importante corregir los problemas críticos e importantes, ya que afectan la funcionalidad básica del sistema y la experiencia del usuario. También se han detectado errores de ortografía en algunas opciones de menú.
