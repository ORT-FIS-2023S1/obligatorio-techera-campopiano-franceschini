## Nombre del caso de uso: Administrar Pedidos

### Actor principal: Administrador

Breve descripción: Este caso de uso permite al administrador gestionar los pedidos de los clientes, registrando nuevos pedidos, visualizando pedidos sin procesar y procesados, y generando informes y estadísticas sobre los pedidos.

**Precondiciones:**

-   El administrador debe tener una cuenta registrada y haber iniciado sesión en la aplicación.
-   La cuenta del administrador debe tener permisos para administrar pedidos.

**Flujo principal:**

1.  El administrador inicia sesión en la aplicación.
2.  En la pantalla principal, el administrador elige la opción "Administración" y luego "Administrar Pedidos".
3.  El administrador accede a la pantalla de búsqueda de comensales y puede buscarlos por QR de tarjeta, identificador de cliente, apellido o grupo del usuario.
4.  Si el administrador busca por apellido o grupo del usuario, se desplegará una lista de estudiantes que coincidan con el resultado del criterio de búsqueda, y podrá seleccionar al comensal correspondiente.
5.  Una vez seleccionado el comensal, el administrador podrá ver el menú de pedidos, si es libre o restringido, y podrá registrar un nuevo pedido.
6.  El administrador puede acceder a una lista de todos los pedidos que no han sido procesados aún, visualizando la información del cliente y los productos incluidos en cada pedido sin procesar.
7.  El administrador puede filtrar y buscar los pedidos por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.
8.  El administrador puede acceder a una lista de todos los pedidos que han sido procesados y completados, visualizando la información del cliente y los productos incluidos en cada pedido procesado.
9.  El administrador puede filtrar y buscar los pedidos procesados por diferentes criterios, como el estado del pedido, el nombre del cliente o la fecha de registro.
10.  El administrador puede generar informes y estadísticas sobre los pedidos procesados, como la cantidad de ingresos generados por pedidos en un determinado período de tiempo.

Flujo alternativo:

-   Si el administrador no tiene una cuenta registrada o no ha iniciado sesión, no podrá acceder a este caso de uso.
