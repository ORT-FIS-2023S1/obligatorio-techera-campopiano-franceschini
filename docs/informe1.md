
# Informe entrega 1

## Repositorio Git

## Versionado
Para comenzar, creamos la rama principal de nuestro repositorio (master). Cada uno de los integrantes del equipo clonó el repositorio mediante el siguiente comando: **git clone** < *URL repositorio* >.

Una vez hecho esto, nos posicionamos en la rama principal (main) y creamos una nueva rama para el desarrollo (**develop**) mediante el siguiente comando: **git branch**  < *nombre rama* >. A continuación, nos cambiamos a la nueva rama utilizando el comando: **git checkout** < *nombre rama* >.

Dentro de la rama develop, creamos un nuevo archivo mediante el comando: **touch** < *nombre archivo.txt* > .Después, editamos el archivo utilizando el comando: **vi** < *nombre archivo* >. Una vez dentro del archivo, presionamos la tecla "**i**" para insertar texto y modificamos el archivo según sea necesario. Para guardar los cambios y salir del editor vi, utilizamos el comando "**:wq**".

De vuelta en la consola de git, agregamos los cambios realizados mediante el comando: **git add .** Y luego realizamos un commit con el siguiente comando: **git commit -m** "*Mensaje*".

Subimos los cambios a la rama develop del repositorio remoto utilizando el comando: **git push origin develop** y finalmente cada uno de los integrantes del equipo descargó los cambios más recientes utilizando el comando: **git pull**.
### Git flow
A la hora de decidir de que manera iríamos incorporando los nuevos cambios al repositorio optamos por manejar **feature branch**, es decir una vez dividido el trabajo que cada integrante del grupo iba a realizar en esa fase se crearon nuevas ramas donde se trabajaría diferentes partes de la entrega ej: **feature/eliciticaion** donde en esa rama estarían todos los cambios relacionados a la parte de elicitación. 
Cada vez que se terminaba una parte importante del trabajo, ej **se agregan historias de usuario para administradores** creamos un commit para tener registros claros de los cambios importantes en nuestro repositorio.
Para el merge optamos por usar **pull request**, cada vez que un integrante tenia cambios y quería incorporarlos a la rama develop abría un pull request y notificaba al resto del grupo. Alguien del grupo **validaba que lo que se esta agregando sigue los lineamientos de todo el proyecto** y hacia el merge.
Cuando estuvimos listos para realizar la primera entrega, hicimos merge de todas nuestras **feature branches** con **develop**, luego hicimos un merge de develop con main y creamos un **Tag** para identificar esa primera entrega.
## Elicitación
+ Aplicación para comedor escolar. El objetivo principal de la aplicación es que madres, padres o responsables puedan conocer el menú diario y controlar el consumo realizados por sus hijos.

### Misión de la aplicación
El sistema esta pensado para un **comedor de un colegio**, busca dar soporte a **3 grupos de usuarios**.

 1. **Usuarios**: Los usuarios son los **tutores** que tienen niños o adolescentes a cargo y están interesados en tener un cierto control sobre la alimentación de los mismos en el comedor.
 2. **Administradores**: **Personal a cargo del comedor** en el comedor, esta interesado en ofrecer alimentos los cuales los usuarios se vean cómodos.
 3. **Comensales**: **Los alumnos de ese comedor**, que frecuentan el comedor están referenciados como comensales, si bien este actor tiene un papel fundamental en el dominio del negocio, **la aplicación esta pensada para que el no actué directamente con ella**, si no que sea el usuario el que por medio de esta aplicación de acceso al **menú del comedor**. Esto se planteo así debido a la **preocupación de los usuarios sobre el el manejo del dinero por parte de los comensales** y la necesidad de **restringir los alimentos a que estos tienen acceso** dentro de la institución escolar. A nuestros usuarios les interesa **ver como se alimentan, su correcta alimentación  y que no tengan que preocuparse por el manejo que le están dando al dinero** con todo el riesgo que eso conlleva. Por esta razón no hay casos de usos ni historias para el actor comensal, ya que **el comensal es parte de las historias y casos de los demás actores**.
 **La aplicación busca algo mas que solo dar información sobre como se alimentan los comensales**,  busca ayudar en problemáticas mas complejas tales como ayudar a **combatir la obesidad infantil y la malnutrición**. También busca dar **seguridad alimentaria** a los comensales, restringiendo el menú al cual tienen acceso, y fijando limites diarios de consumo.

## Resultados de la Entrevista.

**Contexto:**

El día 25 de abril de 2023, se llevaron a cabo una serie de entrevistas en el *comedor Francisco Epínola*, en relación a la implementación de una aplicación para el comedor escolar. Las entrevistas se realizaron en la sala de reuniones del comedor, en horarios distintos para cada uno de los entrevistados. 

La primera entrevista tuvo lugar a las 10:00 horas con parte del equipo docente, la **Sra. Mag. Lucía Martínez**, que es una persona referente del comedor **encargada de la gestión del comedor**, y el **Prof. Sr. Enrique Cal**. En la entrevista se discutieron temas relacionados con la **logística de la implementación de la aplicación y la colaboración entre el comedor y la cantina** para el éxito de la iniciativa.

La segunda entrevista tuvo lugar a las 11:30 de la mañana con los padres de dos estudiantes del comedor, el **Sr. Juan Pérez y la Sra. Ana García**. Durante la entrevista se discutieron temas relacionados con la **experiencia de los padres en relación a la alimentación de sus hijos en el comedor escolar** y sus expectativas en cuanto a la implementación de una aplicación para hacer más eficiente y cómodo el proceso.

La tercera entrevista se llevó a cabo a las 12:00 del mediodía con la madre de otro estudiante del comedor, la **Sra. Laura Gómez**. Durante la entrevista se abordaron temas similares a los de la segunda entrevista, pero con un enfoque más específico en las necesidades y expectativas de la Sra. Gómez.

**Cada entrevista tuvo una duración aproximada de 30 minutos**, y se llevaron a cabo de manera individual o como máximo de dos personas, para permitir una conversación más enfocada y detallada.

**Preguntas realizadas a los referentes de la institución:**

1. ¿Cuál es el proceso actual que los padres o responsables siguen para conocer el menú diario del comedor escolar?
2. ¿Qué información específica les gustaría obtener a los padres o responsables sobre el menú diario y el consumo de sus hijos en el comedor escolar?
3. ¿Cómo le gustaría recibir esta información, a través de notificaciones push, correo electrónico o mensajes de texto?
4. ¿Le gustaría a los padres o responsables tener la posibilidad de realizar comentarios sobre el menú diario del comedor escolar?
5. ¿Qué tan importante sería para los padres o responsables poder tener información sobre alergias alimentarias o restricciones dietéticas de sus hijos en la aplicación?
6. ¿Le gustaría a los padres o responsables tener la opción de realizar pedidos anticipados de comida para sus hijos?
7. ¿Cómo les gustaría a los padres o responsables realizar el seguimiento del consumo de sus hijos en el comedor escolar? ¿Le gustaría recibir actualizaciones diarias, semanales o mensuales?
8. ¿Le gustaría a los padres o responsables tener la opción de configurar recordatorios o alertas sobre el consumo de sus hijos en la aplicación?
9. ¿Existen restricciones presupuestarias o de tiempo que debamos tener en cuenta al desarrollar la aplicación?
10. ¿Hay algún otro requisito o característica que le gustaría ver en la aplicación que no se haya mencionado anteriormente?

**Respuestas del equipo docente:**

1. **Proceso actual**: "Actualmente, los padres o responsables tienen que pedir una copia impresa del menú semanal en la escuela o visitar el sitio web del comedor escolar para conocer el menú diario."
2. **Información específica**: "Los padres o responsables desean saber qué se va a servir en el almuerzo, así como la información nutricional y las posibles alergias alimentarias asociadas con cada opción de menú."
3. **Forma de recibir la información**: "La mayoría de los padres o responsables prefieren recibir la información a través de notificaciones push en la aplicación, pero algunos también podrían preferir recibir correos electrónicos o mensajes de texto por whatsapp"
4. **Comentarios sobre el menú**: "Sí, los padres o responsables quieren tener la opción de realizar comentarios o sugerencias sobre el menú diario para que la escuela pueda mejorar la calidad de la comida que sirve."
5. **Información sobre alergias o restricciones dietéticas**: "Es muy importante para los padres o responsables poder ingresar información sobre alergias alimentarias o restricciones dietéticas de sus hijos en la aplicación para asegurarse de que sus hijos solo coman alimentos seguros y saludables."
6. **Pedidos anticipados**: "Sí, algunos padres o responsables quieren tener la opción de realizar pedidos anticipados de comida para sus hijos para que se les sirva exactamente lo que necesitan."
7. **Seguimiento del consumo**: "La mayoría de los padres o responsables preferiría recibir actualizaciones diarias sobre el consumo de sus hijos en el comedor escolar para asegurarse de que están comiendo lo suficiente y comiendo alimentos saludables."
8. **Alertas y recordatorios**: "Sí, algunos padres o responsables quieren tener la opción de configurar alertas o recordatorios sobre el consumo de sus hijos en la aplicación para mantenerse al tanto de lo que están comiendo."
9. **Restricciones presupuestarias o de tiempo**: "No hay restricciones presupuestarias o de tiempo específicas, pero sería bueno tener una aplicación fácil de usar y que no consuma mucho tiempo para los padres o responsables."
10. **Otros requisitos o características**: "Algunos padres o responsables podrían querer ver información adicional sobre el tiempo de actividad física de sus hijos en la escuela o la cantidad de tiempo que pasan en el comedor escolar."


### Preguntas realizadas en la segunda entrevista, a dos de los padres, la Sra. Ana García y el Sr. Juan Pérez.

**¿Cómo describirían su experiencia actual con el servicio de cantina de la escuela y el proceso de solicitud de comida?**

**Responde Ana García:** En general, nuestra experiencia ha sido positiva. Sin embargo, a veces encontramos que el proceso de pedir comida puede ser un poco complicado y que hay largas filas durante los horarios de almuerzo más ocupados. También hemos tenido algunas preocupaciones sobre la calidad y variedad de la comida que ofrece la cantina.

**¿Qué expectativas tienen en relación a la implementación de una aplicación para el comedor escolar?**

**Responde Ana Garcia:** Creemos que una aplicación podría hacer el proceso de pedir el almuerzo más fácil y rápido, lo que sería muy conveniente para nosotros como padres que estamos muy ocupados. Además, nos gustaría ver más opciones saludables y variados en el menú.

**¿Qué características específicas les gustaría ver en una aplicación para el comedor escolar?**

**Responde Juan Perez:** Nos gustaría ver un menú claro y fácil de usar, con opciones para personalizar los pedidos y hacer solicitudes especiales. También sería útil tener una función de seguimiento de pedidos para que los estudiantes puedan saber en qué etapa del proceso se encuentra su pedido. Además, sería importante tener información clara sobre los ingredientes y la información nutricional de los menúes disponibles. Ademas, nos gustaría disponer de menúes semanales, a los cuales podríamos de alguna manera suscribirnos, tanto semanal como mensualmente, para no tener que lidiar todos los días con el tema del almuerzo y tener que estar pendientes del mismo todos los días.

**¿Tienen alguna preocupación en cuanto a la privacidad y seguridad de la información personal en una aplicación de comedor escolar?**

**Responde Ana García:** Sí, nos preocupa la seguridad y privacidad de los datos personales y de los pedidos de comida. Sería importante para nosotros saber cómo se manejarían nuestros datos personales y cómo se protegerían de posibles amenazas externas.

**¿Cómo podrían ver la implementación de una aplicación mejorando la experiencia general del comedor escolar para los estudiantes y los padres?**

**Responde Juan Perez:** Creemos que una aplicación podría hacer que el proceso de pedido de comida sea más fácil y eficiente, lo que podría reducir el tiempo de espera y las filas. Además, si la aplicación incluye opciones de personalización y información nutricional clara, los estudiantes y padres podrían hacer elecciones más saludables y mejor informadas sobre la comida que consumen. En general, una aplicación podría mejorar la experiencia general del comedor escolar para todos los involucrados.

### Preguntas realizadas en la tercera entrevista que tuvo lugar en la institución, con la Sra. Laura Gomez.

**¿Podría describirnos su experiencia actual con el comedor escolar y qué aspectos le gustaría ver mejorados?**

**Respuesta:** En general, estoy satisfecha con el comedor escolar, pero creo que hay algunos aspectos que podrían mejorarse. Me gustaría ver una mayor variedad de opciones de alimentos saludables y de calidad, así como un proceso de pedido más rápido y eficiente para evitar largas filas y tiempos de espera.

**¿Cómo cree que una aplicación podría mejorar la experiencia del comedor escolar para usted y su hijo?**

**Respuesta:** Creo que una aplicación sería muy útil para hacer que el proceso de pedido de comida sea más fácil y rápido, lo que sería especialmente conveniente para mí ya que trabajo a tiempo completo. Además, si la aplicación incluye información nutricional y opciones de personalización, podré hacer elecciones más informadas y saludables para mi hijo.

**¿Hay algún otro aspecto que le gustaría ver incorporado en una aplicación de comedor escolar?**

**Respuesta:** Me gustaría ver una función de seguimiento de pedidos en tiempo real para que pueda saber cuándo se está preparando y entregando la comida de mi hijo. También sería útil tener un sistema de alerta para informarme si hay algún cambio en el menú o si hay algún problema con el pedido. En general, creo que una aplicación bien diseñada podría hacer una gran diferencia en la experiencia del comedor escolar para los padres y los estudiantes.

**Referencias a fuentes de información:**

La fuente de donde procede esta información, es a través de entrevistas realizadas con el personal del comedor, y padres/madres/tutores legales, que mostraban interés de disponer de una app donde puedan administrar el consumo de alimentos de sus hijos cuando están fuera de sus hogares.


**Caracterización de usuarios: User Personas**

**Los Padres de los estudiantes:** Son los principales usuarios de la aplicación y están interesados en conocer el menú diario del comedor escolar y controlar el consumo realizado por sus hijos. Quieren asegurarse de que sus hijos estén comiendo comidas saludables y nutritivas y que no estén expuestos a alimentos que puedan causar alergias o intolerancias alimentarias. 
También podrían estar interesados en realizar comentarios y sugerencias sobre el menú. 

**Estudiantes:** Aunque no son usuarios directos de la aplicación, son la razón por la cual se desarrolla la aplicación. 
Los estudiantes necesitan una dieta saludable y equilibrada durante el día escolar y la aplicación ayudará a sus padres o tutores legales a asegurarse de que sus hijos estén recibiendo la nutrición adecuada. 

**Personal del comedor escolar:** El personal del comedor escolar podría ser considerado indirectamente como usuarios de la aplicación, 
ya que la aplicación podría permitirles conocer mejor las preferencias y necesidades de los estudiantes y así mejorar la calidad del servicio que brindan. 

**El equipo docente del comedor:** Es un grupo clave para asegurar que la aplicación cumpla con las expectativas y necesidades de los padres, ya que ellos entienden los objetivos educativos y de bienestar de los estudiantes. Por lo tanto, es importante considerar su perspectiva al diseñar e implementar la aplicación para garantizar que sea eficaz y se alinee con los objetivos educativos del comedor.

**Modelo Conceptual del problema:** 

El modelo conceptual del problema proporciona una representación abstracta y de alto nivel de los componentes clave del sistema y sus relaciones. 
En el caso de la aplicación para el comedor escolar, el modelo conceptual, es el siguiente:

1. Usuarios: Los usuarios principales son los padres o responsables, que utilizan la aplicación para conocer el menú diario del comedor escolar y controlar el consumo realizado por sus hijos.
2. Información del menú: La aplicación proporciona información sobre el menú diario del comedor escolar, incluyendo opciones de almuerzo y bebidas, información nutricional y posibles alergias alimentarias asociadas con cada opción.
3. Registro de información personal: Los usuarios pueden ingresar información sobre alergias alimentarias y restricciones dietéticas de sus hijos para asegurarse de que solo coman alimentos seguros y saludables.
4. Comentarios y sugerencias: Los usuarios pueden realizar comentarios y sugerencias sobre el menú diario para mejorar la calidad de la comida que sirve el comedor escolar.
5. Pedidos anticipados: Los usuarios pueden realizar pedidos anticipados de comida para sus hijos para que se les sirva exactamente lo que necesitan.
6. Registro y seguimiento del consumo: La aplicación permite a los usuarios realizar un seguimiento del consumo de sus hijos en el comedor escolar para asegurarse de que están comiendo lo suficiente y comiendo alimentos saludables.
7. Alertas y recordatorios: La aplicación puede enviar alertas y recordatorios a los usuarios sobre el consumo de sus hijos en el comedor escolar para ayudarles a mantenerse al tanto de lo que están comiendo.
8. Personalización: La aplicación puede ser personalizada para las necesidades específicas de cada estudiante, incluyendo restricciones dietéticas y preferencias de comida.


## Especificación

### Definición de requerimientos funcionales y no funcionales

#### Funcionales:
#### Usuarios
 - **Registro de usuarios**: la aplicación debe permitir a los usuarios registrarse y crear una cuenta para acceder a la información del menú diario y el consumo de sus hijos.
 - **Notificaciones**: La aplicación debe permitir a los padres o responsables recibir notificaciones de la información del menú diario y el consumo de sus hijos, a través de la aplicación o por correo electrónico.
 - **Suscribirse a menú semanal:** La aplicación debe permitir a los usuarios suscribir un comensal a un menú semanal.
 -  **Cancelar suscripción a menú semanal:** La aplicación debe permitir a los usuarios cancelar la suscripción de un comensal a un menú semanal.
 - **Vincular comensal:** La aplicación debe permitir a los usuarios vincularse un comensal.
 - **Ver comensales vinculados:** La aplicación debe permitir a los usuarios ver los comensales a los cuales están vinculados.
 - **Desvincular un comensal:** La aplicación debe permitir a los usuarios desvincularse de un comensal.
 - **Editar limite de consumo:** La aplicación debe permitir a los usuarios editar el limite diario de consumo de un comensal vinculado a su cuenta.
 - **Establecer menú personalizado a un comensal:** La aplicación debe permitir a los usuarios establecer un menú personalizado a los comensales que están suscriptos.
 - **Agregar método de pago:** La aplicación debe permitir a los usuarios agregar un método de pago a su cuenta.
 - **Quitar método de pago:** La aplicación debe permitir a los usuarios quitar un método de pago de su cuenta.
 - **Suscribirse a un comedor:** La aplicación debe permitir a los usuarios suscribirse a un comedor.
 - **Quitar suscripción de un comedor:** La aplicación debe permitir a los usuarios quitar su suscripción a un comedor.
  - **Agregar plato al carrito:** La aplicación debe permitir a los usuarios agregar un plato al carrito de compras, este plato estará asociado a un comensal que será quien lo retire físicamente en el comedor.
 -  **Quitar plato del carrito:** La aplicación debe permitir a los usuarios quitar un plato del carrito de compras.
 - **Finalizar compra:** La aplicación debe permitir a los usuarios finalizar el proceso de compra.
 - **Actualización de Usuario**: La aplicación debe permitir a los usuarios registrados modificar información de su perfil, tal como foto, nombre, correo electrónico y teléfono.
 
 
#### En común
 - **Inicio de sesión**: La aplicación debe proporcionar una función de inicio de sesión para que los usuarios y administradores puedan acceder a su cuenta utilizando un nombre de usuario y una contraseña.
 - **Restablecer contraseña**: El sistema debe permitir que los usuarios y administradores por medio de su correo electrónico puedan restablecer su contraseña.
 -  **Menú diario**: La aplicación debe mostrar el menú diario del comedor a los usuarios y administradores.
 -   **Menú semanal**: La aplicación debe mostrar el menú semanal del comedor, el menú semanal es una lista de menús diarios que se servirán durante la semana.
  -  **Agregar comentario al menú diario del comedor:** La aplicación debe permitir a los usuarios y administradores agregar comentarios al menú del comedor.
  - **Ver menú**: La aplicación debe permitir ver el menú del comedor.
  - **Ver menú diario**: La aplicación debe permitir ver el menú diario del comedor.
  - **Ver menú semanal**: La aplicación debe permitir ver el menú semanal diario del comedor.
 - **Ver información del comedor**: La aplicación debe permitir ver la información del comedor.
 -   **Actualizar información de perfil**: La aplicación debe permitir tanto a usuarios como administradores actualizar su información de perfil.
 
#### Administradores
 - **Registro de administradores**: la aplicación debe permitir el registro de usuarios administradores, los cuales tendrán acceso a funcionalidades extras dentro de la aplicación.
 Para este registro ***se solicitara información adicional*** sobre la institución a la cual pertenece la cuenta.
  - **Actualizar información de comedor**: La aplicación debe permitir a un usuario administrador actualizar la información del comedor.
 - **Registrar un nuevo plato en el menú**: La aplicación debe permitir a un usuario administrador registrar un nuevo plato en el menú del comedor.
 - **Editar la información de un plato del menú**: La aplicación debe permitir a un usuario administrador editar la información de un plato del menú.
 -  **Eliminar un plato del menú**: La aplicación debe permitir a un usuario administrador eliminar un plato del menú del comedor.
 - **Registrar menú diario:** La aplicación debe permitir a los usuarios administradores registrar un menú diario.
 -    **Eliminar menú diario:** La aplicación debe permitir a los usuarios administradores eliminar un menú diario.
 - **Editar menú diario:** La aplicación debe permitir a los usuarios administradores editar la información un menú diario.
  - **Crear un nuevo grupo de comensales**: La aplicación debe permitir a un usuario administrador registrar un nuevo grupo de comensales.
 - **Editar un grupo de comensales existente**: La aplicación debe permitir a un usuario administrador editar la información de un grupo de comensales.
 -  **Eliminar grupo de comensales**: La aplicación debe permitir a un usuario administrador eliminar un grupo de comensales.
   - **Registrar un nuevo comensal**: La aplicación debe permitir a un usuario administrador registrar un comensal y asociarlo a un grupo de comensales.
 - **Editar un la información de un comensal**: La aplicación debe permitir a un usuario administrador editar la información de un comensal.
 -  **Eliminar un comensal**: La aplicación debe permitir a un usuario administrador eliminar un comensal.
 -  **Registrar un pedido**: La aplicación debe permitir a un usuario administrador registrar un pedido en nombre de un comensal.
 -  **Ver pedidos**: La aplicación debe permitir a un usuario administrador ver los pedidos procesados y sin procesar que tiene el comedor.
 - **Procesar pedido**: La aplicación debe permitir a un usuario administrador marcar un pedido como procesado.




#### No Funcionales:

- El sistema debe integrarse con auth0 para permitir login con google y facebook
- Como lenguaje de desarrollo deberá utilizarse Javascript: Node Js
- Para el desarrollo de la interfaz grafica se utilizara HTML y bootstrap
- La documentación debe estar en formato markdown 
- El control de versiones será por medio de git
- La interfaz de usuario debe ser responsiva
- Accesibilidad WCAG
- Estándar de codificación  HTML/JS google style
- Debe utilizarse análisis estático ESLint durante el desarrollo
- Para las pruebas deberá utilizarse la librería Jest

### User Stories / Use Cases detallados

---
#### Usuario
---

#### YO COMO **_USUARIO_**

**PUEDO**: Registrar una cuenta utilizando mi email y una contraseña

**PARA**: Tener acceso a la aplicación

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El sistema debe enviar un mensaje al usuario para confirmar el registro.
 2. El usuario debe poder acceder a la aplicación una vez confirmado el registro

---

#### YO COMO **_USUARIO_**

**PUEDO**: Suscribir un comensal al menú semanal

**PARA**: Que ese comensal reciba en el comedor el menú diario de esa semana sin la necesidad de estar registrando el pedido cada día.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El sistema deberá registrar un pedido por cada menú diario de esa semana.
 2. El pedido debe estar disponible para que el administrador del comedor pueda procesarlo
 3. El sistema debitará el valor total del menú semanal en un único pago, el débito se producirá un día antes del inicio de la semana correspondiente al menú.
 4. Si el usuario se suscribe a un menú semanal durante el transcurso de la semana, el sistema debe registrar únicamente los menús diarios que están a partir del día siguiente de la suscripción y será debitado únicamente el monto de dichos menús diarios en un único pago. Si la suscripción se realiza un viernes el sistema indicara que no hay mas menús diarios para esa semana, y preguntara al usuario si quiere suscribirse al menú de la próxima semana.
 5. El sistema debe permitir la suscripción a los menús semanales de cualquier fecha superior a la fecha actual.
 6. El usuario no tiene limite de suscripciones de menús semanales.
 7. No se registrara un pedido de menú si el pago de ese menú no fu confirmado.

---

#### YO COMO **_USUARIO_**

**PUEDO**: Cancelar la suscripción de un comensal a un menú semanal. 

**PARA**: Que no se registren los pedidos de esa semana.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El sistema no debe permitir cancelar la suscripción de un menú semanal si  ese menú semanal corresponde a la semana en la cual se esta intentando cancelar la suscripción.

---

#### YO COMO **_USUARIO_**

**PUEDO**: Vincular comensal. 

**PARA**: Poder controlar el consumo del comensal en el comedor .

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El comensal debe aparecer en la lista de comensales vinculados al usuario.
 2. El usuario debe tener acceso al perfil y la información de ese comensal así como también a realizar operaciones como el registro de pedido y la suscripción a comedores para ese comensal.

---

#### YO COMO **_USUARIO_**

**PUEDO**: Desvincular un comensal. 

**PARA**: No visualizar mas ese comensal en mi lista de comensales .

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El comensal debe desaparecer de la lista de comensales del usuario.
 2. El usuario pierde acceso a las funcionalidades del comensal.

---

#### YO COMO **_USUARIO_**

**PUEDO**: Ver comensales vinculados. 

**PARA**: Tener acceso rápido a la lista de comensales y a los cuales me vincule .

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El usuario podrá observar una lista de comensales a los cuales se suscribió, estos deberán aparecer ordenados alfabéticamente.
---
#### YO COMO **_USUARIO_**

**PUEDO**: Establecer limite de consumo diario a un comensal. 

**PARA**: Impedir que ese comensal realice consumos por encima de ese limite diario.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El limite diario deberá ser visible en la información del comensal.
 2. La suscripciones a menú semanal no cuentan como parte del limite diario.
 3. El usuario podrá registrar pedidos cuando se esta superando el limite diario del comensal.
 4. Cuando se registra un pedido para ese comensal, y sea que alguno de los usuarios vinculados a el los realizo por medio de la aplicación o sea el caso que el propio comensal solicito una orden en el comedor, el valor del pedido es descontado al limite diario.
 5. El limite diario se restablece automáticamente a la hora 00:00 de cada día.
 6. Cuando un comensal esta excediendo su limite diario esto será visible tanto para un administrador como para los usuarios asociados a ese comensal.
 7. Un administrador no podrá registrar un pedido si el valor de la orden que esta realizando el comensal de forma presencial supera el remanente de su limite diario.
---

#### YO COMO **_USUARIO_**
**PUEDO:** Agregar método de pago

**PARA:** Poder gestionar de manera rápida y segura mis preferencias de pago.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El nuevo método de pago de ser agregado exitosamente y estar
    disponible para su uso en la aplicación el comedor.
 2. El proceso de agregar el nuevo método de pago, debe ser fácil de entender y completar por el usuario.
3. La información de pago ingresada debe ser precisa y segura.
4. Se debe proporcionar una confirmación clara de que el nuevo método de pago ha sido agregado exitosamente.
 5. El método de pago agregado debe ser visible al usuario de forma inmediata

---
#### YO COMO **_USUARIO_**
**PUEDO:** Quitar método de pago

**PARA:** Para que no pueda ser usado nuevamente ese método de pago dentro de la aplicación.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. Si el usuario solo posee ese método de pago asociado, el sistema no debe permitir su eliminación.
 2. El método de pago eliminado deberá desaparecer de la lista de métodos de pago del usuario y no estar disponible para ninguna operación dentro de la aplicación.
---
#### YO COMO **_USUARIO_**

**PUEDO:** Suscribirme a un comedor

**PARA:** Tener acceso rápido a la información del comedor y al menú y las funciones que ofrece.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. Una vez agregado suscrito al comedor, este debe aparecer en la lista de comedores suscriptos del usuario.

---
#### YO COMO **_USUARIO_**

**PUEDO:** Quitar suscripción de un comedor

**PARA:** No visualizar mas este comedor en mi lista de comedores.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. Una vez quitado el comedor este desaparece de la lista de comedores del usuario.
---
#### YO COMO **_USUARIO_**

**PUEDO:** Agregar plato al carrito

**PARA:** Luego finalizar la compra y que el comensal al cual asocie el plato pueda reclamarlo en el comedor.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. Cada plato agregado al carrito esta asociado a un comensal, si ese comensal tiene un menú personalizado y el plato no se encuentra dentro de ese menú, no podrá ser agregado al carrito.
 2. El usuario puede establecer una fecha de entrega personalizada para ese plato.
 3. El plato agregado debe visualizarse en el carrito y el valor del plato debe sumarse al monto total de los platos del carrito. 
---
#### YO COMO **_USUARIO_**

**PUEDO:** Finalizar compra

**PARA:** Para que mis comensales pueda acceder a los platos que ordene.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. El sistema deberá debitar en un solo pago el valor total de los platos del carrito.
 2. La orden deberá ser visible para los administradores del comedor una vez finalizada la compra.  
---
#### YO COMO **_USUARIO_**

**PUEDO:** Quitar plato del carrito

**PARA:** Que el plato no sea parte de mi orden.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. Una vez eliminado el plato, el valor de ese plato debe ser restado del monto total del carrito. 
---
#### En común
---
#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO:** Actualizar la información de mi perfil

**PARA:** Mantener esta información actualizada dentro del sistema y los administradores puedan verla.

##### CRITERIOS DE ACEPTACIÓN 👌

 1. La información actualizada será visible de forma inmediata. 
---


#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Iniciar sesión en la aplicación

**PARA**: Obtener acceso a las funcionalidades de la misma

##### CRITERIOS DE ACEPTACIÓN 👌

---

#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Restablecer mi contraseña

**PARA**: Recuperar el acceso a la aplicación

##### CRITERIOS DE ACEPTACIÓN 👌

 1. La nueva contraseña debe cumplir con los criterios de seguridad
 2. El usuario una vez restablecida la contraseña tendrá acceso inmediato al sistema mediante la misma.

---

#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Ver menú diario del comedor

**PARA**: Observar detalles del menú diario del comedor.

##### CRITERIOS DE ACEPTACIÓN 👌

---

#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Agregar comentarios al menú diario

**PARA**: Manifestar mi opinión o responder a otros comentarios sobre el menú

##### CRITERIOS DE ACEPTACIÓN 👌

---

#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Ver menú semanal

**PARA**: Observar todos los menús diarios que se servirán durante una semana en el comedor y ver que este correcto o si me interesa para un comensal.

##### CRITERIOS DE ACEPTACIÓN 👌

---
#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Ver menú diario

**PARA**: Ver si me interesa ordenarlo, o ver que su información este correcta.

##### CRITERIOS DE ACEPTACIÓN 👌

---
#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Ver menú

**PARA**: Ver los platos servidos en el comedor e interesarme por alguno, o chequear que la información de los platos sea la correcta.

##### CRITERIOS DE ACEPTACIÓN 👌

---
#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Ver información del comedor

**PARA**: Observar detalles del comedor

##### CRITERIOS DE ACEPTACIÓN 👌

---

#### YO COMO **_USUARIO / ADMINISTRADOR_**

**PUEDO**: Actualizar mi información de perfil

**PARA**: Cambiar mis datos personales y de contacto

##### CRITERIOS DE ACEPTACIÓN 👌

---
#### Administrador
---

> Un administrador tiene acceso a todas las funcionalidades de un usuario convencional
> por eso en este apartado solo se detallaran las funciones adicionales que tienen acceso dichos administradores.

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Editar la información de un comedor

**PARA**: Mantener esta información actualizada

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

1. El campo nombre del comedor no puede superar los 25 caracteres
2. La descripción no debe superar los 280 caracteres
3. La dirección debe estar en el siguiente formato:< Calle > < numero puerta > Esq: < esquina >

---

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Registrar un menú diario

**PARA**: Que los usuarios puedan observar dicha información dentro del perfil del comedor y que este menú diario forme parte del menú semanal

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

1. Los campos desayuno y merienda son opcionales
2. Una vez creado el menú diario, este debe poder observarse en el menú semanal correspondiente

---

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Editar información de un menú diario

**PARA**: Que mantener esta información actualizada

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

---

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Agregar platos al menú

**PARA**: Que los platos estén disponibles para ordenar desde el menú del comedor

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

---

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Editar los platos del menú

**PARA**: Mantener actualizado la información de platos de mi menú

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

---

#### YO COMO **_ADMINISTRADOR_**

**PUEDO**: Eliminar un plato del menú

**PARA**: Para que este no sea mas visible en el menú y por lo tanto no pueda ser ordenado

##### CRITERIOS DE ACEPTACIÓN 👌

**Validaciones**:

#### YO COMO **_ADMINISTRADOR_**
**PUEDO:** ADMINISTRAR PEDIDOS

**PARA:** Poder gestionar eficientemente las órdenes de los clientes y asegurarme de que sean procesadas de manera adecuada.

**Precondiciones:**
- Debo tener una cuenta registrada y haber iniciado sesión en la aplicación
- Mi cuenta debe ser una cuenta de administrador

**Proceso:**
* En la pantalla principal, elijo la opción **Administración** y luego la opción **Administrar Pedidos**

##### CRITERIOS DE ACEPTACIÓN 👌

 - Puedo Registrar pedidos:
	 - Accedo a una pantalla donde puedo buscar al comensal por los
       siguientes criterios: Búsqueda por QR de la tarjeta, Búsqueda por
       identificador de cliente, Búsqueda por apellido y Búsqueda por grupo
       del usuario, donde en estas dos ultimas opciones se desplegará una
       lista de estudiantes que coincidan con el resultado del criterio de
       búsqueda, para poder seleccionar al comensal correspondiente, una
       vez seleccionado el comensal, puedo ver el menú de pedidos, si es
       libre o restringido y procesar el pedido.
       
- Puedo Ver Pedidos sin procesar: 
	- Puedo acceder a una lista de todos los pedidos que no han sido procesados aún.
	- Puedo ver la información del cliente y los productos incluidos en cada pedido sin procesar.
	- Puedo filtrar y buscar los pedidos por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.
- Puedo Ver Pedidos Procesados:
	- Puedo acceder a una lista de todos los pedidos que han sido procesados y completados.
	- Puedo ver la información del cliente y los productos incluidos en cada pedido procesado.
	- Puedo filtrar y buscar los pedidos por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.
	- Puedo generar informes y estadísticas sobre los pedidos procesados, como la cantidad de ingresos generados por pedidos en un determinado período de tiempo.

---
﻿
### Casos de usos

| Nombre : | Administrar Pedidos |
| --- | --- |
| **Breve Descripción:** | Este caso de uso permite al administrador gestionar los pedidos de los clientes, registrando nuevos pedidos, visualizando pedidos sin procesar y procesados, y generando informes y estadísticas sobre los pedidos. |
| **Actor Principal:** | Administrador |
| **Precondiciones:** | El administrador debe tener una cuenta registrada y haber iniciado sesión en la aplicación.<br> La cuenta del administrador debe tener permisos para administrar pedidos. |
| **Flujo Principal:** | 1. El administrador inicia sesión en la aplicación.<br>2. En la pantalla principal, el administrador elige la opción “Administración” y luego “Administrar Pedidos”.<br>3. El administrador accede a la pantalla de búsqueda de comensales y puede buscarlos por QR de tarjeta, identificador de cliente, apellido o grupo del usuario.<br>4. Si el administrador busca por apellido o grupo del usuario, se desplegará una lista de estudiantes que coincidan con el resultado del criterio de búsqueda, y podrá seleccionar al comensal correspondiente.<br>5. Una vez seleccionado el comensal, el administrador podrá ver el menú de pedidos, si es libre o restringido, y podrá registrar un nuevo pedido.<br>6. El administrador puede acceder a una lista de todos los pedidos que no han sido procesados aún, visualizando la información del cliente y los productos incluidos en cada pedido sin procesar.<br>7. El administrador puede filtrar y buscar los pedidos por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.<br>8. El administrador puede acceder a una lista de todos los pedidos que han sido procesados y completados, visualizando la información del cliente y los productos incluidos en cada pedido procesado.<br>9. El administrador puede filtrar y buscar los pedidos procesados por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.<br>10. El administrador puede generar informes y estadísticas sobre los pedidos procesados, como la cantidad de ingresos generados por pedidos en un determinado período de tiempo. |
| **Flujo Alternativo:** | Si el administrador no tiene una cuenta registrada o no ha iniciado sesión, no podrá acceder a este caso de uso. |
----
| Nombre:  | Registro de usuario |
| --- | --- |
| **Breve Descripción:** | SE REGISTRA UNA NUEVA CUENTA DE USUARIO EN EL SISTEMA |
| **Actores:** | Usuario,Sistema|
| **Precondición:** | N/A |
| **Flujo Normal:** | 1. El usuario ingresa a la aplicación <br> 2. El sistema solicita al usuario la siguiente información: <br> - Email <br> - Contraseña segura <br> - Nombre <br> - Foto de perfil <br> 3. El usuario llena el formulario y presiona el botón de "Registrarse" <br> 4. El sistema valida la información ingresada por el usuario <br> 5. El sistema verifica que el email no esté registrado en el sistema <br> 6. El sistema registra la nueva cuenta <br> 7. El sistema muestra un mensaje de éxito al usuario |
| **Postcondición :**| SE REGISTRA UNA NUEVA CUENTA DE USUARIO EN EL SISTEMA |
| **Flujos Alternativos:** | Existe otra cuenta creada con ese correo <br> El campo contraseña y repetir contraseña no coinciden <br> La contraseña ingresada debe cumplir con los siguientes requerimientos: <br> Debe incluir números. <br> Una combinación de letras mayúsculas y minúsculas. <br> Incluya al menos un carácter especial (* ? ! @ # $ / () {} = . , ; : ) <br> Tenga una longitud mayor o igual a 8 caracteres. <br> No debe tener espacios en blanco. <br> El nombre de usuario contiene caracteres especiales o su longitud es superior a los 25 caracteres <br> La foto de perfil no es válida: está en un formato diferente a los siguientes (PNG, JPEG, GIF) o su tamaño supera los 12MB, también debe tener al menos 400 píxeles de ancho y 150 píxeles de alto. |
---
| Nombre:  | Iniciar sesión |
| --- | --- |
| **Actores:**| Usuario,Sistema |
| **Breve Descripción**: | El usuario es redirigido a la pantalla principal de la aplicación y tiene acceso a las funcionalidades |
| **Precondición:** | Tener una cuenta registrada en el sistema |
| **Flujo Normal:** | 1. El usuario ingresa a la aplicación<br>2. El sistema solicita al usuario la siguiente información:<br>   2.1. Email<br>   2.2. Contraseña<br>3. El usuario completa los campos y presiona en la opción iniciar sesión<br>4. El sistema valida la información ingresada por el usuario<br>5. El sistema redirige al usuario a la pantalla principal de la aplicación |
| **Flujos Alternativos:** | Existe otra cuenta creada con ese correo<br> No existe una cuenta registrada con ese email (El sistema muestra un mensaje de error al usuario)<br> La contraseña no coincide con el email ingresado (El sistema muestra un mensaje de error al usuario) |
---
| Nombre:                  | Restablecer mi contraseña             |
|------------------------|----------------------------------------|
| **Actores:** | Usuario,Sistema                                |
| **Precondición:**           | Tener una cuenta registrada en el sistema |
| **Flujo Normal:**           | 1. El usuario ingresa a la aplicación. <br>2. El sistema solicita al usuario la siguiente información: <br> - Email. <br> - Contraseña. <br> 3. El usuario no recuerda su contraseña, por lo cual escoge la opción restablecer contraseña. <br> 4. El sistema solicita el email asociado a la cuenta. <br> 5. El usuario introduce el email y presiona en ‘recuperar’. <br> 6. El sistema envía un correo electrónico con las instrucciones a seguir. <br> 7. El sistema muestra el siguiente mensaje al usuario: ‘se envió un email con instrucciones para la recuperación de la cuenta’. |
| **Postcondición:**      | La contraseña de la cuenta es modificada |
| **Flujos Alternativos:**    | N/A|
---
| Nombre:  | Ver menú diario |
|-----------------------|-----------------|
| **Breve Descripción:**      | Se muestra información del menú diario |
| **Actores:**        | Usuario,Sistema         |
| **Precondición:**           | Estar logueado en el sistema |
| **Flujo Normal:**           | 1. El usuario en la ventana principal, elije la opción comedores<br>2. El sistema despliega una pantalla con una lista de comedores a los cuales el usuario se suscribió ordenados alfabéticamente.<br>3. El usuario elije el comedor que le interesa<br>4. El sistema despliega una pantalla con la información del comedor<br>5. El usuario selecciona la opcion Ver menú diario<br>6. El sistema muestra la información del menú para ese dia |
| **Flujos Alternativos:**    | N/A             |
---
| Nombre:  | Ver menú |
| --- | --- |
| **Breve Descripción:**| Mostrar información del menú diario |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elige la opción comedores<br>2. El sistema despliega una pantalla con una lista de comedores a los cuales el usuario se suscribió, ordenados alfabéticamente<br>3. El usuario elige el comedor que le interesa<br>4. El sistema despliega una pantalla con la información del comedor<br>5. El usuario selecciona la opción Ver menú<br>6. El sistema muestra la información del menú|
|**Postcondición:** | Se muestra información del menú diario
| **Flujos Alternativos:** | N/A |
---
| Nombre:          | Ver menú semanal                                             |
|------------------|--------------------------------------------------------------|
| **Breve Descripción:**    | Se muestra información del menú semanal.
| **Actores:**           | Usuario, Sistema												|                     |
| **Precondiciones:**     | El usuario debe estar logueado en el sistema.	|
| **Flujos Normales:**  | 1. El usuario elige la opción "comedores" en la ventana principal.<br> 2. El sistema despliega una pantalla con una lista de comedores ordenados alfabéticamente.<br> 3. El usuario elige el comedor que le interesa.<br> 4. El sistema despliega una pantalla con la información del comedor.<br> 5. El usuario selecciona la opción "Ver menú semanal". <br> 6. El sistema muestra la información del menú para esa semana. |
| **Flujos Alternativos:** | N/A                                                        |
---
| Nombre:          | Agregar comentarios al menú diario                             |
|------------------|------------------------------------------------------------------|
| **Breve descripción:**| Se registra un nuevo comentario al comedor. 
| **Actores:** | Usuario, Sistema |                   |
| **Precondiciones:**     | El usuario debe estar logueado en el sistema. |
| **Flujo Normal:**  | 1. El usuario elige la opción "comedores" en la ventana principal.<br> 2. El sistema despliega una pantalla con una lista de comedores a los cuales el usuario se suscribió, ordenados alfabéticamente.<br> 3. El usuario elige el comedor que le interesa.<br> 4. El sistema despliega una pantalla con la información del comedor.<br> 5. El usuario selecciona la opción "ver menú diario".<br> 6. El sistema muestra al usuario la vista del menú diario.<br> 7. El usuario selecciona la opción "Agregar comentario".<br> 8. El sistema muestra al usuario un formulario donde puede ingresar su comentario.<br> 9. El usuario escribe su comentario y al finalizar presiona la opción "Guardar".<br> 10. El sistema agrega el comentario al comedor y muestra la información del comedor actualizada al usuario. |
| **Flujos Alternativos:** | Si el usuario desiste de agregar su comentario, puede presionar la opción "Cancelar" y el sistema cerrará el área de texto y volverá a mostrar la información del comedor al usuario. | 
|
---
| Nombre:          | Ver información del comedor                                     |
|------------------|------------------------------------------------------------------|
| **Breve Descripción:**    | El sistema muestra al usuario la información sobre el comedor. |
| **Actores:** | Usuario, Sistema |                 |
| **Precondiciones:**     | El usuario debe estar logueado en el sistema. |
| **Flujos Normales:**  | 1. El usuario elige la opción "comedores" en la ventana principal.<br> 2. El sistema despliega una pantalla con una lista de comedores a los cuales el usuario se suscribió, ordenados alfabéticamente.<br> 3. El usuario elige el comedor que le interesa.<br>4. El sistema despliega una pantalla con la información del comedor.|
| **Flujos Alternativos:** | N/A |                                                        |
---
| Nombre:          | Suscribirse al menú semanal                                     |
|------------------|------------------------------------------------------------------|
| **Precondición:**     | El usuario debe estar logueado en el sistema.<br> Debe tener al menos un comensal vinculado a la cuenta.                  |
| **Actores:** | Usuario, Sistema                                                        |            |
| **Flujos Normales:**  | 1. El usuario elige la opción "comensales" en la ventana principal.<br> 2. El sistema despliega una pantalla con una lista de comensales a los cuales el usuario vinculó su cuenta, ordenados alfabéticamente.<br> 3. El usuario elige el comensal que le interesa.<br> 4. El sistema despliega una pantalla con la información del comensal.<br> 5. El usuario escoge la opción "Agregar suscripción a menú semanal".<br> 6. El sistema despliega una lista de menús semanales ordenados por fecha.<br> 7. El usuario escoge el que quiere y presiona "suscribir".<br> 8. El sistema muestra un mensaje de éxito al usuario.         |
| **Postcondición:**    | El sistema suscribe el comensal al menú semanal.  
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción "cancelar". (El sistema regresa al usuario a la pantalla principal). |
---
| Nombre: | Cancelar suscripción al menú semanal |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema <br> Tener al menos un comensal vinculado a la cuenta |
| **Flujo Normal:** | 1. El usuario elige la opción "Comensales" en la ventana principal.<br> 2. El sistema despliega una pantalla con una lista de comensales a los cuales el usuario vinculó su cuenta, ordenados alfabéticamente.<br> 3. El usuario elige el comensal que le interesa.<br> 4. El sistema despliega una pantalla con la información del comensal.<br> 5. El usuario escoge la opción "Eliminar suscripción menú semanal".<br> 6. El sistema despliega un mensaje de confirmación.<br> 7. El usuario confirma la acción.<br> 8. El sistema muestra un mensaje de éxito al usuario.
| **Postcondición:** | El sistema cancela la suscripción al menú semanal de un comensal. |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción "Cancelar". <br> El sistema regresa al usuario a la pantalla de información del comensal. |
---
| Nombre  | Agregar plato al carrito |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema <br> Tener al menos un comensal vinculado a la cuenta |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elije la opción comensales. <br>2. El sistema despliega una pantalla con una lista de comensales a los cuales el usuario vinculo su cuenta, ordenados alfabéticamente. <br>3. El usuario elije el comensal que le interesa. <br>4. El sistema despliega una pantalla con la información del comensal. <br>5. El usuario escoge la opción Realizar un pedido. <br>6. El sistema despliega una vista del menu del comedor al cual pertenece ese comensal. <br>7. El usuario escoge el plato que quiere, y presiona agregar al carrito. <br>8. El sistema despliega mensaje de confirmación. <br>9. El usuario usuario presiona confirmar. <br>10. El sistema muestra un mensaje de suceso al usuario y hace visible un botón con la opción finalizar pedido. <br>11. El usuario termina de agregar los platos que desea y escoge la opción finalizar pedido. **CONTINUA EN CASO FINALIZAR COMPRA** |
| **Postcondicion:** | El sistema agrega un plato al carrito de la compra. |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción cancelar (El sistema regresa al usuario a la pantalla de información del menú). |
---
| Nombre: | Finalizar compra |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema. <br> Tener al menos un comensal vinculado a la cuenta. <br> Tener al menos un item en el carrito. |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elije la opción compras. <br>2. El sistema dirige al usuario a la pantalla de carrito de compras. <br>3. El usuario escoge la opción pagar. <br>4. El sistema despliega mensaje de confirmación. <br>5. El usuario usuario presiona confirmar. <br>6. El sistema envía la solicitud de débito a la pasarela de pagos. <br>7. Una vez el sistema recibe confirmación de la pasarela de pagos, registra el pedido en el comedor. <br>8. El sistema muestra un mensaje de suceso al usuario. |
| **Postcondición:** | El sistema debita el total del pedido al método de pago del usuario. El sistema registra un nuevo pedido en el comedor. |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción cancelar (El sistema regresa al usuario a la pantalla del carrito de compras). <br> El usuario no tiene saldo suficiente (El sistema muestra un mensaje de error al usuario). |
---
| Nombre:                    | Eliminar plato del carrito                                      |
|---------------------------|----------------------------------------------------------------|
| **Actores:**                   | Usuario, Sistema                                            |
| **Precondición:**              | Estar logueado en el sistema, tener al menos un comensal vinculado a la cuenta, tener al menos un plato en el carrito de compras |
| **Flujo Normal:**              | 1. El usuario en la ventana principal, elije la opción compras<br> 2. El sistema dirige al usuario a la pantalla de carrito de compras<br> 3. El usuario escoge la opción eliminar en la lista de platos<br> 4. El sistema despliega mensaje de confirmación<br> 5. El usuario usuario presiona confirmar<br> 6. El sistema quita ese plato de la lista de platos del carrito<br> 7. El sistema resta el valor del item quitado a la suma total a pagar del carrito |
| **Postcondición:**            | El sistema elimina un plato de la lista de platos del carrito, El sistema resta el valor de los platos eliminado al total a pagar del carrito |
| **Flujos Alternativos:**       | El usuario desiste de la operación y presiona la opción cancelar(El sistema regresa al usuario a la pantalla del carrito de compras) |
---
| Nombre: | Vincular comensal |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elije la opción comensales <br> 2. El sistema dirige al usuario a la pantalla de comensales donde se puede ver una lista de comensales asociados y la opción Agregar nuevo comensal <br>3. El usuario escoge la opción Agregar nuevo comensal <br>4. El sistema despliega una lista de comedores <br>5. El usuario elige el comedor al cual pertenece el comensal <br>6. El sistema despliega la lista de grupos de comensales de ese comedor <br>7. El usuario elije el grupo al cual pertenece el comensal <br>8. El sistema despliega una lista de comensales que pertenecen a ese grupo <br> 9. EL usuario elige el comensal que le interesa y presiona agregar <br>10. El sistema pide un limite diario de consumo para el comensal <br>11. El usuario introduce el limite diario para ese comensal <br>12. El sistema vincula el comensal al usuario <br>13. El sistema despliega mensaje de suceso |
| **Postcondición:** | El sistema vincula un nuevo comensal al usuario |
 | **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción cancelar (El sistema regresa al usuario a la pantalla principal) |
---
| Nombre:             | Desvincular un comensal                               |
|--------------------|------------------------------------------------------|
| **Actores:**             | Usuario, Sistema                                              |
| **Precondición:**        | Estar logueado en el sistema<br>Tener al menos un comensal vinculado                           |
| **Flujo Normal:**        | 1. El usuario elige la opción "Comensales" en la ventana principal. <br> 2. El sistema dirige al usuario a la pantalla de comensales donde se puede ver una lista de comensales asociados con la opción "Eliminar". <br> 3. El usuario escoge la opción "Eliminar". <br> 4. El sistema despliega un mensaje de confirmación. <br> 5. El usuario escoge "Confirmar". <br> 6. El sistema desvincula el usuario de ese comensal. <br> 7. El sistema muestra un mensaje de suceso al usuario. |
| **Postcondición:**      | El sistema desvincula el comensal al usuario           |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción "Cancelar". <br> (El sistema regresa al usuario a la pantalla de comensales.) |

---
| Nombre: | Editar limite de consumo de un comensal |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema<br> Tener al menos un comensal vinculado |
| **Flujo Normal:** | 1. El usuario elige la opción Comensales en la ventana principal.<br>2. El sistema dirige al usuario a la pantalla de comensales donde se puede ver una lista de comensales asociados con la opción Ver.<br>3. El usuario escoge la opción Ver del comensal que desea editar.<br>4. El sistema despliega una pantalla con la información del comensal, incluyendo el limite de consumo actual.<br>5. El usuario escoge la opción Editar limite de consumo.<br>6. El sistema solicita al usuario que introduzca el nuevo limite de consumo.<br>7. El usuario introduce el nuevo limite de consumo y presiona Guardar.<br>8. El sistema actualiza el limite de consumo para ese comensal.<br>9. El sistema muestra un mensaje de suceso al usuario. |
| **Postcondición:** | El sistema actualiza el limite de consumo del comensal |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción Cancelar. El sistema regresa al usuario a la pantalla de información del comensal. | |
---
| Nombre: | Suscribirse a un comedor |
| --- | --- |
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elije la opción comedores <br> 2. El sistema dirige al usuario a la pantalla de comedores donde se puede ver una lista de comedores a los cuales esta suscripto el usuario y la opción Agregar nueva suscripción <br> 3. El usuario escoge la opción Agregar nueva suscripción <br> 4. El sistema despliega una lista de comedores ordenados alfabéticamente <br> 5. El usuario escoge el comedor que quiere suscribirse y presiona suscribir <br> 6. El sistema despliega una mensaje de confirmación <br> 7. El usuario escoge confirmar <br> 8. El sistema suscribe el comensal a ese comedor <br> 9. El sistema muestra un mensaje de suceso al usuario |
| **Postcondición:** | El sistema suscribe el usuario al comedor |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción cancelar(El sistema regresa al usuario a la pantalla de comedores) |
---
| Nombre: | Cancelar suscripción a un comedor |
|--------|----------------------------------|
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema <br> Estar suscripto al menos a un comedor |
| **Flujo Normal:** | 1. El usuario en la ventana principal, elije la opción comedores <br> 2. El sistema dirige al usuario a la pantalla de comedores donde se puede ver una lista de comedores a los cuales esta suscripto el usuario con las opciones de Eliminar <br> 3. El usuario presiona eliminar sobre el comedor que le interesa eliminar la suscripción <br> 4. El sistema despliega una mensaje de confirmación <br> 5. El usuario escoge confirmar <br> 6. El sistema elimina la suscripción de ese usuario al comedor <br> 7. El sistema muestra un mensaje de suceso al usuario |
| **Postcondición:** | El sistema elimina la suscripción del usuario a ese comedor |
| **Flujos Alternativos:** | El usuario desiste de la operación y presiona la opción cancelar (El sistema regresa al usuario a la pantalla de comedores) |
---
| Nombre: | Ver comensales de un comedor |
|--------|--------------------------------|
| **Actores:** | Usuario, Sistema |
| **Precondición:** | Estar logueado en el sistema |
| **Flujo Normal:** | 1. El usuario elige la opción "comedores" en la ventana principal. <br> 2. El sistema despliega una pantalla con una lista de comedores a los cuales el usuario se suscribió, ordenados alfabéticamente. <br> 3. El usuario elige el comedor que le interesa. <br> 4. El sistema despliega una pantalla con la información del comedor, donde se incluye una lista de comensales. <br> 5. El usuario escoge en la lista el comensal que le interesa y presiona "ver". <br> 6. El sistema muestra la información de ese comensal. |
| **Postcondición:** | El sistema muestra al usuario una lista de comensales asociados a él que acuden a ese comedor |
| **Flujos Alternativos:** | Si el usuario no ha asociado ningún comensal de ese comedor a su cuenta, la lista de comensales estará vacía. |

---
| Nombre: | Actualizar información de perfil |
|--------|----------------------------------|
| **Actores:** | Usuario, Sistema|
| **Precondición:** | Estar logueado en el sistema |
| **Flujo Normal:** | 1. En la ventana principal, el usuario elige la opción "perfil". <br> 2. El sistema despliega una vista con la información de perfil del usuario. <br> 3. El usuario elige la opción "editar". <br> 4. El sistema despliega un formulario con la información de perfil, el cual permite editar los siguientes campos: (Nombre de usuario, Foto de perfil, Contraseña). <br> 5. Una vez que el usuario modifica dicho formulario, escoge entre las opciones "cancelar" y "guardar". <br> 6. El sistema valida la nueva información. <br> 7. El sistema actualiza dicha información. |
| **Postcondición:** | El sistema actualiza la información de perfil del usuario |
| **Flujos Alternativos:** | Si el sistema encuentra la nueva información ingresada como no válida, muestra un mensaje de error al usuario, indicando los errores encontrados. <br> Si el usuario desiste de realizar la operación y presiona "cancelar", el sistema vuelve a la pantalla de información de perfil. |

---
| Nombre: | Editar la información del comedor |
|--------|----------------------------------|
| **Precondición:** | Estar logueado en el sistema. Ser un administrador. |
| **Actores:** | ADMINISTRADOR, SISTEMA |
| **Postcondición:** | El sistema actualizará la información del comedor. |
| **Flujo Normal:** | 1. En la ventana principal, el administrador elige la opción "administración". <br> 2. El sistema despliega una pantalla con varias opciones. <br> 3. El administrador escoge "Editar información del comedor". <br> 4. El sistema despliega un formulario con la información del comedor la cual puede ser editada. <br> 5. El administrador edita la información y luego escoge la opción "Guardar". <br> 6. El sistema valida la información ingresada por el administrador. <br> 7. El sistema muestra un mensaje de éxito. |
| **Flujos Alternativos:** | Si el administrador desiste de actualizar el comedor y presiona "cancelar", el sistema desplegará la pantalla de administración. <br> Si la información ingresada por el administrador está incorrecta o es incompleta, el sistema muestra al usuario un mensaje de error. |

---
| Nombre: | Registrar menú diario |
| --- | --- |
| **Precondición:** | Estar logueado en el sistema. Ser un administrador. |
| **Actores:** | Administrador, Sistema |
| **Postcondición:** | El sistema registrará un nuevo menú diario en el comedor. |
| **Flujo Normal:** | 1. En la ventana principal, el administrador elige la opción Administración. <br> 2. El sistema despliega una pantalla con varias opciones. <br> 3. El administrador escoge Administrar menús. <br> 4. El sistema despliega una pantalla con diferentes opciones. <br> 5. El administrador elige Administrar menú diario. <br> 6. El sistema despliega una lista de menús creados en ese comedor y una opción de agregar menú diario. <br> 7. El administrador elige la opción Agregar menú diario. <br> 8. El sistema despliega un formulario solicitando la siguiente información: <br> - Fecha en la cual se estará sirviendo el menú. <br> - Información nutricional (área de texto se podrá dar información sobre el aporte nutricional del menú, como también indicar que alternativas se les dará a aquellos alumnos que posean intolerancia sobre algunos alimentos del menú). <br> - Desayuno (área de texto que describe que será servido en el desayuno). <br> - Almuerzo (área de texto que describe que será servido en el almuerzo). <br> - Merienda (área de texto que describe que será servido en el merienda). <br> 9. El administrador ingresa toda la información y presiona Registrar. <br> 10. El sistema valida la información ingresada y registra un nuevo menú diario en el comedor. <br> 11. El sistema muestra al administrador un mensaje de éxito. |
| **Flujos Alternativos:** | El administrador desiste de registrar un nuevo menú diario y presiona Cancelar (El sistema desplegará la pantalla de Administrar menú diario). <br> La información ingresada por el administrador está incorrecta o es incompleta (El sistema muestra al usuario un mensaje de error). |

---


| Nombre: | Editar información de un menú diario |
| --- | --- |
| **Precondición:** | Estar logueado en el sistema. <br>Ser un administrador. <br> Tener al menos un menú diario registrado. |
| **Actores:** | Administrador, Sistema |
| **Postcondición:** |  El sistema actualizara la información del menú diario |
| **Flujo normal:** | 1. En la ventana principal, el administrador elije la opción administración. <br>2. El sistema despliega una pantalla con varias opciones. <br>3. El administrador escoge Administrar menús. <br>4. El sistema despliega una pantalla con diferentes opciones. <br>5. El administrador escoge Administrar menu diario. <br>6. El sistema despliega una lista de menús creados en ese comedor. <br>7. El administrador escoge en la lista el menú diario que quiere editar y presiona en editar. <br>8. El sistema despliega un formulario con la información del menú el cual puede ser editado. <br>9. El administrador edita la información y presiona en Guardar. <br>10. El sistema valida la información ingresada. <br>11. El sistema muestra al administrador un mensaje de éxito. |
| **Flujos Alternativos:** | El administrador desiste de editar la información del menú diario y presiona cancelar (El sistema desplegara la pantalla de Administrar menú diario). <br> La información ingresada por el administrador esta incorrecta o es incompleta (El sistema muestra al usuario un mensaje de error). |
---
| Nombre: | Eliminar un menú diario |
| --- | --- |
| **Precondición:** | Estar logueado en el sistema. <br> Ser un administrador. <br> Tener al menos un menú diario registrado en dicho comedor. |
| **Actores:** | Administrador, Sistema |
| **Postcondición:** | El sistema eliminara el menú diario del comedor. |
| **Flujo Normal:** | 1. En la ventana principal, el administrador elije la opción administración. <br> 2. El sistema despliega una pantalla con varias opciones. <br> 3. El administrador escoge Administrar menús. <br> 4. El sistema despliega una pantalla con diferentes opciones. <br> 5. El administrador escoge Administrar menú diario. <br> 6. El sistema despliega una lista de menús creados en ese comedor. <br> 7. El administrador escoge en la lista el menú diario que quiere eliminar y presiona en eliminar. <br> 8. El sistema despliega un mensaje de confirmación. <br> 9. El administrador presiona en Confirmar. <br> 10. El sistema elimina la información del comedor. <br> 11. El sistema muestra al administrador un mensaje de éxito. |
| **Flujos Alternativos:** | El administrador desiste de eliminar el menú diario y presiona cancelar. El sistema desplegara la pantalla de Administrar menú diario. |
---

| Nombre | Agregar un plato al menú |
| --- | --- |
| **Precondición** | Estar logueado en el sistema.<br>Ser un administrador. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Postcondición** | El sistema agregará un plato al menú del comedor y este será visible por los usuarios suscriptos a ese comedor. |
| **Flujo normal** | 1. En la ventana principal, el administrador elige la opción administración.<br>2. El sistema despliega una pantalla con varias opciones.<br>3. El administrador escoge Administrar menús.<br>4. El sistema despliega una pantalla con diferentes opciones.<br>5. El administrador elige Administrar menú.<br>6. El sistema despliega una lista de menús creados en ese comedor y la opción Agregar plato al menú.<br>7. El administrador elige la opción Agregar plato al menú.<br>8. El sistema despliega un formulario con los siguientes campos: Nombre del plato, Precio del plato, Ingredientes principales, Tamaño de la porción.<br>9. El administrador completa dichos campos y elige la opción Guardar.<br>10. El sistema valida la información ingresada por el administrador.<br>11. El sistema despliega un mensaje de éxito. |
| **Flujos alternativos** | El administrador desiste de la operación y presiona cancelar (El sistema desplegará la pantalla de Administrar menú).<br> La información ingresada por el administrador es incorrecta o está incompleta (El sistema muestra un mensaje de error). |
---
| Nombre | Editar un plato del menú |
| --- | --- |
| **Precondición** | Estar logueado en el sistema.<br>Ser un administrador. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Postcondición** | El sistema editará la información de un plato perteneciente al menú. |
| **Flujo normal** | 1. En la ventana principal, el administrador elige la opción administración.<br>2. El sistema despliega una pantalla con varias opciones.<br>3. El administrador escoge Administrar menús.<br>4. El sistema despliega una pantalla con diferentes opciones.<br>5. El administrador elige Administrar menú.<br>6. El sistema despliega una lista de menús creados en ese comedor.<br>7. El administrador elige el plato que desea editar y presiona Editar.<br>8. El sistema despliega un formulario con la información del plato, la cual se puede editar.<br>9. El administrador edita dichos campos y elige la opción Guardar.<br>10. El sistema valida la información ingresada por el administrador.<br>11. El sistema despliega un mensaje de éxito. |
| **Flujos alternativos** | - El administrador desiste de la operación y presiona cancelar (El sistema desplegará la pantalla de Administrar menú).<br>- La información ingresada por el administrador es incorrecta o está incompleta (El sistema muestra un mensaje de error). |
---

| Nombre | Eliminar un plato del menú |
| --- | --- |
| **Precondición** | Estar logueado en el sistema.<br>Ser un administrador.<br>Tener al menos un plato dentro del menú. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Postcondición** | El sistema eliminará un plato del menú del comedor y este dejará de ser visible por los usuarios suscriptos a ese comedor. |
| **Flujo normal** | 1. En la ventana principal, el administrador elige la opción administración.<br>2. El sistema despliega una pantalla con varias opciones.<br>3. El administrador escoge Administrar menús.<br>4. El sistema despliega una pantalla con diferentes opciones.<br>5. El administrador elige Administrar menú.<br>6. El sistema despliega una lista de menús creados en ese comedor y la opción Eliminar plato del menú.<br>7. El administrador elige la opción Eliminar plato del menú.<br>8. El sistema despliega una ventana de confirmación.<br>9. El administrador elige la opción Eliminar.<br>10. El sistema elimina la información del plato del menú.<br>11. El sistema despliega un mensaje de éxito. |
| **Flujos alternativos** | - El administrador desiste de la operación y presiona cancelar (El sistema desplegará la pantalla de Administrar menú). |
---
| Nombre del caso de uso | Administrar Pedidos |
|-----------------------|---------------------|
| Actor principal       | Administrador       |
| Breve descripción     | Permite al administrador gestionar los pedidos de los clientes, registrando nuevos pedidos, visualizando pedidos sin procesar y procesados, y generando informes y estadísticas sobre los pedidos. |
| Precondiciones        | El administrador debe tener una cuenta registrada y haber iniciado sesión en la aplicación. La cuenta del administrador debe tener permisos para administrar pedidos. |
| Flujo principal       | 1. El administrador inicia sesión en la aplicación.<br>2. En la pantalla principal, el administrador elige la opción "Administración" y luego "Administrar Pedidos".<br>3. El administrador accede a la pantalla de búsqueda de comensales y puede buscarlos por QR de tarjeta, identificador de cliente, apellido o grupo del usuario.<br>4. Si el administrador busca por apellido o grupo del usuario, se desplegará una lista de estudiantes que coincidan con el resultado del criterio de búsqueda, y podrá seleccionar al comensal correspondiente.<br>5. Una vez seleccionado el comensal, el administrador podrá ver el menú de pedidos, si es libre o restringido, y podrá registrar un nuevo pedido.<br>6. El administrador puede acceder a una lista de todos los pedidos que no han sido procesados aún, visualizando la información del cliente y los productos incluidos en cada pedido sin procesar.<br>7. El administrador puede filtrar y buscar los pedidos por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.<br>8. El administrador puede acceder a una lista de todos los pedidos que han sido procesados y completados, visualizando la información del cliente y los productos incluidos en cada pedido procesado.<br>9. El administrador puede filtrar y buscar los pedidos procesados por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.<br>10. El administrador puede generar informes y estadísticas sobre los pedidos procesados, como la cantidad de ingresos generados por pedidos en un determinado período de tiempo. |
| Flujo alternativo     | Si el administrador no tiene una cuenta registrada o no ha iniciado sesión, no podrá acceder a este caso de uso. |
---
| Nombre | Listar y Eliminar Métodos de Pago |
| --- | --- |
| **Actor principal** | Usuario |
| **Breve descripción** | Permitir al usuario listar y eliminar los métodos de pagos registrados en la aplicación de la cantina escolar. |
| **Precondiciones** | El usuario debe haber iniciado sesión en la aplicación como padre de un alumno registrado en el colegio. <br> La cuenta del usuario debe estar asociada a una cantina escolar en la aplicación. <br> El usuario debe haber verificado su información de contacto. |
| **Flujo principal** | 1. El usuario accede a la opción "Métodos de Pago" en la pantalla principal de la aplicación. <br> 2. El sistema muestra una lista de los métodos de pago actualmente asociados a la cuenta del usuario. <br> 3. La aplicación muestra una lista de los métodos de pago registrados por el usuario, mostrando información oculta de los datos de las tarjetas de crédito, tales como los últimos 4 dígitos de la tarjeta, la marca y si es de crédito o débito. <br> 4. El usuario elige la opción "Eliminar" junto al método de pago que desea eliminar. <br> 5. La aplicación muestra un mensaje de confirmación pidiéndole al usuario que confirme si desea eliminar el método de pago seleccionado. <br> 6. El usuario confirma la eliminación del método de pago. <br> 7. La aplicación elimina el método de pago seleccionado de la lista. |
| **Flujo alternativo** | En cualquier momento, el usuario puede cancelar el proceso de eliminación del método de pago y volver a la lista de métodos de pago. |
| **Excepciones** | Si el usuario no tiene ningún método de pago registrado, la aplicación muestra un mensaje indicando que no hay métodos de pago registrados y ofrece la opción de agregar uno nuevo. <br> Si ocurre algún error durante el proceso de eliminación, la aplicación muestra un mensaje de error al usuario y no elimina el método de pago seleccionado. |
---
| Nombre | Editar Grupos |
| --- | --- |
| **Precondición** | Estar logueado en el sistema como administrador. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Postcondición** | El sistema actualiza la información del grupo seleccionado con los cambios realizados por el administrador. |
| **Flujo normal** | 1. En la ventana principal, el administrador elige la opción Administración.<br>2. El sistema despliega una pantalla con varias opciones.<br>3. El administrador escoge Administración de Grupos.<br>4. El sistema despliega una pantalla con la Lista de grupos.<br>5. El administrador selecciona el grupo que desea editar.<br>6. El sistema muestra una pantalla para editar los datos del grupo.<br>7. El administrador realiza los cambios y selecciona la opción Guardar para confirmar los cambios.<br>8. El sistema valida la información ingresada por el administrador.<br>9. El sistema actualiza la información del grupo seleccionado con los cambios realizados.<br>10. El sistema despliega un mensaje de éxito. |
| **Flujos alternativos** | - El administrador desiste de la operación y presiona cancelar (El sistema desplegará la pantalla de Lista de grupos).<br>- La información ingresada por el administrador es incorrecta o está incompleta (El sistema muestra un mensaje de error). |
---
| Nombre | Eliminar Grupos |
| --- | --- |
| **Precondición** | El usuario debe estar logueado en el sistema.<br> El usuario debe ser un administrador.<br> Debe existir al menos un grupo registrado en el sistema. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Postcondición** | El sistema elimina el grupo seleccionado por el administrador. |
| **Flujo Normal** | 1. El administrador selecciona la opción "Administración" en la ventana principal.<br>2. El sistema despliega una lista de opciones, el administrador selecciona "Administración de Grupos".<br>3. El sistema muestra la lista de grupos registrados.<br>4. El administrador selecciona el grupo que desea eliminar.<br>5. El sistema muestra una pantalla con la opción para eliminar el grupo.<br>6. El administrador selecciona la opción "Eliminar" para confirmar la acción.<br>7. El sistema elimina el grupo seleccionado.<br>8. El sistema muestra un mensaje de éxito. |
| **Flujos Alternativos** | En caso de querer cancelar la operación, el administrador selecciona la opción "Cancelar".<br> Si el grupo seleccionado no existe, el sistema muestra un mensaje de error. |
---
| Nombre | Registrar Grupo |
| --- | --- |
| **Precondición** | Estar logueado en el sistema como *Administrador* |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Post condición** | El usuario Administrador registra un nuevo grupo |
| **Flujo normal** | 1. El usuario elije la opción Administración y luego Administración de Grupos. <br> 2. El usuario selecciona la opción Registrar Grupo. <br> 3. Se muestra una pantalla con los datos del grupo a completar. <br> 4. El usuario ingresa un identificador numérico para el grupo y un nombre. <br> 5. Para completar el registro selecciona la opción Registrar. <br> 6. Caso contrario, el usuario cancela el registro con la opción Cancelar. |
| **Flujos alternativos** | 1. El usuario ingresa datos inválidos. El sistema informa al usuario que los datos ingresados no son correctos. |
---
| Nombre | Registrar Comensal |
| --- | --- |
| **Precondición** | El usuario debe estar logueado en el sistema como administrador. |
| **Actores** | ADMINISTRADOR, SISTEMA |
| **Post condición** | El usuario administrador registra un nuevo comensal. |
| **Flujo Normal** | 1. El usuario en la ventana principal, elije la opción Administración y luego Administración de Grupos. <br> 2. El usuario selecciona la opción Lista de grupos y por último Registrar nuevo comensal. <br> 3. Se muestra una pantalla con la lista de grupos y el usuario selecciona el grupo en el que quiere registrar al comensal. <br> 4. El usuario administrador confirma la operación seleccionando la opción Confirmar. <br> 5. El sistema registra al comensal en el grupo seleccionado. |
| **Flujos Alternativos** | 1. El usuario no selecciona un grupo. <br> El sistema informa al usuario que debe seleccionar un grupo. |
| **Flujos de Excepción** | N/A |
---
| Nombre del caso de uso | Agregar Método de Pago |
| --- | --- |
| Actor principal | Usuario, Sistema |
| Breve descripción | Permite al usuario gestionar sus métodos de pago dentro de la aplicación, pudiendo agregar un nuevo método de pago al sistema. |
| Precondiciones | El usuario debe haber iniciado sesión en la aplicación como padre de un alumno registrado en el colegio.<br>La cuenta del usuario debe estar asociada a una cantina escolar en la aplicación.<br> El usuario debe haber verificado su información de contacto. |
| Flujo principal | 1. El usuario accede a la opción “Métodos de Pago” en la pantalla principal de la aplicación.<br>2. El sistema muestra una lista de los métodos de pago actualmente asociados a la cuenta del usuario.<br>3. El usuario selecciona la opción “Agregar nuevo método de pago”.<br>4. El sistema presenta un formulario para ingresar la información del nuevo método de pago, incluyendo nombre del titular, número de tarjeta, fecha de vencimiento, código de seguridad y dirección de facturación.<br>5. El usuario completa el formulario y envía la información.<br>6. El sistema valida la información ingresada y muestra una confirmación clara de que el nuevo método de pago ha sido agregado exitosamente.| 
| Flujo alternativo | En el paso 5, si la información ingresada es incorrecta o incompleta, el sistema muestra un mensaje de error y solicita al usuario que corrija los datos.<br>En el paso 5, si la información ingresada es sospechosa o se detecta un posible fraude, el sistema notifica al usuario y no permite agregar el nuevo método de pago.<br>En el paso 6, si no se puede agregar el nuevo método de pago por problemas técnicos, el sistema muestra un mensaje de error y solicita al usuario que lo intente más tarde. |
| Postcondiciones | El nuevo método de pago es agregado a la cuenta del usuario y se encuentra disponible para su uso en la aplicación de la cantina escolar. |


### Bocetos de IU

## Validación y verificación

## Reflexión
