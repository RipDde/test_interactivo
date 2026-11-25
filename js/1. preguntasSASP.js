const preguntasSOSTENIBILIDAD = [
    // Tema 1: Sostenibilidad y desarrollo sostenible
    {
        enunciado: "Según el Informe Brundtland, la sostenibilidad es la capacidad de...",
        opciones: ["Proteger el medio ambiente aunque eso frene la actividad económica", "Crecer económicamente sin límite usando energías renovables", "Cumplir la legislación ambiental vigente en cada país", "Satisfacer las necesidades del presente sin comprometer las de las generaciones futuras"],
        correcta: 3,
        explicacion: "La correcta es Satisfacer las necesidades del presente sin comprometer las de las generaciones futuras porque el Informe Brundtland define el desarrollo sostenible como aquel que permite cubrir las necesidades actuales sin poner en peligro la capacidad de las futuras generaciones para satisfacer las suyas. Para ello, deben equilibrarse las dimensiones económica, social y ambiental."
    },
    {
        enunciado: "El informe «Nuestro futuro común», conocido como Informe Brundtland, se publicó en...",
        opciones: ["1992", "1987", "2015", "1972"],
        correcta: 1,
        explicacion: "La correcta es 1987 porque ese año se publicó el Informe Brundtland, titulado Nuestro futuro común, elaborado por la Comisión Mundial sobre Medio Ambiente y Desarrollo de las Naciones Unidas. Este documento popularizó el concepto de desarrollo sostenible y destacó la necesidad de compatibilizar el desarrollo económico, la protección ambiental y el bienestar social."
    },
    {
        enunciado: "Una acción que reduce emisiones a costa de destruir empleo...",
        opciones: ["Es sostenible si la empresa obtiene beneficios", "Es sostenible porque mejora la dimensión ambiental", "No es sostenible: solo traslada el problema", "Es sostenible si se comunica con datos"],
        correcta: 2,
        explicacion: "La correcta es No es sostenible: solo traslada el problema porque la sostenibilidad debe tener en cuenta las dimensiones ambiental, social y económica. Una medida que reduce emisiones, pero provoca graves consecuencias sociales, como la destrucción de empleo, no representa una solución verdaderamente equilibrada, ya que mejora un aspecto mientras perjudica otro."
    },
    {
        enunciado: "La responsabilidad social corporativa (RSC) se define como...",
        opciones: ["La asunción voluntaria de compromisos sociales y ambientales más allá de la ley", "Una estrategia integrada en todo el negocio y sujeta a la obligación de informar", "El cumplimiento obligatorio de la normativa ambiental", "El sistema de certificación ambiental de la empresa"],
        correcta: 0,
        explicacion: "La correcta es La asunción voluntaria de compromisos sociales y ambientales más allá de la ley porque la responsabilidad social corporativa (RSC) consiste en que las empresas adopten iniciativas para mejorar su impacto social y ambiental, superando las obligaciones legales mínimas. Puede incluir medidas de eficiencia energética, condiciones laborales responsables y colaboración con la comunidad."
    },
    {
        enunciado: "Para el departamento de sistemas, pasar de la RSC a la sostenibilidad integrada supone...",
        opciones: ["Donar los equipos retirados y organizar jornadas de voluntariado", "Sustituir la compra de servidores por su alquiler", "Incorporar la sostenibilidad en el diseño de la infraestructura y en los acuerdos de nivel de servicio, de forma verificable", "Dejar de medir el consumo para no tener que informar"],
        correcta: 2,
        explicacion: "La correcta es Incorporar la sostenibilidad en el diseño de la infraestructura y en los acuerdos de nivel de servicio, de forma verificable porque la sostenibilidad integrada implica que los criterios ambientales y sociales formen parte de las decisiones habituales del departamento de sistemas. Por ejemplo, diseñar infraestructuras energéticamente eficientes, controlar el consumo de los servidores y establecer indicadores medibles en los acuerdos de nivel de servicio (SLA), en lugar de limitarse a acciones voluntarias aisladas."
    },
    {
        enunciado: "Según el libro, un integrador de sistemas de Alcobendas es sostenible si...",
        opciones: ["Tiene la certificación ISO 9001", "Compensa todas sus emisiones", "Crea valor económico controlando su impacto ambiental y social", "Lo anuncia en su web y en sus ofertas"],
        correcta: 2,
        explicacion: "La correcta es Crea valor económico controlando su impacto ambiental y social porque una empresa sostenible debe equilibrar las tres dimensiones de la sostenibilidad: económica, ambiental y social. No basta con obtener beneficios, compensar emisiones o anunciar compromisos ecológicos; debe generar valor económico mientras controla y reduce sus impactos ambientales y sociales."
    },
    {
        enunciado: "La Cumbre de la Tierra de Río de Janeiro (1992) aprobó...",
        opciones: ["Los 17 Objetivos de Desarrollo Sostenible", "El principio de precaución y el de quien contamina paga", "La definición de desarrollo sostenible", "Los primeros compromisos cuantificados de emisiones"],
        correcta: 1,
        explicacion: "La correcta es El principio de precaución y el de quien contamina paga porque la Cumbre de Río de Janeiro de 1992 aprobó la Declaración de Río sobre el Medio Ambiente y el Desarrollo. Esta recoge el principio de precaución, que propone actuar ante posibles daños ambientales graves aunque no exista certeza científica absoluta, y el principio de quien contamina paga, según el cual el responsable de la contaminación debe asumir sus costes."
    },
    {
        enunciado: "¿Qué hito fijó los primeros compromisos cuantificados de emisiones?",
        opciones: ["El Protocolo de Kioto (1997)", "El Acuerdo de París (2015)", "La Conferencia de Estocolmo (1972)", "El Informe Brundtland (1987)"],
        correcta: 0,
        explicacion: "La correcta es El Protocolo de Kioto (1997) porque este acuerdo internacional estableció compromisos cuantificados y jurídicamente vinculantes de reducción de gases de efecto invernadero para los países industrializados participantes. Fue adoptado en 1997 y entró en vigor en 2005, convirtiéndose en un hito importante de la lucha internacional contra el cambio climático."
    },
    {
        enunciado: "La Agenda 2030 contiene...",
        opciones: ["12 ODS y 100 metas", "169 ODS agrupados en 17 metas", "17 ODS sin metas concretas", "17 ODS desglosados en 169 metas con indicadores de seguimiento"],
        correcta: 3,
        explicacion: "La correcta es 17 ODS desglosados en 169 metas con indicadores de seguimiento porque la Agenda 2030 de Naciones Unidas establece 17 Objetivos de Desarrollo Sostenible (ODS) que abarcan cuestiones ambientales, sociales y económicas. Estos objetivos se desarrollan mediante 169 metas concretas cuyo cumplimiento puede evaluarse utilizando indicadores de seguimiento."
    },
    {
        enunciado: "¿Cuándo se aprobaron los Objetivos de Desarrollo Sostenible?",
        opciones: ["En 1992, en la Cumbre de Río", "En 1987, con el Informe Brundtland", "En 2015, con la Agenda 2030, por la Asamblea General de Naciones Unidas", "En 1972, en la Conferencia de Estocolmo"],
        correcta: 2,
        explicacion: "La correcta es En 2015, con la Agenda 2030, por la Asamblea General de Naciones Unidas porque los 17 Objetivos de Desarrollo Sostenible (ODS) fueron aprobados el 25 de septiembre de 2015 como parte de la Agenda 2030. Su finalidad es orientar los esfuerzos internacionales para combatir la pobreza, proteger el planeta y promover el bienestar social y económico hasta el año 2030."
    },
    {
        enunciado: "Un cliente acusa a tu empresa de «incumplir el ODS 13». Según el libro, ¿qué es lo correcto?",
        opciones: ["El ODS 13 obliga a compensar todas las emisiones", "Naciones Unidas puede sancionar directamente a la empresa", "Los ODS solo obligan a las empresas de más de 250 trabajadores", "Los ODS no son normas jurídicas; se incumple la ley que los desarrolla"],
        correcta: 3,
        explicacion: "La correcta es Los ODS no son normas jurídicas; se incumple la ley que los desarrolla porque los Objetivos de Desarrollo Sostenible son compromisos y metas internacionales que orientan las políticas públicas y empresariales, pero no constituyen por sí mismos normas jurídicas directamente sancionables para las empresas. Las obligaciones legales aparecen cuando se aprueban leyes y reglamentos que desarrollan esos objetivos. El ODS 13 se refiere a la acción por el clima."
    },
    {
        enunciado: "Colocar los diecisiete logotipos de los ODS sin ninguna acción detrás se llama...",
        opciones: ["Efecto rebote", "Pinkwashing", "Rainbow washing", "Efecto arrastre"],
        correcta: 2,
        explicacion: "La correcta es Rainbow washing porque consiste en utilizar los colores y símbolos de los Objetivos de Desarrollo Sostenible (ODS) para aparentar compromiso con la sostenibilidad sin realizar acciones reales que lo respalden. Es una forma de comunicación engañosa que busca mejorar la imagen de una organización sin demostrar resultados concretos."
    },
    {
        enunciado: "¿Por qué destaca el ODS 12 (producción y consumo responsables) para el sector?",
        opciones: ["Por la composición de los equipos técnicos", "Por la energía que consume la infraestructura", "Por las condiciones de trabajo de la cadena de proveedores", "Porque la compra y la retirada del equipamiento son su impacto material más claro"],
        correcta: 3,
        explicacion: "La correcta es Porque la compra y la retirada del equipamiento son su impacto material más claro porque el ODS 12 promueve la producción y el consumo responsables. En el sector informático, esto implica adquirir equipos de forma sostenible, prolongar su vida útil, reutilizar componentes y gestionar correctamente los residuos electrónicos (RAEE). El objetivo es reducir el impacto ambiental durante todo el ciclo de vida de los dispositivos."
    },
    {
        enunciado: "¿Dónde tiene su origen el término ASG?",
        opciones: ["En la Agenda 2030", "En el activismo ecologista de los años setenta", "En las finanzas: un informe de 2004 promovido por el Pacto Mundial con entidades financieras", "En el Informe Brundtland de 1987"],
        correcta: 2,
        explicacion: "La correcta es En las finanzas: un informe de 2004 promovido por el Pacto Mundial con entidades financieras porque el término ASG (Ambiental, Social y Gobernanza) se popularizó a partir del informe Who Cares Wins de 2004, impulsado por el Pacto Mundial de Naciones Unidas junto con instituciones financieras. Su objetivo era incorporar factores ambientales, sociales y de gobernanza en las decisiones de inversión y en la evaluación de riesgos empresariales."
    },
    {
        enunciado: "La G de los criterios ASG se refiere a...",
        opciones: ["Las normas gubernamentales que debe cumplir la empresa", "La gobernanza: ética, transparencia, control de la dirección, cumplimiento y seguridad de los datos", "La dimensión económica de la sostenibilidad", "La relación con las administraciones públicas"],
        correcta: 1,
        explicacion: "La correcta es La gobernanza: ética, transparencia, control de la dirección, cumplimiento y seguridad de los datos porque la G de ASG representa la forma en que una organización se dirige, supervisa y controla. Incluye aspectos como la ética empresarial, la transparencia, la prevención de la corrupción, el cumplimiento normativo, la responsabilidad de los directivos y la protección de la información. No se refiere exclusivamente a las leyes del Gobierno."
    },
    {
        enunciado: "En una empresa de servicios informáticos, «revisiones de acceso registradas e incidencias de seguridad» es un indicador...",
        opciones: ["Social", "Económico", "Ambiental", "De gobernanza"],
        correcta: 3,
        explicacion: "La correcta es De gobernanza porque los indicadores de gobernanza evalúan cómo una organización gestiona sus políticas, controles, responsabilidades y procedimientos. Registrar las revisiones de acceso y las incidencias de seguridad permite supervisar el cumplimiento de las normas internas, controlar los riesgos y garantizar una gestión responsable de la información."
    },
    {
        enunciado: "Según el libro, la gobernanza «sostiene a las otras dos letras» porque...",
        opciones: ["Es la única de las tres que exige la ley", "Sin reglas internas, responsables y control, los compromisos dependen de quien esté de turno", "Es la que más dinero ahorra a la empresa", "Engloba a la A y a la S como un círculo exterior"],
        correcta: 1,
        explicacion: "La correcta es Sin reglas internas, responsables y control, los compromisos dependen de quien esté de turno porque la gobernanza establece los procedimientos, responsabilidades y mecanismos de supervisión necesarios para cumplir los compromisos ambientales y sociales. Sin una estructura de control, las medidas de sostenibilidad pueden depender de decisiones individuales y no mantenerse a largo plazo."
    },
    {
        enunciado: "En la tabla de oportunidades, «acceso a licitaciones y grandes cuentas» se concreta en...",
        opciones: ["Cumplir los criterios que ya piden los pliegos", "Que la empresa tenga sus cuentas al día", "Atraer talento joven con coherencia interna", "Que la ciudadanía pueda revisar las cuentas del ayuntamiento"],
        correcta: 0,
        explicacion: "La correcta es Cumplir los criterios que ya piden los pliegos porque las licitaciones públicas y los contratos con grandes empresas pueden exigir el cumplimiento de determinados requisitos ambientales, sociales y de gobernanza. Las empresas que incorporan estos criterios a su actividad pueden acceder a oportunidades comerciales que requieren acreditar compromisos y resultados de sostenibilidad."
    },
    {
        enunciado: "La teoría de los grupos de interés (stakeholders) procede de...",
        opciones: ["Friedman, en 1970", "La Comisión Brundtland, en 1987", "Freeman, en los años ochenta", "El Pacto Mundial, en 2004"],
        correcta: 2,
        explicacion: "La correcta es Freeman, en los años ochenta porque R. Edward Freeman desarrolló y popularizó la teoría de los grupos de interés en su obra Strategic Management: A Stakeholder Approach, publicada en 1984. Esta teoría sostiene que una empresa debe considerar los intereses de todos los grupos afectados por su actividad, como trabajadores, clientes, proveedores, accionistas y comunidades, y no centrarse exclusivamente en los beneficios de sus propietarios."
    },
    {
        enunciado: "¿Cuál de estos es un grupo de interés interno de una empresa de sistemas?",
        opciones: ["Las entidades financieras", "Los proveedores de nube", "Las personas usuarias de los sistemas", "El propietario del centro de datos"],
        correcta: 2,
        explicacion: "La correcta es Las personas usuarias de los sistemas porque, en este contexto, se refiere a los usuarios internos que utilizan los recursos informáticos de la empresa para desarrollar su trabajo. Estos forman parte de los grupos de interés internos, junto con los empleados y la dirección. En cambio, los proveedores de nube y las entidades financieras son grupos de interés externos."
    },
    {
        enunciado: "En la matriz de poder e interés, un grupo con poco poder y mucho interés se debe...",
        opciones: ["Informar", "Gestionar de cerca", "Vigilar", "Mantener satisfecho"],
        correcta: 0,
        explicacion: "La correcta es Informar porque en la matriz de poder e interés los grupos con poco poder de influencia, pero mucho interés en las actividades de la organización, deben recibir información periódica y mantenerse al tanto de las decisiones. Aunque tienen poco poder para influir directamente, necesitan conocer los cambios que pueden afectarles."
    },
    {
        enunciado: "En la matriz de poder e interés, un grupo con mucho poder y poco interés se debe...",
        opciones: ["Vigilar", "Gestionar de cerca", "Informar", "Mantener satisfecho"],
        correcta: 3,
        explicacion: "La correcta es Mantener satisfecho porque los grupos con mucho poder tienen capacidad para influir significativamente en la organización, aunque su interés en las actividades diarias sea reducido. Por ello, conviene atender sus necesidades y mantener una relación positiva sin proporcionarles información excesiva. Si su interés aumenta, pueden pasar a necesitar una gestión más cercana."
    },
    {
    enunciado: "Un proveedor de servicios gestionados tiene la mejor propuesta técnica, pero ningún dato de consumo. ¿Qué suele pasarle?",
    opciones: ["Que gane, porque prima la calidad técnica", "Nada, porque las pymes no están obligadas a informar", "Que quede fuera de una homologación por el efecto arrastre de la cadena de suministro", "Que lo sancione la Administración por no tener datos"],
    correcta: 2,
    explicacion: "La correcta es Que quede fuera de una homologación por el efecto arrastre de la cadena de suministro porque las grandes empresas pueden exigir a sus proveedores información sobre su consumo energético, emisiones e impacto ambiental. Aunque una pyme no esté obligada directamente a presentar determinados informes, sus clientes pueden exigirle esos datos para cumplir sus propios compromisos de sostenibilidad. Esto se conoce como efecto arrastre."
},
{
    enunciado: "Una ola de calor que satura la refrigeración del centro de datos es un riesgo...",
    opciones: ["Físico", "Reputacional", "De transición", "Legal"],
    correcta: 0,
    explicacion: "La correcta es Físico porque los riesgos físicos relacionados con el cambio climático son aquellos provocados directamente por fenómenos ambientales, como olas de calor, inundaciones o tormentas. En un centro de datos, las temperaturas extremas pueden saturar la refrigeración, provocar sobrecalentamientos y afectar a la disponibilidad de los servidores. Los riesgos de transición, en cambio, están relacionados con cambios normativos, tecnológicos o económicos."
},
{
    enunciado: "Según el libro, el riesgo legal más específico del sector es...",
    opciones: ["Perder un concurso público por no cumplir los pliegos", "La rotación alta en el centro de atención a usuarios", "Que un competidor haga alegaciones falsas contra la empresa", "El greenwashing: comunicar un compromiso ambiental que la propia empresa no puede acreditar"],
    correcta: 3,
    explicacion: "La correcta es El greenwashing: comunicar un compromiso ambiental que la propia empresa no puede acreditar porque realizar afirmaciones ambientales engañosas o sin pruebas suficientes puede generar consecuencias legales para una empresa. Por ejemplo, anunciar que un centro de datos es ecológico sin disponer de datos verificables que lo demuestren puede vulnerar la normativa aplicable sobre publicidad y prácticas comerciales engañosas."
},
{
    enunciado: "¿Cuál de estas alegaciones es defendible según las cuatro reglas del tema?",
    opciones: ["«Alojamiento ecológico»", "«El 80 % de la electricidad del centro de datos procede de fuentes renovables certificadas», con la evidencia archivada", "«Hemos cambiado las bombillas de la oficina», sin mencionar el consumo del CPD", "«Cumplimos el Real Decreto de RAEE: somos sostenibles»"],
    correcta: 1,
    explicacion: "La correcta es «El 80 % de la electricidad del centro de datos procede de fuentes renovables certificadas», con la evidencia archivada porque es una afirmación concreta, cuantificable y respaldada por pruebas verificables. Las alegaciones ambientales deben ser claras, proporcionadas y demostrables. No basta con utilizar términos genéricos como ecológico, cumplir la legislación obligatoria o destacar mejoras menores ocultando impactos más importantes."
},
{
    enunciado: "Una empresa sustituye cada año 200 puestos a 600 €. Si alarga dos años la vida útil del 40 % del parque, ¿cuánta compra anual difiere?",
    opciones: ["120.000 €", "24.000 €", "48.000 €", "80.000 €"],
    correcta: 2,
    explicacion: "La correcta es 48.000 € porque primero calculamos el 40 % de los 200 puestos que se sustituyen anualmente: 200 × 0,40 = 80 equipos. Después multiplicamos esos 80 equipos por su coste unitario de 600 €: 80 × 600 = 48.000 €. Por tanto, al prolongar su vida útil, la empresa puede aplazar una compra anual de 48.000 € y reducir la generación de residuos electrónicos."
},
{
    enunciado: "¿Cuál es una métrica ASG bien formulada?",
    opciones: ["«Reducir un 20 % en tres años la huella de carbono del centro de datos de Madrid respecto a 2024, con cálculo verificado»", "«Ser el proveedor más verde de Madrid»", "«Reducir mucho el consumo del CPD lo antes posible»", "«Ser una empresa comprometida con el planeta»"],
    correcta: 0,
    explicacion: "La correcta es «Reducir un 20 % en tres años la huella de carbono del centro de datos de Madrid respecto a 2024, con cálculo verificado» porque establece un objetivo específico, medible, temporal y verificable. Indica qué se quiere reducir, en qué porcentaje, durante cuánto tiempo y respecto a qué año de referencia. Las demás opciones son demasiado generales y no permiten comprobar objetivamente su cumplimiento."
},
{
    enunciado: "Las emisiones de los grupos electrógenos propios de una empresa de sistemas son de...",
    opciones: ["Alcance 3", "Alcance 2", "Ningún alcance: no se contabilizan", "Alcance 1"],
    correcta: 3,
    explicacion: "La correcta es Alcance 1 porque este alcance incluye las emisiones directas de gases de efecto invernadero procedentes de fuentes que pertenecen a la empresa o están bajo su control. Los grupos electrógenos propios producen emisiones al quemar combustible. El alcance 2 corresponde a las emisiones indirectas de la energía adquirida, mientras que el alcance 3 incluye otras emisiones indirectas de la cadena de valor."
},
{
    enunciado: "La ISO 14001 y el reglamento europeo EMAS...",
    opciones: ["Son leyes de obligado cumplimiento para todas las empresas", "Son sistemas certificables que acreditan una gestión ambiental auditada", "Orientan a la empresa sin certificar", "Sirven para estructurar la memoria de sostenibilidad"],
    correcta: 1,
    explicacion: "La correcta es Son sistemas certificables que acreditan una gestión ambiental auditada porque ISO 14001 establece requisitos para implantar y certificar un sistema de gestión ambiental, mientras que EMAS es un sistema europeo de gestión y auditoría ambiental que permite obtener un registro oficial tras la correspondiente verificación. Ambos ayudan a controlar los impactos ambientales, evaluar el cumplimiento y mejorar continuamente la gestión ambiental de una organización."
},

// Tema 2: Sostenibilidad en la empresa de sistemas
{
    enunciado: "¿Cuál de estos NO es uno de los focos de impacto ambiental del sector que recoge el libro?",
    opciones: ["El centro de datos", "La contabilidad de la empresa", "Los eventos y desplazamientos", "El equipamiento y sus residuos"],
    correcta: 1,
    explicacion: "La correcta es La contabilidad de la empresa porque los principales focos de impacto ambiental del sector informático incluyen el consumo energético de los centros de datos, la fabricación y eliminación de equipos electrónicos y las emisiones asociadas a eventos y desplazamientos. La contabilidad es una actividad administrativa y no constituye por sí misma uno de los principales focos de impacto ambiental señalados."
},
{
    enunciado: "Según el libro, el foco ambiental principal del sector es...",
    opciones: ["Los eventos", "Los envases del material", "Los soportes impresos", "El centro de datos"],
    correcta: 3,
    explicacion: "La correcta es El centro de datos porque los centros de procesamiento de datos (CPD) necesitan grandes cantidades de energía eléctrica para mantener operativos los servidores, sistemas de almacenamiento, redes y equipos de refrigeración. Su funcionamiento continuo convierte el consumo energético y las emisiones asociadas en uno de los principales impactos ambientales del sector informático."
},
{
    enunciado: "Un CPD consume energía...",
    opciones: ["Las 8.760 horas del año, y una parte importante se va en refrigeración, que además puede consumir agua", "Solo en horario laboral", "365 horas al año", "Solo para computar, nunca para refrigerar"],
    correcta: 0,
    explicacion: "La correcta es Las 8.760 horas del año, y una parte importante se va en refrigeración, que además puede consumir agua porque un CPD diseñado para funcionar de forma continua necesita electricidad las 24 horas del día durante los 365 días de un año normal. Además de alimentar los servidores y equipos informáticos, debe mantener unas condiciones adecuadas de temperatura mediante sistemas de refrigeración, algunos de los cuales también consumen agua."
},
{
    enunciado: "La eficiencia del uso de la energía de un CPD empeora con...",
    opciones: ["La virtualización y la consolidación", "El apagado de los entornos no productivos", "La sala sobredimensionada, mal sectorizada en pasillos frío y caliente o llena de servidores infrautilizados", "El uso de energía renovable"],
    correcta: 2,
    explicacion: "La correcta es La sala sobredimensionada, mal sectorizada en pasillos frío y caliente o llena de servidores infrautilizados porque estas situaciones provocan un aprovechamiento ineficiente de los recursos. Una separación deficiente del aire frío y caliente aumenta las necesidades de refrigeración, mientras que los servidores infrautilizados consumen electricidad sin aprovechar adecuadamente su capacidad. La virtualización, la consolidación y el apagado de equipos innecesarios pueden mejorar la eficiencia energética."
},
{
    enunciado: "La jerarquía de residuos de la Ley 7/2022 empieza por...",
    opciones: ["El reciclado", "La prevención", "La preparación para la reutilización", "La eliminación"],
    correcta: 1,
    explicacion: "La correcta es La prevención porque la Ley 7/2022 establece una jerarquía de gestión de residuos que prioriza evitar su generación antes de tener que tratarlos. El orden es: prevención, preparación para la reutilización, reciclado, otras formas de valorización y, finalmente, eliminación. Por ejemplo, prolongar la vida útil de un ordenador evita generar residuos electrónicos y tiene prioridad sobre reciclarlo."
},
{
    enunciado: "Todo aparato retirado entra en el Real Decreto 110/2015, que exige...",
    opciones: ["Donarlo obligatoriamente a una ONG", "Inscribirse en el Registro de Productores de envases", "Destruir siempre el equipo físicamente", "Borrado seguro documentado, gestor autorizado y justificante"],
    correcta: 3,
    explicacion: "La correcta es Borrado seguro documentado, gestor autorizado y justificante porque el Real Decreto 110/2015 regula la gestión de los residuos de aparatos eléctricos y electrónicos (RAEE). En el contexto de la retirada definitiva de equipos informáticos, deben protegerse los datos almacenados y garantizar una gestión adecuada mediante los canales autorizados, conservando la documentación correspondiente. La reutilización también puede ser una alternativa cuando el equipo todavía resulta aprovechable."
},
{
    enunciado: "Las cajas, el film, las protecciones y los palés con los que llega cada pedido entran en...",
    opciones: ["El Real Decreto 1055/2022, de envases y residuos de envases", "La Ordenanza 12/2022 de Madrid", "El Real Decreto 110/2015, de RAEE", "La UNE-ISO 20121"],
    correcta: 0,
    explicacion: "La correcta es El Real Decreto 1055/2022, de envases y residuos de envases porque esta normativa regula la prevención y gestión de los residuos procedentes de envases y embalajes. En el sector informático incluye materiales como cajas de cartón, plásticos protectores, film y palés utilizados durante el transporte de equipos. Su objetivo es reducir los residuos y favorecer la reutilización y el reciclaje de estos materiales."
},
{
    enunciado: "Sustituir el manual impreso por documentación en línea...",
    opciones: ["Aumenta el consumo de tóner", "Reduce papel, pero traslada el impacto al foco del centro de datos", "Elimina todo el impacto ambiental", "Está prohibido por la Ordenanza 12/2022"],
    correcta: 1,
    explicacion: "La correcta es Reduce papel, pero traslada el impacto al foco del centro de datos porque sustituir documentos impresos por versiones digitales disminuye el consumo de papel, tinta y otros materiales, pero no elimina completamente el impacto ambiental. La documentación digital requiere servidores, redes y dispositivos que consumen electricidad. Por tanto, parte del impacto ambiental se desplaza del soporte físico a la infraestructura informática."
},
{
    enunciado: "Según el libro, en lo social el sector...",
    opciones: ["Solo afecta a su propia plantilla", "No genera ningún impacto", "Tiene una huella fácil de medir en kilos", "No tiene una huella que se pese: tiene una influencia que se extiende con cada servicio que administra"],
    correcta: 3,
    explicacion: "La correcta es No tiene una huella que se pese: tiene una influencia que se extiende con cada servicio que administra porque el impacto social del sector informático no se mide únicamente mediante cantidades físicas, sino también por sus efectos sobre las personas y las organizaciones. Aspectos como la accesibilidad digital, la protección de datos, la seguridad, las condiciones laborales y la disponibilidad de los servicios afectan tanto a los trabajadores como a los usuarios y a la sociedad."
},
{
    enunciado: "La Ley 34/1988, General de Publicidad, califica de ilícita la publicidad que...",
    opciones: ["Atenta contra la dignidad o vulnera derechos y valores constitucionales", "Se emite en horario infantil", "Utiliza a creadores de contenido", "No está traducida a las lenguas cooficiales"],
    correcta: 0,
    explicacion: "La correcta es Atenta contra la dignidad o vulnera derechos y valores constitucionales porque la Ley 34/1988, General de Publicidad, considera ilícita la publicidad que vulnera la dignidad de las personas o los derechos y valores reconocidos en la Constitución Española. La comunicación comercial debe respetar estos principios y no puede justificar mensajes discriminatorios o contrarios a los derechos fundamentales."
},
{
    enunciado: "El Código de Conducta Publicitaria de Autocontrol, con su consulta previa (copy advice), es un ejemplo de...",
    opciones: ["Ley orgánica", "Reglamento europeo", "Autorregulación del sector", "Corregulación con la Administración sanitaria"],
    correcta: 2,
    explicacion: "La correcta es Autorregulación del sector porque Autocontrol es una organización mediante la cual el propio sector publicitario establece compromisos y normas éticas para promover una publicidad responsable. Su servicio de consulta previa, conocido como copy advice, permite revisar voluntariamente una campaña antes de publicarla para detectar posibles problemas legales o deontológicos. No se trata de una ley ni de un reglamento impuesto directamente por la Administración."
},

//hecha hasta la 11 de 30


];