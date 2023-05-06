| **Nombre del caso de uso** | Eliminar Grupo de Comensales |
| --- | --- |
| **Actor principal** | Administrador, perfil cantina |
| **Breve descripción** | El caso de uso describe cómo el usuario administrador puede eliminar un grupo de comensales existente en la aplicación. |
| **Precondiciones** | El usuario administrador ha iniciado sesión en la aplicación. |
| **Flujo Normal** | 1. El usuario administrador accede a la lista de grupos de comensales. <br> 2. El usuario administrador selecciona el grupo de comensales que desea eliminar. <br> 3. El sistema muestra una ventana de confirmación para verificar la eliminación del grupo de comensales. <br> 4. El usuario administrador confirma la eliminación del grupo de comensales. <br> 5. El sistema elimina el grupo de comensales seleccionado y todas las referencias a ese grupo en la aplicación. |
| **Flujos Alternativos** | 1. Si el usuario administrador decide no eliminar el grupo de comensales, se cancela la acción y se regresa a la lista de grupos de comensales. <br> 2. Si el grupo de comensales seleccionado tiene reservas asociadas, el sistema muestra un mensaje de error y no permite su eliminación. |
| **Postcondiciones** | El grupo de comensales seleccionado ha sido eliminado de la lista de grupos de comensales. |
| **Excepciones** | Si el usuario administrador no tiene los permisos suficientes para eliminar un grupo de comensales, el sistema muestra un mensaje de error y no permite la acción. |

