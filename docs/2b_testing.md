# Informe de Testing

## Sumario de Issues

### Errores de Funcionalidad

#### Severidad Crítica

#### Severidad Importante

#### Severidad Moderada

- [ ] Issue 1 - El botón "Realizar pedido" sigue visible después de eliminar el único producto del carrito

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



## Sesiones de Prueba Exploratoria

| Fecha       | Tester | Misión                                                         | Duración | Notas                                                                               |
|-------------|--------|----------------------------------------------------------------|----------|-------------------------------------------------------------------------------------|
| 2023-06-22  | Andrés   | Eliminación de producto del carrito sin pedidos y realizar pedido | 20 minutos   | -Verificado el comportamiento del botón "Realizar pedido" tras eliminar un producto. -Confirmado el mensaje de error al intentar realizar pedido sin productos en el carrito |



## Evaluación Global de la Calidad





