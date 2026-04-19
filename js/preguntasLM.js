const preguntasLM = [

    {
        enunciado: "¿Qué propiedad activa un contenedor Grid en CSS?",
        opciones: ["display: block", "display: inline", "display: grid", "display: table"],
        correcta: 2,
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
    },
    {
        enunciado: "¿Para qué sirve un DTD?",
        opciones: ["Validar XML", "Formatear XML", "Comprimir", "Convertir a JSON"],
        correcta: 0,
    },

    {
        enunciado: "Significado de XSLT",
        opciones: ["XML Standard Language Transforms", "Extensible Stylesheet Language Transformations", "Extensible Language Transforms", "Extensible Language Transformations"],
        correcta: 1,
    },
    {
        enunciado: "Clase de contenedor en Bootstrap 5",
        opciones: ["box", "wrap", "container", "layout"],
        correcta: 2,
    },
    {
        enunciado: "Clase fila en Bootstrap 5",
        opciones: ["col", "row", "line", "grid"],
        correcta: 1,
    },
    {
        enunciado: "Prefijo para columnas en Bootstrap 5",
        opciones: ["row-", "col-", "grid-", "bs-"],
        correcta: 1,
    },
    {
        enunciado: "Propiedad columnas en Grid",
        opciones: ["grid-template-rows", "grid-auto-flow", "grid-template-columns", "columns"],
        correcta: 2,
    },
    {
        enunciado: "justify-content en Flexbox",
        opciones: ["alinear horizontal", "alinear vertical", "cambiar dirección", "ocultar"],
        correcta: 0,
    },
    {
        enunciado: "Versión latest de Bootstrap",
        opciones: ["4.5", "4.8", "5.0", "5.3"],
        correcta: 3,
    },
    {
        enunciado: "Tipo de lenguaje XML",
        opciones: ["Programación", "Marcado", "Estilos", "Consulta"],
        correcta: 1,
    },
    {
        enunciado: "Inicio transformación XSLT",
        opciones: ["xsl:template", "xsl:transform", "xsl:main", "xsl:sheet"],
        correcta: 1,
    },
    {
        enunciado: "Atributo espacio de nombres XML",
        opciones: ["ns", "xmlns", "namespace", "xmspace"],
        correcta: 1,
    },
    {
        enunciado: "Clase margen inferior BS5",
        opciones: ["mb-3", "pb-3", "mt-3", "mg-bottom"],
        correcta: 0,
    },
    {
        enunciado: "Propósito de XSL",
        opciones: ["Validación", "Transformar XML", "Crear BD", "Comprimir archivos"],
        correcta: 1,
    },
    {
        enunciado: "align-items en Flexbox",
        opciones: ["ordenar", "alinear vertical", "cambiar dirección", "ocultar"],
        correcta: 1,
    },
    {
        enunciado: "Función repeat en Grid",
        opciones: ["repeat", "auto-grid", "loop", "grid-repeat"],
        correcta: 0,
    },
    {
        enunciado: "Extensión de archivos DTD",
        opciones: ["xml", "xls", "dtd", "doc"],
        correcta: 2,
    },
    {
        enunciado: "Etiqueta XSLT para indicar el valor de una etiqueta en XML",
        opciones: ["xsl:select", "xsl:value", "xsl:value-for", "xsl:value-of"],
        correcta: 3,
    },
    {
        enunciado: "No es ventaja de XML",
        opciones: ["Extensible", "Readable", "Comprensión excelente", "Validable"],
        correcta: 2,
    },
    {
        enunciado: "Propiedad separación en Grid",
        opciones: ["gap", "padding", "border-spacing", "spacing"],
        correcta: 0,
    },
    {
        enunciado: "Botón azul en Bootstrap 5",
        opciones: ["btn-primary", "btn-blue", "btn-default", "button-main"],
        correcta: 0,
    },
    {
        enunciado: "Dirección de columna en Flex",
        opciones: ["row", "column", "reverse", "vertical"],
        correcta: 1,
    },
    {
        enunciado: "Estructura válida XML",
        opciones: ["Atributos obligatorios", "Mayúsculas", "Bien anidado", "DTD obligatorio"],
        correcta: 2,
    },
    {
        enunciado: "Unidad NO común en Grid",
        opciones: ["fr", "px", "%", "cm"],
        correcta: 3,
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
    },
    {
        enunciado: "¿Cuál es la función principal del elemento <main>?",
        opciones: [
            "Contener el menú de navegación.",
            "Incluir contenido repetido en todas las páginas.",
            "Agrupar el contenido principal único del documento.",
            "Sustituir a <body>."
        ],
        correcta: 2,
    },
    {
        enunciado: "¿Cuántos elementos <main> debe haber por documento HTML válido?",
        opciones: ["Ninguno.", "Uno.", "Dos como máximo.", "Ilimitados."],
        correcta: 1,
    },
    {
        enunciado: "¿Qué etiqueta NO es semántica en HTML5?",
        opciones: ["<article>", "<section>", "<aside>", "<div>"],
        correcta: 3,
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
    },
    {
        enunciado: "¿Qué atributo mejora la accesibilidad de una imagen decorativa?",
        opciones: ['title=""', 'alt="" vacío', 'src=""', 'role="img"'],
        correcta: 1,
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
    },
    {
        enunciado: "¿Qué etiqueta es correcta para un menú de navegación?",
        opciones: ["<menu>", "<ul>", "<nav>", "<header>"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué etiqueta se usa para asociar un texto a un campo de formulario?",
        opciones: ["<input>", "<label>", "<fieldset>", "<legend>"],
        correcta: 1,
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
    },
    {
        enunciado: "¿Qué atributo hace obligatorio un campo de formulario?",
        opciones: ["validate", "important", "required", "mandatory"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué tipo de <input> valida automáticamente un email?",
        opciones: ["text", "mail", "email", "validate-email"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué elemento agrupa campos relacionados en un formulario?",
        opciones: ["<form>", "<group>", "<fieldset>", "<section>"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué etiqueta proporciona un título a un <fieldset>?",
        opciones: ["<title>", "<caption>", "<legend>", "<label>"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué etiqueta es más adecuada para una noticia independiente?",
        opciones: ["<section>", "<div>", "<article>", "<aside>"],
        correcta: 2,
        explicacion: "La etiqueta <article> es la más adecuada porque representa un contenido independiente y con sentido propio, como una noticia, una entrada de blog o un artículo. <section> agrupa contenido relacionado, <div> no tiene significado semántico y <aside> se usa para contenido secundario o complementario."
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
    },
    {
        enunciado: "¿Qué atributo indica el idioma del documento HTML?",
        opciones: ["charset", "lang", "language", "xml:lang"],
        correcta: 1,
    },
    {
        enunciado: '¿Dónde debe colocarse el atributo lang="es"?',
        opciones: ["En <head>", "En <body>", "En <html>", "En <meta>"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué etiqueta representa contenido autocontenido como un diagrama o imagen con pie?",
        opciones: ["<img>", "<figure>", "<aside>", "<section>"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué etiqueta define el texto descriptivo de una <figure>?",
        opciones: ["<caption>", "<description>", "<figcaption>", "<legend>"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué atributo mejora la accesibilidad indicando la finalidad de un enlace?",
        opciones: ["href", "target", "aria-label", "rel"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué valor de target abre un enlace en una nueva pestaña?",
        opciones: ["_self", "_new", "_blank", "_tab"],
        correcta: 2,
    },
    {
        enunciado: '¿Qué atributo se recomienda añadir junto a target="_blank" por seguridad?',
        opciones: ['rel="nofollow"', 'rel="noopener noreferrer"', 'rel="external"', 'rel="secure"'],
        correcta: 1,
    },
    {
        enunciado: "¿Qué etiqueta se usa para contenido de fecha/hora legible por máquinas?",
        opciones: ["<date>", "<time>", "<datetime>", "<meta>"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué atributo de <time> almacena el valor en formato máquina?",
        opciones: ["machine", "value", "datetime", "data-time"],
        correcta: 2,
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
    },

    {
        enunciado: "¿Qué significan las siglas CSS?",
        opciones: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Color Style Sheets"],
        correcta: 1,
    },
    {
        enunciado: "¿Cuál es la función principal de CSS?",
        opciones: [
            "Estructurar el contenido",
            "Programar interactividad",
            "Definir el diseño y estilo visual",
            "Gestionar bases de datos"
        ],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad cambia el color del texto?",
        opciones: ["text-color", "font-color", "color", "foreground"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad cambia el tamaño del texto?",
        opciones: ["text-size", "font-style", "font-size", "size"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué unidad es relativa al tamaño de la fuente del elemento raíz?",
        opciones: ["em", "px", "%", "rem"],
        correcta: 3,
    },
    {
        enunciado: "¿Qué unidad es relativa al tamaño de la fuente del elemento padre?",
        opciones: ["px", "rem", "em", "vh"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué selector selecciona todos los elementos <p>?",
        opciones: [".p", "#p", "p", "*p"],
        correcta: 2,
    },
    {
        enunciado: '¿Qué selector selecciona un elemento con id="menu"?',
        opciones: [".menu", "menu", "#menu", "*menú"],
        correcta: 2,
    },
    {
        enunciado: '¿Qué selector selecciona elementos con class="activo"?',
        opciones: ["#activo", ".activo", "activo", "*activo"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué propiedad controla el espacio interior de un elemento?",
        opciones: ["margin", "border", "padding", "spacing"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad controla el espacio exterior de un elemento?",
        opciones: ["padding", "border", "margin", "gap"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué pseudoclase selecciona el primer hijo?",
        opciones: [":first", "::first-child", ":first-child", ":first-of-type"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué pseudoclase selecciona un enlace cuando el ratón pasa por encima?",
        opciones: [":active", ":focus", ":hover", ":visited"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad define el color de fondo de un elemento?",
        opciones: ["background-color", "color", "bg-color", "background"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué propiedad define una imagen de fondo?",
        opciones: ["background-img", "background-image", "background-src", "image-background"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué valor evita que la imagen de fondo se repita?",
        opciones: ["repeat: none", "background-repeat: 0", "background-repeat: no-repeat", "background-image: single"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad controla la posición de la imagen de fondo?",
        opciones: ["background-align", "background-position", "background-place", "background-origin"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué valor centra una imagen de fondo horizontal y verticalmente?",
        opciones: ["center", "50%", "center center", "middle middle"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad controla el tamaño de la imagen de fondo?",
        opciones: ["background-scale", "background-size", "background-fit", "background-dimension"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué valor de background-size ajusta la imagen para cubrir todo el contenedor?",
        opciones: ["contain", "stretch", "cover", "full"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué valor de background-size muestra la imagen completa sin recortarla?",
        opciones: ["cover", "contain", "auto", "fill"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué propiedad fija el fondo al hacer scroll?",
        opciones: ["background-scroll", "background-clip", "background-attachment", "background-fixed"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué valor de background-attachment fija el fondo a la ventana?",
        opciones: ["absolute", "static", "fixed", "sticky"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad define hasta dónde se extiende el fondo?",
        opciones: ["background-origin", "background-limit", "background-clip", "background-area"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué valor de background-clip limita el fondo al área del contenido?",
        opciones: ["border-box", "padding-box", "content-box", "text-box"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad define desde dónde se empieza a dibujar el fondo?",
        opciones: ["background-clip", "background-origin", "background-start", "background-position"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué formato de color permite definir transparencia?",
        opciones: ["rgb()", "hex", "hsl()", "rgba()"],
        correcta: 3,
    },
    {
        enunciado: "¿Qué propiedad define una sombra externa?",
        opciones: ["text-shadow", "box-shadow", "shadow-box", "element-shadow"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué propiedad define sombra en texto?",
        opciones: ["font-shadow", "box-shadow", "text-shadow", "text-effect"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué propiedad define un degradado lineal?",
        opciones: ["linear-gradient()", "gradient-linear()", "background-linear()", "color-gradient()"],
        correcta: 0,
    },
    {
        enunciado: "¿Dónde se usan normalmente los gradientes?",
        opciones: ["En color", "En background o background-image", "En border", "En shadow"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué dirección crea un gradiente de arriba a abajo?",
        opciones: ["to top", "to bottom", "to right", "to left"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué gradiente crea un efecto circular?",
        opciones: ["linear-gradient()", "ellipse-gradient()", "radial-gradient()", "circle-gradient()"],
        correcta: 2,
    },

    {
        enunciado: "¿Qué etiqueta semántica delimita la navegación principal?",
        opciones: ["<section>", "<article>", "<aside>", "<nav>"],
        correcta: 3,
    },
    {
        enunciado: "¿Qué selector tiene mayor especificidad?",
        opciones: ["*", ".item", "#id", "p"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué atributo aporta texto alternativo a <img>?",
        opciones: ["alt", "title", "src", "aria-label"],
        correcta: 0,
    },
    {
        enunciado: "En meta viewport, ¿qué valor de width se usa para responsive?",
        opciones: ["device-height", "device-width", "1024", "auto"],
        correcta: 1,
    },
    {
        enunciado: "¿Unidad CSS relativa al tamaño de fuente del elemento?",
        opciones: ["vw", "em", "vh", "px"],
        correcta: 1,
    },
    {
        enunciado: "En Flexbox, ¿qué propiedad controla el crecimiento del ítem?",
        opciones: ["align-items", "order", "flex-basis", "flex-grow"],
        correcta: 3,
    },
    {
        enunciado: "En CSS Grid, ¿qué propiedad declara las columnas de la cuadrícula?",
        opciones: ["grid-auto-rows", "grid-template-rows", "grid-template-columns", "grid-gap"],
        correcta: 2,
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
    },
    {
        enunciado: "¿Qué etiqueta agrupa controles de formulario relacionados?",
        opciones: ["<fieldset>", "<group>", "<figure>", "<legend>"],
        correcta: 0,
    },
    {
        enunciado: "¿Cuál es el contenedor fluido en Bootstrap 5?",
        opciones: [".container", ".container-md", ".container-sm", ".container-fluid"],
        correcta: 3,
    },
    {
        enunciado: "En Flexbox, ¿qué alinea a lo largo del eje principal?",
        opciones: ["align-items", "justify-content", "align-content", "place-items"],
        correcta: 1,
    },
    {
        enunciado: "En CSS Grid, ¿qué propiedad del ítem asigna su área o coordenadas?",
        opciones: ["grid-template-columns", "grid-gap", "grid-area", "grid-auto-flow"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué atributo vincula una etiqueta <label> con su campo de formulario?",
        opciones: ["id", "for", "name", "aria-labelledby"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué etiqueta representa el contenido principal único de la página?",
        opciones: ["<main>", "<section>", "<header>", "<footer>"],
        correcta: 0,
    },
    {
        enunciado: "En Flexbox, ¿qué define la dirección del eje principal?",
        opciones: ["align-content", "justify-items", "align-items", "flex-direction"],
        correcta: 3,
    },
    {
        enunciado: "Breakpoint de Bootstrap que empieza en ~768 px",
        opciones: ["xxl", "md", "lg", "xl"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué lenguaje se usa para seleccionar nodos en XML?",
        opciones: ["JSON", "XSD", "XPath", "XSLT"],
        correcta: 2,
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
    },
    {
        enunciado: "En Flexbox, ¿qué define el tamaño base antes de distribuir espacio?",
        opciones: ["flex-basis", "width", "min-width", "flex-shrink"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué utilidad de Bootstrap añade ‘margin-bottom’ de 1rem aprox.?",
        opciones: ["py-3", "mb-3", "ms-3", "mx-3"],
        correcta: 1,
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
    },
    {
        enunciado: "¿Qué atributo abre un enlace en una nueva pestaña?",
        opciones: ["rel", "download", "referrerpolicy", 'target="_blank"'],
        correcta: 3,
    },
    {
        enunciado: "¿Qué propiedad controla la prioridad de apilamiento?",
        opciones: ["position", "z-index", "opacity", "filter"],
        correcta: 1,
    },
    {
        enunciado: "En Bootstrap 5, ¿qué clase crea una fila del grid?",
        opciones: [".container", ".col", ".row", ".gx-3"],
        correcta: 2,
    },
    {
        enunciado: "¿Qué combinador selecciona hijos directos?",
        opciones: ["div p", "div+p", "div>p", "div~p"],
        correcta: 2,
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
    },
    {
        enunciado: "¿Qué elemento marca abreviaturas con explicación en título?",
        opciones: ["<abbr>", "<cite>", "<dfn>", "<small>"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué valor de justify-content deja espacio uniforme entre ítems, sin márgenes en extremos?",
        opciones: ["flex-start", "space-around", "space-between", "space-evenly"],
        correcta: 2,
    },
    {
        enunciado: "Componente de Bootstrap 5 para panel deslizante colapsable lateral",
        opciones: ["Modal", "Carousel", "Popover", "Offcanvas"],
        correcta: 3,
    },
    {
        enunciado: "¿Qué atributo ARIA proporciona etiqueta accesible a elementos sin texto visible?",
        opciones: ["role", "aria-label", "aria-hidden", "tabindex"],
        correcta: 1,
    },

    {
        enunciado: "¿Cuál es la unidad fraccionaria en Grid?",
        opciones: ["px", "%", "fr", "em"],
        correcta: 2,
        explicacion: "La correcta es fr porque es la unidad propia de CSS Grid para repartir el espacio disponible en fracciones dentro del contenedor; px es una medida fija, % depende del tamaño del contenedor y em depende del tamaño de la fuente."
    },
    {
        enunciado: "¿Qué propiedad activa Flexbox?",
        opciones: ["flex: 1", "display: flex", "display: block", "flex-direction"],
        correcta: 1,
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
    },

    {
        enunciado: "¿Para qué sirve un DTD?",
        opciones: ["Dar estilo", "Validar XML", "Comprimir", "Convertir a JSON"],
        correcta: 1,
    },
    {
        enunciado: "¿Archivo para transformar XML?",
        opciones: ["HTML", "CSS", "XSL", "JSON"],
        correcta: 2,
    },
    {
        enunciado: "Significado de XSLT",
        opciones: ["XML Standard", "X Stylesheet Transformations", "Extensible Language Transformations", "X-Mark Template"],
        correcta: 2,
    },

    {
        enunciado: "Clase fila en BS5",
        opciones: ["col", "row", "line", "grid"],
        correcta: 1,
    },
    {
        enunciado: "Prefijo para columnas en BS5",
        opciones: ["row-", "col-", "grid-", "bs-"],
        correcta: 1,
    },

    {
        enunciado: "Versión indicada de Bootstrap",
        opciones: ["3", "4", "5", "2"],
        correcta: 2,
    },

    {
        enunciado: "Etiqueta XSLT value-of",
        opciones: ["xsl:read", "xsl:choose", "xsl:value-of", "xsl:select"],
        correcta: 2,
    },

    {
        enunciado: "Unidad NO común en Grid",
        opciones: ["fr", "px", "cm", "%"],
        correcta: 2,
    },

    /* SEGUNDA TANDA */
    {
        enunciado: "Propiedad de filas en Grid",
        opciones: ["grid-template-columns", "grid-template-rows", "grid-rows", "rows-size"],
        correcta: 1,
    },
    {
        enunciado: "Alinear columnas en Grid",
        opciones: ["justify-items", "align-content", "items-center", "grid-align"],
        correcta: 0,
    },
    {
        enunciado: "Crecimiento en Flexbox",
        opciones: ["flex-grow", "flex-direction", "order", "width"],
        correcta: 0,
    },
    {
        enunciado: "Espacio entre ítems Flex",
        opciones: ["center", "space-between", "space-around", "flex-start"],
        correcta: 1,
    },
    {
        enunciado: "Ventaja Flexbox",
        opciones: ["Bidimensional", "Tablas", "Flexible en una dimensión", "Reemplaza Grid"],
        correcta: 2,
    },
    {
        enunciado: "Característica XML",
        opciones: ["Etiquetas fijas", "Orden no importa", "Etiquetas definidas por el usuario", "Sin atributos"],
        correcta: 2,
    },
    {
        enunciado: "Documento que define reglas XML",
        opciones: ["CSS", "JSON", "DTD", "HTML"],
        correcta: 2,
    },
    {
        enunciado: "Comentarios XML",
        opciones: ["//", "<!-- -->", "##", "/**/"],
        correcta: 1,
    },
    {
        enunciado: "Lenguaje para transformar XML",
        opciones: ["XQuery", "HTML", "XSLT", "JSON"],
        correcta: 2,
    },
    {
        enunciado: "Contenedor ancho completo BS5",
        opciones: ["container", "container-fluid", "container-max", "container-full"],
        correcta: 1,
    },
    {
        enunciado: "Negrita en BS5",
        opciones: ["text-bold", "fw-bold", "strong", "bold"],
        correcta: 1,
    },
    {
        enunciado: "Padding BS5",
        opciones: ["m-3", "pr-3", "p-3", "padding-3"],
        correcta: 2,
    },
    {
        enunciado: "Auto colocación Grid",
        opciones: ["grid-template", "grid-auto-flow", "auto-justify", "grid-repeat"],
        correcta: 1,
    },
    {
        enunciado: "Alinear vertical en Flex",
        opciones: ["start", "stretch", "center", "baseline"],
        correcta: 2,
    },
    {
        enunciado: "Documento validar XML",
        opciones: ["HTML-Schema", "XML-Schema", "JSON-Schema", "XLS-Schema"],
        correcta: 1,
    },
    {
        enunciado: "Salida HTML en XSLT",
        opciones: ["xsl:xml", "xsl:template", "xsl:output method='html'", "html-output"],
        correcta: 2,
    },
    {
        enunciado: "Declarar elemento DTD",
        opciones: ["ENTITY", "ELEMENT", "DOCTYPE", "TAG"],
        correcta: 1,
    },
    {
        enunciado: "Centrar texto BS5",
        opciones: ["text-center", "align-center", "center-text", "text-middle"],
        correcta: 0,
    },
    {
        enunciado: "Recorrer nodos XSLT",
        opciones: ["xsl:loop", "xsl:for-each", "xsl:cycle", "xsl:repeat"],
        correcta: 1,
    },
    {
        enunciado: "Espaciado Grid",
        opciones: ["padding", "margin", "gap", "spacing"],
        correcta: 2,
    },
    {
        enunciado: "flex-wrap permite",
        opciones: ["no-wrap y wrap", "fold y no-fold", "overflow y overflow-auto", "wrapping y no-wrapping"],
        correcta: 0,
    },
    {
        enunciado: "Ventaja XML",
        opciones: ["Tipado estricto", "Solo texto", "Independiente plataforma", "Sin validación"],
        correcta: 2,
    },
    {
        enunciado: "Botón rojo BS5",
        opciones: ["btn-danger", "btn-red", "btn-alert", "btn-error"],
        correcta: 0,
    },
    {
        enunciado: "Validar DTD",
        opciones: ["Navegador", "Parser XML", "PowerPoint", "Photoshop"],
        correcta: 1,
    },
    {
        enunciado: "Propiedad NO Flex",
        opciones: ["flex-grow", "flex-shrink", "flex-align", "flex-basis"],
        correcta: 2,
    },
    {
        enunciado: "Track Grid",
        opciones: ["pack", "cell", "track", "zone"],
        correcta: 2,
    },
    {
        enunciado: "Copiar nodo XSLT",
        opciones: ["xsl:copy", "xsl:get", "xsl:value", "xsl:take"],
        correcta: 0,
    },
    {
        enunciado: "Tipo de archivo XML",
        opciones: ["binario", "solo lectura", "texto", "ejecutable"],
        correcta: 2,
    },
    {
        enunciado: "Prefijo XSLT",
        opciones: ["xslt:", "xsl:", "xs:", "xt:"],
        correcta: 1,
    },
    {
        enunciado: "Visibilidad BS5 en pantalla grande",
        opciones: ["d-lg-block", "show-lg", "lg-visible", "visible-5"],
        correcta: 0,
    },

    /* TERCERA TANDA */
    {
        enunciado: "Columnas que ocupa un ítem Grid",
        opciones: ["grid-area", "grid-column", "grid-index", "column-span"],
        correcta: 1,
    },
    {
        enunciado: "Patrón repetido Grid",
        opciones: ["repeat", "loop", "cycle", "grid"],
        correcta: 0,
    },
    {
        enunciado: "Reducción en Flexbox",
        opciones: ["flex-grow", "flex-shrink", "flex-size", "flex-flow"],
        correcta: 1,
    },
    {
        enunciado: "align-content espacio vertical",
        opciones: ["stretch", "center", "space-between", "flex-end"],
        correcta: 2,
    },
    {
        enunciado: "justify-items center Grid",
        opciones: ["start", "center", "around", "auto"],
        correcta: 1,
    },
    {
        enunciado: "XML distingue mayúsculas",
        opciones: ["no", "sí", "solo mayúsculas", "solo minúsculas"],
        correcta: 1,
    },
    {
        enunciado: "Etiqueta XML sin cerrar",
        opciones: ["nada", "válido", "mal formado", "corregido auto"],
        correcta: 2,
    },
    {
        enunciado: "Aplicar plantillas XSLT",
        opciones: ["xsl:templates", "xsl:apply-template", "xsl:tem plates-apply", "xsl:template-call"],
        correcta: 1,
    },
    {
        enunciado: "DTD interno",
        opciones: ["DTD", "DOCTYPE", "definition", "XML-DTD"],
        correcta: 1,
    },
    {
        enunciado: "Texto verde BS5",
        opciones: ["text-success", "text-green", "text-ok", "text-positive"],
        correcta: 0,
    },
    {
        enunciado: "Mostrar como bloque BS5",
        opciones: ["d-block", "block", "show-block", "display-b"],
        correcta: 0,
    },
    {
        enunciado: "Ocultar elemento en BS5",
        opciones: ["invisible", "hide", "d-none", "d-hide"],
        correcta: 2,
    },
    {
        enunciado: "minmax en Grid",
        opciones: ["minmax", "fit", "auto-size", "mincol"],
        correcta: 0,
    },
    {
        enunciado: "Columna invertida Flex",
        opciones: ["column", "column-reverse", "row", "row-reverse"],
        correcta: 1,
    },
    {
        enunciado: "XSD permite",
        opciones: ["estilos", "validar con tipos", "transformar", "traducir"],
        correcta: 1,
    },
    {
        enunciado: "XPath en XSLT",
        opciones: ["path", "select", "route", "query"],
        correcta: 1,
    },
    {
        enunciado: "Declarar atributo DTD",
        opciones: ["ATTR", "DEFINE", "ATTLIST", "ATTRIBUTE"],
        correcta: 2,
    },
    {
        enunciado: "Cursiva en BS5",
        opciones: ["italic", "text-italic", "fst-italic", "font-italic"],
        correcta: 2,
    },
    {
        enunciado: "Alineación vertical Grid",
        opciones: ["align-content", "justify-items", "center-items", "grid-vertical"],
        correcta: 0,
    },
    {
        enunciado: "flex-direction por defecto",
        opciones: ["row", "column", "row-reverse", "none"],
        correcta: 0,
    },
    {
        enunciado: "Etiqueta XML válida",
        opciones: ["sin atributos", "sin espacios", "bien anidada", "vacía siempre"],
        correcta: 2,
    },
    {
        enunciado: "Condiciones en XSLT",
        opciones: ["xsl:choose", "xsl:if", "xsl:when", "todas"],
        correcta: 3,
    },
    {
        enunciado: "Botón gris BS5",
        opciones: ["btn-gray", "btn-secondary", "btn-neutral", "btn-default"],
        correcta: 1,
    },
    {
        enunciado: "Fusionar filas Grid",
        opciones: ["grid-span", "grid-row", "row-span", "grid-join"],
        correcta: 1,
    },
    {
        enunciado: "flex-wrap controla",
        opciones: ["si saltan línea", "dirección", "orden", "display"],
        correcta: 0,
    },
    {
        enunciado: "XML no válido",
        opciones: ["personalizado", "con comillas", "etiquetas cruzadas", "comentarios"],
        correcta: 2,
    },
    {
        enunciado: "Salida XSLT",
        opciones: ["HTML", "Texto", "XML", "todas"],
        correcta: 3,
    },
    {
        enunciado: "Separación vertical BS5",
        opciones: ["gy-*", "px-*", "gv-*", "space-y"],
        correcta: 0,
    },
    {
        enunciado: "Orden Flex",
        opciones: ["order", "sort", "flex-index", "priority"],
        correcta: 0,
    },
    {
        enunciado: "Alineación vertical de una celda en Grid",
        opciones: ["align-items", "align-self", "align-cells", "grid-align"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué significa JS?",
        opciones: ["JavaStarter", "JavaScript", "JustScript", "JumpScript"],
        correcta: 1,
    },
    {
        enunciado: "¿Cómo se escribe un mensaje en consola?",
        opciones: ["print()", "log()", "console.log()", "alert()"],
        correcta: 2,
    },
    {
        enunciado: "¿Cuál es el símbolo para comentarios de una línea?",
        opciones: ["<!-- -->", "//", "/* */", "##"],
        correcta: 1,
    },
    {
        enunciado: "¿Cómo se declara una variable en JavaScript?",
        opciones: ["var", "int", "let", "var y let"],
        correcta: 3,
    },
    {
        enunciado: "¿Cuál muestra un mensaje emergente?",
        opciones: ["alert()", "msg()", "popup()", "window.show()"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué tipo de lenguaje es JavaScript?",
        opciones: ["Estático", "Dinámico", "Compilado", "Solo backend"],
        correcta: 1,
    },
    {
        enunciado: "¿Cómo se escribe una función básica?",
        opciones: ["function miFuncion() {}", "func miFuncion()", "def miFuncion()", "run miFuncion()"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué operador se usa para sumar?",
        opciones: ["+", "-", "*", "/"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué devuelve typeof 123?",
        opciones: ["int", "integer", "number", "numeric"],
        correcta: 2,
    },
    {
        enunciado: "¿Cuál es un tipo de dato en JS?",
        opciones: ["string", "cadena", "text", "word"],
        correcta: 0,
    },
    {
        enunciado: "¿Cómo se escribe un array?",
        opciones: ["{}", "[]", "<>", "()"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué método cuenta elementos de un array?",
        opciones: [".size", ".count", ".length", ".items"],
        correcta: 2,
    },
    {
        enunciado: "¿Cómo se convierte un número a string?",
        opciones: ["toString()", "toStr()", "string()", "makeString()"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué operador compara estrictamente?",
        opciones: ["==", "!=", "===", "~="],
        correcta: 2,
    },
    {
        enunciado: "¿Cómo se crea un objeto?",
        opciones: ["[]", "{}", "<>", "()"],
        correcta: 1,
    },
    {
        enunciado: "¿Cuál método añade un elemento al final de un array?",
        opciones: ["push()", "add()", "insert()", "append()"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué devuelve 2 + '2'?",
        opciones: ["4", "22", "NaN", "Error"],
        correcta: 1,
    },
    {
        enunciado: "¿Qué palabra clave detiene un bucle?",
        opciones: ["break", "stop", "end", "halt"],
        correcta: 0,
    },
    {
        enunciado: "¿Qué estructura usa if?",
        opciones: ["if () {}", "if {}", "if [] {}", "if <> {}"],
        correcta: 0,
    },
    {
        enunciado: "¿Cómo se escribe un comentario de varias líneas?",
        opciones: ["// comentario //", "<!-- comentario -->", "/* comentario */", "** comentario **"],
        correcta: 2,
    }
];