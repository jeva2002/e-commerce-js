# e-commerce-js
A partir de unos requisitos específicos se construye un e-commerce con JS, CSS y HTML. El eccomerce permite la visualización de algunos productos que se
consumen de una fake rest API por medio del módulo JSON Server rincipal, también desde esta permite acceder a las distintas secciones de la plataforma,
y permite redirigirse a la página de productos y filtrarlos en el sessionStorage. En la página de productos muestra la totalidad de los productos por defecto
o si hay alguna búsqueda realiza los filtros correspondientes. Cada tarjeta por producto cuenta con la opción para añadirlo a favoritos y guardarlo 
en el localStorage, también permite que se agregue cada producto a un carrito y tiene la opción de variar sus cantidades. Al carrito se puede acceder
por medio de su ícono en el navegador que por medio e un click muestra un modal con los productos que se han agregado, su total, la opción para removerlos y 
para ir a la página que permite la transacción. e cuenta con una página de favoritos donde se almacenan estos con sus respectivas tarjetas. 
En la pestaña de transacción se muestran los elementos agregados al carrito, los precios y los acumulados totales de la operación. En esta pestaña se admite 
que se remuevan elementos o que se modifique la cantidad, también ermite que se complete la operación por medio de un botón que abrirá un formulario y que de 
llenarse correctamente guardará los datos en el JSON server. También se cuenta con una pestaña para administrador a la que se accede por el ícono de usuario;
allí se pueden modificar los productos, crearlos o eliminarlos de la base de datos (las primeras dos opciones por medio de formularios y la última por medio
de un signo en las cards). También se cuenta como una opción que permite visualizar las compras ya realizadas.

Para ejecutar el proyecto se debe contar con la extensión Live Server para el directorio del Cliente, y con la librería JSON-Server para la simulación de un
servidor en el directorio correspondiente a este.
