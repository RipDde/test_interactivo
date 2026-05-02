const preguntasIPE = [
  {
    enunciado: "La siniestralidad laboral es un elemento muy importante a tener en cuenta de cara a proteger la salud de la población. ¿Sabrías decir cuántos accidentes de trabajo hay, aproximadamente, al año?",
    opciones: [
      "Más de un millón.",
      "Medio millón.",
      "Doscientos cincuenta mil.",
      "Trescientos Mil."
    ],
    correcta: 0,
    explicacion: " La correcta es Más de un millón. porque la siniestralidad laboral anual se maneja en clase como una cifra superior al millón de accidentes, por eso es la referencia aproximada correcta."
  },
  {
    enunciado: "Marcos Urrutia, que es diseñador gráfico, ha tenido un corte en la muñeca derivado de realizar trabajos de carpintería. ¿Tendría la consideración de accidente o enfermedad profesional?",
    opciones: [
      "Sería un accidente laboral.",
      "No sería ni enfermedad profesional ni accidente laboral.",
      "Sería una enfermedad profesional.",
      "Se trataría de una enfermedad profesional o de un accidente laboral dependiendo de si se ha producido de forma repentina o de si se ha generado de forma prolongada en el tiempo."
    ],
    correcta: 1,
    explicacion: " La correcta es No sería ni enfermedad profesional ni accidente laboral. porque el corte no deriva de su trabajo como diseñador gráfico, sino de una actividad de carpintería ajena a sus funciones laborales; por eso no encaja como accidente de trabajo ni como enfermedad profesional."
  },
  {
    enunciado: "Cuál es la norma de mayor rango que recoge la protección de los trabajadores como algo fundamental",
    opciones: [
      "El Estatuto de los Trabajadores.",
      "La Ley de Prevención de Riesgos Laborales.",
      "La Constitución.",
      "La Biblia."
    ],
    correcta: 2,
    explicacion: " La correcta es La Constitución. porque la Constitución Española es la norma de mayor rango y reconoce derechos básicos relacionados con el trabajo y la protección de la salud."
  },
  {
    enunciado: "¿Cuál de las siguientes NO tendría la condición de accidente de trabajo?",
    opciones: [
      "Loli, se rompe el codo como consecuencia de una caída a distinto nivel cuando subía las escaleras de la oficina.",
      "Gloria, tiene un accidente de coche cuando iba a casa desde el trabajo.",
      "León, profesor de profesión. Un alumno le hace un mataleón (es una llave de esas que te ponen a dormir con los angelitos).",
      "Mar, le detectan una enfermedad derivada de la exposición a sustancias químicas en su trabajo."
    ],
    correcta: 3,
    explicacion: " La correcta es Mar, le detectan una enfermedad derivada de la exposición a sustancias químicas en su trabajo. porque la enfermedad derivada de exposición a sustancias químicas encaja mejor como enfermedad profesional, no como accidente de trabajo, porque se produce por exposición laboral y no por un hecho súbito."
  },
  {
    enunciado: "En quién recae la responsabilidad de velar por la protección de la salud de los trabajadores y evitar accidentes",
    opciones: [
      "Tanto en el empresario como en los trabajadores.",
      "Exclusivamente en el empresario.",
      "Exclusivamente a los trabajadores.",
      "Exclusivamente a los representantes de los trabajadores."
    ],
    correcta: 0,
    explicacion: " La correcta es Tanto en el empresario como en los trabajadores. porque la prevención es una responsabilidad compartida: la empresa debe proteger y organizar la prevención, pero los trabajadores deben usar correctamente los medios, informar de riesgos y cooperar."
  },
  {
    enunciado: "¿Cuál de las siguientes NO tiene la condición de enfermedad laboral?",
    opciones: [
      "C Tangana, es carpintero. Desarrolla una alergia incurable al pino.",
      "Javi, enfermero, se lesiona el hombro entrenando cuando va a mover un paciente.",
      "Mercedes, desarrolla síndrome del túnel carpiano como consecuencia de coser 12 horas al día en un taller de ropa.",
      "Luck, desarrolla lumbalgia crónica tras 15 años trabajando como jornalero recogiendo cebollas."
    ],
    correcta: 1,
    explicacion: " La correcta es Javi, enfermero, se lesiona el hombro entrenando cuando va a mover un paciente. porque la lesión del hombro entrenando no se produce por la prestación laboral ni por una exposición propia del puesto; por eso no es enfermedad laboral."
  },
  {
    enunciado: "Cuál de los siguientes NO es un derecho de los trabajadores en materia preventiva",
    opciones: [
      "Recibir formación en materia preventiva.",
      "Formular propuestas al empresario.",
      "Usar adecuadamente los equipos de trabajo.",
      "Vigilancia de su salud."
    ],
    correcta: 2,
    explicacion: " La correcta es Usar adecuadamente los equipos de trabajo. porque usar adecuadamente los equipos de trabajo es una obligación preventiva del trabajador, no un derecho."
  },
  {
    enunciado: "A qué hay que dar prioridad a la hora de diseñar la prevención de riesgos laborales en una empresa",
    opciones: [
      "Comprar equipos de protección adecuados.",
      "Instruir a los trabajadores adecuadamente.",
      "Contratar un seguro médico que sea barato y a la vez bueno.",
      "Eliminar los riesgos de raíz."
    ],
    correcta: 3,
    explicacion: " La correcta es Eliminar los riesgos de raíz. porque el primer principio preventivo es evitar o eliminar los riesgos en su origen antes de recurrir a medidas de protección o formación."
  },
  {
    enunciado: "¿Qué significan las siglas OIT?",
    opciones: [
      "Organización Internacional del Trabajo.",
      "Organización independiente de trabajadores.",
      "Organización para el tránsito internacional de trabajadores.",
      "Organización del trabajo obrero internacional."
    ],
    correcta: 0,
    explicacion: " La correcta es Organización Internacional del Trabajo. porque OIT significa Organización Internacional del Trabajo, organismo internacional que fija estándares laborales y preventivos."
  },
  {
    enunciado: "¿De qué Organismo internacional forma parte la OIT?",
    opciones: [
      "Unión Europea.",
      "Organización de las Naciones Unidas.",
      "Unión de Pequeños Agricultores.",
      "Organización del Tratado del Atlántico Norte (OTAN)."
    ],
    correcta: 1,
    explicacion: " La correcta es Organización de las Naciones Unidas. porque la OIT forma parte del sistema de Naciones Unidas y establece convenios y recomendaciones internacionales sobre trabajo."
  },
  {
    enunciado: "¿Cuál de los siguientes organismos tiene capacidad punitiva (es decir, puede poner sanciones que hacen mucha pupa al bolsillo)?",
    opciones: [
      "La Organización Mundial de la Salud.",
      "La Fundación Europea para la Mejora de las Condiciones de Vida y de Trabajo.",
      "La Inspección de Trabajo.",
      "La Agencia Europea para la Seguridad y Salud en el Trabajo."
    ],
    correcta: 2,
    explicacion: " La correcta es La Inspección de Trabajo. porque la Inspección de Trabajo puede vigilar el cumplimiento de la normativa laboral y de prevención y proponer sanciones."
  },
  {
    enunciado: "¿Cuál de las siguientes medidas preventivas no pertenece al ámbito de la seguridad en el trabajo?",
    opciones: [
      "Protecciones en maquinaria.",
      "Señalización.",
      "Formación en seguridad.",
      "Control de exposición."
    ],
    correcta: 3,
    explicacion: " La correcta es Control de exposición. porque el control de exposición pertenece más a la higiene industrial, porque se relaciona con agentes físicos, químicos o biológicos, no con seguridad frente a accidentes."
  },
  {
    enunciado: "Un inspector de trabajo observa que, analizando las bajas laborales que hay en tu empresa, el 90 por ciento son derivadas de la insatisfacción laboral, desmotivación de los trabajadores, depresiones y acoso laboral. ¿Qué técnica de prevención debería aplicarse para prevenir dichas patologías?",
    opciones: [
      "Psicosociología.",
      "Seguridad en el trabajo.",
      "Higiene industrial.",
      "Ergonomía."
    ],
    correcta: 0,
    explicacion: " La correcta es Psicosociología. porque la psicosociología trata riesgos como estrés, desmotivación, depresión, acoso laboral o insatisfacción derivados de la organización del trabajo."
  },
  {
    enunciado: "Las medidas de protección se clasificarían de la siguiente forma:",
    opciones: [
      "Generales y concretas.",
      "Individuales y colectivas.",
      "Abstractas y generales.",
      "Singulares y plurales."
    ],
    correcta: 1,
    explicacion: " La correcta es Individuales y colectivas. porque las medidas de protección se dividen en colectivas e individuales, siendo prioritarias las colectivas."
  },
  {
    enunciado: "En la empresa Good Mercancías, SLU, se almacenan bienes que se organizan utilizando vehículos de carga. ¿Qué medida no sería idónea para evitar atropellos que espachurren a trabajadores?",
    opciones: [
      "Instalación de semáforos.",
      "Delimitar las zonas de tráfico.",
      "Equipos individuales de protección.",
      "Controlar la velocidad de los vehículos."
    ],
    correcta: 2,
    explicacion: " La correcta es Equipos individuales de protección. porque ante riesgo de atropellos en almacén deben priorizarse medidas colectivas y organizativas; los EPIs no evitan por sí mismos que el vehículo atropelle."
  },
  {
    enunciado: "Los riesgos derivados de las condiciones ambientales (o medioambientales) de la empresa se clasifican en:",
    opciones: [
      "Mecánicos, ambientales y psicológicos.",
      "Generales, particulares y concretos.",
      "Abstractos y concretos.",
      "Físicos, biológicos y químicos."
    ],
    correcta: 3,
    explicacion: " La correcta es Físicos, biológicos y químicos. porque los riesgos ambientales de la empresa se clasifican como físicos, químicos y biológicos, que son los propios de la higiene industrial."
  },
  {
    enunciado: "La evaluación de riesgos se centra en:",
    opciones: [
      "Comprobar la gravedad y la probabilidad de que ocurra un riesgo.",
      "Verificar si el riesgo se puede producir, al menos una vez cada mes.",
      "Tener en cuenta la evolución de la técnica.",
      "Evitar los riesgos en su origen."
    ],
    correcta: 0,
    explicacion: " La correcta es Comprobar la gravedad y la probabilidad de que ocurra un riesgo. porque evaluar un riesgo significa valorar su probabilidad de que ocurra y la gravedad de sus consecuencias."
  },
  {
    enunciado: "¿Qué técnica de prevención se debería utilizar para ayudar a una persona que tiene problemas de hombro derivados del uso continuado del ratón?",
    opciones: [
      "Seguridad en el trabajo.",
      "Ergonomía.",
      "Higiene industrial.",
      "Psicosociología."
    ],
    correcta: 1,
    explicacion: " La correcta es Ergonomía. porque la ergonomía adapta el puesto a la persona y previene trastornos musculoesqueléticos por posturas, movimientos repetitivos o mal diseño del puesto."
  },
  {
    enunciado: "Según la Agencia Europea para la Seguridad y Salud en el trabajo, ¿qué porcentaje de trabajadores se enfrentan a factores relacionados con el trabajo que puede afectar a su salud mental?",
    opciones: [
      "20 por ciento.",
      "15 por ciento.",
      "45 por ciento.",
      "10 por ciento."
    ],
    correcta: 2,
    explicacion: " La correcta es 45 por ciento. porque según el dato trabajado en clase, el porcentaje referido por la Agencia Europea es el 45 %."
  },
  {
    enunciado: "Cómo se denomina a la manifestación de agotamiento emocional, despersonalización y baja realización personal en el trabajo",
    opciones: [
      "Estrés laboral.",
      "Mobbing.",
      "Carga mental excesiva.",
      "Bournout."
    ],
    correcta: 3,
    explicacion: " La correcta es Bournout. porque el burnout se define por agotamiento emocional, despersonalización y baja realización profesional."
  },
  {
    enunciado: "En materia de prevención de riesgos laborales, siempre se debe priorizar",
    opciones: [
      "Las medidas de protección colectivas frente a las individuales.",
      "Las medidas individuales de protección frente a las colectivas.",
      "Las medidas de protección frente a la evitación de los riesgos.",
      "Las medidas de protección basadas en EPIs (equipos de protección individual)."
    ],
    correcta: 0,
    explicacion: " La correcta es Las medidas de protección colectivas frente a las individuales. porque la prevención prioriza las protecciones colectivas sobre los EPIs porque protegen a varias personas y actúan antes de que el riesgo llegue al trabajador."
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un objetivo de los simulacros que deben efectuarse en todo plan de evacuación?",
    opciones: [
      "Evaluar la efectividad del plan.",
      "Aplicar las medidas disciplinarias correspondientes a aquellos trabajadores que no efectúen el simulacro de forma satisfactoria.",
      "Formar y concienciar al personal.",
      "Identificar y corregir deficiencias."
    ],
    correcta: 1,
    explicacion: " La correcta es Aplicar las medidas disciplinarias correspondientes a aquellos trabajadores que no efectúen el simulacro de forma satisfactoria. porque los simulacros sirven para comprobar el plan, formar al personal y detectar fallos, no para sancionar disciplinariamente."
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un medio de protección frente a emergencias?",
    opciones: [
      "Equipos de detección.",
      "Alarma contra incendios.",
      "Simulacros.",
      "Extintores."
    ],
    correcta: 2,
    explicacion: " La correcta es Simulacros. porque los simulacros son entrenamiento y comprobación del plan, pero no son un medio material de protección como detectores, alarmas o extintores."
  },
  {
    enunciado: "La persona encargada de dirigir y supervisar la actuación que debe llevarse a cabo en una emergencia se denomina:",
    opciones: [
      "Jefe de servicio.",
      "Jefe de planta.",
      "Jefazo.",
      "Jefe de intervención."
    ],
    correcta: 3,
    explicacion: " La correcta es Jefe de intervención. porque el jefe de intervención es quien dirige y coordina la actuación durante la emergencia."
  },
  {
    enunciado: "Las señales que advierten de algún peligro tendrán una forma y color",
    opciones: [
      "Triangular de color amarillo.",
      "Redonda con borde rojo.",
      "Redonda de color azul.",
      "Cuadrada de color verde."
    ],
    correcta: 0,
    explicacion: " La correcta es Triangular de color amarillo. porque las señales de advertencia de peligro son triangulares y amarillas."
  },
  {
    enunciado: "La actualización de las señales de advertencia conforme a la nomenclatura actual es una actuación que debería llevarse a cabo:",
    opciones: [
      "Durante la emergencia.",
      "Antes de emergencia.",
      "Después de la emergencia.",
      "Todas las respuestas son correctas."
    ],
    correcta: 1,
    explicacion: " La correcta es Antes de emergencia. porque actualizar señales es una medida previa de preparación, dentro de la fase anterior a la emergencia."
  },
  {
    enunciado: "El mantenimiento de las instalaciones presentes en una empresa es una actuación que se debe llevar a cabo",
    opciones: [
      "Durante la emergencia",
      "Después de la emergencia",
      "Antes de la emergencia",
      "En cualquier momento, incluso durante la propia emergencia"
    ],
    correcta: 2,
    explicacion: " La correcta es Antes de la emergencia porque el mantenimiento de instalaciones y equipos de emergencia se realiza antes de la emergencia como prevención y preparación."
  },
  {
    enunciado: "¿Cuál es el primer paso en la regla PAS?",
    opciones: [
      "Socorrer a la víctima.",
      "Avisar a los servicios de emergencia.",
      "Realizar una evaluación médica.",
      "Proteger al accidentado."
    ],
    correcta: 3,
    explicacion: " La correcta es Proteger al accidentado. porque la regla PAS empieza por Proteger, es decir, asegurar la zona y evitar nuevos daños antes de avisar o socorrer."
  },
  {
    enunciado: "¿Qué significa la \"A\" en la regla PAS?",
    opciones: [
      "Alertar a los servicios de emergencia especializados.",
      "Asistir a la víctima.",
      "Analizar la situación.",
      "Ayudar a los testigos."
    ],
    correcta: 0,
    explicacion: " La correcta es Alertar a los servicios de emergencia especializados. porque la A de PAS significa Avisar o Alertar a los servicios de emergencia, normalmente al 112."
  },
  {
    enunciado: "¿Qué es el triaje?",
    opciones: [
      "Un método para transportar heridos.",
      "Un método para categorizar heridos en situaciones donde el número es desconocido.",
      "Un método para prevenir accidentes.",
      "Un método para identificar enfermedades."
    ],
    correcta: 1,
    explicacion: " La correcta es Un método para categorizar heridos en situaciones donde el número es desconocido. porque el triaje clasifica a los heridos por prioridad cuando hay varias víctimas y los recursos son limitados."
  },
  {
    enunciado: "¿Qué se debe hacer con una persona inconsciente que respira?",
    opciones: [
      "No hacer nada.",
      "Administrar RCP.",
      "Colocarla en posición lateral de seguridad.",
      "Moverla a un lugar seguro."
    ],
    correcta: 2,
    explicacion: " La correcta es Colocarla en posición lateral de seguridad. porque una persona inconsciente que respira debe colocarse en posición lateral de seguridad para mantener la vía aérea y evitar atragantamiento."
  },
  {
    enunciado: "¿Cuántas compresiones por minuto se deben realizar en la RCP?",
    opciones: [
      "60-80.",
      "80-100.",
      "120-140.",
      "100-120."
    ],
    correcta: 3,
    explicacion: " La correcta es 100-120. porque la RCP en adultos se realiza a un ritmo de 100 a 120 compresiones por minuto."
  },
  {
    enunciado: "¿Qué tipo de quemadura afecta solo la capa superficial de la piel?",
    opciones: [
      "Primer grado.",
      "Tercer grado.",
      "Segundo grado.",
      "Cuarto grado."
    ],
    correcta: 0,
    explicacion: " La correcta es Primer grado. porque la quemadura de primer grado afecta a la capa superficial de la piel y suele producir enrojecimiento."
  },
  {
    enunciado: "¿Qué maniobra se usa en un atragantamiento?",
    opciones: [
      "Maniobra de Valsalva.",
      "Maniobra de Heimlich.",
      "Maniobra de Epley.",
      "Maniobra de Miller."
    ],
    correcta: 1,
    explicacion: " La correcta es Maniobra de Heimlich. porque en atragantamiento grave se utiliza la maniobra de Heimlich para intentar expulsar el cuerpo extraño."
  },
  {
    enunciado: "¿Cuál es la postura ante hemorragia nasal?",
    opciones: [
      "Acostado boca abajo.",
      "De pie.",
      "Sentado cabeza hacia adelante.",
      "Acostado boca arriba."
    ],
    correcta: 2,
    explicacion: " La correcta es Sentado cabeza hacia adelante. porque en hemorragia nasal se debe sentar a la persona e inclinar la cabeza hacia delante para evitar que trague sangre."
  },
  {
    enunciado: "Adulto inconsciente y no respira. ¿Qué haces?",
    opciones: [
      "Dar agua.",
      "Esperar especialistas.",
      "Intentar despertarle.",
      "Llamar al 112, abrir las vías aéreas y RCP."
    ],
    correcta: 3,
    explicacion: " La correcta es Llamar al 112, abrir las vías aéreas y RCP. porque si un adulto está inconsciente y no respira hay que activar emergencias, abrir vía aérea e iniciar RCP."
  },
  {
    enunciado: "Prioridad en múltiples víctimas:",
    opciones: [
      "Peligro inmediato de muerte.",
      "Quien grita más.",
      "Heridas visibles.",
      "Quien lo pida."
    ],
    correcta: 0,
    explicacion: " La correcta es Peligro inmediato de muerte. porque en múltiples víctimas se prioriza a quien tiene peligro inmediato de muerte, siguiendo el criterio de triaje."
  },
  {
    enunciado: "Como actuarías en una herida con sangrado abundante:",
    opciones: [
      "Limpiar con jabón.",
      "Presión directa.",
      "Antiséptico.",
      "Esperar a que baje."
    ],
    correcta: 1,
    explicacion: " La correcta es Presión directa. porque ante una herida con sangrado abundante se aplica presión directa para controlar la hemorragia."
  },
  {
    enunciado: "Una persona tragó un objeto y tose fuerte. ¿Qué hacemos?",
    opciones: [
      "Golpes espalda.",
      "Heimlich.",
      "Dejar toser.",
      "Dar agua."
    ],
    correcta: 2,
    explicacion: " La correcta es Dejar toser. porque si la persona tose fuerte la obstrucción es parcial, por lo que se le anima a seguir tosiendo."
  },
  {
    enunciado: "¿En qué caso se debe usar PLS?",
    opciones: [
      "Inconsciente que no respira.",
      "Fracturas.",
      "Quemaduras.",
      "Inconsciente que respira."
    ],
    correcta: 3,
    explicacion: " La correcta es Inconsciente que respira. porque la PLS se usa con personas inconscientes que respiran para mantener abierta la vía aérea."
  },
  {
    enunciado: "Cuál es la secuencia correcta RCP adulto:",
    opciones: [
      "30 compresiones / 2 ventilaciones.",
      "2 ventilaciones / 15 compresiones.",
      "15 compresiones / 2 ventilaciones.",
      "2 ventilaciones y 30 compresiones."
    ],
    correcta: 0,
    explicacion: " La correcta es 30 compresiones / 2 ventilaciones. porque la secuencia básica de RCP en adulto es 30 compresiones y 2 ventilaciones."
  },
  {
    enunciado: "Qué actuación forma parte de la Evaluación primaria:",
    opciones: [
      "Verificar fracturas craneales",
      "Comprobar la consciencia, respiración y pulso.",
      "Comprobar si la persona presenta sangrado",
      "Comprobar si la persona tiene dolor."
    ],
    correcta: 1,
    explicacion: " La correcta es Comprobar la consciencia, respiración y pulso. porque la evaluación primaria comprueba signos vitales como consciencia, respiración y pulso."
  },
  {
    enunciado: "Cuál es el número de emergencias en España:",
    opciones: [
      "911.",
      "999.",
      "112.",
      "000."
    ],
    correcta: 2,
    explicacion: " La correcta es 112. porque el número único de emergencias en España y en la Unión Europea es el 112."
  },
  {
    enunciado: "¿Quiénes pueden firmar un contrato de trabajo según el Estatuto de los Trabajadores?",
    opciones: [
      "Únicamente las personas que tengan 18 años.",
      "Únicamente las personas que estén emancipadas.",
      "Extranjeros residentes, únicamente.",
      "Mayores de 16 años con permiso paterno."
    ],
    correcta: 3,
    explicacion: " La correcta es Mayores de 16 años con permiso paterno. porque pueden firmar mayores de 16 años con autorización o condiciones legales, además de mayores de edad y otros supuestos permitidos."
  },
  {
    enunciado: "Leopoldo ha conseguido la nacionalidad española, por lo que decide dejar su puesto de trabajo actual en una empresa que lo tenía contratado sin papeles y con condiciones mucho peores a las que indica el contrato de trabajo. Su jefe actual le avisa que, de no renovar el actual contrato, tendrá que dar aviso a las autoridades de la situación ilegal de la mujer de Leopoldo. Este decide firmar el contrato. ¿Sería dicho contrato válido?",
    opciones: [
      "No, ya que carece de consentimiento.",
      "No, ya que le faltaría una causa válida.",
      "No, ya que carece de objeto.",
      "Sí, ya que Leopoldo venía prestando servicios en la empresa referida."
    ],
    correcta: 0,
    explicacion: " La correcta es No, ya que carece de consentimiento. porque el contrato firmado bajo amenaza o coacción carece de consentimiento libre, por lo que no es válido."
  },
  {
    enunciado: "¿Qué tipo de contrato puede celebrarse verbalmente?",
    opciones: [
      "Contrato a tiempo parcial.",
      "Contrato indefinido ordinario a jornada completa.",
      "Contrato formativo.",
      "Ninguno."
    ],
    correcta: 1,
    explicacion: " La correcta es Contrato indefinido ordinario a jornada completa. porque el contrato indefinido ordinario a jornada completa puede celebrarse verbalmente, aunque es recomendable hacerlo por escrito."
  },
  {
    enunciado: "Clara es hija de un bibliotecario. Ha conseguido un trabajo temporal para cubrir una baja de maternidad, por una duración de 16 semanas. Su jefe, que es un poco descuidado no ha formalizado con ella el contrato por escrito. ¿Qué naturaleza tendría dicho contrato?",
    opciones: [
      "Se considera nulo.",
      "Pierde validez legal.",
      "Se presume indefinido.",
      "Ninguna de las anteriores."
    ],
    correcta: 2,
    explicacion: " La correcta es Se presume indefinido. porque un contrato temporal que debía formalizarse por escrito y no se documenta se presume indefinido."
  },
  {
    enunciado: "¿Qué información NO es obligatoria en un contrato de trabajo?",
    opciones: [
      "Duración.",
      "Retribuciones.",
      "Convenio colectivo de aplicación.",
      "Indemnización en caso de despido."
    ],
    correcta: 3,
    explicacion: " La correcta es Indemnización en caso de despido. porque la indemnización por despido no forma parte del contenido mínimo obligatorio ordinario del contrato."
  },
  {
    enunciado: "Un contrato de trabajo, genera:",
    opciones: [
      "Obligaciones mutuas.",
      "Derechos únicamente para el empleador.",
      "Obligaciones para el trabajador.",
      "Ninguna de las anteriores."
    ],
    correcta: 0,
    explicacion: " La correcta es Obligaciones mutuas. porque el contrato genera obligaciones para ambas partes: el trabajador presta servicios y el empresario paga salario y cumple sus deberes."
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un elemento necesario para que un contrato se considere válido?",
    opciones: [
      "Consentimiento.",
      "Objeción.",
      "Objeto.",
      "Causa."
    ],
    correcta: 1,
    explicacion: " La correcta es Objeción. porque los elementos esenciales del contrato son consentimiento, objeto y causa; objeción no es un elemento contractual."
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una características del objeto de los contratos?",
    opciones: [
      "Debe ser lícito.",
      "Deben ser posibles.",
      "Deben ser indeterminados.",
      "Deben ser determinados."
    ],
    correcta: 2,
    explicacion: " La correcta es Deben ser indeterminados. porque el objeto del contrato debe ser lícito, posible y determinado; no puede ser indeterminado."
  },
  {
    enunciado: "Leopolda ha firmado un contrato en la empresa de un amigo para cotizar lo suficiente para cobrar el paro. Sin embargo no tiene intención de ir a trabajar. ¿Estaríamos ante un contrato válido?",
    opciones: [
      "No, ya que carecería de objeto.",
      "No, ya que carecería de consentimiento.",
      "No, ya que no es por escrito.",
      "No, ya que le faltaría una causa válida."
    ],
    correcta: 3,
    explicacion: " La correcta es No, ya que le faltaría una causa válida. porque un contrato simulado para cotizar sin prestación real de servicios carece de causa válida."
  },
  {
    enunciado: "A Lucía le han contratado para vender bolsitas de marihuana a la gente que pase a la tienda en la que está de dependienta. ¿Estaríamos ante un contrato válido?",
    opciones: [
      "No, porque carece de un objeto válido.",
      "Sí, siempre que ella estuviera de acuerdo.",
      "Sí, ya que se dan los tres elementos: Consentimiento, causa y voluntariedad.",
      "No, porque basta con que exista consentimiento aunque el objeto sea ilícito."
    ],
    correcta: 0,
    explicacion: " La correcta es No, porque carece de un objeto válido. porque vender marihuana ilegalmente tiene un objeto ilícito, por lo que el contrato no sería válido."
  },
  {
    enunciado: "¿Qué define esencialmente a un contrato de trabajo?",
    opciones: [
      "La realización de un trabajo ocasional.",
      "La prestación de servicios voluntarios a cambio de salario.",
      "La colaboración entre empresas.",
      "La cesión de trabajadores."
    ],
    correcta: 1,
    explicacion: " La correcta es La prestación de servicios voluntarios a cambio de salario. porque el contrato de trabajo consiste en prestar servicios voluntarios, personales, retribuidos, dependientes y por cuenta ajena."
  },
  {
    enunciado: "¿Cuál NO es un elemento esencial del contrato de trabajo?",
    opciones: [
      "Consentimiento.",
      "Objeto.",
      "Forma escrita.",
      "Causa."
    ],
    correcta: 2,
    explicacion: " La correcta es Forma escrita. porque la forma escrita no es elemento esencial de validez en todos los contratos; los esenciales son consentimiento, objeto y causa."
  },
  {
    enunciado: "El consentimiento en el contrato de trabajo debe ser:",
    opciones: [
      "Presunto y tácito.",
      "Verbal obligatoriamente.",
      "Revocable unilateralmente.",
      "Libre y sin vicios."
    ],
    correcta: 3,
    explicacion: " La correcta es Libre y sin vicios. porque el consentimiento debe prestarse libremente y sin error, violencia, intimidación, coacción o fraude."
  },
  {
    enunciado: "La causa del contrato de trabajo consiste en:",
    opciones: [
      "El intercambio de trabajo por salario.",
      "La prestación laboral.",
      "La finalidad económica de la empresa.",
      "La duración del contrato."
    ],
    correcta: 0,
    explicacion: " La correcta es El intercambio de trabajo por salario. porque la causa del contrato laboral es el intercambio: trabajo del empleado a cambio de salario del empresario."
  },
  {
    enunciado: "¿Quién puede actuar como empresario en un contrato de trabajo?",
    opciones: [
      "Solo personas físicas.",
      "Personas físicas, jurídicas o comunidades de bienes.",
      "Solo empresas mercantiles.",
      "Solo autónomos."
    ],
    correcta: 1,
    explicacion: " La correcta es Personas físicas, jurídicas o comunidades de bienes. porque puede ser empresario una persona física, una persona jurídica o una comunidad de bienes."
  },
  {
    enunciado: "Un contrato verbal es válido cuando:",
    opciones: [
      "Nunca es válido.",
      "Siempre que dure menos de un año.",
      "En contratos indefinidos.",
      "Siempre que dure menos de 6 meses."
    ],
    correcta: 2,
    explicacion: " La correcta es En contratos indefinidos. porque en el temario se admite contrato verbal en el contrato indefinido ordinario, aunque otras modalidades deben ir por escrito."
  },
  {
    enunciado: "¿Cuál es contenido mínimo obligatorio de un contrato?",
    opciones: [
      "Salario y vacaciones.",
      "Duración y jornada.",
      "Datos de las partes y tipo de contrato.",
      "Todas las anteriores."
    ],
    correcta: 3,
    explicacion: " La correcta es Todas las anteriores. porque el contenido mínimo incluye datos de las partes, tipo de contrato, duración, jornada, salario, vacaciones y demás condiciones básicas."
  },
  {
    enunciado: "¿Qué modalidad contractual es indefinida?",
    opciones: [
      "Contrato fijo discontinuo.",
      "Contrato por circunstancias de la producción.",
      "Contrato de sustitución.",
      "Contrato de relevo."
    ],
    correcta: 0,
    explicacion: " La correcta es Contrato fijo discontinuo. porque el fijo discontinuo es indefinido porque no tiene fecha final, aunque el trabajo se repita por temporadas o periodos intermitentes."
  },
  {
    enunciado: "El contrato fijo discontinuo se utiliza principalmente para:",
    opciones: [
      "Trabajos permanentes continuos.",
      "Trabajos estacionales o intermitentes.",
      "Trabajos de sustitución.",
      "Trabajos formativos."
    ],
    correcta: 1,
    explicacion: " La correcta es Trabajos estacionales o intermitentes. porque el fijo discontinuo se usa para trabajos estacionales o intermitentes que se repiten en el tiempo."
  },
  {
    enunciado: "El contrato fijo discontinuo debe formalizarse:",
    opciones: [
      "De forma verbal.",
      "Solo si dura más de un año.",
      "De forma escrita.",
      "Ante la autoridad laboral."
    ],
    correcta: 2,
    explicacion: " La correcta es De forma escrita. porque el contrato fijo discontinuo debe formalizarse por escrito e indicar elementos como llamamiento, jornada estimada y duración aproximada."
  },
  {
    enunciado: "¿Qué contrato se utiliza para incrementos ocasionales e imprevisibles de actividad?",
    opciones: [
      "Contrato de relevo.",
      "Contrato de sustitución.",
      "Contrato formativo.",
      "Contrato por circunstancias de la producción."
    ],
    correcta: 3,
    explicacion: " La correcta es Contrato por circunstancias de la producción. porque el contrato por circunstancias de la producción cubre incrementos ocasionales e imprevisibles de actividad."
  },
  {
    enunciado: "La duración máxima del contrato por circunstancias imprevisibles es:",
    opciones: [
      "6 meses ampliables por convenio.",
      "3 meses.",
      "Hasta 2 años.",
      "90 días al año."
    ],
    correcta: 0,
    explicacion: " La correcta es 6 meses ampliables por convenio. porque la duración general es de 6 meses, ampliable por convenio hasta 1 año."
  },
  {
    enunciado: "¿Qué indemnización corresponde al finalizar un contrato temporal por producción?",
    opciones: [
      "No tiene indemnización.",
      "12 días por año trabajado.",
      "8 días por año.",
      "20 días por año trabajado."
    ],
    correcta: 1,
    explicacion: " La correcta es 12 días por año trabajado. porque al finalizar el contrato temporal por circunstancias de la producción corresponde indemnización de 12 días por año trabajado."
  },
  {
    enunciado: "El contrato por circunstancias previsibles puede celebrarse como máximo:",
    opciones: [
      "60 días al año.",
      "120 días continuados.",
      "90 días al año.",
      "6 meses."
    ],
    correcta: 2,
    explicacion: " La correcta es 90 días al año. porque para circunstancias previsibles el límite general trabajado en el temario es de 90 días al año."
  },
  {
    enunciado: "¿Cuál es una característica del contrato por sustitución?",
    opciones: [
      "Genera indemnización al finalizar.",
      "Siempre es a tiempo parcial.",
      "Solo puede durar 6 meses.",
      "Puede iniciar 15 días antes del comienzo de la sustitución."
    ],
    correcta: 3,
    explicacion: " La correcta es Puede iniciar 15 días antes del comienzo de la sustitución. porque el contrato por sustitución puede comenzar hasta 15 días antes para facilitar el solapamiento con la persona sustituida."
  },
  {
    enunciado: "En el contrato de sustitución es obligatorio indicar:",
    opciones: [
      "El trabajador sustituido y la causa.",
      "El salario del sustituido.",
      "La duración exacta del contrato.",
      "El convenio colectivo."
    ],
    correcta: 0,
    explicacion: " La correcta es El trabajador sustituido y la causa. porque en la sustitución debe identificarse a la persona sustituida y la causa que justifica la reserva o sustitución."
  },
  {
    enunciado: "El contrato de relevo se celebra para:",
    opciones: [
      "Sustituir bajas médicas.",
      "Cubrir jubilación parcial.",
      "Incrementos de producción.",
      "Formación profesional."
    ],
    correcta: 1,
    explicacion: " La correcta es Cubrir jubilación parcial. porque el contrato de relevo se utiliza para cubrir la jubilación parcial de otra persona trabajadora."
  },
  {
    enunciado: "El trabajador relevista debe ser:",
    opciones: [
      "Trabajador indefinido de la empresa.",
      "Autónomo colaborador.",
      "Trabajador en situación de desempleo.",
      "Trabajador sin experiencia pero con título habilitante."
    ],
    correcta: 2,
    explicacion: " La correcta es Trabajador en situación de desempleo. porque el relevista debe ser una persona desempleada, según el esquema del contrato de relevo del temario."
  },
  {
    enunciado: "En el contrato de relevo ordinario, la duración mínima es:",
    opciones: [
      "6 meses.",
      "Hasta jubilación total.",
      "Sin duración mínima.",
      "1 año."
    ],
    correcta: 3,
    explicacion: " La correcta es 1 año. porque en el contrato de relevo ordinario la duración mínima indicada es de 1 año."
  },
  {
    enunciado: "¿Qué caracteriza al contrato de formación en alternancia?",
    opciones: [
      "Compatibiliza trabajo y formación reglada.",
      "Solo puede durar 6 meses.",
      "Exige titulación previa.",
      "Es siempre a tiempo parcial."
    ],
    correcta: 0,
    explicacion: " La correcta es Compatibiliza trabajo y formación reglada. porque la formación en alternancia combina actividad laboral y formación reglada."
  },
  {
    enunciado: "La duración del contrato de formación en alternancia es:",
    opciones: [
      "Entre 6 meses y 1 año.",
      "Entre 3 meses y 2 años.",
      "Sin límite.",
      "Máximo 1 año."
    ],
    correcta: 1,
    explicacion: " La correcta es Entre 3 meses y 2 años. porque su duración es de mínimo 3 meses y máximo 2 años."
  },
  {
    enunciado: "La retribución del contrato de formación en alternancia el primer año será como mínimo:",
    opciones: [
      "50% del salario.",
      "75% del salario mínimo.",
      "60% del salario fijado en convenio.",
      "El SMI íntegro."
    ],
    correcta: 2,
    explicacion: " La correcta es 60% del salario fijado en convenio. porque el primer año la retribución mínima es el 60 % del salario fijado en convenio, proporcional a la jornada."
  },
  {
    enunciado: "¿Qué requisito NO es necesario para el contrato de formación en alternancia?",
    opciones: [
      "Plan formativo individual.",
      "Formalización escrita.",
      "Alternancia real trabajo-formación.",
      "Titulación previa."
    ],
    correcta: 3,
    explicacion: " La correcta es Titulación previa. porque la titulación previa no es necesaria porque este contrato se dirige a quien compatibiliza trabajo con formación."
  },
  {
    enunciado: "El contrato para la obtención de la práctica profesional requiere:",
    opciones: [
      "Poseer una titulación reciente.",
      "Estar desempleado.",
      "No haber trabajado nunca.",
      "Ser menor de 25 años."
    ],
    correcta: 0,
    explicacion: " La correcta es Poseer una titulación reciente. porque la práctica profesional exige una titulación reciente para adquirir experiencia relacionada con esos estudios."
  },
  {
    enunciado: "La duración del contrato de práctica profesional es:",
    opciones: [
      "Entre 3 meses y 2 años.",
      "Entre 6 meses y 1 año.",
      "Siempre 1 año.",
      "Sin límite."
    ],
    correcta: 1,
    explicacion: " La correcta es Entre 6 meses y 1 año. porque el contrato para la práctica profesional dura entre 6 meses y 1 año."
  },
  {
    enunciado: "La retribución del contrato de práctica profesional:",
    opciones: [
      "Puede ser inferior al SMI.",
      "Es siempre el SMI.",
      "Es la fijada en convenio y nunca inferior al contrato en alternancia.",
      "Es libremente pactada."
    ],
    correcta: 2,
    explicacion: " La correcta es Es la fijada en convenio y nunca inferior al contrato en alternancia. porque su salario es el fijado en convenio y no puede ser inferior al previsto para el contrato en alternancia."
  },
  {
    enunciado: "Un contrato a tiempo parcial se caracteriza por:",
    opciones: [
      "Prohibición de horas complementarias.",
      "Ser siempre indefinido.",
      "No poder ser escrito.",
      "Jornada inferior a la de un trabajador comparable a tiempo completo."
    ],
    correcta: 3,
    explicacion: " La correcta es Jornada inferior a la de un trabajador comparable a tiempo completo. porque el tiempo parcial se define por una jornada inferior a la de una persona comparable a tiempo completo."
  },
  {
    enunciado: "Las horas complementarias pactadas solo pueden realizarse en:",
    opciones: [
      "Contratos a tiempo parcial indefinidos.",
      "No pueden realizarse en ningún caso.",
      "Todos los contratos.",
      "Solo contratos formativos."
    ],
    correcta: 0,
    explicacion: " La correcta es Contratos a tiempo parcial indefinidos. porque las horas complementarias pactadas se asocian a contratos a tiempo parcial indefinidos."
  },
  {
    enunciado: "Las Empresas de Trabajo Temporal (ETT):",
    opciones: [
      "Ceden trabajadores sin contrato.",
      "Contratan y ceden trabajadores a empresas usuarias.",
      "No aplican convenios colectivos.",
      "Sustituyen a la empresa usuaria."
    ],
    correcta: 1,
    explicacion: " La correcta es Contratan y ceden trabajadores a empresas usuarias. porque las ETT contratan trabajadores para ponerlos a disposición de empresas usuarias."
  },
  {
    enunciado: "La movilidad funcional es:",
    opciones: [
      "Un cambio en tus funciones que se manifiesta en que debes llevar a cabo las de un grupo superior, exclusivamente.",
      "Un cambio en tus funciones que se manifiesta en que debes llevar a cabo las de un grupo inferior, exclusivamente.",
      "Un cambio en tus funciones que se manifiesta en que debes llevar a cabo las de un grupo superior, equivalente o inferior.",
      "Un cambio en tus funciones que se manifiesta en que debes llevar a cabo las de un grupo equivalente, exclusivamente."
    ],
    correcta: 2,
    explicacion: " La correcta es Un cambio en tus funciones que se manifiesta en que debes llevar a cabo las de un grupo superior, equivalente o inferior. porque la movilidad funcional puede implicar funciones superiores, equivalentes o inferiores."
  },
  {
    enunciado: "Lucas ha sido objeto de una movilidad funcional. Le han ordenado que lleve a cabo tareas de una categoría inferior a la que él desempeña. ¿Durante cuánto tiempo podrán mantenerle en esas funciones?",
    opciones: [
      "El tiempo suficiente.",
      "El tiempo que sea necesario a juicio del empresario.",
      "El tiempo que permanezca la necesidad.",
      "El tiempo indispensable."
    ],
    correcta: 3,
    explicacion: " La correcta es El tiempo indispensable. porque las funciones inferiores solo pueden mantenerse durante el tiempo indispensable y con justificación."
  },
  {
    enunciado: "Luis ha estado desempeñando funciones de una categoría superior a la suya y le ha cogido gusto al puesto. Te pregunta si podría quedarse haciendo esas funciones, ya que le gustan más que lo que venía haciendo.",
    opciones: [
      "Sí, siempre que haya permanecido en ese puesto 8 meses en un plazo de 24 meses.",
      "Sí, siempre que permanezca en ese puesto 6 meses en un plazo de 24 meses.",
      "Sí, siempre que permanezca en ese puesto al menos seis meses, en un plazo de 48 meses.",
      "Sí, 20 días por año trabajado con un máximo de 12 mensualidades."
    ],
    correcta: 0,
    explicacion: " La correcta es Sí, siempre que haya permanecido en ese puesto 8 meses en un plazo de 24 meses. porque si realiza funciones superiores durante 8 meses en 24 meses puede reclamar el ascenso o cobertura de vacante."
  },
  {
    enunciado: "Leopoldo ha sido llamado por el jefe. Tiene una buena noticia para él. Le han concedido un traslado a la provincia de Jaén. Nuestro amigo Leocadio vive en Zaragoza y no tiene ninguna intención de aceptar el cambio. ¿Podría irse de la empresa?",
    opciones: [
      "Sí, con una indemnización de 20 días por cada año trabajado con un máximo de 20 mensualidades.",
      "Sí, con una indemnización de 20 días por cada año trabajado con un máximo de 12 mensualidades.",
      "Sí, con una indemnización de 20 días por cada año trabajado con un máximo de 9 mensualidades.",
      "Sí, con una indemnización de 33 días por cada año trabajado con un máximo de 20 mensualidades."
    ],
    correcta: 1,
    explicacion: " La correcta es Sí, con una indemnización de 20 días por cada año trabajado con un máximo de 12 mensualidades. porque ante un traslado que exige cambio de residencia, el trabajador puede extinguir el contrato con indemnización de 20 días por año y máximo 12 mensualidades."
  },
  {
    enunciado: "¿Podría Leopoldo irse directamente del trabajo cuando le den la noticia?",
    opciones: [
      "Sí, siempre que avise con 20 días de antelación al jefe.",
      "Sí, siempre que avise con 15 días de antelación al jefe.",
      "No, ya que debe acudir primero al juzgado para que su contrato sea resuelto por el juez.",
      "No, primero tiene que pegarle una paliza al jefe."
    ],
    correcta: 2,
    explicacion: " La correcta es No, ya que debe acudir primero al juzgado para que su contrato sea resuelto por el juez. porque si quiere resolver el contrato por el traslado debe acudir primero al juzgado; no puede marcharse sin más de forma inmediata."
  },
  {
    enunciado: "Si Leopoldo decidiera impugnar la decisión por la que se le quiere trasladar, ¿en qué plazo debería hacerlo?",
    opciones: [
      "15 días.",
      "10 días.",
      "5 días.",
      "20 días."
    ],
    correcta: 3,
    explicacion: " La correcta es 20 días. porque el plazo para impugnar un traslado es de 20 días."
  },
  {
    enunciado: "En la empresa de Luis está habiendo muchos cambios… ¿Cuál de los siguientes NO le daría derecho a poner fin a su contrato de trabajo?",
    opciones: [
      "Sistema de rendimiento.",
      "Jornada de trabajo.",
      "Régimen de trabajo a turnos.",
      "Horario."
    ],
    correcta: 0,
    explicacion: " La correcta es Sistema de rendimiento. porque el sistema de rendimiento puede ser modificación sustancial, pero en el temario la extinción indemnizada se vincula a jornada, horario, turnos y otras condiciones con perjuicio directo."
  },
  {
    enunciado: "Si Luis decidiera irse de la empresa fruto de las modificaciones sustanciales del contrato de trabajo referidas en la pregunta anterior ¿tendría derecho a alguna indemnización?",
    opciones: [
      "Sí, 33 días por año trabajado con un máximo de 24 mensualidades.",
      "Sí, 20 días por año trabajado con un máximo de 9 mensualidades.",
      "Sí, 15 días por año trabajado con un máximo de 20 mensualidades.",
      "No le corresponde ninguna indemnización."
    ],
    correcta: 1,
    explicacion: " La correcta es Sí, 20 días por año trabajado con un máximo de 9 mensualidades. porque por modificación sustancial perjudicial, la indemnización es de 20 días por año con máximo de 9 mensualidades."
  },
  {
    enunciado: "Luis ha descubierto que su jefe le ha modificado las condiciones sustanciales de su contrato de trabajo para afectar a su dignidad, ya que le tiene manía. ¿Qué indemnización le correspondería en tal caso?",
    opciones: [
      "Ninguna, fastídiate, Luis.",
      "50.000 euros.",
      "33 días por año trabajado con un máximo de 24 mensualidades (o 720 días).",
      "270 días de sueldo, en todo caso."
    ],
    correcta: 2,
    explicacion: " La correcta es 33 días por año trabajado con un máximo de 24 mensualidades (o 720 días). porque si la modificación afecta a la dignidad, se puede pedir extinción indemnizada con 33 días por año y máximo 24 mensualidades."
  },
  {
    enunciado: "¿La suspensión del contrato de trabajo implica la extinción del contrato?",
    opciones: [
      "Sí.",
      "A veces.",
      "En ocasiones.",
      "No."
    ],
    correcta: 3,
    explicacion: " La correcta es No. porque la suspensión pausa temporalmente las obligaciones principales, pero no extingue el contrato."
  },
  {
    enunciado: "Señala la respuesta INCORRECTA con relación a la excedencia forzosa por ejercicio de cargo público.",
    opciones: [
      "Su duración puede ser, como máximo, de cuatro años.",
      "La antigüedad computa.",
      "Se conserva el mismo puesto de trabajo.",
      "El trabajador debe reincorporarse en el plazo de un mes desde que finaliza la causa por la que debe permanecer en excedencia forzosa."
    ],
    correcta: 0,
    explicacion: " La correcta es Su duración puede ser, como máximo, de cuatro años. porque la excedencia forzosa por cargo público no tiene el límite máximo de cuatro años; dura mientras se mantenga la causa."
  },
  {
    enunciado: "Lupecio se ha ido a Australia con su nueva novia aborigen. Para ello tiene que solicitar una excedencia voluntaria. A los 7 meses rompen su relación porque él no se adapta a la cultura local. Tras unos meses se vuelve a enamorar. Esta vez de una norcoreana. ¿Podría disfrutar Lupecio de una excedencia voluntaria de nuevo?",
    opciones: [
      "Sí, cuando transcurran 3 años desde el final de la anterior excedencia.",
      "Sí, siempre que transcurran cuatro años desde el final de la anterior excedencia.",
      "Sí, cuando transcurran 2 años desde el final de la anterior excedencia.",
      "Sí, siempre que sea amor verdadero."
    ],
    correcta: 1,
    explicacion: " La correcta es Sí, siempre que transcurran cuatro años desde el final de la anterior excedencia. porque para una nueva excedencia voluntaria deben pasar cuatro años desde el final de la anterior."
  },
  {
    enunciado: "Leandro ha tenido un hijo, está muy feliz, aunque duerme menos que un búho. ¿Cuál será el plazo máximo de la excedencia que puede coger?",
    opciones: [
      "1 año.",
      "2 años.",
      "3 años.",
      "4 años."
    ],
    correcta: 2,
    explicacion: " La correcta es 3 años. porque la excedencia por cuidado de hijo puede durar hasta 3 años."
  },
  {
    enunciado: "Leandro está preocupado, confunde todos los tipos de excedencias que hay. Señala la respuesta INCORRECTA respecto a la excedencia por cuidado de hijo.",
    opciones: [
      "Puede solicitarla tanto el padre como la madre.",
      "Durante el primer año se reserva el puesto de trabajo.",
      "Computa la antigüedad.",
      "Hasta que no transcurren cuatro años no se puede disfrutar de otra excedencia por cuidado de hijos."
    ],
    correcta: 3,
    explicacion: " La correcta es Hasta que no transcurren cuatro años no se puede disfrutar de otra excedencia por cuidado de hijos. porque la regla de esperar cuatro años pertenece a la excedencia voluntaria, no a la excedencia por cuidado de hijos."
  },
  {
    enunciado: "Liberto tiene una ferretería desde los 15 años. Ahora, con 95 años ha decidido jubilarse. Sus tres trabajadores se preguntan si les correspondería algún tipo de abono por parte del jefe.",
    opciones: [
      "Sí, un mes de salario.",
      "Sí 22 días por año trabajado.",
      "Sí, 35 días por año trabajado.",
      "Sí, 100 días por año trabajado."
    ],
    correcta: 0,
    explicacion: " La correcta es Sí, un mes de salario. porque por jubilación del empresario persona física corresponde un mes de salario."
  },
  {
    enunciado: "Liborio tiene un jefe un poco olvidadizo. Lleva varios meses sin cobrar. ¿Tendría derecho a que se pusiera fin a su contrato de trabajo?",
    opciones: [
      "No, ya que únicamente se permite poner fin al contrato de trabajo en caso de retrasos.",
      "Sí, siempre que haya dejado de cobrar durante tres meses aunque no sean consecutivos.",
      "Sí, siempre que haya dejado de cobrar durante un mes.",
      "Sí, siempre que haya dejado de cobrar durante dos meses consecutivos."
    ],
    correcta: 1,
    explicacion: " La correcta es Sí, siempre que haya dejado de cobrar durante tres meses aunque no sean consecutivos. porque la falta de pago de salarios durante tres meses, aunque no sean consecutivos, permite solicitar la extinción indemnizada."
  },
  {
    enunciado: "Laura tiene miedo de quedarse sin ahorros, ya que el jefe ha comenzado a retrasarse en los pagos del salario. En caso de superar el límite de retrasos, ¿podría Laura poner fin a su contrato de trabajo percibiendo además una indemnización?",
    opciones: [
      "Sí, siempre que lo comunique al jefe con 15 días de antelación.",
      "Sí, de 20 años de salario.",
      "Sí, de 33 días de salario por cada año trabajado con un máximo de 24 mensualidades.",
      "Sí, siempre y cuando se conforme con una indemnización de 12 días por cada año trabajado con un máximo de una anualidad de salario."
    ],
    correcta: 2,
    explicacion: " La correcta es Sí, de 33 días de salario por cada año trabajado con un máximo de 24 mensualidades. porque por impago o retrasos graves del salario la extinción indemnizada equivale a 33 días por año con máximo de 24 mensualidades."
  },
  {
    enunciado: "Tras una discusión con su jefe, Marcos es despedido. Una vez tramitado todo el procedimiento, se acuerda por el juez la improcedencia del despido. ¿Cuál sería el siguiente paso?",
    opciones: [
      "El empresario deberá readmitir al trabajador en todo caso.",
      "El empresario deberá indemnizar al trabajador en todo caso.",
      "El trabajador decidirá, en un plazo de cinco días, si es readmitido o indemnizado.",
      "El empresario deberá decidir en un plazo de cinco días, si lo readmite o si le indemniza."
    ],
    correcta: 3,
    explicacion: " La correcta es El empresario deberá decidir en un plazo de cinco días, si lo readmite o si le indemniza. porque declarado el despido improcedente, el empresario tiene 5 días para optar entre readmitir o indemnizar, salvo supuestos especiales."
  },
  {
    enunciado: "Lola es nombrada por su jefe empleada del mes y del año. En la alegría de celebración Lola dice que está embarazada. Todos sonríen menos su jefa. Al día siguiente, la trabajadora recibe una carta de despido por transgresión de la buena fe y pérdida de confianza. ¿Cómo debería calificar el juez ese despido?",
    opciones: [
      "Nulo, debiendo ser readmitida la trabajadora, con el abono de los salarios de tramitación.",
      "Procedente, con cero euros de indemnización.",
      "Improcedente, acordando la readmisión de la trabajadora.",
      "Improcedente, acordando indemnizar a la trabajadora a razón de 33 días por año trabajado, con un máximo de 24 mensualidades."
    ],
    correcta: 0,
    explicacion: " La correcta es Nulo, debiendo ser readmitida la trabajadora, con el abono de los salarios de tramitación. porque el despido por embarazo es nulo, con readmisión y salarios de tramitación, al vulnerar derechos especialmente protegidos."
  },
  {
    enunciado: "Construcciones Matías lleva varios trimestres con pérdidas económicas. Por lo que decide despedir a Laureano de forma objetiva. ¿Qué trámite debe llevar a cabo el jefe de D. Laureano?",
    opciones: [
      "Dar 15 días de sueldo como compensación por el despido sufrido.",
      "Entregarle una carta de despido donde se recojan esas causas y poner a su disposición una indemnización de 20 días por cada año trabajado con un máximo de 12 mensualidades.",
      "Dar 20 días de sueldo por compensación por el despido sufrido.",
      "Dar 33 días de sueldo como compensación por los daños morales sufridos."
    ],
    correcta: 1,
    explicacion: " La correcta es Entregarle una carta de despido donde se recojan esas causas y poner a su disposición una indemnización de 20 días por cada año trabajado con un máximo de 12 mensualidades. porque en el despido objetivo debe entregarse carta con causas y poner a disposición indemnización de 20 días por año con máximo de 12 mensualidades."
  },
  {
    enunciado: "Ana es trabajadora por cuenta ajena y ha sufrido un accidente en casa. ¿Qué tipo de contingencia cubre su baja laboral?",
    opciones: [
      "Contingencia profesional",
      "Cotización adicional",
      "Contingencia común",
      "Subsidio asistencial"
    ],
    correcta: 2,
    explicacion: " La correcta es Contingencia común porque un accidente en casa es contingencia común porque no deriva del trabajo ni de una enfermedad profesional."
  },
  {
    enunciado: "¿Qué entidad gestiona la recaudación de cuotas de la Seguridad Social en España?",
    opciones: [
      "INSS",
      "SEPE",
      "IMSERSO",
      "Tesorería General de la Seguridad Social"
    ],
    correcta: 3,
    explicacion: " La correcta es Tesorería General de la Seguridad Social porque la Tesorería General de la Seguridad Social recauda las cuotas y gestiona actos de encuadramiento como afiliación y cotización."
  },
  {
    enunciado: "¿Cuál es el porcentaje de la base reguladora que recibe una persona en Incapacidad Permanente Absoluta?",
    opciones: [
      "1",
      "0.55",
      "0.75",
      "0.5"
    ],
    correcta: 0,
    explicacion: " La correcta es 1 porque la incapacidad permanente absoluta se cobra al 100 % de la base reguladora."
  },
  {
    enunciado: "¿Qué principio asegura que todos los ciudadanos tengan acceso al sistema de Seguridad Social?",
    opciones: [
      "Contributividad",
      "Universalidad",
      "Equidad",
      "Intergeneracionalidad"
    ],
    correcta: 1,
    explicacion: " La correcta es Universalidad porque la universalidad garantiza el acceso de todos los ciudadanos al sistema de Seguridad Social."
  },
  {
    enunciado: "Marta reduce su jornada laboral al 50% para cuidar a su hija con cáncer. ¿Qué prestación puede solicitar?",
    opciones: [
      "Prestación por maternidad",
      "Reducción de jornada por cuidado de familiar dentro del segundo grado",
      "Prestación por cuidado de menores con enfermedad grave",
      "Subsidio por nacimiento"
    ],
    correcta: 2,
    explicacion: " La correcta es Prestación por cuidado de menores con enfermedad grave porque el cuidado de menor con cáncer o enfermedad grave cubre la reducción de jornada para cuidar a un hijo afectado."
  },
  {
    enunciado: "Si un trabajador sufre un accidente en su puesto de trabajo, ¿qué tipo de contingencia es?",
    opciones: [
      "Contingencia común",
      "Contingencia familiar",
      "Contingencia económica",
      "Contingencia profesional"
    ],
    correcta: 3,
    explicacion: " La correcta es Contingencia profesional porque un accidente ocurrido en el puesto de trabajo es contingencia profesional."
  },
  {
    enunciado: "¿Cuál es el organismo encargado de las prestaciones no contributivas para mayores y dependientes?",
    opciones: [
      "IMSERSO",
      "INSS",
      "SEPE",
      "Mutuas"
    ],
    correcta: 0,
    explicacion: " La correcta es IMSERSO porque el IMSERSO gestiona prestaciones no contributivas y servicios relacionados con mayores y dependencia."
  },
  {
    enunciado: "¿Qué régimen cubre a los pescadores y trabajadores marítimos?",
    opciones: [
      "Régimen General",
      "Régimen Especial del Mar",
      "RETA",
      "Régimen de Funcionarios"
    ],
    correcta: 1,
    explicacion: " La correcta es Régimen Especial del Mar porque los pescadores y trabajadores marítimos se integran en el Régimen Especial del Mar."
  },
  {
    enunciado: "En ausencia de regulación del convenio colectivo, ¿qué porcentaje de la base reguladora se cobra por Incapacidad Temporal por accidente laboral?",
    opciones: [
      "0.6",
      "0.5",
      "0.75",
      "1"
    ],
    correcta: 2,
    explicacion: " La correcta es 0.75 porque en incapacidad temporal por accidente laboral se cobra el 75 % de la base reguladora desde el día siguiente, salvo mejora."
  },
  {
    enunciado: "Un trabajador sufre un accidente laboral. ¿Desde cuándo tiene derecho a percibir la prestación?",
    opciones: [
      "Sí, desde el mismo día del accidente de trabajo",
      "Sí, desde que acuda al centro hospitalario",
      "Sí, a partir del tercer día de haber sufrido el accidente",
      "Sí, desde el día siguiente al accidente de trabajo"
    ],
    correcta: 3,
    explicacion: " La correcta es Sí, desde el día siguiente al accidente de trabajo porque en accidente laboral la prestación económica nace desde el día siguiente al accidente."
  },
  {
    enunciado: "¿Cuál de los siguientes colectivos está incluido en el RETA?",
    opciones: [
      "Autónomos",
      "Funcionarios",
      "Trabajadores por cuenta ajena",
      "Personal militar"
    ],
    correcta: 0,
    explicacion: " La correcta es Autónomos porque los autónomos están incluidos en el RETA."
  },
  {
    enunciado: "¿Cuál será la edad de jubilación en el año 2027?",
    opciones: [
      "60 años",
      "67 años",
      "65 años",
      "66 años"
    ],
    correcta: 1,
    explicacion: " La correcta es 67 años porque en 2027 la edad ordinaria de jubilación general llega a 67 años, salvo carreras largas de cotización."
  },
  {
    enunciado: "¿Qué tipo de prestación es la ayuda que se otorga a una persona con una discapacidad de nacimiento?",
    opciones: [
      "Contributiva",
      "Profesional",
      "No contributiva",
      "Especial"
    ],
    correcta: 2,
    explicacion: " La correcta es No contributiva porque una discapacidad de nacimiento puede dar lugar a prestación no contributiva si no depende de cotizaciones previas."
  },
  {
    enunciado: "¿Quién gestiona las prestaciones por desempleo en España?",
    opciones: [
      "INSS",
      "IMSERSO",
      "Tesorería General de la Seguridad Social",
      "SEPE"
    ],
    correcta: 3,
    explicacion: " La correcta es SEPE porque el SEPE gestiona las prestaciones por desempleo."
  },
  {
    enunciado: "¿Hasta cuándo se puede disfrutar de la pensión de viudedad?",
    opciones: [
      "Hasta que se vuelva a casar",
      "Hasta que se tengan nietos",
      "Hasta cumplir 65 años",
      "Hasta que se jubile"
    ],
    correcta: 0,
    explicacion: " La correcta es Hasta que se vuelva a casar porque la pensión de viudedad puede extinguirse por nuevo matrimonio o pareja de hecho en los términos legales."
  },
  {
    enunciado: "¿Hasta qué edad puede disfrutar una persona de la pensión por orfandad?",
    opciones: [
      "19 años",
      "25 años, siempre que esté cursando estudios",
      "20 años",
      "Hasta que lo necesite"
    ],
    correcta: 1,
    explicacion: " La correcta es 25 años, siempre que esté cursando estudios porque la orfandad puede disfrutarse hasta los 25 años si se cumplen los requisitos, como continuar estudios o carecer de ingresos suficientes."
  },
  {
    enunciado: "¿Qué prestación otorga un 100% de la base reguladora más complemento por asistencia de otra persona?",
    opciones: [
      "Incapacidad Permanente Total",
      "Invalidez Parcial",
      "Gran Invalidez",
      "Incapacidad Permanente Absoluta"
    ],
    correcta: 2,
    explicacion: " La correcta es Gran Invalidez porque la gran invalidez añade al 100 % de la base reguladora un complemento por necesitar asistencia de otra persona."
  },
  {
    enunciado: "Un autónomo que realiza una actividad profesional y colabora con un familiar sin contrato se incluye en:",
    opciones: [
      "Régimen General",
      "Régimen Especial del Mar",
      "MUFACE",
      "RETA"
    ],
    correcta: 3,
    explicacion: " La correcta es RETA porque el autónomo y sus familiares colaboradores se encuadran en el RETA."
  },
  {
    enunciado: "¿Qué prestación recibe una persona que no puede realizar ninguna profesión debido a una enfermedad permanente?",
    opciones: [
      "Incapacidad Permanente Absoluta",
      "Incapacidad Temporal",
      "Incapacidad Permanente Total",
      "Subsidio por enfermedad grave"
    ],
    correcta: 0,
    explicacion: " La correcta es Incapacidad Permanente Absoluta porque la incapacidad permanente absoluta impide realizar cualquier profesión u oficio."
  },
  {
    enunciado: "¿Cuál es el requisito mínimo de cotización para acceder a la jubilación ordinaria con 65 años en 2025?",
    opciones: [
      "30 años",
      "38 años y 6 meses",
      "40 años",
      "25 años"
    ],
    correcta: 1,
    explicacion: " La correcta es 38 años y 6 meses porque para jubilarse a los 65 años en 2025 se exige una carrera larga de cotización: 38 años y 3/6 meses según el esquema estudiado."
  },
  {
    enunciado: "Una trabajadora deja de trabajar por riesgo durante la lactancia. ¿Qué duración tiene la prestación?",
    opciones: [
      "Hasta que el hijo tenga 12 meses",
      "Hasta que el hijo tenga 15 años",
      "Hasta que el hijo tenga 9 meses",
      "Hasta que el hijo tenga 18 meses"
    ],
    correcta: 2,
    explicacion: " La correcta es Hasta que el hijo tenga 9 meses porque el riesgo durante la lactancia se protege hasta que el hijo cumple 9 meses."
  },
  {
    enunciado: "¿Cuál es la cuantía de la prestación por nacimiento y cuidado del menor?",
    opciones: [
      "75% de la base reguladora",
      "50% de la base reguladora",
      "Variable según el caso",
      "100% de la base reguladora"
    ],
    correcta: 3,
    explicacion: " La correcta es 100% de la base reguladora porque la prestación por nacimiento y cuidado del menor equivale al 100 % de la base reguladora."
  },
  {
    enunciado: "¿Cuánto debe haber cotizado una madre de 34 años para acceder a la prestación por nacimiento y cuidado del menor?",
    opciones: [
      "360 días a lo largo de la vida laboral",
      "180 días a lo largo de toda su vida laboral",
      "90 días en los últimos 7 años",
      "No es necesaria cotización previa"
    ],
    correcta: 0,
    explicacion: " La correcta es 360 días a lo largo de la vida laboral porque para mayores de 26 años, se exige 180 días en los últimos 7 años o 360 días en toda la vida laboral; la opción del temario recoge los 360 días."
  },
  {
    enunciado: "Un trabajador en incapacidad temporal por enfermedad común, ¿cuánto percibe el día 19 de su baja?",
    opciones: [
      "60% de la base reguladora (empresa)",
      "60% de la base reguladora (INSS o mutua)",
      "55% de la base reguladora (INSS o mutua)",
      "75% de la base reguladora (INSS o mutua)"
    ],
    correcta: 1,
    explicacion: " La correcta es 60% de la base reguladora (INSS o mutua) porque el día 19 de baja por enfermedad común se cobra el 60 % de la base reguladora a cargo del INSS o mutua."
  },
  {
    enunciado: "¿Cuál es el porcentaje de pensión por incapacidad permanente total?",
    opciones: [
      "1",
      "0.75",
      "0.55",
      "0.33"
    ],
    correcta: 2,
    explicacion: " La correcta es 0.55 porque la incapacidad permanente total tiene una pensión general del 55 % de la base reguladora."
  },
  {
    enunciado: "¿Qué prestación está dirigida a compensar las interrupciones laborales por cuidado de hijos?",
    opciones: [
      "Prestación por maternidad",
      "Prestación por lactancia",
      "Ayuda familiar",
      "Complemento para la reducción de la brecha de género"
    ],
    correcta: 3,
    explicacion: " La correcta es Complemento para la reducción de la brecha de género porque el complemento para la reducción de la brecha de género compensa el perjuicio en la carrera de cotización por el cuidado de hijos."
  },
  {
    enunciado: "¿Qué colectivo tiene acceso al régimen de mutualidades como MUFACE o ISFAS?",
    opciones: [
      "Funcionarios",
      "Autónomos",
      "Trabajadores agrarios",
      "Empleados del hogar"
    ],
    correcta: 0,
    explicacion: " La correcta es Funcionarios porque los funcionarios se integran en mutualidades administrativas como MUFACE o ISFAS."
  },
  {
    enunciado: "¿Cuál es la principal fuente de financiación del sistema de Seguridad Social?",
    opciones: [
      "Subvenciones del Estado",
      "Cotizaciones sociales",
      "Aportaciones sindicales",
      "Donaciones privadas"
    ],
    correcta: 1,
    explicacion: " La correcta es Cotizaciones sociales porque la fuente principal de financiación de la Seguridad Social son las cotizaciones sociales."
  },
  {
    enunciado: "¿Cuánto cobrará un trabajador de prestación por desempleo a partir de día 180?",
    opciones: [
      "0.5",
      "0.8",
      "0.6",
      "0.75"
    ],
    correcta: 2,
    explicacion: " La correcta es 0.6 porque a partir del día 181 de prestación contributiva por desempleo se cobra el 60 % de la base reguladora."
  },
  {
    enunciado: "¿Cuál es la norma básica que regula las relaciones laborales en España?",
    opciones: [
      "Código Civil",
      "Ley General Tributaria",
      "Estatuto Básico del Empleado Público",
      "Estatuto de los Trabajadores"
    ],
    correcta: 3,
    explicacion: " La correcta es Estatuto de los Trabajadores porque el Estatuto de los Trabajadores es la norma básica que regula las relaciones laborales comunes en España."
  },
  {
    enunciado: "El Derecho del Trabajo regula:",
    opciones: [
      "Las relaciones entre empresarios y trabajadores",
      "Solo las relaciones entre empresas",
      "Las relaciones entre consumidores y empresas",
      "Solo las relaciones con la Administración"
    ],
    correcta: 0,
    explicacion: " La correcta es Las relaciones entre empresarios y trabajadores porque el Derecho del Trabajo regula la relación entre empresarios y trabajadores asalariados."
  },
  {
    enunciado: "Para que exista relación laboral deben darse ciertos elementos. ¿Cuál de los siguientes es uno de ellos?",
    opciones: [
      "Competencia empresarial",
      "Voluntariedad",
      "Independencia",
      "Autonomía"
    ],
    correcta: 1,
    explicacion: " La correcta es Voluntariedad porque la voluntariedad es uno de los elementos esenciales de la relación laboral junto a dependencia, ajenidad, retribución y prestación personal."
  },
  {
    enunciado: "Un trabajador presta sus servicios libremente sin imposición. ¿Qué elemento de la relación laboral se cumple?",
    opciones: [
      "Dependencia",
      "Remuneración",
      "Voluntariedad",
      "Ajeneidad"
    ],
    correcta: 2,
    explicacion: " La correcta es Voluntariedad porque si el trabajador presta servicios libremente sin imposición se cumple la voluntariedad."
  },
  {
    enunciado: "Cuando el trabajador está sometido a la organización del empresario se habla de:",
    opciones: [
      "Remuneración",
      "Jerarquía normativa",
      "Ajenidad",
      "Dependencia"
    ],
    correcta: 3,
    explicacion: " La correcta es Dependencia porque la dependencia existe cuando el trabajador se somete a la organización, órdenes y control del empresario."
  },
  {
    enunciado: "Cuando los beneficios y riesgos del negocio pertenecen al empresario hablamos de:",
    opciones: [
      "Ajenidad",
      "Dependencia",
      "Personalidad",
      "Subordinación jurídica"
    ],
    correcta: 0,
    explicacion: " La correcta es Ajenidad porque la ajenidad significa que los frutos y riesgos del negocio pertenecen al empresario, no al trabajador."
  },
  {
    enunciado: "¿Cuál de las siguientes situaciones no se considera relación laboral?",
    opciones: [
      "Empleado administrativo en una empresa",
      "Trabajo voluntario en una ONG sin salario",
      "Dependiente en una tienda",
      "Trabajador contratado en una empresa"
    ],
    correcta: 1,
    explicacion: " La correcta es Trabajo voluntario en una ONG sin salario porque el trabajo voluntario sin salario no es relación laboral porque falta la retribución."
  },
  {
    enunciado: "¿Cuál de los siguientes colectivos tiene una relación laboral excluida?",
    opciones: [
      "Personal del hogar",
      "Alta dirección",
      "Funcionarios públicos",
      "Deportistas profesionales"
    ],
    correcta: 2,
    explicacion: " La correcta es Funcionarios públicos porque los funcionarios públicos están excluidos del ámbito laboral común porque se rigen por Derecho Administrativo."
  },
  {
    enunciado: "¿Cuál de los siguientes casos se considera relación laboral especial?",
    opciones: [
      "Funcionarios",
      "Trabajo por amistad",
      "Trabajo familiar hasta segundo grado",
      "Deportistas profesionales"
    ],
    correcta: 3,
    explicacion: " La correcta es Deportistas profesionales porque los deportistas profesionales son relación laboral especial con regulación propia."
  },
  {
    enunciado: "Los trabajos realizados por amistad o buena vecindad se consideran:",
    opciones: [
      "Relación laboral excluida",
      "Relación laboral común",
      "Relación laboral especial",
      "Relación funcional"
    ],
    correcta: 0,
    explicacion: " La correcta es Relación laboral excluida porque los trabajos por amistad, benevolencia o buena vecindad están excluidos porque no hay obligación laboral retribuida."
  },
  {
    enunciado: "Un administrador de una sociedad mercantil normalmente tiene una relación:",
    opciones: [
      "Laboral común",
      "Excluida del ámbito laboral",
      "Laboral especial",
      "Funcionarial"
    ],
    correcta: 1,
    explicacion: " La correcta es Excluida del ámbito laboral porque el administrador societario que solo realiza funciones de dirección o administración queda excluido del ámbito laboral común."
  },
  {
    enunciado: "Dentro de la jerarquía normativa laboral, ¿qué norma tiene mayor rango?",
    opciones: [
      "Reglamento",
      "Contrato de trabajo",
      "Constitución",
      "Convenio colectivo"
    ],
    correcta: 2,
    explicacion: " La correcta es Constitución porque la Constitución es la norma superior dentro de la jerarquía normativa laboral."
  },
  {
    enunciado: "¿Cuál de las siguientes normas tiene rango de ley?",
    opciones: [
      "Circular administrativa",
      "Orden ministerial",
      "Instrucción",
      "Real Decreto-ley"
    ],
    correcta: 3,
    explicacion: " La correcta es Real Decreto-ley porque el Real Decreto-ley tiene rango de ley."
  },
  {
    enunciado: "El Estatuto de los Trabajadores es un ejemplo de:",
    opciones: [
      "Norma con rango de ley",
      "Reglamento",
      "Tratado Internacional",
      "Uso y costumbre"
    ],
    correcta: 0,
    explicacion: " La correcta es Norma con rango de ley porque el Estatuto de los Trabajadores es una norma con rango de ley."
  },
  {
    enunciado: "Los convenios colectivos forman parte de:",
    opciones: [
      "Jurisprudencia",
      "Autonomía colectiva",
      "Reglamentos",
      "Derecho internacional"
    ],
    correcta: 1,
    explicacion: " La correcta es Autonomía colectiva porque los convenios colectivos son expresión de la autonomía colectiva entre representantes de trabajadores y empresarios."
  },
  {
    enunciado: "Los usos y costumbres laborales se aplican cuando:",
    opciones: [
      "Lo decide el empresario",
      "El trabajador lo solicita",
      "La ley no regula una situación",
      "Lo establece el contrato"
    ],
    correcta: 2,
    explicacion: " La correcta es La ley no regula una situación porque los usos y costumbres se aplican de forma supletoria cuando no hay norma aplicable y siempre que sean lícitos."
  },
  {
    enunciado: "La jurisprudencia laboral está formada por:",
    opciones: [
      "Convenios colectivos",
      "Reglamentos",
      "Órdenes ministeriales",
      "Sentencias del Tribunal Supremo"
    ],
    correcta: 3,
    explicacion: " La correcta es Sentencias del Tribunal Supremo porque la jurisprudencia laboral está formada principalmente por sentencias del Tribunal Supremo que interpretan las normas."
  },
  {
    enunciado: "Las normas de la Unión Europea forman parte de:",
    opciones: [
      "Fuentes externas del derecho laboral",
      "Autonomía colectiva",
      "Usos y costumbres",
      "Fuentes internas"
    ],
    correcta: 0,
    explicacion: " La correcta es Fuentes externas del derecho laboral porque las normas de la Unión Europea son fuentes externas del Derecho Laboral."
  },
  {
    enunciado: "¿Cuál de los siguientes no es un principio de aplicación de las normas laborales?",
    opciones: [
      "Norma mínima",
      "Principio de productividad",
      "Norma más favorable",
      "In dubio pro operario"
    ],
    correcta: 1,
    explicacion: " La correcta es Principio de productividad porque la productividad no es un principio de aplicación de normas laborales; sí lo son norma mínima, norma más favorable e in dubio pro operario."
  },
  {
    enunciado: "El principio de norma mínima significa que:",
    opciones: [
      "Se aplican siempre las normas más antiguas",
      "La empresa decide qué norma aplicar",
      "Solo se puede mejorar lo establecido en normas superiores",
      "Las normas pueden empeorar la ley"
    ],
    correcta: 2,
    explicacion: " La correcta es Solo se puede mejorar lo establecido en normas superiores porque la norma mínima implica que las normas inferiores solo pueden mejorar los mínimos fijados por normas superiores."
  },
  {
    enunciado: "El principio de norma más favorable se aplica cuando:",
    opciones: [
      "La empresa quiere modificar el contrato",
      "El trabajador cambia de empresa",
      "Hay dudas en una norma",
      "Hay dos normas aplicables al mismo caso"
    ],
    correcta: 3,
    explicacion: " La correcta es Hay dos normas aplicables al mismo caso porque la norma más favorable se aplica cuando existen varias normas aplicables y se escoge la que beneficia más al trabajador."
  },
  {
    enunciado: "El principio in dubio pro operario significa que:",
    opciones: [
      "Se interpreta la norma a favor del trabajador cuando hay duda",
      "Decide el empresario",
      "Se aplica siempre el convenio colectivo",
      "Se aplica la norma más antigua"
    ],
    correcta: 0,
    explicacion: " La correcta es Se interpreta la norma a favor del trabajador cuando hay duda porque in dubio pro operario significa interpretar la norma en el sentido más favorable al trabajador cuando existe duda interpretativa."
  },
  {
    enunciado: "El principio de irrenunciabilidad de derechos implica que:",
    opciones: [
      "El trabajador puede renuncia al salario mínimo",
      "El trabajador no puede renunciar a derechos reconocidos por la ley",
      "La empresa puede eliminar derechos si el trabajador acepta",
      "El trabajador puede renunciar a vacaciones"
    ],
    correcta: 1,
    explicacion: " La correcta es El trabajador no puede renunciar a derechos reconocidos por la ley porque la irrenunciabilidad impide que el trabajador renuncie válidamente a derechos reconocidos por ley o convenio."
  },
  {
    enunciado: "Una empresa ofrece 35 días de vacaciones aunque el convenio establece 30. ¿Qué principio se aplica?",
    opciones: [
      "Jerarquía normativa",
      "Norma mínima",
      "Condición más beneficiosa",
      "Usos y costumbres"
    ],
    correcta: 2,
    explicacion: " La correcta es Condición más beneficiosa porque si la empresa concede voluntariamente una mejora superior a la del convenio, puede convertirse en condición más beneficiosa."
  },
  {
    enunciado: "Si un trabajador tiene dos convenios aplicables y uno establece mejores condiciones salariales:",
    opciones: [
      "Se aplica el más antiguo",
      "Decide la empresa",
      "Se aplica el de menor rango",
      "Se aplica el más favorable al trabajador"
    ],
    correcta: 3,
    explicacion: " La correcta es Se aplica el más favorable al trabajador porque ante dos convenios aplicables se aplica el más favorable para el trabajador."
  },
  {
    enunciado: "Si una norma puede interpretarse de dos formas y una beneficia más al trabajador:",
    opciones: [
      "Se aplica la interpretación más favorable al trabajador",
      "Se aplica la más restrictiva",
      "Decide el empresario",
      "Se aplica el convenio colectivo"
    ],
    correcta: 0,
    explicacion: " La correcta es Se aplica la interpretación más favorable al trabajador porque si una norma admite dos interpretaciones, se aplica la más favorable al trabajador por in dubio pro operario."
  },
  {
    enunciado: "Un trabajador firma un documento renunciando a sus vacaciones anuales. Según el derecho laboral:",
    opciones: [
      "Es válido si lo firma voluntariamente",
      "No es válido por el principio de irrenunciabilidad",
      "Es válido si lo permite la empresa",
      "Es válido si lo autoriza el convenio"
    ],
    correcta: 1,
    explicacion: " La correcta es No es válido por el principio de irrenunciabilidad porque renunciar a vacaciones no es válido porque las vacaciones son un derecho mínimo e irrenunciable."
  },
  {
    enunciado: "Un hijo trabaja ocasionalmente en el negocio familiar conviviendo con los padres. Se considera:",
    opciones: [
      "Relación laboral común",
      "Relación laboral especial",
      "Relación laboral excluida",
      "Relación funcionarial"
    ],
    correcta: 2,
    explicacion: " La correcta es Relación laboral excluida porque el trabajo familiar hasta segundo grado, con convivencia y sin salario real, está excluido de la relación laboral."
  },
  {
    enunciado: "Una persona vende productos para una empresa pero asume el riesgo económico de la operación. Se considera:",
    opciones: [
      "Relación laboral común",
      "Relación laboral especial",
      "Relación funcional",
      "Relación laboral excluida"
    ],
    correcta: 3,
    explicacion: " La correcta es Relación laboral excluida porque si la persona asume el riesgo económico de la operación no hay ajenidad, por lo que no es relación laboral común."
  }
];