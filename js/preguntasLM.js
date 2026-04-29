const preguntasLM = [

    {
        enunciado: "¿Qué propiedad activa un contenedor Grid en CSS?",
        opciones: ["display: block", "display: inline", "display: grid", "display: table"],
        correcta: 2,
        explicacion: " La correcta es display: grid porque esa propiedad convierte el elemento en un contenedor Grid y permite organizar sus hijos en filas y columnas. display: block solo lo hace un elemento de bloque normal; display: inline lo mantiene en línea; y display: table imita el comportamiento de una tabla, pero no activa CSS Grid."
    },

    {
        enunciado: "¿Qué define la dirección en Flexbox?",
        opciones: ["flex-grow", "flex-dir", "display-dir", "flex-direction"],
        correcta: 3,
        explicacion: " La correcta es flex-direction porque es la propiedad que indica en qué dirección se colocan los elementos dentro de un contenedor Flexbox, por ejemplo en fila o en columna; flex-grow sirve para hacer que un elemento crezca, y flex-dir y display-dir no son propiedades válidas de CSS."
    },

    {
        enunciado: "Requisito básico de XML válido",
        opciones: ["Etiquetas sin cerrar", "Un único elemento raíz", "Usar solo minúsculas", "No usar atributos"],
        correcta: 1,
        explicacion: " La correcta es Un único elemento raíz porque un documento XML válido y bien formado debe tener un solo elemento principal que contenga al resto. Etiquetas sin cerrar harían el documento incorrecto; usar solo minúsculas no es obligatorio en XML; y sí se pueden usar atributos, por lo que esa opción también es falsa."
    },
    {
        enunciado: "¿Para qué sirve un DTD?",
        opciones: ["Validar XML", "Formatear XML", "Comprimir", "Convertir a JSON"],
        correcta: 0,
        explicacion: " La correcta es Validar XML porque un DTD (Document Type Definition) define qué elementos, atributos y estructura son válidos en un documento XML. No sirve para formatear visualmente el XML; no comprime archivos; y tampoco convierte XML a JSON."
    },

    {
        enunciado: "Significado de XSLT",
        opciones: ["XML Standard Language Transforms", "Extensible Stylesheet Language Transformations", "Extensible Language Transforms", "Extensible Language Transformations"],
        correcta: 1,
        explicacion: " La correcta es Extensible Stylesheet Language Transformations porque ese es el significado de XSLT. Las otras opciones cambian palabras o eliminan partes del nombre real, así que no corresponden a la denominación correcta del lenguaje."
    },
    {
        enunciado: "Clase de contenedor en Bootstrap 5",
        opciones: ["box", "wrap", "container", "layout"],
        correcta: 2,
        explicacion: " La correcta es container porque esa es la clase de Bootstrap 5 usada para crear un contenedor con ancho adaptable y márgenes automáticos. box, wrap y layout no son la clase estándar de Bootstrap para este fin."
    },
    {
        enunciado: "Clase fila en Bootstrap 5",
        opciones: ["col", "row", "line", "grid"],
        correcta: 1,
        explicacion: " La correcta es row porque en Bootstrap 5 esa clase crea una fila dentro del sistema de rejilla. col se usa para columnas; y line y grid no son la clase estándar que define una fila en Bootstrap."
    },
    {
        enunciado: "Prefijo para columnas en Bootstrap 5",
        opciones: ["row-", "col-", "grid-", "bs-"],
        correcta: 1,
        explicacion: " La correcta es col- porque ese es el prefijo usado en Bootstrap 5 para definir columnas y sus tamaños, como col-6 o col-md-4. row- se relaciona con filas, no con columnas; y grid- y bs- no son los prefijos estándar para esto."
    },
    {
        enunciado: "Propiedad columnas en Grid",
        opciones: ["grid-template-rows", "grid-auto-flow", "grid-template-columns", "columns"],
        correcta: 2,
        explicacion: " La correcta es grid-template-columns porque esa propiedad define las columnas de un contenedor Grid. grid-template-rows define filas; grid-auto-flow controla cómo se colocan automáticamente los elementos; y columns pertenece a otro contexto de maquetación, no al sistema Grid principal."
    },
    {
        enunciado: "justify-content en Flexbox",
        opciones: ["alinear horizontal", "alinear vertical", "cambiar dirección", "ocultar"],
        correcta: 0,
        explicacion: " La correcta es alinear horizontal porque, en Flexbox con la dirección por defecto row, justify-content alinea los elementos a lo largo del eje principal, que normalmente es horizontal. No cambia la dirección; no oculta elementos; y alinear vertical suele asociarse más a align-items en el caso habitual."
    },
    {
        enunciado: "Versión latest de Bootstrap",
        opciones: ["4.5", "4.8", "5.0", "5.3"],
        correcta: 3,
        explicacion: " La correcta es 5.3 porque, entre las opciones dadas, es la versión más reciente de Bootstrap. 4.5 y 4.8 pertenecen a la rama 4; y 5.0 es anterior dentro de la rama 5."
    },
    {
        enunciado: "Tipo de lenguaje XML",
        opciones: ["Programación", "Marcado", "Estilos", "Consulta"],
        correcta: 1,
        explicacion: " La correcta es Marcado porque XML (Extensible Markup Language) es un lenguaje de marcado diseñado para estructurar información. No es un lenguaje de programación; no es un lenguaje de estilos como CSS; y tampoco uno de consulta como SQL o XPath."
    },
    {
        enunciado: "Inicio transformación XSLT",
        opciones: ["xsl:template", "xsl:transform", "xsl:main", "xsl:sheet"],
        correcta: 1,
        explicacion: " La correcta es xsl:transform porque ese elemento se usa como raíz de una hoja XSLT. xsl:template se usa dentro para definir plantillas; y xsl:main y xsl:sheet no son la forma estándar correcta en esta pregunta."
    },
    {
        enunciado: "Atributo espacio de nombres XML",
        opciones: ["ns", "xmlns", "namespace", "xmspace"],
        correcta: 1,
        explicacion: " La correcta es xmlns porque ese atributo se usa para declarar espacios de nombres en XML. ns y namespace pueden parecer lógicos, pero no son el atributo estándar; y xmspace tampoco es correcto."
    },
    {
        enunciado: "Clase margen inferior BS5",
        opciones: ["mb-3", "pb-3", "mt-3", "mg-bottom"],
        correcta: 0,
        explicacion: " La correcta es mb-3 porque en Bootstrap 5 m significa margin, b significa bottom y 3 indica el tamaño. pb-3 sería padding-bottom; mt-3 sería margin-top; y mg-bottom no es una clase estándar de Bootstrap."
    },
    {
        enunciado: "Propósito de XSL",
        opciones: ["Validación", "Transformar XML", "Crear BD", "Comprimir archivos"],
        correcta: 1,
        explicacion: " La correcta es Transformar XML porque XSL, y en concreto XSLT, se usa para transformar documentos XML a otros formatos como HTML, texto u otro XML. No se usa para validar, eso sería más propio de DTD o XSD; y tampoco para crear bases de datos o comprimir archivos."
    },
    {
        enunciado: "¿Qué propiedad define el color de fondo de un elemento?",
        opciones: ["background-color", "color", "bg-color", "background"],
        correcta: 0,
        explicacion: " La correcta es background-color porque esa propiedad define el color de fondo del elemento. color cambia el color del texto; bg-color no es una propiedad CSS válida; y background es una propiedad abreviada más amplia, pero la específica para color de fondo es background-color."
    },
    {
        enunciado: "¿Qué propiedad define una imagen de fondo?",
        opciones: ["background-img", "background-image", "background-src", "image-background"],
        correcta: 1,
        explicacion: " La correcta es background-image porque esa propiedad se usa para establecer una imagen de fondo en CSS. background-img, background-src e image-background no son propiedades estándar válidas."
    },
    {
        enunciado: "¿Qué valor evita que la imagen de fondo se repita?",
        opciones: ["repeat: none", "background-repeat: 0", "background-repeat: no-repeat", "background-image: single"],
        correcta: 2,
        explicacion: " La correcta es background-repeat: no-repeat porque esa es la sintaxis válida para impedir que la imagen de fondo se repita. repeat: none no es una declaración correcta; background-repeat: 0 tampoco; y background-image: single no existe como valor estándar."
    },
    {
        enunciado: "¿Qué propiedad controla la posición de la imagen de fondo?",
        opciones: ["background-align", "background-position", "background-place", "background-origin"],
        correcta: 1,
        explicacion: " La correcta es background-position porque esa propiedad define dónde se coloca la imagen de fondo dentro del elemento. background-align y background-place no son propiedades estándar; y background-origin define desde qué caja empieza a dibujarse el fondo, no su posición visual exacta."
    },
    {
        enunciado: "align-items en Flexbox",
        opciones: ["ordenar", "alinear vertical", "cambiar dirección", "ocultar"],
        correcta: 1,
        explicacion: " La correcta es alinear vertical porque, en Flexbox con dirección row por defecto, align-items alinea los elementos en el eje cruzado, que normalmente es vertical. No sirve para ordenar, ni para cambiar la dirección, ni para ocultar elementos."
    },
    {
        enunciado: "Función repeat en Grid",
        opciones: ["repeat", "auto-grid", "loop", "grid-repeat"],
        correcta: 0,
        explicacion: " La correcta es repeat porque esa es la función real de CSS Grid usada para repetir columnas o filas, por ejemplo repeat(3, 1fr). auto-grid, loop y grid-repeat no son funciones estándar válidas de CSS Grid."
    },
    {
        enunciado: "Extensión de archivos DTD",
        opciones: ["xml", "xls", "dtd", "doc"],
        correcta: 2,
        explicacion: " La correcta es dtd porque esa es la extensión típica de los archivos Document Type Definition. xml es para documentos XML; xls para hojas de cálculo antiguas de Excel; y doc para documentos de texto."
    },
    {
        enunciado: "Etiqueta XSLT para indicar el valor de una etiqueta en XML",
        opciones: ["xsl:select", "xsl:value", "xsl:value-for", "xsl:value-of"],
        correcta: 3,
        explicacion: " La correcta es xsl:value-of porque esa instrucción se usa en XSLT para extraer y mostrar el valor de un nodo o etiqueta XML. xsl:select no existe como elemento independiente; xsl:value y xsl:value-for tampoco son etiquetas estándar válidas de XSLT."
    },
    {
        enunciado: "No es ventaja de XML",
        opciones: ["Extensible", "Readable", "Comprensión excelente", "Validable"],
        correcta: 2,
        explicacion: " La correcta es Comprensión excelente porque eso no es una ventaja técnica estándar de XML, sino una afirmación demasiado subjetiva. XML sí es extensible; puede ser legible para humanos; y además es validable con DTD o esquemas."
    },
    {
        enunciado: "Propiedad separación en Grid",
        opciones: ["gap", "padding", "border-spacing", "spacing"],
        correcta: 0,
        explicacion: " La correcta es gap porque esa propiedad define la separación entre filas y columnas en Grid. padding añade espacio interior al contenedor; border-spacing se asocia a tablas; y spacing no es una propiedad CSS válida para este caso."
    },
    {
        enunciado: "Botón azul en Bootstrap 5",
        opciones: ["btn-primary", "btn-blue", "btn-default", "button-main"],
        correcta: 0,
        explicacion: " La correcta es btn-primary porque esa es la clase estándar de Bootstrap 5 para el botón principal, que suele mostrarse en azul según el tema por defecto. btn-blue, btn-default y button-main no son las clases estándar de Bootstrap para ese botón."
    },
    {
        enunciado: "Dirección de columna en Flex",
        opciones: ["row", "column", "reverse", "vertical"],
        correcta: 1,
        explicacion: " La correcta es column porque ese es el valor de flex-direction que coloca los elementos en columna. row los pone en fila; reverse por sí solo no es un valor válido completo; y vertical no es un valor estándar de flex-direction."
    },
    {
        enunciado: "Estructura válida XML",
        opciones: ["Atributos obligatorios", "Mayúsculas", "Bien anidado", "DTD obligatorio"],
        correcta: 2,
        explicacion: " La correcta es Bien anidado porque una condición fundamental para que un XML sea correcto es que sus etiquetas estén bien abiertas, cerradas y anidadas. Los atributos no son obligatorios siempre; usar mayúsculas no es un requisito; y un DTD no es obligatorio para que el XML esté bien formado."
    },
    {
        enunciado: "Unidad NO común en Grid",
        opciones: ["fr", "px", "%", "cm"],
        correcta: 3,
        explicacion: " La correcta es cm porque no es una unidad común en maquetación web con Grid, aunque CSS la permita. fr, px y % sí son muy habituales en Grid para repartir espacio, fijar medidas o usar proporciones."
    },

    {
        enunciado: "¿Qué indica exactamente <!DOCTYPE html> en HTML5?",
        opciones: [
            "La versión concreta del navegador.",
            "Que el documento usa XHTML.",
            "Que el documento sigue el estándar HTML5.",
            "Que el documento contiene etiquetas semánticas."
        ],
        correcta: 2,
        explicacion: " La correcta es Que el documento sigue el estándar HTML5 porque <!DOCTYPE html> indica al navegador que debe interpretar la página en modo estándar HTML5. No dice nada sobre la versión del navegador; no significa que el documento use XHTML; y tampoco garantiza que haya etiquetas semánticas dentro."
    },
    /*VISTO HASTA AQUÍ*/
    
    {
        enunciado: "¿Cuál es la función principal del elemento <main>?",
        opciones: [
            "Contener el menú de navegación.",
            "Incluir contenido repetido en todas las páginas.",
            "Agrupar el contenido principal único del documento.",
            "Sustituir a <body>."
        ],
        correcta: 2,
        explicacion: " La correcta es Agrupar el contenido principal único del documento porque <main> está pensado para contener la parte central y no repetida de la página. El menú de navegación suele ir en <nav>; el contenido repetido no es la finalidad de <main>; y no sustituye a <body>, que sigue siendo el contenedor general del documento."
    },
    {
        enunciado: "¿Cuántos elementos <main> debe haber por documento HTML válido?",
        opciones: ["Ninguno.", "Uno.", "Dos como máximo.", "Ilimitados."],
        correcta: 1,
        explicacion: " La correcta es Uno porque, en un documento HTML válido, el contenido principal debe representarse con un único elemento <main>. Ninguno no es la respuesta esperada aquí; dos como máximo es incorrecto; e ilimitados rompería la idea de contenido principal único."
    },
    {
        enunciado: "¿Qué etiqueta NO es semántica en HTML5?",
        opciones: ["<article>", "<section>", "<aside>", "<div>"],
        correcta: 3,
        explicacion: " La correcta es <div> porque es un contenedor genérico sin significado semántico propio. <article>, <section> y <aside> sí aportan información sobre el tipo de contenido que contienen."
    },
    {
        enunciado: "¿Cuándo es correcto usar <section> en lugar de <div>?",
        opciones: [
            "Siempre que se quiera agrupar contenido.",
            "Cuando el contenido tiene sentido semántico y un título.",
            "Solo dentro de <article>.",
            "Para aplicar estilos CSS."
        ],
        correcta: 1,
        explicacion: " La correcta es Cuando el contenido tiene sentido semántico y un título porque <section> se usa para un bloque temático con significado dentro del documento. No se usa siempre para agrupar contenido, porque para eso también existe <div>; no solo puede ir dentro de <article>; y su objetivo no es simplemente aplicar estilos CSS."
    },
    {
        enunciado: "¿Qué diferencia clave hay entre <strong> y <b>?",
        opciones: [
            "Ninguna.",
            "<strong> aporta importancia semántica.",
            "<b> es obligatorio en HTML5.",
            "<strong> solo cambia el tamaño del texto."
        ],
        correcta: 1,
        explicacion: " La correcta es <strong> aporta importancia semántica porque <strong> no solo suele mostrarse en negrita, sino que además indica que ese contenido tiene especial importancia. <b> normalmente solo aplica un cambio visual sin ese significado semántico; no es obligatorio en HTML5; y <strong> no cambia por sí mismo el tamaño del texto."
    },
    {
        enunciado: "¿Qué atributo mejora la accesibilidad de una imagen decorativa?",
        opciones: ['title=""', 'alt="" vacío', 'src=""', 'role="img"'],
        correcta: 1,
        explicacion: " La correcta es alt=\"\" vacío porque en una imagen decorativa se indica así a los lectores de pantalla que no hay contenido relevante que anunciar. title=\"\" no cumple esa función principal de accesibilidad; src=\"\" rompería la carga de la imagen; y role=\"img\" no sustituye al uso correcto del atributo alt."
    },
    {
        enunciado: "¿Qué ocurre si una imagen no tiene atributo alt?",
        opciones: [
            "El navegador no la muestra.",
            "No pasa nada.",
            "Se perjudica la accesibilidad.",
            "Se carga más lenta."
        ],
        correcta: 2,
        explicacion: " La correcta es Se perjudica la accesibilidad porque el atributo alt ayuda a describir la imagen a usuarios que usan lectores de pantalla o cuando la imagen no puede cargarse. El navegador sí puede mostrarla aunque falte alt; no es cierto que no pase nada; y tampoco provoca por sí mismo una carga más lenta."
    },
    {
        enunciado: "¿Qué etiqueta es correcta para un menú de navegación?",
        opciones: ["<menu>", "<ul>", "<nav>", "<header>"],
        correcta: 2,
        explicacion: " La correcta es <nav> porque esa etiqueta semántica representa una zona de navegación con enlaces para moverse por la web o por una sección. <ul> puede usarse dentro para listar enlaces, pero no define por sí sola la función de navegación; <menu> no es la opción semántica habitual aquí; y <header> tiene otro propósito."
    },
    {
        enunciado: "¿Qué etiqueta se usa para asociar un texto a un campo de formulario?",
        opciones: ["<input>", "<label>", "<fieldset>", "<legend>"],
        correcta: 1,
        explicacion: " La correcta es <label> porque esa etiqueta sirve para asociar un texto descriptivo a un campo de formulario. <input> es el propio campo; <fieldset> agrupa varios controles relacionados; y <legend> da título a un fieldset, no a un campo individual."
    },
    {
        enunciado: "¿Cómo se asocia correctamente un <label> con un <input>?",
        opciones: [
            "Usando el mismo name.",
            "Usando for y id.",
            "Colocándolos en la misma línea.",
            "Usando class."
        ],
        correcta: 1,
        explicacion: " La correcta es Usando for y id porque el atributo for del <label> debe coincidir con el id del <input> para crear la asociación accesible. Compartir el mismo name no hace esa vinculación; ponerlos en la misma línea no tiene valor semántico; y class solo sirve para estilos o selección CSS, no para asociarlos correctamente."
    },
    {
        enunciado: "¿Qué atributo hace obligatorio un campo de formulario?",
        opciones: ["validate", "important", "required", "mandatory"],
        correcta: 2,
        explicacion: " La correcta es required porque ese atributo HTML indica que el campo debe completarse antes de enviar el formulario. validate, important y mandatory parecen lógicos por el nombre, pero no son atributos estándar válidos para esta función."
    },
    {
        enunciado: "¿Qué tipo de <input> valida automáticamente un email?",
        opciones: ["text", "mail", "email", "validate-email"],
        correcta: 2,
        explicacion: " La correcta es email porque <input type=\"email\"> activa la validación básica del formato de correo en el navegador. text no valida como email; mail no es un tipo válido; y validate-email tampoco existe como tipo estándar de input."
    },
    {
        enunciado: "¿Qué elemento agrupa campos relacionados en un formulario?",
        opciones: ["<form>", "<group>", "<fieldset>", "<section>"],
        correcta: 2,
        explicacion: " La correcta es <fieldset> porque esa etiqueta agrupa controles relacionados dentro de un formulario y mejora la estructura y la accesibilidad. <form> contiene el formulario completo, no solo un grupo; <group> no es una etiqueta HTML estándar; y <section> tiene valor semántico general, pero no es la etiqueta específica para este caso."
    },
    {
        enunciado: "¿Qué etiqueta proporciona un título a un <fieldset>?",
        opciones: ["<title>", "<caption>", "<legend>", "<label>"],
        correcta: 2,
        explicacion: " La correcta es <legend> porque esa etiqueta define el título o descripción principal de un <fieldset>. <title> se usa en el documento, normalmente dentro de <head>; <caption> se usa en tablas; y <label> sirve para campos concretos, no para titular un conjunto."
    },
    {
        enunciado: "¿Qué etiqueta es más adecuada para una noticia independiente?",
        opciones: ["<section>", "<div>", "<article>", "<aside>"],
        correcta: 2,
        explicacion: " La correcta es <article> porque representa un contenido independiente y con sentido propio, como una noticia, una entrada de blog o un artículo. <section> agrupa contenido relacionado; <div> no tiene significado semántico; y <aside> se usa para contenido secundario o complementario."
    },
    {
        enunciado: "¿Dónde debe colocarse el <footer> de un artículo?",
        opciones: [
            "Solo al final del <body>",
            "Nunca dentro de <article>",
            "Dentro o fuera del <article> según el contexto",
            "Solo dentro de <header>"
        ],
        correcta: 2,
        explicacion: " La correcta es Dentro o fuera del <article> según el contexto porque <footer> puede pertenecer al artículo en sí o al documento completo. No tiene que ir solo al final de <body>; no está prohibido dentro de <article>; y desde luego no va solo dentro de <header>."
    },
    {
        enunciado: "¿Qué atributo indica el idioma del documento HTML?",
        opciones: ["charset", "lang", "language", "xml:lang"],
        correcta: 1,
        explicacion: " La correcta es lang porque ese atributo indica el idioma principal del contenido del documento. charset define la codificación; language no es el atributo HTML estándar en este caso; y xml:lang pertenece más al contexto XML/XHTML."
    },
    {
        enunciado: "¿Dónde debe colocarse el atributo lang=\"es\"?",
        opciones: ["En <head>", "En <body>", "En <html>", "En <meta>"],
        correcta: 2,
        explicacion: " La correcta es En <html> porque el idioma principal del documento debe indicarse normalmente en el elemento raíz. Ponerlo en <head> o en <meta> no sería correcto para este propósito; y en <body> no es la ubicación estándar para declarar el idioma general del documento."
    },
    {
        enunciado: "¿Qué etiqueta representa contenido autocontenido como un diagrama o imagen con pie?",
        opciones: ["<img>", "<figure>", "<aside>", "<section>"],
        correcta: 1,
        explicacion: " La correcta es <figure> porque se usa para contenido autocontenido, como imágenes, diagramas o gráficos, normalmente acompañado de un pie. <img> solo inserta la imagen; <aside> es contenido complementario; y <section> agrupa contenido temático, pero no está pensada específicamente para este caso."
    },
    {
        enunciado: "¿Qué etiqueta define el texto descriptivo de una <figure>?",
        opciones: ["<caption>", "<description>", "<figcaption>", "<legend>"],
        correcta: 2,
        explicacion: " La correcta es <figcaption> porque esa etiqueta aporta el texto descriptivo o pie de una <figure>. <caption> se usa en tablas; <description> no es una etiqueta HTML estándar; y <legend> se usa en formularios con <fieldset>."
    },
    {
        enunciado: "¿Qué atributo mejora la accesibilidad indicando la finalidad de un enlace?",
        opciones: ["href", "target", "aria-label", "rel"],
        correcta: 2,
        explicacion: " La correcta es aria-label porque permite describir la función o el propósito del enlace de forma accesible, sobre todo cuando el texto visible no es suficiente. href define el destino; target indica dónde abrirlo; y rel describe la relación del enlace, pero no sustituye esa etiqueta accesible."
    },
    {
        enunciado: "¿Qué valor de target abre un enlace en una nueva pestaña?",
        opciones: ["_self", "_new", "_blank", "_tab"],
        correcta: 2,
        explicacion: " La correcta es _blank porque ese valor de target abre el enlace en una nueva pestaña o ventana según el navegador. _self lo abre en la misma pestaña; _new no es el valor estándar habitual esperado aquí; y _tab no es un valor HTML válido."
    },
    {
        enunciado: "¿Qué atributo se recomienda añadir junto a target=\"_blank\" por seguridad?",
        opciones: ['rel="nofollow"', 'rel="noopener noreferrer"', 'rel="external"', 'rel="secure"'],
        correcta: 1,
        explicacion: " La correcta es rel=\"noopener noreferrer\" porque ayuda a evitar riesgos de seguridad y privacidad al abrir enlaces en una nueva pestaña. rel=\"nofollow\" tiene otro uso relacionado con buscadores; rel=\"external\" no ofrece esa protección; y rel=\"secure\" no es el valor estándar para este caso."
    },
    {
        enunciado: "¿Qué etiqueta se usa para contenido de fecha/hora legible por máquinas?",
        opciones: ["<date>", "<time>", "<datetime>", "<meta>"],
        correcta: 1,
        explicacion: " La correcta es <time> porque esa etiqueta representa fechas u horas de forma semántica y puede incluir un valor legible por máquinas. <date> y <datetime> no son etiquetas HTML estándar válidas; y <meta> no se usa para mostrar ese contenido en el cuerpo del documento."
    },
    {
        enunciado: "¿Qué atributo de <time> almacena el valor en formato máquina?",
        opciones: ["machine", "value", "datetime", "data-time"],
        correcta: 2,
        explicacion: " La correcta es datetime porque ese atributo guarda la fecha u hora en un formato interpretable por máquinas. machine, value y data-time no son el atributo estándar específico de la etiqueta <time> para esta función."
    },
    {
        enunciado: "¿Qué práctica es INCORRECTA según buenas prácticas HTML?",
        opciones: [
            "Usar <div> para todo",
            "Usar etiquetas semánticas",
            "Usar alt en imágenes",
            "Definir el idioma del documento"
        ],
        correcta: 0,
        explicacion: " La correcta es Usar <div> para todo porque eso empobrece la semántica del documento y dificulta accesibilidad, mantenimiento y SEO. Las otras opciones sí son buenas prácticas: usar etiquetas semánticas, añadir alt a las imágenes y definir el idioma del documento."
    },
    {
        enunciado: "¿Qué diferencia clave hay entre <section> y <article>?",
        opciones: [
            "Ninguna",
            "<article> puede ser independiente",
            "<section> es solo visual",
            "<article> sustituye a <div>"
        ],
        correcta: 1,
        explicacion: " La correcta es <article> puede ser independiente porque <article> representa contenido con sentido propio fuera del contexto general, mientras que <section> suele agrupar contenido temáticamente relacionado. No son iguales; <section> no es solo visual; y <article> no sustituye automáticamente a <div>."
    },
    {
        enunciado: "¿Qué objetivo principal tiene el HTML semántico?",
        opciones: [
            "Mejorar el diseño visual",
            "Reducir el código",
            "Mejorar accesibilidad, SEO y comprensión",
            "Sustituir CSS"
        ],
        correcta: 2,
        explicacion: " La correcta es Mejorar accesibilidad, SEO y comprensión porque el HTML semántico ayuda a que navegadores, buscadores y tecnologías de asistencia entiendan mejor el contenido. No está pensado principalmente para mejorar el diseño visual; no siempre reduce código; y no sustituye a CSS, que se encarga de los estilos."
    },

    {
        enunciado: "¿Qué significan las siglas CSS?",
        opciones: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Color Style Sheets"],
        correcta: 1,
        explicacion: " La correcta es Cascading Style Sheets porque ese es el nombre real de CSS. Las otras opciones inventan palabras parecidas, pero no corresponden a la denominación correcta del lenguaje de estilos."
    },
    {
        enunciado: "¿Cuál es la función principal de CSS?",
        opciones: ["Estructurar el contenido", "Programar interactividad", "Definir el diseño y estilo visual", "Gestionar bases de datos"],
        correcta: 2,
        explicacion: " La correcta es Definir el diseño y estilo visual porque CSS se usa para colores, tamaños, márgenes, disposición y apariencia general de una web. Estructurar el contenido es tarea principal de HTML; programar interactividad corresponde sobre todo a JavaScript; y gestionar bases de datos no tiene relación con CSS."
    },
    {
        enunciado: "¿Qué propiedad cambia el color del texto?",
        opciones: ["text-color", "font-color", "color", "foreground"],
        correcta: 2,
        explicacion: " La correcta es color porque esa es la propiedad CSS estándar para cambiar el color del texto. text-color y font-color parecen lógicas, pero no son propiedades válidas; y foreground tampoco es la propiedad correcta en CSS."
    },
    {
        enunciado: "¿Qué propiedad cambia el tamaño del texto?",
        opciones: ["text-size", "font-style", "font-size", "size"],
        correcta: 2,
        explicacion: " La correcta es font-size porque esa propiedad controla el tamaño de la fuente. text-size y size no son propiedades CSS estándar para esto; y font-style se usa para estilos como italic, no para el tamaño."
    },
    {
        enunciado: "¿Qué unidad es relativa al tamaño de la fuente del elemento raíz?",
        opciones: ["em", "px", "%", "rem"],
        correcta: 3,
        explicacion: " La correcta es rem porque esa unidad se calcula respecto al tamaño de la fuente del elemento raíz, normalmente <html>. em depende más del elemento padre o del propio contexto; px es una unidad fija; y % depende del contexto de la propiedad, no específicamente de la raíz."
    },
    {
        enunciado: "¿Qué unidad es relativa al tamaño de la fuente del elemento padre?",
        opciones: ["px", "rem", "em", "vh"],
        correcta: 2,
        explicacion: " La correcta es em porque esa unidad suele calcularse en relación con el tamaño de fuente del elemento padre o del contexto tipográfico. px es fija; rem depende del elemento raíz; y vh se basa en la altura de la ventana, no en la fuente."
    },
    {
        enunciado: "¿Qué selector selecciona todos los elementos <p>?",
        opciones: [".p", "#p", "p", "*p"],
        correcta: 2,
        explicacion: " La correcta es p porque ese selector de tipo selecciona todos los elementos <p> del documento. .p seleccionaría una clase llamada p; #p un id llamado p; y *p no es la forma estándar correcta para seleccionar todas las etiquetas p."
    },
    {
        enunciado: '¿Qué selector selecciona un elemento con id="menu"?',
        opciones: [".menu", "menu", "#menu", "*menú"],
        correcta: 2,
        explicacion: " La correcta es #menu porque en CSS el símbolo # se usa para seleccionar un elemento por su id. .menu seleccionaría una clase llamada menu; menu seleccionaría la etiqueta <menu>; y *menú no es un selector CSS válido para ese caso."
    },
    {
        enunciado: '¿Qué selector selecciona elementos con class="activo"?',
        opciones: ["#activo", ".activo", "activo", "*activo"],
        correcta: 1,
        explicacion: " La correcta es .activo porque en CSS el punto se usa para seleccionar elementos por clase. #activo seleccionaría un id; activo seleccionaría una etiqueta con ese nombre, que no es el caso; y *activo no es un selector estándar correcto."
    },
    {
        enunciado: "¿Qué propiedad controla el espacio interior de un elemento?",
        opciones: ["margin", "border", "padding", "spacing"],
        correcta: 2,
        explicacion: " La correcta es padding porque esa propiedad define el espacio interior entre el contenido y el borde del elemento. margin controla el espacio exterior; border define el borde; y spacing no es una propiedad CSS estándar para este uso."
    },
    {
        enunciado: "¿Qué propiedad controla el espacio exterior de un elemento?",
        opciones: ["padding", "border", "margin", "gap"],
        correcta: 2,
        explicacion: " La correcta es margin porque esa propiedad controla el espacio exterior alrededor del elemento. padding actúa dentro del borde; border define el borde en sí; y gap se usa para separar elementos en Grid o Flex, no como margen general del elemento."
    },
    {
        enunciado: "¿Qué pseudoclase selecciona el primer hijo?",
        opciones: [":first", "::first-child", ":first-child", ":first-of-type"],
        correcta: 2,
        explicacion: " La correcta es :first-child porque esa pseudoclase selecciona un elemento si es el primer hijo de su padre. :first no es una pseudoclase válida aquí; ::first-child sería incorrecta porque :: se usa para pseudoelementos; y :first-of-type selecciona el primero de su tipo, que no siempre coincide con el primer hijo."
    },
    {
        enunciado: "¿Qué pseudoclase selecciona un enlace cuando el ratón pasa por encima?",
        opciones: [":active", ":focus", ":hover", ":visited"],
        correcta: 2,
        explicacion: " La correcta es :hover porque esa pseudoclase se aplica cuando el puntero del ratón está sobre el elemento. :active se usa durante la activación o clic; :focus cuando el elemento recibe foco; y :visited en enlaces ya visitados."
    },
    
    {
        enunciado: "¿Qué valor centra una imagen de fondo horizontal y verticalmente?",
        opciones: ["center", "50%", "center center", "middle middle"],
        correcta: 2,
        explicacion: " La correcta es center center porque indica centrar la imagen tanto horizontal como verticalmente. center por sí solo puede funcionar en ciertos contextos abreviados, pero aquí la opción más exacta es center center; 50% no expresa claramente ambas direcciones; y middle middle no es el valor estándar de CSS."
    },
    {
        enunciado: "¿Qué propiedad controla el tamaño de la imagen de fondo?",
        opciones: ["background-scale", "background-size", "background-fit", "background-dimension"],
        correcta: 1,
        explicacion: " La correcta es background-size porque esa propiedad controla el tamaño con el que se muestra la imagen de fondo. background-scale, background-fit y background-dimension no son propiedades CSS estándar válidas para este propósito."
    },
    {
        enunciado: "¿Qué valor de background-size ajusta la imagen para cubrir todo el contenedor?",
        opciones: ["contain", "stretch", "cover", "full"],
        correcta: 2,
        explicacion: " La correcta es cover porque hace que la imagen cubra todo el contenedor, aunque pueda recortarse parte de ella. contain muestra la imagen completa sin recortarla; stretch y full no son los valores estándar esperados para background-size."
    },
    {
        enunciado: "¿Qué valor de background-size muestra la imagen completa sin recortarla?",
        opciones: ["cover", "contain", "auto", "fill"],
        correcta: 1,
        explicacion: " La correcta es contain porque adapta la imagen para que se vea completa dentro del contenedor sin recortarla. cover suele recortar para cubrir todo; auto mantiene el tamaño automático; y fill no es el valor estándar apropiado en esta propiedad."
    },
    {
        enunciado: "¿Qué propiedad fija el fondo al hacer scroll?",
        opciones: ["background-scroll", "background-clip", "background-attachment", "background-fixed"],
        correcta: 2,
        explicacion: " La correcta es background-attachment porque esa propiedad controla si el fondo se desplaza con el contenido o queda fijo. background-scroll y background-fixed no son propiedades CSS estándar; y background-clip se usa para limitar hasta dónde se pinta el fondo."
    },
    {
        enunciado: "¿Qué valor de background-attachment fija el fondo a la ventana?",
        opciones: ["absolute", "static", "fixed", "sticky"],
        correcta: 2,
        explicacion: " La correcta es fixed porque ese valor hace que la imagen de fondo quede fijada respecto a la ventana al hacer scroll. absolute, static y sticky son valores relacionados con position, no con background-attachment."
    },
    {
        enunciado: "¿Qué propiedad define hasta dónde se extiende el fondo?",
        opciones: ["background-origin", "background-limit", "background-clip", "background-area"],
        correcta: 2,
        explicacion: " La correcta es background-clip porque esa propiedad define hasta qué caja del elemento se pinta el fondo. background-origin indica desde dónde empieza a colocarse; y background-limit y background-area no son propiedades CSS estándar."
    },
    {
        enunciado: "¿Qué valor de background-clip limita el fondo al área del contenido?",
        opciones: ["border-box", "padding-box", "content-box", "text-box"],
        correcta: 2,
        explicacion: " La correcta es content-box porque ese valor limita el fondo únicamente al área del contenido. border-box lo extiende hasta el borde; padding-box hasta el padding; y text-box no es un valor estándar de background-clip."
    },
    {
        enunciado: "¿Qué propiedad define desde dónde se empieza a dibujar el fondo?",
        opciones: ["background-clip", "background-origin", "background-start", "background-position"],
        correcta: 1,
        explicacion: " La correcta es background-origin porque define desde qué caja, como border-box, padding-box o content-box, se toma como referencia el dibujo del fondo. background-clip limita hasta dónde se pinta; background-position coloca la imagen; y background-start no es una propiedad válida."
    },
    {
        enunciado: "¿Qué formato de color permite definir transparencia?",
        opciones: ["rgb()", "hex", "hsl()", "rgba()"],
        correcta: 3,
        explicacion: " La correcta es rgba() porque añade un cuarto valor alfa para controlar la transparencia. rgb() no incluye ese canal alfa en su forma clásica; hex puede admitir transparencia en versiones extendidas, pero no es lo que normalmente se busca aquí; y hsl() sin alfa tampoco la define directamente."
    },
    {
        enunciado: "¿Qué propiedad define una sombra externa?",
        opciones: ["text-shadow", "box-shadow", "shadow-box", "element-shadow"],
        correcta: 1,
        explicacion: " La correcta es box-shadow porque esa propiedad crea sombras alrededor de cajas o elementos. text-shadow se usa para texto; y shadow-box y element-shadow no son propiedades CSS estándar válidas."
    },
    {
        enunciado: "¿Qué propiedad define sombra en texto?",
        opciones: ["font-shadow", "box-shadow", "text-shadow", "text-effect"],
        correcta: 2,
        explicacion: " La correcta es text-shadow porque esa propiedad aplica sombra al texto. box-shadow crea sombra en cajas; y font-shadow y text-effect no son propiedades CSS estándar para este uso."
    },
    {
        enunciado: "¿Qué propiedad define un degradado lineal?",
        opciones: ["linear-gradient()", "gradient-linear()", "background-linear()", "color-gradient()"],
        correcta: 0,
        explicacion: " La correcta es linear-gradient() porque esa es la función CSS que crea degradados lineales, normalmente dentro de background o background-image. Las otras opciones no son funciones estándar válidas de CSS."
    },
    {
        enunciado: "¿Dónde se usan normalmente los gradientes?",
        opciones: ["En color", "En background o background-image", "En border", "En shadow"],
        correcta: 1,
        explicacion: " La correcta es En background o background-image porque los gradientes en CSS suelen aplicarse como imagen de fondo. No se usan normalmente directamente en la propiedad color del texto; ni su uso típico es en border o shadow en este contexto básico."
    },
    {
        enunciado: "¿Qué dirección crea un gradiente de arriba a abajo?",
        opciones: ["to top", "to bottom", "to right", "to left"],
        correcta: 1,
        explicacion: " La correcta es to bottom porque indica que el degradado va desde la parte superior hacia la inferior. to top sería al revés; to right y to left crean degradados horizontales."
    },
    {
        enunciado: "¿Qué gradiente crea un efecto circular?",
        opciones: ["linear-gradient()", "ellipse-gradient()", "radial-gradient()", "circle-gradient()"],
        correcta: 2,
        explicacion: " La correcta es radial-gradient() porque esa función permite crear degradados radiales, que pueden verse circulares o elípticos. linear-gradient() produce degradados lineales; y ellipse-gradient() y circle-gradient() no son funciones CSS estándar."
    },

    {
        enunciado: "¿Qué etiqueta semántica delimita la navegación principal?",
        opciones: ["<section>", "<article>", "<aside>", "<nav>"],
        correcta: 3,
        explicacion: " La correcta es <nav> porque esa etiqueta semántica se usa para delimitar bloques de navegación con enlaces principales. <section> agrupa contenido temático; <article> representa contenido independiente; y <aside> se usa para contenido complementario o lateral."
    },
    {
        enunciado: "¿Qué selector tiene mayor especificidad?",
        opciones: ["*", ".item", "#id", "p"],
        correcta: 2,
        explicacion: " La correcta es #id porque los selectores por id tienen mayor especificidad que los selectores universales, de clase o de etiqueta. * tiene la especificidad más baja; .item es un selector de clase; y p es un selector de tipo."
    },
    {
        enunciado: "¿Qué atributo aporta texto alternativo a <img>?",
        opciones: ["alt", "title", "src", "aria-label"],
        correcta: 0,
        explicacion: " La correcta es alt porque ese atributo proporciona el texto alternativo de una imagen y es fundamental para accesibilidad. title puede dar información adicional, pero no sustituye a alt; src indica la ruta de la imagen; y aria-label puede ayudar en algunos casos, pero el atributo propio y principal es alt."
    },
    {
        enunciado: "En meta viewport, ¿qué valor de width se usa para responsive?",
        opciones: ["device-height", "device-width", "1024", "auto"],
        correcta: 1,
        explicacion: " La correcta es device-width porque en la meta viewport se usa width=device-width para adaptar la página al ancho real del dispositivo. device-height no es el valor típico buscado aquí; 1024 fijaría un ancho concreto; y auto no es la opción estándar habitual."
    },
    {
        enunciado: "¿Unidad CSS relativa al tamaño de fuente del elemento?",
        opciones: ["vw", "em", "vh", "px"],
        correcta: 1,
        explicacion: " La correcta es em porque esa unidad se calcula en relación con el tamaño de fuente del elemento o su contexto. vw depende del ancho de la ventana; vh de la altura de la ventana; y px es una unidad fija, no relativa al tamaño de fuente."
    },
    {
        enunciado: "En Flexbox, ¿qué propiedad controla el crecimiento del ítem?",
        opciones: ["align-items", "order", "flex-basis", "flex-grow"],
        correcta: 3,
        explicacion: " La correcta es flex-grow porque esa propiedad indica cuánto puede crecer un ítem flex respecto a los demás cuando hay espacio disponible. align-items alinea elementos; order cambia el orden visual; y flex-basis define el tamaño base inicial del ítem."
    },
    {
        enunciado: "En CSS Grid, ¿qué propiedad declara las columnas de la cuadrícula?",
        opciones: ["grid-auto-rows", "grid-template-rows", "grid-template-columns", "grid-gap"],
        correcta: 2,
        explicacion: " La correcta es grid-template-columns porque esa propiedad declara las columnas de la cuadrícula en CSS Grid. grid-template-rows define filas; grid-auto-rows controla filas creadas automáticamente; y grid-gap, hoy más sustituido por gap, define separaciones, no columnas."
    },
    {
        enunciado: "¿Qué requisito es imprescindible en un XML bien formado?",
        opciones: [
            "Un único elemento raíz",
            "Comentarios en cada sección",
            "Doctype obligatorio",
            "CDATA en todo texto"
        ],
        correcta: 0,
        explicacion: " La correcta es Un único elemento raíz porque un XML bien formado debe tener un solo elemento principal que contenga todo lo demás. No es obligatorio poner comentarios en cada sección; el doctype no es imprescindible para que esté bien formado; y tampoco hace falta usar CDATA en todo el texto."
    },
    {
        enunciado: "¿Qué etiqueta agrupa controles de formulario relacionados?",
        opciones: ["<fieldset>", "<group>", "<figure>", "<legend>"],
        correcta: 0,
        explicacion: " La correcta es <fieldset> porque esa etiqueta se usa para agrupar campos relacionados dentro de un formulario. <group> no es una etiqueta HTML estándar para esto; <figure> se usa para contenido como imágenes o diagramas; y <legend> sirve como título de un <fieldset>, no como contenedor del grupo."
    },
    {
        enunciado: "¿Cuál es el contenedor fluido en Bootstrap 5?",
        opciones: [".container", ".container-md", ".container-sm", ".container-fluid"],
        correcta: 3,
        explicacion: " La correcta es .container-fluid porque crea un contenedor que ocupa todo el ancho disponible. .container tiene un ancho máximo adaptable según breakpoint; .container-md y .container-sm cambian su comportamiento según tamaño de pantalla; y no son el contenedor fluido general."
    },
    {
        enunciado: "En Flexbox, ¿qué alinea a lo largo del eje principal?",
        opciones: ["align-items", "justify-content", "align-content", "place-items"],
        correcta: 1,
        explicacion: " La correcta es justify-content porque alinea los elementos a lo largo del eje principal del contenedor flex. align-items actúa sobre el eje cruzado; align-content se usa cuando hay varias líneas; y place-items no es la propiedad típica de Flexbox que se espera en esta pregunta."
    },
    {
        enunciado: "En CSS Grid, ¿qué propiedad del ítem asigna su área o coordenadas?",
        opciones: ["grid-template-columns", "grid-gap", "grid-area", "grid-auto-flow"],
        correcta: 2,
        explicacion: " La correcta es grid-area porque permite asignar un área o posición concreta a un ítem dentro de la cuadrícula. grid-template-columns define las columnas del contenedor; grid-gap, hoy normalmente gap, separa elementos; y grid-auto-flow controla la colocación automática, no el área de un ítem concreto."
    },
    {
        enunciado: "¿Qué atributo vincula una etiqueta <label> con su campo de formulario?",
        opciones: ["id", "for", "name", "aria-labelledby"],
        correcta: 1,
        explicacion: " La correcta es for porque ese atributo del <label> debe coincidir con el id del campo para asociarlos correctamente. id pertenece al input o control; name se usa para envío de datos; y aria-labelledby puede aportar accesibilidad en otros contextos, pero no es el mecanismo HTML básico esperado aquí."
    },
    {
        enunciado: "¿Qué etiqueta representa el contenido principal único de la página?",
        opciones: ["<main>", "<section>", "<header>", "<footer>"],
        correcta: 0,
        explicacion: " La correcta es <main> porque representa el contenido principal y único del documento. <section> agrupa contenido temático; <header> contiene cabecera o introducción; y <footer> se usa para información final o complementaria."
    },
    {
        enunciado: "En Flexbox, ¿qué define la dirección del eje principal?",
        opciones: ["align-content", "justify-items", "align-items", "flex-direction"],
        correcta: 3,
        explicacion: " La correcta es flex-direction porque esa propiedad define si los elementos flex se colocan en fila, columna o en orden inverso. align-content y align-items sirven para alineación; y justify-items no es la propiedad estándar que se usa aquí en Flexbox."
    },
    {
        enunciado: "Breakpoint de Bootstrap que empieza en ~768 px",
        opciones: ["xxl", "md", "lg", "xl"],
        correcta: 1,
        explicacion: " La correcta es md porque en Bootstrap el breakpoint md empieza aproximadamente en 768 px. lg empieza más arriba, alrededor de 992 px; xl y xxl corresponden a tamaños aún mayores."
    },
    {
        enunciado: "¿Qué lenguaje se usa para seleccionar nodos en XML?",
        opciones: ["JSON", "XSD", "XPath", "XSLT"],
        correcta: 2,
        explicacion: " La correcta es XPath porque se usa para seleccionar nodos y navegar por documentos XML. JSON no es un lenguaje de consulta XML; XSD se usa para definir esquemas; y XSLT transforma XML, aunque puede usar XPath internamente."
    },
    {
        enunciado: "¿Qué hace el atributo HTML required?",
        opciones: [
            "Deshabilita el campo",
            "Exige completar el campo antes de enviar",
            "Autocompleta el valor",
            "Cambia el tipo del input"
        ],
        correcta: 1,
        explicacion: " La correcta es Exige completar el campo antes de enviar porque required obliga al usuario a rellenar ese control antes de enviar el formulario. No deshabilita el campo; no autocompleta el valor; y tampoco cambia el tipo del input."
    },
    {
        enunciado: "En Flexbox, ¿qué define el tamaño base antes de distribuir espacio?",
        opciones: ["flex-basis", "width", "min-width", "flex-shrink"],
        correcta: 0,
        explicacion: " La correcta es flex-basis porque marca el tamaño base del ítem flex antes de repartir el espacio disponible. width puede influir, pero no es la propiedad específica del modelo flex para este cálculo; min-width fija un mínimo; y flex-shrink controla cuánto puede encogerse."
    },
    {
        enunciado: "¿Qué utilidad de Bootstrap añade ‘margin-bottom’ de 1rem aprox.?",
        opciones: ["py-3", "mb-3", "ms-3", "mx-3"],
        correcta: 1,
        explicacion: " La correcta es mb-3 porque m significa margin, b bottom y 3 es el nivel de espaciado. py-3 aplica padding vertical; ms-3 añade margen al inicio; y mx-3 aplica margen horizontal."
    },
    {
        enunciado: "En Grid, ¿qué hace auto-fit en repeat()?",
        opciones: [
            "Rellena con un solo track",
            "Rellena columnas pero no colapsa vacíos",
            "No cambia nada",
            "Rellena con el mayor nº de tracks que quepan, colapsando huecos"
        ],
        correcta: 3,
        explicacion: " La correcta es Rellena con el mayor nº de tracks que quepan, colapsando huecos porque auto-fit intenta meter tantas columnas como sea posible y colapsa las vacías. La opción de no colapsar huecos describe mejor auto-fill; y las otras dos no explican su comportamiento real."
    },
    {
        enunciado: "¿Qué atributo abre un enlace en una nueva pestaña?",
        opciones: ["rel", "download", "referrerpolicy", 'target="_blank"'],
        correcta: 3,
        explicacion: " La correcta es target=\"_blank\" porque ese valor hace que el enlace se abra en una nueva pestaña o ventana. rel define relación del enlace; download sugiere descarga; y referrerpolicy controla el envío del referrer."
    },
    {
        enunciado: "¿Qué propiedad controla la prioridad de apilamiento?",
        opciones: ["position", "z-index", "opacity", "filter"],
        correcta: 1,
        explicacion: " La correcta es z-index porque controla qué elemento queda por delante o por detrás en el apilamiento visual. position influye en si z-index puede aplicarse de forma útil, pero no define por sí sola la prioridad; opacity controla transparencia; y filter aplica efectos visuales."
    },
    {
        enunciado: "En Bootstrap 5, ¿qué clase crea una fila del grid?",
        opciones: [".container", ".col", ".row", ".gx-3"],
        correcta: 2,
        explicacion: " La correcta es .row porque esa clase crea una fila dentro del sistema de rejilla de Bootstrap. .container es el contenedor general; .col representa columnas; y .gx-3 ajusta separación horizontal, no crea la fila."
    },
    {
        enunciado: "¿Qué combinador selecciona hijos directos?",
        opciones: ["div p", "div+p", "div>p", "div~p"],
        correcta: 2,
        explicacion: " La correcta es div>p porque el combinador > selecciona hijos directos. div p selecciona descendientes en cualquier nivel; div+p selecciona el hermano adyacente; y div~p selecciona hermanos posteriores."
    },
    {
        enunciado: "En XML, ¿qué es obligatorio respecto a etiquetas?",
        opciones: [
            "Deben anidarse y cerrarse correctamente",
            "Deben llevar atributo id",
            "Deben ir en mayúsculas",
            "Deben llevar xmlns por defecto"
        ],
        correcta: 0,
        explicacion: " La correcta es Deben anidarse y cerrarse correctamente porque ese es un requisito básico para que el XML esté bien formado. No es obligatorio que tengan id; no tienen que ir en mayúsculas; y xmlns solo es necesario cuando se usan espacios de nombres."
    },
    {
        enunciado: "¿Qué elemento marca abreviaturas con explicación en título?",
        opciones: ["<abbr>", "<cite>", "<dfn>", "<small>"],
        correcta: 0,
        explicacion: " La correcta es <abbr> porque se usa para abreviaturas y puede llevar un title con la explicación completa. <cite> se usa para referencias o títulos de obras; <dfn> marca la definición de un término; y <small> solo indica texto secundario o más pequeño."
    },
    {
        enunciado: "¿Qué valor de justify-content deja espacio uniforme entre ítems, sin márgenes en extremos?",
        opciones: ["flex-start", "space-around", "space-between", "space-evenly"],
        correcta: 2,
        explicacion: " La correcta es space-between porque reparte el espacio entre los ítems dejando los extremos pegados a los bordes, sin hueco exterior. flex-start los agrupa al inicio; space-around deja espacio también en extremos, aunque menor; y space-evenly reparte incluso el espacio exterior."
    },
    {
        enunciado: "Componente de Bootstrap 5 para panel deslizante colapsable lateral",
        opciones: ["Modal", "Carousel", "Popover", "Offcanvas"],
        correcta: 3,
        explicacion: " La correcta es Offcanvas porque ese componente crea un panel lateral o deslizante que puede mostrarse y ocultarse. Modal es una ventana emergente centrada; Carousel sirve para carruseles; y Popover muestra pequeñas cajas informativas."
    },
    {
        enunciado: "¿Qué atributo ARIA proporciona etiqueta accesible a elementos sin texto visible?",
        opciones: ["role", "aria-label", "aria-hidden", "tabindex"],
        correcta: 1,
        explicacion: " La correcta es aria-label porque permite dar una etiqueta accesible a elementos que no muestran texto visible. role define el tipo de elemento para accesibilidad; aria-hidden lo oculta a tecnologías de asistencia; y tabindex controla la navegación por teclado."
    },

    {
        enunciado: "¿Cuál es la unidad fraccionaria en Grid?",
        opciones: ["px", "%", "fr", "em"],
        correcta: 2,
        explicacion: " La correcta es fr porque es la unidad propia de CSS Grid para repartir el espacio disponible en fracciones dentro del contenedor; px es una medida fija, % depende del tamaño del contenedor y em depende del tamaño de la fuente."
    },
    {
        enunciado: "¿Qué propiedad activa Flexbox?",
        opciones: ["flex: 1", "display: flex", "display: block", "flex-direction"],
        correcta: 1,
        explicacion: " La correcta es display: flex porque esa propiedad convierte el elemento en un contenedor Flexbox. flex: 1 se aplica normalmente a ítems flex, no activa el modelo; display: block es un comportamiento de bloque normal; y flex-direction ajusta la dirección una vez que Flexbox ya está activado."
    },
    {
        enunciado: "¿Qué define la dirección en Flexbox?",
        opciones: ["flex-grow", "justify-content", "flex-direction", "display"],
        correcta: 2,
        explicacion: " La correcta es flex-direction porque esta propiedad define la dirección principal en la que se colocan los elementos flex, por ejemplo en fila o en columna. justify-content solo alinea los elementos dentro de esa dirección ya definida, flex-grow controla cuánto puede crecer un elemento y display se usa para activar Flexbox con display: flex, pero no para indicar la dirección."
    },
    {
        enunciado: "¿Qué significa XML?",
        opciones: ["Extended Markup List", "Extra Modern Language", "eXtensible Markup Language", "X-Mark Logic"],
        correcta: 2,
        explicacion: " La correcta es eXtensible Markup Language porque ese es el nombre real de XML. Las demás opciones alteran palabras o inventan términos que no corresponden a las siglas correctas."
    },

    {
        enunciado: "¿Para qué sirve un DTD?",
        opciones: ["Dar estilo", "Validar XML", "Comprimir", "Convertir a JSON"],
        correcta: 1,
        explicacion: " La correcta es Validar XML porque un DTD define qué estructura, elementos y atributos son válidos en un documento XML. No sirve para dar estilo, eso sería más propio de CSS o XSL; ni para comprimir; ni para convertir a JSON."
    },
    {
        enunciado: "¿Archivo para transformar XML?",
        opciones: ["HTML", "CSS", "XSL", "JSON"],
        correcta: 2,
        explicacion: " La correcta es XSL porque los archivos XSL, especialmente usando XSLT, se emplean para transformar XML a otros formatos. HTML es un lenguaje de marcado para páginas; CSS define estilos; y JSON es otro formato de datos, no la hoja de transformación."
    },
    {
        enunciado: "Significado de XSLT",
        opciones: ["XML Standard", "X Stylesheet Transformations", "Extensible Language Transformations", "X-Mark Template"],
        correcta: 2,
        explicacion: " La correcta es Extensible Language Transformations porque, entre las opciones dadas, es la que más se aproxima al significado esperado en clase de XSLT; aunque el nombre exacto completo es Extensible Stylesheet Language Transformations. Las otras opciones son claramente incorrectas o están demasiado incompletas."
    },
    {
        enunciado: "Clase fila en BS5",
        opciones: ["col", "row", "line", "grid"],
        correcta: 1,
        explicacion: " La correcta es row porque en Bootstrap 5 esa clase crea una fila del sistema grid. col se usa para columnas; y line y grid no son la clase estándar para crear una fila."
    },
    {
        enunciado: "Prefijo para columnas en BS5",
        opciones: ["row-", "col-", "grid-", "bs-"],
        correcta: 1,
        explicacion: " La correcta es col- porque ese es el prefijo de Bootstrap 5 para definir columnas, como col-6 o col-md-4. row- corresponde a filas en otros usos, y grid- o bs- no son el prefijo estándar para las columnas del sistema grid."
    },

    {
        enunciado: "Versión indicada de Bootstrap",
        opciones: ["3", "4", "5", "2"],
        correcta: 2,
        explicacion: " La correcta es 5 porque, entre esas opciones, es la versión de Bootstrap indicada en este temario. 3 y 4 son versiones anteriores; y 2 es todavía más antigua. La pregunta no pide la versión más reciente absoluta, sino la versión indicada o trabajada aquí."
    },

    {
        enunciado: "Etiqueta XSLT value-of",
        opciones: ["xsl:read", "xsl:choose", "xsl:value-of", "xsl:select"],
        correcta: 2,
        explicacion: " La correcta es xsl:value-of porque esa instrucción de XSLT se usa para extraer y mostrar el valor de un nodo XML. xsl:choose sirve para decisiones condicionales; y xsl:read y xsl:select no son etiquetas estándar válidas con esa función."
    },

    {
        enunciado: "Unidad NO común en Grid",
        opciones: ["fr", "px", "cm", "%"],
        correcta: 2,
        explicacion: " La correcta es cm porque no es una unidad común en maquetación web con CSS Grid, aunque CSS la permita. fr es propia de Grid y muy habitual; px también se usa mucho; y % es frecuente para tamaños relativos."
    },

    {
        enunciado: "Propiedad de filas en Grid",
        opciones: ["grid-template-columns", "grid-template-rows", "grid-rows", "rows-size"],
        correcta: 1,
        explicacion: " La correcta es grid-template-rows porque esa propiedad define las filas del contenedor Grid. grid-template-columns define columnas; y grid-rows y rows-size no son propiedades estándar válidas de CSS Grid."
    },
    {
        enunciado: "Alinear columnas en Grid",
        opciones: ["justify-items", "align-content", "items-center", "grid-align"],
        correcta: 0,
        explicacion: " La correcta es justify-items porque en Grid se usa para alinear los ítems dentro de sus celdas en el eje inline, normalmente horizontal. align-content actúa sobre el conjunto de la cuadrícula cuando sobra espacio; y items-center y grid-align no son propiedades CSS estándar."
    },
    {
        enunciado: "Crecimiento en Flexbox",
        opciones: ["flex-grow", "flex-direction", "order", "width"],
        correcta: 0,
        explicacion: " La correcta es flex-grow porque controla cuánto puede crecer un ítem flex respecto a los demás cuando hay espacio disponible. flex-direction define la dirección del contenedor; order cambia el orden visual; y width fija un ancho, pero no expresa el reparto flexible del crecimiento."
    },
    {
        enunciado: "Espacio entre ítems Flex",
        opciones: ["center", "space-between", "space-around", "flex-start"],
        correcta: 1,
        explicacion: " La correcta es space-between porque reparte el espacio entre los ítems dejando el primero y el último pegados a los extremos. center los agrupa en el centro; space-around deja espacio también en los extremos; y flex-start los coloca al inicio sin repartir huecos entre ellos."
    },
    {
        enunciado: "Ventaja Flexbox",
        opciones: ["Bidimensional", "Tablas", "Flexible en una dimensión", "Reemplaza Grid"],
        correcta: 2,
        explicacion: " La correcta es Flexible en una dimensión porque Flexbox está pensado para trabajar principalmente en una sola dirección: fila o columna. Bidimensional describe mejor a Grid; no tiene relación con tablas; y no reemplaza a Grid, ya que ambos se complementan."
    },
    {
        enunciado: "Característica XML",
        opciones: ["Etiquetas fijas", "Orden no importa", "Etiquetas definidas por el usuario", "Sin atributos"],
        correcta: 2,
        explicacion: " La correcta es Etiquetas definidas por el usuario porque XML permite crear etiquetas personalizadas según las necesidades de los datos. No usa etiquetas fijas como HTML; el orden sí puede importar según la estructura; y XML sí permite atributos."
    },
    {
        enunciado: "Documento que define reglas XML",
        opciones: ["CSS", "JSON", "DTD", "HTML"],
        correcta: 2,
        explicacion: " La correcta es DTD porque un DTD (Document Type Definition) define reglas de estructura y validación para un XML. CSS sirve para estilos; JSON es otro formato de datos; y HTML no define reglas de validación para documentos XML."
    },
    {
        enunciado: "Comentarios XML",
        opciones: ["//", "<!-- -->", "##", "/**/"],
        correcta: 1,
        explicacion: " La correcta es <!-- --> porque esa es la sintaxis estándar de comentarios en XML. // se usa en otros lenguajes; ## no es sintaxis válida; y /**/ es típico de comentarios en lenguajes como CSS o JavaScript, no de XML."
    },
    {
        enunciado: "Lenguaje para transformar XML",
        opciones: ["XQuery", "HTML", "XSLT", "JSON"],
        correcta: 2,
        explicacion: " La correcta es XSLT porque es el lenguaje específico para transformar documentos XML en otros formatos, como HTML, texto u otro XML. XQuery se centra más en consultar datos XML; HTML no transforma XML; y JSON es un formato de datos."
    },
    {
        enunciado: "Contenedor ancho completo BS5",
        opciones: ["container", "container-fluid", "container-max", "container-full"],
        correcta: 1,
        explicacion: " La correcta es container-fluid porque ocupa todo el ancho disponible de la ventana. container tiene ancho máximo adaptable; y container-max y container-full no son clases estándar de Bootstrap 5."
    },
    {
        enunciado: "Negrita en BS5",
        opciones: ["text-bold", "fw-bold", "strong", "bold"],
        correcta: 1,
        explicacion: " La correcta es fw-bold porque en Bootstrap 5 fw significa font-weight y bold aplica negrita. text-bold y bold no son utilidades estándar de Bootstrap; y strong es una etiqueta HTML, no una clase de Bootstrap."
    },
    {
        enunciado: "Padding BS5",
        opciones: ["m-3", "pr-3", "p-3", "padding-3"],
        correcta: 2,
        explicacion: " La correcta es p-3 porque en Bootstrap 5 p significa padding y 3 indica el nivel de espaciado. m-3 es margin; pr-3 era una forma de versiones anteriores y no la utilidad principal esperada en BS5; y padding-3 no es una clase estándar."
    },
    {
        enunciado: "Auto colocación Grid",
        opciones: ["grid-template", "grid-auto-flow", "auto-justify", "grid-repeat"],
        correcta: 1,
        explicacion: " La correcta es grid-auto-flow porque controla cómo se colocan automáticamente los ítems en Grid cuando no se define su posición exacta. grid-template se usa para definir estructura; y auto-justify y grid-repeat no son propiedades CSS estándar."
    },
    {
        enunciado: "Alinear vertical en Flex",
        opciones: ["start", "stretch", "center", "baseline"],
        correcta: 2,
        explicacion: " La correcta es center porque, en el contexto típico de alineación vertical en Flexbox con align-items, center centra los ítems en el eje cruzado. start los lleva al inicio; stretch los estira; y baseline los alinea por la línea base del texto."
    },
    {
        enunciado: "Documento validar XML",
        opciones: ["HTML-Schema", "XML-Schema", "JSON-Schema", "XLS-Schema"],
        correcta: 1,
        explicacion: " La correcta es XML-Schema porque XML Schema, también conocido como XSD, se usa para validar la estructura y tipos de datos de un XML. HTML-Schema y XLS-Schema no son estándares correctos aquí; y JSON-Schema es para JSON, no para XML."
    },
    {
        enunciado: "Salida HTML en XSLT",
        opciones: ["xsl:xml", "xsl:template", "xsl:output method='html'", "html-output"],
        correcta: 2,
        explicacion: " La correcta es xsl:output method='html' porque esa instrucción indica que la salida de la transformación XSLT debe generarse como HTML. xsl:template define plantillas; y xsl:xml o html-output no son la sintaxis correcta para establecer ese método de salida."
    },
    {
        enunciado: "Declarar elemento DTD",
        opciones: ["ENTITY", "ELEMENT", "DOCTYPE", "TAG"],
        correcta: 1,
        explicacion: " La correcta es ELEMENT porque en un DTD se usa <!ELEMENT ...> para declarar elementos. ENTITY se usa para entidades; DOCTYPE declara el tipo de documento y referencia al DTD; y TAG no es la palabra clave estándar del DTD para declarar elementos."
    },
    {
        enunciado: "Centrar texto BS5",
        opciones: ["text-center", "align-center", "center-text", "text-middle"],
        correcta: 0,
        explicacion: " La correcta es text-center porque esa es la utilidad estándar de Bootstrap 5 para centrar texto. align-center, center-text y text-middle no son las clases estándar esperadas para ese propósito."
    },
    {
        enunciado: "Recorrer nodos XSLT",
        opciones: ["xsl:loop", "xsl:for-each", "xsl:cycle", "xsl:repeat"],
        correcta: 1,
        explicacion: " La correcta es xsl:for-each porque se usa en XSLT para recorrer un conjunto de nodos seleccionados. xsl:loop, xsl:cycle y xsl:repeat no son instrucciones estándar válidas de XSLT para esta función."
    },
    {
        enunciado: "Espaciado Grid",
        opciones: ["padding", "margin", "gap", "spacing"],
        correcta: 2,
        explicacion: " La correcta es gap porque define la separación entre filas y columnas en Grid. padding añade espacio interior al contenedor; margin controla espacio exterior del elemento; y spacing no es una propiedad CSS estándar."
    },
    {
        enunciado: "flex-wrap permite",
        opciones: ["no-wrap y wrap", "fold y no-fold", "overflow y overflow-auto", "wrapping y no-wrapping"],
        correcta: 0,
        explicacion: " La correcta es no-wrap y wrap porque flex-wrap controla si los ítems flex saltan a otra línea o no. fold y no-fold no son valores CSS válidos; overflow y overflow-auto pertenecen a otra propiedad; y wrapping/no-wrapping tampoco son los valores estándar."
    },
    {
        enunciado: "Ventaja XML",
        opciones: ["Tipado estricto", "Solo texto", "Independiente plataforma", "Sin validación"],
        correcta: 2,
        explicacion: " La correcta es Independiente plataforma porque XML puede usarse e interpretarse en sistemas y entornos muy distintos. Tipado estricto no es su ventaja principal general; solo texto no resume bien su ventaja; y sin validación es falso, porque XML puede validarse."
    },
    {
        enunciado: "Botón rojo BS5",
        opciones: ["btn-danger", "btn-red", "btn-alert", "btn-error"],
        correcta: 0,
        explicacion: " La correcta es btn-danger porque esa es la clase estándar de Bootstrap 5 para el botón de color rojo o de acción peligrosa. btn-red, btn-alert y btn-error no son utilidades estándar de Bootstrap."
    },
    {
        enunciado: "Validar DTD",
        opciones: ["Navegador", "Parser XML", "PowerPoint", "Photoshop"],
        correcta: 1,
        explicacion: " La correcta es Parser XML porque la validación contra un DTD la realiza un procesador o parser XML. Un navegador puede mostrar XML, pero no es la respuesta técnica principal aquí; y PowerPoint o Photoshop no cumplen esa función."
    },
    {
        enunciado: "Propiedad NO Flex",
        opciones: ["flex-grow", "flex-shrink", "flex-align", "flex-basis"],
        correcta: 2,
        explicacion: " La correcta es flex-align porque no es una propiedad estándar de Flexbox. flex-grow, flex-shrink y flex-basis sí forman parte del modelo flex para controlar crecimiento, reducción y tamaño base."
    },
    {
        enunciado: "Track Grid",
        opciones: ["pack", "cell", "track", "zone"],
        correcta: 2,
        explicacion: " La correcta es track porque en CSS Grid un track es cada fila o columna de la cuadrícula. cell se refiere más a una celda concreta; y pack o zone no son los términos técnicos estándar de Grid."
    },
    {
        enunciado: "Copiar nodo XSLT",
        opciones: ["xsl:copy", "xsl:get", "xsl:value", "xsl:take"],
        correcta: 0,
        explicacion: " La correcta es xsl:copy porque esa instrucción de XSLT permite copiar un nodo actual al resultado. xsl:get, xsl:value y xsl:take no son etiquetas estándar válidas para copiar nodos."
    },
    {
        enunciado: "Tipo de archivo XML",
        opciones: ["binario", "solo lectura", "texto", "ejecutable"],
        correcta: 2,
        explicacion: " La correcta es texto porque un archivo XML es un archivo de texto estructurado mediante etiquetas. No es un binario; no tiene por qué ser solo lectura; y no es un archivo ejecutable."
    },
    {
        enunciado: "Prefijo XSLT",
        opciones: ["xslt:", "xsl:", "xs:", "xt:"],
        correcta: 1,
        explicacion: " La correcta es xsl: porque ese es el prefijo habitual usado en elementos de XSLT, como xsl:template o xsl:value-of. xs: suele aparecer más en esquemas XSD; y xslt: o xt: no son el prefijo estándar normal."
    },
    {
        enunciado: "Visibilidad BS5 en pantalla grande",
        opciones: ["d-lg-block", "show-lg", "lg-visible", "visible-5"],
        correcta: 0,
        explicacion: " La correcta es d-lg-block porque esa utilidad de Bootstrap 5 hace que el elemento se muestre como block a partir del breakpoint lg. show-lg, lg-visible y visible-5 no son clases estándar de Bootstrap para controlar visibilidad."
    },

    {
        enunciado: "Columnas que ocupa un ítem Grid",
        opciones: ["grid-area", "grid-column", "grid-index", "column-span"],
        correcta: 1,
        explicacion: " La correcta es grid-column porque esa propiedad permite indicar en qué columnas se coloca o cuánto abarca un ítem Grid. grid-area puede definir un área más completa, pero la opción específica de columnas es grid-column; y grid-index o column-span no son las propiedades estándar esperadas aquí."
    },
    {
        enunciado: "Patrón repetido Grid",
        opciones: ["repeat", "loop", "cycle", "grid"],
        correcta: 0,
        explicacion: " La correcta es repeat porque esa función de CSS Grid permite repetir pistas o valores, por ejemplo repeat(3, 1fr). loop, cycle y grid no son funciones estándar válidas para ese propósito."
    },
    {
        enunciado: "Reducción en Flexbox",
        opciones: ["flex-grow", "flex-shrink", "flex-size", "flex-flow"],
        correcta: 1,
        explicacion: " La correcta es flex-shrink porque controla cuánto puede encogerse un ítem flex si falta espacio. flex-grow controla crecimiento; flex-flow combina direction y wrap; y flex-size no es una propiedad estándar de Flexbox."
    },
    {
        enunciado: "align-content espacio vertical",
        opciones: ["stretch", "center", "space-between", "flex-end"],
        correcta: 2,
        explicacion: " La correcta es space-between porque, entre esos valores, reparte el espacio disponible entre líneas en el eje cruzado dejando separación interna. stretch estira; center centra; y flex-end lleva el contenido al final. Aquí se pregunta por el valor que reparte espacio vertical."
    },
    {
        enunciado: "justify-items center Grid",
        opciones: ["start", "center", "around", "auto"],
        correcta: 1,
        explicacion: " La correcta es center porque ese valor centra los ítems dentro de sus celdas en Grid cuando se usa justify-items. start los alinea al inicio; around no es un valor estándar de justify-items; y auto no es la opción típica correcta aquí."
    },
    {
        enunciado: "XML distingue mayúsculas",
        opciones: ["no", "sí", "solo mayúsculas", "solo minúsculas"],
        correcta: 1,
        explicacion: " La correcta es sí porque XML distingue entre mayúsculas y minúsculas, así que <Libro> y <libro> no son la misma etiqueta. Por eso no puede decirse que no distinga, ni que obligue solo a usar mayúsculas o solo minúsculas."
    },
    {
        enunciado: "Etiqueta XML sin cerrar",
        opciones: ["nada", "válido", "mal formado", "corregido auto"],
        correcta: 2,
        explicacion: " La correcta es mal formado porque en XML todas las etiquetas deben cerrarse correctamente o autocerrarse con la sintaxis adecuada. No sigue siendo válido; no se corrige automáticamente por norma; y desde luego no ocurre 'nada', porque rompe la buena formación del documento."
    },
    {
        enunciado: "Aplicar plantillas XSLT",
        opciones: ["xsl:templates", "xsl:apply-template", "xsl:tem plates-apply", "xsl:template-call"],
        correcta: 1,
        explicacion: " La correcta es xsl:apply-template porque, tal como está planteada la pregunta, esa es la opción que intenta representar la instrucción usada para aplicar plantillas en XSLT; la forma exacta estándar es xsl:apply-templates. xsl:templates no es la etiqueta correcta; xsl:tem plates-apply no existe; y xsl:template-call tampoco es la instrucción estándar de XSLT."
    },
    {
        enunciado: "DTD interno",
        opciones: ["DTD", "DOCTYPE", "definition", "XML-DTD"],
        correcta: 1,
        explicacion: " La correcta es DOCTYPE porque un DTD interno se declara dentro de la propia declaración <!DOCTYPE ...> del documento XML. DTD es el concepto general, pero no la palabra concreta que se usa para declararlo dentro del archivo; y definition o XML-DTD no son la sintaxis estándar."
    },
    {
        enunciado: "Texto verde BS5",
        opciones: ["text-success", "text-green", "text-ok", "text-positive"],
        correcta: 0,
        explicacion: " La correcta es text-success porque esa es la clase estándar de Bootstrap 5 para aplicar el color asociado al estado de éxito, normalmente verde. text-green, text-ok y text-positive no son utilidades estándar de Bootstrap."
    },
    {
        enunciado: "Mostrar como bloque BS5",
        opciones: ["d-block", "block", "show-block", "display-b"],
        correcta: 0,
        explicacion: " La correcta es d-block porque esa es la utilidad de Bootstrap 5 para mostrar un elemento como block. block, show-block y display-b no son clases estándar de Bootstrap para ese comportamiento."
    },
    {
        enunciado: "Ocultar elemento en BS5",
        opciones: ["invisible", "hide", "d-none", "d-hide"],
        correcta: 2,
        explicacion: " La correcta es d-none porque esa utilidad de Bootstrap 5 oculta completamente el elemento, haciendo que no se muestre ni ocupe espacio. invisible lo vuelve invisible, pero sigue ocupando espacio; y hide y d-hide no son las clases estándar esperadas aquí."
    },
    {
        enunciado: "minmax en Grid",
        opciones: ["minmax", "fit", "auto-size", "mincol"],
        correcta: 0,
        explicacion: " La correcta es minmax porque esa es la función real de CSS Grid que permite definir un tamaño mínimo y máximo para una pista, por ejemplo minmax(200px, 1fr). fit, auto-size y mincol no son la función estándar equivalente."
    },
    {
        enunciado: "Columna invertida Flex",
        opciones: ["column", "column-reverse", "row", "row-reverse"],
        correcta: 1,
        explicacion: " La correcta es column-reverse porque ese valor de flex-direction coloca los elementos en columna, pero en orden inverso. column los coloca en columna normal; row en fila; y row-reverse invierte una fila, no una columna."
    },
    {
        enunciado: "XSD permite",
        opciones: ["estilos", "validar con tipos", "transformar", "traducir"],
        correcta: 1,
        explicacion: " La correcta es validar con tipos porque XSD (XML Schema Definition) permite validar un XML y además definir tipos de datos, restricciones y estructura. No sirve para estilos, que sería más propio de CSS o XSL; ni para transformar, que sería XSLT; ni para traducir contenidos."
    },
    {
        enunciado: "XPath en XSLT",
        opciones: ["path", "select", "route", "query"],
        correcta: 1,
        explicacion: " La correcta es select porque en XSLT las expresiones XPath suelen usarse dentro del atributo select para elegir nodos o valores. path, route y query pueden sonar relacionadas, pero no son el atributo estándar que se usa en ese contexto."
    },
    {
        enunciado: "Declarar atributo DTD",
        opciones: ["ATTR", "DEFINE", "ATTLIST", "ATTRIBUTE"],
        correcta: 2,
        explicacion: " La correcta es ATTLIST porque en un DTD se usa <!ATTLIST ...> para declarar atributos de un elemento. ATTR, DEFINE y ATTRIBUTE no son las palabras clave estándar correctas para esa declaración."
    },
    {
        enunciado: "Cursiva en BS5",
        opciones: ["italic", "text-italic", "fst-italic", "font-italic"],
        correcta: 2,
        explicacion: " La correcta es fst-italic porque en Bootstrap 5 fst significa font-style y ese valor aplica cursiva. italic, text-italic y font-italic no son las utilidades estándar esperadas en Bootstrap 5."
    },
    {
        enunciado: "Alineación vertical Grid",
        opciones: ["align-content", "justify-items", "center-items", "grid-vertical"],
        correcta: 0,
        explicacion: " La correcta es align-content porque, entre las opciones dadas, es la propiedad real de Grid relacionada con la alineación en el eje de bloque o vertical del conjunto de pistas cuando sobra espacio. justify-items alinea en el eje horizontal dentro de las celdas; y center-items y grid-vertical no son propiedades CSS estándar."
    },
    {
        enunciado: "flex-direction por defecto",
        opciones: ["row", "column", "row-reverse", "none"],
        correcta: 0,
        explicacion: " La correcta es row porque ese es el valor por defecto de flex-direction en Flexbox. column y row-reverse son otros valores posibles; y none no es un valor válido de esa propiedad."
    },
    {
        enunciado: "Etiqueta XML válida",
        opciones: ["sin atributos", "sin espacios", "bien anidada", "vacía siempre"],
        correcta: 2,
        explicacion: " La correcta es bien anidada porque un requisito clave de XML es que las etiquetas estén correctamente abiertas, cerradas y anidadas. No tienen que ir siempre sin atributos; no tienen que estar siempre vacías; y aunque los nombres de etiqueta no pueden llevar espacios, eso no resume la idea principal de validez estructural."
    },
    {
        enunciado: "Condiciones en XSLT",
        opciones: ["xsl:choose", "xsl:if", "xsl:when", "todas"],
        correcta: 3,
        explicacion: " La correcta es todas porque en XSLT intervienen xsl:if para condiciones simples, xsl:choose para estructuras condicionales y xsl:when dentro de xsl:choose. Por eso no se limita a una sola de las tres etiquetas."
    },
    {
        enunciado: "Botón gris BS5",
        opciones: ["btn-gray", "btn-secondary", "btn-neutral", "btn-default"],
        correcta: 1,
        explicacion: " La correcta es btn-secondary porque esa es la clase estándar de Bootstrap 5 para el botón secundario, que suele verse en gris. btn-gray, btn-neutral y btn-default no son las clases estándar esperadas en Bootstrap 5."
    },
    {
        enunciado: "Fusionar filas Grid",
        opciones: ["grid-span", "grid-row", "row-span", "grid-join"],
        correcta: 1,
        explicacion: " La correcta es grid-row porque esa propiedad permite indicar qué filas ocupa un ítem en CSS Grid, pudiendo abarcar varias. grid-span, row-span y grid-join no son las propiedades estándar válidas para esta función."
    },
    {
        enunciado: "flex-wrap controla",
        opciones: ["si saltan línea", "dirección", "orden", "display"],
        correcta: 0,
        explicacion: " La correcta es si saltan línea porque flex-wrap controla si los ítems flex pueden pasar a otra línea o deben quedarse en una sola. La dirección la define flex-direction; el orden visual se cambia con order; y display activa el modelo flex, pero no controla el salto de línea."
    },
    {
        enunciado: "XML no válido",
        opciones: ["personalizado", "con comillas", "etiquetas cruzadas", "comentarios"],
        correcta: 2,
        explicacion: " La correcta es etiquetas cruzadas porque un XML con etiquetas mal anidadas o cruzadas está mal formado. Que sea personalizado no lo invalida; usar comillas en atributos es normal; y los comentarios están permitidos."
    },
    {
        enunciado: "Salida XSLT",
        opciones: ["HTML", "Texto", "XML", "todas"],
        correcta: 3,
        explicacion: " La correcta es todas porque una transformación XSLT puede generar salida en XML, HTML o texto, según se configure. Por eso no se limita a una sola de esas opciones."
    },
    {
        enunciado: "Separación vertical BS5",
        opciones: ["gy-*", "px-*", "gv-*", "space-y"],
        correcta: 0,
        explicacion: " La correcta es gy-* porque en Bootstrap 5 g controla gutters y y indica el eje vertical, así que gy-* ajusta la separación vertical entre columnas o filas del grid. px-* afecta al padding horizontal; gv-* no es una clase estándar; y space-y no es la utilidad típica de Bootstrap."
    },
    {
        enunciado: "Orden Flex",
        opciones: ["order", "sort", "flex-index", "priority"],
        correcta: 0,
        explicacion: " La correcta es order porque esa propiedad de Flexbox permite cambiar el orden visual de los ítems. sort, flex-index y priority no son propiedades estándar válidas de Flexbox para esta función."
    },
    {
        enunciado: "Alineación vertical de una celda en Grid",
        opciones: ["align-items", "align-self", "align-cells", "grid-align"],
        correcta: 1,
        explicacion: " La correcta es align-self porque esa propiedad permite alinear individualmente un ítem dentro de su celda en el eje vertical o cruzado. align-items actúa sobre todos los ítems del contenedor; y align-cells y grid-align no son propiedades CSS estándar."
    },
    {
        enunciado: "¿Qué significa JS?",
        opciones: ["JavaStarter", "JavaScript", "JustScript", "JumpScript"],
        correcta: 1,
        explicacion: " La correcta es JavaScript porque JS es la abreviatura habitual de ese lenguaje. Las demás opciones inventan nombres que no corresponden a las siglas reales."
    },
    {
        enunciado: "¿Cómo se escribe un mensaje en consola?",
        opciones: ["print()", "log()", "console.log()", "alert()"],
        correcta: 2,
        explicacion: " La correcta es console.log() porque esa es la forma habitual en JavaScript de escribir mensajes en la consola del navegador. print() no es la función estándar para eso; log() sola no funciona así en este contexto; y alert() muestra una ventana emergente, no escribe en consola."
    },
    {
        enunciado: "¿Cuál es el símbolo para comentarios de una línea?",
        opciones: ["<!-- -->", "//", "/* */", "##"],
        correcta: 1,
        explicacion: " La correcta es // porque en JavaScript ese símbolo se usa para comentarios de una sola línea. <!-- --> es sintaxis de comentarios HTML/XML; /* */ sirve para varias líneas; y ## no es la sintaxis estándar en JavaScript."
    },
    {
        enunciado: "¿Cómo se declara una variable en JavaScript?",
        opciones: ["var", "int", "let", "var y let"],
        correcta: 3,
        explicacion: " La correcta es var y let porque ambas palabras clave pueden usarse para declarar variables en JavaScript. int no es la palabra clave general para declarar variables; y aunque hoy let suele ser preferible a var, la pregunta pide cuáles sirven para declararlas."
    },
    {
        enunciado: "¿Cuál muestra un mensaje emergente?",
        opciones: ["alert()", "msg()", "popup()", "window.show()"],
        correcta: 0,
        explicacion: " La correcta es alert() porque esa función de JavaScript muestra una ventana emergente con un mensaje. msg(), popup() y window.show() no son las funciones estándar esperadas para esta tarea."
    },
    {
        enunciado: "¿Qué tipo de lenguaje es JavaScript?",
        opciones: ["Estático", "Dinámico", "Compilado", "Solo backend"],
        correcta: 1,
        explicacion: " La correcta es Dinámico porque JavaScript permite tipado dinámico y no obliga a declarar tipos fijos como otros lenguajes estáticos. No es solo backend, ya que se usa muchísimo en frontend; y aunque hoy pueda compilarse o transpilarse en algunos contextos, no se clasifica aquí simplemente como compilado."
    },
    {
        enunciado: "¿Cómo se escribe una función básica? (rebuscada)",
        opciones: ["function miFuncion() {}", "func miFuncion()", "def miFuncion()", "run miFuncion()"],
        correcta: 0,
        explicacion: " La correcta es function miFuncion() {} porque esa es la sintaxis básica clásica para declarar una función en JavaScript. func se usa en otros lenguajes; def es propio de Python; y run miFuncion() no es una declaración válida de función."
    },
    {
        enunciado: "¿Qué operador se usa para sumar?",
        opciones: ["+", "-", "*", "/"],
        correcta: 0,
        explicacion: " La correcta es + porque ese operador se usa para sumar en JavaScript. - resta, * multiplica y / divide."
    },
    {
        enunciado: "¿Qué devuelve typeof 123?",
        opciones: ["int", "integer", "number", "numeric"],
        correcta: 2,
        explicacion: " La correcta es number porque typeof en JavaScript devuelve 'number' para valores numéricos como 123. int e integer no son los valores de retorno de typeof; y numeric tampoco es la cadena estándar."
    },
    {
        enunciado: "¿Cuál es un tipo de dato en JS?",
        opciones: ["string", "cadena", "text", "word"],
        correcta: 0,
        explicacion: " La correcta es string porque ese es uno de los tipos de dato de JavaScript. cadena describe el concepto en español, pero no es el nombre del tipo en JS; y text o word no son tipos de dato estándar del lenguaje."
    },
    {
        enunciado: "¿Cómo se escribe un array? (no temario)",
        opciones: ["{}", "[]", "<>", "()"],
        correcta: 1,
        explicacion: " La correcta es [] porque en JavaScript los arrays se escriben entre corchetes. {} se usa para objetos; () para agrupación o parámetros; y <> no es la sintaxis de array."
    },
    {
        enunciado: "¿Qué método cuenta elementos de un array? (no temario)",
        opciones: [".size", ".count", ".length", ".items"],
        correcta: 2,
        explicacion: " La correcta es .length porque esa propiedad indica cuántos elementos tiene un array en JavaScript. .size, .count y .items no son la propiedad estándar del array para este fin."
    },
    {
        enunciado: "¿Cómo se convierte un número a string? (rebuscada)",
        opciones: ["toString()", "toStr()", "string()", "makeString()"],
        correcta: 0,
        explicacion: " La correcta es toString() porque ese método convierte un valor numérico en una cadena en JavaScript. toStr() y makeString() no son métodos estándar; y string() no es la forma habitual correcta en este contexto."
    },
    {
        enunciado: "¿Qué operador compara estrictamente?",
        opciones: ["==", "!=", "===", "~="],
        correcta: 2,
        explicacion: " La correcta es === porque compara valor y tipo al mismo tiempo en JavaScript. == compara con coerción de tipos; != es desigualdad no estricta; y ~= no es el operador estándar de comparación estricta."
    },
    {
        enunciado: "¿Cómo se crea un objeto?",
        opciones: ["[]", "{}", "<>", "()"],
        correcta: 1,
        explicacion: " La correcta es {} porque en JavaScript un objeto literal se crea entre llaves. [] corresponde a arrays; () se usa para agrupación o llamadas; y <> no es una sintaxis válida de objeto."
    },
    {
        enunciado: "¿Qué método añade un elemento al final de un array? (no temario)",
        opciones: ["push()", "add()", "insert()", "append()"],
        correcta: 0,
        explicacion: " La correcta es push() porque ese método añade uno o más elementos al final de un array en JavaScript. add(), insert() y append() no son el método estándar del array para esta tarea."
    },
    {
        enunciado: "¿Qué devuelve 2 + '2'?",
        opciones: ["4", "22", "NaN", "Error"],
        correcta: 1,
        explicacion: " La correcta es 22 porque en JavaScript el operador + con una cadena provoca concatenación, convirtiendo el número a texto. No devuelve 4 porque no hace una suma numérica pura aquí; tampoco NaN; y no genera error."
    },
    {
        enunciado: "¿Qué palabra clave detiene un bucle? (no temario)", /*aparece en el temario pero la profesora dice que de JavaScript solo cae hasta las sumas, por lo tanto esta no entra*/
        opciones: ["break", "stop", "end", "halt"],
        correcta: 0,
        explicacion: " La correcta es break porque esa palabra clave interrumpe la ejecución de un bucle en JavaScript. stop, end y halt no son las palabras clave estándar para detenerlo."
    },
    {
        enunciado: "¿Qué estructura usa if? (no temario)", /*aparece en el temario pero la profesora dice que de JavaScript solo cae hasta las sumas, por lo tanto esta no entra*/
        opciones: ["if () {}", "if {}", "if [] {}", "if <> {}"],
        correcta: 0,
        explicacion: " La correcta es if () {} porque esa es la forma básica de una condición if en JavaScript: condición entre paréntesis y bloque entre llaves. Las otras formas no usan la sintaxis estándar correcta."
    },
    {
        enunciado: "¿Cómo se escribe un comentario de varias líneas?",
        opciones: ["// comentario //", "<!-- comentario -->", "/* comentario */", "** comentario **"],
        correcta: 2,
        explicacion: " La correcta es /* comentario */ porque esa es la sintaxis estándar de comentarios multilínea en JavaScript. // comentario // es para una línea; <!-- --> es de HTML/XML; y ** comentario ** no es una sintaxis válida."
    },
];