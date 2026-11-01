const preguntasDASP = [
    // Unidad 1
    {
    enunciado: "¿Qué tecnología impulsó la primera revolución industrial?",
    opciones: ["La máquina de vapor y la mecanización", "La nube pública", "La realidad aumentada", "Las redes TCP/IP"],
    correcta: 0,
    explicacion: "La correcta es La máquina de vapor y la mecanización porque la primera revolución industrial se caracterizó por la introducción de máquinas impulsadas por vapor que permitieron mecanizar la producción y sustituir gran parte del trabajo manual."
},
{
    enunciado: "¿Qué distingue fundamentalmente la cuarta revolución de la tercera?",
    opciones: ["La conexión continua entre sistemas y la respuesta basada en datos", "El uso por primera vez de ordenadores", "La eliminación de toda supervisión humana", "El abandono de las redes"],
    correcta: 0,
    explicacion: "La correcta es La conexión continua entre sistemas y la respuesta basada en datos porque la cuarta revolución industrial se caracteriza por la interconexión de sistemas, el intercambio de información en tiempo real y la automatización de decisiones a partir de los datos obtenidos."
},
{
    enunciado: "Un administrador revisa manualmente cada semana el disco de cada servidor. ¿Qué representa principalmente?",
    opciones: ["Una intervención de realidad aumentada", "Una tarea informatizada pero no integrada automáticamente", "Un gemelo digital", "Una red blockchain"],
    correcta: 1,
    explicacion: "La correcta es Una tarea informatizada pero no integrada automáticamente porque, aunque se utilizan herramientas informáticas para revisar los servidores, el proceso sigue dependiendo de una intervención manual y no existe una automatización que supervise y gestione los datos de forma continua."
},
{
    enunciado: "¿Qué conjunto expresa los tres elementos básicos de la digitalización?",
    opciones: ["Hardware, licencia y factura", "Cámara, cable y monitor", "Dato, conectividad y automatización", "Impresora, escáner y ratón"],
    correcta: 2,
    explicacion: "La correcta es Dato, conectividad y automatización porque la digitalización se basa en recopilar información, conectar sistemas para intercambiarla y automatizar procesos utilizando esos datos, mejorando así la eficiencia y la toma de decisiones."
},
{
    enunciado: "¿Por qué un registro de incidencias debe almacenarse en formato reutilizable?",
    opciones: ["Para analizar tendencias y tomar decisiones respaldadas por datos", "Para impedir cualquier consulta", "Para aumentar el número de archivos", "Para sustituir todas las copias"],
    correcta: 0,
    explicacion: "La correcta es Para analizar tendencias y tomar decisiones respaldadas por datos porque almacenar las incidencias en un formato reutilizable permite consultar y comparar registros, detectar problemas recurrentes, identificar tendencias y aplicar mejoras basadas en información objetiva."
},
{
    enunciado: "¿Qué función cumple una API entre Zabbix y GLPI?",
    opciones: ["Permitir intercambio estructurado de información entre aplicaciones", "Refrigerar los servidores", "Producir electricidad de emergencia", "Imprimir etiquetas de rack"],
    correcta: 0,
    explicacion: "La correcta es Permitir intercambio estructurado de información entre aplicaciones porque una API permite que diferentes sistemas, como Zabbix y GLPI, se comuniquen e intercambien datos de forma organizada y automatizada, facilitando la integración de sus funcionalidades."
},
{
    enunciado: "Pasar un inventario en papel a Excel sin cambiar el procedimiento es...",
    opciones: ["Gemelo digital", "Digitalización de soporte", "Transformación del modelo de negocio", "Convergencia OT obligatoria"],
    correcta: 1,
    explicacion: "La correcta es Digitalización de soporte porque únicamente se sustituye el formato físico por uno digital, como una hoja de Excel, sin modificar el procedimiento de trabajo ni introducir automatizaciones o mejoras en el proceso."
},
{
    enunciado: "Que un alta de empleado cree cuenta y asigne permisos automáticamente es...",
    opciones: ["Realidad virtual", "Digitalización de soporte exclusivamente", "Digitalización de procesos", "Primera revolución industrial"],
    correcta: 2,
    explicacion: "La correcta es Digitalización de procesos porque se automatizan tareas que anteriormente requerían intervención manual, como crear cuentas y asignar permisos, integrando diferentes operaciones en un mismo procedimiento y mejorando la eficiencia."
},
{
    enunciado: "Un integrador vende infraestructura gestionada por suscripción en lugar de instalaciones puntuales. ¿Qué nivel ejemplifica?",
    opciones: ["Transformación digital del modelo de negocio", "Simple escaneo documental", "Una prueba de restauración", "Un servicio DNS"],
    correcta: 0,
    explicacion: "La correcta es Transformación digital del modelo de negocio porque la empresa modifica su forma de ofrecer servicios y obtener ingresos, pasando de instalaciones puntuales a un modelo de suscripción con gestión continua de la infraestructura."
},
{
    enunciado: "¿Qué define mejor un sistema ciberfísico?",
    opciones: ["Interacción entre dispositivos físicos, software y acciones con retroalimentación", "Una hoja de cálculo aislada", "Un archivo PDF estático", "Un ordenador sin sensores"],
    correcta: 0,
    explicacion: "La correcta es Interacción entre dispositivos físicos, software y acciones con retroalimentación porque un sistema ciberfísico integra elementos físicos, sensores y programas informáticos para recopilar datos, procesarlos y ejecutar acciones sobre el entorno, utilizando la retroalimentación para ajustar su funcionamiento."
},
{
    enunciado: "¿Cuál es el orden lógico de una administración data-driven?",
    opciones: ["Publicar, vender, facturar y olvidar", "Capturar, integrar, analizar y actuar", "Actuar, borrar, imprimir y archivar", "Comprar, instalar, apagar y retirar"],
    correcta: 1,
    explicacion: "La correcta es Capturar, integrar, analizar y actuar porque una administración basada en datos comienza recopilando información, después la integra y analiza para obtener conclusiones y, finalmente, toma decisiones y ejecuta acciones fundamentadas en los resultados."
},
{
    enunciado: "¿Cuál es un ejemplo físico de OT en un CPD?",
    opciones: ["La aplicación de nóminas", "El correo corporativo", "El sistema de climatización controlada", "El procesador de textos"],
    correcta: 2,
    explicacion: "La correcta es El sistema de climatización controlada porque la tecnología operativa (OT) se encarga de supervisar y controlar procesos físicos, como la temperatura y la refrigeración de un centro de procesamiento de datos (CPD), garantizando las condiciones adecuadas para el funcionamiento de los equipos."
},
{
    enunciado: "¿Qué gestiona principalmente el entorno IT?",
    opciones: ["La información y las aplicaciones de negocio", "Solo los motores de fabricación", "Únicamente los sensores de humo", "Exclusivamente la iluminación"],
    correcta: 0,
    explicacion: "La correcta es La información y las aplicaciones de negocio porque las tecnologías de la información (IT) se ocupan de gestionar datos, sistemas informáticos, redes, servidores, bases de datos y aplicaciones que permiten desarrollar las actividades digitales de una organización."
},
{
    enunciado: "¿Cuál es la prioridad más característica de OT?",
    opciones: ["Continuidad y disponibilidad de los procesos físicos", "Cambiar equipos cada semana", "Eliminar los controles de acceso", "Permitir reinicios sin planificación"],
    correcta: 0,
    explicacion: "La correcta es Continuidad y disponibilidad de los procesos físicos porque la tecnología operativa (OT) controla sistemas físicos cuyo funcionamiento debe mantenerse estable y continuo, ya que una interrupción inesperada puede detener la producción, afectar a servicios críticos o provocar problemas de seguridad."
},
{
    enunciado: "¿Qué significa convergencia IT/OT?",
    opciones: ["Sustituir la red por papel", "Compartir de manera controlada datos entre operaciones físicas y sistemas de información", "Desconectar todos los sensores", "Eliminar las bases de datos"],
    correcta: 1,
    explicacion: "La correcta es Compartir de manera controlada datos entre operaciones físicas y sistemas de información porque la convergencia IT/OT integra las tecnologías de la información con las tecnologías operativas, permitiendo intercambiar datos entre sistemas informáticos y procesos físicos para mejorar la supervisión, la coordinación y la toma de decisiones."
},
{
    enunciado: "¿Qué riesgo aumenta al conectar sensores y autómatas a la red?",
    opciones: ["La imposibilidad de monitorizar", "La reducción automática de amenazas a cero", "La superficie de ataque si no hay segmentación y control de accesos", "La desaparición de los datos"],
    correcta: 2,
    explicacion: "La correcta es La superficie de ataque si no hay segmentación y control de accesos porque conectar sensores y autómatas a una red aumenta los posibles puntos de entrada para los atacantes. Por ello, es fundamental aplicar medidas de seguridad como la segmentación de redes, el uso de credenciales seguras y las políticas de control de acceso para proteger los sistemas operativos industriales."
},
{
    enunciado: "¿Cuál es un uso propio de PowerShell en Windows Server?",
    opciones: ["Mostrar realidad aumentada", "Automatizar altas y administración de cuentas y equipos", "Fabricar carcasas físicas", "Aumentar la autonomía eléctrica del SAI"],
    correcta: 1,
    explicacion: "La correcta es Automatizar altas y administración de cuentas y equipos porque PowerShell es una herramienta de administración y automatización de Windows que permite ejecutar comandos (cmdlets) y scripts para gestionar usuarios, grupos, permisos, equipos y servicios. En Windows Server resulta especialmente útil para automatizar tareas repetitivas y administrar sistemas de forma eficiente."
},
{
    enunciado: "¿Qué demuestra que una copia de seguridad es recuperable?",
    opciones: ["Una prueba de restauración satisfactoria", "Que exista una carpeta llamada backup", "Que se haya comprado almacenamiento", "Que nunca haya errores en los registros"],
    correcta: 0,
    explicacion: "La correcta es Una prueba de restauración satisfactoria porque la existencia de una copia de seguridad no garantiza que los datos puedan recuperarse correctamente. Es necesario realizar pruebas de restauración periódicas para comprobar la integridad de los archivos y verificar que los sistemas y servicios pueden recuperarse ante una pérdida de información."
},
{
    enunciado: "¿Qué herramienta se utiliza para gestionar copias de seguridad?",
    opciones: ["Veeam", "Unity", "FreeCAD", "Mosquitto"],
    correcta: 0,
    explicacion: "La correcta es Veeam porque es una herramienta especializada en la gestión de copias de seguridad y recuperación de datos. Permite programar y automatizar backups, proteger servidores y máquinas virtuales, y restaurar información en caso de fallos, pérdidas de datos o incidentes de seguridad."
},
{
    enunciado: "¿Qué proporciona Active Directory?",
    opciones: ["Un registro blockchain", "Gestión centralizada de identidades y permisos en entornos compatibles", "La impresión de un soporte de rack", "El análisis térmico de una sala"],
    correcta: 1,
    explicacion: "La correcta es Gestión centralizada de identidades y permisos en entornos compatibles porque Active Directory es un servicio de directorio que permite administrar de forma centralizada usuarios, grupos, equipos y permisos dentro de una red. Además, facilita la autenticación, el control de acceso a los recursos y la aplicación de políticas de seguridad."
},
{
    enunciado: "¿Para qué se utiliza una base de conocimiento en soporte?",
    opciones: ["Para sustituir la autenticación", "Para imprimir equipos", "Para documentar soluciones reutilizables y facilitar autoservicio", "Para evitar registrar incidencias"],
    correcta: 2,
    explicacion: "La correcta es Para documentar soluciones reutilizables y facilitar autoservicio porque una base de conocimiento permite almacenar procedimientos, guías y soluciones a problemas habituales. Esto facilita que los técnicos resuelvan incidencias recurrentes de forma más rápida y que los usuarios puedan solucionar determinadas dificultades por sí mismos."
},
{
    enunciado: "¿Qué caracteriza una arquitectura componible?",
    opciones: ["Servicios especializados conectados mediante interfaces", "Un único programa que necesariamente lo hace todo", "La desconexión de todos los módulos", "La prohibición de las API"],
    correcta: 0,
    explicacion: "La correcta es Servicios especializados conectados mediante interfaces porque una arquitectura componible divide un sistema en componentes o servicios independientes, cada uno especializado en una función. Estos componentes se comunican mediante interfaces, como las API, lo que facilita su integración, mantenimiento, actualización y reutilización sin modificar todo el sistema."
},
{
    enunciado: "¿Qué mide un analista de observabilidad?",
    opciones: ["Métricas, registros y trazas para comprender el estado del servicio", "Solo el precio de impresoras", "Únicamente el diseño gráfico", "El peso de las bandejas de rack"],
    correcta: 0,
    explicacion: "La correcta es Métricas, registros y trazas para comprender el estado del servicio porque la observabilidad permite conocer el funcionamiento interno de sistemas y aplicaciones mediante el análisis de métricas de rendimiento, registros de eventos y trazas de ejecución. Esta información ayuda a detectar anomalías, diagnosticar errores y anticipar posibles problemas antes de que afecten a los usuarios."
},
{
    enunciado: "¿Qué secuencia representa el servicio de extremo a extremo?",
    opciones: ["Instalación, apagado y retirada inmediata", "Registro, borrado y ausencia de validación", "Alerta, diagnóstico, resolución, comprobación y documentación", "Compra, impresión, envío y olvido"],
    correcta: 2,
    explicacion: "La correcta es Alerta, diagnóstico, resolución, comprobación y documentación porque la gestión completa de un servicio comienza con la detección de una incidencia, continúa con el análisis y la solución del problema, y finaliza verificando que todo funciona correctamente y documentando las acciones realizadas para garantizar la trazabilidad."
},
{
    enunciado: "¿Qué indica que hay un punto de corte en el flujo digital?",
    opciones: ["Que alguien debe copiar manualmente datos entre herramientas", "Que se use una API correctamente", "Que se identifique el mismo activo en todas las aplicaciones", "Que exista un historial de cambios"],
    correcta: 0,
    explicacion: "La correcta es Que alguien debe copiar manualmente datos entre herramientas porque un punto de corte en el flujo digital aparece cuando la información no se transmite automáticamente entre sistemas y requiere intervención humana. Esto puede provocar errores de transcripción, duplicidades, retrasos y pérdida de información."
},
{
    enunciado: "¿Qué beneficio ofrece la monitorización proactiva?",
    opciones: ["Detectar problemas antes de que los usuarios los comuniquen", "Garantizar la ausencia de averías", "Eliminar cualquier coste de operación", "Evitar documentar incidencias"],
    correcta: 0,
    explicacion: "La correcta es Detectar problemas antes de que los usuarios los comuniquen porque la monitorización proactiva permite supervisar continuamente servidores, redes y servicios mediante métricas y alertas automáticas. De esta forma, los administradores pueden identificar anomalías y actuar antes de que los problemas afecten significativamente a los usuarios."
},
{
    enunciado: "¿Qué riesgo tiene automatizar una configuración incorrecta?",
    opciones: ["Garantizar siempre un ahorro neto", "Propagar el fallo a numerosos equipos", "Impedir que se ejecute en más de uno", "Evitar cualquier incidente de seguridad"],
    correcta: 1,
    explicacion: "La correcta es Propagar el fallo a numerosos equipos porque las herramientas de automatización permiten aplicar configuraciones de forma simultánea a múltiples sistemas. Si la configuración contiene errores, estos pueden extenderse rápidamente a todos los equipos afectados, provocando fallos generalizados. Por ello, es importante realizar pruebas y establecer controles antes de ejecutar despliegues masivos."
},
{
    enunciado: "¿Qué medida reduce riesgos antes de desplegar a 200 equipos?",
    opciones: ["Desactivar el registro de cambios", "Omitir la revisión de permisos", "Probar en un grupo piloto y validar los resultados", "Actualizar a la vez todos los dispositivos sin copia"],
    correcta: 2,
    explicacion: "La correcta es Probar en un grupo piloto y validar los resultados porque realizar primero el despliegue en un número reducido de equipos permite detectar errores, comprobar la compatibilidad y verificar que la configuración funciona correctamente. Una vez validados los resultados, se puede extender progresivamente al resto de dispositivos, reduciendo el riesgo de fallos generalizados."
},
{
    enunciado: "¿Qué dato podría ser personal en un sistema de acceso al CPD?",
    opciones: ["La identidad asociada a una entrada registrada", "Una temperatura agregada sin identificación", "La potencia nominal de una fuente", "La humedad ambiental anónima"],
    correcta: 0,
    explicacion: "La correcta es La identidad asociada a una entrada registrada porque un registro de acceso que identifica a una persona y almacena información sobre sus entradas o salidas de un centro de procesamiento de datos (CPD) contiene datos personales. Esta información permite identificar y rastrear la actividad de una persona, por lo que debe protegerse conforme a la normativa de protección de datos."
},
{
    enunciado: "¿Cuándo se justifica afirmar que una automatización ha mejorado el servicio?",
    opciones: ["Cuando el fabricante lo promete sin datos", "Cuando un indicador comparable mejora antes y después", "Solo porque el producto sea nuevo", "Cuando aparecen más pantallas"],
    correcta: 1,
    explicacion: "La correcta es Cuando un indicador comparable mejora antes y después porque para demostrar que una automatización aporta beneficios es necesario medir indicadores objetivos, como el tiempo de resolución de incidencias, el número de errores o el consumo de recursos. Comparar estos datos antes y después de aplicar la automatización permite comprobar si realmente se ha producido una mejora."
},
{
    enunciado: "¿Qué tarea tiende a cambiar en el rol del administrador?",
    opciones: ["De revisar incidencias a prohibir tickets", "De medir servicios a no conservar registros", "De ejecutar acciones repetitivas a definir y supervisar procedimientos", "De administrar sistemas a no intervenir jamás"],
    correcta: 2,
    explicacion: "La correcta es De ejecutar acciones repetitivas a definir y supervisar procedimientos porque la automatización permite delegar tareas rutinarias en herramientas y scripts, haciendo que el administrador se centre cada vez más en diseñar procesos, supervisar su ejecución, analizar resultados y resolver situaciones que requieren conocimientos técnicos y capacidad de decisión."
},

// Unidad 2
{
    enunciado: "¿Qué es una tecnología digital habilitadora?",
    opciones: ["Una capacidad transversal sobre la que se construyen servicios digitales", "Una única aplicación de inventario", "Un documento PDF", "Un modelo de impresora específico"],
    correcta: 0,
    explicacion: "La correcta es Una capacidad transversal sobre la que se construyen servicios digitales porque las tecnologías habilitadoras digitales (THD) son herramientas y capacidades tecnológicas que permiten desarrollar nuevos productos, servicios y procesos digitales. Entre ellas se encuentran la inteligencia artificial, el Internet de las Cosas (IoT), la computación en la nube y el Big Data, que pueden aplicarse en numerosos sectores profesionales."
},
{
    enunciado: "¿Qué propiedad indica que IoT puede usarse en un hospital y en un CPD?",
    opciones: ["Transversalidad", "Obsolescencia obligatoria", "Dependencia exclusiva de ASIR", "Ausencia de interoperabilidad"],
    correcta: 0,
    explicacion: "La correcta es Transversalidad porque el Internet de las Cosas (IoT) es una tecnología que puede aplicarse en diferentes sectores y entornos profesionales. Por ejemplo, en un hospital permite monitorizar equipos médicos y pacientes, mientras que en un centro de procesamiento de datos (CPD) puede supervisar la temperatura, la humedad y el consumo energético."
},
{
    enunciado: "¿Por qué suelen potenciarse varias THD entre sí?",
    opciones: ["Porque no necesitan estándares", "Porque los datos captados requieren transporte, análisis y, en su caso, actuación", "Porque un sensor decide todo sin comunicaciones", "Porque la impresión 3D reemplaza las redes"],
    correcta: 1,
    explicacion: "La correcta es Porque los datos captados requieren transporte, análisis y, en su caso, actuación porque las tecnologías habilitadoras digitales se complementan para desarrollar soluciones más completas. Por ejemplo, los sensores IoT recopilan información, las redes permiten transmitirla, la computación en la nube facilita su almacenamiento y la inteligencia artificial puede analizarla para automatizar decisiones y acciones."
},
{
    enunciado: "¿Qué pregunta debe formularse antes de adoptar una THD?",
    opciones: ["Qué producto tiene más publicidad", "Cuántos logotipos puede mostrar el proveedor", "Qué problema resuelve y cómo se medirá su mejora", "Qué nombre es más llamativo"],
    correcta: 2,
    explicacion: "La correcta es Qué problema resuelve y cómo se medirá su mejora porque antes de implementar una tecnología habilitadora digital es fundamental identificar una necesidad concreta y establecer indicadores que permitan evaluar sus resultados. De esta forma, se puede comprobar si la tecnología realmente mejora la eficiencia, reduce costes, aumenta la productividad o soluciona el problema planteado."
},
{
    enunciado: "¿Cuál es la función principal de IoT en una sala técnica?",
    opciones: ["Capturar y comunicar variables físicas", "Sustituir toda supervisión humana", "Redactar contratos laborales", "Diseñar exclusivamente software de oficina"],
    correcta: 0,
    explicacion: "La correcta es Capturar y comunicar variables físicas porque el Internet de las Cosas (IoT) utiliza sensores y dispositivos conectados para recopilar información del entorno, como temperatura, humedad, consumo energético, presencia de agua o accesos a instalaciones. Estos datos pueden transmitirse a sistemas de monitorización para detectar anomalías y facilitar el control de las condiciones ambientales."
},
{
    enunciado: "¿Qué se puede medir con una sonda IoT en un rack?",
    opciones: ["La temperatura del entorno", "El contenido semántico de una factura", "El precio futuro de acciones", "La identidad del usuario sin sensor adecuado"],
    correcta: 0,
    explicacion: "La correcta es La temperatura del entorno porque una sonda IoT instalada en un rack permite medir variables físicas del ambiente, como la temperatura y, dependiendo del sensor, también la humedad. Esta información es especialmente importante en los centros de procesamiento de datos (CPD), ya que permite detectar problemas de refrigeración y prevenir el sobrecalentamiento de los servidores."
},



/* Preguntas no vistas en clase
Unidad 1
{
    enunciado: "¿Qué herramienta es apropiada para monitorizar CPU y espacio en disco?",
    opciones: ["Zabbix", "FreeCAD", "PrusaSlicer", "Blender"],
    correcta: 0,
    explicacion: "La correcta es Zabbix porque es una herramienta de monitorización de sistemas y redes que permite supervisar métricas como el uso de CPU, memoria RAM y espacio en disco. Además, permite configurar alertas automáticas cuando se superan determinados umbrales, facilitando la detección y prevención de problemas en los servidores."
},
{
    enunciado: "¿Para qué se utiliza Grafana?",
    opciones: ["Para visualizar métricas y construir paneles", "Para imprimir piezas en 3D", "Para emitir tarjetas RFID", "Para mantener el SAI físicamente"],
    correcta: 0,
    explicacion: "La correcta es Para visualizar métricas y construir paneles porque Grafana es una herramienta de visualización y análisis de datos que permite crear paneles interactivos con gráficos, estadísticas y métricas obtenidas de diferentes fuentes. Se utiliza especialmente para supervisar el rendimiento de servidores, redes y aplicaciones en tiempo real."
},
{
    enunciado: "¿Cuál es la función principal de GLPI en un servicio técnico?",
    opciones: ["Regular la temperatura física", "Gestionar incidencias, activos y solicitudes", "Modelar piezas CAD", "Simular mundos virtuales"],
    correcta: 1,
    explicacion: "La correcta es Gestionar incidencias, activos y solicitudes porque GLPI es una herramienta de gestión de servicios informáticos (ITSM) que permite registrar y hacer seguimiento de incidencias, administrar inventarios de equipos y gestionar solicitudes de soporte técnico, facilitando la organización y el mantenimiento de los recursos informáticos."
},
{
    enunciado: "¿Qué es una CMDB?",
    opciones: ["Un controlador de climatización", "Una plataforma de impresión 3D", "Una base de información sobre activos y sus relaciones", "Una copia de seguridad de la RAM"],
    correcta: 2,
    explicacion: "La correcta es Una base de información sobre activos y sus relaciones porque una CMDB (Base de Datos de Gestión de la Configuración) permite registrar y organizar los componentes de una infraestructura informática, como servidores, redes, aplicaciones y servicios, además de identificar las relaciones y dependencias entre ellos para facilitar su administración."
},
{
    enunciado: "¿Qué aplicación está orientada a describir y gestionar recursos de red como inventario?",
    opciones: ["NetBox", "Cura", "Unity", "AutoFirma"],
    correcta: 0,
    explicacion: "La correcta es NetBox porque es una herramienta de documentación y gestión de infraestructuras de red que permite mantener un inventario organizado de dispositivos, direcciones IP, conexiones, racks y otros recursos, facilitando la planificación y administración de las redes informáticas."
},
{
    enunciado: "¿Qué herramienta permite configurar múltiples servidores de forma repetible?",
    opciones: ["Ansible", "Blender", "Grafana únicamente", "Un visor PDF"],
    correcta: 0,
    explicacion: "La correcta es Ansible porque es una herramienta de automatización que permite administrar y configurar múltiples servidores mediante archivos de configuración llamados playbooks. Estos describen las tareas que deben ejecutarse, garantizando configuraciones consistentes, repetibles y reduciendo los errores derivados de la intervención manual."
},
{
    enunciado: "¿Qué hace una herramienta como Terraform?",
    opciones: ["Convertir modelos en capas de impresión", "Reemplazar un firewall físico", "Declarar y aprovisionar infraestructura como código", "Detectar humo con sensor físico"],
    correcta: 2,
    explicacion: "La correcta es Declarar y aprovisionar infraestructura como código porque Terraform es una herramienta de infraestructura como código (IaC) que permite definir, crear y gestionar recursos informáticos, como servidores, redes y servicios en la nube, mediante archivos de configuración. Esto facilita automatizar despliegues, reproducir infraestructuras y mantener configuraciones consistentes."
},
{
    enunciado: "¿Qué hace un profesional FinOps?",
    opciones: ["Gestiona exclusivamente certificados de identidad", "Optimiza costes y consumo de recursos en la nube", "Diseña exclusivamente circuitos eléctricos", "Ejecuta únicamente tareas de impresión"],
    correcta: 1,
    explicacion: "La correcta es Optimiza costes y consumo de recursos en la nube porque FinOps es una metodología de gestión financiera de servicios en la nube que busca controlar y optimizar el gasto tecnológico. Un profesional FinOps analiza el consumo de recursos, identifica costes innecesarios y colabora con los equipos técnicos y financieros para mejorar la eficiencia y tomar decisiones presupuestarias fundamentadas."
},

Unidad 2
{
    enunciado: "¿Qué papel tiene MQTT en soluciones de sensores?",
    opciones: ["Reemplazar un sensor térmico", "Intercambiar mensajes entre dispositivos y servicios", "Convertir modelos 3D en plástico", "Crear cuentas de dominio por sí mismo"],
    correcta: 1,
    explicacion: "La correcta es Intercambiar mensajes entre dispositivos y servicios porque MQTT es un protocolo ligero de mensajería diseñado para facilitar la comunicación entre dispositivos conectados, especialmente en entornos IoT. Utiliza un modelo de publicación y suscripción en el que los dispositivos envían mensajes a un intermediario llamado broker, que los distribuye a los sistemas suscritos, permitiendo transmitir datos de sensores de forma eficiente y con un consumo reducido de recursos."
},

*/

];