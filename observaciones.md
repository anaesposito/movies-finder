Ana, 

Muchisimas felicitaciones por la entrega de tu trabajo final, y por haber concluido tu camino en Ada para convertirte en una desarrolladora front end junior. Sé cuanto esfuerzo pusiste a lo largo de estos meses: tu compromiso constante siempre se notó, y va a ser tu mejor aliado en tu carrera. 

Tu web se ve muy bien: cumplis excelente los requisitos, y para el tiempo que tuviste, estamos ante una app compleja, facil de navegar, bien hecha. Celebro que hayas incorporado tailwind: es una libreria de css super interesante y que hayas podido aprenderla y utilizarla aca habla maravillas de vos. La decision que no entiendo es la de haber mantenido la Home en el estilo de la web compleja, con las funcionalidades de la web sencilla: la lista de peliculas hace que tu web se vea demasiado repetitiva, y creo que incorporar las listas de peliculas del modelo de Ada le sumaria variedad a tu web. Para las tabs, creo que la prioridad deberia ser implementar el paginado. 

Otros detalles que podrias ir mejorando con el tiempo:
- El carrousel no me funciona bien, veo que esta en auto pero siempre es bueno poder elegir una seccion en particular. 
- Si bien esta bien resuelto el menu en mobile, no funciona bien. Te deje marcada una posible solucion en el componente. 

Con respecto al codigo, tengo que mencionar lo prolijo que esta. Tu codigo es sorprendentemente sencillo para la app que dejas entregada, y muy facil de leer y recorrer: eso es una marca de una desarrolladora que ya puede ir pensando en estrategias de mejora del codigo, de reutilizacion, que tiene en mente la simpleza, y habla muy bien de vos. 

Tengo que mencionar lo bien que resolviste los estilos. Se nota tu talento aca, con algo mas de tiempo se que hubieras entregado una UI hermosa y muy bien construida. Con poquismos componentes reutilizables, y un excelente uso de props, logras hacer una app prolija y bien hecha. Excelente todo el uso de tailwind realmente lo aprovechaste muy bien. 

Algunas observaciones generales:
- Saca todos los archivos que no uses como App.test, index.css, setupTests
- Repetis titulos h1: recorda que debe haber solo 1 por pagina
- Tenes la tendencia de utilizar ternario cuando no vas a retornar nada en la segunda condicion. En ese caso siempre utiliza un short circuit. Te lo deje mencionado varias veces. 
- Necesitas un hook reutilizable para los fetch, se repite mucho el codigo. 
- Te hace falta un archivo de variables para poner ahi todas las cosas relacionadas a los fetch que se repiten a lo largo de tus componentes. 
- Te faltan etiquetas semanticas como section, article, main. 

Nota final: 8


