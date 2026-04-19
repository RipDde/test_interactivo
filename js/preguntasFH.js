const preguntasFH = [

      /* Preguntas tipo test subidas por el profesor a la plataforma */

      {
        enunciado: "¿Cuál de las siguientes afirmaciones sobre los discos NVMe es correcta?",
        opciones: [
          "Utilizan la interfaz SATA III pero con menor latencia",
          "Se comunican directamente con la CPU mediante el bus PCIe",
          "Requieren controladores IDE específicos para funcionar",
          "Usan el mismo protocolo que los discos SAS"
        ],
        correcta: 1,
      },
      {
        enunciado: "El tipo de zócalo (socket) que tiene los pines en el propio zócalo y que es el más utilizado en ordenadores de sobre mesa en la actualidad, se llama:",
        opciones: [
          "PGA",
          "LGA",
          "BGA",
          "ZIF"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué componentes forman la unidad central de proceso (CPU)?",
        opciones: [
          "Unidad de control, ALU, registros de memoria principal y reloj",
          "Unidad de computación, unidad aritmeticológica (ALU), registros internos y pila",
          "Unidad de control, unidad aritmeticológica (ALU), registros internos y reloj",
          "Unidad de control, unidad de computación, registros internos y reloj"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cuáles son los cuatro pilares fundamentales que actúan como subsistemas interconectados de la arquitectura Von Newman?",
        opciones: [
          "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), memoria secundaria, subsistema de Entrada/Salida",
          "Unidad central de procesamiento (CPU), memoria principal, subsistema de Entrada/Salida, Buses",
          "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), subsistema de Entrada/Salida, Buses",
          "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), memoria principal, Buses"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿En qué tipo de memoria no volátil se almacena la BIOS/UEFI?",
        opciones: [
          "DDR",
          "SRAM",
          "CMOS",
          "SDRAM"
        ],
        correcta: 2,
      },
      {
        enunciado: "La memoria caché y los registros internos de la CPU utilizan un tipo de memoria, que no necesita refresco, ¿cuál es?",
        opciones: [
          "Dynamic RAM (DRAM)",
          "Synchronous Dynamic RAM (SDRAM)",
          "Static RAM (SRAM)",
          "Double Data Rate Synchronous Dynamic RAM (DDR SDRAM)"
        ],
        correcta: 2,
      },
      {
        enunciado: "En la arquitectura Von Neumann, en la memoria principal albergan:",
        opciones: [
          "Direcciones e instrucciones",
          "Datos e instrucciones",
          "Datos y direcciones",
          "Direcciones"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué tipos de buses existen en un ordenador?",
        opciones: [
          "Bus de datos, instrucciones y control",
          "Bus de datos, direcciones y control",
          "Bus de datos, direcciones y reloj",
          "Bus de instrucciones, direcciones y control"
        ],
        correcta: 1,
      },
      {
        enunciado: "Se le llama Arquitectura de Memoria Unificada a una configuración en la que:",
        opciones: [
          "Ajusta automáticamente la frecuencia, los voltajes y las latencias para que la memoria funcione a su máximo rendimiento",
          "La RAM y VRAM se comunican por un canal PCIexpress",
          "Una memoria que lee 2 veces en un mismo ciclo de reloj",
          "Tanto la CPU como la GPU acceden a la misma memoria física con la misma prioridad y velocidad"
        ],
        correcta: 3,
      },
      {
        enunciado: "En la arquitectura de memoria de un sistema moderno, la caché L3 se caracteriza por:",
        opciones: [
          "Ser exclusiva de la GPU",
          "La más rápida de todas",
          "Solo se usa en discos SSD",
          "Compartida entre núcleos de CPU y más lenta que L1 y L2"
        ],
        correcta: 3,
      },
      {
        enunciado: "El paso del montaje que comprueba la funcionalidad de la configuración es:",
        opciones: [
          "Ordenación de cables",
          "Cierre de caja",
          "Procedimiento POST",
          "Instalar la tarjeta gráfica"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué software nos permite consultar las temperaturas y los voltajes de los diferentes componentes de nuestro equipo?",
        opciones: [
          "HWiNFO",
          "Speccy",
          "CPU-Z",
          "Chocolatey"
        ],
        correcta: 0,
      },
      {
        enunciado: "La Jerarquía de memoria de mayor a menor velocidad de lectura se ordenarían en:",
        opciones: [
          "Discos duros, registros internos de memoria, cache, RAM",
          "Registros internos de memoria, cache, RAM, discos duros",
          "Discos duros, RAM, registros internos de memoria, cache",
          "Discos duros, RAM, cache, registros internos de memoria"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué software propietario se puede probar gratuitamente por un período limitado antes de comprarlo?",
        opciones: [
          "Shareware",
          "Freeware",
          "Ransomware",
          "FOSS"
        ],
        correcta: 0,
      },
      {
        enunciado: "El proceso por el que la CPU decodifica la instrucción para entender qué operación debe realizar se llama:",
        opciones: [
          "FETCH",
          "DECODE",
          "EXECUTE",
          "STORE"
        ],
        correcta: 1,
      },
      {
        enunciado: "La arquitectura que tiene un conjunto de instrucciones muy pequeño y simple y que se utiliza mayoritariamente en smartphones y tablets es:",
        opciones: [
          "Von Neumann",
          "Harvard",
          "CISC",
          "RISC"
        ],
        correcta: 3,
      },
      {
        enunciado: "Conector de alta velocidad para almacenamiento secundario:",
        opciones: [
          "M.2",
          "Sata",
          "DIMM slots",
          "IDE"
        ],
        correcta: 0,
      },
      {
        enunciado: "El conector de ATX 24 pines de la fuente de alimentación es para:",
        opciones: [
          "CPU",
          "Ventiladores",
          "GPU",
          "Placa base"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿En qué orden suele ser común introducir la memoria RAM en las diferentes ranuras (ATX 4 ranuras) para activar el DUAL Channel?",
        opciones: [
          "1 y 2",
          "3 y 4",
          "1 y 4",
          "1 y 3 o 2 y 4"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Cómo se llama al conjunto de programas que actúan como intermediarios entre el hardware y el software de aplicación?",
        opciones: [
          "Controladores",
          "Drivers",
          "Firmware",
          "Sistema operativo"
        ],
        correcta: 3,
      },
      {
        enunciado: "Para el correcto montaje de la fuente de alimentación:",
        opciones: [
          "Hay que atornillarla siguiendo el patrón de las agujas del reloj para los 4 tornillos",
          "Colocar el ventilador según la entrada de aire de la caja",
          "Solo hay que tener en cuenta que los cables de la alimentación lleguen a todos los componentes",
          "No es necesario mirar ningún manual del fabricante"
        ],
        correcta: 1,
      },
      {
        enunciado: "Al proceso de chequeo inicial para verificar que el hardware crítico (CPU, RAM, tarjeta gráfica, teclado), se le llama:",
        opciones: [
          "Firmware",
          "POST",
          "BIOS",
          "UEFI"
        ],
        correcta: 1,
      },
      {
        enunciado: "Preparar la placa base fuera de la caja, incluye las siguientes operaciones:",
        opciones: [
          "Instalar CPU, pasta térmica, disipador, RAM",
          "Instalar CPU, ventilador, disipador, RAM",
          "Instalar CPU, pasta térmica, ventilador, RAM",
          "Instalar CPU, pasta térmica, disipador, discos duros"
        ],
        correcta: 0,
      },
      {
        enunciado: "Preparar la placa y el chasis, incluye la siguiente secuencia de pasos correcta:",
        opciones: [
          "Instalar primero el I/O shield y presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornilla sin exceso de par",
          "Colocar los standoffs, instalar primero el I/O shield y presentar la placa, comprobando que cada orificio coincide con un standoff, y atornilla sin exceso de par",
          "Montar la fuente de alimentación orientando el ventilador según la entrada de aire de la caja y presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornillar",
          "Presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornillar. Conectar la alimentación de todos los componentes con la fuente de alimentación"
        ],
        correcta: 1,
      },
      {
        enunciado: "La placa base (motherboard) tiene entre sus funciones:",
        opciones: [
          "Sirve de soporte físico",
          "Distribuir la energía",
          "Distribuir los datos",
          "Todas las respuestas son correctas"
        ],
        correcta: 3,
      },
      {
        enunciado: "El rendimiento de un equipo depende de:",
        opciones: [
          "Únicamente de la frecuencia del reloj",
          "Solo la velocidad de lectura de memoria principal",
          "Del equilibrio entre todos los subsistemas, no de un solo componente",
          "La velocidad de procesamiento de la unidad aritmético lógica"
        ],
        correcta: 2,
      },
      {
        enunciado: "El centro de control de tráfico de la placa base, que gestiona el flujo de datos entre la CPU, la memoria, las ranuras de expansión y los periféricos:",
        opciones: [
          "Factor de forma",
          "Zócalo",
          "Placa de circuito impreso",
          "Chipset"
        ],
        correcta: 3,
      },
      {
        enunciado: "El factor de forma estándar para ordenadores de sobre mesa se llama:",
        opciones: [
          "ATX",
          "Mini-ATX",
          "Micro-ATX",
          "E-ATX"
        ],
        correcta: 0,
      },
      {
        enunciado: "Al mezclar módulos de RAM de diferentes marcas, velocidades o latencias:",
        opciones: [
          "El sistema completo funcionará a la velocidad y latencia del módulo más rápido de todos",
          "Puede causar inestabilidad, pantallazos azules o que el ordenador directamente no arranque",
          "No pasa nada si son de la misma generación (DDR3, DDR4 o DDR5)",
          "El sistema completo funcionará a la velocidad y latencia de la media de los módulos"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Cuál de las siguientes opciones describe correctamente la diferencia entre BIOS y UEFI?",
        opciones: [
          "UEFI reemplaza la BIOS, permite interfaz gráfica y arranque en GPT que mejora MBR y su limitación de 2,2 TB",
          "UEFI solo funciona con procesadores ARM",
          "La BIOS solo admite discos de más de 2,2 TB",
          "BIOS es más rápida y moderna que UEFI"
        ],
        correcta: 0,
      },


      /* Preguntas de repaso antes de Navidad */

      {
        enunciado: "¿Qué compone la “Unidad central del proceso” o procesador (CPU – control Processing Unit)?",
        opciones: [
          "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y periféricos",
          "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y registros",
          "La UC y los registros",
          "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y memoria principal (RAM)"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué componentes permiten al ordenador comunicarse correctamente con los periféricos controlando su velocidad y transmisión de datos?",
        opciones: [
          "Los controladores",
          "El bus del sistema",
          "La memoria caché",
          "El firmware"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué función realiza la Unidad de Control (UC) dentro de la CPU?",
        opciones: [
          "Ejecuta las operaciones aritméticas y lógicas",
          "Controla el flujo de instrucciones y coordina las operaciones del sistema",
          "Almacena los resultados de los cálculos",
          "Gestiona el almacenamiento de datos a largo plazo"
        ],
        correcta: 1,
      },
      {
        enunciado: "El firmware se define como:",
        opciones: [
          "Un hardware que controla al software",
          "Un software integrado en un hardware, almacenado en una memoria especial",
          "Un programa que se ejecuta en la memoria RAM",
          "Un periférico encargado de la entrada de datos"
        ],
        correcta: 1,
      },
      {
        enunciado: "Diferencias entre memoria RAM, ROM, caché y memoria virtual:",
        opciones: [
          "RAM: solo guarda fotos; ROM: ejecuta juegos; Caché: tipo de procesador; Memoria virtual: memoria masiva, discos duros",
          "RAM: permanente; ROM: temporal; Caché: almacena archivos grandes; Memoria virtual: igual que RAM física",
          "RAM: temporal y volátil; ROM: permanente; Caché: memoria rápida cercana al procesador; Memoria virtual: extensión de RAM en disco duro",
          "RAM: igual al disco duro; ROM: memoria de la tarjeta gráfica; Caché: extensión de RAM en disco duro; Memoria virtual: permanente"
        ],
        correcta: 2,
      },
      {
        enunciado: "De acuerdo con la Jerarquía de la Memoria (atendiendo a capacidad, velocidad y coste), ¿cuál de los siguientes componentes ocupa el primer puesto (mayor velocidad y coste)?",
        opciones: [
          "Disco Magnético",
          "Memoria principal",
          "Memoria Caché",
          "Registro interno del procesador"
        ],
        correcta: 3,
      },
      {
        enunciado: "Definición del término “Informática”:",
        opciones: [
          "Ciencia que estudia el hardware",
          "Ciencia que estudia el tratamiento racional y automático de la información",
          "Ciencia que estudia los programas de usuario",
          "Tecnología de los ordenadores"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué caracteriza a las arquitecturas Von Neumann y Harvard?",
        opciones: [
          "Von Neumann emplea una única memoria tanto para datos como para instrucciones. Harvard utiliza diferentes memorias para los programas y los datos",
          "Von Neumann separa físicamente los datos y las instrucciones. Harvard utiliza diferentes memorias para los programas y los datos",
          "Harvard emplea una única memoria tanto para datos como para instrucciones. Von Neumann utiliza diferentes memorias para los programas y los datos",
          "Está basada en sistemas ópticos de almacenamiento"
        ],
        correcta: 0,
      },
      {
        enunciado: "El tipo de bus que transmite la información por el mismo hilo es…",
        opciones: [
          "Paralelo",
          "Continuador",
          "Señalizador",
          "Serie"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué tipos de memoria necesita ser actualizada (refresco) constantemente para no perder la información?",
        opciones: [
          "SRAM",
          "ROM",
          "DRAM",
          "DDRAM"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué función tiene el registro de instrucción en la CPU?",
        opciones: [
          "Contiene la instrucción que se está ejecutando",
          "Almacena los resultados de la ALU",
          "Controla la velocidad del reloj",
          "Contiene la dirección de la siguiente instrucción"
        ],
        correcta: 0,
      },
      {
        enunciado: "Periféricos de salida-Resolución. ¿Qué indica la resolución de un monitor?",
        opciones: [
          "La cantidad de colores que puede mostrar",
          "El número de puntos o píxeles que puede representar en horizontal por vertical",
          "La velocidad con que se actualiza la imagen",
          "El brillo máximo que alcanza la pantalla"
        ],
        correcta: 1,
      },
      {
        enunciado: "De los siguientes periféricos señala cuál pertenece al almacenamiento de información:",
        opciones: [
          "Lector de banda magnética (ej.: de tarjetas de crédito)",
          "Disco magnético",
          "Detector de barras impresas",
          "Ratón"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Cuál es la jerarquía correcta para el uso de la memoria en relación con lo cerca que están de la CPU?",
        opciones: [
          "Memoria Caché – Memoria Principal – Disco Magnético – Registros internos del procesador",
          "Memoria Principal – Memoria Caché – Disco Magnético – Registros internos del procesador",
          "Registros internos del procesador – Memoria Caché – Memoria Principal – Disco Magnético",
          "Memoria Principal – Registros internos del procesador – Memoria Caché – Disco Magnético"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué determina la velocidad del procesador?",
        opciones: [
          "La frecuencia del reloj",
          "La velocidad en la que la ALU ejecuta las instrucciones",
          "La capacidad del disco duro",
          "El número de registros internos de memoria"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué es el SOFTWARE?",
        opciones: [
          "Elementos tangibles del ordenador",
          "Conjunto de programas e instrucciones que controlan el hardware",
          "Conectores eléctricos del sistema",
          "El procesador del ordenador"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué tipo de software actúa como intermediario entre el hardware y los programas del usuario?",
        opciones: [
          "Firmware",
          "Sistema operativo",
          "Controlador de dispositivo",
          "Son correctas b) y c)"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué mide el ancho de banda?",
        opciones: [
          "La velocidad del Bus de control",
          "La frecuencia del procesador",
          "La capacidad del disco duro",
          "La cantidad de información transferida por segundo"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué características define a un dispositivo de acceso directo como un disco duro?",
        opciones: [
          "Es necesario recorrer todos los datos anteriores para acceder al deseado",
          "Permite acceder a una posición concreta de datos sin recorrer los anteriores",
          "Solo puede ser leído, no escrito",
          "El valor almacenado se borra cuando pierde deja de ser alimentado por energía"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué tipo de memoria se utiliza principalmente para almacenar la configuración del BIOS, manteniéndose gracias a una pila?",
        opciones: [
          "ROM",
          "EPROM",
          "CMOS",
          "DRAM"
        ],
        correcta: 2,
      },
      {
        enunciado: "En un sistema informático, ¿cómo puede transmitirse la información a través de los buses?",
        opciones: [
          "Solo en serie",
          "Solo en paralelo",
          "En serie o en paralelo, dependiendo del tipo de bus",
          "Ninguna es correcta"
        ],
        correcta: 2,
      },
      {
        enunciado: "El DVD-ROM es:",
        opciones: [
          "Método de almacenamiento de sólo lectura de alta capacidad",
          "Método que permite leer los CD-ROM estándar",
          "Método que permite grabar, borrar y regrabar los datos alcanzando capacidades de más de 4,7GB",
          "Todas son correctas"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué tipo de memoria se actualiza dos veces por cada impulso de reloj?",
        opciones: [
          "DRAM",
          "SRAM",
          "DDRAM",
          "SDRAM"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué tipo de buses hay en la arquitectura Von Neumann?",
        opciones: [
          "Bus de datos, bus de operaciones y bus de datos",
          "Bus de datos y bus de control",
          "Bus de datos, bus de control y bus de direcciones",
          "Bus de control y bus de operaciones"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cómo se mide el tiempo de ciclo de un ordenador?",
        opciones: [
          "En minutos",
          "En nanosegundos",
          "En segundos",
          "En milisegundos"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Cuál NO es una función del controlador de periféricos?",
        opciones: [
          "Sincronizar la transmisión",
          "Controlar el periférico",
          "Ejecutar instrucciones de programa",
          "Detectar errores"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué tipo de software gestiona los recursos hardware para que puedan utilizarlo los programas del usuario?",
        opciones: [
          "Firmware",
          "Sistema operativo",
          "Controlador de dispositivo",
          "Son correctas b) y c)"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué tipo de direccionamiento utiliza los datos directamente incluidos en la instrucción, sin necesidad de acceder a memoria?",
        opciones: [
          "Directo",
          "Indirecto",
          "Inmediato",
          "Relativo"
        ],
        correcta: 2,
      },

      /* Último test subido por el profesor a la plataforma */

      {
        enunciado: "¿Cuál de estos es uno de los cuatro pilares fundamentales de la arquitectura Von Neumann?",
        opciones: [
          "Unidad de Alimentación Eléctrica",
          "Tarjeta Gráfica Dedicada (GPU)",
          "Unidad Central de Procesamiento (CPU)",
          "Sistema de Refrigeración Líquida"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿En qué década fue propuesta la arquitectura Von Neumann por John von Neumann?",
        opciones: [
          "Década de 1930",
          "Década de 1940",
          "Década de 1950",
          "Década de 1960"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Cuál es la función de la Unidad de Control (UC)?",
        opciones: [
          "Transmitir imágenes al monitor",
          "Realizar operaciones matemáticas y lógicas",
          "Almacenar datos de forma permanente",
          "Interpretar instrucciones y coordinar los componentes del sistema"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué camino físico permite la comunicación de la información entre la CPU, la memoria y los periféricos?",
        opciones: [
          "Buses de datos",
          "Cables de alimentación",
          "Zócalos",
          "Chipset"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué son los controladores (drivers)?",
        opciones: [
          "Usuarios que administran la red",
          "Cables que conectan el monitor a la torre",
          "Piezas físicas que aceleran el procesador",
          "Programas que permiten al SO comunicarse con un hardware específico"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué tipo de software se utiliza para tareas específicas como escribir textos o editar fotos?",
        opciones: [
          "Firmware",
          "Software de Sistema",
          "Software de Aplicación",
          "BIOS"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cuál es el factor de forma estándar para torres de sobremesa?",
        opciones: [
          "Mini-ITX",
          "Micro-ATX",
          "ATX",
          "BTX"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué componente se describe como el sistema nervioso central y esqueleto del ordenador?",
        opciones: [
          "El microprocesador",
          "La placa base",
          "La fuente de alimentación",
          "La memoria RAM"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué es el zócalo o socket en una placa base?",
        opciones: [
          "El conector de la fuente de alimentación",
          "El puerto para conectar el disco duro",
          "La ranura para la memoria RAM",
          "El lugar donde se instala la CPU"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Cuál es la función del chipset en la placa base?",
        opciones: [
          "Gestionar el flujo de datos entre los componentes",
          "Almacenar los archivos del usuario",
          "Procesar los gráficos del sistema",
          "Transformar la corriente alterna en continua"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué componente permite que la BIOS/UEFI mantenga la configuración de fecha y hora?",
        opciones: [
          "El condensador principal",
          "La pila CMOS",
          "El regulador de voltaje",
          "El transistor de arranque"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué interfaz se utiliza comúnmente para conectar unidades de almacenamiento como HDD y SSD de 2.5 pulgadas?",
        opciones: [
          "USB 3.0",
          "PCIe",
          "SATA",
          "VGA"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué es el POST (Power-On Self-Test)?",
        opciones: [
          "Un test de velocidad de la conexión a internet",
          "Una herramienta para desfragmentar el disco",
          "Un programa para actualizar los drivers",
          "Un proceso de autodiagnóstico al arrancar el equipo"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Cuál es el sucesor moderno de la BIOS que ofrece una interfaz gráfica y soporte para discos grandes?",
        opciones: [
          "CMOS",
          "UEFI",
          "SATA",
          "RAID"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué función cumple el VRM (Voltage Regulator Module) en la placa base?",
        opciones: [
          "Convertir la energía de la fuente al voltaje exacto que necesita la CPU",
          "Controlar el volumen de los altavoces",
          "Gestionar la velocidad de los ventiladores de la caja",
          "Almacenar temporalmente los datos de las aplicaciones"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué permite hacer el Secure Boot en sistemas UEFI?",
        opciones: [
          "Cifrar los archivos personales del usuario",
          "Evitar que se conecten periféricos USB desconocidos",
          "Asegurar que solo se cargue software de confianza al arrancar",
          "Aumentar la velocidad del procesador mediante overclocking"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cómo se denomina el ciclo constante de tres pasos que realiza la CPU?",
        opciones: [
          "Ciclo de energía (on-off-standby)",
          "Ciclo de almacenamiento (save-load-delete)",
          "Ciclo de red (send-receive-wait)",
          "Ciclo de instrucción (fetch-decode-execute)"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿En qué unidad de medida se expresa la velocidad a la que la CPU repite su ciclo de trabajo?",
        opciones: [
          "Vatios (W)",
          "Bits por segundo (bps)",
          "Hercios (Hz)",
          "Gigabytes (GB)"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué postula la Ley de Moore?",
        opciones: [
          "Que el precio de los procesadores baja a la mitad cada año",
          "Que el número de transistores en un chip se duplica aproximadamente cada dos años",
          "Que la velocidad de la RAM siempre supera a la de la CPU",
          "Que los ordenadores serán obsoletos en una década"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué función cumple la memoria caché dentro de la CPU?",
        opciones: [
          "Guardar los archivos del sistema operativo permanentemente",
          "Almacenar datos que el procesador necesita con frecuencia para evitar ir a la RAM",
          "Gestionar la conexión a internet de alta velocidad",
          "Controlar la temperatura de los ventiladores"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Cuál es el nivel de memoria caché más rápido y cercano al núcleo de la CPU?",
        opciones: [
          "Caché L1",
          "Caché L2",
          "Caché L3",
          "Caché L4"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué es el Overclocking?",
        opciones: [
          "Instalar más memoria RAM de la necesaria",
          "Reducir el consumo de energía para que el PC sea silencioso",
          "Cambiar la pasta térmica del procesador cada seis meses",
          "Aumentar la velocidad de reloj del componente por encima de las especificaciones del fabricante"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué es el benchmarking?",
        opciones: [
          "El diseño de la arquitectura interna de los transistores",
          "La limpieza física de los ventiladores del procesador",
          "El proceso de medir el rendimiento del hardware de forma objetiva mediante pruebas estandarizadas",
          "La comparación de precios entre diferentes tiendas de informática"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué herramienta se menciona como útil para monitorizar información técnica del procesador en tiempo real?",
        opciones: [
          "Google Chrome",
          "HWiNFO",
          "Microsoft Word",
          "VLC Player"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿En qué paso del ciclo de instrucción la CPU interpreta la instrucción para saber qué operación realizar?",
        opciones: [
          "Decodificar (Decode)",
          "Recoger (Fetch)",
          "Ejecutar (Execute)",
          "Almacenar (Store)"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué superficie de trabajo se debe evitar para prevenir la acumulación de carga estática?",
        opciones: [
          "Esterillas antiestáticas",
          "Mesas rígidas de madera",
          "Alfombras y superficies sintéticas",
          "Mesas de metal conectadas a tierra"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué componente se recomienda instalar en la placa base antes de introducirla en la caja?",
        opciones: [
          "La CPU, la RAM y el disipador",
          "La tarjeta gráfica",
          "La fuente de alimentación",
          "Los discos duros mecánicos"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Cómo se llaman los postes metálicos que separan la placa base del chasis para evitar cortocircuitos?",
        opciones: [
          "Brackets",
          "Jumpers",
          "Screws (tornillos)",
          "Standoffs (separadores)"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué técnica se recomienda para aplicar la pasta térmica sobre el procesador?",
        opciones: [
          "Extender una capa gruesa por toda la placa base",
          "Aplicar una pequeña cantidad (3 granos de arroz - guisante) en el centro",
          "No usar nada si el disipador es nuevo",
          "Cubrir solo los bordes del procesador"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué indica la pequeña flecha o triángulo en una esquina de la CPU?",
        opciones: [
          "La velocidad máxima del procesador",
          "La dirección del flujo de aire",
          "La orientación correcta para su colocación en el zócalo",
          "El voltaje de funcionamiento"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué componente permite añadir nuevas capacidades o mejorar drásticamente las ya existentes en una placa base?",
        opciones: [
          "Fuente de alimentación",
          "Memoria caché L1",
          "Tarjeta de expansión",
          "Carcasa del PC"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cuál es la ranura de expansión más utilizada actualmente para conectar tarjetas gráficas y de red?",
        opciones: [
          "PCI Express (PCIe)",
          "ISA",
          "AGP",
          "VGA"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué tecnología permite que un puerto USB-C transmita datos de hasta 40 Gbps, vídeo y energía en un solo cable?",
        opciones: [
          "SATA 3",
          "Wi-Fi 6",
          "Bluetooth 5.0",
          "Thunderbolt"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Cuál es la diferencia principal entre un bus y un protocolo según el documento?",
        opciones: [
          "No hay diferencia, son sinónimos",
          "El bus es inalámbrico y el protocolo es por cable",
          "El bus es software y el protocolo es hardware",
          "El bus es el camino físico y el protocolo es el lenguaje que viaja por él"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué protocolo de comunicación moderno permite a los SSD aprovechar la velocidad del bus PCIe?",
        opciones: [
          "IDE",
          "NVMe",
          "SCSI",
          "Ethernet"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué interfaces son las más comunes para la salida de vídeo digital en la actualidad?",
        opciones: [
          "HDMI y DisplayPort",
          "VGA y RCA",
          "S-Video y Euroconector",
          "Serial y Paralelo"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué ventaja ofrece el puerto DisplayPort sobre otros conectores de vídeo?",
        opciones: [
          "Es un conector analógico más resistente",
          "Es el único que transmite audio",
          "Permite conectar varios monitores en cadena (daisy chain)",
          "Solo funciona con tarjetas de sonido"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué tipo de dispositivo de almacenamiento es mecánico y utiliza platos giratorios?",
        opciones: [
          "Tarjeta SD",
          "SSD (Solid-State Drive)",
          "Memoria RAM",
          "HDD (Hard Disk Drive)"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué significa la sigla NAS?",
        opciones: [
          "New Advanced Serial",
          "National Archive System",
          "Node Access Storage",
          "Network Attached Storage"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué nivel de RAID realiza un 'espejo' (mirroring) de los datos en tiempo real?",
        opciones: [
          "RAID 0",
          "RAID 1",
          "RAID 5",
          "RAID JBOD"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué ocurre en un RAID 5 si fallan dos discos simultáneamente?",
        opciones: [
          "Los datos se mueven automáticamente a la nube",
          "El sistema sigue funcionando en modo lento",
          "Se pierde la información (solo tolera el fallo de un disco)",
          "La paridad permite reconstruirlos sin problemas"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué es un Mainframe?",
        opciones: [
          "Un ordenador de alto rendimiento para procesar miles de millones de transacciones",
          "Un tipo de ordenador portátil para directivos",
          "Una carcasa reforzada para ordenadores de sobremesa",
          "Un software de edición de vídeo profesional"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué significan las siglas CPD?",
        opciones: [
          "Central de Procesadores Distribuidos",
          "Control de Programación Digital",
          "Centro de Proceso de Datos",
          "Conexión de Periféricos Directos"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Cuál es la función de un rack en un CPD?",
        opciones: [
          "Enfriar directamente el procesador con agua",
          "Alojar servidores y equipos de red de forma organizada",
          "Generar electricidad en caso de apagón",
          "Almacenar las copias de seguridad en cinta"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué componente es esencial para garantizar la energía ininterrumpida ante un fallo eléctrico corto?",
        opciones: [
          "Tarjeta de red",
          "Disco duro SSD",
          "SAI / UPS",
          "Monitor LED"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué técnica lógica permite segmentar redes para mejorar la seguridad?",
        opciones: [
          "VLAN",
          "RAID 5",
          "Overclocking",
          "P2V"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué diferencia a una imagen de respaldo de una simple copia de archivos?",
        opciones: [
          "No permite restaurar el sistema operativo",
          "Solo guarda documentos de texto y fotos",
          "Es más lenta de copiar pero ocupa menos espacio",
          "Es una fotografía exacta de todo el disco, incluyendo SO y aplicaciones"
        ],
        correcta: 3,
      },
      {
        enunciado: "¿Qué significan las siglas P2V en el contexto de migración de sistemas?",
        opciones: [
          "Power-to-Volume",
          "Physical-to-Virtual",
          "Point-to-Verify",
          "Process-to-Variable"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué técnica de mantenimiento utiliza datos como temperaturas y S.M.A.R.T. para anticipar fallos?",
        opciones: [
          "Mantenimiento manual",
          "Mantenimiento reactivo",
          "Mantenimiento predictivo",
          "Mantenimiento de software"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿Qué efecto negativo tiene el polvo acumulado dentro de un ordenador?",
        opciones: [
          "Actúa como un aislante térmico y aumenta la temperatura",
          "Mejora la conducción eléctrica de los circuitos",
          "Aumenta la velocidad de los ventiladores",
          "No tiene ningún efecto relevante si el PC funciona"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué indican los valores S.M.A.R.T. de un disco?",
        opciones: [
          "Información sobre la salud y posibles fallos del disco",
          "La velocidad de descarga de archivos de internet",
          "El nombre del usuario que creó las carpetas",
          "La cantidad de colores que puede mostrar el monitor"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué concepto define el uso de recursos informáticos como servidores o almacenamiento a través de Internet?",
        opciones: [
          "Hardware local",
          "On-premise",
          "Cloud Computing (Computación en la nube)",
          "Mainframe individual"
        ],
        correcta: 2,
      },
      {
        enunciado: "¿De qué se encarga el proveedor en un modelo IaaS?",
        opciones: [
          "De instalar los parches del sistema operativo del cliente",
          "Del hardware, la red física y el almacenamiento",
          "De gestionar los datos y permisos de los usuarios finales",
          "De programar el código de la aplicación del cliente"
        ],
        correcta: 1,
      },
      {
        enunciado: "¿Qué modelo de nube permite a los desarrolladores centrarse en el código sin gestionar el sistema operativo?",
        opciones: [
          "PaaS (Platform as a Service)",
          "IaaS",
          "Hardware as a Service",
          "SaaS"
        ],
        correcta: 0,
      },
      {
        enunciado: "¿Qué ventaja ofrece el pago por uso en la nube?",
        opciones: [
          "Permite que el PC del usuario sea más rápido",
          "Hace que el hardware dure para siempre",
          "Evita tener que usar sistemas operativos",
          "Permite escalar recursos según la demanda sin inversión inicial en hardware"
        ],
        correcta: 3,
      }

    ];