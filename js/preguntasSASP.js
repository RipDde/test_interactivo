const preguntasSASP = [
  {
    enunciado: "Según el tema, ¿qué supone para el departamento de sistemas pasar de la RSC a la sostenibilidad integrada?",
    opciones: [
        "Donar con más frecuencia los equipos retirados",
        "Incorporar la sostenibilidad en el diseño de la infraestructura",
        "Publicar los logotipos de los ODS en la web",
        "Organizar más jornadas de voluntariado"
    ],
    correcta: 1,
    explicacion: "Donar equipos retirados o hacer voluntariado son las «acciones sueltas» típicas de la RSC. La sostenibilidad es una estrategia integrada, medida con datos y con obligación creciente de informar."
},
{
    enunciado: "Un integrador reduce el consumo del centro de datos, pero para financiarlo despide a parte del equipo técnico. Según el tema...",
    opciones: [
        "Es sostenible, porque lo ambiental va primero",
        "Es sostenible si lo comunica bien",
        "Es sostenible si la empresa gana dinero",
        "No es sostenible: las tres dimensiones deben equilibrarse a la vez; solo traslada el problema"
    ],
    correcta: 3,
    explicacion: "Ambiental, social y económica se equilibran a la vez. Reducir emisiones destruyendo empleo, o crear empleo agotando un recurso, no es sostenible."
},
{
    enunciado: "¿Cuál de estas relaciones entre hito y aportación es CORRECTA?",
    opciones: [
        "Protocolo de Kioto (1997): define el desarrollo sostenible",
        "Estocolmo (1972): aprueba el principio de quien contamina paga",
        "Cumbre de Río (1992): aprueba el principio de precaución y el de quien contamina paga",
        "Informe Brundtland (1987): fija los primeros compromisos cuantificados de emisiones"
    ],
    correcta: 2,
    explicacion: "Estocolmo sitúa el medio ambiente en la agenda; Brundtland define el desarrollo sostenible; Río aprueba esos dos principios; Kioto fija los primeros compromisos cuantificados de emisiones."
},
{
    enunciado: "¿Por qué destaca el ODS 12 (producción y consumo responsables) para una empresa de sistemas?",
    opciones: [
        "Porque la compra y la retirada del equipamiento son su impacto material más claro",
        "Por la energía que consume la infraestructura",
        "Por la composición de los equipos técnicos",
        "Por las condiciones de trabajo en la cadena de proveedores"
    ],
    correcta: 0,
    explicacion: "Las otras opciones justifican otros ODS del sector: el 13 (energía de la infraestructura), el 5 (composición de los equipos) y el 8 (condiciones de trabajo)."
},
{
    enunciado: "Un cliente acusa a tu empresa de «incumplir el ODS 13». Según el tema, ¿qué es lo correcto?",
    opciones: [
        "Los ODS son normas jurídicas y se sancionan directamente",
        "Una empresa no incumple un ODS: incumple la ley que lo desarrolla, como la Ley 7/2021",
        "Los ODS solo obligan a las administraciones de Madrid",
        "Solo se incumple si se publica el logotipo"
    ],
    correcta: 1,
    explicacion: "Los ODS son objetivos políticos que los Estados desarrollan con normativa propia: en España, la Estrategia de Desarrollo Sostenible 2030 y leyes como la de cambio climático."
},
{
    enunciado: "¿Por qué los criterios ASG hablan «el lenguaje del riesgo y del dato»?",
    opciones: [
        "Porque los crearon ingenieros de sistemas",
        "Porque nacieron del activismo ambiental",
        "Porque los impone la Agenda 2030",
        "Porque su origen está en las finanzas: un informe de 2004 del Pacto Mundial con entidades financieras"
    ],
    correcta: 3,
    explicacion: "Se consolidaron con los Principios de Inversión Responsable. Por eso los entienden inversores, bancos y grandes clientes."
},
{
    enunciado: "En una empresa de servicios informáticos, «revisiones de acceso registradas e incidencias de seguridad» es un indicador de...",
    opciones: [
        "Ambiental",
        "Social",
        "Gobernanza",
        "No es un indicador ASG, es solo técnico"
    ],
    correcta: 2,
    explicacion: "Mide los accesos privilegiados y el tratamiento de datos de clientes: gobernanza. Incluye ética, transparencia, control de la dirección, cumplimiento y seguridad de los datos."
},
{
    enunciado: "Según el tema, ¿por qué la gobernanza «sostiene» a las otras dos letras?",
    opciones: [
        "Porque sin reglas, responsables y control, los compromisos dependen de quien esté de turno",
        "Porque es la única que se puede medir",
        "Porque la exige la Agenda 2030",
        "Porque obliga a crear un comité en todas las pymes"
    ],
    correcta: 0,
    explicacion: "En una pyme no hace falta un comité: basta con que alguien tenga el encargo por escrito, un procedimiento y un calendario de revisión."
},
{
    enunciado: "Según el tema, ¿cuál de estos es un grupo de interés INTERNO de una empresa de sistemas?",
    opciones: [
        "El propietario del centro de datos",
        "Las personas usuarias de los sistemas",
        "Los proveedores de nube",
        "Las entidades financieras"
    ],
    correcta: 1,
    explicacion: "Internos: socios, dirección, plantilla y personas usuarias de los sistemas. Externos: clientes, proveedores de equipamiento y nube, propietario del centro de datos, bancos, administraciones y comunidad."
},
{
    enunciado: "En la matriz de poder e interés, un grupo con poco poder y mucho interés se debe...",
    opciones: [
        "Gestionar de cerca",
        "Mantener satisfecho",
        "Vigilar",
        "Informar"
    ],
    correcta: 3,
    explicacion: "Mucho poder y mucho interés: gestionar de cerca. Mucho poder y poco interés: mantener satisfecho. Poco de ambos: vigilar."
},
{
    enunciado: "Un proveedor de servicios gestionados tiene la mejor propuesta técnica, pero ningún dato de consumo. ¿Qué puede pasarle?",
    opciones: [
        "Quedar fuera de una homologación por el efecto arrastre de la cadena de suministro",
        "Nada: si la propuesta técnica es la mejor, gana",
        "Recibir una sanción de la Agenda 2030",
        "Tener que publicar los 17 ODS"
    ],
    correcta: 0,
    explicacion: "Las empresas grandes obligadas a informar trasladan cuestionarios ASG a sus proveedores. Sin datos, el proveedor puede quedar fuera."
},
{
    enunciado: "Según la tabla de riesgos del tema, una «rotación alta en el centro de atención a usuarios» es un riesgo...",
    opciones: [
        "Reputacional",
        "De mercado",
        "De talento",
        "Físico"
    ],
    correcta: 2,
    explicacion: "Es el riesgo de talento (atracción y retención), con probabilidad alta e impacto medio. El de mercado sería quedar fuera de licitaciones con criterios ambientales."
},
{
    enunciado: "Una empresa sustituye cada año 200 puestos de usuario a 600 €. Si alarga dos años la vida útil del 40 % del parque, ¿cuánta compra anual difiere?",
    opciones: [
        "24.000 €",
        "48.000 €",
        "72.000 €",
        "120.000 €"
    ],
    correcta: 1,
    explicacion: "El 40 % de 200 son 80 puestos: 80 × 600 = 48.000 €. La sostenibilidad se defiende con euros y datos, no con adjetivos."
},
{
    enunciado: "¿Cuál de estas alegaciones ambientales es defendible según las cuatro reglas del tema?",
    opciones: [
        "«Alojamiento ecológico»",
        "«Somos una empresa comprometida con el planeta»",
        "«Nuestra nube es verde»",
        "«El 80 % de la electricidad del centro de datos procede de fuentes renovables certificadas»"
    ],
    correcta: 3,
    explicacion: "Reglas: alegar solo lo específico, archivar la evidencia antes de publicar, no vender una obligación legal como mérito y no tapar el impacto principal con una mejora menor."
},
{
    enunciado: "Las emisiones de los grupos electrógenos propios de una empresa de sistemas son de...",
    opciones: [
        "Alcance 1: directas, de fuentes que controla la empresa",
        "Alcance 2: energía comprada",
        "Alcance 3: cadena de valor",
        "No computan porque son de emergencia"
    ],
    correcta: 0,
    explicacion: "Alcance 1: grupos electrógenos y vehículos propios. Alcance 2: energía comprada, sobre todo la del centro de datos. Alcance 3: fabricación de equipos, nube, desplazamientos y mantenimiento externalizado."
},
];