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
    enunciado: "¿Cuál de los siguientes es un ejemplo de uso de la nube en la vida diaria?",
    opciones: [
      "Conectar un monitor por HDMI",
      "Cambiar la memoria RAM de un ordenador",
      "Formatear un disco duro sin conexión a Internet",
      "Guardar fotos en Google Drive o iCloud"
    ],
    correcta: 3,
    explicacion: " La correcta es Guardar fotos en Google Drive o iCloud porque esos servicios almacenan archivos en servidores accesibles por Internet, no solo en el dispositivo local."
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
    enunciado: "¿Cuál de estos servicios representa mejor el concepto de nube?",
    opciones: [
      "Un pendrive conectado al ordenador",
      "Netflix, Gmail o OneDrive",
      "Un disco duro interno",
      "Una impresora sin conexión"
    ],
    correcta: 1,
    explicacion: " La correcta es Netflix, Gmail o OneDrive porque son servicios accesibles por Internet que funcionan usando servidores remotos."
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
    enunciado: "¿Qué problema era más común antes de usar almacenamiento en la nube?",
    opciones: [
      "Depender más de discos físicos, copias locales o servidores propios",
      "No poder usar archivos digitales",
      "No poder instalar sistemas operativos",
      "Tener demasiados servicios accesibles desde cualquier lugar"
    ],
    correcta: 0,
    explicacion: " La correcta es Depender más de discos físicos, copias locales o servidores propios porque antes los datos solían estar más ligados a dispositivos concretos."
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
  enunciado: "Además de la latencia y la normativa, ¿qué otro criterio puede influir al elegir una región de AWS?",
  opciones: [
    "El fondo de pantalla del sistema operativo",
    "La marca del teclado del administrador",
    "El coste y la disponibilidad de servicios en esa región",
    "El tamaño del monitor usado para entrar en la consola"
  ],
  correcta: 2,
  explicacion: " La correcta es El coste y la disponibilidad de servicios en esa región porque no todos los servicios tienen el mismo precio o están disponibles en todas las regiones."
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
}

];