# e-commerce-js

A partir de unos requisitos específicos se construye un e-commerce con JS, CSS y HTML que consume un JSON Server.

## Ejecución

El cliente del eCommerce se ejecuta por medio de la extensión live server de VSC desde su respectivo directorio, y para activar el servidor se ejecuta el comando "npm run server" en su respectiva carpeta.

## Funcionamiento

El JSON server contiene una data básica de varios productos y algunas compras hechas que se pueden visualizar directamente en la ruta que nos da el JSON Server o más tarde en la interfaz.

Al ingresar a la ruta que nos da el Live Server se abre el cliente en la página inicial; en esta podremos visualizar distintos elementos, ver algunas tarjetas de productos, filtrar y redirigirnos a la pestaña de productos y desplazarnos a las diferentes rutas de la aplicación.

Podemos dirigirnos a la página de productos; allí por defecto se visualizarán todos los productos existentes en la fake API o si hay algún filtro sólo aparecen los productos que le corresponden.

Cada card de producto contiene las opciones para agregarla a favoritos y para disminuir o aumentar su cantidad, esta información será guardada y puede visualizarse desde el carrito de la barra de navegación.

El carrito de la barra de navegación con un click renderiza los elementos que se han agregado, permite removerlos y muestra las cantidades y totales según los precios. Allí mismo podemos por medio de botones redirigirnos a la ruta del carrito.

En la ruta del carrito encontramos los productos que se habían guardado, con la opción de modificar sus cantidades o removerlos del carrito. También en la parte inferior encontramos una especie de factura que muestra el total de la compra, y dos botones; uno para regresar a la tienda y otro para continuar la compra. Si se continua se abrirá un formulario que de llenarse correctamente guardará la compra en el JSON y vaciará el carrito.

Por medio del ícono del corazón en la barra de navegación podemos acceder a la ruta de favoritos, donde las cartas de los productos agregados se renderizan. Las cartas mantienen sus funcionalidades.

Por último, podemos acceder por medio del ícono de usuario de la barra de navegación a la ruta de administrador. Allí se nos muestran todos los productos existentes, y se nos brinda la posibilidad de modificarlos, eliminarlos y crear productos nuevos por medio de peticiones. También nos es posible visualizar por medio de un botón, las compras hechas hasta el momento.

La lista de ciudades fue tomada de https://github.com/marcovega/colombia-json/blob/master/colombia.json
