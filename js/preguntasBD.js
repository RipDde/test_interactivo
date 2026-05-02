const preguntasBD = [
  {
    enunciado: "¿Por qué los sistemas basados en archivos tradicionales generaban problemas en la gestión de la información?",
    opciones: [
      "Porque eran demasiado rápidos",
      "Porque producían redundancia y falta de coherencia entre los datos",
      "Porque no permitían almacenar información",
      "Porque impedían el acceso a los datos"
    ],
    correcta: 1,
    explicacion: " La correcta es porque producían redundancia y falta de coherencia entre los datos porque los ficheros tradicionales podían guardar la misma información repetida en varios sitios y provocar contradicciones. Que fueran demasiado rápidos es incorrecto porque la velocidad no era el problema principal. Que no permitieran almacenar información es incorrecto porque sí almacenaban datos. Que impidieran el acceso a los datos es incorrecto porque el problema era la mala gestión, no la imposibilidad total de acceso."
  },
  {
    enunciado: "¿Cuál es la principal función de un Sistema Gestor de Bases de Datos (SGBD)?",
    opciones: [
      "Actuar como intermediario entre usuarios y datos, gestionando su almacenamiento y acceso",
      "Ejecutar programas",
      "Crear sistemas operativos",
      "Eliminar información automáticamente"
    ],
    correcta: 0,
    explicacion: " La correcta es actuar como intermediario entre usuarios y datos, gestionando su almacenamiento y acceso porque un SGBD permite crear, consultar, modificar y proteger bases de datos. Ejecutar programas es incorrecto porque esa no es su función principal. Crear sistemas operativos es incorrecto porque pertenece a otro tipo de software. Eliminar información automáticamente es incorrecto porque un SGBD no borra datos sin instrucciones o reglas definidas."
  },
  {
    enunciado: "En el diseño de bases de datos, ¿por qué es importante separar los datos de las aplicaciones que los utilizan?",
    opciones: [
      "Para eliminar el uso de SQL",
      "Para evitar errores de compilación",
      "Para reducir el tamaño del software",
      "Para mejorar la independencia y facilitar cambios sin afectar a las aplicaciones"
    ],
    correcta: 3,
    explicacion: " La correcta es para mejorar la independencia y facilitar cambios sin afectar a las aplicaciones porque la independencia de datos permite modificar la estructura o gestión de los datos con menos impacto en los programas. Eliminar el uso de SQL es incorrecto porque SQL sigue siendo necesario en bases de datos relacionales. Evitar errores de compilación es incorrecto porque no es el objetivo principal. Reducir el tamaño del software es incorrecto porque la separación busca independencia y mantenimiento, no simplemente ocupar menos."
  },
  {
    enunciado: "En un modelo Entidad-Relación, ¿qué representa una entidad y por qué es fundamental en el diseño?",
    opciones: [
      "Un tipo de dato",
      "Una relación entre tablas",
      "Un objeto del mundo real sobre el que queremos almacenar información",
      "Un atributo"
    ],
    correcta: 2,
    explicacion: " La correcta es un objeto del mundo real sobre el que queremos almacenar información porque una entidad representa algo identificable, como Cliente, Producto o Profesor. Un tipo de dato es incorrecto porque describe el formato de un valor. Una relación entre tablas es incorrecta porque eso representa cómo se conectan entidades. Un atributo es incorrecto porque es una característica de una entidad, no la entidad completa."
  },
  {
    enunciado: "¿Qué diferencia existe entre una entidad y un atributo dentro de un modelo E-R?",
    opciones: [
      "El atributo es más importante",
      "No hay diferencia",
      "La entidad es una tabla",
      "La entidad es un objeto y el atributo es una característica de ese objeto"
    ],
    correcta: 3,
    explicacion: " La correcta es la entidad es un objeto y el atributo es una característica de ese objeto porque, por ejemplo, Alumno sería la entidad y nombre o edad serían atributos. El atributo es más importante es incorrecto porque no se trata de importancia, sino de función. No hay diferencia es incorrecto porque son conceptos distintos. La entidad es una tabla es impreciso en el modelo E-R, porque la entidad puede acabar transformándose en tabla en el modelo relacional."
  },
  {
    enunciado: "En un diagrama E-R, ¿por qué es importante definir correctamente la cardinalidad de las relaciones?",
    opciones: [
      "Porque determina cómo se relacionan los datos en la base de datos final",
      "Para reducir el número de tablas",
      "Porque elimina atributos",
      "Porque evita usar claves"
    ],
    correcta: 0,
    explicacion: " La correcta es porque determina cómo se relacionan los datos en la base de datos final porque la cardinalidad indica si la relación es 1:1, 1:N o N:M. Reducir el número de tablas es incorrecto porque a veces una cardinalidad puede incluso requerir tablas intermedias. Eliminar atributos es incorrecto porque la cardinalidad no sirve para eso. Evitar usar claves es incorrecto porque las claves son esenciales para implementar relaciones."
  },
  {
    enunciado: "¿Por qué la clave primaria es un elemento fundamental en una tabla?",
    opciones: [
      "Porque mejora el diseño visual",
      "Porque elimina errores automáticamente",
      "Porque reduce el tamaño",
      "Porque identifica de forma única cada registro"
    ],
    correcta: 3,
    explicacion: " La correcta es porque identifica de forma única cada registro porque la clave primaria permite distinguir una fila de otra sin ambigüedad. Mejorar el diseño visual es incorrecto porque no tiene relación con la apariencia. Eliminar errores automáticamente es incorrecto porque ayuda a evitar duplicados, pero no soluciona todos los errores. Reducir el tamaño es incorrecto porque una clave primaria no tiene como objetivo principal ahorrar espacio."
  },
  {
    enunciado: "¿Qué papel desempeñan las claves foráneas en una base de datos relacional?",
    opciones: [
      "Crear tablas",
      "Eliminar datos",
      "Relacionar tablas entre sí",
      "Validar código"
    ],
    correcta: 2,
    explicacion: " La correcta es relacionar tablas entre sí porque una clave foránea apunta a la clave primaria de otra tabla y mantiene la integridad referencial. Crear tablas es incorrecto porque eso se hace con sentencias DDL como CREATE TABLE. Eliminar datos es incorrecto porque una FK no borra datos por sí misma. Validar código es incorrecto porque valida relaciones entre datos, no código de programación."
  },
  {
    enunciado: "¿Cómo se implementa una relación N:M en un modelo relacional?",
    opciones: [
      "Creando una tabla intermedia con claves foráneas",
      "Eliminándola",
      "Duplicando tablas",
      "Ignorándola"
    ],
    correcta: 0,
    explicacion: " La correcta es creando una tabla intermedia con claves foráneas porque una relación muchos a muchos no se puede representar directamente con una sola clave foránea. Eliminarla es incorrecto porque se perdería información. Duplicando tablas es incorrecto porque generaría redundancia. Ignorarla es incorrecto porque la relación forma parte del modelo de datos."
  },
  {
    enunciado: "¿Cuál es el objetivo principal de la normalización en bases de datos?",
    opciones: [
      "Eliminar relaciones",
      "Aumentar el número de tablas",
      "Reducir código",
      "Reducir redundancia y mejorar integridad"
    ],
    correcta: 3,
    explicacion: " La correcta es reducir redundancia y mejorar integridad porque la normalización organiza los datos para evitar repeticiones y anomalías. Eliminar relaciones es incorrecto porque las relaciones siguen siendo necesarias. Aumentar el número de tablas puede ocurrir a veces, pero no es el objetivo. Reducir código es incorrecto porque la normalización afecta al diseño de los datos, no principalmente al código."
  },
  {
    enunciado: "¿Qué caracteriza a la Primera Forma Normal (1FN)?",
    opciones: [
      "Valores atómicos",
      "Tablas grandes",
      "Claves compuestas",
      "Relaciones"
    ],
    correcta: 0,
    explicacion: " La correcta es valores atómicos porque en 1FN cada campo debe contener un único valor indivisible, no listas ni grupos repetidos. Tablas grandes es incorrecto porque el tamaño no define la 1FN. Claves compuestas es incorrecto porque pueden existir, pero no caracterizan la 1FN. Relaciones es incorrecto porque no es el requisito específico de la 1FN."
  },
  {
    enunciado: "¿Qué problema elimina la Segunda Forma Normal (2FN)?",
    opciones: [
      "Claves",
      "Dependencias parciales",
      "Relaciones",
      "Redundancia total"
    ],
    correcta: 1,
    explicacion: " La correcta es dependencias parciales porque la 2FN evita que un atributo dependa solo de una parte de una clave primaria compuesta. Claves es incorrecto porque no elimina claves. Relaciones es incorrecto porque no elimina relaciones entre tablas. Redundancia total es incorrecto porque la normalización reduce redundancia, pero no significa que elimine absolutamente toda."
  },
  {
    enunciado: "¿Qué son las dependencias transitivas que elimina la 3FN?",
    opciones: [
      "Dependencias directas",
      "Claves",
      "Dependencias indirectas entre atributos no clave",
      "Relaciones"
    ],
    correcta: 2,
    explicacion: " La correcta es dependencias indirectas entre atributos no clave porque en 3FN un atributo no clave no debe depender de otro atributo no clave. Dependencias directas es incorrecto porque un atributo puede depender directamente de la clave primaria. Claves es incorrecto porque la 3FN no elimina claves. Relaciones es incorrecto porque la 3FN no elimina las relaciones necesarias."
  },
  {
    enunciado: "¿Qué tipo de lenguaje es SQL y qué implica esto?",
    opciones: [
      "Imperativo",
      "Declarativo",
      "Binario",
      "Compilado"
    ],
    correcta: 1,
    explicacion: " La correcta es declarativo porque en SQL se indica qué datos se quieren obtener o modificar, no paso a paso cómo debe hacerlo internamente el sistema. Imperativo es incorrecto porque en un lenguaje imperativo se detallan instrucciones paso a paso. Binario es incorrecto porque SQL no se escribe en código binario. Compilado es incorrecto porque no se clasifica principalmente así."
  },
  {
    enunciado: "¿Qué diferencia hay entre DDL y DML en SQL?",
    opciones: [
      "DML crea tablas",
      "DDL elimina datos",
      "Ninguna",
      "DDL define estructura y DML manipula datos"
    ],
    correcta: 3,
    explicacion: " La correcta es DDL define estructura y DML manipula datos porque DDL incluye órdenes como CREATE, ALTER o DROP, mientras que DML incluye SELECT, INSERT, UPDATE o DELETE. DML crea tablas es incorrecto porque crear tablas pertenece a DDL. DDL elimina datos es impreciso porque DROP elimina estructuras completas, no manipula filas como DML. Ninguna es incorrecto porque sí hay una diferencia clara."
  },
  {
    enunciado: "¿Por qué es importante definir correctamente los tipos de datos en SQL?",
    opciones: [
      "Para evitar errores y optimizar almacenamiento",
      "Para decorar",
      "Para compilar",
      "Para ejecutar"
    ],
    correcta: 0,
    explicacion: " La correcta es para evitar errores y optimizar almacenamiento porque cada columna debe guardar valores adecuados, como números, fechas o texto, usando un tipo apropiado. Para decorar es incorrecto porque los tipos de datos tienen función técnica. Para compilar es incorrecto porque SQL no depende de eso como un lenguaje compilado tradicional. Para ejecutar es demasiado genérico y no explica la importancia real."
  },
  {
    enunciado: "¿Qué garantiza la restricción NOT NULL?",
    opciones: [
      "Valores únicos",
      "Relación",
      "Eliminación",
      "Campo obligatorio"
    ],
    correcta: 3,
    explicacion: " La correcta es campo obligatorio porque NOT NULL impide que una columna quede vacía con valor NULL. Valores únicos es incorrecto porque eso lo garantiza UNIQUE. Relación es incorrecto porque las relaciones se establecen con claves, especialmente claves foráneas. Eliminación es incorrecto porque NOT NULL no elimina datos."
  },
  {
    enunciado: "¿Por qué UNIQUE evita errores en una base de datos?",
    opciones: [
      "Porque elimina datos",
      "Porque evita duplicados",
      "Porque crea tablas",
      "Porque valida código"
    ],
    correcta: 1,
    explicacion: " La correcta es porque evita duplicados porque UNIQUE impide que se repita un mismo valor en una columna o combinación de columnas. Eliminar datos es incorrecto porque UNIQUE no borra registros. Crear tablas es incorrecto porque eso corresponde a CREATE TABLE. Validar código es incorrecto porque UNIQUE valida valores de datos, no código."
  },
  {
    enunciado: "¿Qué función tiene la restricción CHECK en SQL?",
    opciones: [
      "Crear tablas",
      "Eliminar datos",
      "Validar reglas o condiciones sobre los datos",
      "Insertar datos"
    ],
    correcta: 2,
    explicacion: " La correcta es validar reglas o condiciones sobre los datos porque CHECK permite imponer condiciones, por ejemplo que una edad sea mayor que 0. Crear tablas es incorrecto porque eso es DDL con CREATE TABLE. Eliminar datos es incorrecto porque CHECK no borra registros. Insertar datos es incorrecto porque insertar corresponde a INSERT."
  },
  {
    enunciado: "¿Qué representa una fila dentro de una tabla relacional?",
    opciones: [
      "Registro",
      "Columna",
      "Tabla",
      "Clave"
    ],
    correcta: 0,
    explicacion: " La correcta es registro porque una fila representa una ocurrencia concreta dentro de una tabla, por ejemplo un cliente específico. Columna es incorrecto porque una columna representa un atributo o campo. Tabla es incorrecto porque la tabla contiene muchas filas y columnas. Clave es incorrecto porque una clave identifica registros, pero no es la fila completa."
  },
  {
    enunciado: "Una base de datos es:",
    opciones: [
      "Un programa",
      "Un sistema operativo",
      "Un conjunto organizado de datos relacionados",
      "Un conjunto de tablas sin relación"
    ],
    correcta: 2,
    explicacion: " La correcta es un conjunto organizado de datos relacionados porque una base de datos almacena información estructurada para poder consultarla y gestionarla. Un programa es incorrecto porque el programa que gestiona bases de datos sería el SGBD. Un sistema operativo es incorrecto porque no gestiona bases de datos como función principal. Un conjunto de tablas sin relación es incorrecto porque una base de datos suele organizar datos relacionados entre sí."
  },
  {
    enunciado: "¿Qué problema resolvieron los SGBD frente a los ficheros planos?",
    opciones: [
      "El uso de SQL",
      "La duplicidad e inconsistencia de datos",
      "El coste",
      "La velocidad de Internet"
    ],
    correcta: 1,
    explicacion: " La correcta es la duplicidad e inconsistencia de datos porque los SGBD centralizan y controlan mejor la información que los ficheros planos. El uso de SQL es incorrecto porque SQL es una herramienta de consulta, no el problema resuelto. El coste es incorrecto porque no es el problema técnico principal. La velocidad de Internet es incorrecta porque no está relacionada directamente con los ficheros planos."
  },
  {
    enunciado: "¿Qué es un SGBD?",
    opciones: [
      "Una tabla",
      "Un lenguaje",
      "Un modelo de datos",
      "Un software para gestionar bases de datos"
    ],
    correcta: 3,
    explicacion: " La correcta es un software para gestionar bases de datos porque permite almacenar, consultar, modificar, proteger y administrar datos. Una tabla es incorrecto porque es una estructura dentro de una base de datos. Un lenguaje es incorrecto porque SQL sí es un lenguaje, pero el SGBD es el programa que gestiona la BD. Un modelo de datos es incorrecto porque el modelo define cómo se organizan los datos, no es el gestor."
  },
  {
    enunciado: "El modelo relacional fue propuesto por:",
    opciones: [
      "Edgar F. Codd",
      "Bill Gates",
      "Tim Berners-Lee",
      "Oracle"
    ],
    correcta: 0,
    explicacion: " La correcta es Edgar F. Codd porque fue quien propuso el modelo relacional de bases de datos. Bill Gates es incorrecto porque se asocia principalmente con Microsoft. Tim Berners-Lee es incorrecto porque se relaciona con la creación de la Web. Oracle es incorrecto porque es una empresa y un SGBD, no la persona que propuso el modelo relacional."
  },
  {
    enunciado: "El modelo relacional organiza la información en:",
    opciones: [
      "Grafos",
      "Tablas",
      "Árboles",
      "Documentos"
    ],
    correcta: 1,
    explicacion: " La correcta es tablas porque el modelo relacional representa la información mediante relaciones que normalmente se implementan como tablas. Grafos es incorrecto porque corresponde a bases de datos orientadas a grafos. Árboles es incorrecto porque se relaciona más con modelos jerárquicos. Documentos es incorrecto porque corresponde a bases de datos documentales."
  },
  {
    enunciado: "SQL se utiliza principalmente para:",
    opciones: [
      "Programar servidores",
      "Gestionar y consultar bases de datos",
      "Crear diagramas",
      "Diseñar interfaces"
    ],
    correcta: 1,
    explicacion: " La correcta es gestionar y consultar bases de datos porque SQL permite crear estructuras, insertar datos, modificarlos y realizar consultas. Programar servidores es incorrecto porque no es su finalidad principal. Crear diagramas es incorrecto porque eso se hace con herramientas de modelado. Diseñar interfaces es incorrecto porque pertenece al desarrollo visual o frontend."
  },
  {
    enunciado: "La arquitectura ANSI/SPARC se compone de:",
    opciones: [
      "5 niveles",
      "4 niveles",
      "3 niveles",
      "2 niveles"
    ],
    correcta: 2,
    explicacion: " La correcta es 3 niveles porque la arquitectura ANSI/SPARC se divide en nivel externo, conceptual e interno. 5 niveles es incorrecto porque no corresponde a esta arquitectura. 4 niveles es incorrecto por la misma razón. 2 niveles es incorrecto porque faltarían partes de la separación clásica."
  },
  {
    enunciado: "El nivel externo de ANSI/SPARC representa:",
    opciones: [
      "El almacenamiento físico",
      "El modelo lógico global",
      "Los índices",
      "Las vistas de usuario"
    ],
    correcta: 3,
    explicacion: " La correcta es las vistas de usuario porque el nivel externo muestra cómo ve cada usuario o aplicación los datos. El almacenamiento físico es incorrecto porque corresponde al nivel interno. El modelo lógico global es incorrecto porque corresponde al nivel conceptual. Los índices son incorrectos porque pertenecen más a detalles físicos o de optimización."
  },
  {
    enunciado: "El modelo Entidad-Relación se usa para:",
    opciones: [
      "Representar conceptualmente la realidad",
      "Crear tablas físicas",
      "Ejecutar consultas",
      "Optimizar índices"
    ],
    correcta: 0,
    explicacion: " La correcta es representar conceptualmente la realidad porque el modelo E-R ayuda a identificar entidades, atributos y relaciones antes de crear las tablas. Crear tablas físicas es incorrecto porque eso ocurre después, en el diseño lógico o físico. Ejecutar consultas es incorrecto porque eso se hace con SQL. Optimizar índices es incorrecto porque pertenece a una fase más técnica del diseño físico."
  },
  {
    enunciado: "Una entidad representa:",
    opciones: [
      "Una clave",
      "Un atributo",
      "Una relación",
      "Un objeto del mundo real"
    ],
    correcta: 3,
    explicacion: " La correcta es un objeto del mundo real porque una entidad representa algo sobre lo que queremos guardar datos, como Cliente, Pedido o Producto. Una clave es incorrecto porque identifica registros. Un atributo es incorrecto porque es una característica de una entidad. Una relación es incorrecto porque representa una asociación entre entidades."
  },
  {
    enunciado: "En un diagrama E-R, las entidades se representan con:",
    opciones: [
      "Rombos",
      "Flechas",
      "Rectángulos",
      "Óvalos"
    ],
    correcta: 2,
    explicacion: " La correcta es rectángulos porque en la notación clásica del modelo E-R las entidades se dibujan dentro de rectángulos. Rombos es incorrecto porque representan relaciones. Flechas no son la representación estándar de entidades. Óvalos es incorrecto porque suelen representar atributos."
  },
  {
    enunciado: "La clave primaria sirve para:",
    opciones: [
      "Relacionar tablas",
      "Crear vistas",
      "Evitar claves foráneas",
      "Identificar registros de forma única"
    ],
    correcta: 3,
    explicacion: " La correcta es identificar registros de forma única porque la clave primaria distingue cada fila de la tabla. Relacionar tablas es más propio de las claves foráneas. Crear vistas es incorrecto porque se hace con CREATE VIEW. Evitar claves foráneas es incorrecto porque las claves primarias suelen ser referenciadas por claves foráneas."
  },
  {
    enunciado: "Una relación 1:N se implementa:",
    opciones: [
      "Con una FK en el lado N",
      "Con una tabla intermedia",
      "Con una FK en el lado 1",
      "Con una PK compuesta"
    ],
    correcta: 0,
    explicacion: " La correcta es con una FK en el lado N porque muchos registros del lado N pueden apuntar al único registro del lado 1. Con una tabla intermedia es incorrecto porque eso se usa normalmente en relaciones N:M. Con una FK en el lado 1 es incorrecto porque no permitiría representar correctamente los muchos registros. Con una PK compuesta no es la forma general de implementar una 1:N."
  },
  {
    enunciado: "Una relación N:M se transforma en:",
    opciones: [
      "Una FK",
      "Una vista",
      "Una tabla intermedia",
      "Un índice"
    ],
    correcta: 2,
    explicacion: " La correcta es una tabla intermedia porque una relación muchos a muchos necesita una tabla que una las dos entidades mediante claves foráneas. Una FK sola es incorrecto porque no basta para representar correctamente ambos lados. Una vista es incorrecto porque no almacena la relación como estructura base. Un índice es incorrecto porque mejora búsquedas, pero no modela relaciones."
  },
  {
    enunciado: "La tabla intermedia de una N:M contiene:",
    opciones: [
      "Datos duplicados",
      "Solo atributos",
      "Una PK simple",
      "Las PK de ambas entidades como FK"
    ],
    correcta: 3,
    explicacion: " La correcta es las PK de ambas entidades como FK porque la tabla intermedia conecta ambas tablas originales usando sus identificadores. Datos duplicados es incorrecto porque eso sería mal diseño. Solo atributos es incorrecto porque necesita claves foráneas para relacionar. Una PK simple puede existir en algunos diseños, pero lo esencial es que contenga las claves de ambas entidades como FK."
  },
  {
    enunciado: "Un atributo multivaluado:",
    opciones: [
      "Viola 1FN",
      "Cumple 1FN",
      "Viola 2FN",
      "Viola 3FN"
    ],
    correcta: 0,
    explicacion: " La correcta es viola 1FN porque la Primera Forma Normal exige valores atómicos, y un atributo multivaluado contiene varios valores en un mismo campo. Cumple 1FN es incorrecto porque rompe la atomicidad. Viola 2FN es incorrecto como respuesta principal porque antes ya incumple 1FN. Viola 3FN es incorrecto como respuesta principal porque el problema básico es de 1FN."
  },
  {
    enunciado: "La integridad referencial garantiza que:",
    opciones: [
      "Los datos estén ordenados",
      "No haya duplicados",
      "Las FK apunten a valores existentes",
      "No existan NULL"
    ],
    correcta: 2,
    explicacion: " La correcta es las FK apunten a valores existentes porque la integridad referencial evita que una clave foránea apunte a un registro inexistente. Los datos estén ordenados es incorrecto porque el orden no tiene que ver con integridad referencial. No haya duplicados es incorrecto porque eso corresponde a restricciones como UNIQUE. No existan NULL es incorrecto porque eso depende de NOT NULL."
  },
  {
    enunciado: "El diseño lógico consiste en:",
    opciones: [
      "Insertar datos",
      "Convertir el modelo E-R en tablas",
      "Crear el modelo E-R",
      "Optimizar consultas"
    ],
    correcta: 1,
    explicacion: " La correcta es convertir el modelo E-R en tablas porque el diseño lógico transforma el modelo conceptual en un esquema relacional. Insertar datos es incorrecto porque ocurre cuando la base de datos ya está creada. Crear el modelo E-R pertenece al diseño conceptual. Optimizar consultas pertenece más al diseño físico o a la administración."
  },
  {
    enunciado: "Normalizar una base de datos sirve para:",
    opciones: [
      "Eliminar relaciones",
      "Aumentar redundancia",
      "Reducir claves",
      "Evitar anomalías"
    ],
    correcta: 3,
    explicacion: " La correcta es evitar anomalías porque la normalización reduce problemas al insertar, actualizar o borrar datos. Eliminar relaciones es incorrecto porque las relaciones siguen siendo necesarias. Aumentar redundancia es incorrecto porque busca reducirla. Reducir claves es incorrecto porque las claves siguen siendo fundamentales."
  },
  {
    enunciado: "La 1ª Forma Normal (1FN) exige:",
    opciones: [
      "No dependencias transitivas",
      "PK simples",
      "Valores atómicos",
      "Claves compuestas"
    ],
    correcta: 2,
    explicacion: " La correcta es valores atómicos porque en 1FN cada celda debe contener un solo valor indivisible. No dependencias transitivas corresponde a 3FN. PK simples es incorrecto porque puede haber claves compuestas. Claves compuestas es incorrecto porque no son requisito de 1FN."
  },
  {
    enunciado: "La 2ª Forma Normal (2FN) elimina:",
    opciones: [
      "Dependencias parciales",
      "Listas",
      "Dependencias transitivas",
      "Claves foráneas"
    ],
    correcta: 0,
    explicacion: " La correcta es dependencias parciales porque la 2FN exige que los atributos no clave dependan de toda la clave primaria, no solo de una parte. Listas es incorrecto porque eso se trata en 1FN. Dependencias transitivas es incorrecto porque eso corresponde a 3FN. Claves foráneas es incorrecto porque la 2FN no elimina las FK."
  },
  {
    enunciado: "La 3ª Forma Normal (3FN) elimina:",
    opciones: [
      "Valores atómicos",
      "Dependencias transitivas",
      "Dependencias parciales",
      "PK compuestas"
    ],
    correcta: 1,
    explicacion: " La correcta es dependencias transitivas porque la 3FN evita que atributos no clave dependan de otros atributos no clave. Valores atómicos corresponde a 1FN. Dependencias parciales corresponde a 2FN. PK compuestas es incorrecto porque la 3FN no prohíbe claves primarias compuestas."
  },
  {
    enunciado: "Una dependencia transitiva ocurre cuando:",
    opciones: [
      "Hay FK",
      "Un atributo depende de otro no clave",
      "Un atributo depende de la PK",
      "Hay una N:M"
    ],
    correcta: 1,
    explicacion: " La correcta es un atributo depende de otro no clave porque eso crea una dependencia indirecta respecto a la clave principal. Hay FK es incorrecto porque una clave foránea no implica por sí sola dependencia transitiva. Un atributo depende de la PK es correcto en una tabla bien diseñada, pero no describe dependencia transitiva. Hay una N:M es incorrecto porque eso es un tipo de relación."
  },
  {
    enunciado: "Una tabla en 3FN:",
    opciones: [
      "Siempre cumple BCNF",
      "Nunca cumple BCNF",
      "Puede no cumplir BCNF",
      "No tiene dependencias"
    ],
    correcta: 2,
    explicacion: " La correcta es puede no cumplir BCNF porque BCNF es más estricta que 3FN y puede detectar problemas que 3FN permite en ciertos casos. Siempre cumple BCNF es incorrecto porque no siempre ocurre. Nunca cumple BCNF es incorrecto porque muchas tablas en 3FN también pueden cumplir BCNF. No tiene dependencias es incorrecto porque una tabla puede tener dependencias válidas."
  },
  {
    enunciado: "BCNF es:",
    opciones: [
      "Solo teórica",
      "Igual que 2FN",
      "Inferior a 3FN",
      "Más estricta que 3FN"
    ],
    correcta: 3,
    explicacion: " La correcta es más estricta que 3FN porque BCNF exige que todo determinante sea clave candidata. Solo teórica es incorrecto porque puede aplicarse en diseños reales. Igual que 2FN es incorrecto porque BCNF es un nivel más avanzado. Inferior a 3FN es incorrecto porque es más restrictiva, no menos."
  },
  {
    enunciado: "Una tabla cumple BCNF si:",
    opciones: [
      "Cada determinante es clave candidata",
      "No tiene FK",
      "No tiene PK compuesta",
      "Está normalizada"
    ],
    correcta: 0,
    explicacion: " La correcta es cada determinante es clave candidata porque esa es la condición principal de BCNF. No tiene FK es incorrecto porque una tabla puede tener claves foráneas y cumplir BCNF. No tiene PK compuesta es incorrecto porque las claves compuestas pueden existir. Está normalizada es demasiado general y no define específicamente BCNF."
  },
  {
    enunciado: "Una desnormalización controlada se usa para:",
    opciones: [
      "Romper integridad",
      "Mejorar rendimiento",
      "Reducir coherencia",
      "Eliminar tablas"
    ],
    correcta: 1,
    explicacion: " La correcta es mejorar rendimiento porque a veces se acepta cierta redundancia controlada para acelerar consultas. Romper integridad es incorrecto porque no debería ser el objetivo. Reducir coherencia es incorrecto porque debe controlarse para no perder coherencia. Eliminar tablas puede ocurrir en algún diseño, pero no es la finalidad principal."
  },
  {
    enunciado: "Un error común es pensar que:",
    opciones: [
      "SQL es estándar",
      "La normalización es útil",
      "Excel sustituye a un SGBD",
      "Las FK son necesarias"
    ],
    correcta: 2,
    explicacion: " La correcta es Excel sustituye a un SGBD porque una hoja de cálculo no ofrece las mismas garantías de integridad, concurrencia, seguridad y control que un SGBD. SQL es estándar no es el error principal, aunque cada gestor tenga variaciones. La normalización es útil no es un error, es una buena práctica. Las FK son necesarias no es un error en bases de datos relacionales bien diseñadas."
  },
  {
    enunciado: "Una base de datos bien diseñada es:",
    opciones: [
      "Coherente y escalable",
      "Rígida",
      "Difícil de mantener",
      "Dependiente del hardware"
    ],
    correcta: 0,
    explicacion: " La correcta es coherente y escalable porque una buena base de datos mantiene datos consistentes y puede crecer o adaptarse mejor. Rígida es incorrecto porque un buen diseño debe facilitar cambios razonables. Difícil de mantener es incorrecto porque debería ser mantenible. Dependiente del hardware es incorrecto porque el diseño lógico no debería depender directamente del hardware."
  },
  {
    enunciado: "Regla fundamental en bases de datos:",
    opciones: [
      "Evitar claves",
      "Minimizar tablas",
      "Programar primero",
      "Priorizar integridad y coherencia"
    ],
    correcta: 3,
    explicacion: " La correcta es priorizar integridad y coherencia porque una base de datos debe evitar contradicciones, pérdidas de información y relaciones inválidas. Evitar claves es incorrecto porque las claves son esenciales. Minimizar tablas es incorrecto porque lo importante no es tener menos tablas, sino un diseño correcto. Programar primero es incorrecto porque conviene diseñar bien los datos antes de construir la aplicación."
  }
];