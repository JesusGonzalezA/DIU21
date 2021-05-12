# DIU - Practica 3, entregables

## Moodboard (diseño visual + logotipo) 

[Puede verlo aquí](https://app.milanote.com/1LzAjP1dWddM2U?p=49ycxkzUwlo)
![Moodboard](Images/Moodboard.png)

### Imágenes inspiradoras

Hemos escogido estas imágenes porque nos transmiten tradición, calidez y nos transportan a "casa". Además, todas comparten algo, y es que gracias a respetar la naturaleza y lo local podemos vivir grandes experiencias. Nosotros con este proyecto queremos concienciar a la gente de la importancia de cuidar lo que se nos ha dado y que podamos luchar por seguir manteniéndolo y disfrutando de ello.

![Patatas a lo pobre](Images/Comida.png)
![Excursión](Images/Excursion.png)
![Ronda](Images/Ronda.jpeg)
![Sierra](Images/Sierra.png)

### Paleta de colores

Lo que queremos transmitir nos ha condicionado mucho a la hora de escoger la paleta de colores.

* Negro ( #000000 ): transmite elegancia y claridad.

* Verde ( #1D6F1E y #008A00 ): transmite  naturaleza, tranquilidad, ecología.

* Amarillo ( #F8ECB4 ): transmite  alegría, prosperidad, optimismo, luz.

* Blanco ( #FFFFFF ): transmite perfección, pureza y simplicidad .

![Paleta de colores](Images/Paleta.png)

#### Test de contraste
[Herramienta utilizada](https://github.com/dequelabs/color-palette)

Hemos realizado un test de contraste de la paleta utilizada, y como podemos comprobar es correcta exceptuando el caso en el que se utiliza el color amarillo de fondo y el segundo verde como color de la fuente. No utilizaremos esta combinación en nuestros diseños pero mantendremos la paleta escogida utilizando el resto de combinaciones permitidas. 

![Test de contraste](Images/PaletaTest.jpg)

### Tipografía

Hemos elegido dos fuentes distintas: una con serif y otra sin serif. Esto es debido a que en un futuro nos gustaría hacer unas impresiones con el fin de dar físicamente a los locales que trabajen con nosotros un cartel que represente que es un sitio que cumple con los valores que planteamos desde la plataforma y los usuarios de la aplicación valoran mucho el comercio en cuestión.
Estos carteles se verán mejor con una fuente serigrafiada, mientras que para hacer la aplicación utilizaremos una fuente sin serif, puesto que es lo más recomendable para leer desde el ordenador y móvil.

* [Sin serif: Lato](https://fonts.google.com/specimen/Lato?category=Sans+Serif&query=lato)

![Lato](Images/Lato.png)

* [Con serif: Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab?category=Serif&authuser=1)


![Roboto Slab](Images/RobotoSlab.png)

### Comentarios de usuarios

Lo que nos gustaría que los usuarios dijeran de nuestro proyecto:

* Gran aplicación que cambia totalmente el modo de hacer turismo en la actualidad y que se centra en el encanto y la experiencia de disfrutar lo tradicional y ecológico.
* Una manera completamente diferente de viajar.
* Obligatorio para aquellas personas que busquen comer en sitios donde se respete al máximo el producto.
* Una maravillosa forma de conocer gente concienciada con el medio ambiente y viajera.
* Gracias a la aplicación mi tienda se ha podido dar a conocer entre la gente joven
* ¡Te permite encontrar lugares que ni te imaginabas que existían!

### Iconos

### Logo
#### B/N
#### Sin símbolos
#### Sólo con el nombre
#### 24x24

## Landing Page


## Guidelines

Hemos utilizado las guías de diseño proporcionadas por Android, debido a que la mayoría de nuestros usuarios utilizarán esta plataforma.

[Material Design](https://material.io/)

### Componentes:
* [App bar: top](https://material.io/components/app-bars-top): muestra la información de la página actual y las principales acciones.
* [Bottom navigation](https://material.io/components/bottom-navigation): permite al usuario moverse entre las direcciones de primer nivel de la app.
* [Card](https://material.io/components/cards): se utiliza para mostrar contenido y acciones relacionadas con un tema concreto. Podemos añadir imágenes, texto y jerarquizar la información. Lo utilizaremos para mostrar el resumen de las actividades guardadas por el usuario.
* [Lists](https://material.io/components/lists): se utilizan para agrupar elementos como texto, imágenes, cards, etc. Vamos a utilizarlo en la app para mostrar el listado de actividades destacadas. 
* Formularios: para los formularios hemos utilizado algunos componentes proporcionados por la guía:
    * [Checkboxes](https://material.io/components/date-pickers): las utilizamos cuando el usuario debe de seleccionar entre varias opciones. Si sólo hubiera una opción de tipo booleana, utilizaríamos [Switches](https://material.io/components/switches). En el formulario lo hemos utilizado para elegir el tipo de actividad a registrar.
    * [Text fields](https://material.io/components/text-fields): permite al usuario introducir información y recibir feedback al instante de si es correcta o no.
* [Chips](https://material.io/components/chips): permite a los usuarios filtrar contenido. Lo utilizaremos para implementar la búsqueda de actividades.
* [Divider](https://material.io/components/dividers): lo utilizamos para separar la información en componentes según su importancia o temática.


## Mockup: LAYOUT HI-FI

Puede ver [aquí](https://xd.adobe.com/view/33c4e3f8-e569-449f-adc6-9f347606e847-6697/?fullscreen) la presentación del diseño.
![Demo](Images/demo.gif)

### Home
Se trata de la página principal de la aplicación. Arriba se muestra un resumen de las actividades guardadas por el usuario y abajo el listado de las actividades destacadas (nota alta en las valoraciones) para que pueda añadirlas y verlas rápidamente.
![Pantalla Home](Images/Home.png)

### Añadir una experiencia
Se trata de un formulario dinámico (cambia en función del tipo de experiencia seleccionada). La parte de arriba nos muestra un resumen de los pasos que el usuario debe cumplir para realizar un registro de forma correcta. 
![Pantalla](Images/Añadir.png)

### Buscar una experiencia
Se trata de una página que permite al usuario buscar experiencias, filtrándolas por nombre, tipo y localización. Se muestra abajo un listado con todas las opciones que encajan con ese filtro. El usuario puede guardarlas o pinchar sobre ellas para ver más información (siguiente página).
![Pantalla](Images/Buscar.png)

### Detalle de una experiencia (restaurante, excursión, local...)
Se trata de la página que muestra la información completa relacionada con una experiencia. Arriba se muestra un botón para cerrar la página y volver atrás o guardarla si es del gusto del usuario. Todas las experiencias comparten información básica, como título, valoración, tipo de experiencia, descripción, contacto y localización. Esta información, que es la más relevante, aparece al principio. 
Después aparece información adicional, como en este caso el menú del restaurante. 
Por último, aparecen todos los comentarios de los usuarios ecoTravellers acerca de la experiencia.

![Pantalla](Images/Actividad-Detalle.png)


## Documentación: Publicación del Case Study


(incluye) Valoración del equipo sobre la realización de esta práctica o los problemas surgidos
 
