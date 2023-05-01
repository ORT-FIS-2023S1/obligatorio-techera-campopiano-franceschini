## Nombre del caso de uso: Listar y Eliminar Métodos de Pago

### Actor principal: Usuario.

Breve descripción: Permitir al usuario listar y eliminar los métodos de pagos registrados en la aplicación de la cantina escolar.

**Precondiciones:**

-   El usuario debe haber iniciado sesión en la aplicación como padre de un comensal registrado en el colegio.
-   La cuenta del usuario debe estar asociada a una cantina escolar en la aplicación.
- El usuario debe haber verificado su información de contacto.

**Flujo principal:**

1.  El usuario accede a la opción "Métodos de Pago" en la pantalla principal de la aplicación.
2.  El sistema muestra una lista de los métodos de pago actualmente asociados a la cuenta del usuario.
3.  La aplicación muestra una lista de los métodos de pago registrados por el usuario, mostrando información oculta de los datos de las tarjetas de crédito, tales como los últimos 4 dígitos de la tarjeta, la marca y si es de crédito o débito.
2.  El usuario elige la opción "Eliminar" junto al método de pago que desea eliminar.
3.  La aplicación muestra un mensaje de confirmación pidiéndole al usuario que confirme si desea eliminar el método de pago seleccionado.
4.  El usuario confirma la eliminación del método de pago.
5.  La aplicación elimina el método de pago seleccionado de la lista.

**Flujo alternativo:**

-  En cualquier momento, el usuario puede cancelar el proceso de eliminación del método de pago y volver a la lista de métodos de pago.

**Excepciones:**

-   Si el usuario no tiene ningún método de pago registrado, la aplicación muestra un mensaje indicando que no hay métodos de pago registrados y ofrece la opción de agregar uno nuevo.
-   Si ocurre algún error durante el proceso de eliminación, la aplicación muestra un mensaje de error al usuario y no elimina el método de pago seleccionado.
