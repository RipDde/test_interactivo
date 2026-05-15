const preguntasMPO = [
  {
    enunciado: "Una empresa quiere migrar sus servidores desde una infraestructura on-premise a la nube, ¿cuál es la principal ventaja de este cambio?",
    opciones: [
      "Garantizar capacidad de cómputo sobredimensionada de forma permanente.",
      "Mantener el control del hardware y su mantenimiento.",
      "Incrementar los costes fijos asociados a la infraestructura tecnológica.",
      "Ajustar los recursos de cómputo según la demanda del negocio."
    ],
    correcta: 3,
    explicacion: " La correcta es ajustar los recursos de cómputo según la demanda del negocio porque una de las principales ventajas de la nube es la elasticidad, es decir, poder aumentar o reducir recursos según la necesidad. La opción de garantizar capacidad sobredimensionada es incorrecta porque la nube intenta evitar tener recursos sobrantes de forma permanente. Mantener el control del hardware es incorrecto porque en la nube el hardware físico lo gestiona el proveedor. Incrementar los costes fijos es incorrecto porque normalmente se busca pasar de costes fijos a costes variables según uso."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones NO es una característica propia de la computación en la nube?",
    opciones: [
      "Autoservicio bajo demanda para gestionar recursos.",
      "Acceso a los servicios a través de internet.",
      "Solo se facturan los recursos utilizados.",
      "Aprovisionamiento definido de antemano."
    ],
    correcta: 3,
    explicacion: " La correcta es aprovisionamiento definido de antemano porque en la nube los recursos se pueden aprovisionar dinámicamente según la necesidad. El autoservicio bajo demanda sí es una característica de la nube porque el usuario puede crear y gestionar recursos cuando los necesita. El acceso a través de internet también es una característica propia de la nube. La facturación por uso también es correcta porque normalmente se paga por los recursos consumidos."
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre los modelos SaaS, PaaS e IaaS en computación en la nube?",
    opciones: [
      "El grado de responsabilidad que asume el proveedor en el mantenimiento del hardware físico.",
      "El nivel de control y gestión que tiene el usuario sobre la infraestructura y el software.",
      "El tipo de licencia del sistema operativo utilizado.",
      "El rendimiento de las aplicaciones desplegadas."
    ],
    correcta: 1,
    explicacion: " La correcta es el nivel de control y gestión que tiene el usuario sobre la infraestructura y el software porque en SaaS el proveedor gestiona casi todo, en PaaS el usuario gestiona principalmente la aplicación y en IaaS el usuario gestiona más componentes, como sistema operativo, datos y aplicaciones. La opción del mantenimiento del hardware físico es incorrecta porque el hardware lo mantiene el proveedor en los tres modelos. El tipo de licencia del sistema operativo no define si algo es SaaS, PaaS o IaaS. El rendimiento de las aplicaciones puede variar, pero no es la diferencia principal entre estos modelos."
  },
  {
    enunciado: "¿Cuál de los siguientes ejemplos NO está correctamente asociado a su modelo de servicio en la nube?",
    opciones: [
      "Amazon AWS como ejemplo de IaaS.",
      "Google Drive como ejemplo de SaaS.",
      "Microsoft Azure como ejemplo de IaaS.",
      "WordPress instalado como ejemplo de SaaS."
    ],
    correcta: 3,
    explicacion: " La correcta es WordPress instalado como ejemplo de SaaS porque si WordPress está instalado por el usuario en un servidor propio o en una máquina virtual, el usuario sigue gestionando instalación, actualizaciones y seguridad, así que no sería SaaS. Amazon AWS puede ofrecer IaaS, por eso esa asociación es válida. Google Drive es SaaS porque es una aplicación lista para usar desde internet. Microsoft Azure también ofrece servicios IaaS, por eso esa opción está bien asociada."
  },
  {
    enunciado: "En un modelo IaaS (Infrastructure as a Service), ¿qué componentes son responsabilidad del usuario?",
    opciones: [
      "Aplicaciones, datos, sistema operativo y middleware.",
      "Aplicaciones y datos.",
      "Servidores físicos y red.",
      "Virtualización y almacenamiento."
    ],
    correcta: 0,
    explicacion: " La correcta es aplicaciones, datos, sistema operativo y middleware porque en IaaS el proveedor ofrece la infraestructura base, pero el usuario gestiona lo que instala y configura sobre la máquina virtual. Aplicaciones y datos es incompleta porque también suelen ser responsabilidad del usuario el sistema operativo y el middleware. Servidores físicos y red es incorrecta porque eso lo gestiona el proveedor cloud. Virtualización y almacenamiento también es incorrecta porque en IaaS esos elementos forman parte de la infraestructura gestionada por el proveedor."
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre una nube pública, una nube privada y una nube híbrida?",
    opciones: [
      "El tipo de sistema operativo que utilizan.",
      "Quién es el propietario y cómo se comparten los recursos.",
      "El número de usuarios que pueden acceder.",
      "El lenguaje de programación de las aplicaciones."
    ],
    correcta: 1,
    explicacion: " La correcta es quién es el propietario y cómo se comparten los recursos porque la nube pública usa infraestructura de un proveedor compartida entre clientes, la privada está dedicada a una organización y la híbrida combina ambas. El sistema operativo no define el tipo de nube. El número de usuarios que acceden no es el criterio principal. El lenguaje de programación de las aplicaciones no influye en que una nube sea pública, privada o híbrida."
  },
  {
    enunciado: "¿En qué situación tiene más sentido utilizar una estrategia multicloud?",
    opciones: [
      "Cuando una empresa quiere consolidar la infraestructura y reducir el número de servidores físicos.",
      "Cuando se utilizan servicios de un único proveedor para simplificar la gestión.",
      "Cuando se combinan servicios de varios proveedores para evitar dependencia de uno solo.",
      "Cuando se requiere una alta disponibilidad dentro de una misma región utilizando múltiples cuentas o proyectos de un único proveedor cloud."
    ],
    correcta: 2,
    explicacion: " La correcta es cuando se combinan servicios de varios proveedores para evitar dependencia de uno solo porque multicloud significa usar varios proveedores cloud, por ejemplo AWS, Azure y Google Cloud. Consolidar infraestructura no implica multicloud. Usar un único proveedor es single cloud, no multicloud. Tener alta disponibilidad dentro de una misma región y un mismo proveedor no es multicloud, aunque use varias cuentas o proyectos."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones es correcta?",
    opciones: [
      "Una región está formada por varias Availability Zones independientes entre sí.",
      "Una Availability Zone contiene varias regiones dentro de ella.",
      "Una región está en un único centro de datos físico.",
      "Las regiones y las Availability Zones son exactamente lo mismo."
    ],
    correcta: 0,
    explicacion: " La correcta es una región está formada por varias Availability Zones independientes entre sí porque una región es una zona geográfica amplia y dentro de ella hay varias zonas de disponibilidad. Una Availability Zone no contiene varias regiones, sino que ocurre al revés. Una región no suele ser un único centro de datos físico, sino un conjunto de zonas de disponibilidad. Regiones y Availability Zones no son lo mismo porque representan niveles distintos de ubicación e infraestructura."
  },
  {
    enunciado: "Una empresa que maneja datos personales quiere desplegar su aplicación en AWS. ¿Qué criterio puede ser determinante a la hora de elegir una región?",
    opciones: [
      "El tipo de hardware utilizado en los centros de datos.",
      "La legislación y normativas de protección de datos aplicables en esa región.",
      "El número de cuentas de usuario creadas en AWS.",
      "La interfaz de la consola de AWS en ese país."
    ],
    correcta: 1,
    explicacion: " La correcta es la legislación y normativas de protección de datos aplicables en esa región porque la ubicación física de los datos puede afectar al cumplimiento legal, por ejemplo en protección de datos. El tipo de hardware usado en los centros de datos normalmente no es el criterio principal para cumplir la ley. El número de cuentas de usuario no determina dónde se almacenan los datos. La interfaz de la consola no afecta al cumplimiento legal ni a la ubicación real de los datos."
  },
  {
    enunciado: "¿Por qué es importante elegir correctamente la región en la nube donde se despliega una aplicación?",
    opciones: [
      "Porque mejora la latencia al estar cerca de los usuarios, ayuda a cumplir normativas legales y puede optimizar disponibilidad y costes.",
      "Porque garantiza automáticamente la seguridad total de los datos y elimina la necesidad de copias de seguridad.",
      "Porque permite usar cualquier región sin impacto en rendimiento, costes o cumplimiento legal.",
      "Ninguna de las anteriores."
    ],
    correcta: 0,
    explicacion: " La correcta es porque mejora la latencia al estar cerca de los usuarios, ayuda a cumplir normativas legales y puede optimizar disponibilidad y costes. La región influye en la distancia respecto a los usuarios, en dónde se guardan los datos y en los precios o servicios disponibles. Garantizar seguridad total y eliminar copias de seguridad es incorrecto porque la seguridad y los backups dependen de la configuración y la arquitectura. Usar cualquier región sin impacto es incorrecto porque la región sí puede afectar al rendimiento, costes y cumplimiento legal. Ninguna de las anteriores es incorrecta porque la opción a sí es correcta."
  },
  {
    enunciado: "¿Cuál de las siguientes asociaciones entre un servicio de AWS y su función es correcta?",
    opciones: [
      "EC2: almacenamiento de objetos para guardar archivos.",
      "S3: servicio de bases de datos relacionales gestionadas.",
      "VPC: red privada donde se despliegan los recursos en la nube.",
      "IAM: servicio para crear máquinas virtuales."
    ],
    correcta: 2,
    explicacion: " La correcta es VPC: red privada donde se despliegan los recursos en la nube porque una VPC permite crear una red virtual aislada dentro de AWS. EC2 no es almacenamiento de objetos, sino un servicio para crear máquinas virtuales. S3 no es una base de datos relacional, sino almacenamiento de objetos. IAM no crea máquinas virtuales, sino que gestiona identidades, usuarios, roles y permisos."
  },
  {
    enunciado: "¿Qué es el Free Tier de AWS y por qué es importante conocerlo?",
    opciones: [
      "Un conjunto de servicios gratuitos disponibles para los usuarios sin límites.",
      "Un periodo de prueba con límites de uso gratuitos que ayudan a aprender y evitar costes inesperados.",
      "Un servicio que bloquea automáticamente cualquier gasto en la cuenta inesperado.",
      "Una herramienta exclusiva para grandes empresas que a partir de un determinado gasto pueden optar a ventajas exclusivas."
    ],
    correcta: 1,
    explicacion: " La correcta es un periodo de prueba con límites de uso gratuitos que ayudan a aprender y evitar costes inesperados porque el Free Tier permite probar ciertos servicios gratis, pero solo dentro de límites concretos. No es un conjunto de servicios gratuitos sin límites porque puede haber límites de tiempo, uso o cantidad. No bloquea automáticamente cualquier gasto porque si superas los límites puedes generar costes. No es exclusivo de grandes empresas porque está pensado también para usuarios nuevos, estudiantes y pruebas."
  },
  {
    enunciado: "¿Cuál es el objetivo principal de la calculadora de precios de AWS?",
    opciones: [
      "Monitorizar el consumo real y generar facturas mensuales.",
      "Crear y desplegar recursos directamente en AWS.",
      "Estimar el coste de distintos servicios antes de desplegarlos y comparar configuraciones.",
      "Aplicar automáticamente descuentos por uso prolongado."
    ],
    correcta: 2,
    explicacion: " La correcta es estimar el coste de distintos servicios antes de desplegarlos y comparar configuraciones porque la AWS Pricing Calculator sirve para simular costes antes de crear recursos reales. Monitorizar consumo real y facturas corresponde más a herramientas como Billing o Cost Explorer. Crear y desplegar recursos es incorrecto porque la calculadora no crea recursos en AWS. Aplicar descuentos automáticamente es incorrecto porque la calculadora puede mostrar estimaciones, pero no aplica descuentos por sí sola."
  },
  {
    enunciado: "¿Cuál de las siguientes limitaciones de la calculadora de precios de AWS es correcta?",
    opciones: [
      "No figuran todos los servicios en la calculadora, lo que genera problemas en los presupuestos.",
      "No permite estimar más de un servicio a la vez.",
      "La estimación puede no ser exacta, por lo que a veces es mejor empezar con un uso real y revisar la factura.",
      "Solo puede usarse con cuentas de pago."
    ],
    correcta: 2,
    explicacion: " La correcta es la estimación puede no ser exacta, por lo que a veces es mejor empezar con un uso real y revisar la factura porque el coste final puede cambiar según tráfico, uso real, transferencia de datos, configuración y servicios adicionales. Decir que no figuran todos los servicios y que eso genera problemas en los presupuestos es demasiado absoluto. No permite estimar más de un servicio es incorrecto porque sí se pueden combinar varios servicios en una estimación. Solo puede usarse con cuentas de pago es incorrecto porque la calculadora se puede usar públicamente."
  },
  {
    enunciado: "Al realizar una estimación en la AWS Pricing Calculator, ¿qué combinación de factores suele tener un impacto más alto en el coste final?",
    opciones: [
      "Tipo de servicio, tamaño del recurso, horas de uso y región seleccionada.",
      "Número de usuarios IAM, políticas de permisos y grupos asignados.",
      "Zona de disponibilidad elegida, nombre del recurso y etiquetas aplicadas.",
      "Ninguna de las anteriores."
    ],
    correcta: 0,
    explicacion: " La correcta es tipo de servicio, tamaño del recurso, horas de uso y región seleccionada porque el precio cambia mucho según qué servicio se use, qué capacidad tenga el recurso, cuánto tiempo esté funcionando y en qué región se despliegue. El número de usuarios IAM, políticas y grupos normalmente no tiene impacto directo en el coste principal de los servicios. La zona de disponibilidad concreta, el nombre del recurso y las etiquetas no suelen ser los factores más importantes de coste. Ninguna de las anteriores es incorrecta porque la opción a sí recoge factores clave."
  },
  {
    enunciado: "¿Qué es Amazon EC2 dentro de los servicios de AWS?",
    opciones: [
      "Un servicio para crear y gestionar máquinas virtuales bajo demanda.",
      "Un sistema de almacenamiento de archivos distribuido.",
      "Un servicio de bases de datos gestionadas.",
      "Un servicio de computación serverless, es decir, donde no es necesario levantar servidores."
    ],
    correcta: 0,
    explicacion: " La correcta es un servicio para crear y gestionar máquinas virtuales bajo demanda porque EC2 permite lanzar instancias con CPU, memoria, almacenamiento y sistema operativo. Un sistema de almacenamiento de archivos distribuido no describe EC2, sino servicios de almacenamiento. Un servicio de bases de datos gestionadas sería más parecido a Amazon RDS. Computación serverless sería más parecido a AWS Lambda, no a EC2."
  },
  {
    enunciado: "¿Cuál es la función principal de Amazon S3?",
    opciones: [
      "Ejecutar aplicaciones sin necesidad de servidores.",
      "Crear redes privadas virtuales en la nube.",
      "Proporcionar almacenamiento de objetos escalable.",
      "Gestionar usuarios y permisos."
    ],
    correcta: 2,
    explicacion: " La correcta es proporcionar almacenamiento de objetos escalable porque S3 se usa para guardar objetos como archivos, copias de seguridad, imágenes, logs o datos estáticos. Ejecutar aplicaciones sin servidores corresponde más a AWS Lambda. Crear redes privadas virtuales corresponde a Amazon VPC. Gestionar usuarios y permisos corresponde principalmente a IAM."
  },
  {
    enunciado: "¿Qué es un usuario de IAM en AWS?",
    opciones: [
      "Un recurso que define permisos sobre otros servicios.",
      "Una persona o aplicación que puede autenticarse en una cuenta de AWS.",
      "Un conjunto de permisos reutilizables.",
      "Un mecanismo para conectar cuentas entre regiones."
    ],
    correcta: 1,
    explicacion: " La correcta es una persona o aplicación que puede autenticarse en una cuenta de AWS porque un usuario IAM representa una identidad que puede iniciar sesión o usar credenciales para acceder a servicios. Un recurso que define permisos sobre otros servicios se parece más a una política IAM. Un conjunto de permisos reutilizables puede asociarse más a una política o a un rol, según el caso. Un mecanismo para conectar cuentas entre regiones no define a un usuario IAM."
  },
  {
    enunciado: "¿Qué es una política de IAM y en qué formato están escritas normalmente?",
    opciones: [
      "Un conjunto de reglas de red escritas en YAML.",
      "Un usuario especial con permisos administrativos.",
      "Un documento que define permisos sobre recursos y que está escrito en formato JSON.",
      "Un rol que se asigna automáticamente a los servicios de AWS."
    ],
    correcta: 2,
    explicacion: " La correcta es un documento que define permisos sobre recursos y que está escrito en formato JSON porque las políticas IAM indican qué acciones están permitidas o denegadas sobre qué recursos. Un conjunto de reglas de red escritas en YAML no corresponde a IAM, sino que recuerda más a configuraciones de red o infraestructura. Un usuario especial con permisos administrativos es incorrecto porque una política no es un usuario. Un rol asignado automáticamente a servicios es incorrecto porque un rol puede tener políticas, pero no es lo mismo que una política."
  },
  {
    enunciado: "En la cuenta de AWS que se presenta en el dibujo, ¿qué acciones podrá realizar el usuario user-2?",
    opciones: [
      "Iniciar y detener instancias EC2.",
      "Ver información de las instancias EC2, pero no modificarlas.",
      "Acceder a buckets de Amazon S3.",
      "Administrar usuarios y grupos de IAM."
    ],
    correcta: 1,
    explicacion: " La correcta es ver información de las instancias EC2, pero no modificarlas porque según el laboratorio el usuario user-2 tendría permisos de solo lectura o consulta sobre EC2. Iniciar y detener instancias EC2 es incorrecto porque eso requiere permisos de administración o modificación. Acceder a buckets de Amazon S3 es incorrecto si el usuario no tiene permisos asociados a S3. Administrar usuarios y grupos de IAM es incorrecto porque eso requiere permisos de IAM administrativos."
  },
  {
    enunciado: "Un usuario pertenece simultáneamente a los grupos EC2-Admin y S3-Support. Según las políticas mostradas en el laboratorio, ¿qué acciones podrá realizar este usuario?",
    opciones: [
      "Solo podrá ver información de EC2 y S3, sin realizar cambios.",
      "Podrá iniciar y detener instancias EC2 y leer objetos en Amazon S3.",
      "Podrá administrar completamente EC2, S3 e IAM.",
      "Ninguna de las anteriores."
    ],
    correcta: 1,
    explicacion: " La correcta es podrá iniciar y detener instancias EC2 y leer objetos en Amazon S3 porque al pertenecer a varios grupos, el usuario acumula los permisos permitidos por las políticas de esos grupos. Solo ver información de EC2 y S3 es incorrecto porque EC2-Admin le permite realizar acciones sobre EC2. Administrar completamente EC2, S3 e IAM es incorrecto porque los permisos indicados no implican administración completa de todos esos servicios. Ninguna de las anteriores es incorrecta porque la opción b sí coincide con los permisos combinados."
  },
  {
    enunciado: "Dada una dirección IPv4 como 192.0.2.0, ¿cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "Cada número decimal de la dirección IPv4 se representa usando 4 bits.",
      "Cada uno de los cuatro bloques de la dirección IPv4 se representa con 8 bits.",
      "La dirección IPv4 completa se representa usando 16 bits.",
      "El valor decimal máximo que puede tomar uno de los bloques es 512."
    ],
    correcta: 1,
    explicacion: " La correcta es cada uno de los cuatro bloques de la dirección IPv4 se representa con 8 bits porque una dirección IPv4 tiene 32 bits divididos en 4 octetos. Cada número decimal no usa 4 bits, sino 8 bits. La dirección IPv4 completa no usa 16 bits, sino 32 bits. El valor decimal máximo de un bloque no es 512, sino 255."
  },
  {
    enunciado: "¿Por qué fue necesario introducir el protocolo IPv6 frente a IPv4?",
    opciones: [
      "Porque IPv6 utiliza un formato de direcciones más legible que IPv4.",
      "Porque IPv4 no permite el uso de direcciones en formato hexadecimal.",
      "Porque el número de direcciones disponibles en IPv4 es insuficiente.",
      "Porque IPv6 sustituye completamente a los protocolos de enrutamiento."
    ],
    correcta: 2,
    explicacion: " La correcta es porque el número de direcciones disponibles en IPv4 es insuficiente porque IPv4 tiene un espacio de direcciones limitado y se estaba agotando por el crecimiento de dispositivos conectados. IPv6 no se creó principalmente por ser más legible, de hecho sus direcciones suelen ser más largas. Que IPv4 no use hexadecimal no es la razón principal del cambio. IPv6 no sustituye completamente a los protocolos de enrutamiento, sino que es un protocolo de direccionamiento de capa de red."
  },
  {
    enunciado: "¿Qué rango de direcciones IP representa la red 192.168.1.0/24?",
    opciones: [
      "Desde 192.168.1.0 hasta 192.168.1.255.",
      "Desde 192.168.1.1 hasta 192.168.1.24.",
      "Desde 192.168.0.0 hasta 192.168.255.255.",
      "Desde 192.168.1.0 hasta 192.168.1.24."
    ],
    correcta: 0,
    explicacion: " La correcta es desde 192.168.1.0 hasta 192.168.1.255 porque una red /24 usa los tres primeros octetos como parte de red y deja el último octeto para direcciones dentro de esa red. Desde 192.168.1.1 hasta 192.168.1.24 es incorrecto porque confunde /24 con acabar en .24. Desde 192.168.0.0 hasta 192.168.255.255 corresponde a un rango mucho más amplio, similar a un /16. Desde 192.168.1.0 hasta 192.168.1.24 también es incorrecto por la misma confusión con el prefijo /24."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones describe correctamente una función de una puerta de enlace a Internet (Internet Gateway) en una VPC?",
    opciones: [
      "Permitir la comunicación privada entre subredes dentro de la misma VPC sin acceso a Internet.",
      "Proporcionar acceso a Internet únicamente para instancias que no tienen direcciones IP públicas.",
      "Actuar como destino en las tablas de enrutamiento para el tráfico que debe salir a Internet.",
      "Ninguna de las anteriores."
    ],
    correcta: 2,
    explicacion: " La correcta es actuar como destino en las tablas de enrutamiento para el tráfico que debe salir a Internet porque una Internet Gateway se asocia a la VPC y se usa como salida hacia Internet mediante rutas como 0.0.0.0/0. Permitir comunicación privada entre subredes no necesita Internet Gateway, ya que eso se hace mediante el enrutamiento interno de la VPC. Proporcionar acceso a Internet únicamente para instancias sin IP pública es incorrecto porque normalmente una instancia pública necesita IP pública o el uso de otros mecanismos como NAT. Ninguna de las anteriores es incorrecta porque la opción c sí describe una función correcta."
  },
  {
    enunciado: "¿Qué significa permitir tráfico desde 0.0.0.0/0 en una regla de un grupo de seguridad de AWS?",
    opciones: [
      "Que solo se permite tráfico desde la red interna de la VPC.",
      "Que se permite tráfico desde cualquier dirección IP.",
      "Que únicamente se permite tráfico desde direcciones privadas.",
      "Que se restringe el acceso a una única subred concreta."
    ],
    correcta: 1,
    explicacion: " La correcta es que se permite tráfico desde cualquier dirección IP porque 0.0.0.0/0 representa todas las direcciones IPv4. Solo permitir tráfico desde la red interna de la VPC sería un rango privado o el CIDR de la propia VPC, no 0.0.0.0/0. Permitir únicamente direcciones privadas es incorrecto porque 0.0.0.0/0 incluye direcciones públicas y privadas. Restringir el acceso a una única subred concreta es incorrecto porque 0.0.0.0/0 es el rango más amplio posible."
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones es correcta sobre los Security Groups y las Network ACL (NACL) en AWS?",
    opciones: [
      "Las Network ACL se aplican a nivel de instancia y los Security Groups a nivel de subred.",
      "Los Security Groups se aplican a nivel de instancia y las Network ACL a nivel de subred.",
      "Los Security Groups y las Network ACL se aplican exactamente al mismo nivel."
    ],
    correcta: 1,
    explicacion: " La correcta es los Security Groups se aplican a nivel de instancia y las Network ACL a nivel de subred porque los Security Groups protegen recursos como instancias o interfaces de red, mientras que las NACL controlan el tráfico que entra y sale de una subred. Decir que las NACL se aplican a nivel de instancia y los Security Groups a nivel de subred es incorrecto porque está invertido. Decir que ambos se aplican exactamente al mismo nivel también es incorrecto porque actúan en capas distintas dentro de la VPC."
  },

  /* PREGUNTAS ABIERTAS CONVERTIDAS A TIPO TEST DE LOS PDF DE IGNACIO */
  /* CLASE 1-2 */
  /* ¿Qué es la nube?, ¿cómo era antes de que existiera?, ejemplos de nube en la vida diaria */

  {
    enunciado: "¿Qué es la nube en informática?",
    opciones: [
      "Un programa instalado siempre en el disco duro del usuario",
      "Un tipo de cable usado para conectar servidores",
      "Un conjunto de servicios y recursos informáticos accesibles por Internet",
      "Una red local que solo funciona dentro de una empresa"
    ],
    correcta: 2,
    explicacion: " La correcta es Un conjunto de servicios y recursos informáticos accesibles por Internet porque la nube permite usar almacenamiento, aplicaciones o servidores sin tenerlos físicamente en el propio equipo."
  },
  {
    enunciado: "Antes de que existiera la nube, ¿cómo se solían usar los recursos informáticos?",
    opciones: [
      "Se alquilaban siempre servidores externos por Internet",
      "Cada empresa o usuario debía tener sus propios equipos, servidores o programas instalados localmente",
      "Todo se guardaba automáticamente en servicios online",
      "No era posible almacenar información digital"
    ],
    correcta: 1,
    explicacion: " La correcta es Cada empresa o usuario debía tener sus propios equipos, servidores o programas instalados localmente porque antes era más común depender de infraestructura propia y software instalado en cada equipo."
  },
  {
    enunciado: "¿Qué ventaja principal ofrece la nube frente a tenerlo todo instalado o guardado localmente?",
    opciones: [
      "Permite acceder a servicios y archivos desde distintos dispositivos con conexión a Internet",
      "Impide compartir archivos con otras personas",
      "Hace obligatorio comprar servidores propios",
      "Solo funciona dentro de una red sin Internet"
    ],
    correcta: 0,
    explicacion: " La correcta es Permite acceder a servicios y archivos desde distintos dispositivos con conexión a Internet porque la nube centraliza los recursos en servidores remotos."
  },
  {
    enunciado: "¿Qué opción describe mejor cómo era el trabajo informático antes de usar servicios en la nube?",
    opciones: [
      "Todos los usuarios trabajaban siempre desde aplicaciones web",
      "Los archivos solo podían guardarse en redes sociales",
      "Todo dependía normalmente de servidores propios, discos físicos y programas instalados en local",
      "No existían ordenadores personales"
    ],
    correcta: 2,
    explicacion: " La correcta es Todo dependía normalmente de servidores propios, discos físicos y programas instalados en local porque antes de la nube era habitual mantener la infraestructura y los datos en equipos propios."
  },
  {
    enunciado: "Cuando usamos la nube, ¿dónde suelen estar realmente los datos o servicios?",
    opciones: [
      "Siempre dentro del teclado",
      "Solo en la memoria RAM del usuario",
      "En el cable de red",
      "En servidores remotos accesibles por Internet"
    ],
    correcta: 3,
    explicacion: " La correcta es En servidores remotos accesibles por Internet porque la nube se basa en usar recursos informáticos alojados fuera del equipo local."
  },
  {
    enunciado: "¿Cuál de estas acciones es un uso cotidiano de la nube?",
    opciones: [
      "Pulsar el botón de encendido del PC",
      "Cambiar un cable SATA",
      "Ver un vídeo en streaming",
      "Limpiar el ventilador del procesador"
    ],
    correcta: 2,
    explicacion: " La correcta es Ver un vídeo en streaming porque el contenido se reproduce desde servidores remotos a través de Internet."
  },

  /* ¿Qué pasaría si la nube dejara de funcionar un día entero? */

  {
    enunciado: "¿Qué podría ocurrir si la nube dejara de funcionar durante un día entero?",
    opciones: [
      "Solo dejarían de funcionar los ordenadores antiguos",
      "Muchos servicios online dejarían de estar disponibles temporalmente",
      "Internet funcionaría más rápido de lo normal",
      "Los archivos locales del ordenador se borrarían automáticamente"
    ],
    correcta: 1,
    explicacion: " La correcta es Muchos servicios online dejarían de estar disponibles temporalmente porque muchas aplicaciones, páginas y plataformas dependen de servidores en la nube para funcionar."
  },
  {
    enunciado: "Si un servicio en la nube se cae, ¿qué problema podría tener un usuario?",
    opciones: [
      "No poder acceder a archivos o aplicaciones guardadas online",
      "No poder encender físicamente su ordenador",
      "Perder automáticamente todos los programas instalados en local",
      "Cambiar obligatoriamente de sistema operativo"
    ],
    correcta: 0,
    explicacion: " La correcta es No poder acceder a archivos o aplicaciones guardadas online porque, si el servicio remoto no funciona, el usuario no puede usar lo que depende de esa conexión."
  },
  {
    enunciado: "¿Qué sector se vería afectado si la nube dejara de funcionar un día entero?",
    opciones: [
      "Solo los videojuegos offline",
      "Solo los dispositivos sin conexión a Internet",
      "Solo los teclados y ratones",
      "Empresas, educación, comunicaciones y servicios digitales"
    ],
    correcta: 3,
    explicacion: " La correcta es Empresas, educación, comunicaciones y servicios digitales porque muchos sistemas actuales usan la nube para correo, almacenamiento, clases online, copias de seguridad, aplicaciones y comunicación."
  },

  /*CLASE 5-6*/

  /* ¿Qué es una región en AWS y cuál es la diferencia entre una región y una Availability Zone? */
  {
    enunciado: "¿Qué es una región en AWS?",
    opciones: [
      "Un único servidor físico donde se guardan todos los datos",
      "Un grupo de usuarios que acceden a una misma cuenta",
      "Una zona geográfica donde AWS tiene infraestructura y servicios disponibles",
      "Una copia local instalada en el ordenador del cliente"
    ],
    correcta: 2,
    explicacion: " La correcta es Una zona geográfica donde AWS tiene infraestructura y servicios disponibles porque una región representa una ubicación amplia, como Europa o Estados Unidos, donde AWS ofrece sus servicios."
  },
  {
    enunciado: "¿Qué es una Availability Zone en AWS?",
    opciones: [
      "Un centro o conjunto de centros de datos aislados dentro de una región",
      "Una cuenta gratuita de AWS",
      "Un servicio exclusivo para crear usuarios IAM",
      "Una copia de seguridad guardada siempre en otro continente"
    ],
    correcta: 0,
    explicacion: " La correcta es Un centro o conjunto de centros de datos aislados dentro de una región porque una Availability Zone pertenece a una región y permite separar recursos para mejorar disponibilidad y tolerancia a fallos."
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre una región y una Availability Zone en AWS?",
    opciones: [
      "La región sirve solo para bases de datos y la Availability Zone solo para redes",
      "La Availability Zone contiene varias regiones",
      "No hay diferencia, son exactamente lo mismo",
      "La región es una ubicación geográfica amplia y la Availability Zone es una zona aislada dentro de esa región"
    ],
    correcta: 3,
    explicacion: " La correcta es La región es una ubicación geográfica amplia y la Availability Zone es una zona aislada dentro de esa región porque una región puede contener varias Availability Zones."
  },


  /* ¿Qué criterios me van a llevar a decidir elegir una región u otra? */

  {
    enunciado: "¿Qué criterio puede influir al elegir una región de AWS?",
    opciones: [
      "La cercanía a los usuarios para reducir la latencia",
      "El color del panel de administración",
      "El nombre del usuario IAM",
      "El tipo de navegador usado para acceder a AWS"
    ],
    correcta: 0,
    explicacion: " La correcta es La cercanía a los usuarios para reducir la latencia porque cuanto más cerca esté la región de los usuarios, normalmente menor será el tiempo de respuesta."
  },
  {
    enunciado: "¿Por qué una empresa puede elegir una región concreta de AWS por motivos legales?",
    opciones: [
      "Porque todas las regiones tienen exactamente las mismas leyes",
      "Porque los datos pueden tener que almacenarse en una zona geográfica concreta por normativa o cumplimiento",
      "Porque AWS solo permite usar una región por cuenta",
      "Porque las leyes solo afectan a los servidores físicos propios"
    ],
    correcta: 1,
    explicacion: " La correcta es Porque los datos pueden tener que almacenarse en una zona geográfica concreta por normativa o cumplimiento porque algunas normas exigen que la información permanezca en determinados países o zonas."
  },
  {
    enunciado: "Además de la latencia y la normativa, ¿qué criterio técnico y económico puede influir al elegir una región de AWS?",
    opciones: [
      "El nombre visual de la región en la consola",
      "La disponibilidad de servicios concretos y las diferencias de precio entre regiones",
      "El tipo de navegador usado para acceder a AWS",
      "La cantidad de usuarios IAM creados en la cuenta"
    ],
    correcta: 1,
    explicacion: " La correcta es La disponibilidad de servicios concretos y las diferencias de precio entre regiones porque no todos los servicios o características están disponibles en todas las regiones y, además, los precios pueden variar según la ubicación elegida."
  },

  /* CLASE 7-8 */

  /* ¿Qué tres factores son los fundamentales para determinar el coste de AWS?*/

  {
    enunciado: "¿Qué tres factores suelen ser fundamentales para determinar el coste en AWS?",
    opciones: [
      "Color de la consola, idioma de la cuenta y navegador usado",
      "Número de usuarios IAM, nombre del bucket y tipo de contraseña",
      "Cómputo, almacenamiento y transferencia de datos",
      "Sistema operativo local, marca del PC y velocidad del ratón"
    ],
    correcta: 2,
    explicacion: " La correcta es Cómputo, almacenamiento y transferencia de datos porque AWS suele cobrar principalmente por los recursos usados para procesar, guardar y mover información."
  },
  {
    enunciado: "¿Qué significa pagar por cómputo en AWS?",
    opciones: [
      "Pagar por el uso de recursos de procesamiento, como servidores o máquinas virtuales",
      "Pagar únicamente por cambiar el nombre de una instancia",
      "Pagar por usar el navegador para entrar en la consola",
      "Pagar solo por crear usuarios IAM"
    ],
    correcta: 0,
    explicacion: " La correcta es Pagar por el uso de recursos de procesamiento, como servidores o máquinas virtuales porque el cómputo se refiere a la capacidad de ejecutar aplicaciones y procesos."
  },
  {
    enunciado: "¿Qué significa la transferencia de datos en el coste de AWS?",
    opciones: [
      "La cantidad de monitores conectados al servidor",
      "El movimiento de datos entre servicios, regiones o hacia Internet",
      "La velocidad del teclado usado por el administrador",
      "El número de iconos visibles en la consola"
    ],
    correcta: 1,
    explicacion: " La correcta es El movimiento de datos entre servicios, regiones o hacia Internet porque AWS puede cobrar por el tráfico de red, especialmente cuando los datos salen hacia otros destinos."
  },

  /* ¿Qué es EC2 */

  {
    enunciado: "¿Qué es Amazon EC2?",
    opciones: [
      "Un servicio para almacenar objetos como fotos, copias de seguridad o archivos",
      "Un servicio de correo electrónico para usuarios finales",
      "Un servicio para crear bases de datos relacionales automáticamente",
      "Un servicio que permite crear y usar servidores virtuales en la nube"
    ],
    correcta: 3,
    explicacion: " La correcta es Un servicio que permite crear y usar servidores virtuales en la nube porque EC2 proporciona instancias con capacidad de cómputo para ejecutar sistemas y aplicaciones."
  },
  {
    enunciado: "¿Para qué se usa principalmente Amazon EC2?",
    opciones: [
      "Para ejecutar aplicaciones, servidores web o máquinas virtuales en la nube",
      "Para comprar dominios web exclusivamente",
      "Para guardar contraseñas de usuarios IAM",
      "Para diseñar la interfaz visual de la consola"
    ],
    correcta: 0,
    explicacion: " La correcta es Para ejecutar aplicaciones, servidores web o máquinas virtuales en la nube porque EC2 ofrece capacidad de procesamiento configurable."
  },
  {
    enunciado: "¿Qué recurso se crea normalmente al usar Amazon EC2?",
    opciones: [
      "Un bucket",
      "Una instancia",
      "Una zona horaria",
      "Una política de facturación"
    ],
    correcta: 1,
    explicacion: " La correcta es Una instancia porque en EC2 los servidores virtuales que se lanzan se llaman instancias."
  },

  /* ¿Qué es S3? */

  {
    enunciado: "¿Qué es Amazon S3?",
    opciones: [
      "Un servicio para crear redes privadas únicamente",
      "Un servicio para ejecutar contenedores Kubernetes",
      "Un servicio de almacenamiento de objetos en la nube",
      "Un servicio para sustituir el procesador físico del ordenador"
    ],
    correcta: 2,
    explicacion: " La correcta es Un servicio de almacenamiento de objetos en la nube porque S3 permite guardar archivos y datos como objetos dentro de buckets."
  },
  {
    enunciado: "¿Para qué se usa principalmente Amazon S3?",
    opciones: [
      "Para crear usuarios de Linux",
      "Para guardar archivos, copias de seguridad, imágenes o datos estáticos",
      "Para lanzar máquinas virtuales con sistema operativo",
      "Para reducir la memoria RAM de una instancia"
    ],
    correcta: 1,
    explicacion: " La correcta es Para guardar archivos, copias de seguridad, imágenes o datos estáticos porque S3 está pensado para almacenamiento de objetos."
  },
  {
    enunciado: "¿Qué recurso se crea normalmente al usar Amazon S3?",
    opciones: [
      "Una instancia EC2",
      "Una Availability Zone",
      "Un grupo de seguridad",
      "Un bucket"
    ],
    correcta: 3,
    explicacion: " La correcta es Un bucket porque en S3 los objetos se almacenan dentro de contenedores llamados buckets."
  },


  /* CLASE 9-10 */

  /* ¿Qué es una política de IAM y en qué formato están escritas? */

  {
    enunciado: "¿Qué es una política de IAM en AWS?",
    opciones: [
      "Un documento que define permisos sobre qué acciones se permiten o deniegan",
      "Un tipo de instancia EC2 para ejecutar aplicaciones",
      "Un bucket especial para guardar archivos privados",
      "Una región donde se crean usuarios automáticamente"
    ],
    correcta: 0,
    explicacion: " La correcta es Un documento que define permisos sobre qué acciones se permiten o deniegan porque una política de IAM indica qué puede hacer una identidad o recurso dentro de AWS."
  },
  {
    enunciado: "¿En qué formato están escritas normalmente las políticas de IAM?",
    opciones: [
      "HTML",
      "JSON",
      "CSS",
      "PNG"
    ],
    correcta: 1,
    explicacion: " La correcta es JSON porque las políticas de IAM se escriben como documentos estructurados con claves y valores, usando formato JSON."
  },
  {
    enunciado: "¿Qué información suele incluir una política de IAM?",
    opciones: [
      "El color de la consola y el idioma de la cuenta",
      "La temperatura de los servidores físicos",
      "Acciones permitidas o denegadas, recursos afectados y condiciones",
      "El tamaño del monitor del administrador"
    ],
    correcta: 2,
    explicacion: " La correcta es Acciones permitidas o denegadas, recursos afectados y condiciones porque una política IAM define permisos indicando acciones, recursos y, si hace falta, condiciones de aplicación."
  },

  /* ¿Quién es el responsable de gestionar la seguridad de mi aplicación y de los datos que utiliza? */

  {
    enunciado: "Según el modelo de responsabilidad compartida de AWS, ¿quién es responsable de la seguridad de la aplicación y de los datos que utiliza?",
    opciones: [
      "AWS únicamente",
      "El proveedor de Internet",
      "El cliente",
      "El fabricante del ordenador"
    ],
    correcta: 2,
    explicacion: " La correcta es El cliente porque en AWS el cliente es responsable de proteger sus aplicaciones, sus datos, sus permisos y su configuración de seguridad."
  },
  {
    enunciado: "¿Qué parte de la seguridad corresponde normalmente al cliente en AWS?",
    opciones: [
      "La seguridad física de los centros de datos de AWS",
      "La seguridad de sus datos, aplicaciones, usuarios y permisos",
      "La reparación del hardware físico de los servidores",
      "La alimentación eléctrica de los centros de datos"
    ],
    correcta: 1,
    explicacion: " La correcta es La seguridad de sus datos, aplicaciones, usuarios y permisos porque el cliente gestiona lo que despliega y configura dentro de la nube."
  },
  {
    enunciado: "¿Qué idea resume mejor la responsabilidad del cliente en AWS?",
    opciones: [
      "AWS protege todo y el cliente no tiene que configurar nada",
      "El cliente solo se encarga del cableado físico",
      "El cliente es responsable de la seguridad dentro de la nube",
      "La seguridad depende únicamente del navegador usado"
    ],
    correcta: 2,
    explicacion: " La correcta es El cliente es responsable de la seguridad dentro de la nube porque debe proteger sus aplicaciones, datos, accesos, sistemas y configuraciones."
  },

  /* CLASE 11-12 */
  /* ¿Cuántas ips hay disponibles para la red 192.168.1.0 / 24 ? */

  {
    enunciado: "¿Cuántas direcciones IP totales tiene la red 192.168.1.0/24?",
    opciones: [
      "128",
      "254",
      "256",
      "512"
    ],
    correcta: 2,
    explicacion: " La correcta es 256 porque una red /24 deja 8 bits para hosts, y 2^8 da 256 direcciones IP totales."
  },
  {
    enunciado: "¿Cuántas IP utilizables para hosts tiene la red 192.168.1.0/24?",
    opciones: [
      "254",
      "255",
      "256",
      "252"
    ],
    correcta: 0,
    explicacion: " La correcta es 254 porque una red /24 tiene 256 direcciones totales, pero se restan la dirección de red y la dirección de broadcast."
  },
  {
    enunciado: "En la red 192.168.1.0/24, ¿qué direcciones no se pueden asignar normalmente a hosts?",
    opciones: [
      "192.168.1.1 y 192.168.1.2",
      "192.168.1.100 y 192.168.1.200",
      "192.168.1.10 y 192.168.1.20",
      "192.168.1.0 y 192.168.1.255"
    ],
    correcta: 3,
    explicacion: " La correcta es 192.168.1.0 y 192.168.1.255 porque la primera es la dirección de red y la última es la dirección de broadcast."
  },

  /* ¿Para qué sirve la tabla de enrutamiento en la red? */

  {
    enunciado: "¿Para qué sirve la tabla de enrutamiento en una red?",
    opciones: [
      "Para guardar contraseñas de usuarios",
      "Para decidir por dónde enviar los paquetes hacia su destino",
      "Para asignar nombres DNS a páginas web",
      "Para bloquear físicamente los puertos del switch"
    ],
    correcta: 1,
    explicacion: " La correcta es Para decidir por dónde enviar los paquetes hacia su destino porque la tabla de enrutamiento indica qué camino o siguiente salto debe usar el router para alcanzar una red."
  },
  {
    enunciado: "¿Qué información contiene normalmente una tabla de enrutamiento?",
    opciones: [
      "Redes de destino, máscaras, siguiente salto e interfaz de salida",
      "Usuarios, contraseñas y permisos IAM",
      "Direcciones MAC de todos los dispositivos Bluetooth",
      "Archivos guardados en el disco duro"
    ],
    correcta: 0,
    explicacion: " La correcta es Redes de destino, máscaras, siguiente salto e interfaz de salida porque la tabla de enrutamiento necesita esos datos para saber cómo reenviar los paquetes."
  },
  {
    enunciado: "Si un router recibe un paquete, ¿qué consulta para saber hacia dónde enviarlo?",
    opciones: [
      "La tabla ARP del navegador",
      "El historial de comandos del usuario",
      "La tabla de enrutamiento",
      "El registro de contraseñas del sistema"
    ],
    correcta: 2,
    explicacion: " La correcta es La tabla de enrutamiento porque el router compara la IP de destino con sus rutas conocidas para elegir la mejor salida."
  },

  /* CLASE 12-13 */
  /* ¿Cuál es la diferencia entre un grupo de seguridad y un ACL en relación a la seguridad de la VPC? */

  {
    enunciado: "¿Cuál es una diferencia principal entre un grupo de seguridad y una ACL de red en una VPC?",
    opciones: [
      "El grupo de seguridad se aplica a instancias o interfaces de red y la ACL de red se aplica a subredes",
      "La ACL de red solo se aplica a usuarios IAM y el grupo de seguridad solo a buckets S3",
      "El grupo de seguridad funciona únicamente con IPv6 y la ACL de red solo con IPv4",
      "No hay ninguna diferencia, son exactamente lo mismo"
    ],
    correcta: 0,
    explicacion: " La correcta es El grupo de seguridad se aplica a instancias o interfaces de red y la ACL de red se aplica a subredes porque en una VPC los grupos de seguridad protegen recursos concretos, mientras que las ACL de red filtran el tráfico a nivel de subred."
  },
  {
    enunciado: "¿Qué diferencia hay entre un grupo de seguridad y una ACL de red respecto al estado de las conexiones?",
    opciones: [
      "Ambos son siempre stateless",
      "El grupo de seguridad es stateful y la ACL de red es stateless",
      "La ACL de red es stateful y el grupo de seguridad es stateless",
      "Ambos solo filtran tráfico DNS"
    ],
    correcta: 1,
    explicacion: " La correcta es El grupo de seguridad es stateful y la ACL de red es stateless porque el grupo de seguridad recuerda el estado de la conexión y permite automáticamente el tráfico de respuesta, mientras que la ACL de red evalúa reglas de entrada y salida por separado."
  },
  {
    enunciado: "¿Qué diferencia hay entre un grupo de seguridad y una ACL de red en cuanto a reglas permitidas o denegadas?",
    opciones: [
      "Los grupos de seguridad solo permiten reglas de denegación y las ACL solo permiten reglas de permiso",
      "Ambos permiten únicamente reglas de denegación",
      "Los grupos de seguridad permiten reglas allow, mientras que las ACL de red permiten reglas allow y deny",
      "Ninguno permite crear reglas"
    ],
    correcta: 2,
    explicacion: " La correcta es Los grupos de seguridad permiten reglas allow, mientras que las ACL de red permiten reglas allow y deny porque en AWS los grupos de seguridad se basan en permitir tráfico, mientras que las ACL de red pueden permitir o denegar tráfico mediante reglas ordenadas."
  },

  /* ¿Qué significa que en mi grupo de seguridad permita la entrada al puerto 80 a 0.0.0.0/0? */

  {
    enunciado: "¿Qué significa permitir la entrada al puerto 80 desde 0.0.0.0/0 en un grupo de seguridad?",
    opciones: [
      "Que solo pueden acceder usuarios de la red local",
      "Que se permite tráfico HTTP desde cualquier dirección IPv4",
      "Que se bloquea todo el tráfico web",
      "Que solo se permite tráfico HTTPS cifrado"
    ],
    correcta: 1,
    explicacion: " La correcta es Que se permite tráfico HTTP desde cualquier dirección IPv4 porque el puerto 80 se usa normalmente para HTTP y 0.0.0.0/0 representa cualquier origen IPv4."
  },
  {
    enunciado: "En una regla de entrada de un grupo de seguridad, ¿qué representa 0.0.0.0/0?",
    opciones: [
      "Cualquier dirección IPv4",
      "Solo la IP privada de la instancia",
      "Solo la red 192.168.1.0/24",
      "Una dirección IPv6 concreta"
    ],
    correcta: 0,
    explicacion: " La correcta es Cualquier dirección IPv4 porque 0.0.0.0/0 indica todos los posibles orígenes IPv4."
  },
  {
    enunciado: "¿Qué riesgo implica permitir el puerto 80 a 0.0.0.0/0?",
    opciones: [
      "Que se elimina automáticamente la instancia EC2",
      "Que se bloquean todas las conexiones HTTP",
      "Que el servicio HTTP queda accesible desde Internet si la instancia tiene ruta pública",
      "Que solo se permite acceso desde la propia VPC"
    ],
    correcta: 2,
    explicacion: " La correcta es Que el servicio HTTP queda accesible desde Internet si la instancia tiene ruta pública porque cualquier origen IPv4 podría intentar conectarse al puerto 80."
  },

  /* CLASE 14-15 */
  /* ¿Qué es AWS Cloud Front?, ¿qué ventajas nos ofrece? */

  {
    enunciado: "¿Qué es AWS CloudFront?",
    opciones: [
      "Un servicio para crear usuarios y permisos IAM",
      "Un servicio CDN que distribuye contenido desde ubicaciones cercanas al usuario",
      "Un servicio para lanzar máquinas virtuales en la nube",
      "Un sistema de copias de seguridad exclusivo para bases de datos"
    ],
    correcta: 1,
    explicacion: " La correcta es Un servicio CDN que distribuye contenido desde ubicaciones cercanas al usuario porque CloudFront acelera la entrega de contenido usando una red de ubicaciones distribuidas."
  },
  {
    enunciado: "¿Qué ventaja principal ofrece AWS CloudFront?",
    opciones: [
      "Reduce la latencia al entregar contenido desde ubicaciones más cercanas al usuario",
      "Elimina la necesidad de tener conexión a Internet",
      "Sustituye completamente a IAM",
      "Convierte automáticamente una instancia EC2 en una base de datos"
    ],
    correcta: 0,
    explicacion: " La correcta es Reduce la latencia al entregar contenido desde ubicaciones más cercanas al usuario porque CloudFront usa ubicaciones de borde para servir contenido más rápido."
  },
  {
    enunciado: "¿Para qué tipo de contenido se puede usar AWS CloudFront?",
    opciones: [
      "Solo para contraseñas de usuarios",
      "Solo para comandos de consola",
      "Solo para crear subredes privadas",
      "Para páginas web, imágenes, vídeos, archivos estáticos y contenido dinámico"
    ],
    correcta: 3,
    explicacion: " La correcta es Para páginas web, imágenes, vídeos, archivos estáticos y contenido dinámico porque CloudFront permite distribuir distintos tipos de contenido a usuarios de diferentes ubicaciones."
  },
  {
    enunciado: "¿Qué ocurre cuando CloudFront tiene una copia del contenido en una ubicación cercana al usuario?",
    opciones: [
      "El usuario puede recibir el contenido más rápido sin ir siempre al servidor de origen",
      "La cuenta de AWS se convierte automáticamente en gratuita",
      "Se elimina el bucket S3 original",
      "Se bloquea el acceso desde navegadores web"
    ],
    correcta: 0,
    explicacion: " La correcta es El usuario puede recibir el contenido más rápido sin ir siempre al servidor de origen porque CloudFront puede guardar contenido en caché en ubicaciones de borde."
  },
  {
    enunciado: "¿Qué significa que CloudFront use ubicaciones de borde?",
    opciones: [
      "Que solo funciona en una única región de AWS",
      "Que acerca el contenido a los usuarios mediante puntos distribuidos por diferentes zonas",
      "Que solo sirve para conectar discos duros externos",
      "Que obliga a instalar servidores físicos en la empresa"
    ],
    correcta: 1,
    explicacion: " La correcta es Que acerca el contenido a los usuarios mediante puntos distribuidos por diferentes zonas porque las ubicaciones de borde permiten entregar contenido desde puntos más próximos al usuario final."
  },
  {
    enunciado: "¿Qué beneficio puede aportar CloudFront al servidor de origen?",
    opciones: [
      "Aumentar siempre el tamaño de la instancia EC2",
      "Eliminar todas las reglas de seguridad",
      "Reducir carga al servir parte del contenido desde la caché",
      "Cambiar automáticamente la región de AWS"
    ],
    correcta: 2,
    explicacion: " La correcta es Reducir carga al servir parte del contenido desde la caché porque CloudFront puede responder peticiones desde sus ubicaciones de borde sin consultar siempre al servidor de origen."
  },

  /* ¿Qué es una AMI?, ¿para qué se utiliza en la creación de instancias EC2? */

  {
    enunciado: "¿Qué es una AMI en AWS?",
    opciones: [
      "Una política de permisos escrita en JSON",
      "Una imagen que contiene la información necesaria para lanzar una instancia EC2",
      "Un bucket usado para almacenar objetos en S3",
      "Una regla de entrada de un grupo de seguridad"
    ],
    correcta: 1,
    explicacion: " La correcta es Una imagen que contiene la información necesaria para lanzar una instancia EC2 porque una AMI incluye la base del sistema que se usará para crear la instancia."
  },
  {
    enunciado: "¿Para qué se utiliza una AMI al crear una instancia EC2?",
    opciones: [
      "Para elegir la base del sistema operativo y configuración inicial de la instancia",
      "Para decidir únicamente el precio mensual de AWS",
      "Para crear una zona de disponibilidad nueva",
      "Para sustituir las reglas del grupo de seguridad"
    ],
    correcta: 0,
    explicacion: " La correcta es Para elegir la base del sistema operativo y configuración inicial de la instancia porque al lanzar una EC2 se selecciona una AMI como plantilla de arranque."
  },
  {
    enunciado: "¿Qué puede incluir una AMI usada en EC2?",
    opciones: [
      "Solo el nombre del usuario IAM",
      "Solo la dirección IP pública de la instancia",
      "Solo las reglas DNS de Route 53",
      "Un sistema operativo, configuraciones y software preinstalado"
    ],
    correcta: 3,
    explicacion: " La correcta es Un sistema operativo, configuraciones y software preinstalado porque una AMI actúa como plantilla para crear instancias EC2 con una base ya preparada."
  },

  /* CLASE 16-17 */
  /* EC2:¿se puede cambiar el tipo de una instancia que está arrancada? */

  {
    enunciado: "En Amazon EC2, ¿se puede cambiar el tipo de una instancia mientras está arrancada?",
    opciones: [
      "Sí, siempre se puede cambiar sin detenerla",
      "No, normalmente hay que detener la instancia antes de cambiar su tipo",
      "Solo se puede cambiar si la instancia está en S3",
      "Solo se puede cambiar desde IAM"
    ],
    correcta: 1,
    explicacion: " La correcta es No, normalmente hay que detener la instancia antes de cambiar su tipo porque AWS requiere que la instancia esté detenida para modificar su tipo de instancia."
  },
  {
    enunciado: "¿Qué debes hacer normalmente antes de cambiar el tipo de una instancia EC2?",
    opciones: [
      "Detener la instancia",
      "Eliminar la AMI",
      "Borrar el grupo de seguridad",
      "Cambiar la región de AWS"
    ],
    correcta: 0,
    explicacion: " La correcta es Detener la instancia porque el cambio de tipo de instancia EC2 se realiza normalmente cuando la instancia no está en ejecución."
  },
  {
    enunciado: "¿Qué cambia al modificar el tipo de una instancia EC2?",
    opciones: [
      "El nombre del bucket S3",
      "El número de regiones disponibles",
      "La capacidad de recursos como CPU, memoria o red",
      "El formato de las políticas IAM"
    ],
    correcta: 2,
    explicacion: " La correcta es La capacidad de recursos como CPU, memoria o red porque el tipo de instancia determina las características hardware virtuales de la EC2."
  },

  /* EC2, ¿qué ocurre con los discos que están asociados a una instancia (EBS Elastic Block Storage) cuando se para el servidor? */

  {
    enunciado: "En EC2, ¿qué ocurre con los volúmenes EBS asociados cuando se para una instancia?",
    opciones: [
      "Se borran automáticamente siempre",
      "Se convierten en buckets S3",
      "Permanecen conservados y vuelven a estar disponibles al arrancar la instancia",
      "Se mueven a otra región automáticamente"
    ],
    correcta: 2,
    explicacion: " La correcta es Permanecen conservados y vuelven a estar disponibles al arrancar la instancia porque los volúmenes EBS son almacenamiento persistente asociado a la instancia."
  },
  {
    enunciado: "¿Qué significa que EBS sea almacenamiento persistente en EC2?",
    opciones: [
      "Que los datos pueden mantenerse aunque la instancia se detenga",
      "Que los datos se borran cada vez que se apaga la instancia",
      "Que solo sirve para guardar páginas web públicas",
      "Que sustituye a los grupos de seguridad"
    ],
    correcta: 0,
    explicacion: " La correcta es Que los datos pueden mantenerse aunque la instancia se detenga porque EBS no desaparece simplemente por parar el servidor."
  },
  {
    enunciado: "Si paras una instancia EC2 con un volumen EBS asociado, ¿qué ocurre normalmente con los datos del disco?",
    opciones: [
      "Se eliminan al instante",
      "Se mantienen en el volumen EBS",
      "Se convierten en una política IAM",
      "Se copian obligatoriamente a CloudFront"
    ],
    correcta: 1,
    explicacion: " La correcta es Se mantienen en el volumen EBS porque EBS está diseñado para conservar los datos aunque la instancia EC2 esté parada."
  },

  /* ¿Para qué sirve una ip elástica? */

  {
    enunciado: "¿Para qué sirve una IP elástica en AWS?",
    opciones: [
      "Para asignar una dirección IPv4 pública fija a un recurso como una instancia EC2",
      "Para aumentar automáticamente la memoria RAM de una instancia",
      "Para crear una copia de seguridad de un volumen EBS",
      "Para convertir una subred privada en una región"
    ],
    correcta: 0,
    explicacion: " La correcta es Para asignar una dirección IPv4 pública fija a un recurso como una instancia EC2 porque una IP elástica permite mantener la misma dirección pública aunque se detenga o cambie la instancia."
  },
  {
    enunciado: "¿Qué problema evita una IP elástica en una instancia EC2?",
    opciones: [
      "Que el sistema operativo se actualice",
      "Que cambie la IP pública al parar y arrancar la instancia",
      "Que se creen usuarios IAM",
      "Que se borren automáticamente los buckets S3"
    ],
    correcta: 1,
    explicacion: " La correcta es Que cambie la IP pública al parar y arrancar la instancia porque una IP elástica se mantiene fija y puede reasociarse a la instancia."
  },
  {
    enunciado: "¿Qué permite hacer una IP elástica si una instancia EC2 falla?",
    opciones: [
      "Eliminar automáticamente todos los volúmenes EBS",
      "Crear una nueva región de AWS",
      "Asociar esa misma IP pública a otra instancia",
      "Cambiar una política IAM a formato HTML"
    ],
    correcta: 2,
    explicacion: " La correcta es Asociar esa misma IP pública a otra instancia porque la IP elástica puede reasignarse a otro recurso para mantener el mismo punto de acceso público."
  },

  /* CLASE 18-19 */
  /* ¿A través de qué protocolo nos conectamos a servidores Windows? */

  {
    enunciado: "¿A través de qué protocolo nos conectamos normalmente a servidores Windows de forma remota?",
    opciones: [
      "SSH",
      "HTTP",
      "RDP",
      "FTP"
    ],
    correcta: 2,
    explicacion: " La correcta es RDP porque Remote Desktop Protocol permite conectarse de forma remota al escritorio de servidores Windows. SSH se usa más para Linux, HTTP es para web y FTP es para transferencia de archivos."
  },
  {
    enunciado: "¿Qué protocolo se usa para acceder al escritorio remoto de un servidor Windows?",
    opciones: [
      "RDP",
      "DNS",
      "SMTP",
      "SNMP"
    ],
    correcta: 0,
    explicacion: " La correcta es RDP porque es el protocolo usado para Escritorio remoto en sistemas Windows."
  },

  /* ¿Cómo hago para añadir un nuevo disco duro a un servidor Windows? */

  {
    enunciado: "¿Qué debes hacer primero en AWS para añadir un nuevo disco a un servidor Windows EC2?",
    opciones: [
      "Crear y asociar un nuevo volumen EBS a la instancia",
      "Crear una nueva cuenta IAM",
      "Cambiar la región de AWS",
      "Eliminar la AMI original"
    ],
    correcta: 0,
    explicacion: " La correcta es Crear y asociar un nuevo volumen EBS a la instancia porque en EC2 los discos adicionales se añaden normalmente creando un volumen EBS y adjuntándolo al servidor."
  },
  {
    enunciado: "Después de asociar un nuevo volumen EBS a un servidor Windows, ¿qué hay que hacer dentro de Windows?",
    opciones: [
      "Abrir el Administrador de discos para inicializar, formatear y asignar letra al disco",
      "Cambiar la contraseña del usuario administrador",
      "Crear un bucket S3 con el mismo nombre",
      "Desactivar el grupo de seguridad"
    ],
    correcta: 0,
    explicacion: " La correcta es Abrir el Administrador de discos para inicializar, formatear y asignar letra al disco porque Windows detecta el disco, pero normalmente hay que prepararlo antes de poder usarlo."
  },
  {
    enunciado: "¿Qué pasos son habituales para que Windows pueda usar un disco nuevo añadido a una instancia EC2?",
    opciones: [
      "Crear usuario IAM, abrir CloudFront y cambiar DNS",
      "Inicializar el disco, crear un volumen, formatearlo y asignarle una letra",
      "Borrar la instancia, eliminar la AMI y crear una VPC nueva",
      "Cambiar el puerto RDP de 3389 a 80"
    ],
    correcta: 1,
    explicacion: " La correcta es Inicializar el disco, crear un volumen, formatearlo y asignarle una letra porque un disco nuevo no queda listo para guardar datos hasta que Windows lo prepara desde el Administrador de discos."
  },

  /* CLASE 20-21 */
  /* ¿Cuando tiene sentido utilizar S3 y cuando EBS para el almacenamiento? */

  {
    enunciado: "¿Cuándo tiene más sentido usar Amazon S3 para almacenamiento?",
    opciones: [
      "Cuando se necesitan guardar objetos como archivos, imágenes, copias de seguridad o contenido estático",
      "Cuando se necesita un disco de sistema para arrancar una instancia EC2",
      "Cuando se quiere ampliar la CPU de una instancia",
      "Cuando se necesita conectarse por RDP a Windows"
    ],
    correcta: 0,
    explicacion: " La correcta es Cuando se necesitan guardar objetos como archivos, imágenes, copias de seguridad o contenido estático porque S3 es almacenamiento de objetos pensado para guardar datos accesibles mediante servicios y aplicaciones."
  },
  {
    enunciado: "¿Cuándo tiene más sentido usar Amazon EBS?",
    opciones: [
      "Cuando se quiere alojar una página estática sin servidor",
      "Cuando una instancia EC2 necesita un disco persistente como si fuera un disco duro",
      "Cuando se quiere distribuir contenido con baja latencia global",
      "Cuando se quiere crear una política IAM"
    ],
    correcta: 1,
    explicacion: " La correcta es Cuando una instancia EC2 necesita un disco persistente como si fuera un disco duro porque EBS funciona como almacenamiento en bloque asociado a una instancia EC2."
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre S3 y EBS?",
    opciones: [
      "S3 sirve solo para permisos e IAM, mientras que EBS sirve solo para DNS",
      "S3 y EBS son exactamente lo mismo",
      "S3 es almacenamiento de objetos y EBS es almacenamiento en bloque para instancias EC2",
      "S3 solo funciona con Windows y EBS solo con Linux"
    ],
    correcta: 2,
    explicacion: " La correcta es S3 es almacenamiento de objetos y EBS es almacenamiento en bloque para instancias EC2 porque S3 guarda objetos en buckets, mientras que EBS actúa como un disco conectado a una EC2."
  },

  /* ¿S3 es un servicio global o está en una zona de disponibilidad? */

  {
    enunciado: "¿Amazon S3 es un servicio global o está en una zona de disponibilidad?",
    opciones: [
      "Está asociado a una región, no a una única zona de disponibilidad",
      "Está únicamente dentro de una Availability Zone",
      "Es solo un servicio local instalado en EC2",
      "Solo funciona dentro de una subred privada"
    ],
    correcta: 0,
    explicacion: " La correcta es Está asociado a una región, no a una única zona de disponibilidad porque los buckets de S3 se crean en una región de AWS, pero AWS replica internamente los datos entre varias zonas de disponibilidad dentro de esa región."
  },
  {
    enunciado: "Cuando creas un bucket de S3, ¿qué debes elegir normalmente?",
    opciones: [
      "Una instancia EC2 concreta",
      "Una región de AWS",
      "Un puerto TCP",
      "Una dirección MAC"
    ],
    correcta: 1,
    explicacion: " La correcta es Una región de AWS porque los buckets de S3 se crean dentro de una región concreta, como eu-west-1 o eu-south-2."
  },
  {
    enunciado: "¿Qué afirmación sobre Amazon S3 es correcta?",
    opciones: [
      "S3 se crea siempre dentro de una única Availability Zone",
      "S3 solo se puede usar si hay una instancia EC2 encendida",
      "S3 está asociado a una región y ofrece alta disponibilidad dentro de ella",
      "S3 es un volumen en bloque conectado directamente a EC2"
    ],
    correcta: 2,
    explicacion: " La correcta es S3 está asociado a una región y ofrece alta disponibilidad dentro de ella porque S3 no depende de una única zona de disponibilidad, sino que está diseñado para almacenar datos de forma duradera dentro de la región elegida."
  },

  /* CLASE 22-23 */
  /* ¿Qué diferencias hay entre utilizar Amazon RDS y utilizar EC2 con una base de datos? */

  {
    enunciado: "¿Cuál es una diferencia principal entre Amazon RDS y una base de datos instalada en EC2?",
    opciones: [
      "RDS es un servicio gestionado y EC2 requiere administrar más aspectos del servidor y la base de datos",
      "EC2 solo permite usar bases de datos NoSQL",
      "RDS sirve únicamente para almacenar imágenes en buckets",
      "No hay ninguna diferencia entre RDS y EC2"
    ],
    correcta: 0,
    explicacion: " La correcta es RDS es un servicio gestionado y EC2 requiere administrar más aspectos del servidor y la base de datos porque en RDS AWS se encarga de muchas tareas como mantenimiento, copias de seguridad y actualizaciones, mientras que en EC2 el usuario gestiona más la máquina y la base de datos."
  },
  {
    enunciado: "¿Qué ventaja ofrece Amazon RDS frente a instalar una base de datos en EC2?",
    opciones: [
      "Permite evitar completamente el uso de Internet",
      "Facilita tareas como copias de seguridad, mantenimiento y alta disponibilidad",
      "Convierte automáticamente la base de datos en un bucket S3",
      "Elimina la necesidad de crear usuarios y permisos"
    ],
    correcta: 1,
    explicacion: " La correcta es Facilita tareas como copias de seguridad, mantenimiento y alta disponibilidad porque RDS es un servicio administrado que reduce el trabajo manual de gestión de la base de datos."
  },
  {
    enunciado: "¿Cuándo puede tener sentido usar EC2 con una base de datos instalada manualmente?",
    opciones: [
      "Cuando se quiere usar únicamente CloudFront",
      "Cuando se necesita solo almacenamiento de objetos",
      "Cuando se necesita más control sobre el sistema operativo, configuración o instalación de la base de datos",
      "Cuando se quiere crear una zona de disponibilidad nueva"
    ],
    correcta: 2,
    explicacion: " La correcta es Cuando se necesita más control sobre el sistema operativo, configuración o instalación de la base de datos porque en EC2 el usuario administra directamente el servidor y puede personalizar más el entorno."
  },

  /* ¿Qué ventajas tiene la configuración de Amazon RDS MultiAZ? */

  {
    enunciado: "¿Qué ventaja principal ofrece Amazon RDS Multi-AZ?",
    opciones: [
      "Permite guardar archivos estáticos como si fuera S3",
      "Aumenta la disponibilidad de la base de datos ante fallos",
      "Convierte una base de datos relacional en una instancia EC2",
      "Elimina la necesidad de usar contraseñas"
    ],
    correcta: 1,
    explicacion: " La correcta es Aumenta la disponibilidad de la base de datos ante fallos porque Multi-AZ mantiene una réplica en otra zona de disponibilidad para poder continuar el servicio si falla la principal."
  },
  {
    enunciado: "¿Qué ocurre normalmente si falla la instancia principal en una configuración RDS Multi-AZ?",
    opciones: [
      "Se produce un failover automático hacia la instancia secundaria",
      "Se borra la base de datos automáticamente",
      "La base de datos se convierte en un bucket S3",
      "La región de AWS deja de existir"
    ],
    correcta: 0,
    explicacion: " La correcta es Se produce un failover automático hacia la instancia secundaria porque Multi-AZ está diseñado para cambiar a otra zona de disponibilidad cuando hay un problema en la principal."
  },
  {
    enunciado: "¿Para qué se usa principalmente RDS Multi-AZ?",
    opciones: [
      "Para reducir el tamaño de las tablas",
      "Para crear usuarios IAM automáticamente",
      "Para mejorar alta disponibilidad y tolerancia a fallos",
      "Para sustituir CloudFront"
    ],
    correcta: 2,
    explicacion: " La correcta es Para mejorar alta disponibilidad y tolerancia a fallos porque Multi-AZ replica la base de datos en otra zona de disponibilidad y ayuda a mantener el servicio ante errores."
  },

  /* CLASE 24-25 */
  /* ¿Qué diferencias existen entre AWS Lambda y AWS EC2? */

  {
    enunciado: "¿Cuál es una diferencia principal entre AWS Lambda y Amazon EC2?",
    opciones: [
      "Lambda ejecuta código sin gestionar servidores y EC2 permite usar servidores virtuales",
      "EC2 solo sirve para almacenar objetos en buckets",
      "Lambda obliga a administrar manualmente el sistema operativo",
      "No existe ninguna diferencia entre Lambda y EC2"
    ],
    correcta: 0,
    explicacion: " La correcta es Lambda ejecuta código sin gestionar servidores y EC2 permite usar servidores virtuales porque Lambda es serverless, mientras que EC2 da más control sobre una máquina virtual."
  },
  {
    enunciado: "¿Cuándo tiene más sentido usar AWS Lambda en lugar de EC2?",
    opciones: [
      "Cuando se necesita administrar directamente el sistema operativo",
      "Cuando se quiere ejecutar código en respuesta a eventos sin mantener un servidor encendido",
      "Cuando se necesita crear un disco EBS como unidad principal",
      "Cuando se quiere conectarse por RDP a un escritorio Windows"
    ],
    correcta: 1,
    explicacion: " La correcta es Cuando se quiere ejecutar código en respuesta a eventos sin mantener un servidor encendido porque Lambda ejecuta funciones bajo demanda y no requiere gestionar una instancia."
  },
  {
    enunciado: "¿Cuándo tiene más sentido usar EC2 en lugar de Lambda?",
    opciones: [
      "Cuando solo se quiere guardar objetos en S3",
      "Cuando se necesita una función que dure siempre menos de un segundo",
      "Cuando se necesita más control sobre el servidor, el sistema operativo o el entorno de ejecución",
      "Cuando se quiere usar únicamente una política IAM en JSON"
    ],
    correcta: 2,
    explicacion: " La correcta es Cuando se necesita más control sobre el servidor, el sistema operativo o el entorno de ejecución porque EC2 permite administrar una máquina virtual con mayor libertad que Lambda."
  },

  /* ¿Qué maneras existen de "lanzar" una función Lambda? */

  {
    enunciado: "¿Qué manera existe de lanzar una función Lambda?",
    opciones: [
      "Solo desde un teclado conectado físicamente al centro de datos",
      "Mediante eventos de servicios de AWS, como S3, API Gateway o EventBridge",
      "Únicamente reiniciando una instancia EC2",
      "Solo creando un bucket nuevo en otra región"
    ],
    correcta: 1,
    explicacion: " La correcta es Mediante eventos de servicios de AWS, como S3, API Gateway o EventBridge porque Lambda puede ejecutarse automáticamente cuando ocurre un evento configurado."
  },
  {
    enunciado: "¿Cuál de estos ejemplos puede lanzar una función Lambda?",
    opciones: [
      "Un archivo subido a un bucket S3",
      "El color del icono de la consola",
      "La marca del monitor del administrador",
      "El nombre físico del cable de red"
    ],
    correcta: 0,
    explicacion: " La correcta es Un archivo subido a un bucket S3 porque Lambda puede configurarse para ejecutarse cuando ocurre un evento en S3."
  },
  {
    enunciado: "¿Qué servicio puede usarse para lanzar una función Lambda mediante una petición HTTP?",
    opciones: [
      "Amazon EBS",
      "AWS IAM",
      "Amazon API Gateway",
      "Amazon VPC únicamente"
    ],
    correcta: 2,
    explicacion: " La correcta es Amazon API Gateway porque permite exponer una función Lambda mediante una API que puede invocarse con peticiones HTTP."
  },

  /* CLASE 26-27 */
  /* ¿Para qué sirve AWS Elastic Beanstalk? */

  {
    enunciado: "¿Para qué sirve AWS Elastic Beanstalk?",
    opciones: [
      "Para desplegar y gestionar aplicaciones sin configurar manualmente toda la infraestructura",
      "Para crear usuarios IAM y políticas en JSON",
      "Para almacenar objetos dentro de buckets",
      "Para registrar dominios DNS exclusivamente"
    ],
    correcta: 0,
    explicacion: " La correcta es Para desplegar y gestionar aplicaciones sin configurar manualmente toda la infraestructura porque Elastic Beanstalk automatiza tareas como aprovisionar servidores, balanceadores y escalado."
  },
  {
    enunciado: "¿Qué ventaja ofrece AWS Elastic Beanstalk al desplegar una aplicación?",
    opciones: [
      "Obliga a configurar manualmente cada recurso de AWS",
      "Facilita el despliegue porque crea y gestiona recursos necesarios como EC2, balanceador y Auto Scaling",
      "Sustituye las contraseñas de IAM por archivos HTML",
      "Convierte automáticamente una base de datos en un bucket S3"
    ],
    correcta: 1,
    explicacion: " La correcta es Facilita el despliegue porque crea y gestiona recursos necesarios como EC2, balanceador y Auto Scaling porque Elastic Beanstalk permite centrarse más en el código de la aplicación."
  },
  {
    enunciado: "¿Qué debe aportar principalmente el usuario cuando usa AWS Elastic Beanstalk?",
    opciones: [
      "El cableado físico del centro de datos",
      "La Availability Zone donde está cada servidor físico",
      "El código de la aplicación y algunos parámetros de configuración",
      "El número de serie de cada disco duro de AWS"
    ],
    correcta: 2,
    explicacion: " La correcta es El código de la aplicación y algunos parámetros de configuración porque Elastic Beanstalk se encarga de preparar gran parte de la infraestructura necesaria para ejecutar la aplicación."
  },

  /* ¿Elastic Beanstalk es un PaaS, por qué? */

  {
    enunciado: "¿Elastic Beanstalk se considera un servicio PaaS?",
    opciones: [
      "No, porque solo sirve para almacenar objetos como S3",
      "Sí, porque permite desplegar aplicaciones sin gestionar manualmente toda la infraestructura",
      "No, porque obliga a administrar físicamente los servidores",
      "Sí, porque solo se usa para crear usuarios IAM"
    ],
    correcta: 1,
    explicacion: " La correcta es Sí, porque permite desplegar aplicaciones sin gestionar manualmente toda la infraestructura porque Elastic Beanstalk ofrece una plataforma donde el usuario sube su aplicación y AWS se encarga de gran parte del entorno."
  },
  {
    enunciado: "¿Por qué Elastic Beanstalk encaja dentro del modelo PaaS?",
    opciones: [
      "Porque el usuario se centra principalmente en el código y la configuración de la aplicación",
      "Porque el usuario debe instalar manualmente cada servidor físico",
      "Porque solo ofrece almacenamiento en bloque para EC2",
      "Porque sustituye a las políticas IAM en JSON"
    ],
    correcta: 0,
    explicacion: " La correcta es Porque el usuario se centra principalmente en el código y la configuración de la aplicación porque en un PaaS la plataforma gestiona gran parte de la infraestructura necesaria para ejecutar la aplicación."
  },
  {
    enunciado: "En Elastic Beanstalk, ¿qué parte gestiona principalmente AWS?",
    opciones: [
      "El diseño gráfico obligatorio de la aplicación",
      "El contenido exacto del código fuente",
      "La infraestructura necesaria para ejecutar la aplicación, como EC2, balanceador y escalado",
      "Las respuestas de los usuarios en una base de datos local"
    ],
    correcta: 2,
    explicacion: " La correcta es La infraestructura necesaria para ejecutar la aplicación, como EC2, balanceador y escalado porque Elastic Beanstalk automatiza la creación y gestión del entorno donde se ejecuta la aplicación."
  },


  /* ¿Cuáles son las principales características de DynamoDB? */

  {
    enunciado: "¿Cuál es una característica principal de Amazon DynamoDB?",
    opciones: [
      "Es una base de datos relacional que exige administrar servidores EC2",
      "Es un servicio NoSQL gestionado por AWS",
      "Es un servicio para distribuir contenido como CDN",
      "Es un protocolo de conexión remota para Windows"
    ],
    correcta: 1,
    explicacion: " La correcta es Es un servicio NoSQL gestionado por AWS porque DynamoDB permite almacenar datos en tablas no relacionales sin administrar servidores de base de datos."
  },
  {
    enunciado: "¿Qué tipo de base de datos es Amazon DynamoDB?",
    opciones: [
      "Una base de datos NoSQL de clave-valor y documentos",
      "Un volumen de almacenamiento en bloque",
      "Un servicio exclusivo de DNS",
      "Una herramienta para crear imágenes AMI"
    ],
    correcta: 0,
    explicacion: " La correcta es Una base de datos NoSQL de clave-valor y documentos porque DynamoDB está pensado para trabajar con datos no relacionales de forma flexible y escalable."
  },
  {
    enunciado: "¿Qué ventaja ofrece DynamoDB como servicio gestionado?",
    opciones: [
      "Obliga al usuario a parchear manualmente el sistema operativo del servidor",
      "Solo funciona si hay una instancia EC2 encendida",
      "AWS gestiona la infraestructura, escalado y disponibilidad del servicio",
      "Convierte automáticamente todas las tablas en buckets S3"
    ],
    correcta: 2,
    explicacion: " La correcta es AWS gestiona la infraestructura, escalado y disponibilidad del servicio porque DynamoDB es serverless y reduce la administración manual de servidores."
  },

  /* CLASE 28-29 */
  /* ¿Un balanceador puede repartir la carga entre instancias repartidas en diferentes regiones */

  {
    enunciado: "¿Puede un balanceador de carga de AWS repartir tráfico directamente entre instancias EC2 ubicadas en diferentes regiones?",
    opciones: [
      "Sí, siempre que las instancias tengan la misma AMI",
      "No, normalmente un balanceador de carga trabaja dentro de una región",
      "Sí, pero solo si las instancias están apagadas",
      "No, porque los balanceadores solo funcionan con S3"
    ],
    correcta: 1,
    explicacion: " La correcta es No, normalmente un balanceador de carga trabaja dentro de una región porque los balanceadores de AWS se crean en una región concreta y reparten tráfico entre recursos de esa región."
  },
  {
    enunciado: "Si quiero repartir tráfico entre recursos situados en diferentes regiones de AWS, ¿qué servicio podría ayudarme?",
    opciones: [
      "Route 53 o AWS Global Accelerator",
      "Amazon EBS únicamente",
      "Un grupo de seguridad",
      "Una AMI pública"
    ],
    correcta: 0,
    explicacion: " La correcta es Route 53 o AWS Global Accelerator porque estos servicios pueden dirigir tráfico hacia distintas regiones, mientras que un balanceador de carga normal se limita a una región."
  },
  {
    enunciado: "¿Entre qué elementos reparte carga normalmente un Elastic Load Balancer dentro de AWS?",
    opciones: [
      "Entre usuarios IAM de distintas cuentas",
      "Entre buckets S3 de diferentes regiones",
      "Entre instancias o destinos dentro de una región",
      "Entre políticas JSON"
    ],
    correcta: 2,
    explicacion: " La correcta es Entre instancias o destinos dentro de una región porque un balanceador de carga distribuye tráfico entre recursos registrados, normalmente dentro de la misma región."
  },

  /* ¿Qué es el autoescalado horizontal?, ¿y el escalado vertical? */

  {
    enunciado: "¿Qué es el autoescalado horizontal?",
    opciones: [
      "Cambiar una instancia por otra más potente",
      "Añadir o quitar instancias para repartir la carga",
      "Aumentar el tamaño de un disco EBS",
      "Mover una instancia a otra cuenta IAM"
    ],
    correcta: 1,
    explicacion: " La correcta es Añadir o quitar instancias para repartir la carga porque el escalado horizontal consiste en aumentar o reducir el número de servidores disponibles."
  },
  {
    enunciado: "¿Qué es el escalado ascendente o vertical?",
    opciones: [
      "Aumentar la potencia de una instancia, por ejemplo usando más CPU o RAM",
      "Crear más instancias iguales detrás de un balanceador",
      "Borrar una región de AWS",
      "Cambiar el nombre de un bucket S3"
    ],
    correcta: 0,
    explicacion: " La correcta es Aumentar la potencia de una instancia, por ejemplo usando más CPU o RAM porque el escalado vertical consiste en hacer más potente un servidor existente."
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre escalado horizontal y escalado vertical?",
    opciones: [
      "El horizontal aumenta discos EBS y el vertical elimina usuarios IAM",
      "No hay diferencia, significan exactamente lo mismo",
      "El horizontal añade más instancias y el vertical aumenta la potencia de una instancia",
      "El horizontal solo se usa en S3 y el vertical solo en Route 53"
    ],
    correcta: 2,
    explicacion: " La correcta es El horizontal añade más instancias y el vertical aumenta la potencia de una instancia porque son dos formas distintas de aumentar capacidad."
  },


  /* SERVICIOS VISTOS */

  {
    enunciado: "¿Qué significa AWS Pricing Calculator?",
    opciones: [
      "Un servicio para crear usuarios y permisos",
      "Una herramienta para calcular el coste estimado de servicios AWS antes de implementarlos",
      "Un servicio para ejecutar contenedores",
      "Una base de datos NoSQL gestionada"
    ],
    correcta: 1,
    explicacion: " La correcta es Una herramienta para calcular el coste estimado de servicios AWS antes de implementarlos porque AWS Pricing Calculator permite estimar cuánto costará una infraestructura antes de crearla."
  },
  {
    enunciado: "¿Qué significa AWS IAM?",
    opciones: [
      "El servicio de AWS para gestionar usuarios, roles y permisos",
      "Un servicio de almacenamiento de objetos",
      "Una herramienta para distribuir contenido por CDN",
      "Un servicio de bases de datos relacionales"
    ],
    correcta: 0,
    explicacion: " La correcta es El servicio de AWS para gestionar usuarios, roles y permisos porque IAM define quién puede hacer qué sobre los recursos de una cuenta AWS."
  },
  {
    enunciado: "¿Qué significa Amazon VPC?",
    opciones: [
      "Un servicio para calcular costes",
      "Un sistema de monitorización de logs",
      "Un servicio para crear una red privada virtual en AWS",
      "Una imagen para lanzar instancias EC2"
    ],
    correcta: 2,
    explicacion: " La correcta es Un servicio para crear una red privada virtual en AWS porque VPC permite controlar IPs, subredes, rutas y reglas de seguridad dentro de una red en la nube."
  },
  {
    enunciado: "¿Qué significa AWS Route 53?",
    opciones: [
      "Un servicio para ejecutar código sin servidores",
      "Un volumen de disco para EC2",
      "Un servicio para repartir tráfico entre instancias",
      "El servicio DNS de AWS para gestionar dominios y traducir nombres en direcciones IP"
    ],
    correcta: 3,
    explicacion: " La correcta es El servicio DNS de AWS para gestionar dominios y traducir nombres en direcciones IP porque Route 53 permite dirigir nombres de dominio hacia webs, servidores o aplicaciones."
  },
  {
    enunciado: "¿Qué significa AWS CloudFront?",
    opciones: [
      "Una CDN de AWS para distribuir contenido con baja latencia",
      "Un servicio para crear redes privadas",
      "Una base de datos relacional gestionada",
      "Un sistema para crear usuarios IAM"
    ],
    correcta: 0,
    explicacion: " La correcta es Una CDN de AWS para distribuir contenido con baja latencia porque CloudFront acerca contenido como webs, imágenes, vídeos o APIs a usuarios de todo el mundo."
  },
  {
    enunciado: "¿Qué significa AWS EC2?",
    opciones: [
      "Un servicio de almacenamiento de objetos",
      "Un servicio de servidores virtuales en la nube",
      "Un servicio DNS para dominios",
      "Una herramienta de cálculo de precios"
    ],
    correcta: 1,
    explicacion: " La correcta es Un servicio de servidores virtuales en la nube porque EC2 permite crear máquinas virtuales donde instalar aplicaciones, servidores web, bases de datos o APIs."
  },
  {
    enunciado: "¿Qué significa AWS EBS?",
    opciones: [
      "Un servicio para ejecutar Kubernetes",
      "Un servicio de CDN global",
      "Un almacenamiento en bloque que funciona como disco duro virtual para EC2",
      "Una herramienta para monitorizar logs"
    ],
    correcta: 2,
    explicacion: " La correcta es Un almacenamiento en bloque que funciona como disco duro virtual para EC2 porque EBS se conecta a instancias EC2 para guardar sistemas, aplicaciones o datos."
  },
  {
    enunciado: "¿Qué significa Amazon S3?",
    opciones: [
      "Un servicio para balancear tráfico",
      "Un servicio para crear roles y permisos",
      "Un servicio de base de datos NoSQL",
      "Un servicio de almacenamiento de objetos para guardar archivos en buckets"
    ],
    correcta: 3,
    explicacion: " La correcta es Un servicio de almacenamiento de objetos para guardar archivos en buckets porque S3 permite almacenar imágenes, vídeos, documentos, backups, logs y otros objetos."
  },
  {
    enunciado: "¿Qué significa Amazon RDS?",
    opciones: [
      "Un servicio de bases de datos relacionales gestionadas",
      "Un servicio de almacenamiento en bloque",
      "Un servicio para crear una red privada virtual",
      "Una herramienta para calcular costes"
    ],
    correcta: 0,
    explicacion: " La correcta es Un servicio de bases de datos relacionales gestionadas porque RDS permite usar bases de datos como servicio sin administrar manualmente toda la infraestructura."
  },
  {
    enunciado: "¿Qué significa AWS Lambda?",
    opciones: [
      "Un servicio para guardar objetos en buckets",
      "Un servicio serverless para ejecutar código cuando ocurre un evento",
      "Un servicio DNS para dominios",
      "Un servicio para crear discos virtuales"
    ],
    correcta: 1,
    explicacion: " La correcta es Un servicio serverless para ejecutar código cuando ocurre un evento porque Lambda permite ejecutar funciones sin crear ni administrar servidores."
  },
  {
    enunciado: "¿Qué significa AWS CloudWatch?",
    opciones: [
      "Un servicio para crear instancias EC2",
      "Un servicio para desplegar Kubernetes",
      "Un servicio de monitorización que recoge métricas, logs y alarmas",
      "Un servicio para registrar dominios"
    ],
    correcta: 2,
    explicacion: " La correcta es Un servicio de monitorización que recoge métricas, logs y alarmas porque CloudWatch sirve para vigilar recursos y aplicaciones en AWS."
  },
  {
    enunciado: "¿Qué significa AWS Elastic Beanstalk?",
    opciones: [
      "Un servicio para crear buckets de almacenamiento",
      "Un servicio para traducir dominios en IPs",
      "Un servicio de base de datos NoSQL",
      "Un servicio para desplegar aplicaciones web mientras AWS prepara la infraestructura necesaria"
    ],
    correcta: 3,
    explicacion: " La correcta es Un servicio para desplegar aplicaciones web mientras AWS prepara la infraestructura necesaria porque Elastic Beanstalk puede gestionar EC2, balanceadores, Auto Scaling y monitorización."
  },
  {
    enunciado: "¿Qué significa Amazon DynamoDB?",
    opciones: [
      "Un servicio de base de datos NoSQL gestionada, rápida y escalable",
      "Un servicio de servidores virtuales",
      "Un servicio de almacenamiento en bloque",
      "Una herramienta para estimar costes"
    ],
    correcta: 0,
    explicacion: " La correcta es Un servicio de base de datos NoSQL gestionada, rápida y escalable porque DynamoDB permite guardar y consultar datos sin administrar servidores de base de datos."
  },
  {
    enunciado: "¿Qué significa Amazon Elastic Load Balancing?",
    opciones: [
      "Un servicio para crear usuarios IAM",
      "Un servicio para repartir tráfico entre varias instancias, contenedores o servidores",
      "Un servicio para almacenar objetos",
      "Un servicio para ejecutar funciones serverless"
    ],
    correcta: 1,
    explicacion: " La correcta es Un servicio para repartir tráfico entre varias instancias, contenedores o servidores porque Elastic Load Balancing evita que una sola máquina reciba todas las peticiones."
  },
  {
    enunciado: "¿Qué significa Amazon Auto Scaling?",
    opciones: [
      "Un servicio para comprar dominios",
      "Un servicio para guardar imágenes y vídeos",
      "Un servicio para aumentar o reducir automáticamente el número de instancias según la demanda",
      "Un servicio para conectarse por RDP"
    ],
    correcta: 2,
    explicacion: " La correcta es Un servicio para aumentar o reducir automáticamente el número de instancias según la demanda porque Auto Scaling ajusta la capacidad de EC2 de forma automática."
  },
  {
    enunciado: "¿Qué significa Amazon ECS?",
    opciones: [
      "Un servicio DNS para dirigir dominios",
      "Un servicio de base de datos relacional",
      "Un servicio de monitorización",
      "Un servicio para ejecutar y gestionar contenedores, normalmente con Docker"
    ],
    correcta: 3,
    explicacion: " La correcta es Un servicio para ejecutar y gestionar contenedores, normalmente con Docker porque ECS permite desplegar aplicaciones empaquetadas en contenedores sin montar todo el sistema manualmente."
  },
  {
    enunciado: "¿Qué significa Amazon EKS?",
    opciones: [
      "Un servicio de AWS para ejecutar Kubernetes y gestionar aplicaciones en contenedores",
      "Un servicio para calcular precios de infraestructura",
      "Un volumen de almacenamiento para EC2",
      "Una CDN para distribuir contenido"
    ],
    correcta: 0,
    explicacion: " La correcta es Un servicio de AWS para ejecutar Kubernetes y gestionar aplicaciones en contenedores porque EKS permite organizar, escalar y controlar contenedores usando Kubernetes."
  },
  {
    enunciado: "Una empresa quiere migrar sus servidores desde una infraestructura on-premise a la nube. ¿Cuál es la principal ventaja de este cambio?",
    opciones: [
      "Ajustar los recursos de cómputo según la demanda del negocio.",
      "Garantizar capacidad de cómputo sobredimensionada de forma permanente.",
      "Mantener el control del hardware y su mantenimiento.",
      "Incrementar los costes fijos asociados a la infraestructura tecnológica."
    ],
    correcta: 0,
    explicacion: " La correcta es Ajustar los recursos de cómputo según la demanda del negocio. porque Escalabilidad y pago por uso: la nube permite ajustar los recursos de forma dinámica sin sobreaprovisionamiento."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones NO es una característica propia de la computación en la nube?",
    opciones: [
      "Aprovisionamiento definido de antemano.",
      "Autoservicio bajo demanda para gestionar recursos.",
      "Acceso a los servicios a través de internet.",
      "Solo se facturan los recursos utilizados."
    ],
    correcta: 0,
    explicacion: " La correcta es Aprovisionamiento definido de antemano. porque En cloud los recursos son elásticos y bajo demanda, no aprovisionados de antemano."
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre una nube pública, una nube privada y una nube híbrida?",
    opciones: [
      "Quién es el propietario y cómo se comparten los recursos.",
      "El tipo de sistema operativo que utilizan.",
      "El número de usuarios que pueden acceder.",
      "El lenguaje de programación de las aplicaciones."
    ],
    correcta: 0,
    explicacion: " La correcta es Quién es el propietario y cómo se comparten los recursos. porque La diferencia fundamental está en la propiedad y el modelo de compartición de recursos entre el proveedor y la empresa."
  },
  {
    enunciado: "¿Cuál es una ventaja real de la nube?",
    opciones: [
      "Escala bajo demanda.",
      "Es más barata siempre.",
      "No requiere administración técnica.",
      "Elimina la necesidad de planificar la capacidad."
    ],
    correcta: 0,
    explicacion: " La correcta es Escala bajo demanda. porque La elasticidad es una de las características fundamentales de la nube: los recursos pueden aumentarse o reducirse automáticamente según la demanda, sin necesidad de planificar capacidad a largo plazo."
  },
  {
    enunciado: "¿Cuál es la principal ventaja económica de pasar de un modelo on-premise a la nube?",
    opciones: [
      "Se convierte la inversión fija en hardware en un gasto variable por uso.",
      "Se eliminan por completo todos los gastos de TI al transferirlos al proveedor.",
      "El proveedor asume todos los riesgos de seguridad de la nube.",
      "Se incrementan los costes fijos pero aumenta el rendimiento general del sistema."
    ],
    correcta: 0,
    explicacion: " La correcta es Se convierte la inversión fija en hardware en un gasto variable por uso. porque En la nube pasas de comprar servidores por adelantado a pagar solo por lo que consumes, mejorando la agilidad financiera y eliminando la sobreestimación de capacidad. CLASE 3-4: Introducción a la Nube y AWS"
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre los modelos SaaS, PaaS e IaaS en computación en la nube?",
    opciones: [
      "El nivel de control y gestión que tiene el usuario sobre la infraestructura y el software.",
      "El grado de responsabilidad que asume el proveedor en el mantenimiento del hardware físico.",
      "El tipo de licenciamiento del sistema operativo utilizado.",
      "El rendimiento de las aplicaciones desplegadas."
    ],
    correcta: 0,
    explicacion: " La correcta es El nivel de control y gestión que tiene el usuario sobre la infraestructura y el software. porque A más nivel de abstracción (SaaS), menos control tiene el cliente. En IaaS el cliente gestiona más capas; en SaaS, casi ninguna."
  },
  {
    enunciado: "¿Cuál de los siguientes ejemplos NO está correctamente asociado a su modelo de servicio en la nube?",
    opciones: [
      "WordPress instalado como ejemplo de SaaS.",
      "Amazon AWS como ejemplo de IaaS.",
      "Google Drive como ejemplo de SaaS.",
      "Microsoft Azure como ejemplo de IaaS."
    ],
    correcta: 0,
    explicacion: " La correcta es WordPress instalado como ejemplo de SaaS. porque WordPress instalado y gestionado por el usuario es una aplicación autogestionada, no SaaS. SaaS implica que el proveedor gestiona todo, incluyendo la aplicación."
  },
  {
    enunciado: "En un modelo IaaS (Infrastructure as a Service), ¿qué componentes son responsabilidad del usuario?",
    opciones: [
      "Aplicaciones, datos, sistema operativo y middleware.",
      "Aplicaciones y datos.",
      "Servidores físicos y red.",
      "Virtualización y almacenamiento."
    ],
    correcta: 0,
    explicacion: " La correcta es Aplicaciones, datos, sistema operativo y middleware. porque En IaaS, AWS gestiona el hardware y la virtualización. El cliente es responsable del sistema operativo, middleware, aplicaciones y datos."
  },
  {
    enunciado: "¿En qué situación tiene más sentido utilizar una estrategia multicloud?",
    opciones: [
      "Cuando se combinan servicios de varios proveedores para evitar dependencia de uno solo.",
      "Cuando una empresa quiere consolidar la infraestructura y reducir el número de servidores físicos.",
      "Cuando se utilizan servicios de un único proveedor para simplificar la gestión.",
      "Cuando se requiere alta disponibilidad dentro de una misma región usando múltiples cuentas de un único proveedor."
    ],
    correcta: 0,
    explicacion: " La correcta es Cuando se combinan servicios de varios proveedores para evitar dependencia de uno solo. porque La estrategia multicloud evita el vendor lock-in (dependencia de un único proveedor) y permite elegir los mejores servicios de cada plataforma."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones es correcta sobre regiones y zonas de disponibilidad?",
    opciones: [
      "Una región está formada por varias Availability Zones independientes entre sí.",
      "Una Availability Zone contiene varias regiones dentro de ella.",
      "Una región está en un único centro de datos físico.",
      "Las regiones y las Availability Zones son exactamente lo mismo."
    ],
    correcta: 0,
    explicacion: " La correcta es Una región está formada por varias Availability Zones independientes entre sí. porque Cada región de AWS está compuesta por múltiples zonas de disponibilidad (AZ) separadas físicamente pero interconectadas con alta velocidad."
  },
  {
    enunciado: "¿Qué afirmación describe mejor la relación entre Región y Availability Zone?",
    opciones: [
      "Una región contiene varias AZ independientes.",
      "Una región es una AZ con más recursos.",
      "Una AZ puede pertenecer a varias regiones.",
      "Varias regiones forman una sola AZ."
    ],
    correcta: 0,
    explicacion: " La correcta es Una región contiene varias AZ independientes. porque Cada región de AWS está compuesta por múltiples zonas de disponibilidad (AZ) separadas físicamente. Las AZs de una región están interconectadas con alta velocidad pero son independientes entre sí."
  },
  {
    enunciado: "¿Qué mejora principalmente un despliegue en varias Availability Zones?",
    opciones: [
      "La tolerancia a fallos del sistema.",
      "La velocidad de acceso de las instancias.",
      "El tiempo de respuesta de la aplicación.",
      "El coste de la infraestructura."
    ],
    correcta: 0,
    explicacion: " La correcta es La tolerancia a fallos del sistema. porque Distribuir los recursos en varias AZ garantiza que si una zona falla por corte de luz u otro incidente, las demás siguen operativas. Esto mejora la resiliencia y la disponibilidad del sistema. CLASE 5-6: Introducción a AWS"
  },
  {
    enunciado: "¿Cuál de las siguientes limitaciones de la Calculadora de precios de AWS es correcta?",
    opciones: [
      "La estimación puede no ser exacta, por lo que a veces es mejor empezar con un uso real y revisar la factura.",
      "No figuran todos los servicios en la calculadora, lo que genera problemas en los presupuestos.",
      "No permite estimar más de un servicio a la vez.",
      "Solo puede usarse con cuentas de pago."
    ],
    correcta: 0,
    explicacion: " La correcta es La estimación puede no ser exacta, por lo que a veces es mejor empezar con un uso real y revisar la factura. porque La estimación de la calculadora no siempre coincide exactamente con la factura real, ya que pueden influir factores como el tráfico de red o uso real de recursos."
  },
  {
    enunciado: "¿Qué es Amazon EC2 dentro de los servicios de AWS?",
    opciones: [
      "Un servicio para crear y gestionar máquinas virtuales bajo demanda.",
      "Un sistema de almacenamiento de archivos distribuido.",
      "Un servicio de bases de datos gestionadas.",
      "Un servicio de computación serverless donde no es necesario levantar servidores."
    ],
    correcta: 0,
    explicacion: " La correcta es Un servicio para crear y gestionar máquinas virtuales bajo demanda. porque EC2 (Elastic Compute Cloud) es el servicio de máquinas virtuales de AWS, donde el cliente controla el sistema operativo y la configuración."
  },
  {
    enunciado: "¿Cuál es la función principal de Amazon S3?",
    opciones: [
      "Proporcionar almacenamiento de objetos escalable.",
      "Ejecutar aplicaciones sin necesidad de servidores.",
      "Crear redes privadas virtuales en la nube.",
      "Gestionar usuarios y permisos."
    ],
    correcta: 0,
    explicacion: " La correcta es Proporcionar almacenamiento de objetos escalable. porque Amazon S3 (Simple Storage Service) es el servicio de almacenamiento de objetos de AWS, ideal para guardar archivos, backups y contenido web. CLASE 7-8: Seguridad y AWS IAM"
  },
  {
    enunciado: "Según el modelo de responsabilidad compartida de AWS, ¿qué tarea es responsabilidad del cliente al usar una instancia EC2?",
    opciones: [
      "La actualización y configuración del sistema operativo de la instancia.",
      "La seguridad física del centro de datos.",
      "La infraestructura de virtualización.",
      "El mantenimiento del hardware del servidor."
    ],
    correcta: 0,
    explicacion: " La correcta es La actualización y configuración del sistema operativo de la instancia. porque El cliente es responsable de configurar y actualizar el sistema operativo. AWS gestiona la seguridad física, el hardware y la virtualización."
  },
  {
    enunciado: "En el modelo de responsabilidad compartida de AWS, ¿quién es responsable de la capa de virtualización que permite ejecutar instancias EC2?",
    opciones: [
      "El cliente, ya que decide el tipo de instancia y el sistema operativo.",
      "AWS, ya que gestiona el hipervisor y la infraestructura de virtualización.",
      "El cliente, porque configura la red y los grupos de seguridad.",
      "Ambos, de forma compartida y configurable."
    ],
    correcta: 1,
    explicacion: " La correcta es AWS, ya que gestiona el hipervisor y la infraestructura de virtualización. porque AWS gestiona el hipervisor y la capa de virtualización. El cliente solo elige el tipo de instancia y el SO, pero no gestiona el hipervisor."
  },
  {
    enunciado: "¿Qué responsabilidad NO asume AWS en el modelo de responsabilidad compartida?",
    opciones: [
      "La seguridad física de los centros de datos.",
      "La configuración del sistema operativo.",
      "El mantenimiento del hardware subyacente.",
      "La infraestructura global de red."
    ],
    correcta: 1,
    explicacion: " La correcta es La configuración del sistema operativo. porque En el modelo de responsabilidad compartida, AWS gestiona la infraestructura física y la red. El cliente es responsable de configurar el SO, las aplicaciones, los datos y los accesos IAM."
  },
  {
    enunciado: "¿Qué es un usuario de IAM en AWS?",
    opciones: [
      "Un recurso que define permisos sobre otros servicios.",
      "Una persona o aplicación que puede autenticarse en una cuenta de AWS.",
      "Un conjunto de permisos reutilizables.",
      "Un mecanismo para conectar cuentas entre regiones."
    ],
    correcta: 1,
    explicacion: " La correcta es Una persona o aplicación que puede autenticarse en una cuenta de AWS. porque Un usuario de IAM representa a una persona o aplicación que necesita acceder a la cuenta de AWS con credenciales propias."
  },
  {
    enunciado: "¿Qué es una política de IAM y en qué formato están escritas normalmente?",
    opciones: [
      "Un conjunto de reglas de red escritas en YAML.",
      "Un documento que define permisos sobre recursos y que está escrito en formato JSON.",
      "Un usuario especial con permisos administrativos.",
      "Un rol que se asigna automáticamente a los servicios de AWS."
    ],
    correcta: 1,
    explicacion: " La correcta es Un documento que define permisos sobre recursos y que está escrito en formato JSON. porque Una política de IAM es un documento en formato JSON que define qué acciones se permiten o deniegan sobre qué recursos de AWS."
  },
  {
    enunciado: "Una empresa quiere que varias aplicaciones en EC2 accedan a Amazon S3 sin usar usuarios ni contraseñas. ¿Cuál es la opción MÁS adecuada en IAM?",
    opciones: [
      "Crear un usuario de IAM y compartir sus credenciales.",
      "Utilizar un rol de IAM asociado a la instancia EC2.",
      "Asignar una política directamente al bucket de S3.",
      "Añadir los permisos al usuario root."
    ],
    correcta: 1,
    explicacion: " La correcta es Utilizar un rol de IAM asociado a la instancia EC2. porque Los roles de IAM permiten acceso seguro entre servicios de AWS sin necesidad de gestionar usuarios ni contraseñas. Es la práctica recomendada para aplicaciones en EC2."
  },
  {
    enunciado: "Según el modelo de responsabilidad compartida de AWS, ¿quién es el responsable de gestionar la seguridad de una aplicación y de los datos que utiliza?",
    opciones: [
      "AWS, ya que la aplicación se ejecuta en su infraestructura.",
      "El cliente, ya que es responsable de la seguridad en la nube (aplicaciones y datos).",
      "AWS, siempre que se utilicen servicios en la nube.",
      "Ambos, pero solo cuando se usan servicios serverless."
    ],
    correcta: 1,
    explicacion: " La correcta es El cliente, ya que es responsable de la seguridad en la nube (aplicaciones y datos). porque El cliente es responsable de la seguridad de lo que despliega en la nube: aplicaciones, datos y configuraciones de acceso."
  },
  {
    enunciado: "En la cuenta de AWS de un laboratorio, ¿qué acciones podrá realizar el usuario user-2 si solo tiene permisos de lectura sobre EC2?",
    opciones: [
      "Iniciar y detener instancias EC2.",
      "Ver información de las instancias EC2, pero no modificarlas.",
      "Acceder a buckets de Amazon S3.",
      "Administrar usuarios y grupos de IAM."
    ],
    correcta: 1,
    explicacion: " La correcta es Ver información de las instancias EC2, pero no modificarlas. porque Un usuario con permisos de solo lectura sobre EC2 únicamente puede consultar información (describir instancias, ver estado), pero no puede iniciar, detener ni modificar recursos."
  },
  {
    enunciado: "¿Cuál de las siguientes opciones describe correctamente una función de una puerta de enlace a Internet (Internet Gateway) en una VPC?",
    opciones: [
      "Permitir la comunicación privada entre subredes dentro de la misma VPC sin acceso a Internet.",
      "Actuar como destino en las tablas de enrutamiento para el tráfico que debe salir a Internet.",
      "Proporcionar acceso a Internet únicamente para instancias que no tienen direcciones IP públicas.",
      "Ninguna de las anteriores."
    ],
    correcta: 1,
    explicacion: " La correcta es Actuar como destino en las tablas de enrutamiento para el tráfico que debe salir a Internet. porque El Internet Gateway (IGW) es el componente que permite enrutar tráfico desde la VPC hacia Internet. Actúa como destino (0.0.0.0/0) en la tabla de enrutamiento de las subredes públicas."
  },
  {
    enunciado: "¿Qué es una VPC (Virtual Private Cloud) en AWS y para qué sirve?",
    opciones: [
      "Un servicio para crear máquinas virtuales aisladas dentro de una región de AWS.",
      "Una red privada virtual aislada donde se despliegan y conectan los recursos de AWS.",
      "Un servicio de almacenamiento privado cifrado para datos sensibles de la empresa.",
      "Un sistema de monitorización del tráfico de red entre servicios de AWS."
    ],
    correcta: 1,
    explicacion: " La correcta es Una red privada virtual aislada donde se despliegan y conectan los recursos de AWS. porque Una VPC es una red virtual aislada lógicamente dentro de la nube de AWS. Permite definir rangos de IPs, subredes, tablas de enrutamiento y controlar qué tráfico entra y sale de los recursos."
  },
  {
    enunciado: "¿Cuántas direcciones IP contiene una subred con el prefijo /24?",
    opciones: [
      "24 direcciones disponibles para asignar a hosts.",
      "256 en total, siendo 254 utilizables para hosts.",
      "512 en total, con 510 utilizables para hosts.",
      "65.536 direcciones en total para la red."
    ],
    correcta: 1,
    explicacion: " La correcta es 256 en total, siendo 254 utilizables para hosts. porque Un prefijo /24 tiene 8 bits para hosts: 2^8 = 256 IPs totales. Se restan la dirección de red y la de broadcast, quedando 254 utilizables por hosts. CLASE 11-12: AWS VPC - Seguridad"
  },
  {
    enunciado: "¿Qué significa permitir tráfico desde 0.0.0.0/0 en una regla de un grupo de seguridad de AWS?",
    opciones: [
      "Que solo se permite tráfico desde la red interna de la VPC.",
      "Que se permite tráfico desde cualquier dirección IP.",
      "Que únicamente se permite tráfico desde direcciones privadas.",
      "Que se restringe el acceso a una única subred concreta."
    ],
    correcta: 1,
    explicacion: " La correcta es Que se permite tráfico desde cualquier dirección IP. porque 0.0.0.0/0 en notación CIDR representa todas las direcciones IP posibles, es decir, tráfico proveniente de cualquier origen en Internet."
  },
  {
    enunciado: "Una instancia EC2 tiene asociado un grupo de seguridad que no permite tráfico de entrada HTTP (puerto 80). ¿Qué ocurrirá si un usuario intenta acceder a esa instancia desde un navegador web?",
    opciones: [
      "La conexión funcionará porque el tráfico de salida está permitido por defecto.",
      "La conexión será rechazada porque el tráfico de entrada no está permitido.",
      "La instancia redirigirá automáticamente la conexión a HTTPS.",
      "El acceso dependerá de la subred en la que esté desplegada la instancia."
    ],
    correcta: 1,
    explicacion: " La correcta es La conexión será rechazada porque el tráfico de entrada no está permitido. porque Los Security Groups deniegan por defecto todo el tráfico que no esté explícitamente permitido. Si el puerto 80 no está abierto, la conexión se rechaza."
  },
  {
    enunciado: "Una instancia EC2 tiene asociado un grupo de seguridad que permite tráfico de entrada HTTP (puerto 80), pero NO permite tráfico de entrada HTTPS (puerto 443). ¿Qué ocurrirá si un usuario intenta acceder usando https://?",
    opciones: [
      "La conexión funcionará porque el puerto 80 está permitido.",
      "La conexión será rechazada porque el tráfico al puerto 443 no está permitido.",
      "La instancia redirigirá automáticamente la conexión HTTPS al puerto 80.",
      "El acceso funcionará solo si la instancia está en una subred pública."
    ],
    correcta: 1,
    explicacion: " La correcta es La conexión será rechazada porque el tráfico al puerto 443 no está permitido. porque El tráfico HTTPS utiliza el puerto 443. Si ese puerto no está permitido en el Security Group, la conexión será bloqueada, independientemente de que el puerto 80 esté abierto."
  },
  {
    enunciado: "Tienes dos instancias EC2 (A y B) en la misma subred. La instancia A debe comunicarse con B por el puerto 3306 (MySQL), pero B no debe ser accesible desde Internet. ¿Cuál es la configuración correcta?",
    opciones: [
      "Permitir tráfico entrante al puerto 3306 desde 0.0.0.0/0 en el grupo de seguridad de",
      "B. Permitir tráfico saliente al puerto 3306 en el grupo de seguridad de A y tráfico entrante desde el grupo de seguridad de A en el grupo de seguridad de",
      "C. Asignar ambos grupos de seguridad a una subred privada sin reglas de entrada.",
      "Configurar una regla de entrada en la tabla de rutas de la VPC para el puerto 3306."
    ],
    correcta: 1,
    explicacion: " La correcta es B. Permitir tráfico saliente al puerto 3306 en el grupo de seguridad de A y tráfico entrante desde el grupo de seguridad de A en el grupo de seguridad de porque Se permite salida desde A y entrada en B solo desde el grupo de seguridad de A. Así se restringe el acceso a MySQL únicamente a la instancia A, sin exponerlo a Internet."
  },
  {
    enunciado: "Un grupo de seguridad de una instancia EC2 tiene una regla de entrada que permite el puerto 443. No se ha configurado ninguna regla de salida. ¿Qué ocurre con el tráfico de respuesta que genera la instancia?",
    opciones: [
      "Se bloquea porque no hay reglas de salida configuradas explícitamente.",
      "Sale correctamente porque al configurar de entrada se configura de salida automáticamente.",
      "Hay que abrir el puerto 443 también en las reglas de salida.",
      "El tráfico de salida lo gestionan exclusivamente las ACLs de la subred."
    ],
    correcta: 1,
    explicacion: " La correcta es Sale correctamente porque al configurar de entrada se configura de salida automáticamente. porque Los Security Groups son stateful: si permites tráfico de entrada, la respuesta correspondiente sale automáticamente sin necesidad de configurar una regla de salida. Las NACLs, en cambio, son stateless."
  },
  {
    enunciado: "¿Cuál es la diferencia clave entre una subred pública y una subred privada en una VPC de AWS?",
    opciones: [
      "La subred pública usa IPv6 y la privada solo IPv4.",
      "La subred pública tiene una ruta al Internet Gateway; la privada no tiene acceso directo a internet.",
      "La subred pública tiene más capacidad de IPs que la privada por defecto.",
      "La subred privada no puede contener instancias EC2, solo bases de datos RDS."
    ],
    correcta: 1,
    explicacion: " La correcta es La subred pública tiene una ruta al Internet Gateway; la privada no tiene acceso directo a internet. porque La diferencia está en la tabla de enrutamiento: si tiene una ruta 0.0.0.0/0 apuntando al Internet Gateway, es pública. Si no tiene esa ruta, es privada y sus recursos no son alcanzables desde internet."
  },
  {
    enunciado: "Una empresa despliega un servidor web en EC2 y una base de datos en RDS dentro de una VPC. ¿En qué tipo de subred debe colocarse la base de datos y por qué?",
    opciones: [
      "En una subred pública, para que el equipo de desarrollo acceda directamente.",
      "En una subred privada, sin acceso directo desde internet.",
      "En la misma subred que el servidor web para simplificar la configuración de red.",
      "En una subred con su propio Internet Gateway para recibir actualizaciones."
    ],
    correcta: 1,
    explicacion: " La correcta es En una subred privada, sin acceso directo desde internet. porque La base de datos debe estar en una subred privada: solo el servidor web debe poder conectarse a ella internamente. Exponer la base de datos a internet supondría un riesgo de seguridad grave."
  },
  {
    enunciado: "¿Dónde es mejor colocar una base de datos en una VPC?",
    opciones: [
      "En una subred pública con ACL.",
      "Da igual el tipo de subred si está bien filtrada.",
      "En una subred privada.",
      "En la subred pública con security groups."
    ],
    correcta: 2,
    explicacion: " La correcta es En una subred privada. porque La base de datos no debe ser accesible desde internet. Debe colocarse en una subred privada, donde solo el servidor de aplicaciones pueda conectarse a ella internamente."
  },
  {
    enunciado: "¿Qué pasa si eliminas la ruta 0.0.0.0/0 de la tabla de enrutamiento asociada a una subred pública?",
    opciones: [
      "La instancia pierde su IP privada.",
      "Cambia de zona de disponibilidad.",
      "Pierde acceso a Internet.",
      "Se apaga la instancia."
    ],
    correcta: 2,
    explicacion: " La correcta es Pierde acceso a Internet. porque La ruta 0.0.0.0/0 → Internet Gateway es la que habilita el acceso a internet. Al eliminarla, la subred deja de ser pública y las instancias pierden la conectividad con internet."
  },
  {
    enunciado: "¿Qué ocurre si una regla de entrada de un Security Group bloquea un puerto necesario?",
    opciones: [
      "El tráfico se redirige a otro puerto.",
      "La regla se aplica solo al tráfico saliente.",
      "La conexión se rechaza.",
      "El tráfico se permite si la instancia inició la conexión."
    ],
    correcta: 2,
    explicacion: " La correcta es La conexión se rechaza. porque Los Security Groups son stateful: si no hay una regla que permita explícitamente el tráfico entrante en un puerto, la conexión se rechaza directamente. No se redirige ni se reenvía."
  },
  {
    enunciado: "En la regla de un grupo de seguridad de AWS aparece como origen la IP 203.0.113.25/32. ¿Qué significa esta notación y qué tráfico permite?",
    opciones: [
      "Permite tráfico desde todos los hosts en la red 203.0.113.0.",
      "Permite tráfico desde los primeros 32 hosts de la red 203.0.113.0.",
      "Permite tráfico únicamente desde esa dirección IP concreta y ninguna otra.",
      "Bloquea el tráfico procedente de esa dirección IP específica."
    ],
    correcta: 2,
    explicacion: " La correcta es Permite tráfico únicamente desde esa dirección IP concreta y ninguna otra. porque El sufijo /32 en CIDR significa que los 32 bits son fijos, identificando exactamente una única dirección IP. Es la forma habitual de permitir acceso a un solo equipo concreto, como la IP de un administrador."
  },
  {
    enunciado: "En una VPC tienes una subred cuya tabla de enrutamiento tiene esta regla: destino 0.0.0.0/0 → igw-xxxxxxxx. ¿Qué tipo de subred es esta y qué implica?",
    opciones: [
      "Una subred privada, porque el Internet Gateway controla el tráfico saliente.",
      "Una subred de administración, porque usa la ruta por defecto del router interno.",
      "Una subred pública, porque el tráfico hacia cualquier IP puede salir a internet a través del IGW.",
      "Una subred de base de datos, porque redirige todo el tráfico al gateway de datos."
    ],
    correcta: 2,
    explicacion: " La correcta es Una subred pública, porque el tráfico hacia cualquier IP puede salir a internet a través del IGW. porque Cuando una tabla de enrutamiento tiene la ruta 0.0.0.0/0 apuntando a un Internet Gateway (igw-...), la subred es pública. Las instancias con IP pública en esa subred pueden comunicarse con internet. CLASE 12-13: Cómputo y AWS EC2"
  },
  {
    enunciado: "Una empresa necesita desplegar un servidor web con Linux en AWS. ¿Cuáles son los elementos imprescindibles al lanzar una instancia EC2?",
    opciones: [
      "Solo el tipo de instancia y el nombre del servidor.",
      "Solo la AMI y la región donde se va a desplegar.",
      "AMI, tipo de instancia, par de claves y grupo de seguridad.",
      "El sistema operativo, el hostname y la dirección IP pública."
    ],
    correcta: 2,
    explicacion: " La correcta es AMI, tipo de instancia, par de claves y grupo de seguridad. porque Al lanzar EC2 se deben seleccionar la AMI (imagen), el tipo de instancia, la configuración de red, el grupo de seguridad y el par de claves para el acceso."
  },
  {
    enunciado: "¿Qué conjunto de elementos es imprescindible para lanzar una instancia EC2 funcional?",
    opciones: [
      "Tipo de instancia y bucket S3.",
      "Región y base de datos.",
      "AMI, tipo de instancia y red.",
      "Tipo de instancia, virtualización y almacenamiento."
    ],
    correcta: 2,
    explicacion: " La correcta es AMI, tipo de instancia y red. porque Para lanzar una instancia EC2 son imprescindibles la AMI (imagen con SO), el tipo de instancia (CPU/RAM) y la configuración de red. El grupo de seguridad y el par de claves también se necesitan para el acceso."
  },
  {
    enunciado: "¿Qué es una AMI (Amazon Machine Image) en AWS?",
    opciones: [
      "Un sistema automático de copias de seguridad para instancias EC2.",
      "Un servicio para monitorizar el rendimiento de las instancias en tiempo real.",
      "Una plantilla con SO y software preinstalado para lanzar instancias EC2.",
      "Un tipo de almacenamiento en bloque persistente asociado a las instancias."
    ],
    correcta: 2,
    explicacion: " La correcta es Una plantilla con SO y software preinstalado para lanzar instancias EC2. porque Una AMI es una plantilla que incluye el sistema operativo y el software preconfigurado necesario para arrancar una instancia EC2. Se pueden usar AMIs de AWS, del marketplace o crear las propias."
  },
  {
    enunciado: "¿Qué es una IP elástica en AWS y cuál es su principal ventaja frente a una IP pública normal?",
    opciones: [
      "Una IP privada fija dentro de la VPC que nunca cambia aunque la instancia se reinicie.",
      "Una IP dinámica que AWS reasigna automáticamente al crear cada instancia EC2.",
      "Una dirección IP pública estática que permanece aunque la instancia se detenga e inicie.",
      "Un bloque de IPs reservado para uso exclusivo dentro de una subred privada."
    ],
    correcta: 2,
    explicacion: " La correcta es Una dirección IP pública estática que permanece aunque la instancia se detenga e inicie. porque Una IP pública normal cambia cada vez que la instancia se para y se inicia. Una Elastic IP es una IP pública estática que permanece asociada a tu cuenta hasta que la liberes, aunque la instancia esté parada."
  },
  {
    enunciado: "¿Qué ocurre con la IP pública al parar una instancia EC2?",
    opciones: [
      "Se mantiene asociada a la instancia.",
      "Se convierte en una IP privada.",
      "La IP pública puede cambiar.",
      "Cambia solo el DNS sin cambiar la IP."
    ],
    correcta: 2,
    explicacion: " La correcta es La IP pública puede cambiar. porque Las IPs públicas dinámicas se liberan al detener la instancia y se reasigna una nueva al reiniciarla. Para mantener una IP fija hay que usar una Elastic IP."
  },
  {
    enunciado: "¿Qué ocurre con la IP pública al parar una instancia si usa una IP elástica?",
    opciones: [
      "Se convierte en una IP privada.",
      "Cambia solo el DNS sin cambiar la IP.",
      "Se mantiene asociada a la instancia.",
      "La IP pública puede cambiar."
    ],
    correcta: 2,
    explicacion: " La correcta es Se mantiene asociada a la instancia. porque Una Elastic IP es una dirección IP pública estática reservada en tu cuenta. Permanece asociada aunque la instancia se detenga e inicie, a diferencia de una IP dinámica normal."
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones sobre EC2 es VERDADERA?",
    opciones: [
      "Las instancias EC2 se comparten entre varios clientes.",
      "Las instancias EC2 siempre tienen IP pública.",
      "EC2 permite ejecutar tu propio sistema operativo en la nube.",
      "EC2 elimina la necesidad de administrar el sistema operativo."
    ],
    correcta: 2,
    explicacion: " La correcta es EC2 permite ejecutar tu propio sistema operativo en la nube. porque EC2 proporciona máquinas virtuales donde el cliente controla completamente el sistema operativo. Cada instancia es aislada, no compartida, y el cliente es responsable de su administración. CLASE 14-15: EC2 Continuación y Laboratorio"
  },
  {
    enunciado: "Un administrador quiere crear una copia de seguridad completa de una instancia EC2 en producción para poder restaurarla íntegramente si es necesario. ¿Cuál es la forma más completa de hacerlo?",
    opciones: [
      "Crear un snapshot solo del volumen de datos adicional, excluyendo el volumen raíz.",
      "Exportar los logs de CloudWatch a S3 como respaldo de la configuración.",
      "Crear una AMI personalizada a partir de la instancia, que captura todos sus volúmenes.",
      "Copiar los ficheros de configuración manualmente a otro servidor EC2."
    ],
    correcta: 2,
    explicacion: " La correcta es Crear una AMI personalizada a partir de la instancia, que captura todos sus volúmenes. porque Crear una AMI a partir de la instancia incluye todos los volúmenes (sistema operativo, datos, etc.) y permite lanzar una nueva instancia idéntica en cualquier momento. Es la estrategia de backup más completa para EC2."
  },
  {
    enunciado: "¿Es posible cambiar el tipo de una instancia EC2 mientras está en ejecución?",
    opciones: [
      "Sí, se puede modificar el tipo en cualquier momento sin interrumpir el servicio.",
      "Sí, pero únicamente en instancias con sistema operativo Windows Server.",
      "No, es necesario detener la instancia antes de cambiar su tipo.",
      "No, el tipo de instancia queda fijo y no puede modificarse una vez creada."
    ],
    correcta: 2,
    explicacion: " La correcta es No, es necesario detener la instancia antes de cambiar su tipo. porque Para cambiar el tipo de instancia (más o menos CPU/RAM) es obligatorio detenerla primero. No se puede modificar en caliente. CLASE 16-17: Laboratorio Windows Server"
  },
  {
    enunciado: "¿A través de qué protocolo y puerto te conectas habitualmente a instancias EC2 con Windows Server?",
    opciones: [
      "SSH en el puerto 22, igual que en las instancias Linux.",
      "FTP en el puerto 21, para la transferencia de ficheros del sistema.",
      "RDP en el puerto 3389, el protocolo de escritorio remoto de Windows.",
      "HTTP en el puerto 80, accediendo a través de un navegador web."
    ],
    correcta: 2,
    explicacion: " La correcta es RDP en el puerto 3389, el protocolo de escritorio remoto de Windows. porque Las instancias Windows se administran mediante RDP (Remote Desktop Protocol) en el puerto 3389, que proporciona una interfaz gráfica remota. SSH se usa para Linux. CLASE 18-19: Almacenamiento - Amazon EBS y S3"
  },
  {
    enunciado: "¿Cuándo tiene más sentido usar Amazon S3 en lugar de Amazon EBS para el almacenamiento?",
    opciones: [
      "Cuando necesitas almacenamiento de bloque para el sistema operativo.",
      "Para alojar bases de datos relacionales con alto rendimiento de escritura.",
      "Para guardar archivos estáticos, imágenes o backups accesibles vía HTTP.",
      "Para conectar el disco directamente a una instancia EC2 activa."
    ],
    correcta: 2,
    explicacion: " La correcta es Para guardar archivos estáticos, imágenes o backups accesibles vía HTTP. porque S3 es almacenamiento de objetos ideal para archivos, backups y contenido web accesible mediante URL. EBS es almacenamiento en bloque diseñado para conectarse a instancias EC2."
  },
  {
    enunciado: "¿Qué es un snapshot en Amazon EBS y para qué se utiliza principalmente?",
    opciones: [
      "Un tipo de volumen de alto rendimiento optimizado para bases de datos.",
      "Una métrica de rendimiento del volumen registrada en tiempo real.",
      "Una copia puntual de un volumen que se guarda en S3.",
      "Un volumen temporal que se elimina automáticamente al detener la instancia."
    ],
    correcta: 2,
    explicacion: " La correcta es Una copia puntual de un volumen que se guarda en S3. porque Un snapshot es una copia incremental del estado de un volumen EBS en un momento dado, almacenada en S3. Permite restaurar el volumen o crear nuevos a partir de ese estado."
  },
  {
    enunciado: "¿Cuál es una característica fundamental de los nombres de bucket en Amazon S3?",
    opciones: [
      "Solo tienen que ser únicos dentro de la misma región de AWS.",
      "Pueden contener letras mayúsculas y caracteres especiales sin restricciones.",
      "Deben ser únicos a nivel mundial en toda la plataforma de AWS.",
      "Se generan automáticamente por AWS y no pueden ser personalizados."
    ],
    correcta: 2,
    explicacion: " La correcta es Deben ser únicos a nivel mundial en toda la plataforma de AWS. porque Los nombres de bucket en S3 son globales: no pueden repetirse en toda la plataforma de AWS, independientemente de la región."
  },
  {
    enunciado: "Una instancia EC2 tiene un volumen raíz de tipo EBS. ¿Qué ocurre con los datos si la instancia se detiene y se vuelve a iniciar?",
    opciones: [
      "Los datos se pierden porque EBS es almacenamiento efímero por naturaleza.",
      "Los datos se copian automáticamente a S3 como medida de seguridad.",
      "Los datos se conservan porque EBS persiste aunque la instancia esté parada.",
      "La instancia no puede reiniciarse sin formatear previamente el volumen."
    ],
    correcta: 2,
    explicacion: " La correcta es Los datos se conservan porque EBS persiste aunque la instancia esté parada. porque EBS es almacenamiento persistente: los datos se mantienen aunque la instancia se detenga o reinicie. Solo se perderían si se elimina el volumen de forma explícita."
  },
  {
    enunciado: "¿Para qué tipo de caso de uso es más adecuado Amazon EBS?",
    opciones: [
      "Almacenar y servir imágenes, vídeos y archivos estáticos a escala global.",
      "Distribuir contenido multimedia a usuarios de distintas partes del mundo.",
      "Proporcionar el disco del sistema operativo y datos de una instancia EC2.",
      "Gestionar bases de datos NoSQL sin necesidad de administrar servidores."
    ],
    correcta: 2,
    explicacion: " La correcta es Proporcionar el disco del sistema operativo y datos de una instancia EC2. porque EBS es almacenamiento en bloque: se comporta como un disco duro virtual conectado a una instancia EC2, ideal para sistema operativo, bases de datos y aplicaciones con estado."
  },
  {
    enunciado: "¿Qué ocurre al hacer público un objeto en S3?",
    opciones: [
      "Todo el bucket es público.",
      "Se desactiva el cifrado del objeto.",
      "Se puede acceder al objeto por URL.",
      "El objeto cambia de región."
    ],
    correcta: 2,
    explicacion: " La correcta es Se puede acceder al objeto por URL. porque Al hacer público un objeto en S3 se genera una URL accesible desde internet. Esto afecta solo a ese objeto, no a todo el bucket ni activa o desactiva el cifrado del mismo. CLASE 20-21: Bases de Datos - Amazon RDS"
  },
  {
    enunciado: "¿Qué ventaja principal ofrece la configuración Multi-AZ en Amazon RDS?",
    opciones: [
      "Mejora el rendimiento de lectura con instancias en paralelo.",
      "Permite usar diferentes motores de BBDD en la misma instancia.",
      "Da alta disponibilidad con failover automático a otra zona.",
      "Reduce costes al compartir la instancia entre varias aplicaciones."
    ],
    correcta: 2,
    explicacion: " La correcta es Da alta disponibilidad con failover automático a otra zona. porque Multi-AZ mantiene una réplica sincrónica en otra zona de disponibilidad y realiza failover automático si la instancia principal falla, sin intervención manual."
  },
  {
    enunciado: "¿Cuál es la principal ventaja de usar Amazon RDS frente a instalar la base de datos en una instancia EC2?",
    opciones: [
      "RDS solo soporta MySQL, lo que simplifica la gestión de motores.",
      "RDS no permite hacer copias de seguridad automáticas del sistema.",
      "EC2 con BBDD es siempre más barato que RDS en cualquier escenario.",
      "Con RDS, AWS gestiona parches, backups y alta disponibilidad por ti."
    ],
    correcta: 3,
    explicacion: " La correcta es Con RDS, AWS gestiona parches, backups y alta disponibilidad por ti. porque RDS es un servicio gestionado: AWS se encarga de actualizaciones del motor, backups automáticos, Multi-AZ y otras tareas de administración que el cliente haría manualmente en EC2."
  },
  {
    enunciado: "Una base de datos Amazon RDS tiene activado Multi-AZ y además tiene réplicas de lectura. ¿Cuál de las siguientes afirmaciones es CORRECTA sobre la diferencia entre ambos mecanismos?",
    opciones: [
      "Multi-AZ y las réplicas de lectura sirven exactamente para lo mismo; es redundante tener ambas.",
      "Multi-AZ replica de forma asíncrona; las réplicas de lectura lo hacen de forma síncrona.",
      "Las réplicas de lectura sirven como destino de failover automático igual que Multi-AZ.",
      "Multi-AZ garantiza alta disponibilidad con failover automático; las réplicas escalan el rendimiento de lectura."
    ],
    correcta: 3,
    explicacion: " La correcta es Multi-AZ garantiza alta disponibilidad con failover automático; las réplicas escalan el rendimiento de lectura. porque Multi-AZ replica de forma SÍNCRONA a otra zona para alta disponibilidad (failover automático). Las réplicas de lectura replican de forma ASÍNCRONA y se usan para escalar lecturas. Son mecanismos complementarios con objetivos distintos."
  },
  {
    enunciado: "Una aplicación tiene muchas consultas de solo lectura que saturan la instancia principal de Amazon RDS. ¿Cuál es la solución más adecuada?",
    opciones: [
      "Activar Multi-AZ para que las consultas de lectura se repartan entre zonas.",
      "Aumentar el tipo de instancia del servidor de aplicaciones web frontend.",
      "Migrar completamente la base de datos a Amazon DynamoDB.",
      "Crear réplicas de lectura de RDS para redirigir las consultas de solo lectura."
    ],
    correcta: 3,
    explicacion: " La correcta es Crear réplicas de lectura de RDS para redirigir las consultas de solo lectura. porque Las réplicas de lectura de RDS son copias asíncronas diseñadas para absorber tráfico de solo lectura, descargando la instancia principal. Multi-AZ es para alta disponibilidad, no para escalar lecturas."
  },
  {
    enunciado: "¿Cuál de los siguientes motores de base de datos NO está disponible de forma nativa en Amazon RDS?",
    opciones: [
      "MySQL.",
      "PostgreSQL.",
      "Oracle.",
      "MongoDB."
    ],
    correcta: 3,
    explicacion: " La correcta es MongoDB. porque Amazon RDS soporta motores relacionales: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server y Amazon Aurora. MongoDB es NoSQL y no está en RDS; AWS ofrece Amazon DocumentDB como alternativa compatible."
  },
  {
    enunciado: "¿Qué implica que un servicio como RDS sea administrado (managed)?",
    opciones: [
      "El usuario no define el motor de base de datos.",
      "El usuario no accede nunca a la base de datos.",
      "El servicio no necesita configuración.",
      "AWS se encarga del sistema y su mantenimiento."
    ],
    correcta: 3,
    explicacion: " La correcta es AWS se encarga del sistema y su mantenimiento. porque Un servicio gestionado (managed) como RDS significa que AWS se ocupa de la instalación, los parches del motor, los backups automáticos y la alta disponibilidad. El cliente solo gestiona datos y configuración. CLASE 22-23: Serverless - AWS Lambda"
  },
  {
    enunciado: "¿Qué significa que AWS Lambda es un servicio 'serverless'?",
    opciones: [
      "Que el código nunca se ejecuta en servidores físicos reales.",
      "Que no puede usarse junto con otros servicios de AWS.",
      "Que el código se ejecuta de forma continua en segundo plano.",
      "Que AWS gestiona toda la infraestructura y solo pagas por las ejecuciones."
    ],
    correcta: 3,
    explicacion: " La correcta es Que AWS gestiona toda la infraestructura y solo pagas por las ejecuciones. porque Serverless significa que no hay que provisionar ni gestionar servidores. AWS lo hace por ti y la facturación es por número de ejecuciones y tiempo de cómputo."
  },
  {
    enunciado: "Una función Lambda recibe de repente miles de peticiones simultáneas. ¿Cómo responde Lambda ante esta situación?",
    opciones: [
      "Lambda solo procesa una petición a la vez; el resto se descartan sin respuesta.",
      "Lambda agrupa las peticiones en lotes y las procesa secuencialmente en orden de llegada.",
      "Lambda delega el exceso de peticiones a EC2 automáticamente si supera su capacidad.",
      "Lambda escala automáticamente ejecutando múltiples instancias en paralelo hasta el límite de concurrencia."
    ],
    correcta: 3,
    explicacion: " La correcta es Lambda escala automáticamente ejecutando múltiples instancias en paralelo hasta el límite de concurrencia. porque Lambda escala horizontalmente de forma automática lanzando instancias paralelas de la función. Hay un límite de concurrencia por región (por defecto 1.000 ejecuciones simultáneas), que se puede ampliar solicitándolo a AWS."
  },
  {
    enunciado: "Una empresa quiere apagar automáticamente sus instancias EC2 fuera del horario laboral para reducir costes. ¿Qué combinación de servicios es la más adecuada?",
    opciones: [
      "EC2 Auto Scaling con una política de escalado programado por horario fijo.",
      "Amazon RDS con la opción de mantenimiento automático fuera de horario.",
      "AWS Elastic Beanstalk con entornos configurados por turno de trabajo.",
      "AWS Lambda con un evento cronológico usando una regla horaria de EventBridge."
    ],
    correcta: 3,
    explicacion: " La correcta es AWS Lambda con un evento cronológico usando una regla horaria de EventBridge. porque La función Lambda llama a la API de EC2 para encender o apagar las instancias a horas concretas, activada por una regla horaria (cron) de Amazon EventBridge. CLASE 24-25: PaaS - AWS Elastic Beanstalk"
  },
  {
    enunciado: "¿Qué gestiona automáticamente AWS Elastic Beanstalk al desplegar una aplicación web?",
    opciones: [
      "Los repositorios de código fuente y el historial de commits de la aplicación.",
      "Las consultas SQL de la aplicación y la optimización de sus índices.",
      "Solo los certificados SSL y las reglas del grupo de seguridad asociadas.",
      "El aprovisionamiento de recursos, balanceo de carga, escalado y monitorización."
    ],
    correcta: 3,
    explicacion: " La correcta es El aprovisionamiento de recursos, balanceo de carga, escalado y monitorización. porque Elastic Beanstalk es un PaaS que abstrae la infraestructura: el desarrollador sube el código y AWS gestiona automáticamente EC2, ELB, Auto Scaling y CloudWatch. CLASE 25-26: BD NoSQL - AWS DynamoDB"
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre Amazon DynamoDB y Amazon RDS?",
    opciones: [
      "DynamoDB es una base de datos relacional y RDS es un servicio NoSQL.",
      "DynamoDB solo puede usarse en aplicaciones serverless con AWS Lambda.",
      "RDS no garantiza alta disponibilidad, mientras que DynamoDB sí lo hace.",
      "DynamoDB es NoSQL (clave-valor/documentos) y RDS gestiona BBDD relacionales."
    ],
    correcta: 3,
    explicacion: " La correcta es DynamoDB es NoSQL (clave-valor/documentos) y RDS gestiona BBDD relacionales. porque DynamoDB es una base de datos NoSQL totalmente gestionada, ideal para acceso por clave con alta velocidad. RDS gestiona motores relacionales como MySQL, PostgreSQL u Oracle. CLASE 27-28: Escalado Automático"
  },
  {
    enunciado: "Una aplicación web tiene picos de tráfico muy variables e impredecibles. ¿Qué combinación de servicios AWS permite gestionar la capacidad de forma automática?",
    opciones: [
      "Amazon RDS Multi-AZ y Amazon Route 53 con enrutamiento de latencia.",
      "AWS Lambda con EventBridge y Amazon S3 para el contenido estático.",
      "Amazon EBS con instantáneas programadas y Amazon CloudFront.",
      "EC2 Auto Scaling junto con un balanceador de carga ELB."
    ],
    correcta: 3,
    explicacion: " La correcta es EC2 Auto Scaling junto con un balanceador de carga ELB. porque EC2 Auto Scaling añade o elimina instancias según la demanda, mientras que el ELB distribuye el tráfico entre ellas automáticamente, garantizando disponibilidad y rendimiento."
  },
  {
    enunciado: "¿Puede un balanceador de carga (ELB) de AWS distribuir tráfico entre instancias que están en distintas regiones de AWS?",
    opciones: [
      "Sí, los ELB distribuyen tráfico entre cualquier región de AWS por defecto.",
      "Sí, pero requiere activar la opción Multi-Region en la configuración avanzada.",
      "No, los ELB solo pueden distribuir tráfico dentro de una única subred privada.",
      "No, un ELB opera dentro de una región aunque cubre varias zonas de disponibilidad."
    ],
    correcta: 3,
    explicacion: " La correcta es No, un ELB opera dentro de una región aunque cubre varias zonas de disponibilidad. porque Los ELB son regionales: operan dentro de una sola región de AWS, aunque pueden abarcar varias zonas de disponibilidad. Para balancear entre regiones se usaría Route 53 con políticas de latencia."
  },
  {
    enunciado: "¿Cuál es la diferencia entre el escalado horizontal y el escalado vertical?",
    opciones: [
      "El vertical añade más instancias al grupo; el horizontal aumenta CPU y RAM de una instancia.",
      "Ambos son equivalentes y solo difieren en la terminología del proveedor cloud.",
      "El escalado horizontal aplica solo a BBDD y el vertical solo a servidores web.",
      "El horizontal añade más instancias al grupo; el vertical aumenta los recursos de una instancia."
    ],
    correcta: 3,
    explicacion: " La correcta es El horizontal añade más instancias al grupo; el vertical aumenta los recursos de una instancia. porque Escalado horizontal (scale out): se añaden más instancias para repartir la carga. Escalado vertical (scale up): se aumenta la CPU/RAM de la instancia existente. CLASE 29-30: Contenedores"
  },
  {
    enunciado: "¿Qué problema principal resuelve Docker en el desarrollo de software?",
    opciones: [
      "Permite escalar aplicaciones automáticamente según la demanda del sistema.",
      "Proporciona almacenamiento persistente para aplicaciones distribuidas en red.",
      "Gestiona los permisos y accesos entre los microservicios de forma centralizada.",
      "Empaqueta la app con sus dependencias, resolviendo el 'funciona en mi máquina'."
    ],
    correcta: 3,
    explicacion: " La correcta es Empaqueta la app con sus dependencias, resolviendo el 'funciona en mi máquina'. porque Docker encapsula la aplicación y todas sus dependencias en un contenedor, garantizando que se ejecute de forma idéntica en cualquier entorno: desarrollo, pruebas o producción."
  },
  {
    enunciado: "Si Docker permite ejecutar contenedores individualmente, ¿qué problema adicional resuelve Kubernetes (o Amazon EKS)?",
    opciones: [
      "Crear y optimizar imágenes Docker más ligeras y eficientes en recursos.",
      "Almacenar imágenes de contenedores en un registro privado y seguro.",
      "Convertir aplicaciones monolíticas en microservicios de forma automática.",
      "Orquestar múltiples contenedores gestionando despliegue y escalado."
    ],
    correcta: 3,
    explicacion: " La correcta es Orquestar múltiples contenedores gestionando despliegue y escalado. porque Kubernetes (y EKS en AWS) gestiona la orquestación de contenedores: despliegue, escalado automático, recuperación ante fallos y actualizaciones sin downtime. CLASE 31-32: Arquitectura en la Nube"
  },
  {
    enunciado: "¿Para qué sirve principalmente Amazon Route 53?",
    opciones: [
      "Crear redes privadas virtuales dentro de la infraestructura de AWS.",
      "Distribuir contenido estático desde ubicaciones edge cercanas al usuario.",
      "Monitorizar el rendimiento de instancias y generar alertas automáticas.",
      "Gestionar DNS y enrutar el tráfico hacia los recursos de AWS."
    ],
    correcta: 3,
    explicacion: " La correcta es Gestionar DNS y enrutar el tráfico hacia los recursos de AWS. porque Route 53 es el servicio DNS de AWS. Traduce nombres de dominio a IPs y ofrece distintas políticas de enrutamiento: latencia, geolocalización, failover, ponderado, etc."
  },
  {
    enunciado: "¿Cuáles son los 6 pilares del AWS Well-Architected Framework?",
    opciones: [
      "Seguridad, Escalabilidad, Automatización, Rendimiento, Costes y Resiliencia.",
      "Disponibilidad, Seguridad, Escalabilidad, Costes, Monitorización y Elasticidad.",
      "Seguridad, Redundancia, Automatización, Latencia, Costes y Sostenibilidad.",
      "Excelencia Operativa, Seguridad, Fiabilidad, Rendimiento, Costes y Sostenibilidad."
    ],
    correcta: 3,
    explicacion: " La correcta es Excelencia Operativa, Seguridad, Fiabilidad, Rendimiento, Costes y Sostenibilidad. porque Los 6 pilares oficiales son: Excelencia Operativa, Seguridad, Fiabilidad, Eficiencia de Rendimiento, Optimización de Costes y Sostenibilidad. 'Escalabilidad' no es un pilar propio."
  },
  {
    enunciado: "¿Cuál es la principal ventaja de usar Amazon CloudFront para una aplicación con usuarios repartidos por todo el mundo?",
    opciones: [
      "Escala instancias EC2 automáticamente según la demanda en cada región.",
      "Cifra todos los datos almacenados en S3 de forma completamente automática.",
      "Gestiona los certificados SSL de todos los balanceadores de carga de la cuenta.",
      "Entrega el contenido desde ubicaciones edge cercanas al usuario final."
    ],
    correcta: 3,
    explicacion: " La correcta es Entrega el contenido desde ubicaciones edge cercanas al usuario final. porque CloudFront es una CDN que replica el contenido en ubicaciones edge globales, reduciendo la latencia al servir desde el punto geográficamente más cercano al usuario."
  },
  {
    enunciado: "Una empresa quiere evaluar si su arquitectura en AWS sigue las mejores prácticas en términos de seguridad, costes y resiliencia. ¿Qué herramienta de AWS utiliza para ello?",
    opciones: [
      "AWS Pricing Calculator, para estimar el coste mensual de los servicios.",
      "AWS CloudFormation, para desplegar la infraestructura como código.",
      "Amazon CloudWatch, para monitorizar métricas y crear alertas.",
      "AWS Well-Architected Tool, basada en el Well-Architected Framework."
    ],
    correcta: 3,
    explicacion: " La correcta es AWS Well-Architected Tool, basada en el Well-Architected Framework. porque La AWS Well-Architected Tool permite revisar la arquitectura contra los 6 pilares del framework, identificando riesgos y áreas de mejora de forma estructurada."
  },
  {
    enunciado: "¿Qué ventaja clave aporta una CDN?",
    opciones: [
      "Más almacenamiento.",
      "Más bases de datos.",
      "Más permisos.",
      "Menor latencia al usuario."
    ],
    correcta: 3,
    explicacion: " La correcta es Menor latencia al usuario. porque Una CDN (Content Delivery Network) como Amazon CloudFront distribuye el contenido en ubicaciones edge cercanas al usuario, reduciendo la latencia al servir desde el punto geográficamente más próximo."
  },
  {
    enunciado: "¿Qué criterio tiene más sentido usar para repartir tráfico global mediante DNS?",
    opciones: [
      "La hora del servidor.",
      "El tamaño de la instancia.",
      "El coste de la región.",
      "La ubicación del usuario."
    ],
    correcta: 3,
    explicacion: " La correcta es La ubicación del usuario. porque El enrutamiento de geolocalización en Route 53 dirige el tráfico al recurso más cercano al usuario, minimizando la latencia y permitiendo cumplir requisitos de soberanía de datos por país."
  }
];