﻿## Nombre del caso de uso: Agregar Método de Pago

### Actor principal: Usuario, Sistema.

Breve descripción: Este caso de uso permite al usuario gestionar sus métodos de pago dentro de la aplicación, pudiendo agregar un nuevo método de pago al sistema.

**Precondiciones:**

-   El usuario debe haber iniciado sesión en la aplicación como padre de un alumno registrado en el colegio.
-   La cuenta del usuario debe estar asociada a una cantina escolar en la aplicación.
- El usuario debe haber verificado su información de contacto.

**Flujo principal:**

1.  El usuario accede a la opción "Métodos de Pago" en la pantalla principal de la aplicación.
2.  El sistema muestra una lista de los métodos de pago actualmente asociados a la cuenta del usuario.
3.  El usuario selecciona la opción "Agregar nuevo método de pago".
4.  El sistema presenta un formulario para ingresar la información del nuevo método de pago, incluyendo nombre del titular, número de tarjeta, fecha de vencimiento, código de seguridad y dirección de facturación.
5.  El usuario completa el formulario y envía la información.
6.  El sistema valida la información ingresada y muestra una confirmación clara de que el nuevo método de pago ha sido agregado exitosamente.

Flujo alternativo:

-  En el paso 5, si la información ingresada es incorrecta o incompleta, el sistema muestra un mensaje de error y solicita al usuario que corrija los datos.
-   En el paso 5, si la información ingresada es sospechosa o se detecta un posible fraude, el sistema notifica al usuario y no permite agregar el nuevo método de pago.
-   En el paso 6, si no se puede agregar el nuevo método de pago por problemas técnicos, el sistema muestra un mensaje de error y solicita al usuario que lo intente más tarde.

Postcondiciones:

-   El nuevo método de pago es agregado a la cuenta del usuario y se encuentra disponible para su uso en la aplicación de la cantina escolar.