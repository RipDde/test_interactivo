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
  }
];