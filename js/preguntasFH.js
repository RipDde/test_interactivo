const preguntasFH = [
  {
    enunciado: "¿Cuál de las siguientes afirmaciones sobre los discos NVMe es correcta?",
    opciones: [
      "Se comunican directamente con la CPU mediante el bus PCIe",
      "Utilizan la interfaz SATA III pero con menor latencia",
      "Requieren controladores IDE específicos para funcionar",
      "Usan el mismo protocolo que los discos SAS"
    ],
    correcta: 0,
    explicacion: " La correcta es Se comunican directamente con la CPU mediante el bus PCIe porque NVMe es un protocolo pensado para SSD que aprovecha PCIe y reduce la latencia frente a interfaces más antiguas. La opción b es incorrecta porque confunde NVMe con interfaces o protocolos de almacenamiento más antiguos o diferentes. La opción c es incorrecta porque confunde NVMe con interfaces o protocolos de almacenamiento más antiguos o diferentes. La opción d es incorrecta porque confunde NVMe con interfaces o protocolos de almacenamiento más antiguos o diferentes."
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
    explicacion: " La correcta es LGA porque el socket es el punto físico de la placa donde se instala el procesador y su tipo define la compatibilidad con la CPU. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Unidad de control, unidad aritmeticológica (ALU), registros internos y reloj porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción d es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta."
  },
  {
    enunciado: "¿Cuáles son los cuatro pilares fundamentales que actúan como subsistemas interconectados de la arquitectura Von Newman?",
    opciones: [
      "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), memoria secundaria, subsistema de Entrada/Salida",
      "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), subsistema de Entrada/Salida, Buses",
      "Unidad central de procesamiento (CPU), tarjeta gráfica (GPU), memoria principal, Buses",
      "Unidad central de procesamiento (CPU), memoria principal, subsistema de Entrada/Salida, Buses"
    ],
    correcta: 3,
    explicacion: " La correcta es Unidad central de procesamiento (CPU), memoria principal, subsistema de Entrada/Salida, Buses porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta. La opción b es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta. La opción c es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta."
  },
  {
    enunciado: "¿En qué tipo de memoria no volátil se almacena la BIOS/UEFI?",
    opciones: [
      "CMOS",
      "DDR",
      "SRAM",
      "SDRAM"
    ],
    correcta: 0,
    explicacion: " La correcta es CMOS porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "La memoria caché y los registros internos de la CPU utilizan un tipo de memoria, que no necesita refresco, ¿cuál es?",
    opciones: [
      "Dynamic RAM (DRAM)",
      "Static RAM (SRAM)",
      "Synchronous Dynamic RAM (SDRAM)",
      "Double Data Rate Synchronous Dynamic RAM (DDR SDRAM)"
    ],
    correcta: 1,
    explicacion: " La correcta es Static RAM (SRAM) porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "En la arquitectura Von Neumann, en la memoria principal albergan:",
    opciones: [
      "Direcciones e instrucciones",
      "Datos y direcciones",
      "Datos e instrucciones",
      "Direcciones"
    ],
    correcta: 2,
    explicacion: " La correcta es Datos e instrucciones porque la arquitectura Von Neumann se basa en CPU, memoria principal, entrada/salida y buses para comunicar los subsistemas. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Qué tipos de buses existen en un ordenador?",
    opciones: [
      "Bus de datos, instrucciones y control",
      "Bus de datos, direcciones y reloj",
      "Bus de instrucciones, direcciones y control",
      "Bus de datos, direcciones y control"
    ],
    correcta: 3,
    explicacion: " La correcta es Bus de datos, direcciones y control porque los buses son las vías de comunicación que transportan datos, direcciones y señales de control entre los componentes. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "Se le llama Arquitectura de Memoria Unificada a una configuración en la que:",
    opciones: [
      "Tanto la CPU como la GPU acceden a la misma memoria física con la misma prioridad y velocidad",
      "Ajusta automáticamente la frecuencia, los voltajes y las latencias para que la memoria funcione a su máximo rendimiento",
      "La RAM y VRAM se comunican por un canal PCIexpress",
      "Una memoria que lee 2 veces en un mismo ciclo de reloj"
    ],
    correcta: 0,
    explicacion: " La correcta es Tanto la CPU como la GPU acceden a la misma memoria física con la misma prioridad y velocidad porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta."
  },
  {
    enunciado: "En la arquitectura de memoria de un sistema moderno, la caché L3 se caracteriza por:",
    opciones: [
      "Ser exclusiva de la GPU",
      "Compartida entre núcleos de CPU y más lenta que L1 y L2",
      "La más rápida de todas",
      "Solo se usa en discos SSD"
    ],
    correcta: 1,
    explicacion: " La correcta es Compartida entre núcleos de CPU y más lenta que L1 y L2 porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Procedimiento POST porque POST es la comprobación inicial que verifica hardware básico durante el arranque. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta."
  },
  {
    enunciado: "¿Qué software nos permite consultar las temperaturas y los voltajes de los diferentes componentes de nuestro equipo?",
    opciones: [
      "Speccy",
      "CPU-Z",
      "Chocolatey",
      "HWiNFO"
    ],
    correcta: 3,
    explicacion: " La correcta es HWiNFO porque HWiNFO permite consultar sensores del equipo como temperaturas, voltajes, frecuencias y otros datos técnicos. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "La Jerarquía de memoria de mayor a menor velocidad de lectura se ordenarían en:",
    opciones: [
      "Registros internos de memoria, cache, RAM, discos duros",
      "Discos duros, registros internos de memoria, cache, RAM",
      "Discos duros, RAM, registros internos de memoria, cache",
      "Discos duros, RAM, cache, registros internos de memoria"
    ],
    correcta: 0,
    explicacion: " La correcta es Registros internos de memoria, cache, RAM, discos duros porque la SRAM es memoria muy rápida y no necesita refresco constante, por eso se usa en caché y registros. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Qué software propietario se puede probar gratuitamente por un período limitado antes de comprarlo?",
    opciones: [
      "Freeware",
      "Shareware",
      "Ransomware",
      "FOSS"
    ],
    correcta: 1,
    explicacion: " La correcta es Shareware porque el shareware es software propietario que puede probarse gratis durante un tiempo o con limitaciones antes de comprarlo. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El proceso por el que la CPU decodifica la instrucción para entender qué operación debe realizar se llama:",
    opciones: [
      "FETCH",
      "EXECUTE",
      "DECODE",
      "STORE"
    ],
    correcta: 2,
    explicacion: " La correcta es DECODE porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es RISC porque RISC usa instrucciones simples y eficientes, muy habitual en arquitecturas móviles como ARM. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es M.2 porque M.2 es un conector moderno usado para almacenamiento de alta velocidad, especialmente SSD NVMe. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El conector de ATX 24 pines de la fuente de alimentación es para:",
    opciones: [
      "CPU",
      "Placa base",
      "Ventiladores",
      "GPU"
    ],
    correcta: 1,
    explicacion: " La correcta es Placa base porque el conector ATX de 24 pines alimenta la placa base. La opción a es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta."
  },
  {
    enunciado: "¿En qué orden suele ser común introducir la memoria RAM en las diferentes ranuras (ATX 4 ranuras) para activar el DUAL Channel?",
    opciones: [
      "1 y 2",
      "3 y 4",
      "1 y 3 o 2 y 4",
      "1 y 4"
    ],
    correcta: 2,
    explicacion: " La correcta es 1 y 3 o 2 y 4 porque el Dual Channel se activa colocando módulos en ranuras emparejadas según el manual de la placa. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Sistema operativo porque el sistema operativo coordina el hardware y ofrece servicios a las aplicaciones. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado."
  },
  {
    enunciado: "Para el correcto montaje de la fuente de alimentación:",
    opciones: [
      "Colocar el ventilador según la entrada de aire de la caja",
      "Hay que atornillarla siguiendo el patrón de las agujas del reloj para los 4 tornillos",
      "Solo hay que tener en cuenta que los cables de la alimentación lleguen a todos los componentes",
      "No es necesario mirar ningún manual del fabricante"
    ],
    correcta: 0,
    explicacion: " La correcta es Colocar el ventilador según la entrada de aire de la caja porque la fuente debe montarse orientando el ventilador según el flujo de aire de la caja para refrigerar correctamente. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es POST porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción c es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción d es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado."
  },
  {
    enunciado: "Preparar la placa base fuera de la caja, incluye las siguientes operaciones:",
    opciones: [
      "Instalar CPU, ventilador, disipador, RAM",
      "Instalar CPU, pasta térmica, ventilador, RAM",
      "Instalar CPU, pasta térmica, disipador, RAM",
      "Instalar CPU, pasta térmica, disipador, discos duros"
    ],
    correcta: 2,
    explicacion: " La correcta es Instalar CPU, pasta térmica, disipador, RAM porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta."
  },
  {
    enunciado: "Preparar la placa y el chasis, incluye la siguiente secuencia de pasos correcta:",
    opciones: [
      "Instalar primero el I/O shield y presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornilla sin exceso de par",
      "Montar la fuente de alimentación orientando el ventilador según la entrada de aire de la caja y presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornillar",
      "Presentar la placa, comprobando que cada orificio coincide con los agujeros de la caja, y atornillar. Conectar la alimentación de todos los componentes con la fuente de alimentación",
      "Colocar los standoffs, instalar primero el I/O shield y presentar la placa, comprobando que cada orificio coincide con un standoff, y atornilla sin exceso de par"
    ],
    correcta: 3,
    explicacion: " La correcta es Colocar los standoffs, instalar primero el I/O shield y presentar la placa, comprobando que cada orificio coincide con un standoff, y atornilla sin exceso de par porque los standoffs separan la placa del chasis para evitar contacto directo y cortocircuitos. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "La placa base (motherboard) tiene entre sus funciones:",
    opciones: [
      "Todas las respuestas son correctas",
      "Sirve de soporte físico",
      "Distribuir la energía",
      "Distribuir los datos"
    ],
    correcta: 0,
    explicacion: " La correcta es Todas las respuestas son correctas porque la placa base conecta, alimenta y permite comunicar los componentes del ordenador. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "El rendimiento de un equipo depende de:",
    opciones: [
      "Únicamente de la frecuencia del reloj",
      "Del equilibrio entre todos los subsistemas, no de un solo componente",
      "Solo la velocidad de lectura de memoria principal",
      "La velocidad de procesamiento de la unidad aritmético lógica"
    ],
    correcta: 1,
    explicacion: " La correcta es Del equilibrio entre todos los subsistemas, no de un solo componente porque es la opción que coincide con el concepto técnico preguntado y con la función real de ese componente o tecnología. La opción a es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El centro de control de tráfico de la placa base, que gestiona el flujo de datos entre la CPU, la memoria, las ranuras de expansión y los periféricos:",
    opciones: [
      "Factor de forma",
      "Zócalo",
      "Chipset",
      "Placa de circuito impreso"
    ],
    correcta: 2,
    explicacion: " La correcta es Chipset porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El factor de forma estándar para ordenadores de sobre mesa se llama:",
    opciones: [
      "Mini-ATX",
      "Micro-ATX",
      "E-ATX",
      "ATX"
    ],
    correcta: 3,
    explicacion: " La correcta es ATX porque ATX es el formato estándar más habitual en torres de sobremesa. La opción a es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción b es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción c es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta."
  },
  {
    enunciado: "Al mezclar módulos de RAM de diferentes marcas, velocidades o latencias:",
    opciones: [
      "Puede causar inestabilidad, pantallazos azules o que el ordenador directamente no arranque",
      "El sistema completo funcionará a la velocidad y latencia del módulo más rápido de todos",
      "No pasa nada si son de la misma generación (DDR3, DDR4 o DDR5)",
      "El sistema completo funcionará a la velocidad y latencia de la media de los módulos"
    ],
    correcta: 0,
    explicacion: " La correcta es Puede causar inestabilidad, pantallazos azules o que el ordenador directamente no arranque porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones describe correctamente la diferencia entre BIOS y UEFI?",
    opciones: [
      "UEFI solo funciona con procesadores ARM",
      "UEFI reemplaza la BIOS, permite interfaz gráfica y arranque en GPT que mejora MBR y su limitación de 2,2 TB",
      "La BIOS solo admite discos de más de 2,2 TB",
      "BIOS es más rápida y moderna que UEFI"
    ],
    correcta: 1,
    explicacion: " La correcta es UEFI reemplaza la BIOS, permite interfaz gráfica y arranque en GPT que mejora MBR y su limitación de 2,2 TB porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción a es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción c es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción d es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado."
  },
  {
    enunciado: "¿Qué compone la “Unidad central del proceso” o procesador (CPU – control Processing Unit)?",
    opciones: [
      "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y periféricos",
      "La UC y los registros",
      "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y registros",
      "El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y memoria principal (RAM)"
    ],
    correcta: 2,
    explicacion: " La correcta es El conjunto de Unidad de control (CU), la unidad aritmeticológica (ALU) y registros porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Qué componentes permiten al ordenador comunicarse correctamente con los periféricos controlando su velocidad y transmisión de datos?",
    opciones: [
      "El bus del sistema",
      "La memoria caché",
      "El firmware",
      "Los controladores"
    ],
    correcta: 3,
    explicacion: " La correcta es Los controladores porque los drivers permiten que el sistema operativo se comunique con hardware concreto. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado."
  },
  {
    enunciado: "¿Qué función realiza la Unidad de Control (UC) dentro de la CPU?",
    opciones: [
      "Controla el flujo de instrucciones y coordina las operaciones del sistema",
      "Ejecuta las operaciones aritméticas y lógicas",
      "Almacena los resultados de los cálculos",
      "Gestiona el almacenamiento de datos a largo plazo"
    ],
    correcta: 0,
    explicacion: " La correcta es Controla el flujo de instrucciones y coordina las operaciones del sistema porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
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
    explicacion: " La correcta es Un software integrado en un hardware, almacenado en una memoria especial porque el firmware es software integrado en hardware que controla funciones básicas del dispositivo. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
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
    explicacion: " La correcta es RAM: temporal y volátil; ROM: permanente; Caché: memoria rápida cercana al procesador; Memoria virtual: extensión de RAM en disco duro porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta."
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
    explicacion: " La correcta es Registro interno del procesador porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "Definición del término “Informática”:",
    opciones: [
      "Ciencia que estudia el tratamiento racional y automático de la información",
      "Ciencia que estudia el hardware",
      "Ciencia que estudia los programas de usuario",
      "Tecnología de los ordenadores"
    ],
    correcta: 0,
    explicacion: " La correcta es Ciencia que estudia el tratamiento racional y automático de la información porque la informática estudia el tratamiento automático y racional de la información. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué caracteriza a las arquitecturas Von Neumann y Harvard?",
    opciones: [
      "Von Neumann separa físicamente los datos y las instrucciones. Harvard utiliza diferentes memorias para los programas y los datos",
      "Von Neumann emplea una única memoria tanto para datos como para instrucciones. Harvard utiliza diferentes memorias para los programas y los datos",
      "Harvard emplea una única memoria tanto para datos como para instrucciones. Von Neumann utiliza diferentes memorias para los programas y los datos",
      "Está basada en sistemas ópticos de almacenamiento"
    ],
    correcta: 1,
    explicacion: " La correcta es Von Neumann emplea una única memoria tanto para datos como para instrucciones. Harvard utiliza diferentes memorias para los programas y los datos porque la arquitectura Von Neumann se basa en CPU, memoria principal, entrada/salida y buses para comunicar los subsistemas. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El tipo de bus que transmite la información por el mismo hilo es…",
    opciones: [
      "Paralelo",
      "Continuador",
      "Serie",
      "Señalizador"
    ],
    correcta: 2,
    explicacion: " La correcta es Serie porque los buses son las vías de comunicación que transportan datos, direcciones y señales de control entre los componentes. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipos de memoria necesita ser actualizada (refresco) constantemente para no perder la información?",
    opciones: [
      "SRAM",
      "ROM",
      "DDRAM",
      "DRAM"
    ],
    correcta: 3,
    explicacion: " La correcta es DRAM porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
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
    explicacion: " La correcta es Contiene la instrucción que se está ejecutando porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es El número de puntos o píxeles que puede representar en horizontal por vertical porque la resolución indica la cantidad de píxeles mostrados horizontal y verticalmente. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "De los siguientes periféricos señala cuál pertenece al almacenamiento de información:",
    opciones: [
      "Lector de banda magnética (ej.: de tarjetas de crédito)",
      "Detector de barras impresas",
      "Disco magnético",
      "Ratón"
    ],
    correcta: 2,
    explicacion: " La correcta es Disco magnético porque es la opción que coincide con el concepto técnico preguntado y con la función real de ese componente o tecnología. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál es la jerarquía correcta para el uso de la memoria en relación con lo cerca que están de la CPU?",
    opciones: [
      "Memoria Caché – Memoria Principal – Disco Magnético – Registros internos del procesador",
      "Memoria Principal – Memoria Caché – Disco Magnético – Registros internos del procesador",
      "Memoria Principal – Registros internos del procesador – Memoria Caché – Disco Magnético",
      "Registros internos del procesador – Memoria Caché – Memoria Principal – Disco Magnético"
    ],
    correcta: 3,
    explicacion: " La correcta es Registros internos del procesador – Memoria Caché – Memoria Principal – Disco Magnético porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
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
    explicacion: " La correcta es La frecuencia del reloj porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque mezcla componentes de la CPU de forma incompleta o incorrecta."
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
    explicacion: " La correcta es Conjunto de programas e instrucciones que controlan el hardware porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipo de software actúa como intermediario entre el hardware y los programas del usuario?",
    opciones: [
      "Firmware",
      "Sistema operativo",
      "Son correctas b) y c)",
      "Controlador de dispositivo"
    ],
    correcta: 2,
    explicacion: " La correcta es Son correctas b) y c) porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
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
    explicacion: " La correcta es La cantidad de información transferida por segundo porque el ancho de banda mide cuánta información puede transferirse por unidad de tiempo. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué características define a un dispositivo de acceso directo como un disco duro?",
    opciones: [
      "Permite acceder a una posición concreta de datos sin recorrer los anteriores",
      "Es necesario recorrer todos los datos anteriores para acceder al deseado",
      "Solo puede ser leído, no escrito",
      "El valor almacenado se borra cuando pierde deja de ser alimentado por energía"
    ],
    correcta: 0,
    explicacion: " La correcta es Permite acceder a una posición concreta de datos sin recorrer los anteriores porque un dispositivo de acceso directo permite ir a una posición concreta sin leer todo lo anterior. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipo de memoria se utiliza principalmente para almacenar la configuración del BIOS, manteniéndose gracias a una pila?",
    opciones: [
      "ROM",
      "CMOS",
      "EPROM",
      "DRAM"
    ],
    correcta: 1,
    explicacion: " La correcta es CMOS porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
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
    explicacion: " La correcta es En serie o en paralelo, dependiendo del tipo de bus porque los buses son las vías de comunicación que transportan datos, direcciones y señales de control entre los componentes. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "El DVD-ROM es:",
    opciones: [
      "Método que permite leer los CD-ROM estándar",
      "Método que permite grabar, borrar y regrabar los datos alcanzando capacidades de más de 4,7GB",
      "Todas son correctas",
      "Método de almacenamiento de sólo lectura de alta capacidad"
    ],
    correcta: 3,
    explicacion: " La correcta es Método de almacenamiento de sólo lectura de alta capacidad porque DVD-ROM es un soporte óptico de solo lectura con más capacidad que un CD-ROM. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipo de memoria se actualiza dos veces por cada impulso de reloj?",
    opciones: [
      "DDRAM",
      "DRAM",
      "SRAM",
      "SDRAM"
    ],
    correcta: 0,
    explicacion: " La correcta es DDRAM porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Qué tipo de buses hay en la arquitectura Von Neumann?",
    opciones: [
      "Bus de datos, bus de operaciones y bus de datos",
      "Bus de datos, bus de control y bus de direcciones",
      "Bus de datos y bus de control",
      "Bus de control y bus de operaciones"
    ],
    correcta: 1,
    explicacion: " La correcta es Bus de datos, bus de control y bus de direcciones porque la arquitectura Von Neumann se basa en CPU, memoria principal, entrada/salida y buses para comunicar los subsistemas. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Cómo se mide el tiempo de ciclo de un ordenador?",
    opciones: [
      "En minutos",
      "En segundos",
      "En nanosegundos",
      "En milisegundos"
    ],
    correcta: 2,
    explicacion: " La correcta es En nanosegundos porque es la opción que coincide con el concepto técnico preguntado y con la función real de ese componente o tecnología. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál NO es una función del controlador de periféricos?",
    opciones: [
      "Sincronizar la transmisión",
      "Controlar el periférico",
      "Detectar errores",
      "Ejecutar instrucciones de programa"
    ],
    correcta: 3,
    explicacion: " La correcta es Ejecutar instrucciones de programa porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipo de software gestiona los recursos hardware para que puedan utilizarlo los programas del usuario?",
    opciones: [
      "Son correctas b) y c)",
      "Firmware",
      "Sistema operativo",
      "Controlador de dispositivo"
    ],
    correcta: 0,
    explicacion: " La correcta es Son correctas b) y c) porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción b es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Qué tipo de direccionamiento utiliza los datos directamente incluidos en la instrucción, sin necesidad de acceder a memoria?",
    opciones: [
      "Directo",
      "Inmediato",
      "Indirecto",
      "Relativo"
    ],
    correcta: 1,
    explicacion: " La correcta es Inmediato porque en el direccionamiento inmediato el dato está incluido en la propia instrucción. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál de estos es uno de los cuatro pilares fundamentales de la arquitectura Von Neumann?",
    opciones: [
      "Unidad de Alimentación Eléctrica",
      "Tarjeta Gráfica Dedicada (GPU)",
      "Unidad Central de Procesamiento (CPU)",
      "Sistema de Refrigeración Líquida"
    ],
    correcta: 2,
    explicacion: " La correcta es Unidad Central de Procesamiento (CPU) porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿En qué década fue propuesta la arquitectura Von Neumann por John von Neumann?",
    opciones: [
      "Década de 1930",
      "Década de 1950",
      "Década de 1960",
      "Década de 1940"
    ],
    correcta: 3,
    explicacion: " La correcta es Década de 1940 porque la arquitectura Von Neumann se basa en CPU, memoria principal, entrada/salida y buses para comunicar los subsistemas. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál es la función de la Unidad de Control (UC)?",
    opciones: [
      "Interpretar instrucciones y coordinar los componentes del sistema",
      "Transmitir imágenes al monitor",
      "Realizar operaciones matemáticas y lógicas",
      "Almacenar datos de forma permanente"
    ],
    correcta: 0,
    explicacion: " La correcta es Interpretar instrucciones y coordinar los componentes del sistema porque es la opción que coincide con el concepto técnico preguntado y con la función real de ese componente o tecnología. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Qué camino físico permite la comunicación de la información entre la CPU, la memoria y los periféricos?",
    opciones: [
      "Cables de alimentación",
      "Buses de datos",
      "Zócalos",
      "Chipset"
    ],
    correcta: 1,
    explicacion: " La correcta es Buses de datos porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué son los controladores (drivers)?",
    opciones: [
      "Usuarios que administran la red",
      "Cables que conectan el monitor a la torre",
      "Programas que permiten al SO comunicarse con un hardware específico",
      "Piezas físicas que aceleran el procesador"
    ],
    correcta: 2,
    explicacion: " La correcta es Programas que permiten al SO comunicarse con un hardware específico porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tipo de software se utiliza para tareas específicas como escribir textos o editar fotos?",
    opciones: [
      "Firmware",
      "Software de Sistema",
      "BIOS",
      "Software de Aplicación"
    ],
    correcta: 3,
    explicacion: " La correcta es Software de Aplicación porque el software de aplicación se usa para tareas concretas del usuario, como escribir o editar imágenes. La opción a es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro elemento del arranque o del firmware, no a lo que pregunta el enunciado."
  },
  {
    enunciado: "¿Cuál es el factor de forma estándar para torres de sobremesa?",
    opciones: [
      "ATX",
      "Mini-ITX",
      "Micro-ATX",
      "BTX"
    ],
    correcta: 0,
    explicacion: " La correcta es ATX porque ATX es el formato estándar más habitual en torres de sobremesa. La opción b es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción c es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción d es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta."
  },
  {
    enunciado: "¿Qué es el zócalo o socket en una placa base?",
    opciones: [
      "El conector de la fuente de alimentación",
      "El puerto para conectar el disco duro",
      "El lugar donde se instala la CPU",
      "La ranura para la memoria RAM"
    ],
    correcta: 2,
    explicacion: " La correcta es El lugar donde se instala la CPU porque el socket es el punto físico de la placa donde se instala el procesador y su tipo define la compatibilidad con la CPU. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Cuál es la función del chipset en la placa base?",
    opciones: [
      "Almacenar los archivos del usuario",
      "Procesar los gráficos del sistema",
      "Transformar la corriente alterna en continua",
      "Gestionar el flujo de datos entre los componentes"
    ],
    correcta: 3,
    explicacion: " La correcta es Gestionar el flujo de datos entre los componentes porque la placa base conecta, alimenta y permite comunicar los componentes del ordenador. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué componente permite que la BIOS/UEFI mantenga la configuración de fecha y hora?",
    opciones: [
      "La pila CMOS",
      "El condensador principal",
      "El regulador de voltaje",
      "El transistor de arranque"
    ],
    correcta: 0,
    explicacion: " La correcta es La pila CMOS porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué interfaz se utiliza comúnmente para conectar unidades de almacenamiento como HDD y SSD de 2.5 pulgadas?",
    opciones: [
      "USB 3.0",
      "SATA",
      "PCIe",
      "VGA"
    ],
    correcta: 1,
    explicacion: " La correcta es SATA porque un HDD almacena datos en platos magnéticos giratorios, por eso es mecánico. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué es el POST (Power-On Self-Test)?",
    opciones: [
      "Un test de velocidad de la conexión a internet",
      "Una herramienta para desfragmentar el disco",
      "Un proceso de autodiagnóstico al arrancar el equipo",
      "Un programa para actualizar los drivers"
    ],
    correcta: 2,
    explicacion: " La correcta es Un proceso de autodiagnóstico al arrancar el equipo porque POST es la comprobación inicial que verifica hardware básico durante el arranque. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Cuál es el sucesor moderno de la BIOS que ofrece una interfaz gráfica y soporte para discos grandes?",
    opciones: [
      "CMOS",
      "SATA",
      "RAID",
      "UEFI"
    ],
    correcta: 3,
    explicacion: " La correcta es UEFI porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque corresponde a otro nivel o técnica RAID con un comportamiento distinto."
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
    explicacion: " La correcta es Convertir la energía de la fuente al voltaje exacto que necesita la CPU porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Qué permite hacer el Secure Boot en sistemas UEFI?",
    opciones: [
      "Cifrar los archivos personales del usuario",
      "Asegurar que solo se cargue software de confianza al arrancar",
      "Evitar que se conecten periféricos USB desconocidos",
      "Aumentar la velocidad del procesador mediante overclocking"
    ],
    correcta: 1,
    explicacion: " La correcta es Asegurar que solo se cargue software de confianza al arrancar porque la BIOS/UEFI y su configuración pertenecen al arranque básico del equipo y se conservan mediante memoria no volátil o CMOS según el contexto de la pregunta. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cómo se denomina el ciclo constante de tres pasos que realiza la CPU?",
    opciones: [
      "Ciclo de energía (on-off-standby)",
      "Ciclo de almacenamiento (save-load-delete)",
      "Ciclo de instrucción (fetch-decode-execute)",
      "Ciclo de red (send-receive-wait)"
    ],
    correcta: 2,
    explicacion: " La correcta es Ciclo de instrucción (fetch-decode-execute) porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿En qué unidad de medida se expresa la velocidad a la que la CPU repite su ciclo de trabajo?",
    opciones: [
      "Vatios (W)",
      "Bits por segundo (bps)",
      "Gigabytes (GB)",
      "Hercios (Hz)"
    ],
    correcta: 3,
    explicacion: " La correcta es Hercios (Hz) porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué postula la Ley de Moore?",
    opciones: [
      "Que el número de transistores en un chip se duplica aproximadamente cada dos años",
      "Que el precio de los procesadores baja a la mitad cada año",
      "Que la velocidad de la RAM siempre supera a la de la CPU",
      "Que los ordenadores serán obsoletos en una década"
    ],
    correcta: 0,
    explicacion: " La correcta es Que el número de transistores en un chip se duplica aproximadamente cada dos años porque POST es la comprobación inicial que verifica hardware básico durante el arranque. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Almacenar datos que el procesador necesita con frecuencia para evitar ir a la RAM porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Cuál es el nivel de memoria caché más rápido y cercano al núcleo de la CPU?",
    opciones: [
      "Caché L2",
      "Caché L3",
      "Caché L1",
      "Caché L4"
    ],
    correcta: 2,
    explicacion: " La correcta es Caché L1 porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
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
    explicacion: " La correcta es Aumentar la velocidad de reloj del componente por encima de las especificaciones del fabricante porque el overclocking aumenta la frecuencia de funcionamiento por encima de las especificaciones del fabricante. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué es el benchmarking?",
    opciones: [
      "El proceso de medir el rendimiento del hardware de forma objetiva mediante pruebas estandarizadas",
      "El diseño de la arquitectura interna de los transistores",
      "La limpieza física de los ventiladores del procesador",
      "La comparación de precios entre diferentes tiendas de informática"
    ],
    correcta: 0,
    explicacion: " La correcta es El proceso de medir el rendimiento del hardware de forma objetiva mediante pruebas estandarizadas porque el benchmarking mide el rendimiento mediante pruebas comparables y estandarizadas. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es HWiNFO porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción c es incorrecta porque corresponde a otro factor de forma o no es el estándar indicado en la pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿En qué paso del ciclo de instrucción la CPU interpreta la instrucción para saber qué operación realizar?",
    opciones: [
      "Recoger (Fetch)",
      "Ejecutar (Execute)",
      "Decodificar (Decode)",
      "Almacenar (Store)"
    ],
    correcta: 2,
    explicacion: " La correcta es Decodificar (Decode) porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué superficie de trabajo se debe evitar para prevenir la acumulación de carga estática?",
    opciones: [
      "Esterillas antiestáticas",
      "Mesas rígidas de madera",
      "Mesas de metal conectadas a tierra",
      "Alfombras y superficies sintéticas"
    ],
    correcta: 3,
    explicacion: " La correcta es Alfombras y superficies sintéticas porque las superficies sintéticas o alfombras pueden acumular electricidad estática y dañar componentes. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es La CPU, la RAM y el disipador porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción b es incorrecta porque confunde el concepto con la tarjeta gráfica, que tiene otra función distinta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cómo se llaman los postes metálicos que separan la placa base del chasis para evitar cortocircuitos?",
    opciones: [
      "Brackets",
      "Standoffs (separadores)",
      "Jumpers",
      "Screws (tornillos)"
    ],
    correcta: 1,
    explicacion: " La correcta es Standoffs (separadores) porque POST es la comprobación inicial que verifica hardware básico durante el arranque. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué técnica se recomienda para aplicar la pasta térmica sobre el procesador?",
    opciones: [
      "Extender una capa gruesa por toda la placa base",
      "No usar nada si el disipador es nuevo",
      "Aplicar una pequeña cantidad (3 granos de arroz - guisante) en el centro",
      "Cubrir solo los bordes del procesador"
    ],
    correcta: 2,
    explicacion: " La correcta es Aplicar una pequeña cantidad (3 granos de arroz - guisante) en el centro porque la CPU se encarga de interpretar y ejecutar instrucciones usando sus unidades internas y registros. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué indica la pequeña flecha o triángulo en una esquina de la CPU?",
    opciones: [
      "La velocidad máxima del procesador",
      "La dirección del flujo de aire",
      "El voltaje de funcionamiento",
      "La orientación correcta para su colocación en el zócalo"
    ],
    correcta: 3,
    explicacion: " La correcta es La orientación correcta para su colocación en el zócalo porque el socket es el punto físico de la placa donde se instala el procesador y su tipo define la compatibilidad con la CPU. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué componente permite añadir nuevas capacidades o mejorar drásticamente las ya existentes en una placa base?",
    opciones: [
      "Tarjeta de expansión",
      "Fuente de alimentación",
      "Memoria caché L1",
      "Carcasa del PC"
    ],
    correcta: 0,
    explicacion: " La correcta es Tarjeta de expansión porque la placa base conecta, alimenta y permite comunicar los componentes del ordenador. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Cuál es la ranura de expansión más utilizada actualmente para conectar tarjetas gráficas y de red?",
    opciones: [
      "ISA",
      "PCI Express (PCIe)",
      "AGP",
      "VGA"
    ],
    correcta: 1,
    explicacion: " La correcta es PCI Express (PCIe) porque PCI Express es la ranura moderna usada para tarjetas gráficas, red y otros dispositivos de expansión. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué tecnología permite que un puerto USB-C transmita datos de hasta 40 Gbps, vídeo y energía en un solo cable?",
    opciones: [
      "SATA 3",
      "Wi-Fi 6",
      "Thunderbolt",
      "Bluetooth 5.0"
    ],
    correcta: 2,
    explicacion: " La correcta es Thunderbolt porque Thunderbolt combina datos de alta velocidad, vídeo y energía en un mismo conector compatible. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es El bus es el camino físico y el protocolo es el lenguaje que viaja por él porque los buses son las vías de comunicación que transportan datos, direcciones y señales de control entre los componentes. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción c es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación."
  },
  {
    enunciado: "¿Qué protocolo de comunicación moderno permite a los SSD aprovechar la velocidad del bus PCIe?",
    opciones: [
      "NVMe",
      "IDE",
      "SCSI",
      "Ethernet"
    ],
    correcta: 0,
    explicacion: " La correcta es NVMe porque NVMe es un protocolo pensado para SSD que aprovecha PCIe y reduce la latencia frente a interfaces más antiguas. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué interfaces son las más comunes para la salida de vídeo digital en la actualidad?",
    opciones: [
      "VGA y RCA",
      "HDMI y DisplayPort",
      "S-Video y Euroconector",
      "Serial y Paralelo"
    ],
    correcta: 1,
    explicacion: " La correcta es HDMI y DisplayPort porque DisplayPort permite funciones avanzadas como conectar varios monitores en cadena. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Permite conectar varios monitores en cadena (daisy chain) porque DisplayPort permite funciones avanzadas como conectar varios monitores en cadena. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es HDD (Hard Disk Drive) porque un HDD almacena datos en platos magnéticos giratorios, por eso es mecánico. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Qué significa la sigla NAS?",
    opciones: [
      "Network Attached Storage",
      "New Advanced Serial",
      "National Archive System",
      "Node Access Storage"
    ],
    correcta: 0,
    explicacion: " La correcta es Network Attached Storage porque NAS significa almacenamiento conectado a la red y permite compartir almacenamiento por red. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es RAID 1 porque RAID 1 duplica los datos en espejo para aumentar la tolerancia a fallos. La opción a es incorrecta porque corresponde a otro nivel o técnica RAID con un comportamiento distinto. La opción c es incorrecta porque corresponde a otro nivel o técnica RAID con un comportamiento distinto. La opción d es incorrecta porque corresponde a otro nivel o técnica RAID con un comportamiento distinto."
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
    explicacion: " La correcta es Se pierde la información (solo tolera el fallo de un disco) porque RAID 5 tolera el fallo de un disco, pero si fallan dos simultáneamente se pierde la información. La opción a es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué es un Mainframe?",
    opciones: [
      "Un tipo de ordenador portátil para directivos",
      "Una carcasa reforzada para ordenadores de sobremesa",
      "Un software de edición de vídeo profesional",
      "Un ordenador de alto rendimiento para procesar miles de millones de transacciones"
    ],
    correcta: 3,
    explicacion: " La correcta es Un ordenador de alto rendimiento para procesar miles de millones de transacciones porque la RAM influye en compatibilidad, estabilidad y rendimiento según generación, velocidad y latencias. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué significan las siglas CPD?",
    opciones: [
      "Centro de Proceso de Datos",
      "Central de Procesadores Distribuidos",
      "Control de Programación Digital",
      "Conexión de Periféricos Directos"
    ],
    correcta: 0,
    explicacion: " La correcta es Centro de Proceso de Datos porque CPD significa Centro de Proceso de Datos, donde se alojan sistemas y comunicaciones. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque se refiere a otro tipo de memoria con características diferentes. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Alojar servidores y equipos de red de forma organizada porque CPD significa Centro de Proceso de Datos, donde se alojan sistemas y comunicaciones. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es SAI / UPS porque un SAI/UPS mantiene la alimentación durante cortes breves y protege frente a fallos eléctricos. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué técnica lógica permite segmentar redes para mejorar la seguridad?",
    opciones: [
      "RAID 5",
      "Overclocking",
      "P2V",
      "VLAN"
    ],
    correcta: 3,
    explicacion: " La correcta es VLAN porque una VLAN segmenta lógicamente una red para separar tráfico y mejorar seguridad. La opción a es incorrecta porque corresponde a otro nivel o técnica RAID con un comportamiento distinto. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué diferencia a una imagen de respaldo de una simple copia de archivos?",
    opciones: [
      "Es una fotografía exacta de todo el disco, incluyendo SO y aplicaciones",
      "No permite restaurar el sistema operativo",
      "Solo guarda documentos de texto y fotos",
      "Es más lenta de copiar pero ocupa menos espacio"
    ],
    correcta: 0,
    explicacion: " La correcta es Es una fotografía exacta de todo el disco, incluyendo SO y aplicaciones porque una imagen de respaldo copia el estado completo del disco, incluido sistema y aplicaciones. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Physical-to-Virtual porque P2V significa migrar un sistema físico a una máquina virtual. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Mantenimiento predictivo porque HWiNFO permite consultar sensores del equipo como temperaturas, voltajes, frecuencias y otros datos técnicos. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué efecto negativo tiene el polvo acumulado dentro de un ordenador?",
    opciones: [
      "Mejora la conducción eléctrica de los circuitos",
      "Aumenta la velocidad de los ventiladores",
      "No tiene ningún efecto relevante si el PC funciona",
      "Actúa como un aislante térmico y aumenta la temperatura"
    ],
    correcta: 3,
    explicacion: " La correcta es Actúa como un aislante térmico y aumenta la temperatura porque el polvo dificulta la disipación térmica y puede aumentar temperaturas. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
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
    explicacion: " La correcta es Información sobre la salud y posibles fallos del disco porque el mantenimiento predictivo usa indicadores para anticipar posibles fallos. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción d es incorrecta porque no corresponde con la definición, función o componente que se pregunta."
  },
  {
    enunciado: "¿Qué concepto define el uso de recursos informáticos como servidores o almacenamiento a través de Internet?",
    opciones: [
      "Hardware local",
      "Cloud Computing (Computación en la nube)",
      "On-premise",
      "Mainframe individual"
    ],
    correcta: 1,
    explicacion: " La correcta es Cloud Computing (Computación en la nube) porque cloud computing permite consumir recursos informáticos por Internet. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque confunde el modelo de servicio o el tipo de infraestructura. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿De qué se encarga el proveedor en un modelo IaaS?",
    opciones: [
      "De instalar los parches del sistema operativo del cliente",
      "De gestionar los datos y permisos de los usuarios finales",
      "Del hardware, la red física y el almacenamiento",
      "De programar el código de la aplicación del cliente"
    ],
    correcta: 2,
    explicacion: " La correcta es Del hardware, la red física y el almacenamiento porque en IaaS el proveedor gestiona la infraestructura física y el cliente gestiona lo que instala encima. La opción a es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción b es incorrecta porque confunde los tipos de bus o deja fuera una parte necesaria de la comunicación. La opción d es incorrecta porque se refiere a otro tipo de memoria con características diferentes."
  },
  {
    enunciado: "¿Qué modelo de nube permite a los desarrolladores centrarse en el código sin gestionar el sistema operativo?",
    opciones: [
      "IaaS",
      "Hardware as a Service",
      "SaaS",
      "PaaS (Platform as a Service)"
    ],
    correcta: 3,
    explicacion: " La correcta es PaaS (Platform as a Service) porque el sistema operativo coordina el hardware y ofrece servicios a las aplicaciones. La opción a es incorrecta porque confunde el modelo de servicio o el tipo de infraestructura. La opción b es incorrecta porque no corresponde con la definición, función o componente que se pregunta. La opción c es incorrecta porque confunde el modelo de servicio o el tipo de infraestructura."
  },
  {
    enunciado: "¿Qué ventaja ofrece el pago por uso en la nube?",
    opciones: [
      "Permite escalar recursos según la demanda sin inversión inicial en hardware",
      "Permite que el PC del usuario sea más rápido",
      "Hace que el hardware dure para siempre",
      "Evita tener que usar sistemas operativos"
    ],
    correcta: 0,
    explicacion: " La correcta es Permite escalar recursos según la demanda sin inversión inicial en hardware porque cloud computing permite consumir recursos informáticos por Internet. La opción b es incorrecta porque plantea una ventaja que no se deriva realmente del concepto preguntado. La opción c es incorrecta porque plantea una ventaja que no se deriva realmente del concepto preguntado. La opción d es incorrecta porque plantea una ventaja que no se deriva realmente del concepto preguntado."
  },
  {
    enunciado: "¿En qué década fue propuesta la arquitectura Von Neumann por John von Neumann?",
    opciones: [
      "Década de 1930",
      "Década de 1950",
      "Década de 1940",
      "Década de 1960"
    ],
    correcta: 2,
    explicacion: " La correcta es Década de 1940 porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Cuál fue la idea principal de la arquitectura Von Neumann que revolucionó el diseño de los computadores?",
    opciones: [
      "Crear procesadores con múltiples núcleos de procesamiento",
      "Unificar el almacenamiento de instrucciones y datos en una misma memoria principal",
      "Separar físicamente la unidad de control de la aritmética",
      "Eliminar el uso de periféricos de entrada y salida"
    ],
    correcta: 1,
    explicacion: " La correcta es Unificar el almacenamiento de instrucciones y datos en una misma memoria principal porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Cuál de estos es uno de los cuatro pilares fundamentales de la arquitectura Von Neumann?",
    opciones: [
      "Tarjeta Gráfica Dedicada (GPU)",
      "Unidad Central de Procesamiento (CPU)",
      "Sistema de Refrigeración Líquida",
      "Unidad de Alimentación Eléctrica"
    ],
    correcta: 1,
    explicacion: " La correcta es Unidad Central de Procesamiento (CPU) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué componente es considerado el 'cerebro' del ordenador según el documento?",
    opciones: [
      "CPU",
      "Disco Duro",
      "Memoria RAM",
      "Placa Base"
    ],
    correcta: 0,
    explicacion: " La correcta es CPU porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué dos unidades principales componen la CPU?",
    opciones: [
      "Unidad de Almacenamiento y Unidad de Proceso",
      "Unidad de Control (UC) y Unidad Aritmético-Lógica (ALU)",
      "Unidad de Entrada y Unidad de Salida",
      "Unidad de Memoria y Unidad de Vídeo"
    ],
    correcta: 1,
    explicacion: " La correcta es Unidad de Control (UC) y Unidad Aritmético-Lógica (ALU) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la función de la Unidad de Control (UC)?",
    opciones: [
      "Transmitir imágenes al monitor",
      "Almacenar datos de forma permanente",
      "Realizar operaciones matemáticas y lógicas",
      "Interpretar instrucciones y coordinar los componentes del sistema"
    ],
    correcta: 3,
    explicacion: " La correcta es Interpretar instrucciones y coordinar los componentes del sistema porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué tipo de operaciones realiza la Unidad Aritmético-Lógica (ALU)?",
    opciones: [
      "Interpretación de lenguajes de programación",
      "Control de la velocidad del ventilador",
      "Gestión de archivos en el disco duro",
      "Cálculos matemáticos y comparaciones lógicas"
    ],
    correcta: 3,
    explicacion: " La correcta es Cálculos matemáticos y comparaciones lógicas porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué característica define a la memoria RAM?",
    opciones: [
      "Es de solo lectura y no se puede modificar",
      "Es más lenta que un disco duro mecánico",
      "Es el lugar donde se guardan los archivos permanentemente",
      "Es volátil (pierde la información al apagar el equipo)"
    ],
    correcta: 3,
    explicacion: " La correcta es Es volátil (pierde la información al apagar el equipo) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Para qué sirven los periféricos de Entrada (E)?",
    opciones: [
      "Para introducir datos desde el exterior al ordenador",
      "Para conectar la placa base con la fuente de alimentación",
      "Para almacenar copias de seguridad",
      "Para mostrar la información procesada al usuario"
    ],
    correcta: 0,
    explicacion: " La correcta es Para introducir datos desde el exterior al ordenador porque esa es la función principal indicada por el concepto"
  },
  {
    enunciado: "¿Cuál de los siguientes es un ejemplo de periférico de Salida (S)?",
    opciones: [
      "Escáner",
      "Ratón",
      "Monitor",
      "Teclado"
    ],
    correcta: 2,
    explicacion: " La correcta es Monitor porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué camino físico permite la comunicación entre la CPU; la memoria y los periféricos?",
    opciones: [
      "Cables de alimentación",
      "Zócalos",
      "Buses de datos",
      "Chipset"
    ],
    correcta: 2,
    explicacion: " La correcta es Buses de datos porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué elemento del software se encarga de gestionar el hardware y permitir que las aplicaciones funcionen?",
    opciones: [
      "Hojas de cálculo",
      "Sistema Operativo (SO)",
      "Navegadores web",
      "Videojuegos"
    ],
    correcta: 1,
    explicacion: " La correcta es Sistema Operativo (SO) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué son los controladores (drivers)?",
    opciones: [
      "Usuarios que administran la red",
      "Piezas físicas que aceleran el procesador",
      "Programas que permiten al SO comunicarse con un hardware específico",
      "Cables que conectan el monitor a la torre"
    ],
    correcta: 2,
    explicacion: " La correcta es Programas que permiten al SO comunicarse con un hardware específico porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué tipo de software se utiliza para tareas específicas como escribir textos o editar fotos?",
    opciones: [
      "Firmware",
      "BIOS",
      "Software de Aplicación",
      "Software de Sistema"
    ],
    correcta: 2,
    explicacion: " La correcta es Software de Aplicación porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué define al Software Propietario?",
    opciones: [
      "Es propiedad de la comunidad de usuarios",
      "Es gratuito y se puede modificar libremente",
      "No requiere instalación en el sistema operativo",
      "Su código fuente es cerrado y su uso está limitado por una licencia"
    ],
    correcta: 3,
    explicacion: " La correcta es Su código fuente es cerrado y su uso está limitado por una licencia porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál de estas es una de las cuatro libertades fundamentales del Software Libre?",
    opciones: [
      "Libertad de estudiar cómo funciona el programa y adaptarlo",
      "Libertad de ocultar las modificaciones realizadas",
      "Libertad de usar el software solo en un dispositivo",
      "Libertad de vender el código sin permiso del autor"
    ],
    correcta: 0,
    explicacion: " La correcta es Libertad de estudiar cómo funciona el programa y adaptarlo porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "Según el documento; ¿qué significa que un software sea 'Freeware'?",
    opciones: [
      "Es software libre que siempre tiene un coste",
      "Es software propietario gratuito pero restrictivo",
      "Es un sistema operativo de código abierto",
      "Es un programa que no tiene derechos de autor"
    ],
    correcta: 1,
    explicacion: " La correcta es Es software propietario gratuito pero restrictivo porque coincide con la explicación del documento"
  },
  {
    enunciado: "¿Cuál es el esquema básico de funcionamiento de un ordenador mencionado en el resumen?",
    opciones: [
      "Los periféricos de entrada controlan la fuente de alimentación",
      "La CPU ejecuta instrucciones almacenadas en la RAM",
      "La memoria RAM procesa las operaciones lógicas",
      "El disco duro envía datos directamente al monitor"
    ],
    correcta: 1,
    explicacion: " La correcta es La CPU ejecuta instrucciones almacenadas en la RAM porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué componente se describe como el sistema nervioso central y esqueleto del ordenador?",
    opciones: [
      "La placa base",
      "La memoria RAM",
      "El microprocesador",
      "La fuente de alimentación"
    ],
    correcta: 0,
    explicacion: " La correcta es La placa base porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo se conocen los diferentes tamaños estandarizados de las placas base?",
    opciones: [
      "Estándares de bus",
      "Formatos de chasis",
      "Dimensiones de zócalo",
      "Factores de forma"
    ],
    correcta: 3,
    explicacion: " La correcta es Factores de forma porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Cuál es el factor de forma estándar para torres de sobremesa?",
    opciones: [
      "ATX",
      "Mini-ITX",
      "BTX",
      "Micro-ATX"
    ],
    correcta: 0,
    explicacion: " La correcta es ATX porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué característica define al formato Micro-ATX comparado con el ATX?",
    opciones: [
      "Es más pequeño y tiene menos ranuras de expansión",
      "Es exclusivo para ordenadores portátiles",
      "No permite la instalación de tarjetas gráficas",
      "Es más grande y consume más energía"
    ],
    correcta: 0,
    explicacion: " La correcta es Es más pequeño y tiene menos ranuras de expansión porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es el zócalo o socket en una placa base?",
    opciones: [
      "El conector de la fuente de alimentación",
      "La ranura para la memoria RAM",
      "El puerto para conectar el disco duro",
      "El lugar donde se instala la CPU"
    ],
    correcta: 3,
    explicacion: " La correcta es El lugar donde se instala la CPU porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la función del chipset en la placa base?",
    opciones: [
      "Procesar los gráficos del sistema",
      "Almacenar los archivos del usuario",
      "Transformar la corriente alterna en continua",
      "Gestionar el flujo de datos entre los componentes"
    ],
    correcta: 3,
    explicacion: " La correcta es Gestionar el flujo de datos entre los componentes porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué componente permite que la BIOS/UEFI mantenga la configuración de fecha y hora?",
    opciones: [
      "El transistor de arranque",
      "El condensador principal",
      "La pila CMOS",
      "El regulador de voltaje"
    ],
    correcta: 2,
    explicacion: " La correcta es La pila CMOS porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Para qué sirven las ranuras DIMM?",
    opciones: [
      "Para instalar los módulos de memoria RAM",
      "Para insertar los discos SSD M.2",
      "Para conectar el panel frontal de la caja",
      "Para conectar las tarjetas de sonido"
    ],
    correcta: 0,
    explicacion: " La correcta es Para instalar los módulos de memoria RAM porque esa es la función principal indicada por el concepto"
  },
  {
    enunciado: "¿Qué interfaz se utiliza comúnmente para conectar unidades de almacenamiento como HDD y SSD de 2.5 pulgadas?",
    opciones: [
      "SATA",
      "VGA",
      "PCIe",
      "USB 3.0"
    ],
    correcta: 0,
    explicacion: " La correcta es SATA porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo se llama el panel que contiene los conectores externos como USB, Ethernet y audio?",
    opciones: [
      "Bus de datos",
      "Zócalo de expansión",
      "Panel trasero de E/S",
      "Panel de control frontal"
    ],
    correcta: 2,
    explicacion: " La correcta es Panel trasero de E/S porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué significan las siglas BIOS?",
    opciones: [
      "Basic Input/Output System",
      "Basic Instruction Operating Software",
      "Board Internal Output Standard",
      "Binary Integrated Operating System"
    ],
    correcta: 0,
    explicacion: " La correcta es Basic Input/Output System porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es el POST (Power-On Self-Test)?",
    opciones: [
      "Un test de velocidad de la conexión a internet",
      "Un proceso de autodiagnóstico al arrancar el equipo",
      "Un programa para actualizar los drivers",
      "Una herramienta para desfragmentar el disco"
    ],
    correcta: 1,
    explicacion: " La correcta es Un proceso de autodiagnóstico al arrancar el equipo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el sucesor moderno de la BIOS que ofrece una interfaz gráfica y soporte para discos grandes?",
    opciones: [
      "CMOS",
      "SATA",
      "RAID",
      "UEFI"
    ],
    correcta: 3,
    explicacion: " La correcta es UEFI porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué sucede si la pila de la placa base se agota?",
    opciones: [
      "El procesador se quema por sobrecalentamiento",
      "Se pierde la configuración de la BIOS y la fecha/hora",
      "El sistema operativo se borra del disco duro",
      "La pantalla deja de mostrar colores"
    ],
    correcta: 1,
    explicacion: " La correcta es Se pierde la configuración de la BIOS y la fecha/hora porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es una tarea común que realiza un técnico en la BIOS/UEFI?",
    opciones: [
      "Formatear una unidad de red",
      "Instalar un nuevo navegador web",
      "Cambiar el orden de arranque (boot order)",
      "Crear carpetas de usuario"
    ],
    correcta: 2,
    explicacion: " La correcta es Cambiar el orden de arranque (boot order) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué opción suele utilizarse para recuperar la configuración de fábrica de la BIOS?",
    opciones: [
      "Reset Operating System",
      "Delete System Configuration",
      "Load Optimized Defaults",
      "Format BIOS Memory"
    ],
    correcta: 2,
    explicacion: " La correcta es Load Optimized Defaults porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué herramienta de virtualización se menciona para practicar configuraciones de firmware sin riesgo?",
    opciones: [
      "HWiNFO",
      "CrystalDiskInfo",
      "VirtualBox",
      "Cinebench"
    ],
    correcta: 2,
    explicacion: " La correcta es VirtualBox porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué función cumple el VRM (Voltage Regulator Module) en la placa base?",
    opciones: [
      "Almacenar temporalmente los datos de las aplicaciones",
      "Convertir la energía de la fuente al voltaje exacto que necesita la CPU",
      "Gestionar la velocidad de los ventiladores de la caja",
      "Controlar el volumen de los altavoces"
    ],
    correcta: 1,
    explicacion: " La correcta es Convertir la energía de la fuente al voltaje exacto que necesita la CPU porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el mito falso sobre la monitorización del hardware mencionado en el documento?",
    opciones: [
      "Que es necesario tocar los componentes para saber si están calientes",
      "Que solo los expertos pueden entender las temperaturas",
      "Que la BIOS no muestra información de los voltajes",
      "Que las placas modernas se apagan antes de sufrir un daño irreversible"
    ],
    correcta: 1,
    explicacion: " La correcta es Que solo los expertos pueden entender las temperaturas porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué permite hacer el Secure Boot en sistemas UEFI?",
    opciones: [
      "Aumentar la velocidad del procesador mediante overclocking",
      "Evitar que se conecten periféricos USB desconocidos",
      "Asegurar que solo se cargue software de confianza al arrancar",
      "Cifrar los archivos personales del usuario"
    ],
    correcta: 2,
    explicacion: " La correcta es Asegurar que solo se cargue software de confianza al arrancar porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el componente considerado el cerebro electrónico que ejecuta las instrucciones y procesa los datos?",
    opciones: [
      "La memoria RAM",
      "La placa base",
      "La Unidad Central de Procesamiento (CPU)",
      "La tarjeta gráfica"
    ],
    correcta: 2,
    explicacion: " La correcta es La Unidad Central de Procesamiento (CPU) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Cómo se denomina el ciclo constante de tres pasos que realiza la CPU?",
    opciones: [
      "Ciclo de instrucción (fetch-decode-execute)",
      "Ciclo de almacenamiento (save-load-delete)",
      "Ciclo de energía (on-off-standby)",
      "Ciclo de red (send-receive-wait)"
    ],
    correcta: 0,
    explicacion: " La correcta es Ciclo de instrucción (fetch-decode-execute) porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿En qué unidad de medida se expresa la velocidad a la que la CPU repite su ciclo de trabajo?",
    opciones: [
      "Bits por segundo (bps)",
      "Gigabytes (GB)",
      "Vatios (W)",
      "Hercios (Hz)"
    ],
    correcta: 3,
    explicacion: " La correcta es Hercios (Hz) porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Cuál fue el primer microprocesador comercial de la historia?",
    opciones: [
      "Motorola 68000",
      "Intel 4004",
      "AMD Ryzen 5",
      "Intel Core i7"
    ],
    correcta: 1,
    explicacion: " La correcta es Intel 4004 porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué es la litografía en el contexto de la fabricación de CPUs?",
    opciones: [
      "El grabado de la marca en el disipador",
      "El proceso de grabado de transistores en una oblea de silicio",
      "La impresión del manual de usuario",
      "El diseño de la caja del procesador"
    ],
    correcta: 1,
    explicacion: " La correcta es El proceso de grabado de transistores en una oblea de silicio porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué postula la Ley de Moore?",
    opciones: [
      "Que el número de transistores en un chip se duplica aproximadamente cada dos años",
      "Que los ordenadores serán obsoletos en una década",
      "Que el precio de los procesadores baja a la mitad cada año",
      "Que la velocidad de la RAM siempre supera a la de la CPU"
    ],
    correcta: 0,
    explicacion: " La correcta es Que el número de transistores en un chip se duplica aproximadamente cada dos años porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué ventaja principal ofrece reducir el tamaño de los transistores (nanómetros)?",
    opciones: [
      "Permite meter más transistores en el mismo espacio y mejorar la eficiencia energética",
      "Aumenta el consumo de electricidad y el calor generado",
      "Permite que el procesador sea más barato de fabricar aunque sea más lento",
      "Hace que el procesador sea físicamente más grande"
    ],
    correcta: 0,
    explicacion: " La correcta es Permite meter más transistores en el mismo espacio y mejorar la eficiencia energética porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué función cumple la memoria caché dentro de la CPU?",
    opciones: [
      "Almacenar datos que el procesador necesita con frecuencia para evitar ir a la RAM",
      "Gestionar la conexión a internet de alta velocidad",
      "Controlar la temperatura de los ventiladores",
      "Guardar los archivos del sistema operativo permanentemente"
    ],
    correcta: 0,
    explicacion: " La correcta es Almacenar datos que el procesador necesita con frecuencia para evitar ir a la RAM porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el nivel de memoria caché más rápido y cercano al núcleo de la CPU?",
    opciones: [
      "Caché L2",
      "Caché L3",
      "Caché L1",
      "Caché L4"
    ],
    correcta: 2,
    explicacion: " La correcta es Caché L1 porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué diferencia a la memoria caché L3 de la L1?",
    opciones: [
      "Solo se activa cuando el ordenador está en reposo",
      "Es más rápida y pequeña",
      "Es más lenta pero tiene mucha más capacidad y suele ser compartida por todos los núcleos",
      "Está ubicada fuera de la cápsula del procesador"
    ],
    correcta: 2,
    explicacion: " La correcta es Es más lenta pero tiene mucha más capacidad y suele ser compartida por todos los núcleos porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es el Overclocking?",
    opciones: [
      "Aumentar la velocidad de reloj del componente por encima de las especificaciones del fabricante",
      "Reducir el consumo de energía para que el PC sea silencioso",
      "Instalar más memoria RAM de la necesaria",
      "Cambiar la pasta térmica del procesador cada seis meses"
    ],
    correcta: 0,
    explicacion: " La correcta es Aumentar la velocidad de reloj del componente por encima de las especificaciones del fabricante porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el principal riesgo asociado al overclocking?",
    opciones: [
      "Que el monitor muestre los colores invertidos",
      "El aumento excesivo de la temperatura y la posible inestabilidad del sistema",
      "Que el sistema operativo deje de ser legal",
      "Que la conexión Wi-Fi pierda velocidad"
    ],
    correcta: 1,
    explicacion: " La correcta es El aumento excesivo de la temperatura y la posible inestabilidad del sistema porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué significa que un procesador sea 'multicore' o multinúcleo?",
    opciones: [
      "Que tiene varios cerebros independientes dentro del mismo chip físicos para trabajar en paralelo",
      "Que necesita varias placas base para funcionar",
      "Que solo puede ejecutar una tarea a la vez pero muy rápido",
      "Que utiliza diferentes tipos de electricidad para cada núcleo"
    ],
    correcta: 0,
    explicacion: " La correcta es Que tiene varios cerebros independientes dentro del mismo chip físicos para trabajar en paralelo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es el benchmarking?",
    opciones: [
      "El diseño de la arquitectura interna de los transistores",
      "El proceso de medir el rendimiento del hardware de forma objetiva mediante pruebas estandarizadas",
      "La comparación de precios entre diferentes tiendas de informática",
      "La limpieza física de los ventiladores del procesador"
    ],
    correcta: 1,
    explicacion: " La correcta es El proceso de medir el rendimiento del hardware de forma objetiva mediante pruebas estandarizadas porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué diferencia a un benchmark sintético de uno de mundo real?",
    opciones: [
      "El sintético es manual y el de mundo real es automático",
      "El sintético mide el rendimiento teórico y el de mundo real mide el rendimiento en aplicaciones prácticas",
      "El sintético mide el peso del componente y el de mundo real su velocidad",
      "El sintético solo sirve para portátiles y el de mundo real para sobremesa"
    ],
    correcta: 1,
    explicacion: " La correcta es El sintético mide el rendimiento teórico y el de mundo real mide el rendimiento en aplicaciones prácticas porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Por qué no se pueden comparar puntuaciones de diferentes programas de benchmark (ej. Geekbench vs Cinebench)?",
    opciones: [
      "Porque cada programa utiliza sus propios algoritmos y sistemas de puntuación",
      "Porque las empresas fabricantes prohíben legalmente la comparación",
      "Porque uno mide en pulgadas y el otro en centímetros",
      "Porque los programas solo funcionan en sistemas operativos distintos"
    ],
    correcta: 0,
    explicacion: " La correcta es Porque cada programa utiliza sus propios algoritmos y sistemas de puntuación porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué herramienta se menciona como útil para monitorizar información técnica del procesador en tiempo real?",
    opciones: [
      "VLC Player",
      "Microsoft Word",
      "HWiNFO",
      "Google Chrome"
    ],
    correcta: 2,
    explicacion: " La correcta es HWiNFO porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿En qué paso del ciclo de instrucción la CPU interpreta la instrucción para saber qué operación realizar?",
    opciones: [
      "Ejecutar (Execute)",
      "Decodificar (Decode)",
      "Almacenar (Store)",
      "Recoger (Fetch)"
    ],
    correcta: 1,
    explicacion: " La correcta es Decodificar (Decode) porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Qué sucede durante la fase de 'Execute' del ciclo de la CPU?",
    opciones: [
      "La CPU borra la memoria caché por seguridad",
      "La CPU busca la instrucción en la RAM",
      "La CPU ejecuta la operación interpretada",
      "La CPU se apaga para ahorrar energía"
    ],
    correcta: 2,
    explicacion: " La correcta es La CPU ejecuta la operación interpretada porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la mejor forma de evaluar el rendimiento de un componente según el documento?",
    opciones: [
      "Combinando benchmarks sintéticos con pruebas en las aplicaciones reales que el usuario va a utilizar",
      "Mirando únicamente el precio del componente en el mercado",
      "Contando el número de ventiladores que tiene la caja",
      "Preguntando en foros de internet sin realizar pruebas propias"
    ],
    correcta: 0,
    explicacion: " La correcta es Combinando benchmarks sintéticos con pruebas en las aplicaciones reales que el usuario va a utilizar porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué significa la sigla ESD en el contexto del montaje de equipos?",
    opciones: [
      "Entorno de sistema digital",
      "Energía de salida directa",
      "Estándar de seguridad de datos",
      "Descarga electrostática"
    ],
    correcta: 3,
    explicacion: " La correcta es Descarga electrostática porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal herramienta para prevenir daños por ESD al manipular componentes?",
    opciones: [
      "Destornillador imantado",
      "Pulsera antiestática conectada a masa",
      "Guantes de látex desechables",
      "Gafas de seguridad"
    ],
    correcta: 1,
    explicacion: " La correcta es Pulsera antiestática conectada a masa porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué superficie de trabajo se debe evitar para prevenir la acumulación de carga estática?",
    opciones: [
      "Esterillas antiestáticas",
      "Mesas rígidas de madera",
      "Mesas de metal conectadas a tierra",
      "Alfombras y superficies sintéticas"
    ],
    correcta: 3,
    explicacion: " La correcta es Alfombras y superficies sintéticas porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el tipo de destornillador recomendado para la mayoría de los tornillos de un PC?",
    opciones: [
      "Torx T10",
      "Plano de precisión",
      "Allen de 3mm",
      "Phillips #2 con punta imantada"
    ],
    correcta: 3,
    explicacion: " La correcta es Phillips #2 con punta imantada porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué componente se recomienda instalar en la placa base antes de introducirla en la caja?",
    opciones: [
      "La tarjeta gráfica",
      "Los discos duros mecánicos",
      "La CPU, la RAM y el disipador",
      "La fuente de alimentación"
    ],
    correcta: 2,
    explicacion: " La correcta es La CPU, la RAM y el disipador porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo se llaman los postes metálicos que separan la placa base del chasis para evitar cortocircuitos?",
    opciones: [
      "Jumpers",
      "Standoffs (separadores)",
      "Screws (tornillos)",
      "Brackets"
    ],
    correcta: 1,
    explicacion: " La correcta es Standoffs (separadores) porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué pieza debe colocarse en el chasis antes de instalar la placa base para proteger los puertos traseros?",
    opciones: [
      "I/O Shield (backplate)",
      "Soporte de GPU",
      "Bahía de expansión",
      "Filtro de polvo"
    ],
    correcta: 0,
    explicacion: " La correcta es I/O Shield (backplate) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué técnica se recomienda para aplicar la pasta térmica sobre el procesador?",
    opciones: [
      "No usar nada si el disipador es nuevo",
      "Cubrir solo los bordes del procesador",
      "Extender una capa gruesa por toda la placa base",
      "Aplicar una pequeña cantidad (grano de arroz) en el centro"
    ],
    correcta: 3,
    explicacion: " La correcta es Aplicar una pequeña cantidad (grano de arroz) en el centro porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué indica la pequeña flecha o triángulo en una esquina de la CPU?",
    opciones: [
      "La dirección del flujo de aire",
      "El voltaje de funcionamiento",
      "La velocidad máxima del procesador",
      "La orientación correcta para su colocación en el zócalo"
    ],
    correcta: 3,
    explicacion: " La correcta es La orientación correcta para su colocación en el zócalo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la función principal de la gestión de cables (cable management)?",
    opciones: [
      "Reducir el consumo eléctrico",
      "Aumentar la potencia de la fuente",
      "Hacer que el PC pese menos",
      "Mejorar la ventilación y facilitar el mantenimiento"
    ],
    correcta: 3,
    explicacion: " La correcta es Mejorar la ventilación y facilitar el mantenimiento porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿A qué conectores de la placa base van unidos los cables del botón de encendido y el reset?",
    opciones: [
      "SATA",
      "Front Panel (Panel frontal)",
      "PCI Express",
      "Ranuras DIMM"
    ],
    correcta: 1,
    explicacion: " La correcta es Front Panel (Panel frontal) porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué se debe hacer si un componente no encaja en su ranura?",
    opciones: [
      "Lijar ligeramente los contactos",
      "Presionar con fuerza hasta que suene un clic",
      "Detenerse, revisar la orientación y no forzar",
      "Usar lubricante para electrónica"
    ],
    correcta: 2,
    explicacion: " La correcta es Detenerse, revisar la orientación y no forzar porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el primer paso de verificación si el PC no enciende tras el montaje?",
    opciones: [
      "Revisar conexiones sueltas y si la fuente está encendida",
      "Llamar al servicio técnico del fabricante",
      "Cambiar el procesador por uno nuevo",
      "Reinstalar el sistema operativo"
    ],
    correcta: 0,
    explicacion: " La correcta es Revisar conexiones sueltas y si la fuente está encendida porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué porcentaje de fallos iniciales se deben, según el documento, a conexiones mal asentadas?",
    opciones: [
      "99%",
      "25%",
      "50%",
      "10%"
    ],
    correcta: 0,
    explicacion: " La correcta es 99% porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué simulador se menciona como herramienta pedagógica reconocida para practicar el montaje?",
    opciones: [
      "The Sims",
      "PC Building Simulator",
      "Minecraft",
      "Flight Simulator"
    ],
    correcta: 1,
    explicacion: " La correcta es PC Building Simulator porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es una ventaja de los simuladores de montaje de PC según el documento?",
    opciones: [
      "Sustituyen totalmente la necesidad de tocar un PC real",
      "Funcionan sin necesidad de sistema operativo",
      "Permiten repetir el proceso sin riesgo de romper hardware real",
      "Son juegos que no tienen utilidad técnica"
    ],
    correcta: 2,
    explicacion: " La correcta es Permiten repetir el proceso sin riesgo de romper hardware real porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué herramienta es útil para organizar los diferentes tipos de tornillos durante el montaje?",
    opciones: [
      "Bandeja magnética",
      "Linterna frontal",
      "Alicates de corte",
      "Espátula plástica"
    ],
    correcta: 0,
    explicacion: " La correcta es Bandeja magnética porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué se debe consultar siempre para identificar el 'pin-out' de los conectores del panel frontal?",
    opciones: [
      "El contrato de garantía",
      "La caja del procesador",
      "El manual de la placa base",
      "La etiqueta de la fuente de alimentación"
    ],
    correcta: 2,
    explicacion: " La correcta es El manual de la placa base porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué fase del proceso de montaje incluye el 'cable management'?",
    opciones: [
      "Verificación",
      "Desmontaje",
      "Preparación",
      "Ensamblaje y conexiones"
    ],
    correcta: 3,
    explicacion: " La correcta es Ensamblaje y conexiones porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué acción refuerza el aprendizaje profesional tras realizar un montaje?",
    opciones: [
      "Borrar los manuales de usuario",
      "Tirar las cajas de los componentes inmediatamente",
      "Documentar el proceso con fotos y anotar incidencias",
      "No volver a abrir el PC nunca más"
    ],
    correcta: 2,
    explicacion: " La correcta es Documentar el proceso con fotos y anotar incidencias porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué componente permite añadir nuevas capacidades o mejorar drásticamente las ya existentes en una placa base?",
    opciones: [
      "Carcasa del PC",
      "Memoria caché L1",
      "Fuente de alimentación",
      "Tarjeta de expansión"
    ],
    correcta: 3,
    explicacion: " La correcta es Tarjeta de expansión porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la ranura de expansión más utilizada actualmente para conectar tarjetas gráficas y de red?",
    opciones: [
      "PCI Express (PCIe)",
      "VGA",
      "ISA",
      "AGP"
    ],
    correcta: 0,
    explicacion: " La correcta es PCI Express (PCIe) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué unidad de procesamiento está diseñada específicamente para procesar imágenes, vídeo y gráficos 3D de forma masiva?",
    opciones: [
      "GPU (Graphics Processing Unit)",
      "UC",
      "PSU",
      "ALU"
    ],
    correcta: 0,
    explicacion: " La correcta es GPU (Graphics Processing Unit) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué ranura PCIe suele utilizarse para las tarjetas gráficas debido a que ofrece el mayor ancho de banda?",
    opciones: [
      "PCIe x2",
      "PCIe x4",
      "PCIe x16",
      "PCIe x1"
    ],
    correcta: 2,
    explicacion: " La correcta es PCIe x16 porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué tecnología permite que un puerto USB-C transmita datos de hasta 40 Gbps, vídeo y energía en un solo cable?",
    opciones: [
      "SATA 3",
      "Thunderbolt",
      "Bluetooth 5.0",
      "Wi-Fi 6"
    ],
    correcta: 1,
    explicacion: " La correcta es Thunderbolt porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre un bus y un protocolo según el documento?",
    opciones: [
      "El bus es inalámbrico y el protocolo es por cable",
      "El bus es el camino físico y el protocolo es el lenguaje que viaja por él",
      "El bus es software y el protocolo es hardware",
      "No hay diferencia, son sinónimos"
    ],
    correcta: 1,
    explicacion: " La correcta es El bus es el camino físico y el protocolo es el lenguaje que viaja por él porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué protocolo de comunicación moderno permite a los SSD aprovechar la velocidad del bus PCIe?",
    opciones: [
      "IDE",
      "SCSI",
      "Ethernet",
      "NVMe"
    ],
    correcta: 3,
    explicacion: " La correcta es NVMe porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué conector se ha convertido en el estándar universal para casi todos los periféricos modernos como teclados y ratones?",
    opciones: [
      "DVI",
      "VGA",
      "USB",
      "Serial Port"
    ],
    correcta: 2,
    explicacion: " La correcta es USB porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué interfaces son las más comunes para la salida de vídeo digital en la actualidad?",
    opciones: [
      "Serial y Paralelo",
      "VGA y RCA",
      "HDMI y DisplayPort",
      "S-Video y Euroconector"
    ],
    correcta: 2,
    explicacion: " La correcta es HDMI y DisplayPort porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es un requisito para que un puerto USB-C sea realmente compatible con Thunderbolt?",
    opciones: [
      "Que el cable sea de color rojo",
      "Que la placa base sea de formato Mini-ITX",
      "Que el monitor sea de marca Intel",
      "Certificación del fabricante y controladores específicos"
    ],
    correcta: 3,
    explicacion: " La correcta es Certificación del fabricante y controladores específicos porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué símbolo permite identificar visualmente un puerto Thunderbolt en un equipo?",
    opciones: [
      "Un círculo con una flecha",
      "Una letra 'T' azul",
      "Un icono de una batería",
      "Un logo de un rayo"
    ],
    correcta: 3,
    explicacion: " La correcta es Un logo de un rayo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Para qué tipo de trabajo es imprescindible una GPU dedicada según el texto?",
    opciones: [
      "Navegación web simple",
      "Uso básico de aplicaciones de oficina",
      "Lectura de correos electrónicos",
      "Edición de vídeo avanzada e Inteligencia Artificial"
    ],
    correcta: 3,
    explicacion: " La correcta es Edición de vídeo avanzada e Inteligencia Artificial porque esa es la función principal indicada por el concepto"
  },
  {
    enunciado: "¿Qué ventaja ofrece el puerto DisplayPort sobre otros conectores de vídeo?",
    opciones: [
      "Es el único que transmite audio",
      "Solo funciona con tarjetas de sonido",
      "Permite conectar varios monitores en cadena (daisy chain)",
      "Es un conector analógico más resistente"
    ],
    correcta: 2,
    explicacion: " La correcta es Permite conectar varios monitores en cadena (daisy chain) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué puerto se utiliza para la conexión de red por cable?",
    opciones: [
      "Toslink",
      "Jack 3.5mm",
      "Ethernet (RJ45)",
      "PS/2"
    ],
    correcta: 2,
    explicacion: " La correcta es Ethernet (RJ45) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Por qué las funciones integradas de audio de la placa base pueden quedarse cortas para un profesional?",
    opciones: [
      "Porque consumen demasiada memoria RAM",
      "Porque no permiten reproducir música en MP3",
      "Porque requieren una BIOS muy antigua",
      "Por falta de calidad en la señal y conectores específicos"
    ],
    correcta: 3,
    explicacion: " La correcta es Por falta de calidad en la señal y conectores específicos porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué significa que Thunderbolt permita 'cadena de monitores'?",
    opciones: [
      "Que los monitores deben ser de la misma marca obligatoriamente",
      "Que se pueden conectar varios monitores uno tras otro usando un solo puerto del PC",
      "Que el PC necesita una licencia especial para cada pantalla",
      "Que las pantallas solo funcionan en blanco y negro"
    ],
    correcta: 1,
    explicacion: " La correcta es Que se pueden conectar varios monitores uno tras otro usando un solo puerto del PC porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es una característica del conector físico USB-C mencionada en el documento?",
    opciones: [
      "Es reversible, no importa de qué lado se conecte",
      "Solo tiene 4 pines de conexión",
      "Es el doble de grande que el USB-A",
      "Solo transmite energía, nunca datos"
    ],
    correcta: 0,
    explicacion: " La correcta es Es reversible, no importa de qué lado se conecte porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué tipo de tarjeta de expansión se instalaría para añadir Wi-Fi a un equipo que no lo tiene?",
    opciones: [
      "Tarjeta de red inalámbrica",
      "Tarjeta de sonido",
      "Tarjeta controladora RAID",
      "Tarjeta sintonizadora de TV"
    ],
    correcta: 0,
    explicacion: " La correcta es Tarjeta de red inalámbrica porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué conclusión ofrece el documento sobre la relación entre USB-C y Thunderbolt?",
    opciones: [
      "Thunderbolt es una tecnología antigua ya superada por USB-C",
      "USB-C es más rápido que Thunderbolt en todos los casos",
      "Todo puerto Thunderbolt usa USB-C, pero no todo USB-C es Thunderbolt",
      "Son exactamente lo mismo con nombres diferentes"
    ],
    correcta: 2,
    explicacion: " La correcta es Todo puerto Thunderbolt usa USB-C, pero no todo USB-C es Thunderbolt porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué tipo de dispositivo de almacenamiento es mecánico y utiliza platos giratorios?",
    opciones: [
      "Memoria RAM",
      "Tarjeta SD",
      "HDD (Hard Disk Drive)",
      "SSD (Solid-State Drive)"
    ],
    correcta: 2,
    explicacion: " La correcta es HDD (Hard Disk Drive) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal limitación de los discos duros mecánicos (HDD) frente a los SSD?",
    opciones: [
      "La velocidad y los tiempos de acceso lentos",
      "Su precio por gigabyte es muy alto",
      "Tienen una capacidad de almacenamiento muy baja",
      "Son inmunes a los golpes físicos"
    ],
    correcta: 0,
    explicacion: " La correcta es La velocidad y los tiempos de acceso lentos porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿En qué tecnología se basan las unidades SSD?",
    opciones: [
      "Láser óptico",
      "Platos magnéticos",
      "Memoria flash NAND",
      "Cinta de silicio"
    ],
    correcta: 2,
    explicacion: " La correcta es Memoria flash NAND porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Qué protocolo permite a los SSD modernos eliminar cuellos de botella al usar el bus PCIe?",
    opciones: [
      "SCSI",
      "NVMe",
      "SATA 3",
      "IDE"
    ],
    correcta: 1,
    explicacion: " La correcta es NVMe porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué nivel de RAID se conoce como 'stripping' y busca el máximo rendimiento sin ofrecer seguridad?",
    opciones: [
      "RAID 10",
      "RAID 1",
      "RAID 5",
      "RAID 0"
    ],
    correcta: 3,
    explicacion: " La correcta es RAID 0 porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué sucede en un sistema RAID 0 si uno de los discos falla?",
    opciones: [
      "Solo se pierde la mitad de la información",
      "Los datos se recuperan automáticamente del espejo",
      "Se pierden todos los datos de forma irreversible",
      "El sistema sigue funcionando sin problemas"
    ],
    correcta: 2,
    explicacion: " La correcta es Se pierden todos los datos de forma irreversible porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué nivel de RAID realiza un 'espejo' (mirroring) de los datos en tiempo real?",
    opciones: [
      "RAID 5",
      "RAID 1",
      "RAID 0",
      "RAID JBOD"
    ],
    correcta: 1,
    explicacion: " La correcta es RAID 1 porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal ventaja del RAID 1?",
    opciones: [
      "Aumento extremo de la velocidad de escritura",
      "Doblado de la capacidad de almacenamiento total",
      "Tolerancia a fallos (si un disco muere, los datos siguen disponibles)",
      "No requiere hardware específico"
    ],
    correcta: 2,
    explicacion: " La correcta es Tolerancia a fallos (si un disco muere, los datos siguen disponibles) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué nivel de RAID equilibra capacidad y seguridad mediante el uso de paridad distribuida?",
    opciones: [
      "RAID 0",
      "RAID 5",
      "RAID 2",
      "RAID 1"
    ],
    correcta: 1,
    explicacion: " La correcta es RAID 5 porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuántos discos como mínimo se requieren para configurar un RAID 5?",
    opciones: [
      "1 disco",
      "2 discos",
      "4 discos",
      "3 discos"
    ],
    correcta: 3,
    explicacion: " La correcta es 3 discos porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué significa la sigla NAS?",
    opciones: [
      "National Archive System",
      "Node Access Storage",
      "Network Attached Storage",
      "New Advanced Serial"
    ],
    correcta: 2,
    explicacion: " La correcta es Network Attached Storage porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es una de las funciones principales de un servidor NAS?",
    opciones: [
      "Almacenamiento centralizado y copias de seguridad en red",
      "Aumentar la potencia gráfica de los PCs",
      "Sustituir la memoria RAM del sistema",
      "Controlar la temperatura de la placa base"
    ],
    correcta: 0,
    explicacion: " La correcta es Almacenamiento centralizado y copias de seguridad en red porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Por qué el documento afirma que 'RAID no es una copia de seguridad'?",
    opciones: [
      "Porque el RAID solo funciona con archivos pequeños",
      "Porque los discos RAID duran menos tiempo",
      "Porque no protege contra borrados accidentales o virus",
      "Porque el RAID es una tecnología de software libre"
    ],
    correcta: 2,
    explicacion: " La correcta es Porque no protege contra borrados accidentales o virus porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿En qué consiste la regla 3-2-1 para copias de seguridad?",
    opciones: [
      "3 copias, 2 soportes distintos y 1 fuera de la ubicación",
      "3 discos, 2 sistemas RAID y 1 servidor NAS",
      "3 meses, 2 semanas y 1 día de rotación",
      "3 usuarios, 2 contraseñas y 1 administrador"
    ],
    correcta: 0,
    explicacion: " La correcta es 3 copias, 2 soportes distintos y 1 fuera de la ubicación porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Qué es el formato M.2?",
    opciones: [
      "Un tipo de cable para conectar impresoras",
      "Un factor de forma compacto para SSDs que parece una tableta de chicle",
      "Un software de gestión de particiones",
      "Un nivel de RAID empresarial"
    ],
    correcta: 1,
    explicacion: " La correcta es Un factor de forma compacto para SSDs que parece una tableta de chicle porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo se gestionan habitualmente los NAS modernos?",
    opciones: [
      "Solo se pueden configurar físicamente con botones",
      "Mediante códigos de consola complejos",
      "Requieren un teclado conectado directamente al NAS",
      "A través de una interfaz web intuitiva similar a un smartphone"
    ],
    correcta: 3,
    explicacion: " La correcta es A través de una interfaz web intuitiva similar a un smartphone porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué característica física hace a los SSD más resistentes que los HDD?",
    opciones: [
      "Utilizan imanes de neodimio",
      "Su carcasa es siempre de acero reforzado",
      "No tienen partes móviles",
      "Funcionan sumergidos en líquido refrigerante"
    ],
    correcta: 2,
    explicacion: " La correcta es No tienen partes móviles porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué ocurre en un RAID 5 si fallan dos discos simultáneamente?",
    opciones: [
      "Se pierde la información (solo tolera el fallo de un disco)",
      "La paridad permite reconstruirlos sin problemas",
      "El sistema sigue funcionando en modo lento",
      "Los datos se mueven automáticamente a la nube"
    ],
    correcta: 0,
    explicacion: " La correcta es Se pierde la información (solo tolera el fallo de un disco) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el uso recomendado para los discos HDD hoy en día según su precio por GB?",
    opciones: [
      "Instalar el sistema operativo Windows",
      "Uso como memoria caché del procesador",
      "Almacenamiento masivo de datos que no requieren alta velocidad",
      "Ejecutar videojuegos de última generación"
    ],
    correcta: 2,
    explicacion: " La correcta es Almacenamiento masivo de datos que no requieren alta velocidad porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Cuál es el objetivo principal del diseño de un PC (Personal Computer)?",
    opciones: [
      "Funcionar 24/7 sin necesidad de apagarse nunca",
      "Ejecutar aplicaciones personales para un único usuario",
      "Gestionar bases de datos de miles de usuarios simultáneos",
      "Ofrecer redundancia total en todos sus componentes"
    ],
    correcta: 1,
    explicacion: " La correcta es Ejecutar aplicaciones personales para un único usuario porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué característica de fiabilidad suele faltar en un PC estándar frente a un servidor?",
    opciones: [
      "Componentes redundantes y memoria ECC",
      "Uso de sistemas operativos de 64 bits",
      "Capacidad para conectarse a internet",
      "Compatibilidad con ratón y teclado"
    ],
    correcta: 0,
    explicacion: " La correcta es Componentes redundantes y memoria ECC porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué función cumple un servidor departamental en una oficina?",
    opciones: [
      "Funcionar exclusivamente como consola de videojuegos",
      "Actuar como motor para servicios compartidos como archivos o impresión",
      "Sustituir a los puestos de trabajo de todos los empleados",
      "Minar criptomonedas para la empresa"
    ],
    correcta: 1,
    explicacion: " La correcta es Actuar como motor para servicios compartidos como archivos o impresión porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es un Mainframe?",
    opciones: [
      "Un software de edición de vídeo profesional",
      "Un ordenador de alto rendimiento para procesar miles de millones de transacciones",
      "Una carcasa reforzada para ordenadores de sobremesa",
      "Un tipo de ordenador portátil para directivos"
    ],
    correcta: 1,
    explicacion: " La correcta es Un ordenador de alto rendimiento para procesar miles de millones de transacciones porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué significan las siglas CPD?",
    opciones: [
      "Conexión de Periféricos Directos",
      "Centro de Proceso de Datos",
      "Control de Programación Digital",
      "Central de Procesadores Distribuidos"
    ],
    correcta: 1,
    explicacion: " La correcta es Centro de Proceso de Datos porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo se mide la altura de los equipos en un rack de 19 pulgadas?",
    opciones: [
      "En kilogramos de peso",
      "En centímetros de profundidad",
      "En vatios de consumo",
      "En unidades U (1,75 pulgadas)"
    ],
    correcta: 3,
    explicacion: " La correcta es En unidades U (1,75 pulgadas) porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Cuál es la función de un rack en un CPD?",
    opciones: [
      "Enfriar directamente el procesador con agua",
      "Generar electricidad en caso de apagón",
      "Almacenar las copias de seguridad en cinta",
      "Alojar servidores y equipos de red de forma organizada"
    ],
    correcta: 3,
    explicacion: " La correcta es Alojar servidores y equipos de red de forma organizada porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿En qué consiste la técnica de refrigeración de pasillos fríos y calientes?",
    opciones: [
      "En orientar los racks para optimizar el flujo de aire térmico",
      "En usar aire acondicionado solo durante la noche",
      "En sumergir los servidores en nitrógeno líquido",
      "En apagar los equipos que más calor generan"
    ],
    correcta: 0,
    explicacion: " La correcta es En orientar los racks para optimizar el flujo de aire térmico porque corresponde al dato concreto solicitado en el enunciado"
  },
  {
    enunciado: "¿Qué componente es esencial para garantizar la energía ininterrumpida ante un fallo eléctrico corto?",
    opciones: [
      "SAI / UPS",
      "Tarjeta de red",
      "Monitor LED",
      "Disco duro SSD"
    ],
    correcta: 0,
    explicacion: " La correcta es SAI / UPS porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué dispositivo se utiliza en un CPD para cortes de luz de larga duración?",
    opciones: [
      "Cargadores solares portátiles",
      "Transformadores de alta tensión",
      "Generadores diésel",
      "Pilas de litio tipo botón"
    ],
    correcta: 2,
    explicacion: " La correcta es Generadores diésel porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué analogía usa el documento para explicar la seguridad física y lógica?",
    opciones: [
      "Un piso vacío y sus muebles",
      "Una biblioteca pública",
      "Un doble candado",
      "Un coche y su gasolina"
    ],
    correcta: 2,
    explicacion: " La correcta es Un doble candado porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es un ejemplo de medida de seguridad física en un CPD?",
    opciones: [
      "Actualización del antivirus",
      "Accesos biométricos y tarjetas",
      "Cifrado de la base de datos",
      "Uso de contraseñas complejas"
    ],
    correcta: 1,
    explicacion: " La correcta es Accesos biométricos y tarjetas porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Por qué un firewall no es suficiente para la seguridad total de un CPD?",
    opciones: [
      "Porque no evita el robo físico de un disco duro",
      "Porque es un componente que se calienta demasiado",
      "Porque ralentiza la conexión a internet",
      "Porque solo funciona con software libre"
    ],
    correcta: 0,
    explicacion: " La correcta es Porque no evita el robo físico de un disco duro porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué técnica lógica permite segmentar redes para mejorar la seguridad?",
    opciones: [
      "RAID 5",
      "P2V",
      "VLAN",
      "Overclocking"
    ],
    correcta: 2,
    explicacion: " La correcta es VLAN porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el ancho estándar de un rack empresarial mencionado en el texto?",
    opciones: [
      "24 pulgadas",
      "50 centímetros",
      "19 pulgadas",
      "10 metros"
    ],
    correcta: 2,
    explicacion: " La correcta es 19 pulgadas porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué tipo de memoria, que corrige errores de datos, es típica de servidores pero no de PCs?",
    opciones: [
      "Memoria Flash",
      "Memoria ECC",
      "Memoria Virtual",
      "Memoria Caché L1"
    ],
    correcta: 1,
    explicacion: " La correcta es Memoria ECC porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es un sistema IDS/IPS mencionado en el apartado de seguridad?",
    opciones: [
      "Sistemas de refrigeración por aire",
      "Sistemas de gestión de bases de datos",
      "Sistemas para detectar y prevenir intrusiones",
      "Sistemas de alimentación ininterrumpida"
    ],
    correcta: 2,
    explicacion: " La correcta es Sistemas para detectar y prevenir intrusiones porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué sucede con la seguridad si se tiene seguridad lógica pero no física?",
    opciones: [
      "Es como cerrar la puerta de casa pero dejar las ventanas abiertas",
      "El sistema funciona un 50% más rápido",
      "No ocurre nada, la seguridad física no es necesaria",
      "El proveedor de nube asume toda la responsabilidad"
    ],
    correcta: 0,
    explicacion: " La correcta es Es como cerrar la puerta de casa pero dejar las ventanas abiertas porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es una característica de la seguridad en un CPD profesional?",
    opciones: [
      "Solo debe centrarse en los cables de red",
      "Es responsabilidad exclusiva del fabricante del hardware",
      "Se basa exclusivamente en guardias de seguridad",
      "Debe funcionar en capas: física, lógica y organizativa"
    ],
    correcta: 3,
    explicacion: " La correcta es Debe funcionar en capas: física, lógica y organizativa porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué diferencia a una imagen de respaldo de una simple copia de archivos?",
    opciones: [
      "Es una fotografía exacta de todo el disco, incluyendo SO y aplicaciones",
      "Solo guarda documentos de texto y fotos",
      "Es más lenta de copiar pero ocupa menos espacio",
      "No permite restaurar el sistema operativo"
    ],
    correcta: 0,
    explicacion: " La correcta es Es una fotografía exacta de todo el disco, incluyendo SO y aplicaciones porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué permite el proceso conocido como \"bare-metal restore\"?",
    opciones: [
      "Actualizar los drivers sin reiniciar el equipo",
      "Reconstruir un sistema desde cero en un disco vacío",
      "Recuperar solo la tabla de particiones del disco",
      "Limpiar físicamente los componentes metálicos del PC"
    ],
    correcta: 1,
    explicacion: " La correcta es Reconstruir un sistema desde cero en un disco vacío porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué significan las siglas P2V en el contexto de migración de sistemas?",
    opciones: [
      "Power-to-Volume",
      "Physical-to-Virtual",
      "Process-to-Variable",
      "Point-to-Verify"
    ],
    correcta: 1,
    explicacion: " La correcta es Physical-to-Virtual porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal ventaja de realizar una migración P2V?",
    opciones: [
      "Aumenta la velocidad del procesador físico",
      "Elimina la necesidad de usar memoria RAM",
      "Permite usar el PC sin conexión a internet",
      "Permite consolidar servidores físicos antiguos en máquinas virtuales"
    ],
    correcta: 3,
    explicacion: " La correcta es Permite consolidar servidores físicos antiguos en máquinas virtuales porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué tipo de mantenimiento se centra en reparar el equipo una vez que ya ha fallado?",
    opciones: [
      "Mantenimiento correctivo",
      "Mantenimiento preventivo",
      "Mantenimiento evolutivo",
      "Mantenimiento predictivo"
    ],
    correcta: 0,
    explicacion: " La correcta es Mantenimiento correctivo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el objetivo principal del mantenimiento preventivo?",
    opciones: [
      "Aumentar la resolución del monitor",
      "Instalar nuevos videojuegos en el sistema",
      "Reducir la probabilidad de fallos mediante limpieza y actualizaciones",
      "Sustituir piezas rotas por otras nuevas"
    ],
    correcta: 2,
    explicacion: " La correcta es Reducir la probabilidad de fallos mediante limpieza y actualizaciones porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué técnica de mantenimiento utiliza datos como temperaturas y S.M.A.R.T. para anticipar fallos?",
    opciones: [
      "Mantenimiento reactivo",
      "Mantenimiento predictivo",
      "Mantenimiento manual",
      "Mantenimiento de software"
    ],
    correcta: 1,
    explicacion: " La correcta es Mantenimiento predictivo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué efecto negativo tiene el polvo acumulado dentro de un ordenador?",
    opciones: [
      "Aumenta la velocidad de los ventiladores",
      "Mejora la conducción eléctrica de los circuitos",
      "No tiene ningún efecto relevante si el PC funciona",
      "Actúa como un aislante térmico y aumenta la temperatura"
    ],
    correcta: 3,
    explicacion: " La correcta es Actúa como un aislante térmico y aumenta la temperatura porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué herramienta se menciona para monitorizar el estado de salud de los discos duros?",
    opciones: [
      "CrystalDiskInfo",
      "Microsoft Paint",
      "VLC Player",
      "Adobe Reader"
    ],
    correcta: 0,
    explicacion: " La correcta es CrystalDiskInfo porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué acción se recomienda realizar antes de limpiar físicamente el interior de un PC?",
    opciones: [
      "Encender todos los ventiladores al máximo",
      "Apagar el equipo y descargar la electricidad estática",
      "Desinstalar el sistema operativo",
      "Formatear el disco duro principal"
    ],
    correcta: 1,
    explicacion: " La correcta es Apagar el equipo y descargar la electricidad estática porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué indican los valores S.M.A.R.T. de un disco?",
    opciones: [
      "Información sobre la salud y posibles fallos del disco",
      "La velocidad de descarga de archivos de internet",
      "La cantidad de colores que puede mostrar el monitor",
      "El nombre del usuario que creó las carpetas"
    ],
    correcta: 0,
    explicacion: " La correcta es Información sobre la salud y posibles fallos del disco porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué se recomienda registrar para detectar si algo está fallando en el equipo?",
    opciones: [
      "Los valores normales de temperatura y ruido",
      "La lista de archivos borrados de la papelera",
      "El número de veces que se abre el navegador",
      "El color de los cables de la fuente de alimentación"
    ],
    correcta: 0,
    explicacion: " La correcta es Los valores normales de temperatura y ruido porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Para qué se utilizan las aplicaciones de \"test de estrés\" según el documento?",
    opciones: [
      "Para comprobar si el sistema se comporta bien bajo carga",
      "Para limpiar el registro de Windows",
      "Para medir la velocidad de escritura del usuario",
      "Para buscar virus de forma automática"
    ],
    correcta: 0,
    explicacion: " La correcta es Para comprobar si el sistema se comporta bien bajo carga porque esa es la función principal indicada por el concepto"
  },
  {
    enunciado: "¿Qué sucede con el rendimiento debido al calor excesivo por falta de mantenimiento?",
    opciones: [
      "Los archivos se borran automáticamente para liberar espacio",
      "El procesador funciona más rápido para compensar",
      "La memoria RAM aumenta su capacidad de almacenamiento",
      "Se producen pérdidas de rendimiento y envejecimiento prematuro"
    ],
    correcta: 3,
    explicacion: " La correcta es Se producen pérdidas de rendimiento y envejecimiento prematuro porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es una migración V2P?",
    opciones: [
      "Virtual-to-Physical",
      "Volume-to-Process",
      "Variable-to-Power",
      "Verify-to-Point"
    ],
    correcta: 0,
    explicacion: " La correcta es Virtual-to-Physical porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué incluye el mantenimiento preventivo además de la limpieza física?",
    opciones: [
      "Sustitución de todos los cables SATA",
      "Revisión de ventilación y actualizaciones de firmware",
      "Instalación de una nueva tarjeta gráfica",
      "Cambio total de la placa base cada año"
    ],
    correcta: 1,
    explicacion: " La correcta es Revisión de ventilación y actualizaciones de firmware porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Por qué se dice que el mantenimiento predictivo reduce riesgos?",
    opciones: [
      "Porque hace que el seguro del equipo sea más barato",
      "Porque borra las copias de seguridad defectuosas",
      "Porque permite intervenir antes de que ocurra la caída del sistema",
      "Porque impide que el usuario cometa errores humanos"
    ],
    correcta: 2,
    explicacion: " La correcta es Porque permite intervenir antes de que ocurra la caída del sistema porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué se debe revisar después de mover físicamente un equipo de sitio?",
    opciones: [
      "Que el ratón sea del mismo color que el teclado",
      "Que todos los ventiladores giren correctamente",
      "Que el fondo de pantalla no haya cambiado",
      "Que el disco duro esté completamente vacío"
    ],
    correcta: 1,
    explicacion: " La correcta es Que todos los ventiladores giren correctamente porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cómo deben funcionar las herramientas de monitorización para no impactar el rendimiento?",
    opciones: [
      "En segundo plano con un consumo mínimo",
      "Solo cuando el ordenador está apagado",
      "Requiriendo la intervención constante del usuario",
      "Con prioridad alta sobre todas las aplicaciones"
    ],
    correcta: 0,
    explicacion: " La correcta es En segundo plano con un consumo mínimo porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué concepto define el uso de recursos informáticos como servidores o almacenamiento a través de Internet?",
    opciones: [
      "Mainframe individual",
      "Hardware local",
      "On-premise",
      "Cloud Computing (Computación en la nube)"
    ],
    correcta: 3,
    explicacion: " La correcta es Cloud Computing (Computación en la nube) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre el modelo tradicional on-premise y la nube?",
    opciones: [
      "La nube no utiliza servidores físicos en ningún lugar",
      "La nube no requiere conexión a internet para funcionar",
      "El modelo on-premise es siempre más barato para empresas pequeñas",
      "En la nube se alquilan recursos y se paga por uso en lugar de comprar hardware"
    ],
    correcta: 3,
    explicacion: " La correcta es En la nube se alquilan recursos y se paga por uso en lugar de comprar hardware porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué modelo de servicio de nube se compara con alquilar un \"piso vacío\" donde el usuario instala todo?",
    opciones: [
      "SaaS (Software as a Service)",
      "Serverless",
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)"
    ],
    correcta: 2,
    explicacion: " La correcta es IaaS (Infrastructure as a Service) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿De qué se encarga el proveedor en un modelo IaaS?",
    opciones: [
      "De gestionar los datos y permisos de los usuarios finales",
      "De instalar los parches del sistema operativo del cliente",
      "De programar el código de la aplicación del cliente",
      "Del hardware, la red física y el almacenamiento"
    ],
    correcta: 3,
    explicacion: " La correcta es Del hardware, la red física y el almacenamiento porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué modelo de nube permite a los desarrolladores centrarse en el código sin gestionar el sistema operativo?",
    opciones: [
      "SaaS",
      "PaaS (Platform as a Service)",
      "IaaS",
      "Hardware as a Service"
    ],
    correcta: 1,
    explicacion: " La correcta es PaaS (Platform as a Service) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es el modelo de nube donde el usuario simplemente utiliza la aplicación (como Gmail o Dropbox)?",
    opciones: [
      "IaaS",
      "PaaS",
      "Edge Computing",
      "SaaS (Software as a Service)"
    ],
    correcta: 3,
    explicacion: " La correcta es SaaS (Software as a Service) porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué significa el \"Modelo de Responsabilidad Compartida\" en la nube?",
    opciones: [
      "La seguridad es responsabilidad exclusiva del proveedor de internet",
      "El cliente y el proveedor pagan la factura a medias",
      "Ambos deben fabricar los componentes del servidor",
      "El proveedor asegura la infraestructura y el cliente asegura sus datos y configuración"
    ],
    correcta: 3,
    explicacion: " La correcta es El proveedor asegura la infraestructura y el cliente asegura sus datos y configuración porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué tecnología permite ejecutar código en respuesta a eventos sin gestionar servidores?",
    opciones: [
      "BIOS",
      "Mainframe",
      "RAID 5",
      "Serverless"
    ],
    correcta: 3,
    explicacion: " La correcta es Serverless porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es el Edge Computing según el documento?",
    opciones: [
      "Almacenar todos los datos en un único servidor centralizado",
      "Eliminar el uso de cables en los centros de datos",
      "Un tipo de refrigeración para servidores antiguos",
      "Procesar los datos lo más cerca posible de donde se generan para reducir latencia"
    ],
    correcta: 3,
    explicacion: " La correcta es Procesar los datos lo más cerca posible de donde se generan para reducir latencia porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué servicio de nube ofrece capacidades de Inteligencia Artificial listas para usar mediante APIs?",
    opciones: [
      "AIaaS (AI as a Service)",
      "NVMe",
      "P2V",
      "SATA"
    ],
    correcta: 0,
    explicacion: " La correcta es AIaaS (AI as a Service) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Quién es responsable de evitar que un bucket de datos o una base de datos quede expuesta en la nube?",
    opciones: [
      "Nadie, la nube es segura por defecto",
      "El fabricante del procesador",
      "El usuario o cliente",
      "El proveedor de la infraestructura física"
    ],
    correcta: 2,
    explicacion: " La correcta es El usuario o cliente porque es la opción que responde correctamente al enunciado"
  },
  {
    enunciado: "¿Qué práctica se recomienda para evitar sorpresas desagradables en la factura de la nube?",
    opciones: [
      "No actualizar nunca las aplicaciones",
      "Apagar internet durante los fines de semana",
      "Usar solo un tipo de servidor para todo",
      "Monitorización de costes y etiquetado de recursos (tags)"
    ],
    correcta: 3,
    explicacion: " La correcta es Monitorización de costes y etiquetado de recursos (tags) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué herramienta de AWS se menciona para recibir recomendaciones sobre seguridad y costes?",
    opciones: [
      "CrystalDiskInfo",
      "Trusted Advisor",
      "Cinebench",
      "VirtualBox"
    ],
    correcta: 1,
    explicacion: " La correcta es Trusted Advisor porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué es la Infraestructura como Código (IaaC)?",
    opciones: [
      "Programar el firmware de la BIOS",
      "Gestionar y dar de alta recursos de nube mediante archivos de configuración",
      "Un lenguaje para diseñar carcasas de servidores",
      "Escribir el manual de instrucciones del hardware a mano"
    ],
    correcta: 1,
    explicacion: " La correcta es Gestionar y dar de alta recursos de nube mediante archivos de configuración porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué medida de seguridad se recomienda activar siempre para el acceso a cuentas de nube?",
    opciones: [
      "RAID 0",
      "Copia incremental",
      "Overclocking",
      "MFA (Multi-Factor Authentication)"
    ],
    correcta: 3,
    explicacion: " La correcta es MFA (Multi-Factor Authentication) porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Cuál es la principal causa de brechas de datos en la nube según el texto?",
    opciones: [
      "El fallo físico de los discos duros",
      "El error humano",
      "La falta de ventilación en los CPDs",
      "El uso de cables Ethernet antiguos"
    ],
    correcta: 1,
    explicacion: " La correcta es El error humano porque es la opción que se ajusta al concepto preguntado"
  },
  {
    enunciado: "¿Qué ventaja ofrece el pago por uso en la nube?",
    opciones: [
      "Permite que el PC del usuario sea más rápido",
      "Permite escalar recursos según la demanda sin inversión inicial en hardware",
      "Hace que el hardware dure para siempre",
      "Evita tener que usar sistemas operativos"
    ],
    correcta: 1,
    explicacion: " La correcta es Permite escalar recursos según la demanda sin inversión inicial en hardware porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué significa que la nube es \"elástica\"?",
    opciones: [
      "Que los datos se pueden borrar y recuperar infinitamente",
      "Que el contrato se puede cancelar en cualquier segundo",
      "Que los cables de los servidores son flexibles",
      "Que puede aumentar o disminuir recursos automáticamente según la necesidad"
    ],
    correcta: 3,
    explicacion: " La correcta es Que puede aumentar o disminuir recursos automáticamente según la necesidad porque es el concepto que responde directamente a lo que se pregunta"
  },
  {
    enunciado: "¿Qué analogía usa el documento para el modelo SaaS?",
    opciones: [
      "Es como alquilar un piso vacío",
      "Es como comprar un coche y pagar el seguro",
      "Es como construir tu propia casa desde los cimientos",
      "Es como ir a un restaurante: tú solo disfrutas de la comida"
    ],
    correcta: 3,
    explicacion: " La correcta es Es como ir a un restaurante: tú solo disfrutas de la comida porque es el concepto que responde directamente a lo que se pregunta"
  }

];