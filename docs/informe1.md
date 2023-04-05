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

Precondiciones:  N/A
Proceso: 
Debe llenarse un formulario con los siguientes campos:
 1. Email
 2. Contraseña segura
 3. Repetir la contraseña
 4. Nombre de usuario
 5. Foto de perfil
> Nota: Una vez completado los campos anteriores, se habilitara el botón **REGISTRATSE**

Resultado esperado: Nuevo usuario registrado en el sistema
Validaciones 
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

### Bocetos de IU

  

## Validación y verificación

## Reflexión