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
},
{
    enunciado: "En una sala de servidores se detecta humedad creciente por una fuga. ¿Qué control permite advertir esta situación a tiempo?",
    opciones: ["Revisión de permisos de usuario", "Filtrado de mensajes entrantes", "Monitorización ambiental", "Análisis de consultas SQL"],
    correcta: 2,
    explicacion: "La correcta es Monitorización ambiental porque permite supervisar variables físicas como la temperatura y la humedad mediante sensores. Estos dispositivos pueden generar alertas cuando detectan valores anormales, facilitando la identificación de fugas de agua antes de que dañen los servidores."
},
{
    enunciado: "Un centro dispone de generador, pero necesita unos segundos para arrancar tras un corte. ¿Qué función cumple el SAI durante ese intervalo?",
    opciones: ["Mantener la alimentación", "Reparar el transformador", "Refrigerar el cableado", "Restaurar los documentos"],
    correcta: 0,
    explicacion: "La correcta es Mantener la alimentación porque un SAI (Sistema de Alimentación Ininterrumpida) proporciona energía temporal mediante sus baterías cuando se interrumpe el suministro eléctrico. Esto permite mantener los equipos encendidos durante el tiempo necesario para que arranque el generador o realizar un apagado seguro."
},
{
    enunciado: "Se pierde una memoria USB con documentos de clientes. ¿Qué medida aplicada previamente reduce el riesgo de que alguien lea su contenido?",
    opciones: ["Ordenar los archivos por fecha", "Cambiar el nombre del soporte", "Guardar los archivos comprimidos", "Cifrar el contenido del soporte"],
    correcta: 3,
    explicacion: "La correcta es Cifrar el contenido del soporte porque el cifrado transforma la información en datos ilegibles para cualquier persona que no disponga de la clave de descifrado. De esta manera, aunque alguien encuentre o robe la memoria USB, no podrá acceder fácilmente a los documentos almacenados."
},
{
    enunciado: "Una persona encuentra listados de usuarios y contraseñas entre documentos desechados. ¿Qué técnica está utilizando?",
    opciones: ["Shoulder surfing", "Dumpster diving", "Password spraying", "Credential stuffing"],
    correcta: 1,
    explicacion: "La correcta es Dumpster diving porque consiste en buscar información confidencial entre documentos, dispositivos o materiales desechados por una organización. Es una técnica de ingeniería social que puede permitir obtener contraseñas, datos personales o información interna sin necesidad de acceder directamente a los sistemas informáticos."
},
{
    enunciado: "Dos fuentes de alimentación de un servidor dependen del mismo circuito sin respaldo. ¿Qué fallo puede dejar sin servicio a ambas?",
    opciones: ["La avería del circuito común", "La caducidad de una contraseña", "La pérdida de un archivo local", "La saturación del correo externo"],
    correcta: 0,
    explicacion: "La correcta es La avería del circuito común porque, aunque el servidor disponga de dos fuentes de alimentación redundantes, ambas dependen del mismo suministro eléctrico. Si falla ese circuito, las dos fuentes perderán la alimentación simultáneamente. Esto demuestra la importancia de evitar puntos únicos de fallo en las infraestructuras críticas."
},
{
    enunciado: "¿Qué característica encaja mejor con un virus informático frente a un gusano?",
    opciones: ["Distribuir tráfico entre servidores", "Registrar accesos en un cortafuegos", "Asociarse a un archivo anfitrión", "Comprobar la identidad del usuario"],
    correcta: 2,
    explicacion: "La correcta es Asociarse a un archivo anfitrión porque un virus informático suele necesitar infectar un archivo o programa para ejecutarse y propagarse. En cambio, un gusano (worm) puede propagarse automáticamente entre sistemas y redes sin necesidad de que el usuario ejecute un archivo infectado."
},
{
    enunciado: "Un programa malicioso se propaga entre equipos vulnerables sin que cada usuario abra un archivo. ¿Qué comportamiento presenta?",
    opciones: ["El de un troyano sin replicación", "El de un gusano de red", "El de un filtro de correo", "El de un gestor de contraseñas"],
    correcta: 1,
    explicacion: "La correcta es El de un gusano de red porque un gusano es un tipo de malware capaz de replicarse y propagarse automáticamente entre equipos, aprovechando vulnerabilidades o conexiones de red. A diferencia de un virus tradicional, no necesita infectar un archivo anfitrión ni requerir la intervención del usuario en cada propagación."
},
{
    enunciado: "Una supuesta utilidad de limpieza instala una puerta trasera cuando el usuario la ejecuta. ¿Qué categoría describe mejor este engaño?",
    opciones: ["Sistema de detección", "Copia de recuperación", "Balanceador de carga", "Programa troyano"],
    correcta: 3,
    explicacion: "La correcta es Programa troyano porque un troyano es un programa malicioso que aparenta ser una aplicación legítima para engañar al usuario y conseguir que lo ejecute. Una vez instalado, puede realizar acciones ocultas, como abrir una puerta trasera (backdoor) que permita a un atacante acceder al sistema."
},
{
    enunciado: "Un atacante cifra documentos y amenaza con publicar una copia que ha robado. ¿Qué modalidad de extorsión describe el caso?",
    opciones: ["Ataque de diccionario", "Denegación de servicio", "Doble extorsión", "Suplantación de dominio"],
    correcta: 2,
    explicacion: "La correcta es Doble extorsión porque los atacantes combinan dos amenazas: cifrar los archivos para impedir que la víctima acceda a ellos y amenazar con publicar información confidencial previamente robada. Esta técnica se utiliza en ataques de ransomware para aumentar la presión sobre la víctima y exigir el pago de un rescate."
},
{
    enunciado: "Una aplicación recopila a escondidas el historial de navegación y las comunicaciones del usuario. ¿Qué tipo de malware describe esa función?",
    opciones: ["Spyware", "Gusano", "Ransomware", "Rootkit"],
    correcta: 0,
    explicacion: "La correcta es Spyware porque es un tipo de software malicioso diseñado para espiar al usuario y recopilar información sin su autorización. Puede registrar el historial de navegación, comunicaciones, credenciales o actividad del equipo, enviando posteriormente esos datos a terceros."
},
{
    enunciado: "Se descubre un dispositivo entre el teclado y el ordenador que registra las teclas pulsadas. ¿Qué es?",
    opciones: ["Un adaptador de respaldo eléctrico", "Un sensor de temperatura interno", "Un módulo de cifrado de disco", "Un keylogger de hardware"],
    correcta: 3,
    explicacion: "La correcta es Un keylogger de hardware porque es un dispositivo físico diseñado para registrar las pulsaciones realizadas en un teclado. Puede instalarse entre el teclado y el ordenador para capturar información introducida por el usuario, como contraseñas, mensajes o datos confidenciales. También existen keyloggers implementados mediante software."
},
{
    enunciado: "Un atacante oculta procesos y archivos maliciosos para conservar el acceso al sistema. ¿Qué herramienta está asociada a ese objetivo?",
    opciones: ["Un compresor", "Un rootkit", "Un balanceador", "Un generador"],
    correcta: 1,
    explicacion: "La correcta es Un rootkit porque es un conjunto de herramientas maliciosas diseñado para ocultar procesos, archivos, conexiones o actividades dentro de un sistema comprometido. Su objetivo es dificultar la detección del atacante y ayudarle a mantener el acceso no autorizado al equipo."
},
{
    enunciado: "Un correo fraudulento menciona el puesto y el proyecto real de una víctima concreta para ganar credibilidad. ¿Cómo se denomina este ataque dirigido?",
    opciones: ["Spear phishing", "Password spraying", "Dumpster diving", "Shoulder surfing"],
    correcta: 0,
    explicacion: "La correcta es Spear phishing porque es una modalidad de phishing dirigida específicamente a una persona o grupo concreto. El atacante utiliza información real sobre la víctima, como su trabajo, proyectos o contactos, para crear mensajes personalizados y creíbles que intentan conseguir contraseñas, información confidencial o la ejecución de acciones maliciosas."
},
{
    enunciado: "Un correo suplanta a la dirección y exige a contabilidad una transferencia urgente. ¿Qué modalidad encaja mejor con este fraude?",
    opciones: ["Un ataque de fuerza bruta", "Un fallo de refrigeración", "Un ataque BEC", "Un escaneo de servicios"],
    correcta: 2,
    explicacion: "La correcta es Un ataque BEC porque Business Email Compromise es una modalidad de fraude que utiliza correos electrónicos empresariales falsificados o cuentas comprometidas para suplantar a directivos, empleados o proveedores. El objetivo suele ser engañar a la víctima para que realice transferencias económicas o divulgue información confidencial."
},
{
    enunciado: "Se prueban sistemáticamente numerosas combinaciones de caracteres contra una sola cuenta. ¿Qué ataque se está realizando?",
    opciones: ["Spear phishing", "Fuerza bruta", "Doble extorsión", "Ataque MitM"],
    correcta: 1,
    explicacion: "La correcta es Fuerza bruta porque este ataque consiste en probar numerosas combinaciones de caracteres hasta encontrar la contraseña correcta. Puede realizarse mediante programas automatizados y resulta especialmente peligroso cuando las contraseñas son cortas o sencillas. Las contraseñas robustas, la limitación de intentos y la autenticación multifactor ayudan a reducir este riesgo."
},
{
    enunciado: "Para intentar acceder a una cuenta, se utiliza una lista de palabras y patrones habituales como posibles contraseñas. ¿Qué ataque es?",
    opciones: ["Un ataque de intermediario", "Una inyección de comandos", "Una suplantación de remitente", "Un ataque de diccionario"],
    correcta: 3,
    explicacion: "La correcta es Un ataque de diccionario porque consiste en probar contraseñas obtenidas de listas de palabras, expresiones y combinaciones habituales. A diferencia de la fuerza bruta exhaustiva, que prueba sistemáticamente combinaciones de caracteres, el ataque de diccionario se centra en candidatos considerados más probables."
},
{
    enunciado: "Un atacante prueba una misma contraseña habitual en numerosas cuentas de una empresa. ¿Qué técnica utiliza?",
    opciones: ["Credential stuffing", "Shoulder surfing", "Password spraying", "Spear phishing"],
    correcta: 2,
    explicacion: "La correcta es Password spraying porque esta técnica consiste en probar una misma contraseña común contra numerosas cuentas de usuario. Los atacantes intentan identificar usuarios que utilizan claves débiles y evitar los bloqueos que pueden producirse al realizar demasiados intentos consecutivos sobre una sola cuenta."
},
{
    enunciado: "Se prueban en una tienda los pares de usuario y contraseña filtrados de otro servicio. ¿Cómo se llama esta técnica?",
    opciones: ["Credential stuffing", "Password spraying", "Dumpster diving", "Command injection"],
    correcta: 0,
    explicacion: "La correcta es Credential stuffing porque consiste en utilizar combinaciones de usuario y contraseña obtenidas de filtraciones anteriores para intentar acceder a otros servicios. Este ataque aprovecha que muchas personas reutilizan las mismas credenciales en diferentes plataformas. Utilizar contraseñas únicas y autenticación multifactor reduce el riesgo."
},
{
    enunciado: "¿Qué hábito reduce directamente la posibilidad de que una contraseña filtrada permita acceder también a otras cuentas del mismo usuario?",
    opciones: ["Cambiar el nombre visible del perfil", "Mantener la sesión siempre abierta", "Usar la misma clave con otro alias", "Usar contraseñas distintas por servicio"],
    correcta: 3,
    explicacion: "La correcta es Usar contraseñas distintas por servicio porque utilizar una contraseña única para cada cuenta impide que una credencial filtrada en una plataforma pueda reutilizarse directamente para acceder a otras. Esta práctica protege frente a ataques de credential stuffing y puede facilitarse mediante un gestor de contraseñas."
},
{
    enunciado: "Una víctima acepta por cansancio una solicitud MFA después de recibir muchas notificaciones inesperadas. ¿Qué limitación ilustra el caso?",
    opciones: ["El agotamiento de las baterías del SAI", "La fatiga de notificaciones MFA", "La saturación del enlace de respaldo", "La corrupción de las copias locales"],
    correcta: 1,
    explicacion: "La correcta es La fatiga de notificaciones MFA porque este ataque consiste en enviar repetidas solicitudes de autenticación multifactor hasta que el usuario, por cansancio o confusión, acepta una solicitud fraudulenta. Demuestra que la autenticación multifactor puede verse comprometida mediante técnicas de ingeniería social si el usuario aprueba accesos que no ha solicitado."
},
{
    enunciado: "Cientos de cámaras comprometidas obedecen órdenes de un atacante y generan tráfico coordinado. ¿Cómo se denomina el conjunto de dispositivos?",
    opciones: ["Botnet", "Intranet", "Clúster de respaldo", "Red de almacenamiento"],
    correcta: 0,
    explicacion: "La correcta es Botnet porque una botnet es una red de dispositivos infectados o comprometidos que pueden ser controlados de manera coordinada por un atacante. Estos dispositivos, conocidos como bots, pueden utilizarse para realizar ataques de denegación de servicio distribuida (DDoS), enviar spam o ejecutar otras actividades maliciosas."
},
{
    enunciado: "Según el caso de Mirai del material, ¿qué debilidad favoreció que dispositivos IoT fueran incorporados a una botnet?",
    opciones: ["Tener sensores de humedad", "Disponer de fuentes redundantes", "Usar credenciales predeterminadas", "Mantener copias fuera del edificio"],
    correcta: 2,
    explicacion: "La correcta es Usar credenciales predeterminadas porque el malware Mirai aprovechó dispositivos IoT que mantenían usuarios y contraseñas de fábrica o credenciales débiles. Esto permitió comprometer numerosos dispositivos, como cámaras y routers, e incorporarlos a una botnet utilizada para realizar ataques coordinados."
},
{
    enunciado: "Una aplicación concatena sin protección la entrada del usuario con una consulta a la base de datos. ¿Qué ataque puede facilitar?",
    opciones: ["Password spraying", "SQL Injection", "Shoulder surfing", "Spear phishing"],
    correcta: 1,
    explicacion: "La correcta es SQL Injection porque esta vulnerabilidad aparece cuando una aplicación incorpora datos introducidos por el usuario directamente en consultas SQL sin aplicar mecanismos de protección adecuados. Un atacante podría manipular la consulta para acceder a información no autorizada o modificar datos. Las consultas parametrizadas ayudan a prevenir este problema."
},
{
    enunciado: "Un atacante intenta interponerse en la comunicación entre un cliente y un servidor para leer o alterar el intercambio. ¿Qué ataque describe el caso?",
    opciones: ["Un ataque de diccionario", "Un ataque de denegación", "Un ataque de doble extorsión", "Un ataque de intermediario"],
    correcta: 3,
    explicacion: "La correcta es Un ataque de intermediario porque un ataque Man-in-the-Middle (MitM) consiste en situarse entre dos dispositivos que se están comunicando para intentar interceptar, leer o modificar la información intercambiada. El uso de protocolos seguros como HTTPS con TLS y la validación correcta de certificados ayudan a proteger estas comunicaciones."
},
{
    enunciado: "¿Qué conjunto de propiedades ayuda a proteger HTTPS mediante TLS cuando la conexión y el certificado se validan correctamente?",
    opciones: ["Refrigeración, energía y respaldo", "Inventario, parcheado y restauración", "Confidencialidad, integridad y autenticación del servidor", "Redundancia, escalabilidad y capacidad de almacenamiento"],
    correcta: 2,
    explicacion: "La correcta es Confidencialidad, integridad y autenticación del servidor porque TLS protege las comunicaciones mediante cifrado, evitando que terceros puedan leer fácilmente los datos transmitidos. También permite detectar modificaciones durante la transmisión y autenticar la identidad del servidor mediante certificados digitales correctamente validados."
},
{
    enunciado: "Una empleada envía por error datos de clientes a un destinatario equivocado. ¿Cómo se clasifica el origen de esta amenaza?",
    opciones: ["Interno y accidental", "Externo e intencionado", "Natural y ambiental", "Físico y eléctrico"],
    correcta: 0,
    explicacion: "La correcta es Interno y accidental porque el incidente se origina dentro de la organización, ya que lo provoca una empleada, y no existe intención de causar daño. Se trata de un error humano que puede comprometer la confidencialidad de los datos. Las amenazas internas no tienen por qué ser maliciosas, también pueden ser accidentales."
},
{
    enunciado: "¿Qué enseña el incidente de CrowdStrike de julio de 2024 descrito en el PDF?",
    opciones: ["Que toda caída procede de un DDoS", "Que un fallo lógico puede ser accidental", "Que las actualizaciones son ransomware", "Que el malware siempre daña el hardware"],
    correcta: 1,
    explicacion: "La correcta es Que un fallo lógico puede ser accidental porque el incidente de CrowdStrike de julio de 2024 se produjo por una actualización defectuosa de software de seguridad que provocó fallos e interrupciones en numerosos equipos Windows. No fue un ciberataque, sino un error técnico que demuestra que los incidentes de seguridad y disponibilidad también pueden tener causas accidentales."
},
{
    enunciado: "Una empresa combina cortafuegos, MFA, parches, EDR y copias de seguridad. ¿Qué estrategia refleja esta combinación?",
    opciones: ["Ocultación de nombres de usuario", "Concentración de todos los permisos", "Sustitución de la respuesta por cifrado", "Defensa en profundidad"],
    correcta: 3,
    explicacion: "La correcta es Defensa en profundidad porque esta estrategia consiste en aplicar varias capas de seguridad complementarias para proteger los sistemas. Por ejemplo, los cortafuegos filtran conexiones, la autenticación multifactor protege accesos, los parches corrigen vulnerabilidades, el EDR detecta amenazas y las copias de seguridad facilitan la recuperación ante incidentes."
},
{
    enunciado: "Un SIEM correlaciona registros y genera una alerta ante actividad sospechosa. ¿Qué función cumple principalmente en ese momento?",
    opciones: ["Detectiva", "Correctiva", "De restauración", "De alimentación"],
    correcta: 0,
    explicacion: "La correcta es Detectiva porque un SIEM (Security Information and Event Management) recopila y analiza registros de diferentes sistemas para identificar comportamientos anómalos o posibles incidentes de seguridad. Cuando detecta actividad sospechosa, genera alertas para que los administradores puedan investigarla. Su función principal en este caso es detectar amenazas, no corregirlas directamente."
},
{
    enunciado: "Después de un borrado accidental, se recuperan los archivos desde una copia verificada. ¿Qué tipo de actuación es esa restauración?",
    opciones: ["Un control preventivo de acceso", "Una medida correctiva", "Un análisis detectivo de tráfico", "Una prueba de autenticación"],
    correcta: 1,
    explicacion: "La correcta es Una medida correctiva porque la restauración de una copia de seguridad permite recuperar los datos después de que se haya producido un incidente, como un borrado accidental. Las medidas correctivas buscan reparar los daños y restablecer el funcionamiento normal, mientras que las preventivas intentan evitar incidentes y las detectivas identificarlos."
},
{
    enunciado: "¿Qué unidad se utiliza para expresar la potencia activa que consumen los dispositivos?",
    opciones: ["VA", "Hz", "W", "A"],
    correcta: 2,
    explicacion: "La correcta es W porque la potencia activa se mide en vatios (W) y representa la potencia eléctrica que consumen realmente los dispositivos. Los VA expresan potencia aparente, los Hz miden frecuencia y los A representan intensidad eléctrica."
},
{
    enunciado: "¿En qué unidad se expresa la potencia aparente utilizada para dimensionar un SAI?",
    opciones: ["VA", "Wh", "Hz", "W"],
    correcta: 0,
    explicacion: "La correcta es VA porque la potencia aparente se mide en voltamperios (VA) y se utiliza para dimensionar la capacidad de los sistemas de alimentación ininterrumpida (SAI). Los vatios (W) representan la potencia activa y los vatios-hora (Wh) expresan energía."
},
{
    enunciado: "¿Cómo se calcula el factor de potencia (FP) a partir de W y VA?",
    opciones: ["VA × W", "VA / W", "W + VA", "W / VA"],
    correcta: 3,
    explicacion: "La correcta es W / VA porque el factor de potencia representa la relación entre la potencia activa y la potencia aparente. Se calcula mediante la fórmula FP = W / VA. Para obtener los VA necesarios a partir de los W, utilizamos la fórmula VA = W / FP."
},
{
    enunciado: "Un dispositivo consume 240 W y se utiliza un FP de 0,8. ¿Qué potencia aparente requiere, sin margen?",
    opciones: ["192 VA", "300 VA", "480 VA", "240 VA"],
    correcta: 1,
    explicacion: "La correcta es 300 VA porque para calcular la potencia aparente dividimos la potencia activa entre el factor de potencia. Aplicamos la fórmula VA = W / FP, por lo que 240 / 0,8 = 300 VA. Este resultado todavía no incluye ningún margen de seguridad."
},
{
    enunciado: "¿Qué expresión permite calcular los VA mínimos de un SAI con un margen del 25 %?",
    opciones: ["(ΣW × FP) × 1,25", "(ΣW / FP) ÷ 1,25", "(ΣW / FP) × 1,25", "(ΣW + FP) × 1,25"],
    correcta: 2,
    explicacion: "La correcta es (ΣW / FP) × 1,25 porque primero sumamos la potencia activa de todos los dispositivos conectados, después dividimos el resultado entre el factor de potencia y finalmente multiplicamos por 1,25 para añadir un margen de seguridad del 25 %. Esto permite calcular la potencia aparente mínima recomendada del SAI."
},
{
    enunciado: "¿Cómo se incorpora un margen de seguridad del 25 % a los VA calculados?",
    opciones: ["Restando un 25 %", "Dividiendo entre 1,25", "Multiplicando por 0,25", "Multiplicando por 1,25"],
    correcta: 3,
    explicacion: "La correcta es Multiplicando por 1,25 porque añadir un margen del 25 % significa aumentar el valor original en una cuarta parte. Matemáticamente equivale a multiplicar por 1 + 0,25 = 1,25. Por ejemplo, si necesitamos 400 VA, con el margen obtenemos 400 × 1,25 = 500 VA."
},
{
    enunciado: "Si se conectan un ordenador de 300 W y un monitor de 40 W, ¿cuál es la potencia activa total?",
    opciones: ["300 W", "340 W", "360 W", "400 W"],
    correcta: 1,
    explicacion: "La correcta es 340 W porque la potencia activa total se obtiene sumando los consumos de todos los dispositivos conectados. En este caso, el ordenador consume 300 W y el monitor 40 W, por lo que la suma es 300 + 40 = 340 W."
},
{
    enunciado: "Una carga suma 400 W. Con FP = 0,8 y margen del 25 %, ¿cuántos VA mínimos se calculan?",
    opciones: ["625 VA", "500 VA", "400 VA", "525 VA"],
    correcta: 0,
    explicacion: "La correcta es 625 VA porque primero calculamos la potencia aparente dividiendo los 400 W entre el factor de potencia: 400 / 0,8 = 500 VA. Después añadimos el margen de seguridad del 25 % multiplicando por 1,25: 500 × 1,25 = 625 VA."
},
{
    enunciado: "Se calculan 890 VA mínimos. ¿Qué SAI elegirías entre estas opciones, suponiendo que cumple el límite en W?",
    opciones: ["750 VA", "850 VA", "1000 VA", "800 VA"],
    correcta: 2,
    explicacion: "La correcta es 1000 VA porque al seleccionar un SAI debemos elegir un modelo cuya capacidad sea igual o superior a la potencia aparente mínima calculada. Como necesitamos 890 VA, los modelos de 750, 800 y 850 VA son insuficientes. El modelo de 1000 VA es el único que cumple el requisito."
},
{
    enunciado: "Un SAI admite 1000 VA, pero solo 500 W. ¿Sirve para alimentar una carga de 570 W?",
    opciones: ["Sí, tiene 1000 VA", "Sí, usando FP = 0,8", "Sí, con un margen del 25 %", "No, supera su límite en W"],
    correcta: 3,
    explicacion: "La correcta es No, supera su límite en W porque un SAI debe cumplir simultáneamente sus límites de potencia aparente (VA) y potencia activa (W). Aunque el modelo admita 1000 VA, solamente soporta 500 W. Como la carga consume 570 W, supera su capacidad y no resulta adecuado."
},
{
    enunciado: "Dos ordenadores consumen 250 W cada uno y dos monitores 35 W cada uno. ¿Cuál es la suma total?",
    opciones: ["570 W", "535 W", "500 W", "640 W"],
    correcta: 0,
    explicacion: "La correcta es 570 W porque debemos sumar la potencia activa de todos los dispositivos. Los dos ordenadores consumen 250 × 2 = 500 W y los dos monitores 35 × 2 = 70 W. Por tanto, la potencia total es 500 + 70 = 570 W."
},
{
    enunciado: "Después de seleccionar un SAI que supera los VA calculados, ¿qué comprobación falta?",
    opciones: ["Recalcular la frecuencia", "Verificar su límite en W", "Eliminar el margen", "Reducir la carga a la mitad"],
    correcta: 1,
    explicacion: "La correcta es Verificar su límite en W porque los SAI tienen dos capacidades que deben respetarse: la potencia aparente en VA y la potencia activa en W. Aunque el modelo supere los VA necesarios, también debemos comprobar que soporta los vatios consumidos por todos los dispositivos conectados."
},
{
    enunciado: "Si disminuye el FP y se mantiene constante la potencia activa, ¿qué sucede con los VA necesarios?",
    opciones: ["Disminuyen", "No cambian", "Se convierten en W", "Aumentan"],
    correcta: 3,
    explicacion: "La correcta es Aumentan porque la potencia aparente se calcula mediante la fórmula VA = W / FP. Si mantenemos los mismos vatios y disminuimos el factor de potencia, el resultado de la división aumenta. Por ejemplo, 400 W con FP de 0,8 requieren 500 VA, mientras que con FP de 0,5 requieren 800 VA."
},
{
    enunciado: "Una carga de 340 W tiene FP = 0,8. Con margen del 25 %, ¿qué valor mínimo se obtiene?",
    opciones: ["425 VA", "680 VA", "531,25 VA", "340 VA"],
    correcta: 2,
    explicacion: "La correcta es 531,25 VA porque primero dividimos la potencia activa entre el factor de potencia: 340 / 0,8 = 425 VA. Después añadimos el margen de seguridad del 25 % multiplicando por 1,25: 425 × 1,25 = 531,25 VA."
},
{
    enunciado: "¿Por qué no basta con fijarse solo en los VA anunciados de un SAI?",
    opciones: ["También tiene un límite en W", "El FP siempre es igual a uno", "Las potencias no deben sumarse", "Los VA indican la autonomía"],
    correcta: 0,
    explicacion: "La correcta es También tiene un límite en W porque un SAI dispone de una capacidad máxima de potencia aparente (VA) y otra de potencia activa (W). Para seleccionar correctamente el equipo debemos comprobar ambos valores, ya que podría tener suficientes VA, pero no soportar los vatios consumidos por los dispositivos."
},
{
    enunciado: "¿Qué técnica permite proteger un mensaje y después recuperar su contenido original con la clave adecuada?",
    opciones: ["Hash", "Cifrado", "Firma digital", "Compresión"],
    correcta: 1,
    explicacion: "La correcta es Cifrado porque es un procedimiento criptográfico que transforma información legible en datos ilegibles para impedir su lectura por personas no autorizadas. Mediante el descifrado y utilizando la clave adecuada, podemos recuperar el contenido original. A diferencia del cifrado, una función hash no permite recuperar el mensaje original."
},
{
    enunciado: "¿Qué caracteriza al cifrado simétrico?",
    opciones: ["Utiliza dos claves públicas", "Funciona sin claves", "Solo verifica firmas", "Utiliza la misma clave"],
    correcta: 3,
    explicacion: "La correcta es Utiliza la misma clave porque el cifrado simétrico emplea una única clave secreta tanto para cifrar como para descifrar la información. Por este motivo, las partes que necesitan comunicarse deben disponer de esa clave y mantenerla protegida. AES es uno de los algoritmos de cifrado simétrico más utilizados."
},
{
    enunciado: "¿Cuál de los siguientes es un algoritmo de cifrado simétrico?",
    opciones: ["AES-256", "SHA-256", "RSA", "ECC"],
    correcta: 0,
    explicacion: "La correcta es AES-256 porque AES es un algoritmo de cifrado simétrico que utiliza la misma clave para cifrar y descifrar los datos. AES-256 emplea claves de 256 bits. En cambio, SHA-256 es una función hash, mientras que RSA y ECC se utilizan en criptografía asimétrica."
},
{
    enunciado: "¿Qué propiedad de seguridad protege principalmente el cifrado AES?",
    opciones: ["Integridad", "Autenticidad", "Confidencialidad", "Disponibilidad"],
    correcta: 2,
    explicacion: "La correcta es Confidencialidad porque AES cifra la información para impedir que personas no autorizadas puedan leer su contenido. Solamente quien disponga de la clave adecuada puede descifrar los datos. Para garantizar también la integridad y autenticidad es necesario utilizar mecanismos adicionales o modos de cifrado autenticado, como AES-GCM."
},
{
    enunciado: "Si un mensaje se cifra con la clave pública del destinatario, ¿qué clave se usa para descifrarlo?",
    opciones: ["Pública del remitente", "Privada del destinatario", "Privada del remitente", "Pública del destinatario"],
    correcta: 1,
    explicacion: "La correcta es Privada del destinatario porque en el cifrado asimétrico utilizado para proteger la confidencialidad, el remitente cifra el mensaje con la clave pública del receptor y solamente la clave privada correspondiente permite descifrarlo. De esta manera, cualquiera puede enviar información cifrada al destinatario sin conocer su clave privada."
},
{
    enunciado: "¿Con qué clave se crea una firma digital en el esquema explicado?",
    opciones: ["Privada del firmante", "Pública del firmante", "Pública del receptor", "Compartida de AES"],
    correcta: 0,
    explicacion: "La correcta es Privada del firmante porque las firmas digitales se generan utilizando la clave privada de quien firma el documento. Posteriormente, cualquier persona que disponga de la clave pública correspondiente puede verificar la firma y comprobar que el documento no ha sido modificado desde que se firmó."
},
{
    enunciado: "¿Qué clave se utiliza para verificar una firma digital?",
    opciones: ["Privada del firmante", "Privada del receptor", "Pública del firmante", "Secreta de AES"],
    correcta: 2,
    explicacion: "La correcta es Pública del firmante porque una firma digital se genera utilizando la clave privada del firmante y se verifica con su clave pública correspondiente. Esto permite comprobar la integridad del documento y que la firma se creó con la clave privada asociada, sin necesidad de compartir dicha clave privada."
},
{
    enunciado: "¿Para qué se utiliza SHA-256 en la práctica de comprobación de archivos?",
    opciones: ["Ocultar el contenido", "Recuperar el original", "Generar un par RSA", "Detectar cambios"],
    correcta: 3,
    explicacion: "La correcta es Detectar cambios porque SHA-256 es una función hash que calcula una huella digital de 256 bits a partir del contenido de un archivo. Si el archivo se modifica, normalmente su hash será diferente. Por tanto, podemos comparar las huellas calculadas para comprobar si se ha alterado su contenido."
},
{
    enunciado: "¿Por qué una función hash no equivale a cifrar un documento?",
    opciones: ["Solo funciona con texto", "No es reversible", "Exige dos claves RSA", "Produce siempre un PDF"],
    correcta: 1,
    explicacion: "La correcta es No es reversible porque una función hash transforma los datos en una huella de longitud fija y no dispone de un procedimiento de descifrado para recuperar el contenido original. En cambio, el cifrado permite recuperar la información original mediante la clave adecuada. Por ello, el hash se utiliza principalmente para comprobar la integridad y no para ocultar información recuperable."
},
{
    enunciado: "¿Qué ocurre al verificar una firma digital si el documento fue modificado después de firmarse?",
    opciones: ["Falla la verificación", "La firma se actualiza", "Se descifra el archivo", "Cambia la clave pública"],
    correcta: 0,
    explicacion: "La correcta es Falla la verificación porque una firma digital está vinculada criptográficamente al contenido del documento firmado. Si ese contenido se modifica posteriormente, la firma original deja de corresponder con el documento actual y la comprobación de integridad falla. Esto permite detectar alteraciones realizadas después de la firma."
},
{
    enunciado: "¿Qué comando de OpenSSL calcula la huella SHA-256 de un archivo llamado documento.txt?",
    opciones: ["openssl enc -aes-256-cbc documento.txt", "openssl genpkey -algorithm RSA", "openssl pkey -in documento.txt -pubout", "openssl dgst -sha256 documento.txt"],
    correcta: 3,
    explicacion: "La correcta es openssl dgst -sha256 documento.txt porque el subcomando dgst permite calcular resúmenes o huellas digitales de archivos, mientras que -sha256 especifica el algoritmo utilizado. Este comando muestra el hash SHA-256 del contenido de documento.txt, que puede compararse con otra huella para comprobar su integridad."
},
{
    enunciado: "¿Qué operación realiza el comando openssl enc -aes-256-cbc cuando se usa para proteger un archivo?",
    opciones: ["Generar claves RSA", "Cifrar un archivo", "Calcular una huella", "Verificar una firma"],
    correcta: 1,
    explicacion: "La correcta es Cifrar un archivo porque el comando openssl enc -aes-256-cbc permite cifrar datos utilizando el algoritmo simétrico AES con una clave de 256 bits y el modo de operación CBC. Para recuperar el contenido original se utiliza el descifrado con la opción -d y la contraseña o clave correspondiente."
},
{
    enunciado: "Tras generar un par de claves RSA, ¿qué debe hacerse con el archivo de clave privada?",
    opciones: ["Compartirlo por correo", "Publicarlo en una web", "Mantenerlo protegido", "Adjuntarlo a cada firma"],
    correcta: 2,
    explicacion: "La correcta es Mantenerlo protegido porque la clave privada es información confidencial que debe permanecer exclusivamente bajo el control de su propietario. Si alguien consigue acceder a ella, podría descifrar información dirigida al propietario o generar firmas digitales haciéndose pasar por él. La clave que puede compartirse es la pública."
},
{
    enunciado: "¿En qué situación se aplica TLS/HTTPS para proteger información?",
    opciones: ["Copias locales desconectadas", "Ventilación de servidores", "Cálculo de potencia en VA", "Comunicaciones en tránsito"],
    correcta: 3,
    explicacion: "La correcta es Comunicaciones en tránsito porque TLS es un protocolo criptográfico que protege los datos mientras se transmiten entre dispositivos a través de una red. HTTPS utiliza TLS para proporcionar confidencialidad, integridad y autenticación del servidor. Para proteger archivos almacenados en discos o copias de seguridad se utilizan mecanismos de cifrado de datos en reposo."
},
{
    enunciado: "¿Qué opción es apropiada para almacenar contraseñas según los apuntes?",
    opciones: ["SHA-256 sin salt", "Argon2id con salt", "AES-256-CBC reversible", "RSA con clave pública"],
    correcta: 1,
    explicacion: "La correcta es Argon2id con salt porque Argon2id es un algoritmo específicamente diseñado para almacenar contraseñas de forma segura mediante funciones hash resistentes a ataques de fuerza bruta. El salt es un valor aleatorio único que se incorpora a cada contraseña para dificultar ataques con tablas precalculadas. También existen alternativas como scrypt, bcrypt o PBKDF2, utilizando parámetros de coste adecuados."
},
{
    enunciado: "¿Qué ocurre durante la identificación de un usuario?",
    opciones: ["El sistema verifica su identidad", "El usuario declara quién es", "Se asignan permisos de escritura", "Se comprueba una ACL del recurso"],
    correcta: 1,
    explicacion: "La correcta es El usuario declara quién es porque la identificación consiste en indicar una identidad, por ejemplo, mediante un nombre de usuario. Posteriormente, la autenticación comprueba que esa identidad es verdadera utilizando credenciales como contraseñas o factores biométricos."
},
{
    enunciado: "¿Qué proceso verifica que una persona es quien afirma ser?",
    opciones: ["Auditoría", "Autorización", "Identificación", "Autenticación"],
    correcta: 3,
    explicacion: "La correcta es Autenticación porque es el proceso que comprueba que un usuario es realmente quien afirma ser, utilizando contraseñas, tarjetas o factores biométricos. La identificación consiste en declarar quién es el usuario, mientras que la autorización determina qué recursos puede utilizar una vez autenticado."
},
{
    enunciado: "¿Qué determina la autorización tras iniciar sesión?",
    opciones: ["Los recursos y acciones permitidos", "La contraseña que debe utilizar", "El nombre del equipo del usuario", "La identidad que declara el usuario"],
    correcta: 0,
    explicacion: "La correcta es Los recursos y acciones permitidos porque la autorización determina qué operaciones puede realizar un usuario autenticado. Para ello, el sistema utiliza mecanismos como roles, permisos y listas de control de acceso (ACL), que establecen si puede leer, modificar o ejecutar determinados recursos."
},
{
    enunciado: "¿Qué exige el principio de mínimo privilegio?",
    opciones: ["Dar acceso completo a cada grupo", "Mantener permisos aunque caduquen", "Conceder solo permisos necesarios", "Asignar permisos iguales a todos"],
    correcta: 2,
    explicacion: "La correcta es Conceder solo permisos necesarios porque el principio de mínimo privilegio establece que cada usuario o proceso debe disponer únicamente de los permisos imprescindibles para desempeñar sus funciones y durante el tiempo necesario. Esto reduce los riesgos de accesos indebidos y limita las consecuencias de una cuenta comprometida."
},
{
    enunciado: "¿Qué permite el permiso x sobre un directorio en Linux?",
    opciones: ["Leer el contenido de cada archivo", "Atravesar el directorio", "Listar todos sus nombres sin r", "Cambiar el propietario de archivos"],
    correcta: 1,
    explicacion: "La correcta es Atravesar el directorio porque en Linux el permiso de ejecución (x) aplicado a un directorio permite acceder a sus elementos cuando conocemos sus nombres, siempre que dispongamos de los permisos necesarios. El permiso de lectura (r) permite listar las entradas del directorio, mientras que el de escritura (w) permite modificar sus entradas si también tenemos x."
},
{
    enunciado: "¿Qué permisos representa chmod 640 informe.txt?",
    opciones: ["Propietario rwx, grupo r--, otros ---", "Propietario rw-, grupo rw-, otros ---", "Propietario r--, grupo rw-, otros ---", "Propietario rw-, grupo r--, otros ---"],
    correcta: 3,
    explicacion: "La correcta es Propietario rw-, grupo r--, otros --- porque los permisos numéricos de Linux se calculan sumando lectura (4), escritura (2) y ejecución (1). El 6 representa lectura y escritura (4+2), el 4 solamente lectura y el 0 ningún permiso. Por tanto, el propietario puede leer y escribir, el grupo solo leer y los demás no tienen acceso."
},
{
    enunciado: "¿Por qué se desaconseja aplicar chmod 777 indiscriminadamente?",
    opciones: ["Concede permisos a todos", "Bloquea a los usuarios del grupo", "Desactiva las ACL predeterminadas", "Elimina la cuenta propietaria"],
    correcta: 0,
    explicacion: "La correcta es Concede permisos a todos porque chmod 777 proporciona permisos de lectura, escritura y ejecución al propietario, al grupo y al resto de usuarios. Esto puede permitir modificaciones o accesos no autorizados y vulnera el principio de mínimo privilegio, que recomienda conceder únicamente los permisos necesarios."
},
{
    enunciado: "¿Qué modifica chown root:contabilidad /empresa/contabilidad?",
    opciones: ["La contraseña del grupo contabilidad", "Los permisos de todos los archivos", "El propietario y el grupo del directorio", "La ACL predeterminada del directorio"],
    correcta: 2,
    explicacion: "La correcta es El propietario y el grupo del directorio porque el comando chown permite modificar la propiedad de archivos y directorios. En este caso, root pasa a ser el propietario y contabilidad el grupo asociado al directorio /empresa/contabilidad. El comando no modifica por sí mismo los permisos de lectura, escritura o ejecución."
},
{
    enunciado: "¿Qué ventaja aportan las ACL frente a propietario-grupo-otros?",
    opciones: ["Permisos específicos por usuario o grupo", "Copias incrementales de directorios", "Cifrado automático de archivos nuevos", "Eliminación de los permisos básicos"],
    correcta: 0,
    explicacion: "La correcta es Permisos específicos por usuario o grupo porque las listas de control de acceso (ACL) permiten asignar permisos adicionales a usuarios y grupos concretos sin limitarse a las tres categorías tradicionales de Linux: propietario, grupo y otros. Esto facilita establecer excepciones y gestionar accesos de manera más granular."
},
{
    enunciado: "¿Qué comando muestra las entradas ACL de un archivo?",
    opciones: ["chmod 770 archivo.txt", "setfacl -b archivo.txt", "groupadd archivo.txt", "getfacl archivo.txt"],
    correcta: 3,
    explicacion: "La correcta es getfacl archivo.txt porque el comando getfacl permite consultar los permisos y las entradas ACL asociadas a un archivo o directorio. En cambio, setfacl se utiliza para modificar o eliminar entradas ACL, mientras que chmod modifica permisos y groupadd crea grupos."
},
{
    enunciado: "¿Qué hace setfacl -m u:pedro:r-- informe.txt?",
    opciones: ["Convierte a Pedro en propietario", "Concede lectura ACL a Pedro", "Borra la cuenta de Pedro", "Concede ejecución a todo el grupo"],
    correcta: 1,
    explicacion: "La correcta es Concede lectura ACL a Pedro porque setfacl permite modificar las listas de control de acceso de archivos y directorios. La opción -m añade o modifica una entrada, u:pedro identifica al usuario Pedro y r-- establece el permiso de lectura. La máscara ACL puede limitar el permiso efectivo concedido."
},
{
    enunciado: "¿Para qué se configuran ACL predeterminadas en un directorio?",
    opciones: ["Para heredar reglas en nuevos elementos", "Para impedir que se creen subcarpetas", "Para cifrar los archivos existentes", "Para borrar permisos al cerrar sesión"],
    correcta: 0,
    explicacion: "La correcta es Para heredar reglas en nuevos elementos porque las ACL predeterminadas permiten establecer permisos que heredarán los archivos y subdirectorios creados dentro de un directorio. Esto facilita mantener una política de permisos coherente sin tener que configurar manualmente cada nuevo elemento, aunque los permisos efectivos también dependen del modo de creación."
},
{
    enunciado: "¿Qué puede hacer la máscara de una ACL?",
    opciones: ["Crear grupos suplementarios", "Cambiar el UID del propietario", "Limitar los permisos efectivos", "Borrar el historial de accesos"],
    correcta: 2,
    explicacion: "La correcta es Limitar los permisos efectivos porque la máscara ACL establece el máximo de permisos efectivos que pueden tener determinadas entradas de usuarios y grupos. Por ejemplo, aunque una entrada conceda lectura y escritura, una máscara que solamente permita lectura puede impedir la escritura. Podemos consultar estos permisos mediante getfacl."
},
{
    enunciado: "¿Cuál de los siguientes es un factor de posesión?",
    opciones: ["Una contraseña larga", "Una huella dactilar", "Una frase secreta", "Una llave de seguridad"],
    correcta: 3,
    explicacion: "La correcta es Una llave de seguridad porque los factores de autenticación se clasifican en conocimiento (algo que sabes), posesión (algo que tienes) e inherencia (algo que eres). Una llave física pertenece a posesión, las contraseñas y frases secretas a conocimiento y las huellas dactilares a inherencia."
},
{
    enunciado: "¿Cuál de estas combinaciones constituye MFA?",
    opciones: ["PIN y frase secreta", "Contraseña y llave física", "Dos preguntas de seguridad", "Contraseña y otra contraseña"],
    correcta: 1,
    explicacion: "La correcta es Contraseña y llave física porque la autenticación multifactor (MFA) combina al menos dos factores de categorías diferentes. La contraseña es un factor de conocimiento y la llave física es un factor de posesión. Utilizar dos contraseñas o un PIN y una frase secreta no constituye MFA porque pertenecen a la misma categoría."
},
{
    enunciado: "¿Qué característica es prioritaria en una buena contraseña?",
    opciones: ["Ser larga, única e impredecible", "Cambiar una letra por un símbolo", "Incluir el nombre de la empresa", "Repetirse en varias aplicaciones"],
    correcta: 0,
    explicacion: "La correcta es Ser larga, única e impredecible porque una contraseña segura debe ser suficientemente extensa, difícil de adivinar y diferente para cada servicio. Sustituir letras por símbolos no garantiza seguridad si se utilizan patrones previsibles. La longitud y la ausencia de reutilización son especialmente importantes para proteger las cuentas."
},
{
    enunciado: "¿Qué medida dificulta los intentos automatizados de adivinar contraseñas?",
    opciones: ["Compartir cuentas de usuario", "Permitir contraseñas reutilizadas", "Limitar los intentos fallidos", "Desactivar los registros de acceso"],
    correcta: 2,
    explicacion: "La correcta es Limitar los intentos fallidos porque restringir o ralentizar los intentos consecutivos de autenticación dificulta que un atacante pruebe grandes cantidades de contraseñas automáticamente. Esta medida ayuda a proteger frente a ataques de fuerza bruta, aunque debe configurarse adecuadamente para evitar bloqueos abusivos de cuentas."
},
{
    enunciado: "¿Qué directorio se relaciona con la configuración de PAM en Ubuntu?",
    opciones: ["/etc/group.d/", "/etc/pam.d/", "/home/pam/", "/var/log/pam.d/"],
    correcta: 1,
    explicacion: "La correcta es /etc/pam.d/ porque PAM (Pluggable Authentication Modules) es un sistema modular de autenticación utilizado en Linux. En Ubuntu, este directorio contiene archivos de configuración que establecen cómo se realizan los procesos de autenticación, autorización y gestión de sesiones de distintos servicios."
},
{
    enunciado: "¿Qué significa aplicar seguridad por capas al acceso lógico?",
    opciones: ["Dar acceso total a administradores", "Confiar solo en el antivirus", "Usar únicamente contraseñas largas", "Combinar controles complementarios"],
    correcta: 3,
    explicacion: "La correcta es Combinar controles complementarios porque la seguridad por capas consiste en utilizar varias medidas de protección que se refuercen entre sí. Por ejemplo, contraseñas robustas, autenticación multifactor, mínimo privilegio, ACL y registros de acceso. Así, si una medida falla, las demás pueden seguir protegiendo el sistema."
},
{
    enunciado: "¿Qué comando crea una cuenta local en la práctica de Ubuntu?",
    opciones: ["sudo adduser ana", "sudo groupadd ana", "sudo groups ana", "sudo chage -l ana"],
    correcta: 0,
    explicacion: "La correcta es sudo adduser ana porque el comando adduser permite crear una cuenta local de usuario en Ubuntu y normalmente configura su directorio personal y solicita establecer una contraseña. En cambio, groupadd crea grupos, groups muestra la pertenencia a grupos y chage consulta o modifica parámetros de caducidad de contraseñas."
},
{
    enunciado: "¿Qué comando crea un grupo llamado contabilidad?",
    opciones: ["sudo chmod contabilidad", "sudo getfacl contabilidad", "sudo groupadd contabilidad", "sudo adduser contabilidad"],
    correcta: 2,
    explicacion: "La correcta es sudo groupadd contabilidad porque groupadd es el comando de Linux utilizado para crear grupos de usuarios. En este caso, crea un grupo llamado contabilidad, que posteriormente puede utilizarse para organizar usuarios y asignar permisos compartidos sobre archivos y directorios."
},
{
    enunciado: "¿Qué consigue sudo usermod -aG contabilidad ana?",
    opciones: ["Cambiar el nombre de Ana", "Añadir Ana al grupo suplementario", "Eliminar los otros grupos de Ana", "Convertir a Ana en propietaria de /empresa"],
    correcta: 1,
    explicacion: "La correcta es Añadir Ana al grupo suplementario porque usermod permite modificar cuentas de usuario. La opción -G especifica el grupo suplementario y -a significa añadir sin eliminar los grupos anteriores. Es importante utilizar ambas opciones juntas, ya que omitir -a puede sustituir la lista de grupos suplementarios existentes."
},
{
    enunciado: "¿Qué comando permite comprobar los grupos de Ana?",
    opciones: ["chmod ana", "mkdir ana", "setfacl ana", "groups ana"],
    correcta: 3,
    explicacion: "La correcta es groups ana porque el comando groups muestra los grupos a los que pertenece un usuario de Linux. Esto permite comprobar si Ana forma parte de los grupos necesarios para acceder a determinados recursos. También puede utilizarse id ana para consultar su UID, GID y grupos asociados."
},
{
    enunciado: "¿Qué permite la opción -p en mkdir -p /empresa/marketing?",
    opciones: ["Asignar el grupo marketing", "Conceder una ACL a Marketing", "Crear directorios intermedios", "Aplicar automáticamente chmod 770"],
    correcta: 2,
    explicacion: "La correcta es Crear directorios intermedios porque la opción -p del comando mkdir crea automáticamente los directorios padre que no existan en la ruta indicada. Por ejemplo, si /empresa no existe, lo creará antes de crear /empresa/marketing. Además, evita generar un error si el directorio ya existe."
},
{
    enunciado: "¿Qué efecto tiene chmod 770 /empresa/marketing?",
    opciones: ["Acceso total a propietario y grupo", "Acceso total a cualquier usuario", "Solo lectura para el grupo", "Ningún acceso para el propietario"],
    correcta: 0,
    explicacion: "La correcta es Acceso total a propietario y grupo porque chmod 770 asigna los permisos rwx al propietario (7), rwx al grupo (7) y ningún permiso al resto de usuarios (0). Esto permite que el propietario y los miembros del grupo puedan leer, escribir y atravesar el directorio, mientras que los demás no tienen acceso mediante los permisos básicos."
},
{
    enunciado: "¿Para qué se usa sudo -u laura ls /empresa/marketing?",
    opciones: ["Crear una contraseña para Laura", "Probar el acceso como Laura", "Cambiar el grupo del directorio", "Aplicar permisos ACL a Marketing"],
    correcta: 1,
    explicacion: "La correcta es Probar el acceso como Laura porque la opción -u del comando sudo permite ejecutar una instrucción utilizando la identidad de otro usuario. En este caso, ejecutamos ls como Laura para comprobar si tiene permisos suficientes para listar el contenido del directorio /empresa/marketing."
},
{
    enunciado: "¿Qué objetivo tiene chmod 2770 sobre una carpeta compartida?",
    opciones: ["Bloquear la creación de archivos", "Dar acceso total a otros usuarios", "Eliminar el grupo propietario", "Activar SGID para heredar el grupo"],
    correcta: 3,
    explicacion: "La correcta es Activar SGID para heredar el grupo porque el primer dígito 2 de chmod 2770 activa el bit SGID (Set Group ID) en el directorio. Esto hace que los archivos y subdirectorios creados dentro hereden el grupo propietario del directorio, facilitando el trabajo compartido entre usuarios de un mismo grupo."
},
{
    enunciado: "¿Qué permiso necesita Pedro en /empresa/contabilidad para leer un archivo concreto si conoce su ruta?",
    opciones: ["Ser propietario del directorio", "Permiso w sobre el directorio", "Permiso x sobre el directorio", "Permiso r sobre todos los archivos"],
    correcta: 2,
    explicacion: "La correcta es Permiso x sobre el directorio porque en Linux el permiso de ejecución (x) sobre un directorio permite atravesarlo y acceder a archivos cuya ruta conocemos. Para leer el contenido del archivo, Pedro también necesita permiso de lectura sobre ese archivo y permiso de paso por los directorios anteriores de la ruta."
},
{
    enunciado: "¿Qué hace setfacl -x u:pedro informe.txt?",
    opciones: ["Elimina el archivo informe.txt", "Crea una ACL para Pedro", "Quita el permiso a todos los usuarios", "Retira la entrada ACL de Pedro"],
    correcta: 3,
    explicacion: "La correcta es Retira la entrada ACL de Pedro porque la opción -x del comando setfacl elimina una entrada específica de la lista de control de acceso. En este caso, elimina la entrada correspondiente al usuario Pedro del archivo informe.txt. Es útil para revocar permisos adicionales cuando ya no son necesarios."
},
{
    enunciado: "¿Qué establece sudo chage -M 90 ana?",
    opciones: ["Un aviso previo de 90 días", "Un bloqueo tras 90 intentos", "Una duración mínima de 90 días", "Una duración máxima de 90 días"],
    correcta: 3,
    explicacion: "La correcta es Una duración máxima de 90 días porque el comando chage permite gestionar la caducidad de las contraseñas de los usuarios. La opción -M establece el número máximo de días durante los que una contraseña puede utilizarse antes de que deba cambiarse. La opción -m establece la duración mínima y -W configura los días de aviso antes del vencimiento."
},
{
    enunciado: "¿Qué representa el RPO de un servicio?",
    opciones: ["Tiempo previsto para reparar el servidor", "Plazo de conservación de los respaldos", "Máxima pérdida de datos que se admite", "Duración de la última copia completa"],
    correcta: 2,
    explicacion: "La correcta es Máxima pérdida de datos que se admite porque el RPO (Recovery Point Objective) establece la cantidad máxima de información reciente que una organización puede permitirse perder ante un incidente. Por ejemplo, un RPO de una hora significa que debemos disponer de copias suficientemente frecuentes para no perder más de una hora de datos."
},
{
    enunciado: "¿Qué establece el RTO en un plan de recuperación?",
    opciones: ["Tiempo máximo aceptable para restablecer un servicio tras una interrupción", "Frecuencia con que deben ejecutarse los respaldos", "Cantidad de información que se puede perder", "Número mínimo de versiones almacenadas"],
    correcta: 0,
    explicacion: "La correcta es Tiempo máximo aceptable para restablecer un servicio tras una interrupción porque el RTO (Recovery Time Objective) indica cuánto tiempo puede permanecer un servicio sin funcionar después de un incidente. Por ejemplo, un RTO de dos horas significa que el servicio debe recuperarse dentro de ese plazo. El RPO, en cambio, se refiere a la pérdida de datos admisible."
},
{
    enunciado: "¿Qué contiene una copia completa tradicional?",
    opciones: ["Solo los archivos modificados durante el día", "Únicamente los archivos creados recientemente", "Los cambios posteriores a la última copia", "Todos los datos seleccionados"],
    correcta: 3,
    explicacion: "La correcta es Todos los datos seleccionados porque una copia de seguridad completa guarda todos los archivos y datos incluidos en el respaldo, independientemente de si han cambiado desde la copia anterior. Su principal ventaja es que facilita la restauración, aunque requiere más espacio de almacenamiento y tiempo de ejecución."
},
{
    enunciado: "¿Qué datos incluye una copia incremental tradicional?",
    opciones: ["Todos los archivos del sistema de origen", "Cambios desde la copia anterior", "Cambios desde la primera copia completa", "Solo los archivos borrados en el último mes"],
    correcta: 1,
    explicacion: "La correcta es Cambios desde la copia anterior porque una copia incremental almacena únicamente los datos que han cambiado desde la última copia realizada, ya sea completa o incremental. Esto reduce el tiempo y el espacio de almacenamiento, aunque para restaurar los datos puede ser necesario disponer de la copia completa inicial y toda la cadena de incrementales posteriores."
},
{
    enunciado: "¿Desde qué punto acumula cambios una copia diferencial?",
    opciones: ["Desde la copia incremental más reciente", "Desde el último reinicio del servidor", "Cambios acumulados desde la última copia completa realizada", "Desde la primera versión de cada archivo"],
    correcta: 2,
    explicacion: "La correcta es Cambios acumulados desde la última copia completa realizada porque una copia diferencial guarda todos los cambios producidos desde la última copia completa, independientemente de las diferenciales intermedias. Por ello, su tamaño suele aumentar con el paso de los días hasta que se realiza una nueva copia completa."
},
{
    enunciado: "Hay una copia completa el domingo y diferenciales de lunes a viernes. ¿Qué se necesita para recuperar el estado del viernes?",
    opciones: ["Copia completa y diferencial del viernes", "Las cinco diferenciales de la semana", "Solo la diferencial del viernes", "Completa y diferenciales de lunes a jueves"],
    correcta: 0,
    explicacion: "La correcta es Copia completa y diferencial del viernes porque una copia diferencial contiene todos los cambios acumulados desde la última copia completa. Para recuperar el estado del viernes solamente necesitamos restaurar la copia completa del domingo y después aplicar la diferencial del viernes, sin utilizar las diferenciales de los días anteriores."
},
{
    enunciado: "Con una completa el domingo e incrementales diarios, ¿qué se necesita para restaurar el jueves?",
    opciones: ["Solo el incremental del jueves", "La completa y el incremental del jueves", "La diferencial del jueves sin copia base", "Completa y cadena incremental"],
    correcta: 3,
    explicacion: "La correcta es Completa y cadena incremental porque las copias incrementales almacenan los cambios desde la copia inmediatamente anterior. Para recuperar el estado del jueves necesitamos la copia completa del domingo y los incrementales de lunes, martes, miércoles y jueves. Si falta alguno de estos respaldos, la restauración tradicional puede quedar incompleta."
},
{
    enunciado: "¿Qué ventaja suelen tener las copias incrementales frecuentes?",
    opciones: ["Restauración siempre independiente de otras copias", "Menos datos transferidos en cada ejecución", "Eliminación automática de todos los archivos antiguos", "Ausencia total de dependencias entre respaldos"],
    correcta: 1,
    explicacion: "La correcta es Menos datos transferidos en cada ejecución porque las copias incrementales solamente almacenan los cambios realizados desde el respaldo anterior. Esto permite ahorrar espacio de almacenamiento y reducir el tiempo necesario para hacer cada copia. Como inconveniente, la restauración tradicional puede depender de varios respaldos anteriores."
},
{
    enunciado: "¿Qué significa el número 3 en la regla de copias 3-2-1?",
    opciones: ["Tres ubicaciones físicas obligatorias", "Tres copias completas cada semana", "Tres ejemplares de los datos: el original y dos copias de seguridad", "Tres tipos de cifrado para los respaldos"],
    correcta: 2,
    explicacion: "La correcta es Tres ejemplares de los datos: el original y dos copias de seguridad porque la regla 3-2-1 recomienda mantener tres ejemplares de la información, utilizar dos tipos de medios de almacenamiento y conservar al menos una copia fuera de la ubicación principal. Esta estrategia reduce el riesgo de pérdida definitiva de datos."
},
{
    enunciado: "¿Qué exige el número 1 de la regla 3-2-1?",
    opciones: ["Una copia fuera del sitio", "Una única contraseña para todos los respaldos", "Un solo repositorio en el disco de origen", "Una copia diaria guardada en la misma carpeta"],
    correcta: 0,
    explicacion: "La correcta es Una copia fuera del sitio porque el número 1 de la regla 3-2-1 establece que al menos una copia de seguridad debe almacenarse en una ubicación diferente de la principal. De esta manera, si ocurre un incendio, robo o desastre que afecte a las instalaciones, los datos podrán recuperarse desde otro lugar."
},
{
    enunciado: "¿Por qué RAID o sincronización no sustituyen una copia histórica?",
    opciones: ["Porque siempre impiden acceder a los archivos", "Porque obligan a apagar todos los servidores", "Porque únicamente funcionan con almacenamiento remoto", "También propagan borrados"],
    correcta: 3,
    explicacion: "La correcta es También propagan borrados porque los sistemas RAID y de sincronización pueden replicar modificaciones o eliminaciones no deseadas. Aunque RAID mejora la disponibilidad frente a determinados fallos de discos y la sincronización mantiene datos actualizados, ninguno garantiza por sí mismo disponer de versiones históricas para recuperar información eliminada o modificada accidentalmente."
},
{
    enunciado: "¿Qué caracteriza a una copia de seguridad offline?",
    opciones: ["Se almacena únicamente en servidores públicos", "Permanece desconectada", "Se actualiza en tiempo real desde producción", "Se conserva sin cifrado para acelerar la lectura"],
    correcta: 1,
    explicacion: "La correcta es Permanece desconectada porque una copia offline se mantiene físicamente o lógicamente aislada de los sistemas activos y de la red. Esta separación dificulta que un atacante o un ransomware pueda acceder a ella, modificarla o eliminarla mientras permanece desconectada."
},
{
    enunciado: "¿Qué distingue a una copia inmutable?",
    opciones: ["Solo permite recuperar el último archivo editado", "Necesita estar siempre conectada a Internet", "No puede modificarse durante el plazo fijado", "Se elimina automáticamente después de cada restauración"],
    correcta: 2,
    explicacion: "La correcta es No puede modificarse durante el plazo fijado porque una copia inmutable está protegida contra modificaciones o eliminaciones durante un periodo de retención establecido. Esto proporciona una defensa adicional frente a ransomware y borrados maliciosos, aunque sigue siendo necesario realizar pruebas de restauración."
},
{
    enunciado: "¿Para qué resulta especialmente útil una imagen de sistema?",
    opciones: ["Recuperar el sistema operativo, las aplicaciones y su configuración", "Comparar únicamente dos documentos de texto", "Consultar el historial de un solo archivo", "Detectar intentos de acceso no autorizado"],
    correcta: 0,
    explicacion: "La correcta es Recuperar el sistema operativo, las aplicaciones y su configuración porque una imagen de sistema puede incluir el sistema operativo, programas instalados, configuraciones y datos del equipo. Esto permite recuperar un ordenador o servidor completo después de una avería sin necesidad de reinstalar y configurar manualmente todos sus componentes."
},
{
    enunciado: "¿Qué acción demuestra mejor que una copia podrá recuperarse?",
    opciones: ["Comprobar únicamente el tamaño del archivo", "Leer solo el mensaje de copia finalizada", "Guardar la copia junto al disco de origen", "Restaurar y validar los datos"],
    correcta: 3,
    explicacion: "La correcta es Restaurar y validar los datos porque una copia de seguridad solamente demuestra ser recuperable cuando conseguimos restaurarla correctamente y comprobamos que los archivos y servicios funcionan. Que el programa indique que la copia terminó sin errores no garantiza que todos los datos puedan recuperarse."
},
{
    enunciado: "¿Qué característica de seguridad incorpora Restic a sus repositorios?",
    opciones: ["Acceso público sin credenciales de recuperación", "Cifrado de los datos", "Eliminación obligatoria de las versiones antiguas", "Desactivación de la verificación de integridad"],
    correcta: 1,
    explicacion: "La correcta es Cifrado de los datos porque Restic es una herramienta de copias de seguridad que cifra la información almacenada en sus repositorios para proteger su confidencialidad. Para acceder a las copias y restaurarlas es necesario disponer de la contraseña adecuada, por lo que resulta fundamental conservarla de forma segura."
},
{
    enunciado: "¿Qué comando instala Restic desde los repositorios de Ubuntu?",
    opciones: ["sudo apt remove restic --purge", "restic backup /etc --tag inicio", "sudo apt install -y restic", "sudo systemctl enable restic"],
    correcta: 2,
    explicacion: "La correcta es sudo apt install -y restic porque apt install permite instalar paquetes desde los repositorios de Ubuntu. La opción -y responde afirmativamente a las confirmaciones de la instalación. Una vez instalado, podemos comprobar que Restic funciona ejecutando el comando restic version."
},
{
    enunciado: "¿Qué hace el comando restic init?",
    opciones: ["Inicializa un repositorio cifrado para almacenar las copias de seguridad", "Elimina las instantáneas más antiguas", "Restaura automáticamente los archivos", "Compara el contenido de dos snapshots"],
    correcta: 0,
    explicacion: "La correcta es Inicializa un repositorio cifrado para almacenar las copias de seguridad porque restic init prepara el destino configurado para guardar respaldos y establece la estructura del repositorio cifrado. Este paso debe realizarse antes de crear la primera copia de seguridad. El repositorio inicializado todavía no contiene snapshots."
},
{
    enunciado: "¿Qué define la variable RESTIC_REPOSITORY?",
    opciones: ["La contraseña usada para cifrar los archivos", "El intervalo de ejecución de cron", "El número de copias diarias que deben conservarse", "La ubicación del repositorio de copias"],
    correcta: 3,
    explicacion: "La correcta es La ubicación del repositorio de copias porque RESTIC_REPOSITORY es una variable de entorno que indica a Restic dónde se encuentra el repositorio de copias de seguridad. Puede apuntar a una carpeta local o a un destino remoto compatible. Esto evita tener que indicar manualmente la ubicación del repositorio en cada comando."
},
{
    enunciado: "¿Qué realiza restic backup sobre una carpeta seleccionada?",
    opciones: ["Borra todas las versiones previas del repositorio", "Recupera archivos desde una copia antigua", "Crea un snapshot", "Formatea la unidad de destino del respaldo"],
    correcta: 2,
    explicacion: "La correcta es Crea un snapshot porque restic backup realiza una copia de seguridad de los archivos y directorios indicados, almacenando una nueva instantánea en el repositorio. Restic utiliza deduplicación para reutilizar los bloques de datos que ya están guardados, reduciendo el espacio necesario para las copias sucesivas."
},
{
    enunciado: "¿Qué muestra restic snapshots?",
    opciones: ["Las copias disponibles", "Las diferencias entre dos archivos de origen", "El contenido íntegro de cada archivo cifrado", "Las tareas que ejecutará cron el mes próximo"],
    correcta: 0,
    explicacion: "La correcta es Las copias disponibles porque restic snapshots muestra una lista de las instantáneas almacenadas en el repositorio, incluyendo identificadores, fechas y rutas respaldadas. Este comando permite consultar el historial de copias y seleccionar qué snapshot queremos utilizar para una restauración."
},
{
    enunciado: "¿Para qué se utiliza restic diff ID1 ID2?",
    opciones: ["Crear una copia completa independiente", "Compara el contenido de dos instantáneas", "Restaurar un directorio en el sistema raíz", "Eliminar todas las instantáneas anteriores"],
    correcta: 1,
    explicacion: "La correcta es Compara el contenido de dos instantáneas porque restic diff permite identificar las diferencias entre dos snapshots mediante sus identificadores. Muestra qué archivos se han añadido, modificado o eliminado entre ambas copias, facilitando el seguimiento de los cambios realizados en los datos respaldados."
},
{
    enunciado: "¿Qué permite consultar restic ls latest?",
    opciones: ["Solo las contraseñas del repositorio", "La lista de tareas programadas en cron", "Todos los bloques físicos sin deduplicar", "Lista los archivos y rutas incluidos en la instantánea más reciente"],
    correcta: 3,
    explicacion: "La correcta es Lista los archivos y rutas incluidos en la instantánea más reciente porque restic ls latest muestra el contenido del último snapshot almacenado. Es útil para comprobar qué archivos y directorios están incluidos en la copia sin necesidad de restaurarlos."
},
{
    enunciado: "¿Qué hace restic restore latest --target /ruta?",
    opciones: ["Destruye el repositorio y crea uno nuevo", "Elimina todas las copias salvo la última", "Restaura en /ruta", "Crea una imagen arrancable del disco origen"],
    correcta: 2,
    explicacion: "La correcta es Restaura en /ruta porque restic restore latest recupera los archivos de la instantánea más reciente y la opción --target especifica el directorio donde se guardarán los datos restaurados. Es recomendable realizar primero las pruebas de restauración en una carpeta diferente de la original para evitar sobrescrituras accidentales."
},
{
    enunciado: "¿Qué añade --read-data al comando restic check?",
    opciones: ["También comprueba los datos guardados", "Borrado de snapshots sin referencias", "Cambio de contraseña del repositorio", "Restauración automática de todos los archivos"],
    correcta: 0,
    explicacion: "La correcta es También comprueba los datos guardados porque restic check verifica la estructura y los metadatos del repositorio, mientras que la opción --read-data añade la lectura y comprobación de los datos almacenados. Esto permite detectar posibles problemas de integridad, aunque no sustituye las pruebas reales de restauración."
},
{
    enunciado: "¿Para qué se usa --dry-run con restic forget?",
    opciones: ["Restaurar todas las copias eliminadas", "Simular sin borrar", "Cambiar el destino de los respaldos", "Cifrar por segunda vez los archivos"],
    correcta: 1,
    explicacion: "La correcta es Simular sin borrar porque la opción --dry-run permite comprobar qué snapshots serían seleccionados para su eliminación según la política de retención, sin ejecutar realmente el borrado. Es especialmente útil para verificar que los criterios establecidos son correctos antes de realizar operaciones destructivas."
},
{
    enunciado: "¿Qué función cumple restic prune después de aplicar una retención?",
    opciones: ["Crear automáticamente un repositorio remoto", "Convertir snapshots en imágenes arrancables", "Libera espacio eliminando bloques que ya no necesitan las copias conservadas", "Modificar el contenido de los archivos originales"],
    correcta: 2,
    explicacion: "La correcta es Libera espacio eliminando bloques que ya no necesitan las copias conservadas porque restic prune realiza tareas de mantenimiento del repositorio y elimina datos que ya no están referenciados por los snapshots existentes. Normalmente se utiliza después de restic forget para recuperar el espacio de almacenamiento ocupado por datos que ya no son necesarios."
},
{
    enunciado: "¿Cómo almacena Restic las sucesivas versiones de los archivos?",
    opciones: ["Imágenes de disco arrancables en cada ejecución", "Copias diferenciales con --differential", "Tres copias físicas completas sin reutilizar datos", "Versiones lógicas con bloques deduplicados"],
    correcta: 3,
    explicacion: "La correcta es Versiones lógicas con bloques deduplicados porque Restic crea snapshots que representan versiones completas de los archivos, pero internamente reutiliza los bloques de datos que ya existen en el repositorio. Esto evita almacenar repetidamente información idéntica y permite ahorrar espacio. Restic no necesita un modo diferencial clásico."
},
{
    enunciado: "¿Qué herramientas se utilizan en el laboratorio para simular una diferencial clásica?",
    opciones: ["tar y find", "restic init y restic check --read-data", "cron y systemctl para generar snapshots", "Clonezilla y dd para reconstruir discos"],
    correcta: 0,
    explicacion: "La correcta es tar y find porque en Linux el comando find permite localizar archivos modificados desde una fecha o referencia determinada, mientras que tar permite agrupar esos archivos en un paquete. Combinando ambas herramientas podemos simular una copia diferencial clásica, aunque esta técnica no gestiona completamente situaciones como borrados, renombrados o cambios en aplicaciones activas."
},
{
    enunciado: "¿Cuándo se ejecuta una tarea cron definida como 0 20 * * *?",
    opciones: ["Cada veinte minutos durante todo el día", "Todos los días a las 20:00, siempre que el equipo y cron estén activos", "Solo los domingos a las ocho de la tarde", "El primer día de cada mes a las 20:00"],
    correcta: 1,
    explicacion: "La correcta es Todos los días a las 20:00, siempre que el equipo y cron estén activos porque las expresiones de cron contienen cinco campos: minuto, hora, día del mes, mes y día de la semana. En 0 20 * * *, el 0 indica el minuto, el 20 la hora y los tres asteriscos significan cualquier día, mes y día de la semana. Por tanto, la tarea se ejecuta diariamente a las ocho de la tarde."
},
{
    enunciado: "Al detectar un posible incidente, ¿qué dato conviene registrar desde el primer momento?",
    opciones: ["La marca comercial de todos los equipos", "La hora, zona horaria y estado inicial", "La fecha prevista para sustituir el servidor", "El número total de archivos de la empresa"],
    correcta: 1,
    explicacion: "La correcta es La hora, zona horaria y estado inicial porque durante una investigación forense es fundamental documentar cuándo se detectó el incidente, quién lo descubrió y en qué condiciones se encontraba el sistema. Esta información permite reconstruir los acontecimientos y mantener la trazabilidad de las actuaciones realizadas."
},
{
    enunciado: "¿Cómo se conecta habitualmente un almacenamiento DAS al servidor?",
    opciones: ["Mediante un recurso NFS publicado en la red", "A través de una fabric Fibre Channel remota", "Mediante una conexión directa de bloques", "Mediante carpetas SMB servidas por una LAN"],
    correcta: 2,
    explicacion: "La correcta es Mediante una conexión directa de bloques porque DAS (Direct Attached Storage) es un sistema de almacenamiento conectado directamente al servidor, normalmente mediante interfaces como SATA, SAS o NVMe. El servidor gestiona los discos, las particiones y el sistema de archivos sin necesidad de acceder a un recurso compartido por red."
},
{
    enunciado: "¿Qué evidencia corre especial riesgo de perderse si se apaga un equipo durante una investigación?",
    opciones: ["Los procesos y sesiones presentes en RAM", "Las copias de seguridad guardadas en otra sede", "Los archivos almacenados en una partición NTFS", "Los documentos archivados en un disco externo"],
    correcta: 0,
    explicacion: "La correcta es Los procesos y sesiones presentes en RAM porque la memoria RAM es volátil y pierde su contenido cuando se interrumpe la alimentación del equipo. Puede contener procesos activos, conexiones de red, sesiones, claves y otros datos relevantes para una investigación forense. Por ello, cuando resulte seguro y apropiado, es importante valorar su adquisición antes de apagar el sistema."
},
{
    enunciado: "¿Qué protocolos se emplean habitualmente para compartir ficheros desde un NAS?",
    opciones: ["Fibre Channel y NVMe-oF", "iSCSI y Fibre Channel", "SATA y SAS", "SMB y NFS"],
    correcta: 3,
    explicacion: "La correcta es SMB y NFS porque un NAS (Network Attached Storage) permite compartir archivos y directorios a través de una red. SMB se utiliza habitualmente en entornos Windows y NFS en sistemas Linux y Unix. En cambio, protocolos como iSCSI y Fibre Channel están relacionados principalmente con el almacenamiento a nivel de bloques."
},
{
    enunciado: "¿Qué distingue una imagen forense física de una adquisición lógica de archivos?",
    opciones: ["La lógica siempre copia la memoria RAM completa", "La física puede incluir espacio no asignado", "La lógica impide registrar metadatos de origen", "La física solo extrae carpetas seleccionadas"],
    correcta: 1,
    explicacion: "La correcta es La física puede incluir espacio no asignado porque una adquisición forense física intenta capturar los sectores accesibles de un dispositivo, incluyendo datos existentes y, cuando es posible, espacio no asignado que puede contener restos de archivos eliminados. Una adquisición lógica, en cambio, recopila archivos y metadatos accesibles a través del sistema de archivos."
},
{
    enunciado: "Cuando una SAN presenta una LUN a un servidor, ¿cómo suele verla este?",
    opciones: ["Como un dispositivo de bloques", "Como una carpeta SMB con usuarios del NAS", "Como un directorio NFS listo para compartir", "Como una base de datos administrada por la cabina"],
    correcta: 0,
    explicacion: "La correcta es Como un dispositivo de bloques porque una SAN (Storage Area Network) proporciona almacenamiento a los servidores mediante unidades lógicas denominadas LUN. El sistema operativo del servidor las reconoce como dispositivos de bloques, similares a discos, sobre los que puede crear particiones y sistemas de archivos."
},
{
    enunciado: "¿Qué respalda la coincidencia de hashes SHA-256 entre un origen y su imagen?",
    opciones: ["La hora exacta en la que se produjo el incidente", "La legalidad de todas las actuaciones realizadas", "La integridad del contenido comparado", "La identidad personal del creador del archivo"],
    correcta: 2,
    explicacion: "La correcta es La integridad del contenido comparado porque SHA-256 genera una huella digital del contenido de los datos. Si el hash calculado sobre el origen coincide con el de la imagen forense, existe una evidencia criptográfica sólida de que el contenido comparado es idéntico. Sin embargo, esta coincidencia no demuestra quién creó los archivos ni la legalidad del procedimiento."
},
{
    enunciado: "¿Qué describe correctamente el protocolo iSCSI?",
    opciones: ["Comparte directorios mediante permisos SMB", "Transporta archivos NFS sobre una red dedicada", "Conecta discos SATA sin utilizar ninguna red", "Transporta comandos SCSI sobre TCP/IP"],
    correcta: 3,
    explicacion: "La correcta es Transporta comandos SCSI sobre TCP/IP porque iSCSI permite acceder a almacenamiento de bloques mediante redes IP. Para ello, encapsula comandos SCSI dentro de comunicaciones TCP/IP, haciendo posible que un servidor utilice dispositivos de almacenamiento remotos como si fueran discos conectados a su sistema."
},
{
    enunciado: "¿Qué debe documentarse en una cadena de custodia cuando se entrega una evidencia?",
    opciones: ["Solo la capacidad física del dispositivo", "Quién entrega, quién recibe y cuándo", "Únicamente la contraseña del investigador", "El nombre del programa que abrirá el archivo"],
    correcta: 1,
    explicacion: "La correcta es Quién entrega, quién recibe y cuándo porque la cadena de custodia documenta todas las transferencias y actuaciones relacionadas con una evidencia digital. Debe registrar quién la entrega, quién la recibe, las fechas, horas, motivos y condiciones de conservación. Esto permite demostrar su trazabilidad y detectar posibles alteraciones o accesos no autorizados."
},
{
    enunciado: "En una SAN Fibre Channel, ¿qué diferencia existe entre zoning y LUN masking?",
    opciones: ["Zoning limita conexiones; masking limita LUN visibles", "Zoning cifra el tráfico; masking comprime los datos", "Zoning crea copias; masking comprueba los hashes", "Zoning suma capacidad; masking reparte las IOPS"],
    correcta: 0,
    explicacion: "La correcta es Zoning limita conexiones; masking limita LUN visibles porque zoning controla qué dispositivos pueden comunicarse dentro de una red Fibre Channel, mientras que LUN masking determina qué unidades lógicas de almacenamiento puede descubrir cada servidor. Ambos mecanismos se complementan para restringir el acceso a los recursos de una SAN."
},
{
    enunciado: "En los registros de seguridad de Windows, ¿qué indica habitualmente el evento 4625?",
    opciones: ["Una conexión de red finalizada correctamente", "Una copia forense verificada mediante hash", "Una modificación de los permisos de una LUN", "Un inicio de sesión fallido"],
    correcta: 3,
    explicacion: "La correcta es Un inicio de sesión fallido porque el identificador de evento 4625 de Windows Security registra intentos de autenticación que no se han completado correctamente. Puede ayudar a identificar errores de credenciales, cuentas bloqueadas o posibles ataques de fuerza bruta. Para interpretarlo adecuadamente es necesario analizar sus detalles y relacionarlo con otros eventos."
},
{
    enunciado: "¿Qué puede ocurrir si dos servidores escriben a la vez en la misma LUN con ext4 convencional?",
    opciones: ["El volumen se convierte automáticamente en NAS", "La cabina crea un respaldo antes de cada escritura", "Puede corromperse el sistema de ficheros", "Las cachés de ambos equipos se coordinan solas"],
    correcta: 2,
    explicacion: "La correcta es Puede corromperse el sistema de ficheros porque ext4 es un sistema de archivos convencional que no está diseñado para que varios servidores escriban simultáneamente sobre el mismo volumen sin coordinación. Cada servidor puede mantener información y cachés diferentes, provocando inconsistencias. Para compartir escritura se necesitan mecanismos de clúster adecuados o acceso exclusivo."
},
{
    enunciado: "¿Para qué se emplea un bloqueador de escritura durante la adquisición forense?",
    opciones: ["Para aumentar la velocidad de cifrado de archivos", "Para impedir escrituras accidentales al original", "Para identificar al autor de una modificación", "Para sustituir la cadena de custodia del soporte"],
    correcta: 1,
    explicacion: "La correcta es Para impedir escrituras accidentales al original porque un bloqueador de escritura (write blocker) permite leer los datos de un dispositivo evitando que el equipo utilizado para el análisis realice modificaciones sobre el soporte original. Es una herramienta importante en informática forense para preservar la integridad de las evidencias durante su adquisición."
},
{
    enunciado: "¿Qué función cumple MPIO en una arquitectura de almacenamiento?",
    opciones: ["Convertir una LUN de bloques en un recurso SMB", "Sustituir las copias externas por discos locales", "Crear usuarios de red para carpetas compartidas", "Agrupar varias rutas hacia un mismo volumen"],
    correcta: 3,
    explicacion: "La correcta es Agrupar varias rutas hacia un mismo volumen porque MPIO (Multipath I/O) permite que un servidor utilice múltiples caminos físicos para acceder a un mismo dispositivo de almacenamiento. Estas rutas se presentan como un único dispositivo lógico, facilitando la redundancia y permitiendo mantener el acceso cuando falla una de las conexiones."
},
{
    enunciado: "Al reconstruir una cronología forense con registros de varios sistemas, ¿qué es esencial?",
    opciones: ["Normalizar horas, zonas y posibles desfases", "Usar solo el reloj del primer equipo analizado", "Descartar todos los eventos anteriores a la alerta", "Considerar causal cualquier evento consecutivo"],
    correcta: 0,
    explicacion: "La correcta es Normalizar horas, zonas y posibles desfases porque los registros de diferentes dispositivos pueden utilizar distintas zonas horarias o tener relojes desincronizados. Para reconstruir correctamente una cronología forense es necesario unificar las referencias temporales, considerar UTC y los cambios de horario, y comprobar posibles diferencias entre los relojes."
},
{
    enunciado: "En un NAS, ¿qué dos niveles de permisos no deben confundirse?",
    opciones: ["Las políticas de RAID y el tamaño de los discos", "La autenticación CHAP y el zoning de la fabric", "La capacidad de la cabina y la latencia de red", "El permiso compartido y la ACL del sistema"],
    correcta: 3,
    explicacion: "La correcta es El permiso compartido y la ACL del sistema porque en un NAS pueden existir permisos establecidos sobre el recurso compartido, como una carpeta SMB, y permisos propios del sistema de archivos mediante ACL. Ambos niveles pueden limitar el acceso efectivo de los usuarios, por lo que deben revisarse conjuntamente al configurar o solucionar problemas de permisos."
},
{
    enunciado: "¿Qué herramienta permite consultar eventos de systemd y servicios en Linux?",
    opciones: ["FTK Imager", "multipath -ll", "journalctl", "targetcli"],
    correcta: 2,
    explicacion: "La correcta es journalctl porque es una herramienta de Linux que permite consultar los registros almacenados por systemd-journald, incluyendo eventos del sistema, servicios y errores. Por ejemplo, journalctl -u ssh permite revisar los registros de una unidad de servicio SSH, y journalctl -b muestra los registros del arranque actual."
},
{
    enunciado: "¿Para qué puede utilizarse CHAP en una conexión iSCSI?",
    opciones: ["Para autenticar conexiones iSCSI", "Para calcular el rendimiento en IOPS del host", "Para crear snapshots automáticos del volumen", "Para transformar el acceso a bloques en NFS"],
    correcta: 0,
    explicacion: "La correcta es Para autenticar conexiones iSCSI porque CHAP (Challenge-Handshake Authentication Protocol) es un mecanismo de autenticación que permite verificar la identidad durante el establecimiento de una conexión. Se utiliza para reducir el riesgo de accesos no autorizados a recursos de almacenamiento iSCSI, complementando medidas como la segmentación de redes y los controles de acceso."
},
{
    enunciado: "¿Qué debe hacerse antes de atribuir un incidente a una persona basándose en una IP?",
    opciones: ["Ignorar la posibilidad de NAT, proxy o VPN", "Identificar al titular de la cuenta sin más datos", "Contrastar varias fuentes independientes", "Dar por válida la IP como prueba concluyente"],
    correcta: 2,
    explicacion: "La correcta es Contrastar varias fuentes independientes porque una dirección IP no identifica necesariamente a una persona concreta. Puede corresponder a una conexión compartida, NAT, VPN o proxy. Para realizar una atribución rigurosa es necesario correlacionar registros, horarios, usuarios y otras evidencias, indicando siempre las limitaciones y el grado de certeza."
},
{
    enunciado: "¿Cuál es una afirmación correcta sobre RAID y las copias de seguridad?",
    opciones: ["RAID no sustituye a una copia de seguridad", "RAID protege frente a cualquier borrado accidental", "RAID recupera siempre los archivos cifrados por malware", "RAID elimina la necesidad de probar restauraciones"],
    correcta: 0,
    explicacion: "La correcta es RAID no sustituye a una copia de seguridad porque RAID permite mejorar la disponibilidad o tolerancia a determinados fallos de disco, dependiendo del nivel utilizado, pero no protege necesariamente frente a borrados accidentales, ransomware o corrupción de datos. Para recuperar versiones anteriores es necesario disponer de copias de seguridad independientes."
},
{
    enunciado: "¿Qué diferencia principal existe entre PCAP y NetFlow/IPFIX en análisis de red?",
    opciones: ["PCAP cifra el tráfico; NetFlow descifra HTTPS", "PCAP recoge paquetes; NetFlow resume flujos", "PCAP registra solo DNS; NetFlow almacena archivos", "PCAP sustituye los logs; NetFlow reemplaza el SIEM"],
    correcta: 1,
    explicacion: "La correcta es PCAP recoge paquetes; NetFlow resume flujos porque una captura PCAP almacena paquetes de red para analizar protocolos, cabeceras y, cuando está disponible, contenido. En cambio, NetFlow e IPFIX registran metadatos de las comunicaciones, como direcciones IP, puertos, protocolos, duración y volumen de tráfico, sin almacenar normalmente el contenido completo."
},
{
    enunciado: "En rendimiento de almacenamiento, ¿qué expresa la métrica IOPS?",
    opciones: ["El tiempo que tarda en responder cada petición", "Los megabytes totales guardados en una cabina", "La cantidad de hosts autorizados a ver una LUN", "Las operaciones de entrada/salida por segundo"],
    correcta: 3,
    explicacion: "La correcta es Las operaciones de entrada/salida por segundo porque IOPS (Input/Output Operations Per Second) mide cuántas operaciones de lectura y escritura puede realizar un sistema de almacenamiento cada segundo. Es una métrica importante para evaluar el rendimiento de discos y cabinas. La latencia mide el tiempo de respuesta y el throughput la cantidad de datos transferidos por segundo."
},
{
    enunciado: "¿Para qué se utiliza principalmente Volatility 3 en un análisis forense?",
    opciones: ["Para realizar imágenes físicas de todos los discos", "Para administrar ACL en carpetas de un NAS", "Para analizar volcados de memoria RAM", "Para comprobar rutas redundantes de una SAN"],
    correcta: 2,
    explicacion: "La correcta es Para analizar volcados de memoria RAM porque Volatility 3 es una herramienta de análisis forense de memoria que permite examinar volcados de RAM para identificar procesos, conexiones, módulos y otros artefactos que estaban presentes en el sistema. Resulta especialmente útil para investigar actividad maliciosa y recuperar información volátil."
},
{
    enunciado: "Si un ordenador cliente deja de funcionar, ¿qué sucede con un NAS que sigue operativo?",
    opciones: ["Todos los volúmenes se desconectan de la LAN", "El sistema de ficheros del NAS se destruye", "Otros clientes pueden seguir accediendo", "Las carpetas se convierten en discos DAS"],
    correcta: 2,
    explicacion: "La correcta es Otros clientes pueden seguir accediendo porque un NAS es un sistema de almacenamiento independiente que proporciona archivos a múltiples equipos a través de una red. Si falla uno de los ordenadores clientes, los demás pueden continuar utilizando los recursos compartidos siempre que el NAS y la infraestructura de red sigan funcionando."
},
{
    enunciado: "En un servicio cloud o SaaS, ¿qué fuente puede aportar evidencia de cambios y accesos?",
    opciones: ["Los registros de auditoría del proveedor", "Una imagen física obligatoria del disco remoto", "El historial local del navegador como única fuente", "La tabla de particiones del servidor del cliente"],
    correcta: 0,
    explicacion: "La correcta es Los registros de auditoría del proveedor porque los servicios cloud y SaaS suelen disponer de registros que documentan accesos, modificaciones de permisos, operaciones realizadas y actividad de los usuarios. Estos datos pueden utilizarse como evidencias durante una investigación, teniendo en cuenta su conservación, integridad, zona horaria y condiciones de exportación."
},
{
    enunciado: "¿Qué permite una SAN en un clúster de hipervisores correctamente configurado?",
    opciones: ["Que cualquier equipo escriba en la LUN sin control", "Que cada host tenga una copia local sin sincronizar", "Eliminar los controles de autorización de la cabina", "Acceso coordinado a almacenamiento compartido"],
    correcta: 3,
    explicacion: "La correcta es Acceso coordinado a almacenamiento compartido porque una SAN puede proporcionar volúmenes a varios servidores de un clúster de virtualización. Mediante mecanismos de coordinación y sistemas de archivos adecuados, los hipervisores pueden utilizar el almacenamiento compartido para facilitar funciones como la alta disponibilidad y la migración de máquinas virtuales."
},
{
    enunciado: "¿Qué práctica mejora la objetividad de un informe forense?",
    opciones: ["Separar observaciones, inferencias y límites", "Omitir los resultados que contradicen la hipótesis", "Atribuir cada conexión a una persona concreta", "Sustituir las evidencias por conclusiones generales"],
    correcta: 0,
    explicacion: "La correcta es Separar observaciones, inferencias y límites porque un informe forense debe distinguir claramente los hechos comprobados de las interpretaciones e hipótesis del investigador. También debe explicar las limitaciones de las herramientas, los datos disponibles y el grado de certeza de sus conclusiones, permitiendo que los resultados sean revisados y evaluados objetivamente."
},
{
    enunciado: "¿Qué problema puede aparecer en una SAN si faltan las configuraciones de multipath?",
    opciones: ["Los snapshots sustituyen las rutas de almacenamiento", "Varias rutas pueden verse como discos distintos", "Los protocolos de red pasan a utilizar solo SMB", "Los volúmenes se convierten automáticamente en NAS"],
    correcta: 1,
    explicacion: "La correcta es Varias rutas pueden verse como discos distintos porque, sin una configuración adecuada de MPIO, un servidor puede detectar diferentes caminos hacia el mismo volumen de almacenamiento como si fueran dispositivos independientes. Esto puede provocar problemas de administración, errores de acceso y pérdida de la tolerancia a fallos que proporciona el multipath."
},
{
    enunciado: "¿Para qué se utiliza Autopsy en una investigación forense?",
    opciones: ["Para configurar el iniciador de una SAN iSCSI", "Para examinar imágenes y artefactos digitales", "Para proporcionar energía ante un apagón", "Para establecer zoning en una fabric FC"],
    correcta: 1,
    explicacion: "La correcta es Para examinar imágenes y artefactos digitales porque Autopsy es una herramienta de análisis forense que permite crear casos, examinar imágenes de discos y sistemas de archivos, buscar información y recuperar artefactos relevantes. También facilita la organización de evidencias y la preparación de informes con los resultados de una investigación."
},
{
    enunciado: "¿Por qué un snapshot de una cabina o NAS no sustituye a un backup aislado?",
    opciones: ["Porque solo puede utilizarse con discos SATA", "Porque convierte todos los ficheros en bloques", "Porque impide recuperar versiones de archivos", "Porque puede compartir riesgos con el origen"],
    correcta: 3,
    explicacion: "La correcta es Porque puede compartir riesgos con el origen porque un snapshot suele almacenarse en la misma infraestructura que los datos originales. Aunque permite recuperar versiones anteriores, puede verse afectado por averías de la cabina, ataques o pérdida del almacenamiento principal. Una copia de seguridad aislada proporciona una protección adicional al conservar los datos en un entorno independiente."
},

];