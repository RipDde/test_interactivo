const preguntasSAD = [

   {
    enunciado: "¿Qué estrategia permite que otros servidores mantengan el servicio cuando uno de ellos falla?",
    opciones: ["Redundancia", "Cifrado", "Autenticación", "Compresión"],
    correcta: 0,
    explicacion: "La correcta es Redundancia porque consiste en disponer de sistemas o servidores adicionales capaces de asumir el servicio si uno falla. El cifrado protege la información, la autenticación verifica identidades y la compresión reduce el tamaño de los datos."
}, 

{
    enunciado: "¿Qué se entiende por un SPOF?",
    opciones: ["Un sistema de copias distribuido", "Un punto único de fallo", "Una vulnerabilidad crítica", "Un servidor de respaldo"],
    correcta: 1,
    explicacion: "La correcta es Un punto único de fallo porque SPOF significa Single Point of Failure: un componente cuyo fallo puede provocar la interrupción de todo el sistema."
},

{
    enunciado: "Si una persona no autorizada obtiene una base de datos con información de clientes, ¿qué propiedad se ve afectada principalmente?",
    opciones: ["Fiabilidad", "Disponibilidad", "Confidencialidad", "Integridad"],
    correcta: 2,
    explicacion: "La correcta es Confidencialidad porque información privada ha sido accesible para una persona no autorizada. La integridad se relaciona con modificaciones y la disponibilidad con poder acceder al servicio."
},

{
    enunciado: "¿Qué propiedad se ve afectada principalmente si alguien modifica sin permiso el importe de una factura?",
    opciones: ["Disponibilidad", "Confidencialidad", "Fiabilidad", "Integridad"],
    correcta: 3,
    explicacion: "La correcta es Integridad porque los datos han sido modificados sin autorización. La confidencialidad se refiere al acceso indebido y la disponibilidad a que la información pueda utilizarse cuando sea necesaria."
},

{
    enunciado: "¿Qué propiedad se ve afectada principalmente cuando un ataque DDoS impide acceder a una página web?",
    opciones: ["Disponibilidad", "Integridad", "Confidencialidad", "Autenticidad"],
    correcta: 0,
    explicacion: "La correcta es Disponibilidad porque el ataque impide que los usuarios puedan acceder al servicio. Un DDoS busca normalmente saturar los recursos del sistema, no modificar ni robar información."
},

{
    enunciado: "¿Qué describe mejor la fiabilidad de un sistema?",
    opciones: ["Que cifre todos los datos", "Que funcione de forma estable", "Que no permita cambios", "Que sea accesible públicamente"],
    correcta: 1,
    explicacion: "La correcta es Que funcione de forma estable porque la fiabilidad indica la capacidad de un sistema para funcionar correctamente y de manera consistente durante un periodo de tiempo."
},

{
    enunciado: "¿Por qué un ransomware puede afectar a varios principios de la tríada CIA?",
    opciones: ["Porque bloquea Internet", "Porque daña el hardware", "Porque puede robar, alterar o bloquear datos", "Porque elimina los usuarios"],
    correcta: 2,
    explicacion: "La correcta es Porque puede robar, alterar o bloquear datos, afectando respectivamente a la confidencialidad, integridad y disponibilidad, que son los tres principios de la tríada CIA."
},

{
    enunciado: "¿Qué medida ayuda a mantener un sistema disponible ante un corte eléctrico?",
    opciones: ["Cambiar contraseñas", "Desactivar registros", "Usar un servidor potente", "Utilizar un SAI/UPS"],
    correcta: 3,
    explicacion: "La correcta es Utilizar un SAI/UPS porque proporciona alimentación eléctrica temporal cuando se produce un corte, permitiendo mantener el sistema funcionando o apagarlo de forma segura."
},

{
    enunciado: "¿Qué riesgo existe si las copias de seguridad están únicamente en el mismo edificio que los servidores?",
    opciones: ["Un desastre puede afectar a ambos", "Pierden el cifrado", "Se vuelven públicas", "No pueden restaurarse"],
    correcta: 0,
    explicacion: "La correcta es Un desastre puede afectar a ambos porque un incendio, inundación u otro incidente físico podría destruir tanto los servidores originales como sus copias de seguridad."
},

{
    enunciado: "¿Cuál de las siguientes situaciones constituye una amenaza física?",
    opciones: ["Inyección SQL", "Fallo de refrigeración", "Phishing", "Ransomware"],
    correcta: 1,
    explicacion: "La correcta es Fallo de refrigeración porque puede provocar daños físicos por sobrecalentamiento en los equipos. La inyección SQL, el phishing y el ransomware son amenazas principalmente lógicas."
},

{
    enunciado: "¿Para qué sirve principalmente un SAI/UPS?",
    opciones: ["Detectar malware", "Bloquear conexiones", "Mantener alimentación temporal", "Realizar copias"],
    correcta: 2,
    explicacion: "La correcta es Mantener alimentación temporal porque un SAI/UPS proporciona energía durante un corte eléctrico. No está diseñado para detectar malware, bloquear conexiones ni realizar copias de seguridad."
},

{
    enunciado: "¿Qué técnica consiste en entrar en una zona restringida siguiendo a una persona autorizada?",
    opciones: ["Shoulder surfing", "Dumpster diving", "Phishing", "Tailgating"],
    correcta: 3,
    explicacion: "La correcta es Tailgating porque consiste en acceder físicamente a una zona restringida aprovechando el acceso de una persona autorizada, normalmente siguiéndola sin identificarse."
},

{
    enunciado: "¿Qué técnica consiste en observar información sensible mientras otra persona la utiliza?",
    opciones: ["Shoulder surfing", "Spoofing", "DDoS", "Escaneo de puertos"],
    correcta: 0,
    explicacion: "La correcta es Shoulder surfing porque consiste en observar directamente la pantalla, teclado u otra información de una persona para obtener datos sensibles como contraseñas o códigos."
},

{
    enunciado: "Si se roba un portátil con información sin cifrar, ¿qué propiedad puede verse comprometida además de la disponibilidad?",
    opciones: ["Escalabilidad", "Confidencialidad", "Redundancia", "Rendimiento"],
    correcta: 1,
    explicacion: "La correcta es Confidencialidad porque quien robe el portátil podría acceder a la información almacenada al no estar cifrada. También se pierde disponibilidad porque el propietario deja de tener acceso al dispositivo."
},

{
    enunciado: "¿Qué describe mejor una vulnerabilidad?",
    opciones: ["Un atacante", "Un programa malicioso", "Una debilidad explotable", "Una copia de seguridad"],
    correcta: 2,
    explicacion: "La correcta es Una debilidad explotable porque una vulnerabilidad es un fallo o debilidad de un sistema que puede ser aprovechado por una amenaza para causar daños."
},

{
    enunciado: "¿Qué es un exploit?",
    opciones: ["Una copia incremental", "Una medida de disponibilidad", "Un inventario de activos", "Código que aprovecha una vulnerabilidad"],
    correcta: 3,
    explicacion: "La correcta es Código que aprovecha una vulnerabilidad porque un exploit utiliza un fallo concreto de un sistema para provocar un comportamiento no previsto o conseguir acceso."
},

{
    enunciado: "¿Cómo se expresa conceptualmente el riesgo en un análisis de vulnerabilidades?",
    opciones: ["Probabilidad × impacto", "Servidores × usuarios", "CVSS + puertos", "Activos ÷ amenazas"],
    correcta: 0,
    explicacion: "La correcta es Probabilidad × impacto porque el riesgo suele evaluarse considerando la posibilidad de que ocurra una amenaza y las consecuencias que tendría si se materializa."
},

{
    enunciado: "¿Cuál debería ser uno de los primeros pasos en la gestión de vulnerabilidades?",
    opciones: ["Realizar un pentest", "Inventariar los activos", "Cerrar todos los puertos", "Sustituir equipos"],
    correcta: 1,
    explicacion: "La correcta es Inventariar los activos porque primero es necesario conocer qué equipos, sistemas, aplicaciones y servicios existen antes de poder identificar y gestionar correctamente sus vulnerabilidades."
},

{
    enunciado: "¿Qué es la superficie de ataque?",
    opciones: ["El número de CVE", "El espacio del CPD", "Los puntos posibles de interacción", "La lista de administradores"],
    correcta: 2,
    explicacion: "La correcta es Los puntos posibles de interacción porque la superficie de ataque incluye todos los servicios, interfaces, puertos, aplicaciones y otros puntos que podrían ser utilizados para intentar atacar un sistema."
},

{
    enunciado: "¿Qué efecto tiene mantener servicios innecesarios expuestos?",
    opciones: ["Reduce el riesgo", "Mejora la disponibilidad", "Evita aplicar parches", "Aumenta la superficie de ataque"],
    correcta: 3,
    explicacion: "La correcta es Aumenta la superficie de ataque porque cada servicio expuesto supone un posible punto de entrada adicional que podría contener vulnerabilidades y ser aprovechado por un atacante."
},

{
    enunciado: "¿Para qué se utiliza habitualmente Nmap en un análisis de seguridad?",
    opciones: ["Analizar hosts y puertos", "Cifrar discos", "Crear copias", "Generar certificados"],
    correcta: 0,
    explicacion: "La correcta es Analizar hosts y puertos porque Nmap permite descubrir equipos en una red y comprobar qué puertos y servicios tienen disponibles. No se utiliza principalmente para cifrar, hacer copias o generar certificados."
},

{
    enunciado: "¿Qué es un falso positivo en un análisis de vulnerabilidades?",
    opciones: ["Una amenaza no detectada", "Un hallazgo que no es real", "Un ataque exitoso", "Una vulnerabilidad parcheada"],
    correcta: 1,
    explicacion: "La correcta es Un hallazgo que no es real porque un falso positivo ocurre cuando una herramienta identifica como vulnerabilidad algo que, tras comprobarlo, realmente no supone ese problema."
},

{
    enunciado: "¿Para qué se utiliza un identificador CVE?",
    opciones: ["Calcular costes", "Ejecutar pentesting", "Identificar vulnerabilidades conocidas", "Guardar contraseñas"],
    correcta: 2,
    explicacion: "La correcta es Identificar vulnerabilidades conocidas porque CVE proporciona identificadores únicos y estandarizados para vulnerabilidades de seguridad conocidas públicamente."
},

{
    enunciado: "¿Qué mide principalmente CVSS?",
    opciones: ["El coste del incidente", "La probabilidad exacta", "El valor del activo", "La severidad de una vulnerabilidad"],
    correcta: 3,
    explicacion: "La correcta es La severidad de una vulnerabilidad porque CVSS asigna una puntuación basada en características como facilidad de explotación e impacto. No determina directamente el coste o el valor del activo."
},

{
    enunciado: "¿Por qué una misma vulnerabilidad puede suponer riesgos distintos en dos sistemas?",
    opciones: ["Por su contexto y exposición", "Porque CVSS solo sirve en PC", "Porque solo afecta a un servidor", "Porque cambia el identificador CVE"],
    correcta: 0,
    explicacion: "La correcta es Por su contexto y exposición porque el riesgo depende de factores como la importancia del activo, su exposición a Internet, las medidas de protección existentes y el impacto que tendría un ataque."
},

{
    enunciado: "¿Qué característica hace útil el catálogo KEV para priorizar vulnerabilidades?",
    opciones: ["Solo incluye fallos leves", "Incluye vulnerabilidades explotadas", "Sustituye a CVE", "Solo contiene fallos físicos"],
    correcta: 1,
    explicacion: "La correcta es Incluye vulnerabilidades explotadas porque el catálogo KEV recopila vulnerabilidades conocidas que están siendo explotadas activamente, lo que permite darles mayor prioridad."
},

{
    enunciado: "Si todavía no existe un parche, ¿qué puede hacerse para reducir temporalmente el riesgo?",
    opciones: ["Ignorar el problema", "Eliminarlo del informe", "Aplicar medidas compensatorias", "Cambiar su CVSS"],
    correcta: 2,
    explicacion: "La correcta es Aplicar medidas compensatorias porque pueden utilizarse controles temporales como restringir accesos, desactivar servicios o segmentar la red hasta que exista una solución definitiva."
},

{
    enunciado: "¿Qué debe hacerse después de aplicar una corrección a una vulnerabilidad?",
    opciones: ["Eliminar el activo", "Finalizar el análisis", "Desactivar el escáner", "Verificar la corrección"],
    correcta: 3,
    explicacion: "La correcta es Verificar la corrección porque después de aplicar un parche o medida debe comprobarse que la vulnerabilidad realmente ha desaparecido y que la solución ha sido efectiva."
},

{
    enunciado: "¿Qué diferencia general existe entre un análisis de vulnerabilidades y un pentest?",
    opciones: ["El pentest profundiza en la explotación", "El pentest solo analiza hardware", "El análisis nunca usa herramientas", "Ambos son idénticos"],
    correcta: 0,
    explicacion: "La correcta es El pentest profundiza en la explotación porque un análisis de vulnerabilidades busca e identifica debilidades, mientras que un pentest intenta comprobar de forma controlada si esas debilidades pueden explotarse."
},

{
    enunciado: "¿Qué ventaja de seguridad puede aportar la segmentación de una red?",
    opciones: ["Elimina todas las CVE", "Limita el movimiento lateral", "Sustituye los parches", "Evita fallos físicos"],
    correcta: 1,
    explicacion: "La correcta es Limita el movimiento lateral porque separar la red en distintos segmentos dificulta que un atacante que comprometa un sistema pueda desplazarse libremente hacia otros equipos o servicios."
}
];