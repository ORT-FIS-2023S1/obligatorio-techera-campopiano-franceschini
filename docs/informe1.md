# Informe entrega 1

## Repositorio Git

  

## Versionado

  

## Elicitación

  

## Especificación

  

### Definición de requerimientos funcionales y no funcionales

#### Funcionales:

 - **Registro de usuarios**: la aplicación debe permitir a los usuarios registrarse y crear una cuenta para acceder a la información del menú diario y el consumo de sus hijos.
 - **Registro de administradores**: la aplicación debe permitir el registro de usuarios administradores, los cuales tendrán acceso a funcionalidades extras dentro de la aplicación.
 Para este registro ***se solicitara información adicional*** sobre la institución a la cual pertenece la cuenta.
 - **Inicio de sesión**: La aplicación debe proporcionar una función de inicio de sesión para que los usuarios puedan acceder a su cuenta utilizando un nombre de usuario y una contraseña.
 - **Reestablecer contraseña**: El sistema debe permitir que los usuarios por medio de su correo electrónico puedan reestablecer su contraseña.
 -  **Menú diario**: La aplicación debe mostrar el menú diario del comedor escolar seleccionado.
 - **Notificaciones**: La aplicación debe permitir a los padres o responsables recibir notificaciones de la información del menú diario y el consumo de sus hijos, a través de la aplicación o por correo electrónico.
 - **Registrar comedor**: La aplicación debe permitir a un usuario administrador crear un comedor, solicitando la siguiente información:
	 - Nombre del comedor
	 - Dirección donde se ubica el mismo
	 - Descripción (área de texto donde el administrador podrá dar mas detalles sobre el comedor, ej.: numero de alumnos que atiende, hace cuanto tiempo esta funcionando ,etc.)
 - **Actualizar información de comedor**: La aplicación debe permitir a un usuario administrador actualizar la información del comedor.
 - **Eliminar comedor**:  La aplicación debe permitir a un usuario administrador eliminar un comedor.
 - **Registrar menú:** La aplicación debe permitir a los usuarios administradores registrar un menú solicitándoles la siguiente información:
	 - Fecha en la cual se estará sirviendo el menú
	 - Comedor en el cual se servirá dicho menú
	 - Información nutricional (área de texto en la cual el administrador podrá dar información sobre el aporte nutricional del menú, como también indicar que alternativas se les dará a aquellos alumnos que posean intolerancia a algunos alimentos del menú)
	 - Desayuno (área de texto que describe que será servido en el desayuno)
	 - Almuerzo (área de texto que describe que será servido en el almuerzo)
	 - Merienda (área de texto que describe que será servido en el merienda)
 - **Actualizar menú:** La aplicación debe permitir a los usuarios administradores actualizar la información de un menú.
 - **Eliminar menú**: La aplicación debe permitir a los usuarios administradores eliminar un menú.
 - **Actualización de Usuario**: La aplicación debe permitir a los usuarios registrados modificar información de su perfil, tal como foto, nombre, correo electrónico y teléfono.


#### No Funcionales:

 - El sistema debe integrarse con auth0 para permitir login con google y facebook
 - Como lenguaje de desarrollo deberá utilizarse Javascript
 - Para el desarrollo de la interfaz grafica se utilizara HTML y bootstrap

  

### User Stories / Use Cases detallados
---
#### YO COMO ***USUARIO***

**PUEDO**: Registrar una cuenta utilizando mi email y una contraseña

**PARA**: Tener acceso a la aplicación

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  N/A
Proceso: 
Debe llenarse un formulario con los siguientes campos:
 1. Email
 2. Contraseña segura
 3. Repetir la contraseña
 4. Nombre de usuario
 5. Foto de perfil
> Nota: Una vez completado los campos anteriores, se habilitara el botón ***REGISTRATSE***

**Resultado esperado**: Nuevo usuario registrado en el sistema
**Validaciones**:
 - No debe existir otra cuenta creada con ese correo
 - El campo contraseña y repetir contraseña deben coincidir
 - La contraseña ingresada debe cumplir con los siguientes requerimientos:
	 -   Debe incluir números.
	-   Una combinación de letras mayúsculas y minúsculas.
	-   Incluya al menos un carácter especial (* ? ! @ # $ / () {} = . , ; :  )
	-   Tenga una longitud mayor o igual a 8 caracteres.
	-   No debe tener espacios en blanco.
 - El nombre de usuario no puede contener caracteres especiales y su longitud no puede superar los 25 caracteres
 - La foto de perfil debe estar en alguno de los siguientes formatos (PNG,JPEG,GIF) y su tamaño no debe superar los 12MB, también debe tener al menos 400 píxeles de ancho y 150 píxeles de alto.
---
#### YO COMO ***USUARIO***

**PUEDO**: Iniciar sesión en la aplicación

**PARA**: Obtener acceso a las funcionalidades de la misma

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  La cuenta con la que quiero iniciar sesión debe existir dentro del sistema
Proceso: 
Debe llenarse un formulario con los siguientes campos:
 1. Email
 2. Contraseña segura
> Nota: Una vez completado los campos anteriores, se habilitara el botón ***INICIAR SESIÓN***

**Resultado esperado**: El usuario es redirigido a la pantalla principal de la aplicación
**Validaciones**: N/A 

---
#### YO COMO ***USUARIO***

**PUEDO**: Restablecer mi contraseña 

**PARA**: Recuperar el acceso a la aplicación 

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  La cuenta que intento recuperar debe estar registrada en el sistema
Proceso: 
En la ventana de inicio de sesión presiono recuperar contraseña, en ese momento la aplicación me redirige a una pantalla con un formulario el cual tiene los siguientes campos:
 1. Email
> Nota: Una vez completado los campos anteriores, se habilitara el botón ***RECUPERAR***

Una vez presionado el botón de recuperar, se mostrara en pantalla el mensaje "Se envió a tu dirección de correo electrónico las instrucciones para recuperar tu contraseña"
**Resultado esperado**: El usuario es recibe un correo electrónico con un enlace el cual lo dirige a nuevamente a la aplicación y se le muestra un formulario el cual le pide que ingrese la nueva contraseña.
**Validaciones**: 
 - La nueva contraseña debe cumplir con las condiciones de contraseña segura

---
#### YO COMO ***USUARIO***

**PUEDO**: Ver menú diario

**PARA**: Observar detalles del menú diario de un comedor especifico

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  Debo tener una cuenta registrada  y haber iniciado sesión en la aplicación
Proceso:

 1. En la ventana principal, elijo la opción ***ver menú diario***
 2. Elijo el comedor y presiono ***ver***
 3. En la lista elijo el día que quiero ver
> Nota: La lista esta ordenada por fecha

**Validaciones**: 

---
#### YO COMO ***USUARIO***

**PUEDO**: Ver información del comedor

**PARA**: Observar detalles de un comedor

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  Debo tener una cuenta registrada  y haber iniciado sesión en la aplicación
Proceso:
 1. En la ventana principal, elijo la opción ***comedores***
 2. En la lista elijo el comedor que quiero ver

**Validaciones**: 

---
#### YO COMO ***USUARIO***

**PUEDO**: Actualizar mi información de perfil

**PARA**: Cambiar mis datos personales y de contacto

##### CRITERIOS DE ACEPTACIÓN 👌

**Precondiciones**:  Debo tener una cuenta registrada  y haber iniciado sesión en la aplicación
Proceso:
 - En la ventana principal, elijo la opción ***perfil***
 Se me abrirá una pantalla con un formulario el cual me permitirá editar:
 
 - Nombre de usuario
 - Foto de perfil
 - Contraseña 

**Validaciones**: 
Los campos nombre de usuario y contraseña deben validarse al igual que se hicieron en el momento del registro.

### Bocetos de IU

  

## Validación y verificación

## Reflexión