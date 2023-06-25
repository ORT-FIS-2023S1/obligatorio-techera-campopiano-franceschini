﻿# Informe de Testing

## Sumario de Issues

### Errores de Funcionalidad

#### Severidad Crítica

#### Severidad Importante
- [ ] Issue 3 - Al agregar 2 o más unidades de un mismo producto en el carrito, sus costos no se suman.
- [ ] Issue 4 - El sistema no arroja un error al agregar o editar platos con sus campos vacíos.

#### Severidad Moderada

- [ ] Issue 1 - El botón "Realizar pedido" sigue visible después de eliminar el único producto del carrito
- [ ] Issue 2 - Carga inconsistente de menús en la pantalla "Secciones" al hacer clic en Menú
- [ ] Issue 5 - No se muestra ningún mensaje de error al agregar un plato ya existente.

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
5. Observar la presencia de las opciones de menú seleccionable en la pantalla "Secciones".
6. Hacer clic en la opción "Menú".
7. Observar si los menús de comida disponibles se cargan correctamente.
8. Repetir los pasos del 4 al 6 varias veces para evaluar la consistencia de la carga.

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

## Sesiones de Prueba Exploratoria

| Fecha       | Tester | Misión                                                         | Duración | Notas                                                                               |
|-------------|--------|----------------------------------------------------------------|----------|-------------------------------------------------------------------------------------|
| 2023-06-22  | Andrés   | Eliminación de producto del carrito sin pedidos y realizar pedido | 20 minutos   | -Verificado el comportamiento del botón "Realizar pedido" tras eliminar un producto. -Confirmado el mensaje de error al intentar realizar pedido sin productos en el carrito |
|2023-06-22| Andrés| Carga inconsistente de menús en la pantalla "Secciones" al hacer clic en Menú | 10 minutos | Realizada la prueba de manera repetida para evaluar la consistencia de la carga. Encontrado el problema de carga inconsistente, en algunas ocasiones no se cargan los menús.|
|2023-06-22| Horacio| Inconsistencia en valor de productos en el carrito. | 5 minutos | Al aumentar la cantidad de productos en el carrito, el precio no varía, siempre es el mismo.|
|2023-06-22| Horacio| Agregar nuevo plato y Edición de Plato con datos vacíos. | 10 minutos | El sistema permite dejar los campos de un plato vacíos al crearlo o editarlo (Nombre, Descripción, Precio, Tipo, Imagen).|
|2023-06-22| Horacio| Agregar plato ya existente. | 10 minutos | Al agregar un plato ya existente no realiza ninguna comprobación previa y lo agrega igualmente.|


## Evaluación Global de la Calidad

Se han identificado varios errores de funcionalidad, algunos de los cuales tienen una severidad importante o moderada. Estos errores incluyen problemas con el cálculo del costo total del carrito al agregar varias unidades del mismo producto, la falta de validación de campos vacíos al agregar o editar platos, y la falta de detección de platos ya existentes al agregar nuevos platos. Además, se ha encontrado una inconsistencia en la carga de menús en la pantalla "Secciones" al hacer clic en la opción "Menú". Estos problemas afectan la usabilidad y la funcionalidad del sistema.

Se han generado casos de prueba para abordar cada uno de los problemas identificados. Estos casos de prueba cubren diferentes escenarios y se enfocan en verificar el comportamiento esperado del sistema. También se han realizado sesiones de prueba exploratoria para evaluar el sistema desde diferentes perspectivas y descubrir posibles problemas adicionales.

En general, se recomienda abordar los errores identificados y realizar pruebas adicionales para garantizar la calidad del sistema. Es importante corregir los problemas críticos e importantes, ya que afectan la funcionalidad básica del sistema y la experiencia del usuario. También se han detectado errores de ortografía en algunas opciones de menú.


