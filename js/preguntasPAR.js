const preguntasPAR = [
    {
        enunciado: "¿Cuál es la capa del modelo OSI responsable de enrutar paquetes entre redes?",
        opciones: ["Enlace de datos", "Red", "Transporte", "Aplicación"],
        correcta: 1,
        explicacion: " La correcta es Red porque esa capa se encarga del direccionamiento lógico, como las direcciones IP, y de decidir por qué camino viajan los paquetes entre distintas redes. Enlace de datos trabaja dentro de la red local; Transporte se ocupa de la comunicación extremo a extremo; y Aplicación está más cerca de los servicios que usa el usuario."
    },
    {
        enunciado: "En el modelo TCP/IP, ¿en qué capa se ubican TCP y UDP?",
        opciones: ["Acceso a la red", "Internet", "Transporte", "Aplicación"],
        correcta: 2,
        explicacion: " La correcta es Transporte porque TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) funcionan en esa capa y gestionan cómo se entregan los datos entre origen y destino. Acceso a la red trata el medio físico y el enlace; Internet corresponde al direccionamiento IP; y Aplicación agrupa protocolos de servicio al usuario."
    },
    {
        enunciado: "¿Qué protocolo se encarga de traducir una dirección IP a una dirección MAC en una LAN?",
        opciones: ["ICMP", "DNS", "DHCP", "ARP"],
        correcta: 3,
        explicacion: " La correcta es ARP (Address Resolution Protocol) porque sirve para averiguar qué dirección MAC corresponde a una IP dentro de una red local. ICMP (Internet Control Message Protocol) se usa para errores y diagnóstico; DNS (Domain Name System) traduce nombres a IP; y DHCP (Dynamic Host Configuration Protocol) asigna parámetros de red."
    },
    {
        enunciado: "¿Qué campo de una trama Ethernet se usa para detectar errores?", /*rebuscada*/
        opciones: ["Tipo/Longitud", "Preamble", "FCS (CRC)", "Dirección MAC origen"],
        correcta: 2,
        explicacion: " La correcta es FCS (Frame Check Sequence), calculado con CRC (Cyclic Redundancy Check), porque sirve para comprobar si la trama llegó con errores. Tipo/Longitud indica el protocolo o tamaño; el Preamble sincroniza la transmisión; y la MAC origen solo identifica al emisor, no detecta fallos."
    },
    {
        enunciado: "¿Cuál es el tamaño clásico del campo de direcciones MAC en Ethernet?",
        opciones: ["4 bytes", "6 bytes", "8 bytes", "16 bytes"],
        correcta: 1,
        explicacion: " La correcta es 6 bytes porque una dirección MAC estándar tiene 48 bits, y 48 bits son 6 bytes. 4 bytes serían 32 bits, 8 bytes serían 64, y 16 bytes serían 128; ninguno de esos tamaños corresponde a la MAC Ethernet clásica."
    },
    {
        enunciado: "¿Cuál es la forma abreviada correcta y más compacta de la dirección IPv6 2001:0db8:0000:0000:0000:00a0:0000:1c20?",
        opciones: [
            "2001:db8:0:0:a0:0:0:1c20",
            "2001:db8::0a0::1c20",
            "2001:db8::a0:0:1c20",
            "2001::db8:a0::1c20"
        ],
        correcta: 2,
        explicacion: " La correcta es 2001:db8::a0:0:1c20 porque en IPv6 se pueden quitar ceros a la izquierda y sustituir una sola secuencia continua de grupos 0000 por ::. La opción 1 no es la más compacta; y las opciones 2 y 4 usan mal ::, ya que esa compresión solo puede aparecer una vez en una misma dirección."
    },
    {
        enunciado: "¿Qué estándar define Ethernet?",
        opciones: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.1Q", "IEEE 802.1D"],
        correcta: 1,
        explicacion: " La correcta es IEEE 802.3 porque ese estándar define Ethernet. IEEE 802.11 corresponde a redes Wi-Fi; IEEE 802.1Q define el etiquetado de VLAN; e IEEE 802.1D se asocia al STP (Spanning Tree Protocol), no a Ethernet en sí."
    },

    {
        enunciado: "¿Qué cable usarías para conectar un PC a un switch en redes actuales?",
        opciones: ["Cruzado (cross-over)", "Directo (straight-through)", "Serial DCE", "Coaxial"],
        correcta: 1,
        explicacion: " La correcta es Directo (straight-through) porque tradicionalmente es el cable usado para conectar dispositivos distintos, como un PC y un switch. El cruzado se asociaba más a dispositivos del mismo tipo; Serial DCE no se usa para ese enlace Ethernet; y coaxial pertenece a tecnologías antiguas."
    },
    {
        enunciado: "¿Qué tecnología hace innecesario, en muchos casos, distinguir entre cable directo y cruzado?",
        opciones: ["PortFast", "Auto-MDI/MDIX", "LACP", "VTP pruning"],
        correcta: 1,
        explicacion: " La correcta es Auto-MDI/MDIX porque permite que el puerto adapte automáticamente transmisión y recepción, evitando preocuparse por si el cable es directo o cruzado. PortFast es de STP; LACP agrega enlaces; y VTP pruning optimiza tráfico de VLAN, no el tipo de cable."
    },
    {
        enunciado: "¿Cuál de estas categorías de cobre soporta 10 Gbps hasta 100 m de forma típica en entornos controlados?",
        opciones: ["Cat 5e", "Cat 6 (≤55 m)", "Cat 6A", "Cat 3"],
        correcta: 2,
        explicacion: " La correcta es Cat 6A porque es la categoría pensada para 10 Gbps hasta 100 metros de forma típica. Cat 5e se queda corta para eso; Cat 6 suele limitarse a menos distancia en 10 Gbps; y Cat 3 es demasiado antigua para redes modernas de alta velocidad."
    },
    {
        enunciado: "¿Qué tipo de fibra se recomienda para distancias de decenas de kilómetros?",
        opciones: ["Multimodo (MMF)", "Monomodo (SMF)", "UTP", "STP"],
        correcta: 1,
        explicacion: " La correcta es Monomodo (SMF, Single-Mode Fiber) porque está diseñada para largas distancias con menor dispersión de la señal. Multimodo se usa más en distancias cortas; UTP y STP son cables de cobre, así que no son tipos de fibra óptica."
    },
    {
        enunciado: "¿Qué conector de fibra es pequeño y muy usado en alta densidad?",
        opciones: ["BNC", "LC", "RJ-11", "VGA"],
        correcta: 1,
        explicacion: " La correcta es LC porque es un conector pequeño, muy habitual en instalaciones de alta densidad por ocupar poco espacio. BNC se asocia a coaxial; RJ-11 a telefonía; y VGA a vídeo, así que no son conectores típicos de fibra óptica."
    },
    {
        enunciado: "En una topología en estrella, el dispositivo central suele ser:",
        opciones: ["Un hub o switch", "Un router exclusivamente", "Un repetidor", "Un módem"],
        correcta: 0,
        explicacion: " La correcta es Un hub o switch porque en una topología en estrella todos los equipos se conectan a un punto central de ese tipo. Un router puede existir en la red, pero no define por sí mismo la estrella; y repetidor o módem no son la respuesta típica en este contexto."
    },
    {
        enunciado: "¿Qué topología proporciona mayor redundancia de caminos?",
        opciones: ["Bus", "Anillo", "Árbol", "Malla"],
        correcta: 3,
        explicacion: " La correcta es Malla porque ofrece varios caminos alternativos entre nodos, lo que mejora mucho la tolerancia a fallos. Bus tiene un único medio compartido; Anillo depende más del recorrido circular; y Árbol es jerárquica, pero no tan redundante como una malla."
    },
    {
        enunciado: "¿Qué dispositivo reduce dominios de colisión creando uno por puerto?",
        opciones: ["Hub", "Switch", "Repetidor", "Punto de acceso (AP)"],
        correcta: 1,
        explicacion: " La correcta es Switch porque cada puerto del switch funciona como un dominio de colisión independiente. Hub y repetidor comparten el medio y no separan colisiones; y un AP (Access Point) no es la respuesta típica para esa función en una red Ethernet cableada."
    },
    {
        enunciado: "¿Qué dispositivo separa dominios de broadcast?",
        opciones: ["Switch capa 2", "Hub", "Router", "Bridge"],
        correcta: 2,
        explicacion: " La correcta es Router porque los broadcasts no pasan normalmente de una red a otra a través de un router. Un switch de capa 2, un hub o un bridge trabajan dentro del dominio local y no separan broadcasts por sí solos."
    },
    {
        enunciado: "¿Cuál es una dirección IPv4 privada clase A?",
        opciones: ["172.31.0.0/16", "192.168.0.0/24", "10.0.0.0/8", "169.254.0.0/16"],
        correcta: 2,
        explicacion: " La correcta es 10.0.0.0/8 porque ese es el gran bloque privado de clase A. 172.31.0.0 pertenece al rango privado de clase B; 192.168.0.0 al de clase C; y 169.254.0.0/16 corresponde a direcciones automáticas APIPA, no a red privada clásica."
    },
    {
        enunciado: "¿Cuál es la dirección de loopback en IPv4?",
        opciones: ["0.0.0.0", "255.255.255.255", "127.0.0.1", "224.0.0.1"],
        correcta: 2,
        explicacion: " La correcta es 127.0.0.1 porque es la dirección loopback usada para que el equipo se refiera a sí mismo. 0.0.0.0 se usa como dirección no especificada o ruta por defecto según contexto; 255.255.255.255 es broadcast limitado; y 224.0.0.1 es multicast."
    },
    {
        enunciado: "¿Qué clase IPv4 tiene máscara por defecto 255.255.0.0?",
        opciones: ["Clase A", "Clase B", "Clase C", "Clase D"],
        correcta: 1,
        explicacion: " La correcta es Clase B porque la máscara por defecto histórica de una red clase B es 255.255.0.0. Clase A usa 255.0.0.0; Clase C usa 255.255.255.0; y Clase D está reservada para multicast, no para redes normales con esa máscara."
    },
    {
        enunciado: "¿Qué significa 0.0.0.0 en una tabla de rutas?",
        opciones: ["Broadcast limitado", "Ruta por defecto", "Loopback", "Multicast"],
        correcta: 1,
        explicacion: " La correcta es Ruta por defecto porque 0.0.0.0/0 representa el camino que se usa cuando no existe una ruta más específica hacia un destino. No es loopback, ni multicast, ni broadcast limitado."
    },
    {
        enunciado: "¿Cuál es el rango de red privada clase B?",
        opciones: ["172.16.0.0 – 172.31.255.255", "10.0.0.0 – 10.255.255.255", "192.168.0.0 – 192.168.255.255", "100.64.0.0 – 100.127.255.255"],
        correcta: 0,
        explicacion: " La correcta es 172.16.0.0 – 172.31.255.255 porque ese es el bloque privado reservado dentro del espacio de clase B. 10.0.0.0/8 es el rango privado de clase A; 192.168.0.0/16 el de clase C; y 100.64.0.0/10 se usa para otros fines, no como rango privado clásico."
    },
    {
        enunciado: "¿Qué máscara por defecto corresponde a una red clase C?",
        opciones: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
        correcta: 2,
        explicacion: " La correcta es 255.255.255.0 porque esa es la máscara por defecto histórica de las redes clase C. 255.0.0.0 corresponde a clase A; 255.255.0.0 a clase B; y 255.255.255.128 ya implica subneteo, no la máscara por defecto completa de la clase."
    },
    {
        enunciado: "La dirección de broadcast de una subred se obtiene:",
        opciones: ["AND IP con máscara", "OR IP con inverso (NOT) de la máscara", "XOR IP con máscara", "Sumando 1 a la IP de red"],
        correcta: 1,
        explicacion: " La correcta es OR IP con inverso (NOT) de la máscara porque así se ponen a 1 todos los bits de host y se obtiene la dirección de broadcast. El AND con la máscara sirve para la dirección de red; XOR no se usa para esto; y sumar 1 a la red da el primer host, no el broadcast."
    },
    {
        enunciado: "En IPv6, ¿qué notación permite abreviar ceros consecutivos una única vez?",
        opciones: [":0:", "::", ":00:", ":ffff:"],
        correcta: 1,
        explicacion: " La correcta es :: porque en IPv6 esa notación sustituye una secuencia continua de grupos de ceros, pero solo una vez por dirección. Las otras opciones no son la forma válida de compresión definida para direcciones IPv6."
    },
    {
        enunciado: "¿Qué prefijo identifica direcciones unicast globales en IPv6?",
        opciones: ["fc00::/7", "fe80::/10", "ff00::/8", "2000::/3"],
        correcta: 3,
        explicacion: " La correcta es 2000::/3 porque ese prefijo corresponde a direcciones unicast globales, es decir, enroutables en Internet. fc00::/7 es unique local; fe80::/10 es link-local; y ff00::/8 corresponde a multicast."
    },
    {
        enunciado: "¿Qué tipo de dirección IPv6 es fe80::/10?",
        opciones: ["Unicast global", "Multicast", "Link-local (local de enlace)", "Unique local (local único)"],
        correcta: 2,
        explicacion: " La correcta es Link-local (local de enlace) porque las direcciones fe80::/10 se usan para comunicación local dentro del mismo enlace y no se enrutan hacia otras redes. No son globales, ni multicast, ni unique local."
    },
    {
        enunciado: "¿Cuál es el tipo de dirección IPv6 destinada a múltiples receptores específicos?",
        opciones: ["Anycast", "Multicast", "Unicast", "Broadcast"],
        correcta: 1,
        explicacion: " La correcta es Multicast porque en IPv6 se usa para enviar tráfico a un grupo concreto de receptores. Anycast envía al receptor más cercano de un grupo; Unicast es uno a uno; y Broadcast no existe como tal en IPv6, ya que se sustituyó por otros mecanismos como multicast."
    },
    {
        enunciado: "En Wi-Fi, ¿qué banda suele ofrecer mayor alcance pero más interferencias?",
        opciones: ["5 GHz", "2.4 GHz", "6 GHz", "60 GHz"],
        correcta: 1,
        explicacion: " La correcta es 2.4 GHz porque suele llegar más lejos y atravesar mejor obstáculos, aunque también sufre más interferencias al estar más saturada. 5 GHz y 6 GHz suelen ofrecer más velocidad pero menos alcance; y 60 GHz tiene un alcance mucho menor."
    },
    {
        enunciado: "¿Cuál es el estándar comercialmente llamado Wi-Fi 6?",
        opciones: ["802.11ac", "802.11n", "802.11ax", "802.11be"],
        correcta: 2,
        explicacion: " La correcta es 802.11ax porque ese estándar recibe el nombre comercial de Wi-Fi 6. 802.11ac es Wi-Fi 5; 802.11n es anterior; y 802.11be se asocia a Wi-Fi 7."
    },
    {
        enunciado: "¿Qué protocolo de seguridad Wi-Fi es el recomendado actualmente para redes personales?",
        opciones: ["WEP", "WPA", "WPA2-PSK", "WPA3-Personal"],
        correcta: 3,
        explicacion: " La correcta es WPA3-Personal porque es el protocolo más actual y seguro para redes Wi-Fi domésticas, con mejores mecanismos de protección que versiones anteriores. WEP (Wired Equivalent Privacy) es muy inseguro y está obsoleto; WPA (Wi-Fi Protected Access) también ha quedado desfasado; y WPA2-PSK (Wi-Fi Protected Access 2 - Pre-Shared Key) sigue siendo válido en muchos casos, pero es anterior y menos avanzado que WPA3."
    },
    {
        enunciado: "¿Cuál de las siguientes es una buena práctica al configurar un AP doméstico?",
        opciones: ["Usar WEP por compatibilidad", "Ocultar SSID siempre", "Usar WPA3 si es posible", "Canales aleatorios diarios"],
        correcta: 2,
        explicacion: " La correcta es Usar WPA3 si es posible porque mejora la seguridad del AP (Access Point) y protege mejor la red inalámbrica. Usar WEP por compatibilidad es una mala idea porque es inseguro; ocultar el SSID (Service Set Identifier) no aporta una protección real importante; y cambiar canales aleatoriamente cada día no es una práctica útil ni estable."
    },
    {
        enunciado: "¿Qué es una VLAN?",
        opciones: ["Una red física independiente", "Una red lógica dentro de una LAN física", "Un protocolo de routing", "Un tipo de cableado"],
        correcta: 1,
        explicacion: " La correcta es Una red lógica dentro de una LAN física porque una VLAN (Virtual Local Area Network) permite dividir una misma infraestructura física en varias redes separadas a nivel lógico. No es una red física independiente porque usa el mismo hardware; no es un protocolo de routing porque no enruta tráfico; y tampoco es un tipo de cableado."
    },
    {
        enunciado: "Un puerto configurado como access en un switch:",
        opciones: ["Transporta múltiples VLAN con etiquetas", "Pertenece a una sola VLAN y envía tráfico sin etiquetar", "Es únicamente para uplinks", "Solo admite VLAN de voz"],
        correcta: 1,
        explicacion: " La correcta es Pertenece a una sola VLAN y envía tráfico sin etiquetar porque un puerto access se usa normalmente para conectar equipos finales, como un PC. No transporta múltiples VLAN con etiquetas, porque eso sería propio de un trunk; no es solo para uplinks; y tampoco se limita únicamente a VLAN de voz."
    },
    {
        enunciado: "Un enlace trunk 802.1Q:",
        opciones: ["Bloquea el tráfico de gestión", "Transporta varias VLAN etiquetadas", "Solo sirve para VLAN nativa", "No se usa entre switches"],
        correcta: 1,
        explicacion: " La correcta es Transporta varias VLAN etiquetadas porque un trunk 802.1Q permite que distintas VLAN viajen por un mismo enlace identificadas mediante etiquetas. No bloquea el tráfico de gestión por definición; no sirve solo para la VLAN nativa; y sí se usa habitualmente entre switches o entre switch y router."
    },
    {
        enunciado: "La VLAN nativa en 802.1Q se usa para:",
        opciones: ["Tráfico etiquetado de control", "Tráfico sin etiquetar en el trunk", "Tráfico de voz únicamente", "Bloquear BPDUs"],
        correcta: 1,
        explicacion: " La correcta es Tráfico sin etiquetar en el trunk porque en 802.1Q la VLAN nativa es la asociada a las tramas que viajan sin etiqueta por el enlace troncal. No se refiere específicamente al tráfico de voz; no es para bloquear BPDUs (Bridge Protocol Data Units); y no se define como tráfico etiquetado de control."
    },
    {
        enunciado: "¿Qué permite comunicar VLANs distintas sin usar un router externo?",
        opciones: ["Switch capa 2", "Switch capa 3 con SVI", "Hub", "Bridge"],
        correcta: 1,
        explicacion: " La correcta es Switch capa 3 con SVI porque un switch de capa 3 puede enrutar entre VLANs usando SVI (Switched Virtual Interface). Un switch de capa 2 no hace enrutamiento entre redes; un hub solo repite señales; y un bridge trabaja en capa 2, no hace inter-VLAN routing."
    },
    {
        enunciado: "Router-on-a-stick requiere:",
        opciones: ["Interfaz física por VLAN", "Subinterfaces y encapsulation dot1Q", "STP deshabilitado", "NAT en el mismo enlace"],
        correcta: 1,
        explicacion: " La correcta es Subinterfaces y encapsulation dot1Q porque en router-on-a-stick un único interfaz físico del router se divide en subinterfaces, una por VLAN, usando etiquetado 802.1Q. No necesita una interfaz física por VLAN; no exige deshabilitar STP (Spanning Tree Protocol); y NAT no es un requisito para que funcione."
    },
    {
        enunciado: "Un ABR (Area Border Router) en OSPF:",
        opciones: ["Conecta distintas áreas OSPF", "Redistribuye rutas externas", "Es siempre el DR", "Solo enruta tráfico multicast"],
        correcta: 0,
        explicacion: " La correcta es Conecta distintas áreas OSPF porque un ABR (Area Border Router) enlaza el área 0 con otras áreas dentro de OSPF (Open Shortest Path First). Redistribuir rutas externas es más propio de un ASBR (Autonomous System Boundary Router); no tiene por qué ser siempre el DR (Designated Router); y no enruta solo tráfico multicast."
    },
    {
        enunciado: "¿Qué protocolo evita bucles en redes conmutadas con enlaces redundantes?",
        opciones: ["LACP", "STP", "VTP", "HSRP"],
        correcta: 1,
        explicacion: " La correcta es STP porque STP (Spanning Tree Protocol) evita bucles de capa 2 bloqueando enlaces redundantes cuando es necesario. LACP (Link Aggregation Control Protocol) agrega enlaces; VTP (VLAN Trunking Protocol) gestiona información de VLAN; y HSRP (Hot Standby Router Protocol) da redundancia de gateway, no evita bucles de switching."
    },
    {
        enunciado: "El switch que sirve de referencia en STP se llama:",
        opciones: ["Designated Switch", "Backup Bridge", "Root Bridge", "Master Switch"],
        correcta: 2,
        explicacion: " La correcta es Root Bridge porque en STP (Spanning Tree Protocol) ese es el switch de referencia a partir del cual se calcula la topología sin bucles. Designated Port y otros términos existen, pero Designated Switch y Master Switch no son el nombre estándar; y Backup Bridge no es el término principal usado en STP clásico."
    },
    {
        enunciado: "En STP, ¿qué puerto reenvía tráfico hacia/desde un segmento?",
        opciones: ["Root Port", "Designated Port", "Blocked Port", "Alternate Port"],
        correcta: 1,
        explicacion: " La correcta es Designated Port porque es el puerto elegido para reenviar tráfico hacia y desde un segmento de red concreto. Root Port es el mejor camino hacia el Root Bridge; Blocked Port no reenvía tráfico normal; y Alternate Port es una ruta de respaldo en variantes como RSTP (Rapid Spanning Tree Protocol)."
    },
    ,
    {
        enunciado: "¿Para qué sirve VTP?",
        opciones: ["Propagar rutas entre switches", "Centralizar gestión de VLANs entre switches Cisco", "Balancear carga por enlaces", "Evitar bucles de capa 2"],
        correcta: 1,
        explicacion: " La correcta es Centralizar gestión de VLANs entre switches Cisco porque VTP (VLAN Trunking Protocol) distribuye información de VLAN dentro de un dominio VTP. No propaga rutas, porque eso lo hacen protocolos de routing; no balancea carga por enlaces; y no evita bucles, ya que esa función es de STP."
    },
    {
        enunciado: "En VTP, ¿qué modo permite crear y borrar VLANs que se propagan?",
        opciones: ["Client", "Transparent", "Server", "Off"],
        correcta: 2,
        explicacion: " La correcta es Server porque en modo VTP Server se pueden crear, modificar y borrar VLANs, y esos cambios se propagan al dominio VTP. Client recibe información pero no crea VLANs; Transparent no participa igual en la base de datos de VLANs del dominio; y Off desactiva VTP."
    },
    {
        enunciado: "¿Qué opción de VTP reduce la difusión de broadcast a VLAN presentes en los enlaces?",
        opciones: ["VTP hashing", "VTP pruning", "VTP relay", "VTP mirror"],
        correcta: 1,
        explicacion: " La correcta es VTP pruning porque evita enviar tráfico de VLANs por enlaces trunk donde esas VLAN no son necesarias. VTP hashing, relay y mirror no son la función estándar usada para ese objetivo en VTP (VLAN Trunking Protocol)."
    },
    {
        enunciado: "El proceso DHCP se recuerda por ‘DORA’. ¿Qué significa la ‘O’?",
        opciones: ["Offer", "Open", "Operate", "Override"],
        correcta: 0,
        explicacion: " La correcta es Offer porque DORA en DHCP (Dynamic Host Configuration Protocol) significa Discover, Offer, Request y Acknowledge. Open, Operate y Override no forman parte de la secuencia estándar de intercambio entre cliente y servidor DHCP."
    },
    {
        enunciado: "DHCP opera, a nivel de transporte, sobre:",
        opciones: ["TCP", "UDP", "SCTP", "ICMP"],
        correcta: 1,
        explicacion: " La correcta es UDP porque DHCP (Dynamic Host Configuration Protocol) usa UDP para intercambiar mensajes entre cliente y servidor, normalmente en los puertos 67 y 68. No usa TCP ni SCTP como transporte; e ICMP (Internet Control Message Protocol) tiene otra función, relacionada con control y diagnóstico."
    },
    {
        enunciado: "ICMP se utiliza para:",
        opciones: ["Transferir archivos", "Diagnóstico y mensajes de error", "Autenticación de usuarios", "Cifrado de datos"],
        correcta: 1,
        explicacion: " La correcta es Diagnóstico y mensajes de error porque ICMP (Internet Control Message Protocol) se usa para informar de problemas de red y para herramientas como ping o traceroute. No sirve para transferir archivos, no autentica usuarios y no cifra datos."
    },
    {
        enunciado: "El ataque que falsifica respuestas ARP para realizar MITM se denomina:",
        opciones: ["ARP Split", "ARP Snooping", "ARP Spoofing/Poisoning", "ARP Tunneling"],
        correcta: 2,
        explicacion: " La correcta es ARP Spoofing/Poisoning porque ese ataque consiste en enviar respuestas ARP (Address Resolution Protocol) falsas para asociar direcciones IP con MAC incorrectas y colocarse en medio de la comunicación; MITM significa Man In The Middle. Las otras opciones no son el nombre habitual y correcto de ese ataque."
    },
    {
        enunciado: "¿Cuál NO es una medida contra ARP Spoofing?",
        opciones: ["Dynamic ARP Inspection", "DHCP Snooping", "ARP estático", "Usar Telnet en lugar de SSH"],
        correcta: 3,
        explicacion: " La correcta es Usar Telnet en lugar de SSH porque eso no protege frente a ARP spoofing y además empeora la seguridad, ya que Telnet no cifra la comunicación. Dynamic ARP Inspection sí ayuda a validar ARP; DHCP Snooping apoya esa protección; y usar entradas ARP estáticas también puede servir en ciertos casos."
    },
    {
        enunciado: "NAT/PAT permite:",
        opciones: ["Asignar una IP pública única a múltiples hosts internos mediante puertos", "Evitar el uso de ACLs", "Sustituir el routing dinámico", "Cifrado extremo a extremo"],
        correcta: 0,
        explicacion: " La correcta es Asignar una IP pública única a múltiples hosts internos mediante puertos porque PAT (Port Address Translation) diferencia las conexiones usando números de puerto sobre una misma IP pública. No evita el uso de ACLs (Access Control Lists), no sustituye al routing dinámico y no proporciona cifrado."
    },
    {
        enunciado: "¿Qué tipo de NAT cambia la dirección de destino (primer paquete)?",
        opciones: ["SNAT", "DNAT", "PAT", "NAT64"],
        correcta: 1,
        explicacion: " La correcta es DNAT porque DNAT (Destination Network Address Translation) modifica la dirección de destino del tráfico. SNAT (Source Network Address Translation) cambia la dirección de origen; PAT añade traducción por puertos; y NAT64 se usa para comunicación entre IPv6 e IPv4."
    },
    {
        enunciado: "En Cisco IOS, el término overload en NAT se refiere a:",
        opciones: ["NAT estático", "NAT dinámico sin puertos", "PAT (traducción por puertos)", "Deshabilitar NAT"],
        correcta: 2,
        explicacion: " La correcta es PAT (traducción por puertos) porque en Cisco el término overload indica que varios equipos internos comparten una misma IP pública usando distintos puertos. No es NAT estático, porque no es una relación 1:1; no es NAT dinámico sin puertos; y tampoco significa desactivar NAT."
    },
    {
        enunciado: "Los puertos bien conocidos (well-known) abarcan el rango:",
        opciones: ["0–1023", "1024–49151", "49152–65535", "10000–20000"],
        correcta: 0,
        explicacion: " La correcta es 0–1023 porque ese es el rango de puertos bien conocidos, reservado para servicios estándar. 1024–49151 corresponde a puertos registrados; 49152–65535 a puertos dinámicos o efímeros; y 10000–20000 no es un rango oficial especial de esa clasificación."
    },
    {
        enunciado: "El puerto TCP estándar para HTTPS es:",
        opciones: ["80", "21", "22", "443"],
        correcta: 3,
        explicacion: " La correcta es 443 porque HTTPS (Hypertext Transfer Protocol Secure) usa ese puerto TCP por defecto. El puerto 80 es HTTP sin cifrar; el 21 corresponde a FTP (File Transfer Protocol); y el 22 a SSH (Secure Shell)."
    },
    {
        enunciado: "¿Qué comando en Windows muestra conexiones y puertos abiertos?",
        opciones: ["route print", "ipconfig /all", "netstat -na", "arp -a"],
        correcta: 2,
        explicacion: " La correcta es netstat -na porque ese comando muestra conexiones activas y puertos abiertos o en escucha. route print enseña la tabla de rutas; ipconfig /all muestra la configuración IP; y arp -a enseña la caché ARP (Address Resolution Protocol)."
    },
    {
        enunciado: "SSH frente a Telnet:",
        opciones: ["Ambos cifran igual", "SSH cifra, Telnet no", "Telnet cifra, SSH no", "Ninguno cifra"],
        correcta: 1,
        explicacion: " La correcta es SSH cifra, Telnet no porque SSH (Secure Shell) protege la comunicación mediante cifrado, mientras que Telnet envía la información en texto claro. Por eso no cifran igual, Telnet no es la opción segura y la respuesta de que ninguno cifra también es falsa."
    },
    {
        enunciado: "Para habilitar SSH en equipos Cisco es necesario, entre otros pasos:",
        opciones: ["Configurar hostname y dominio, y generar claves RSA", "Activar Telnet en VTY", "Desactivar AAA", "Usar puerto 23 obligado"],
        correcta: 0,
        explicacion: " La correcta es Configurar hostname y dominio, y generar claves RSA porque esos pasos son necesarios para habilitar SSH en muchos equipos Cisco. Activar Telnet en VTY no habilita SSH; desactivar AAA (Authentication, Authorization and Accounting) no es un requisito; y el puerto 23 corresponde a Telnet, no a SSH."
    },
    {
        enunciado: "¿Cuál NO es un archivo típico en Cisco IOS?",
        opciones: ["running-config", "startup-config", "IOS image", "boot.ini"],
        correcta: 3,
        explicacion: " La correcta es boot.ini porque ese archivo es típico de sistemas Windows antiguos y no de Cisco IOS. running-config sí es la configuración activa en memoria; startup-config es la que se guarda para el arranque; e IOS image es la imagen del sistema operativo del equipo. Por eso boot.ini es la opción que no encaja con el entorno Cisco."
    },
    {
        enunciado: "¿Cuál es el orden típico de arranque en un router Cisco?",
        opciones: ["IOS → POST → Bootstrap → Config", "POST → Bootstrap → IOS → Config", "Bootstrap → POST → IOS → Config", "POST → IOS → Bootstrap → Config"],
        correcta: 1,
        explicacion: " La correcta es POST → Bootstrap → IOS → Config porque primero se realiza el POST (Power-On Self Test) para comprobar el hardware, después actúa el bootstrap, luego se carga IOS (Internetwork Operating System) y finalmente la configuración guardada. Las demás opciones colocan esos pasos en un orden incorrecto, así que no reflejan el arranque real del router."
    },
    {
        enunciado: "Una ruta estática por defecto en Cisco se configura con:",
        opciones: ["ip route 0.0.0.0 0.0.0.0 <next-hop>", "default-route enable", "ip default-network <red>", "route add 0.0.0.0/0 gw <ip>"],
        correcta: 0,
        explicacion: " La correcta es ip route 0.0.0.0 0.0.0.0 <next-hop> porque esa es la sintaxis estándar en Cisco IOS para crear una ruta por defecto estática. default-route enable no es el comando normal para este caso; ip default-network tiene otro uso más antiguo y distinto; y route add 0.0.0.0/0 gw <ip> es una sintaxis más propia de otros sistemas, no de Cisco IOS."
    },
    {
        enunciado: "RIP utiliza como métrica:",
        opciones: ["Ancho de banda", "Retardo", "Saltos (hops)", "Costo acumulado SPF"],
        correcta: 2,
        explicacion: " La correcta es Saltos (hops) porque RIP (Routing Information Protocol) mide la distancia contando cuántos routers hay hasta el destino. No usa ancho de banda ni retardo como métrica principal; y el costo acumulado SPF (Shortest Path First) es propio de OSPF (Open Shortest Path First), no de RIP."
    },
    {
        enunciado: "OSPF es un protocolo de:",
        opciones: ["Vector distancia", "Estado de enlace (link-state)", "Path-vector", "Inundación pura"],
        correcta: 1,
        explicacion: " La correcta es Estado de enlace (link-state) porque OSPF (Open Shortest Path First) construye una visión de la topología y calcula la mejor ruta con SPF (Shortest Path First). No es vector distancia como RIP; no es path-vector como BGP (Border Gateway Protocol); y aunque usa inundación de información, esa no es su clasificación principal."
    },
    {
        enunciado: "EIGRP es:",
        opciones: ["Un IGP abierto de estado de enlace", "Propietario de Cisco, híbrido con DUAL", "Un EGP de backbone", "Equivalente a BGP"],
        correcta: 1,
        explicacion: " La correcta es Propietario de Cisco, híbrido con DUAL porque EIGRP (Enhanced Interior Gateway Routing Protocol) se asocia tradicionalmente a Cisco y usa el algoritmo DUAL (Diffusing Update Algorithm). No se clasifica como un protocolo abierto de estado de enlace; no es un EGP (Exterior Gateway Protocol) como BGP; y tampoco es equivalente a BGP."
    },
    {
        enunciado: "BGP intercambia rutas sobre:",
        opciones: ["UDP 520", "TCP 179", "TCP 22", "UDP 67/68"],
        correcta: 1,
        explicacion: " La correcta es TCP 179 porque BGP (Border Gateway Protocol) establece sus sesiones mediante ese puerto TCP. UDP 520 corresponde a RIP; TCP 22 se usa para SSH (Secure Shell); y UDP 67/68 pertenece a DHCP (Dynamic Host Configuration Protocol)."
    },
    {
        enunciado: "¿Cuál NO es un atributo típico de BGP?",
        opciones: ["AS-PATH", "LOCAL_PREF", "MED", "Hop Count"],
        correcta: 3,
        explicacion: " La correcta es Hop Count porque ese no es un atributo típico de BGP (Border Gateway Protocol). AS-PATH sí se usa para ver por qué sistemas autónomos pasa una ruta; LOCAL_PREF sirve para preferencia interna; y MED (Multi-Exit Discriminator) influye en la elección entre varios puntos de entrada. Hop Count es más propio de protocolos como RIP."
    },
    {
        enunciado: "¿Qué comando muestra la tabla de rutas en un router Cisco?",
        opciones: ["show interfaces", "show ip route", "show ip protocols", "show arp"],
        correcta: 1,
        explicacion: " La correcta es show ip route porque ese comando muestra la tabla de enrutamiento del router. show interfaces enseña el estado detallado de las interfaces; show ip protocols muestra información sobre los protocolos de routing activos; y show arp enseña la tabla ARP (Address Resolution Protocol), no las rutas."
    },
    {
        enunciado: "En OSPF, el área backbone es:",
        opciones: ["Área 1", "Área 10", "Área 0", "Cualquier área con DR/BDR"],
        correcta: 2,
        explicacion: " La correcta es Área 0 porque en OSPF (Open Shortest Path First) el backbone se identifica como área 0 y conecta el resto de áreas. Área 1 o Área 10 pueden existir, pero no son el backbone por definición; y tener DR/BDR (Designated Router / Backup Designated Router) no convierte un área en backbone."
    },
    {
        enunciado: "En OSPF, ¿quién mantiene una base de datos de estado de enlace (LSDB)?",
        opciones: ["Solo el DR", "Cada router dentro del área", "Solo ABR", "Solo ASBR"],
        correcta: 1,
        explicacion: " La correcta es Cada router dentro del área porque todos los routers OSPF (Open Shortest Path First) de una misma área mantienen una LSDB (Link-State Database) coherente. No la guarda solo el DR, ni solo el ABR (Area Border Router), ni solo el ASBR (Autonomous System Boundary Router)."
    },
    {
        enunciado: "En EIGRP, ¿qué algoritmo elige rutas libres de bucles y rápidas en converger?",
        opciones: ["SPF (Dijkstra)", "Bellman-Ford", "DUAL", "Floyd–Warshall"],
        correcta: 2,
        explicacion: " La correcta es DUAL porque EIGRP (Enhanced Interior Gateway Routing Protocol) usa Diffusing Update Algorithm para calcular rutas sin bucles y converger rápido. SPF (Shortest Path First) es propio de OSPF; Bellman-Ford se asocia más a protocolos de vector distancia como RIP; y Floyd–Warshall no es el algoritmo usado en EIGRP."
    },
    {
        enunciado: "Una ACL estándar en Cisco filtra basándose en:",
        opciones: ["IP origen únicamente", "IP origen y destino", "Protocolo y puertos", "Dirección MAC"],
        correcta: 0,
        explicacion: " La correcta es IP origen únicamente porque una ACL (Access Control List) estándar en Cisco solo tiene en cuenta la dirección IP de origen. IP origen y destino, protocolo y puertos son criterios propios de ACL extendidas; y la dirección MAC no es el criterio normal de una ACL IP estándar."
    },
    {
        enunciado: "Una ACL extendida puede filtrar por:",
        opciones: ["Solo IP origen", "IP origen/destino, protocolo y puerto", "Solo MAC destino", "Solo ICMP"],
        correcta: 1,
        explicacion: " La correcta es IP origen/destino, protocolo y puerto porque una ACL (Access Control List) extendida permite un filtrado mucho más detallado. No se limita solo a IP origen, como la estándar; no trabaja solo con MAC destino en este contexto; y tampoco se limita solo a ICMP (Internet Control Message Protocol)."
    },
    {
        enunciado: "¿Dónde se aplican las ACL en Cisco?",
        opciones: ["En interfaces, dirección in/out", "Solo en VTY", "Solo en consola", "En el plano de control exclusivamente"],
        correcta: 0,
        explicacion: " La correcta es En interfaces, dirección in/out porque las ACL (Access Control List) suelen asociarse a interfaces en entrada o salida para filtrar tráfico. No están limitadas solo a líneas VTY (Virtual Teletype), ni solo a consola; y tampoco se aplican exclusivamente al plano de control."
    },
    {
        enunciado: "La política implícita al final de una ACL es:",
        opciones: ["permit ip any any", "deny ip any any", "permit tcp any any", "deny icmp any any"],
        correcta: 1,
        explicacion: " La correcta es deny ip any any porque al final de una ACL (Access Control List) existe una denegación implícita para todo lo que no haya sido permitido antes. permit ip any any haría lo contrario; permit tcp any any solo afectaría a TCP; y deny icmp any any sería demasiado específico, no una regla implícita general."
    },
    {
        enunciado: "El registro DNS que asocia un nombre a IPv4 es:",
        opciones: ["AAAA", "MX", "A", "CNAME"],
        correcta: 2,
        explicacion: " La correcta es A porque el registro A de DNS (Domain Name System) asocia un nombre de dominio a una dirección IPv4. AAAA se usa para IPv6; MX para servidores de correo; y CNAME para alias de un nombre hacia otro nombre."
    },
    {
        enunciado: "¿Qué registro DNS define el servidor autoritativo de una zona?",
        opciones: ["SOA y NS", "TXT", "PTR", "SRV"],
        correcta: 0,
        explicacion: " La correcta es SOA y NS porque SOA (Start of Authority) define la autoridad inicial y parámetros de la zona, y NS (Name Server) indica los servidores autoritativos. TXT guarda texto informativo; PTR se usa en resolución inversa; y SRV anuncia servicios, no la autoridad de la zona."
    },
    {
        enunciado: "El dominio inverso para IPv4 se gestiona bajo:", /*rebuscado*/
        opciones: ["in-addr.arpa", "ip6.arpa", "arpa.in-addr", "reverse.dns"],
        correcta: 0,
        explicacion: " La correcta es in-addr.arpa porque ese dominio se usa para la resolución inversa de direcciones IPv4 en DNS (Domain Name System). ip6.arpa es para IPv6; arpa.in-addr no es la forma correcta; y reverse.dns no es el dominio estándar usado para este fin."
    },
    {
        enunciado: "¿Cuál es el orden jerárquico de DNS?",
        opciones: ["Zona → Dominio raíz → TLD", "Dominio raíz → TLD → dominios de segundo nivel", "TLD → Dominio raíz → Subdominio", "Autoritativo → Recursivo → Cliente"],
        correcta: 1,
        explicacion: " La correcta es Dominio raíz → TLD → dominios de segundo nivel porque esa es la jerarquía básica de DNS (Domain Name System). Primero está la raíz, luego los TLD (Top Level Domains) como .com o .es, y después los dominios de segundo nivel. Las otras opciones alteran ese orden o mezclan tipos de servidores con niveles jerárquicos."
    },
    {
        enunciado: "En cableado estructurado, ¿cuál NO es un subsistema ISO/IEC 11801?",
        opciones: ["Entrada de edificio", "Backbone vertical", "Área de trabajo", "Capa de aplicación"],
        correcta: 3,
        explicacion: " La correcta es Capa de aplicación porque eso pertenece al modelo OSI o al software, no a los subsistemas del cableado estructurado según ISO/IEC 11801. Entrada de edificio, backbone vertical y área de trabajo sí forman parte del entorno físico de cableado."
    },
    {
        enunciado: "¿Qué elemento concentra pares a rosetas y se ubica en el rack?",
        opciones: ["Patch panel", "PDU", "SAI/UPS", "ONT"],
        correcta: 0,
        explicacion: " La correcta es Patch panel porque es el elemento donde terminan y se organizan los cables del cableado estructurado en el rack. PDU (Power Distribution Unit) reparte energía; SAI/UPS (Sistema de Alimentación Ininterrumpida / Uninterruptible Power Supply) da respaldo eléctrico; y ONT (Optical Network Terminal) pertenece al acceso de fibra del operador."
    },
    {
        enunciado: "¿Qué altura de rack es típica en CPDs de planta?",
        opciones: ["6U", "12U", "24U", "42U"],
        correcta: 3,
        explicacion: " La correcta es 42U porque es una altura muy común en racks de CPD (Centro de Proceso de Datos). 6U, 12U y 24U existen, pero se usan más en armarios o instalaciones de menor tamaño, no como referencia típica de rack completo de CPD."
    },
    {
        enunciado: "¿Qué medio se recomienda como backbone entre plantas si hay más de 100 m?",
        opciones: ["UTP Cat 5e", "UTP Cat 6", "Fibra óptica", "Coaxial fino"],
        correcta: 2,
        explicacion: " La correcta es Fibra óptica porque para backbone entre plantas y distancias superiores a 100 m es la opción más adecuada por alcance e inmunidad a interferencias. UTP Cat 5e y Cat 6 tienen más limitaciones de distancia; y el coaxial fino no es el medio habitual en cableado estructurado moderno."
    },
    {
        enunciado: "¿Qué comando en un switch Cisco muestra un resumen de VLANs y puertos?",
        opciones: ["show vlan brief", "show interfaces status", "show vtp status", "show spanning-tree"],
        correcta: 0,
        explicacion: " La correcta es show vlan brief porque ese comando muestra un resumen de las VLANs y de los puertos asociados a cada una. show interfaces status enseña el estado de interfaces; show vtp status muestra información de VTP (VLAN Trunking Protocol); y show spanning-tree sirve para STP (Spanning Tree Protocol)."
    },
    {
        enunciado: "¿Qué comando verifica puertos en modo trunk y VLANs permitidas?",
        opciones: ["show ip interface brief", "show interfaces trunk", "show cdp neighbors", "show etherchannel summary"],
        correcta: 1,
        explicacion: " La correcta es show interfaces trunk porque permite ver qué puertos están funcionando como trunk y qué VLANs tienen permitidas. show ip interface brief resume interfaces IP; show cdp neighbors muestra vecinos CDP (Cisco Discovery Protocol); y show etherchannel summary se centra en agregación de enlaces."
    },
    {
        enunciado: "¿Qué comando permite ver el estado de STP y el root bridge actual?",
        opciones: ["show vtp status", "show spanning-tree", "show mac address-table", "show lldp neighbors"],
        correcta: 1,
        explicacion: " La correcta es show spanning-tree porque muestra el estado de STP (Spanning Tree Protocol), el root bridge y el papel de los puertos. show vtp status es para VTP; show mac address-table enseña la tabla MAC; y show lldp neighbors muestra vecinos LLDP (Link Layer Discovery Protocol)."
    },
    {
        enunciado: "En VTP, ¿qué se requiere para sincronizar switches en un dominio?",
        opciones: ["Mismo dominio, contraseña MD5 y revisión coherente", "Mismo hostname", "Mismo número de VLANs locales", "Mismo direccionamiento IP"],
        correcta: 0,
        explicacion: " La correcta es Mismo dominio, contraseña MD5 y revisión coherente porque esos son parámetros clave para que los switches compartan información VTP (VLAN Trunking Protocol). Tener el mismo hostname no es necesario; tampoco el mismo número de VLANs locales como condición previa; y el direccionamiento IP no es lo que determina la sincronización VTP."
    },
    {
        enunciado: "¿Cuál de estos estándares corresponde a Wi-Fi 7?",
        opciones: ["802.11ac", "802.11ax", "802.11be", "802.11g"],
        correcta: 2,
        explicacion: " La correcta es 802.11be porque ese estándar se asocia comercialmente a Wi-Fi 7. 802.11ax corresponde a Wi-Fi 6; 802.11ac a Wi-Fi 5; y 802.11g es mucho más antiguo."
    },
    {
        enunciado: "¿Qué mejoras clave introduce Wi-Fi 6/6E respecto a 5?",
        opciones: ["DSSS y FHSS", "OFDMA y MU-MIMO mejorado", "Solo más potencia de transmisión", "Cambio a 60 GHz"],
        correcta: 1,
        explicacion: " La correcta es OFDMA y MU-MIMO mejorado porque son dos mejoras importantes de Wi-Fi 6/6E para aprovechar mejor el canal y atender varios dispositivos. DSSS y FHSS son técnicas antiguas; no se trata solo de subir potencia; y 60 GHz se asocia a otras tecnologías, no a la mejora principal de Wi-Fi 6/6E."
    },
    {
        enunciado: "¿Qué afirmación sobre hubs es correcta?",
        opciones: ["Separan dominios de broadcast", "Crean un dominio de colisión por puerto", "Operan en capa 1 y repiten señales", "Aprenden direcciones MAC"],
        correcta: 2,
        explicacion: " La correcta es Operan en capa 1 y repiten señales porque un hub trabaja en la capa física del modelo OSI y simplemente copia la señal a todos sus puertos. No separa dominios de broadcast; tampoco crea un dominio de colisión por puerto, porque todos comparten el mismo medio; y no aprende direcciones MAC, algo propio de un switch."
    },
    {
        enunciado: "La dirección 255.255.255.255 es:",
        opciones: ["Broadcast dirigido", "Broadcast limitado", "Loopback", "Multicast"],
        correcta: 1,
        explicacion: " La correcta es Broadcast limitado porque 255.255.255.255 se usa para enviar un mensaje a todos los hosts de la red local sin que salga por el router. Broadcast dirigido sería el broadcast específico de una subred concreta; loopback identifica al propio equipo; y multicast es envío a un grupo, no a todos los equipos del segmento."
    },
    {
        enunciado: "En IPv6, ¿cuál es correcta sobre la compresión ‘::’?",
        opciones: ["Se puede usar múltiples veces en una misma dirección", "Solo puede usarse una vez por dirección", "Solo en direcciones multicast", "Sustituye cualquier hexadecimal no cero"],
        correcta: 1,
        explicacion: " La correcta es Solo puede usarse una vez por dirección porque :: sustituye una secuencia de grupos 0000 y, si apareciera varias veces, no se podría reconstruir la dirección completa sin ambigüedad. No está limitada a direcciones multicast; y tampoco puede sustituir valores hexadecimales distintos de cero."
    },
    {
        enunciado: "Las direcciones IPv4 de clase D se reservan para:",
        opciones: ["Multicast", "Anycast", "Loopback", "Privadas"],
        correcta: 0,
        explicacion: " La correcta es Multicast porque las direcciones de clase D en IPv4 están reservadas para el envío a grupos de receptores. Anycast no es la clasificación clásica de esa clase; loopback pertenece al bloque 127.0.0.0/8; y las direcciones privadas están en los rangos 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16."
    },
    {
        enunciado: "¿Qué comando en Cisco crea una SVI para la VLAN 10?",
        opciones: ["interface vlan 10", "vlan interface 10", "int svi 10", "switchport vlan 10"],
        correcta: 0,
        explicacion: " La correcta es interface vlan 10 porque esa es la sintaxis de Cisco IOS para entrar en la SVI (Switched Virtual Interface) de la VLAN 10. vlan interface 10 e int svi 10 no son comandos estándar válidos; y switchport vlan 10 se usa en puertos físicos para asignarlos a una VLAN, no para crear una interfaz virtual."
    },
    {
        enunciado: "Para habilitar enrutamiento inter-VLAN en un switch L3 se requiere:",
        opciones: ["ip routing", "ip route 0.0.0.0 0.0.0.0", "router ospf 1", "vlan database"],
        correcta: 0,
        explicacion: " La correcta es ip routing porque ese comando activa la capacidad de enrutamiento en un switch de capa 3 y permite comunicar VLAN distintas. ip route 0.0.0.0 0.0.0.0 crea una ruta por defecto, pero no habilita el routing por sí solo; router ospf 1 inicia OSPF, no el enrutamiento general; y vlan database se relaciona con gestión de VLAN, no con inter-VLAN routing."
    },
    {
        enunciado: "¿Qué comando de Cisco muestra el estado de las subinterfaces en un router?",
        opciones: ["show ip interface brief", "show ip protocols", "show controllers", "show arp"],
        correcta: 0,
        explicacion: " La correcta es show ip interface brief porque resume de forma rápida las interfaces y subinterfaces con su dirección IP y su estado up/down. show ip protocols enseña información de protocolos de routing; show controllers muestra detalles de hardware; y show arp enseña la tabla ARP (Address Resolution Protocol), no el estado de las subinterfaces."
    },
    {
        enunciado: "En RIP v2, para desactivar el resumen automático se usa:",
        opciones: ["no autosummary", "no auto-summary", "ip classless", "no summary route"],
        correcta: 1,
        explicacion: " La correcta es no auto-summary porque esa es la sintaxis exacta en Cisco IOS para desactivar el resumen automático en RIP v2. no autosummary está mal escrito; ip classless tiene otra función; y no summary route no es el comando estándar para este ajuste en RIP."
    },
    {
        enunciado: "En redes inalámbricas, el modo Ad-hoc significa:",
        opciones: ["Clientes conectados a un AP", "Dispositivos se conectan directamente entre sí", "Backhaul punto-multipunto", "Uso exclusivo de 6 GHz"],
        correcta: 1,
        explicacion: " La correcta es Dispositivos se conectan directamente entre sí porque en modo Ad-hoc no existe un AP (Access Point) central y los equipos se comunican de forma directa. La opción de clientes conectados a un AP describe el modo infraestructura; backhaul punto-multipunto es otra arquitectura; y no depende de usar solo la banda de 6 GHz."
    },
    {
        enunciado: "¿Qué protocolo anuncia ‘Hello’ periódicos para descubrir vecinos en OSPF?",
        opciones: ["RIP", "EIGRP", "BGP", "OSPF"],
        correcta: 3,
        explicacion: " La correcta es OSPF porque OSPF (Open Shortest Path First) usa mensajes Hello para descubrir y mantener vecinos, además de comprobar que siguen activos. RIP intercambia actualizaciones de rutas; EIGRP también usa hellos, pero la pregunta lo sitúa específicamente en OSPF; y BGP establece sesiones TCP, no se identifica por este mecanismo en este contexto."
    },
    {
        enunciado: "En EIGRP, la dirección multicast utilizada es:",
        opciones: ["224.0.0.5", "224.0.0.10", "224.0.0.9", "239.255.255.250"],
        correcta: 1,
        explicacion: " La correcta es 224.0.0.10 porque esa es la dirección multicast usada por EIGRP (Enhanced Interior Gateway Routing Protocol). 224.0.0.5 y 224.0.0.6 se asocian a OSPF; 224.0.0.9 se usa en RIPv2; y 239.255.255.250 es conocida por SSDP, no por EIGRP."
    },
    {
        enunciado: "¿Qué comando verifica el estado de VTP en un switch Cisco?",
        opciones: ["show vtp status", "show vlan brief", "show interfaces status", "show etherchannel summary"],
        correcta: 0,
        explicacion: " La correcta es show vtp status porque ese comando muestra el estado, modo, dominio y revisión de VTP (VLAN Trunking Protocol). show vlan brief resume VLAN y puertos; show interfaces status enseña estado de interfaces; y show etherchannel summary se usa para agregación de enlaces, no para VTP."
    },
    {
        enunciado: "¿Cuál es el propósito de ‘passive-interface’ en protocolos de routing?",
        opciones: ["Bloquear tráfico de datos", "No enviar actualizaciones por esa interfaz", "Apagar la interfaz", "Eliminar rutas redistribuidas"],
        correcta: 1,
        explicacion: " La correcta es No enviar actualizaciones por esa interfaz porque passive-interface impide que por ese enlace se formen vecinos o se envíen mensajes del protocolo de routing. No bloquea el tráfico normal de datos; no apaga físicamente la interfaz; y tampoco elimina rutas redistribuidas."
    },
    {
        enunciado: "¿Qué solución inter-VLAN usa subinterfaces en el router?",
        opciones: ["SVI", "Router-on-a-stick", "MPLS", "HSRP"],
        correcta: 1,
        explicacion: " La correcta es Router-on-a-stick porque esa técnica usa un único enlace trunk hacia el router y varias subinterfaces, una por VLAN. SVI (Switched Virtual Interface) es la alternativa típica en un switch de capa 3; MPLS es otra tecnología de red; y HSRP (Hot Standby Router Protocol) da redundancia de gateway, no inter-VLAN routing."
    },
    {
        enunciado: "¿Qué registro DNS se usa para alias de un nombre a otro?",
        opciones: ["A", "PTR", "CNAME", "NS"],
        correcta: 2,
        explicacion: " La correcta es CNAME porque ese registro crea un alias de un nombre hacia otro nombre canónico en DNS (Domain Name System). A asocia un nombre a una dirección IPv4; PTR se usa en resolución inversa; y NS indica servidores autoritativos de una zona."
    },
    {
        enunciado: "¿Qué protocolo traduce nombres a IP y es esencial para Internet?",
        opciones: ["NTP", "DNS", "DHCP", "LDAP"],
        correcta: 1,
        explicacion: " La correcta es DNS porque DNS (Domain Name System) resuelve nombres de dominio en direcciones IP. NTP (Network Time Protocol) sincroniza la hora; DHCP (Dynamic Host Configuration Protocol) asigna configuración IP; y LDAP (Lightweight Directory Access Protocol) se usa para servicios de directorio."
    },
    {
        enunciado: "¿Cuál de los siguientes no es un estado de puerto en STP clásico?",
        opciones: ["Blocking", "Listening", "Learning", "Transmitting"],
        correcta: 3,
        explicacion: " La correcta es Transmitting porque no es uno de los estados clásicos de STP (Spanning Tree Protocol). En STP clásico los estados típicos son Blocking, Listening, Learning, Forwarding y Disabled. Por eso las otras tres opciones sí pertenecen a esa lista."
    },
    {
        enunciado: "¿Qué protocolo de seguridad de red perimetral traduce múltiples IP privadas a una sola pública por puertos?",
        opciones: ["NAT estático", "PAT (NAT Overload)", "NAT dinámico 1:1", "NAT64"],
        correcta: 1,
        explicacion: " La correcta es PAT (NAT Overload) porque permite que varios hosts internos compartan una única IP pública diferenciando las conexiones por número de puerto. NAT estático y NAT dinámico 1:1 no hacen esa multiplexación por puertos; y NAT64 se usa para comunicación entre IPv6 e IPv4."
    },
    {
        enunciado: "En una ACL extendida para bloquear HTTP hacia 10.10.10.5, ¿qué puerto se debe denegar?",
        opciones: ["21", "23", "80", "443"],
        correcta: 2,
        explicacion: " La correcta es 80 porque HTTP usa ese puerto TCP por defecto. 21 corresponde a FTP (File Transfer Protocol); 23 a Telnet; y 443 a HTTPS (Hypertext Transfer Protocol Secure), que no es HTTP sin cifrar."
    },
    {
        enunciado: "En Cisco, las ACL estándar suelen numerarse en el rango:",
        opciones: ["1–99 y 1300–1999", "100–199", "2000–2699", "300–399"],
        correcta: 0,
        explicacion: " La correcta es 1–99 y 1300–1999 porque esos son los rangos tradicionales de numeración para ACL estándar en Cisco. 100–199 y 2000–2699 se asocian a ACL extendidas; y 300–399 no es el rango clásico correcto para ACL IP estándar."
    },
    {
        enunciado: "¿Qué comando guarda la configuración en la NVRAM?",
        opciones: ["copy running-config startup-config", "write erase", "reload", "copy startup-config running-config"],
        correcta: 0,
        explicacion: " La correcta es copy running-config startup-config porque copia la configuración activa a la NVRAM (Non-Volatile Random Access Memory) para que se conserve tras reiniciar. write erase borra la configuración guardada; reload reinicia el equipo; y copy startup-config running-config carga la guardada en memoria, no la guarda."
    },
    {
        enunciado: "¿Cuál es una recomendación al elegir contraseñas de administración en IOS?",
        opciones: ["Usar menos de 8 caracteres", "Reutilizar la misma en todos los equipos", "enable secret y mezcla de tipos de caracteres", "Solo números"],
        correcta: 2,
        explicacion: " La correcta es enable secret y mezcla de tipos de caracteres porque mejora la seguridad del acceso administrativo en Cisco IOS. Usar menos de 8 caracteres debilita la contraseña; reutilizar la misma en todos los equipos aumenta el riesgo; y usar solo números la hace mucho más predecible."
    },
    {
        enunciado: "En Packet Tracer, el cable ‘Console’ conecta:",
        opciones: ["PC a interfaz de consola del equipo", "Switch a switch", "Router a AP", "PC a puerto WAN del router"],
        correcta: 0,
        explicacion: " La correcta es PC a interfaz de consola del equipo porque el cable Console se usa para administrar el dispositivo localmente desde un ordenador. No se emplea como enlace normal entre switches; tampoco entre router y AP; y no se conecta al puerto WAN para dar conectividad de red."
    },
    {
        enunciado: "¿Qué cable se usaba clásicamente para conectar router-router sin switches modernos?",
        opciones: ["UTP directo", "UTP cruzado", "Coaxial", "USB-C"],
        correcta: 1,
        explicacion: " La correcta es UTP cruzado porque tradicionalmente se utilizaba para conectar dispositivos del mismo tipo, como router a router o switch a switch. UTP directo se asociaba a dispositivos distintos; coaxial pertenece a otras tecnologías; y USB-C no es el cable clásico Ethernet de ese escenario."
    },
    
    {
        enunciado: "¿Qué comando muestra direcciones IP y estado up/down de interfaces rápidamente?",
        opciones: ["show ip interface brief", "show interfaces", "show cdp neighbors", "show controllers"],
        correcta: 0,
        explicacion: " La correcta es show ip interface brief porque resume de forma rápida las interfaces con su IP y su estado. show interfaces da mucho más detalle y es menos resumido; show cdp neighbors muestra vecinos CDP (Cisco Discovery Protocol); y show controllers se centra en datos de hardware."
    },
    {
        enunciado: "¿Qué indica ‘Gateway of last resort’ en la tabla de rutas?", /*rebuscada*/
        opciones: ["No hay default route", "Existe una ruta por defecto configurada/aprendida", "Se usa solo para estáticas flotantes", "Es una ruta conectada"],
        correcta: 1,
        explicacion: " La correcta es Existe una ruta por defecto configurada/aprendida porque esa frase indica que el router tiene una salida por defecto para destinos desconocidos. No significa que no exista default route; tampoco que sea solo para rutas estáticas flotantes; y no implica que se trate de una red conectada directamente."
    },
    {
        enunciado: "En BGP, la relación ‘peering’ entre AS suele ser:",
        opciones: ["Cliente-proveedor", "No pagada entre pares para intercambio local", "Exclusivamente internacional", "Solo en IXPs globales"],
        correcta: 1,
        explicacion: " La correcta es No pagada entre pares para intercambio local porque el peering entre AS (Autonomous Systems) suele consistir en intercambiar tráfico directamente sin comprar tránsito entre ellos. Cliente-proveedor describe una relación de tránsito; no tiene por qué ser exclusivamente internacional; y tampoco ocurre solo en grandes IXPs globales."
    },
    {
        enunciado: "¿Cuál es un comando útil para ver vecinos y sesiones BGP?",
        opciones: ["show ip bgp neighbors", "show ip protocols", "show ip ospf neighbor", "show ip rip database"],
        correcta: 0,
        explicacion: " La correcta es show ip bgp neighbors porque muestra información detallada de los vecinos y sesiones BGP (Border Gateway Protocol). show ip protocols es más general; show ip ospf neighbor pertenece a OSPF; y show ip rip database pertenece a RIP."
    },
    {
        enunciado: "¿Qué dirección IPv4 identifica ‘broadcast dirigido’ a una subred dada?",
        opciones: ["La de todos 1 en la parte host de esa subred", "255.255.255.255", "0.0.0.0", "127.255.255.255"],
        correcta: 0,
        explicacion: " La correcta es La de todos 1 en la parte host de esa subred porque esa es la definición de broadcast dirigido para una red concreta. 255.255.255.255 es broadcast limitado; 0.0.0.0 representa dirección no especificada o ruta por defecto según contexto; y 127.255.255.255 pertenece al rango de loopback, no al broadcast dirigido general de cualquier subred."
    },
    {
        enunciado: "En IPv6, ¿qué tipo de dirección envía al ‘mejor’ receptor desde el punto de vista topológico?",
        opciones: ["Unicast", "Anycast", "Multicast", "Broadcast"],
        correcta: 1,
        explicacion: " La correcta es Anycast porque una dirección anycast permite que varios dispositivos compartan la misma dirección y que el tráfico llegue al receptor más cercano o más adecuado según la topología de red. Unicast va dirigido a un único destino concreto; Multicast envía a un grupo de receptores; y Broadcast no existe en IPv6, ya que su función se sustituyó principalmente por multicast."
    },
    {
        enunciado: "Para etiquetar correctamente una instalación según ANSI/TIA-606-A debes:",
        opciones: ["Nombrar puertos con colores al azar", "Seguir codificación espacio-panel-puerto (p.ej., 5A-A-01)", "Usar solo números secuenciales sin prefijo", "Evitar etiquetas en vertical"],
        correcta: 1,
        explicacion: " La correcta es Seguir codificación espacio-panel-puerto (p.ej., 5A-A-01) porque la norma ANSI/TIA-606-A busca una identificación clara, ordenada y única de cada elemento de la instalación. Nombrar puertos con colores al azar no da una referencia precisa; usar solo números sin contexto dificulta localizar elementos; y evitar etiquetas en vertical no es la regla principal de identificación de la norma."
    },
    {
        enunciado: "¿Qué comando en Cisco verifica el estado de una interfaz trunk específica?",
        opciones: ["show interfaces trunk", "show vlan id 10", "show vtp counters", "show ip route connected"],
        correcta: 0,
        explicacion: " La correcta es show interfaces trunk porque ese comando permite comprobar qué interfaces están funcionando como trunk y ver información como las VLAN permitidas o activas. show vlan id 10 sirve para consultar una VLAN concreta; show vtp counters muestra contadores de VTP (VLAN Trunking Protocol); y show ip route connected enseña rutas conectadas, no el estado de un enlace trunk."
    },
    {
        enunciado: "¿Qué capa del modelo OSI encapsula y direcciona lógicamente a través de redes?",
        opciones: ["Transporte", "Red", "Enlace", "Física"],
        correcta: 1,
        explicacion: " La correcta es Red porque esa capa se encarga del direccionamiento lógico, como las direcciones IP, y de permitir que los paquetes pasen de una red a otra. Transporte gestiona la comunicación extremo a extremo; Enlace trabaja dentro de la red local con tramas y direcciones MAC; y Física transmite bits por el medio."
    },
    {
        enunciado: "En una red conmutada moderna, las colisiones son raras porque:",
        opciones: ["Siempre hay half-duplex", "Los switches aíslan dominios de colisión y operan full-duplex", "Se usa CSMA/CA", "Se deshabilita el FCS"],
        correcta: 1,
        explicacion: " La correcta es Los switches aíslan dominios de colisión y operan full-duplex porque cada puerto funciona como un dominio de colisión independiente y, además, el full-duplex elimina la necesidad de competir por el medio. Siempre hay half-duplex es falso; CSMA/CA se usa sobre todo en Wi-Fi; y deshabilitar el FCS (Frame Check Sequence) no tiene relación con evitar colisiones."
    },
    {
        enunciado: "¿Qué protocolo de descubrimiento de dispositivos es propietario de Cisco?",
        opciones: ["LLDP", "CDP", "EDP", "STP"],
        correcta: 1,
        explicacion: " La correcta es CDP porque Cisco Discovery Protocol es el protocolo propietario de Cisco para descubrir dispositivos vecinos. LLDP (Link Layer Discovery Protocol) es un estándar abierto; EDP no es la respuesta habitual en este contexto Cisco; y STP (Spanning Tree Protocol) sirve para evitar bucles, no para descubrimiento de vecinos."
    },
    {
        enunciado: "¿Qué comando en Cisco muestra los vecinos detectados por CDP?",
        opciones: ["show cdp neighbors", "show lldp neighbors", "show arp", "show mac address-table"],
        correcta: 0,
        explicacion: " La correcta es show cdp neighbors porque ese comando muestra los dispositivos vecinos detectados mediante CDP (Cisco Discovery Protocol). show lldp neighbors se usa para LLDP; show arp enseña asociaciones IP-MAC; y show mac address-table muestra la tabla MAC del switch, no los vecinos CDP."
    },
    {
        enunciado: "El puerto por defecto para consultas SNMP es:",
        opciones: ["UDP 161", "TCP 161", "UDP 162", "TCP 162"],
        correcta: 0,
        explicacion: " La correcta es UDP 161 porque ese es el puerto usado por SNMP (Simple Network Management Protocol) para consultas normales entre gestor y dispositivo. UDP 162 se usa habitualmente para traps o notificaciones; y las opciones con TCP no son las usadas por defecto en SNMP clásico."
    },
    {
        enunciado: "En Syslog, ¿qué nivel corresponde a 'emergencies'?",
        opciones: ["0", "3", "5", "7"],
        correcta: 0,
        explicacion: " La correcta es 0 porque en Syslog el nivel 0 corresponde a emergencies, el más crítico de la escala. El nivel 3 corresponde a errores; el 5 a notificaciones; y el 7 a depuración, que es mucho menos grave."
    },
    
    {
        enunciado: "NTP utiliza por defecto el puerto:",
        opciones: ["UDP 123", "TCP 123", "UDP 514", "TCP 514"],
        correcta: 0,
        explicacion: " La correcta es UDP 123 porque ese es el puerto por defecto de NTP (Network Time Protocol). TCP 123 no es el puerto habitual de este protocolo; y UDP/TCP 514 se asocian a Syslog, no a NTP."
    },
    {
        enunciado: "La opción 82 de DHCP está asociada a:",
        opciones: ["Relay agent information", "DNS primario", "Sufijo de dominio", "Tiempo de concesión"],
        correcta: 0,
        explicacion: " La correcta es Relay agent information porque la opción 82 añade datos del relay DHCP sobre el circuito o puerto por el que llegó la petición. No define el DNS primario; no indica el sufijo de dominio; y tampoco representa el tiempo de concesión."
    },
    {
        enunciado: "El comando 'ip helper-address' sirve para:",
        opciones: ["Actuar como relay DHCP", "Habilitar NAT", "Activar LLDP", "Iniciar OSPF"],
        correcta: 0,
        explicacion: " La correcta es Actuar como relay DHCP porque ip helper-address reenvía peticiones de broadcast, como las de DHCP, hacia un servidor situado en otra red. No habilita NAT (Network Address Translation); no activa LLDP; y no inicia OSPF (Open Shortest Path First)."
    },

    {
        enunciado: "¿En qué capa OSI opera 802.1X?",
        opciones: ["Física", "Enlace de datos", "Red", "Transporte"],
        correcta: 1,
        explicacion: " La correcta es Enlace de datos porque 802.1X controla el acceso al medio a nivel de enlace antes de permitir tráfico normal. No opera en Física, que trata la transmisión de bits; ni en Red, donde estaría IP; ni en Transporte, donde trabajan TCP y UDP."
    },
    {
        enunciado: "En 802.1X, el 'autenticador' suele ser:",
        opciones: ["El servidor RADIUS", "El switch o AP", "El cliente", "El firewall"],
        correcta: 1,
        explicacion: " La correcta es El switch o AP porque en 802.1X el autenticador es el dispositivo que controla el acceso del cliente a la red y consulta con el servidor RADIUS. El cliente es el supplicant; el servidor RADIUS actúa como servidor de autenticación; y el firewall no es el papel típico en este esquema."
    },
    {
        enunciado: "RADIUS utiliza por defecto los puertos:",
        opciones: ["TCP 1812/1813", "UDP 1812/1813", "UDP 49", "TCP 49"],
        correcta: 1,
        explicacion: " La correcta es UDP 1812/1813 porque RADIUS usa normalmente UDP 1812 para autenticación y UDP 1813 para accounting. TCP 1812/1813 no es la opción clásica; y el puerto 49, en TCP, se asocia a TACACS+."
    },
    {
        enunciado: "¿Qué instrucción habilita Port Security en un puerto?",
        opciones: ["switchport port-security", "port-security enable", "security port on", "switchport secure"],
        correcta: 0,
        explicacion: " La correcta es switchport port-security porque esa es la sintaxis estándar de Cisco para activar Port Security en un puerto switch. Las otras opciones no corresponden al comando correcto en IOS."
    },
    {
        enunciado: "¿Qué modo de violación en Port Security apaga el puerto?",
        opciones: ["protect", "restrict", "shutdown", "monitor"],
        correcta: 2,
        explicacion: " La correcta es shutdown porque ese modo pone el puerto en estado err-disabled cuando se produce una violación de seguridad. protect y restrict reaccionan de forma menos severa; y monitor no es la respuesta estándar esperada en este contexto."
    },
    {
        enunciado: "La característica 'sticky MAC' en Port Security:",
        opciones: ["Aprende MACs y las convierte en estáticas", "Borra todas las MAC", "Duplica VLANs", "Apaga el puerto al ver MACs"],
        correcta: 0,
        explicacion: " La correcta es Aprende MACs y las convierte en estáticas porque sticky MAC permite aprender dinámicamente direcciones MAC seguras y conservarlas en la configuración. No borra todas las MAC; no duplica VLANs; y no apaga el puerto por el simple hecho de ver MACs válidas."
    },
    {
        enunciado: "MTU típica de Ethernet (sin jumbo frames) es:",
        opciones: ["1200", "1500", "9000", "576"],
        correcta: 1,
        explicacion: " La correcta es 1500 porque esa es la MTU (Maximum Transmission Unit) típica de Ethernet sin usar jumbo frames. 9000 suele asociarse a jumbo frames; 576 fue un valor clásico muy citado en IPv4; y 1200 no es el tamaño estándar Ethernet habitual."
    },
    {
        enunciado: "¿Cuál es el MTU mínimo requerido por IPv6? (no examen)",
        opciones: ["576", "1280", "1500", "9000"],
        correcta: 1,
        explicacion: " La correcta es 1280 porque IPv6 exige que los enlaces soporten al menos ese MTU mínimo. 576 es un valor clásico relacionado con IPv4; 1500 es la MTU típica de Ethernet, pero no el mínimo exigido por IPv6; y 9000 corresponde a jumbo frames."
    },
    {
        enunciado: "En IPv6, la resolución de vecinos se realiza con (no examen):",
        opciones: ["ARP", "NDP (ICMPv6)", "RARP", "LLDP"],
        correcta: 1,
        explicacion: " La correcta es NDP (ICMPv6) porque en IPv6 la resolución de vecinos y descubrimiento relacionado se hace con Neighbor Discovery Protocol sobre ICMPv6. ARP no se usa en IPv6; RARP es un protocolo antiguo con otro propósito; y LLDP sirve para descubrimiento de dispositivos vecinos, no para resolver vecinos IPv6 a ese nivel."
    },
    {
        enunciado: "Forman parte de NDP los mensajes:",
        opciones: ["Echo Request/Reply", "Router/Neighbor Solicitation/Advertisement", "Time Exceeded/Redirect", "Destination Unreachable/Parameter Problem"],
        correcta: 1,
        explicacion: " La correcta es Router/Neighbor Solicitation/Advertisement porque esos mensajes son básicos en NDP (Neighbor Discovery Protocol) para descubrir routers y vecinos, además de resolver direcciones. Echo Request/Reply se usa en ping; Time Exceeded y Redirect son otros mensajes ICMPv6; y Destination Unreachable/Parameter Problem también pertenecen a ICMPv6, pero no son la respuesta típica de NDP en esta pregunta."
    },
    {
        enunciado: "SLAAC permite obtener (fuera temario):",
        opciones: ["Solo DNS", "IP, prefijo y gateway a partir de RA", "Solo gateway", "Solo prefijo"],
        correcta: 1,
        explicacion: " La correcta es IP, prefijo y gateway a partir de RA porque SLAAC (Stateless Address Autoconfiguration) permite que un equipo IPv6 se autoconfigure usando anuncios RA (Router Advertisement) enviados por el router. No obtiene solo DNS, porque eso puede requerir otros mecanismos; tampoco solo gateway ni solo prefijo, ya que la autoconfiguración abarca más datos básicos de conectividad."
    },

    {
        enunciado: "ICMP se utiliza principalmente para:",
        opciones: ["Transferencia de archivos", "Mensajes de error y diagnóstico", "Cifrado de datos", "Autenticación de usuarios"],
        correcta: 1,
        explicacion: " La correcta es Mensajes de error y diagnóstico porque ICMP (Internet Control Message Protocol) sirve para informar de problemas de red y para herramientas como ping o traceroute. No se usa para transferir archivos, porque eso corresponde a otros protocolos; no cifra datos; y tampoco autentica usuarios."
    },
    {
        enunciado: "El comando 'ping' usa los mensajes ICMP:",
        opciones: ["Destination Unreachable", "Time Exceeded", "Echo Request / Echo Reply", "Redirect"],
        correcta: 2,
        explicacion: " La correcta es Echo Request / Echo Reply porque ping envía una solicitud de eco y espera una respuesta de eco para comprobar conectividad. Destination Unreachable se usa para indicar problemas de acceso; Time Exceeded aparece cuando se agota el TTL (Time To Live); y Redirect informa de una mejor ruta, así que no son los mensajes propios de ping."
    },
    {
        enunciado: "¿En qué capa del modelo OSI se sitúa ICMP?",
        opciones: ["Aplicación", "Transporte", "Red", "Enlace de datos"],
        correcta: 2,
        explicacion: " La correcta es Red porque ICMP (Internet Control Message Protocol) va asociado a IP y funciona en la capa de red del modelo OSI. No pertenece a Aplicación, porque no ofrece servicios finales al usuario; no es de Transporte como TCP o UDP; y tampoco es de Enlace, donde trabajan las tramas y las direcciones MAC."
    },
    {
        enunciado: "Traceroute/tracert suele apoyarse en el mensaje ICMP:",
        opciones: ["Echo Reply", "Time Exceeded", "Redirect", "Timestamp"],
        correcta: 1,
        explicacion: " La correcta es Time Exceeded porque traceroute aprovecha que los routers responden con ese mensaje ICMP cuando el TTL (Time To Live) llega a 0. Echo Reply se asocia más a ping; Redirect informa de otra ruta; y Timestamp no es el mensaje típico que permite descubrir los saltos intermedios."
    },
    {
        enunciado: "ICMP viaja encapsulado dentro de:",
        opciones: ["TCP", "UDP", "IP", "ARP"],
        correcta: 2,
        explicacion: " La correcta es IP porque ICMP (Internet Control Message Protocol) se encapsula directamente dentro de paquetes IP. No va dentro de TCP ni UDP, ya que no usa esos protocolos de transporte; y tampoco dentro de ARP, que es otro protocolo diferente con una función local en IPv4."
    },
    {
        enunciado: "Un firewall que bloquee ICMP puede:",
        opciones: ["Mejorar el ping", "Romper diagnósticos básicos", "Evitar STP", "Desactivar DHCP"],
        correcta: 1,
        explicacion: " La correcta es Romper diagnósticos básicos porque bloquear ICMP puede impedir o dificultar herramientas como ping y traceroute, además de ocultar mensajes de error útiles. No mejora el ping, sino que puede hacerlo fallar; no evita STP (Spanning Tree Protocol); y no desactiva DHCP (Dynamic Host Configuration Protocol)."
    },
    {
        enunciado: "El mensaje ICMP 'Destination Unreachable' indica:",
        opciones: ["Que el host está saturado", "Que no se puede llegar al destino", "Que el DNS falló", "Que el enlace es half-duplex"],
        correcta: 1,
        explicacion: " La correcta es Que no se puede llegar al destino porque ese mensaje ICMP informa de que la red, el host o incluso un servicio concreto no son alcanzables en ese momento. No significa necesariamente saturación del host; no se refiere específicamente a DNS; y no indica que el enlace funcione en half-duplex."
    },
    {
        enunciado: "El campo TTL de IP influye en ICMP porque al agotarse genera:",
        opciones: ["Echo Reply", "Redirect", "Time Exceeded", "Parameter Problem"],
        correcta: 2,
        explicacion: " La correcta es Time Exceeded porque cuando el TTL (Time To Live) llega a 0, el router descarta el paquete y envía ese mensaje ICMP al origen. Echo Reply se usa en ping; Redirect sugiere otra ruta; y Parameter Problem indica errores en campos del paquete, no agotamiento del TTL."
    },
    {
        enunciado: "ICMP no se usa para transportar datos de usuario porque:",
        opciones: ["No tiene puertos", "No es fiable", "No es orientado a conexión", "No está diseñado para aplicaciones"],
        correcta: 3,
        explicacion: " La correcta es No está diseñado para aplicaciones porque ICMP (Internet Control Message Protocol) fue creado para control, error y diagnóstico de red, no para transportar datos de usuario. Que no tenga puertos o no sea orientado a conexión puede describirlo, pero no es la razón principal de diseño; y decir solo que no es fiable se queda corto frente a su función real."
    },


    {
        enunciado: "¿Cuál es la función de ARP?",
        opciones: ["Resolver nombres a IP", "Obtener MAC a partir de una IP en la LAN", "Asignar IP por DHCP", "Descubrir redes remotas"],
        correcta: 1,
        explicacion: " La correcta es Obtener MAC a partir de una IP en la LAN porque ARP (Address Resolution Protocol) traduce una dirección IPv4 conocida a la dirección MAC correspondiente dentro de la red local. Resolver nombres a IP es tarea de DNS; asignar IP corresponde a DHCP; y descubrir redes remotas no es la función de ARP."
    },
    {
        enunciado: "Un ARP Request se envía típicamente como:",
        opciones: ["Unicast al destino", "Broadcast a la LAN", "Multicast 224.0.0.9", "Trama etiquetada 802.1Q"],
        correcta: 1,
        explicacion: " La correcta es Broadcast a la LAN porque, al no conocer aún la MAC destino, el emisor pregunta a todos los equipos del segmento quién tiene esa IP. No se envía como unicast porque todavía no sabe a quién dirigirlo; no usa la dirección multicast 224.0.0.9; y una trama 802.1Q solo indica etiquetado VLAN, no el modo típico del ARP Request."
    },
    {
        enunciado: "Un ARP Reply se envía normalmente como:",
        opciones: ["Broadcast", "Multicast", "Unicast al solicitante", "Trama trunk"],
        correcta: 2,
        explicacion: " La correcta es Unicast al solicitante porque quien responde a ARP ya conoce la MAC del equipo que hizo la petición y contesta directamente a él. No suele ser broadcast ni multicast; y decir 'trama trunk' no describe el tipo de envío, sino un contexto de enlace distinto."
    },
    {
        enunciado: "El término 'Gratuitous ARP' significa:",
        opciones: ["ARP hacia Internet", "Anunciar IP/MAC sin haber petición previa", "Borrar la tabla ARP", "ARP solo para routers"],
        correcta: 1,
        explicacion: " La correcta es Anunciar IP/MAC sin haber petición previa porque un Gratuitous ARP se envía sin que nadie lo haya solicitado, normalmente para anunciarse o detectar conflictos de dirección. No va hacia Internet, porque ARP funciona en la LAN; no borra por sí mismo la tabla ARP; y no es exclusivo de routers."
    },
    {
        enunciado: "Un ataque de envenenamiento ARP (ARP spoofing) permite:",
        opciones: ["Cifrar ICMP", "Man-in-the-Middle en la LAN", "Eliminar DHCP", "Crear VLANs"],
        correcta: 1,
        explicacion: " La correcta es Man-in-the-Middle en la LAN porque el atacante falsifica asociaciones IP-MAC y consigue colocarse entre dos equipos para interceptar o modificar tráfico. No cifra ICMP; no elimina DHCP; y no crea VLANs, ya que eso pertenece a otra capa y función."
    },
    {
        enunciado: "Medida de mitigación contra ARP spoofing indicada en el temario:",
        opciones: ["VTP server", "Dynamic ARP Inspection", "Spanning-Tree PortFast", "OSPF passive-interface"],
        correcta: 1,
        explicacion: " La correcta es Dynamic ARP Inspection porque esa función valida mensajes ARP y ayuda a frenar el envenenamiento ARP en switches compatibles. VTP server sirve para gestionar VLANs; PortFast acelera puertos hacia hosts finales; y OSPF passive-interface afecta a routing, no a la validación de ARP."
    },
    {
        enunciado: "Otra función que ayuda frente a servidores DHCP falsos en la LAN es:",
        opciones: ["DHCP Snooping", "RSTP", "LLDP", "CDP"],
        correcta: 0,
        explicacion: " La correcta es DHCP Snooping porque permite marcar puertos de confianza y bloquear respuestas DHCP no autorizadas en la red local. RSTP (Rapid Spanning Tree Protocol) evita bucles; LLDP (Link Layer Discovery Protocol) descubre vecinos; y CDP (Cisco Discovery Protocol) hace algo similar en entorno Cisco, pero no protege frente a DHCP falso."
    },
    {
        enunciado: "La tabla ARP de un host guarda:",
        opciones: ["IP ↔ MAC aprendidas recientemente", "Usuarios conectados", "Rutas OSPF", "Registros DNS"],
        correcta: 0,
        explicacion: " La correcta es IP ↔ MAC aprendidas recientemente porque la caché ARP almacena asociaciones vistas hace poco para evitar consultas repetidas. No guarda usuarios conectados; no contiene rutas OSPF; y tampoco almacena registros DNS, que pertenecen a otra función."
    },
    {
        enunciado: "ARP opera en redes IPv4 principalmente porque en IPv6 lo sustituye:",
        opciones: ["DHCPv6", "NDP (ICMPv6)", "OSPFv3", "VRRP"],
        correcta: 1,
        explicacion: " La correcta es NDP (ICMPv6) porque en IPv6 la resolución de vecinos se hace mediante Neighbor Discovery Protocol sobre ICMPv6, no con ARP. DHCPv6 puede aportar configuración, pero no sustituye ARP directamente; OSPFv3 es routing; y VRRP es redundancia de gateway."
    },
    {
        enunciado: "El ámbito de ARP se limita a:",
        opciones: ["Toda Internet", "Toda la organización", "La subred/LAN local", "Cualquier red MPLS"],
        correcta: 2,
        explicacion: " La correcta es La subred/LAN local porque ARP no cruza routers y solo tiene sentido dentro del mismo dominio de broadcast. No funciona en toda Internet ni en toda la organización salvo que coincida con una misma LAN; y tampoco depende de cualquier red MPLS."
    },

    {
        enunciado: "Un ISP de nivel Tier 1 se caracteriza por:",
        opciones: ["No tener clientes", "Alcanzar cualquier red sin pagar tránsito", "Ser solo local", "Usar exclusivamente Wi-Fi"],
        correcta: 1,
        explicacion: " La correcta es Alcanzar cualquier red sin pagar tránsito porque un proveedor Tier 1 llega al resto de Internet mediante peering con otros Tier 1, sin comprar tránsito IP. No significa que no tenga clientes; no es un operador solo local; y no usa exclusivamente Wi-Fi, ya que eso no define su categoría."
    },
    {
        enunciado: "Los ISPs Tier 2 suelen:",
        opciones: ["Ser globales sin costo de tránsito", "Pagar tránsito a Tier 1 y hacer peering con otros Tier 2", "Ser solo de acceso local", "No anunciar rutas BGP"],
        correcta: 1,
        explicacion: " La correcta es Pagar tránsito a Tier 1 y hacer peering con otros Tier 2 porque ese es el modelo típico de un proveedor intermedio. No suelen alcanzar todo Internet sin pagar tránsito; no son necesariamente solo de acceso local; y sí anuncian rutas BGP (Border Gateway Protocol), ya que participan en el intercambio entre sistemas autónomos."
    },
    {
        enunciado: "Un ISP Tier 3 se asocia típicamente a:",
        opciones: ["Backbone internacional", "Acceso local y compra de tránsito", "Gestión de TLD", "Redes satelitales globales"],
        correcta: 1,
        explicacion: " La correcta es Acceso local y compra de tránsito porque los Tier 3 suelen centrarse en dar servicio al cliente final y dependen de proveedores superiores para llegar al resto de Internet. No se caracterizan por backbone internacional; no gestionan TLD (Top Level Domains) por definición; y tampoco se definen por ser redes satelitales globales."
    },
    {
        enunciado: "Un IXP (Internet Exchange Point) sirve para:",
        opciones: ["Aumentar el TTL", "Intercambiar tráfico entre redes/ISPs localmente", "Cambiar direcciones MAC", "Traducir direcciones IP"],
        correcta: 1,
        explicacion: " La correcta es Intercambiar tráfico entre redes/ISPs localmente porque un IXP permite hacer peering en un punto común y reducir dependencia de rutas más largas. No aumenta el TTL (Time To Live); no cambia direcciones MAC; y no traduce direcciones IP, ya que eso sería otra función como NAT."
    },
    {
        enunciado: "El 'peering' entre dos ISPs suele ser:",
        opciones: ["Siempre de pago", "No pagado entre pares para intercambio local", "Solo con Tier 1", "Exclusivo de IPv6"],
        correcta: 1,
        explicacion: " La correcta es No pagado entre pares para intercambio local porque el peering suele basarse en un acuerdo entre redes similares para intercambiar tráfico directamente. No es siempre de pago, porque eso sería más propio del tránsito; no ocurre solo con Tier 1; y no es exclusivo de IPv6."
    },
    {
        enunciado: "Un mensaje ICMP 'Redirect' indica:",
        opciones: ["Que hay una mejor ruta por otro gateway", "Que el MTU es pequeño", "Que el DNS cambió", "Que el AP está lejos"],
        correcta: 0,
        explicacion: " La correcta es Que hay una mejor ruta por otro gateway porque ICMP Redirect informa a un host de que debería usar otra puerta de enlace para llegar mejor a un destino. No significa que el MTU (Maximum Transmission Unit) sea pequeño; no tiene relación con un cambio de DNS; y tampoco con la distancia a un AP (Access Point)."
    },
    {
        enunciado: "Un PoP (Point of Presence) es:",
        opciones: ["Un router doméstico", "Un punto de interconexión de un ISP", "Un servidor DNS raíz", "Un firewall"],
        correcta: 1,
        explicacion: " La correcta es Un punto de interconexión de un ISP porque un PoP es una ubicación física donde el proveedor tiene equipos y conecta servicios, clientes u otras redes. No es un router doméstico; tampoco un servidor raíz DNS por definición; y no equivale simplemente a un firewall."
    },
    {
        enunciado: "Entre las ventajas de un IXP se citan:",
        opciones: ["Mayor costo y latencia", "Reducir tránsito superior y latencia local", "Imposibilitar redundancia", "Eliminar BGP"],
        correcta: 1,
        explicacion: " La correcta es Reducir tránsito superior y latencia local porque al intercambiar tráfico en un IXP se evitan rutas más largas y costosas. Mayor costo y latencia sería lo contrario; no imposibilita redundancia; y no elimina BGP, ya que precisamente suele apoyarse en él para intercambiar rutas."
    },
    {
        enunciado: "El intercambio de rutas entre sistemas autónomos se hace con:",
        opciones: ["RIP", "OSPF", "BGP", "ARP"],
        correcta: 2,
        explicacion: " La correcta es BGP porque BGP (Border Gateway Protocol) es el protocolo usado para intercambiar rutas entre sistemas autónomos en Internet. RIP y OSPF son IGP (Interior Gateway Protocol) pensados para dentro de una organización; y ARP no es un protocolo de routing."
    },
    {
        enunciado: "Un sistema autónomo (AS) se define como:",
        opciones: ["Una única LAN", "Conjunto de redes bajo una administración y política comunes", "Un host con múltiples NIC", "Un CPD pequeño"],
        correcta: 1,
        explicacion: " La correcta es Conjunto de redes bajo una administración y política comunes porque un AS (Autonomous System) agrupa redes gestionadas por una misma entidad y con una política de routing unificada. No es una única LAN, porque puede abarcar muchas redes; no es un host con varias NIC (Network Interface Card); y tampoco se define por el tamaño físico de un CPD."
    },
    {
        enunciado: "La función de 'tránsito' en una relación ISP cliente-proveedor es:",
        opciones: ["Cortar rutas", "Pasar tráfico hacia/desde Internet más amplia", "Solo peering local", "Solo multicast"],
        correcta: 1,
        explicacion: " La correcta es Pasar tráfico hacia/desde Internet más amplia porque el proveedor ofrece conectividad hacia redes que el cliente no alcanza directamente. No significa cortar rutas; no es solo peering local, que es otra relación distinta; y no se limita al tráfico multicast, sino al tráfico general hacia otros destinos."
    },

    {
        enunciado: "El propósito de DNS es:",
        opciones: ["Traducir nombres de dominio a direcciones IP", "Cifrar datos", "Asignar IP dinámicamente", "Gestionar tablas ARP"],
        correcta: 0,
        explicacion: " La correcta es Traducir nombres de dominio a direcciones IP porque DNS (Domain Name System) permite localizar servicios usando nombres legibles como ejemplo.com en vez de memorizar IPs. No cifra datos, porque eso lo hacen otros mecanismos; no asigna IP dinámicamente, que es función de DHCP; y no gestiona tablas ARP."
    },
    {
        enunciado: "Estructura jerárquica de DNS (de arriba a abajo):",
        opciones: ["TLD → Raíz → Segundo nivel", "Raíz → TLD → Segundo nivel", "Segundo nivel → Raíz → TLD", "Cliente → Recursivo → Autoritativo"],
        correcta: 1,
        explicacion: " La correcta es Raíz → TLD → Segundo nivel porque la jerarquía de DNS empieza en la raíz, sigue con los TLD (Top Level Domains) como .com o .es, y después con dominios de segundo nivel. Las otras opciones alteran ese orden; y Cliente → Recursivo → Autoritativo describe actores de una consulta, no la jerarquía del espacio de nombres."
    },
    {
        enunciado: "Un servidor DNS autoritativo es el que:",
        opciones: ["Resuelve recursivamente todo Internet", "Tiene la información definitiva de una zona", "Solo cachea respuestas", "Solo responde NXDOMAIN"],
        correcta: 1,
        explicacion: " La correcta es Tiene la información definitiva de una zona porque el servidor autoritativo es la fuente oficial de los registros DNS de ese dominio o zona. No es necesariamente el que resuelve de forma recursiva; no se limita a cachear respuestas; y tampoco solo responde NXDOMAIN, ya que puede devolver múltiples tipos de registros válidos."
    },
    {
        enunciado: "Registro para IPv4 e IPv6 respectivamente:",
        opciones: ["MX y NS", "A y AAAA", "CNAME y PTR", "SRV y TXT"],
        correcta: 1,
        explicacion: " La correcta es A y AAAA porque el registro A asocia un nombre a una dirección IPv4 y el AAAA a una dirección IPv6. MX se usa para correo, NS para servidores de nombres, CNAME para alias, PTR para resolución inversa, y SRV o TXT tienen otros propósitos."
    },
    {
        enunciado: "El registro NS indica:",
        opciones: ["Servidor de correo", "Servidor(es) autoritativo(s) de la zona", "Alias", "Texto libre (SPF, verificación)"],
        correcta: 1,
        explicacion: " La correcta es Servidor(es) autoritativo(s) de la zona porque NS (Name Server) señala qué servidores responden con autoridad por esa zona DNS. Servidor de correo corresponde a MX; alias a CNAME; y texto libre o verificaciones suelen ir en TXT."
    },
    {
        enunciado: "El registro SOA contiene:",
        opciones: ["Inicio de autoridad y parámetros de la zona", "Lista de IPs públicas", "Cifrado TLS", "Reglas BGP"],
        correcta: 0,
        explicacion: " La correcta es Inicio de autoridad y parámetros de la zona porque SOA (Start of Authority) incluye datos clave como el servidor principal, número de serie y temporizadores de la zona. No contiene listas generales de IP públicas; tampoco define cifrado TLS; ni guarda reglas de BGP."
    },
    {
        enunciado: "La resolución inversa en IPv4 usa el dominio:", /*rebuscada*/
        opciones: ["ip6.arpa", "in-addr.arpa", "reverse.dns", "arpa.ipv4"],
        correcta: 1,
        explicacion: " La correcta es in-addr.arpa porque ese dominio se usa para convertir direcciones IPv4 en nombres mediante resolución inversa. ip6.arpa se usa para IPv6; reverse.dns no es el dominio estándar; y arpa.ipv4 tampoco es la forma correcta."
    },
    {
        enunciado: "La resolución inversa en IPv6 usa el dominio:", /*rebuscada*/
        opciones: ["in-addr.arpa", "ip6.arpa", "rev6.arpa", "root-ipv6.arpa"],
        correcta: 1,
        explicacion: " La correcta es ip6.arpa porque ese es el dominio usado en la resolución inversa de direcciones IPv6. in-addr.arpa es para IPv4; y las otras dos opciones no son los dominios estándar definidos para este propósito."
    },
    {
        enunciado: "Un registro CNAME sirve para:",
        opciones: ["Alias de un nombre hacia otro nombre", "Mapear IP a nombre", "Correo saliente", "Delegar zona"],
        correcta: 0,
        explicacion: " La correcta es Alias de un nombre hacia otro nombre porque CNAME crea un alias que apunta a otro nombre canónico. Mapear IP a nombre corresponde más a PTR en resolución inversa; correo saliente se relaciona con MX; y delegar una zona se hace con NS."
    },
    {
        enunciado: "Los resolutores y servidores suelen cachear respuestas durante:",
        opciones: ["Un tiempo definido por el TTL", "Siempre 24 horas", "Siempre 5 minutos", "Nunca cachean"],
        correcta: 0,
        explicacion: " La correcta es Un tiempo definido por el TTL porque el TTL (Time To Live) indica cuánto tiempo puede mantenerse una respuesta DNS en caché antes de volver a consultarla. No es siempre 24 horas ni siempre 5 minutos; y decir que nunca cachean es falso, porque la caché es una parte fundamental de DNS."
    },
    {
        enunciado: "En 802.1Q, ¿qué campo contiene la prioridad 802.1p (PCP)?",
        opciones: ["12 bits VLAN ID", "3 bits PCP", "1 bit DEI", "Ninguno"],
        correcta: 1,
        explicacion: " La correcta es 3 bits PCP porque en la etiqueta 802.1Q el campo PCP (Priority Code Point) ocupa 3 bits y se usa para prioridad 802.1p. Los 12 bits VLAN ID identifican la VLAN; el bit DEI indica elegibilidad de descarte; y por tanto no es cierto que no exista un campo para ello."
    },
    {
        enunciado: "Cantidad de VLANs identificables con 802.1Q:",
        opciones: ["1024", "2048", "4094", "8192"],
        correcta: 2,
        explicacion: " La correcta es 4094 porque el campo VLAN ID tiene 12 bits, pero algunos valores están reservados, así que el número utilizable típico es 4094. 1024 y 2048 se quedan cortos; y 8192 supera lo que permite ese campo."
    },
    {
        enunciado: "El rango de VLAN extendidas en Cisco es:",
        opciones: ["2–1001", "1002–4096", "1006–4094", "4095–8190"],
        correcta: 2,
        explicacion: " La correcta es 1006–4094 porque ese es el rango de VLAN extendidas en Cisco. Las VLAN normales suelen llegar hasta la 1005; 1002–1005 están reservadas en muchos contextos; y 4095 tampoco es una VLAN utilizable normal."
    },


    {
        enunciado: "Comando para ver el método de balanceo de EtherChannel:",
        opciones: ["show etherchannel summary", "show etherchannel load-balance", "show lacp neighbors", "show pagp neighbor"],
        correcta: 1,
        explicacion: " La correcta es show etherchannel load-balance porque ese comando muestra el método de balanceo utilizado por EtherChannel. show etherchannel summary resume grupos y estados; show lacp neighbors da información de LACP; y show pagp neighbor se centra en PAgP."
    },
    {
        enunciado: "BPDU Guard:",
        opciones: ["Evita ataques ARP", "Inhabilita el puerto que recibe BPDUs (edge)", "Evita NAT", "Habilita VLAN nativa"],
        correcta: 1,
        explicacion: " La correcta es Inhabilita el puerto que recibe BPDUs (edge) porque BPDU Guard protege puertos de acceso y los desactiva si reciben BPDUs inesperadas. No evita ataques ARP; no tiene relación con NAT; y no habilita la VLAN nativa."
    },
    {
        enunciado: "Root Guard sirve para:",
        opciones: ["Evitar que un puerto se convierta en root port", "Evitar que el switch pierda el rol de root", "Apagar el root bridge", "Cambiar prioridad automáticamente"],
        correcta: 1,
        explicacion: " La correcta es Evitar que el switch pierda el rol de root porque Root Guard impide que un switch vecino reclame ser root bridge por un puerto protegido. No apaga el root bridge; no cambia la prioridad automáticamente; y la primera opción no expresa tan bien la finalidad global del mecanismo."
    },
    {
        enunciado: "PortFast debe habilitarse en:",
        opciones: ["Enlaces troncales", "Puertos hacia hosts finales", "Enlaces WAN", "Puertos de agregado"],
        correcta: 1,
        explicacion: " La correcta es Puertos hacia hosts finales porque PortFast acelera el paso a forwarding en puertos de acceso conectados a dispositivos finales como PCs. No debe ponerse de forma normal en troncales; no se refiere a enlaces WAN; y tampoco a puertos de agregado entre switches."
    },

    {
        enunciado: "El algoritmo usado por OSPF para calcular rutas es:",
        opciones: ["Bellman-Ford", "DUAL", "Dijkstra (SPF)", "Floyd–Warshall"],
        correcta: 2,
        explicacion: " La correcta es Dijkstra (SPF) porque OSPF calcula las mejores rutas con el algoritmo Shortest Path First sobre su base de datos de estado de enlace. Bellman-Ford se asocia a protocolos de vector distancia; DUAL es propio de EIGRP; y Floyd–Warshall no es el algoritmo usado por OSPF."
    },
    {
        enunciado: "¿Qué prioridad OSPF impide participar en la elección de DR?",
        opciones: ["255", "128", "1", "0"],
        correcta: 3,
        explicacion: " La correcta es 0 porque una prioridad OSPF de 0 impide que el router participe en la elección de DR y BDR. Valores como 1, 128 o 255 sí permiten participar, variando solo el peso en esa elección."
    },
    {
        enunciado: "Orden de elección del Router ID (RID) en OSPF:",
        opciones: ["Menor MAC", "Mayor IP de loopback", "Menor IP activa", "Aleatorio"],
        correcta: 1,
        explicacion: " La correcta es Mayor IP de loopback porque, si no se configura manualmente el router-id, OSPF suele elegir primero la IP más alta de una loopback y, si no existe, la más alta de las interfaces activas. No usa la menor MAC, ni la menor IP activa, ni lo elige al azar."
    },
    
    {
        enunciado: "RIPv2 envía actualizaciones a la dirección multicast:",
        opciones: ["224.0.0.9", "224.0.0.5", "224.0.0.10", "239.255.255.250"],
        correcta: 0,
        explicacion: " La correcta es 224.0.0.9 porque esa es la dirección multicast utilizada por RIPv2 para enviar actualizaciones. 224.0.0.5 y 224.0.0.6 se relacionan con OSPF; 224.0.0.10 con EIGRP; y 239.255.255.250 con SSDP."
    },
    {
        enunciado: "Distancia administrativa de OSPF en Cisco:",
        opciones: ["90", "100", "110", "120"],
        correcta: 2,
        explicacion: " La correcta es 110 porque esa es la distancia administrativa por defecto de OSPF en Cisco. 90 se asocia a EIGRP interno; 120 a RIP; y 100 no es la cifra estándar por defecto para OSPF."
    },
    
    {
        enunciado: "La métrica por defecto de EIGRP considera:",
        opciones: ["Ancho de banda y retardo", "Saltos", "Costo genérico", "Latencia y jitter"],
        correcta: 0,
        explicacion: " La correcta es Ancho de banda y retardo porque esos son los valores principales que EIGRP usa por defecto para calcular su métrica. Saltos sería más propio de RIP; costo genérico encaja mejor con OSPF; y latencia y jitter no son la pareja básica por defecto en EIGRP."
    },
    {
        enunciado: "El algoritmo de EIGRP se llama:",
        opciones: ["SPF", "DUAL", "Bellman-Ford", "Path Vector"],
        correcta: 1,
        explicacion: " La correcta es DUAL porque EIGRP utiliza el Diffusing Update Algorithm para calcular rutas y converger rápidamente sin bucles. SPF es típico de OSPF; Bellman-Ford se asocia a protocolos de vector distancia; y Path Vector describe el enfoque de BGP."
    },
    {
        enunciado: "Condición para 'feasible successor' en EIGRP:",
        opciones: ["AD del vecino < FD local", "FD del vecino < AD local", "Métrica igual", "Más saltos"],
        correcta: 0,
        explicacion: " La correcta es AD del vecino < FD local porque esa es la condición de factibilidad que usa EIGRP para aceptar una ruta de respaldo libre de bucles. Las otras opciones no expresan la regla correcta: no basta con métrica igual ni con más saltos, y la comparación FD del vecino < AD local no es la condición estándar."
    },
    {
        enunciado: "¿Qué comando anuncia una red en BGP?",
        opciones: ["network X mask Y", "ip route X Y", "redistribute connected", "router-id X"],
        correcta: 0,
        explicacion: " La correcta es network X mask Y porque ese es el comando usado en BGP para anunciar una red concreta, siempre que exista en la tabla de rutas. ip route X Y crea rutas estáticas; redistribute connected hace otra técnica distinta; y router-id X solo define el identificador del proceso."
    },
    
    {
        enunciado: "HSRP envía hellos a:",
        opciones: ["224.0.0.18 UDP 1985", "224.0.0.2 UDP 1985", "224.0.0.102 UDP 3222", "224.0.0.5 IP 89"],
        correcta: 1,
        explicacion: " La correcta es 224.0.0.2 UDP 1985 porque ese es el multicast y puerto típicos de HSRP versión 1. 224.0.0.18 se asocia a VRRP; 224.0.0.102 UDP 3222 a GLBP; y 224.0.0.5 IP 89 pertenece a OSPF."
    },

    {
        enunciado: "GLBP permite:",
        opciones: ["Solo activo/pasivo", "Balanceo de carga de gateway", "Solo redundancia sin balanceo", "Enrutamiento dinámico"],
        correcta: 1,
        explicacion: " La correcta es Balanceo de carga de gateway porque GLBP reparte el uso del gateway virtual entre varios routers además de aportar redundancia. No se limita a activo/pasivo como otros enfoques; no ofrece solo redundancia sin balanceo; y no es un protocolo de enrutamiento dinámico."
    },
    {
        enunciado: "Canales no solapados típicos en 2.4 GHz (ETSI/US):", /*rebuscada*/
        opciones: ["1, 5, 9", "1, 6, 11", "2, 7, 12", "3, 8, 13"],
        correcta: 1,
        explicacion: " La correcta es 1, 6, 11 porque son los canales típicos no solapados más usados en 2.4 GHz para minimizar interferencias. Las otras combinaciones se pisan entre sí en muchos casos y por eso no son la referencia clásica."
    },



    {
        enunciado: "TFTP usa por defecto:",
        opciones: ["69/UDP", "69/TCP", "20/TCP", "445/TCP"],
        correcta: 0,
        explicacion: " La correcta es 69/UDP porque TFTP (Trivial File Transfer Protocol) utiliza UDP en ese puerto por defecto. 69/TCP no es su transporte habitual; 20/TCP se asocia al canal de datos de FTP activo; y 445/TCP es típico de SMB."
    },
    {
        enunciado: "En FTP activo, el puerto de datos del servidor es:",
        opciones: ["21/TCP", "20/TCP", "69/UDP", "445/TCP"],
        correcta: 1,
        explicacion: " La correcta es 20/TCP porque en FTP activo el servidor utiliza ese puerto para el canal de datos, mientras que el 21/TCP se usa para control. 69/UDP corresponde a TFTP; y 445/TCP a SMB, no a FTP."
    },
    {
        enunciado: "El comando 'service password-encryption' en IOS:",
        opciones: ["Cifra todas las contraseñas con AES", "Ofusca contraseñas tipo 7", "No hace nada", "Deshabilita Telnet"],
        correcta: 1,
        explicacion: " La correcta es Ofusca contraseñas tipo 7 porque ese comando en IOS no aplica un cifrado fuerte, sino una ofuscación reversible de las contraseñas que estaban en texto claro. No cifra con AES, así que la primera es falsa; no es correcto decir que no hace nada, porque sí modifica cómo se guardan; y tampoco deshabilita Telnet, ya que eso se configura por otros comandos."
    },
    {
        enunciado: "¿Cómo se almacena 'enable secret'?",
        opciones: ["MD5/hashed", "Tipo 7 reversible", "AES-256", "Base64"],
        correcta: 0,
        explicacion: " La correcta es MD5/hashed porque enable secret se almacena como hash, a diferencia de las contraseñas tipo 7, que solo están ofuscadas y son reversibles. No se guarda como tipo 7; tampoco como AES-256 en este contexto clásico; y Base64 no es un mecanismo de protección real, solo una codificación."
    },
    {
        enunciado: "¿Qué hace 'login block-for' en IOS?",
        opciones: ["Bloquea logins tras intentos fallidos", "Cierra VTY por inactividad", "Restringe Telnet", "Deshabilita SSH"],
        correcta: 0,
        explicacion: " La correcta es Bloquea logins tras intentos fallidos porque ese comando protege el acceso al equipo limitando intentos repetidos de autenticación. No cierra líneas VTY (Virtual Teletype) por inactividad, ya que eso se relaciona con exec-timeout; tampoco restringe Telnet por sí mismo; ni deshabilita SSH."
    },
    {
        enunciado: "La tabla CAM de un switch almacena:",
        opciones: ["Rutas IP", "MACs y puertos asociados", "Usuarios autenticados", "Direcciones IPv6"],
        correcta: 1,
        explicacion: " La correcta es MACs y puertos asociados porque la tabla CAM (Content Addressable Memory) permite al switch saber por qué puerto debe reenviar una trama según la MAC destino. No almacena rutas IP, porque eso sería función de una tabla de routing; no guarda usuarios autenticados; y tampoco se centra en direcciones IPv6 como tal, sino en MAC."
    },
    {
        enunciado: "El temporizador típico de envejecimiento de entradas CAM es:",
        opciones: ["5 s", "300 s", "3600 s", "24 h"],
        correcta: 1,
        explicacion: " La correcta es 300 s porque ese suele ser el valor típico de aging de entradas CAM en muchos switches Cisco. 5 segundos es demasiado poco; 3600 segundos y 24 horas serían valores mucho más largos de lo habitual para esa tabla de aprendizaje de MAC."
    },
    {
        enunciado: "Storm Control sirve para:",
        opciones: ["Priorizar voz", "Limitar broadcast/multicast/unknown unicast", "Marcar DSCP", "Acelerar STP"],
        correcta: 1,
        explicacion: " La correcta es Limitar broadcast/multicast/unknown unicast porque Storm Control ayuda a evitar tormentas de tráfico de capa 2 que pueden saturar la red. No prioriza voz, porque eso se relaciona más con QoS; no marca DSCP (Differentiated Services Code Point); y no acelera STP (Spanning Tree Protocol)."
    },

    {
        enunciado: "¿Cómo se posiciona WiMAX frente a Wi-Fi?",
        opciones: ["WiMAX sustituye a Wi-Fi en interiores", "WiMAX es para acceso metropolitano/rural; Wi-Fi para LAN locales", "Ambos son idénticos", "Wi-Fi reemplaza a WiMAX en backhaul"],
        correcta: 1,
        explicacion: " La correcta es WiMAX es para acceso metropolitano/rural; Wi-Fi para LAN locales porque son tecnologías pensadas para escenarios diferentes. WiMAX se orienta más a cobertura amplia o acceso de última milla; Wi-Fi se usa sobre todo en redes locales. No son idénticos, WiMAX no sustituye a Wi-Fi en interiores, y Wi-Fi no reemplaza por definición a WiMAX en backhaul."
    },
    {
        enunciado: "La VLAN nativa por defecto en Cisco es:",
        opciones: ["0", "1", "100", "4094"],
        correcta: 1,
        explicacion: " La correcta es 1 porque en muchos dispositivos Cisco la VLAN nativa por defecto es la VLAN 1. La VLAN 0 no se usa como VLAN nativa normal; 100 no es el valor por defecto habitual; y 4094 puede usarse en ciertos contextos, pero no es la VLAN nativa predeterminada clásica."
    },
    {
        enunciado: "Un 'native VLAN mismatch' puede provocar:",
        opciones: ["Cifrado débil", "Tráfico sin etiquetar en VLAN distinta", "Bucle de capa 3", "Pérdida de ARP"],
        correcta: 1,
        explicacion: " La correcta es Tráfico sin etiquetar en VLAN distinta porque, si los dos extremos del trunk no tienen la misma VLAN nativa, las tramas sin etiqueta pueden acabar entrando en VLAN diferentes. Cifrado débil no tiene relación con este problema; bucle de capa 3 no es el efecto típico aquí; y pérdida de ARP puede ser una consecuencia indirecta de una mala conectividad, pero no define el fallo principal."
    },
    {
        enunciado: "Comando para bajar la prioridad de un switch y que otro sea root (VLAN 1):",
        opciones: ["spanning-tree vlan 1 priority 4096", "stp root primary", "spanning-tree mode rapid-pvst", "spanning-tree vlan 1 cost 0"],
        correcta: 0,
        explicacion: " La correcta es spanning-tree vlan 1 priority 4096 porque en STP una prioridad más baja aumenta la probabilidad de que ese switch sea elegido como root bridge para esa VLAN. stp root primary no es la sintaxis normal de IOS en este caso; spanning-tree mode rapid-pvst cambia el modo de STP, no la prioridad; y spanning-tree vlan 1 cost 0 afecta al coste de un puerto, no a la elección del root."
    },
    {
        enunciado: "RSTP define estados de puerto:",
        opciones: ["Blocking/Listening/Learning/Forwarding", "Discarding/Learning/Forwarding", "Disabled/Listening/Forwarding", "Alternate/Backup/Designated/Root"],
        correcta: 1,
        explicacion: " La correcta es Discarding/Learning/Forwarding porque RSTP (Rapid Spanning Tree Protocol) simplifica los estados clásicos de STP a esos tres. Blocking/Listening/Learning/Forwarding corresponde al STP clásico; Disabled/Listening/Forwarding no es la lista correcta de RSTP; y Alternate/Backup/Designated/Root son roles de puerto, no estados."
    },
    {
        enunciado: "Comando para ver el detalle STP de una interfaz concreta:",
        opciones: ["show spanning-tree interface Gi1/0/1 detail", "show vtp status", "show interfaces status", "show ip interface brief"],
        correcta: 0,
        explicacion: " La correcta es show spanning-tree interface Gi1/0/1 detail porque ese comando muestra información detallada de STP (Spanning Tree Protocol) para una interfaz específica. show vtp status sirve para VTP; show interfaces status resume el estado general de interfaces; y show ip interface brief enseña IP y estado, pero no el detalle de STP."
    },
    {
        enunciado: "En VTP v3, para desactivarlo completamente:",
        opciones: ["vtp mode off", "no vtp run", "vtp disable", "vtp shutdown"],
        correcta: 0,
        explicacion: " La correcta es vtp mode off porque en VTP versión 3 existe ese modo para dejar el protocolo completamente desactivado. no vtp run, vtp disable y vtp shutdown no son la sintaxis estándar correcta en Cisco IOS para ese objetivo."
    },
    {
        enunciado: "¿Qué riesgo implica el número de revisión de VTP?",
        opciones: ["Debe ser 0 siempre", "Un switch con revisión mayor puede borrar/alterar VLANs", "No afecta", "Solo cambia el dominio"],
        correcta: 1,
        explicacion: " La correcta es Un switch con revisión mayor puede borrar/alterar VLANs porque VTP usa el número de revisión para decidir qué información considera más reciente y válida. No tiene que ser 0 siempre; no es verdad que no afecte; y no solo cambia el dominio, ya que puede modificar la base de datos de VLANs."
    },
    {
        enunciado: "Registro DNS que mapea IP a nombre (consulta inversa):",
        opciones: ["PTR", "A", "NS", "TXT"],
        correcta: 0,
        explicacion: " La correcta es PTR porque ese registro se utiliza en DNS (Domain Name System) para resolver una dirección IP hacia un nombre en una consulta inversa. A hace lo contrario, de nombre a IPv4; NS indica servidores autoritativos; y TXT almacena texto o verificaciones, no mapeos inversos."
    },
    {
        enunciado: "Registro DNS que anuncia servicios (_sip._tcp, etc.):",
        opciones: ["SRV", "MX", "CNAME", "SOA"],
        correcta: 0,
        explicacion: " La correcta es SRV porque ese registro indica la localización de un servicio concreto, como SIP, incluyendo host y puerto. MX se usa para correo; CNAME crea alias; y SOA define datos de autoridad de la zona, no la publicación de servicios."
    },
    {
        enunciado: "En IPv4, el campo TTL indica:",
        opciones: ["Control de congestión", "Número de saltos máximo", "Prioridad de paquete", "Tamaño de ventana"],
        correcta: 1,
        explicacion: " La correcta es Número de saltos máximo porque el TTL (Time To Live) se decrementa en cada router y limita cuánto puede vivir un paquete antes de descartarse. No controla la congestión; no marca prioridad del paquete; y tamaño de ventana es un concepto de TCP, no del encabezado IPv4."
    },
    {
        enunciado: "Path MTU Discovery depende de recibir:",
        opciones: ["ICMP 'Fragmentation needed'", "ARP Reply", "DNS Response", "SNMP Trap"],
        correcta: 0,
        explicacion: " La correcta es ICMP 'Fragmentation needed' porque Path MTU Discovery usa ese mensaje para descubrir el mayor tamaño de paquete que puede atravesar el camino sin fragmentarse. ARP Reply resuelve MACs; DNS Response resuelve nombres; y SNMP Trap es una notificación de monitorización, no interviene en este proceso."
    },
    {
        enunciado: "¿Qué flag TCP señala el inicio de la conexión?",
        opciones: ["FIN", "SYN", "RST", "URG"],
        correcta: 1,
        explicacion: " La correcta es SYN porque ese flag se usa para iniciar el establecimiento de una conexión TCP en el three-way handshake. FIN sirve para cerrar la conexión; RST para resetearla; y URG indica datos urgentes, no el comienzo de la sesión."
    },
    {
        enunciado: "¿Qué comando desactiva el resumen automático en EIGRP clásico?",
        opciones: ["no auto-summary", "no autosummary", "eigrp no-summary", "summary disable"],
        correcta: 0,
        explicacion: " La correcta es no auto-summary porque esa es la sintaxis de Cisco IOS para desactivar el resumen automático en EIGRP clásico. no autosummary está mal escrito; eigrp no-summary no es el comando correcto; y summary disable tampoco es la sintaxis válida."
    },
    {
        enunciado: "Multicast de OSPF para 'all routers' es:",
        opciones: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
        correcta: 0,
        explicacion: " La correcta es 224.0.0.5 porque esa es la dirección multicast que OSPF usa para 'all routers'. 224.0.0.6 se usa para DR y BDR; 224.0.0.9 corresponde a RIPv2; y 224.0.0.10 a EIGRP."
    },
    {
        enunciado: "Multicast de OSPF para DR/BDR es:",
        opciones: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
        correcta: 1,
        explicacion: " La correcta es 224.0.0.6 porque esa es la dirección multicast que OSPF usa para DR (Designated Router) y BDR (Backup Designated Router). 224.0.0.5 es para all routers; 224.0.0.9 es de RIPv2; y 224.0.0.10 pertenece a EIGRP."
    },
    {
        enunciado: "Comando que habilita el routing IPv6 en un switch L3 Cisco:",
        opciones: ["ipv6 routing", "ip routing", "router ipv6", "ipv6 enable"],
        correcta: 0,
        explicacion: " La correcta es ipv6 routing porque ese comando habilita el enrutamiento IPv6 global en un switch de capa 3 Cisco. ip routing activa el routing IPv4; router ipv6 no es el comando global correcto para esto; e ipv6 enable se usa en interfaces, no para habilitar el routing global."
    },
    {
        enunciado: "En IPv6, ::1 es la dirección:",
        opciones: ["Link-local", "Loopback", "Multicast", "Anycast"],
        correcta: 1,
        explicacion: " La correcta es Loopback porque ::1 en IPv6 equivale a 127.0.0.1 en IPv4 y representa al propio equipo. Link-local usa normalmente el prefijo fe80::/10; multicast empieza por ff00::/8; y anycast no se representa así."
    },

    {
        enunciado: "Comando para ver traducciones NAT activas:",
        opciones: ["show ip nat translations", "show nat table", "show ip route nat", "show access-lists nat"],
        correcta: 0,
        explicacion: " La correcta es show ip nat translations porque ese comando muestra las traducciones NAT activas en Cisco IOS. show nat table no es el comando estándar esperado; show ip route nat no enseña traducciones; y show access-lists nat tampoco sirve para ver la tabla NAT activa."
    },
    {
        enunciado: "En Cisco, 'ip nat inside' se aplica normalmente a:",
        opciones: ["Interfaz hacia Internet", "Interfaz hacia la LAN", "Cualquier loopback", "Solo subinterfaces"],
        correcta: 1,
        explicacion: " La correcta es Interfaz hacia la LAN porque ese lado se considera la parte interna de NAT, donde están los hosts privados. La interfaz hacia Internet suele configurarse como ip nat outside; no se aplica a cualquier loopback por norma; y tampoco solo a subinterfaces."
    },
    {
        enunciado: "Puerto por defecto de Syslog (UDP) es:",
        opciones: ["514", "162", "22", "25"],
        correcta: 0,
        explicacion: " La correcta es 514 porque Syslog usa normalmente UDP 514 por defecto para enviar mensajes de registro. 162 se asocia a traps de SNMP; 22 a SSH; y 25 a SMTP."
    },
    {
        enunciado: "Alias clásico para guardar la configuración en NVRAM:",
        opciones: ["wr mem", "copy tftp flash", "write erase", "config-register 0x2102"],
        correcta: 0,
        explicacion: " La correcta es wr mem porque es el alias clásico de write memory, usado para guardar la configuración en NVRAM. copy tftp flash se usa para copiar imágenes o ficheros; write erase borra configuración; y config-register 0x2102 ajusta el registro de arranque, no guarda la configuración."
    },
    {
        enunciado: "El sufijo 'k9' en una imagen de IOS indica:", /*rebuscada*/
        opciones: ["Soporte criptográfico", "Kernel 9", "Versión 9 de IOS", "Compatibilidad con Catalyst 9k"],
        correcta: 0,
        explicacion: " La correcta es Soporte criptográfico porque el sufijo k9 suele indicar que la imagen de IOS incluye capacidades de cifrado o funciones criptográficas. No significa Kernel 9; tampoco Versión 9 de IOS; y no se refiere a compatibilidad con Catalyst 9k."
    },
    {
        enunciado: "Para permitir solo SSH en VTY se usa:",
        opciones: ["transport input ssh", "login local", "transport output ssh", "ip ssh version 2"],
        correcta: 0,
        explicacion: " La correcta es transport input ssh porque ese comando restringe el acceso entrante en las líneas VTY a SSH únicamente. login local define cómo se autentica; transport output ssh afecta a conexiones salientes; e ip ssh version 2 selecciona la versión de SSH, pero no limita por sí solo el acceso solo a SSH."
    },
    {
        enunciado: "Comando que muestra datos detallados (incluida IP de gestión) en CDP:",
        opciones: ["show cdp neighbors detail", "show cdp", "show neighbors", "show cdp interface"],
        correcta: 0,
        explicacion: " La correcta es show cdp neighbors detail porque ofrece información ampliada de los vecinos CDP, incluida la IP de gestión. show cdp no es el comando típico esperado para ese nivel de detalle; show neighbors es demasiado genérico; y show cdp interface enseña información por interfaz local, no el detalle completo de cada vecino."
    },
    {
        enunciado: "¿Qué encapsulado de VLAN fue propietario de Cisco y hoy está obsoleto?",
        opciones: ["ISL", "QinQ", "MPLS", "L2TP"],
        correcta: 0,
        explicacion: " La correcta es ISL porque Inter-Switch Link fue un encapsulado de VLAN propietario de Cisco y hoy ha quedado obsoleto frente a 802.1Q. QinQ es otro mecanismo de etiquetado; MPLS es una tecnología distinta; y L2TP es un protocolo de túnel, no un encapsulado VLAN de ese tipo."
    },
    {
        enunciado: "¿Qué versión proporciona convergencia más rápida que STP clásico?", /*rebuscada*/
        opciones: ["PVST+ (802.1D)", "RSTP (802.1w)", "MSTP (802.1s)", "VTP v3"],
        correcta: 1,
        explicacion: " La correcta es RSTP (802.1w) porque Rapid Spanning Tree Protocol mejora la velocidad de convergencia frente a STP clásico. PVST+ sigue basado en STP por VLAN; MSTP (Multiple Spanning Tree Protocol) también mejora escalabilidad, pero la respuesta típica sobre convergencia rápida es RSTP; y VTP v3 no es una versión de STP."
    },

    /*PREGUNTAS REPASO PRIMER TRIMESTRE*/
    {
        enunciado: "¿Cuántos bits tiene un Byte?",
        opciones: ["4", "8", "16", "32"],
        correcta: 1,
        explicacion: " La correcta es 8 porque un byte está formado por 8 bits. 4 bits sería medio byte, 16 bits serían 2 bytes y 32 bits equivalen a 4 bytes."
    },
    {
        enunciado: "¿Cuál es la equivalencia correcta de 1 KB en sistema binario?",
        opciones: ["1000 bytes", "8000 bits", "1024 bytes", "8192 bytes"],
        correcta: 2,
        explicacion: " La correcta es 1024 bytes porque en sistema binario 1 KB se toma como 2^10 bytes. 1000 bytes corresponde al sistema decimal, 8000 bits no es la equivalencia pedida y 8192 bytes equivalen a 8 KB binarios."
    },
    {
        enunciado: "¿Qué sistema de numeración utiliza potencias de 2?",
        opciones: ["Decimal", "Hexadecimal", "Octal", "Binario"],
        correcta: 3,
        explicacion: " La correcta es Binario porque trabaja en base 2 y usa potencias de 2. Decimal usa base 10, hexadecimal base 16 y octal base 8."
    },
    {
        enunciado: "El número binario 10101₂ equivale en decimal a:",
        opciones: ["19", "20", "21", "22"],
        correcta: 2,
        explicacion: " La correcta es 21 porque 10101₂ = 1·16 + 0·8 + 1·4 + 0·2 + 1·1 = 21. Las otras opciones no coinciden con esa suma."
    },
    {
        enunciado: "¿Cuál de los siguientes valores es mayor?",
        opciones: ["1 MB decimal", "1 MB binario", "Son iguales", "Depende del sistema operativo"],
        correcta: 1,
        explicacion: " La correcta es 1 MB binario porque 1 MB binario equivale a 1.048.576 bytes, mientras que 1 MB decimal son 1.000.000 bytes. Por eso no son iguales ni depende del sistema operativo en la comparación matemática."
    },
    {
        enunciado: "¿Qué base utiliza el sistema hexadecimal?",
        opciones: ["2", "8", "10", "16"],
        correcta: 3,
        explicacion: " La correcta es 16 porque el sistema hexadecimal usa 16 símbolos: del 0 al 9 y de la A a la F. Las demás bases corresponden a otros sistemas."
    },
    {
        enunciado: "¿Cuántas capas tiene el modelo OSI?",
        opciones: ["4", "5", "6", "7"],
        correcta: 3,
        explicacion: " La correcta es 7 porque el modelo OSI está formado por 7 capas. Las otras cantidades no coinciden con su estructura estándar."
    },
    {
        enunciado: "¿Qué capa del modelo OSI se encarga del direccionamiento lógico?",
        opciones: ["Enlace", "Transporte", "Red", "Sesión"],
        correcta: 2,
        explicacion: " La correcta es Red porque esa capa trabaja con direcciones lógicas como las IP. Enlace usa direcciones físicas, Transporte gestiona la comunicación extremo a extremo y Sesión controla el diálogo entre aplicaciones."
    },
    {
        enunciado: "¿En qué capa OSI se sitúa Ethernet?",
        opciones: ["Física", "Enlace", "Red", "Transporte"],
        correcta: 1,
        explicacion: " La correcta es Enlace porque Ethernet se asocia normalmente a la capa 2 del modelo OSI. Aunque también tiene parte física, en este tipo de test se considera como protocolo de capa de enlace."
    },
    {
        enunciado: "¿Qué capa del modelo OSI se encarga del control de errores extremo a extremo?",
        opciones: ["Enlace", "Red", "Transporte", "Aplicación"],
        correcta: 2,
        explicacion: " La correcta es Transporte porque el control de errores extremo a extremo se hace entre origen y destino final. Enlace controla errores dentro del enlace local, no de extremo a extremo."
    },
    {
        enunciado: "¿Qué modelo es realmente utilizado en Internet?",
        opciones: ["OSI", "TCP/IP", "IEEE", "ISO"],
        correcta: 1,
        explicacion: " La correcta es TCP/IP porque es el modelo práctico usado en Internet. OSI es un modelo de referencia teórico, e IEEE e ISO son organismos o estándares, no el modelo principal de Internet."
    },
    {
        enunciado: "¿Cuántas capas tiene el modelo TCP/IP?",
        opciones: ["3", "4", "5", "7"],
        correcta: 1,
        explicacion: " La correcta es 4 porque el modelo TCP/IP se suele explicar con 4 capas. Las otras cifras no corresponden al modelo estándar más habitual."
    },
    {
        enunciado: "¿Qué unidad de datos maneja la capa de red?",
        opciones: ["Trama", "Segmento", "Paquete", "Bit"],
        correcta: 2,
        explicacion: " La correcta es Paquete porque la capa de red trabaja con paquetes. Trama corresponde a enlace, segmento a transporte y bit a física."
    },
    {
        enunciado: "El protocolo IP es:",
        opciones: ["Orientado a conexión", "No orientado a conexión", "Orientado a sesión", "Orientado a flujo"],
        correcta: 1,
        explicacion: " La correcta es No orientado a conexión porque IP envía datagramas sin establecer conexión previa. Las demás opciones no describen el funcionamiento básico de IP."
    },
    {
        enunciado: "¿Qué característica NO es propia del protocolo IP?",
        opciones: ["Usa datagramas", "Garantiza entrega", "No tiene QoS", "No controla errores"],
        correcta: 1,
        explicacion: " La correcta es Garantiza entrega porque IP no asegura ni la entrega ni el orden de los paquetes. Sí usa datagramas, no controla errores de extremo a extremo y no ofrece QoS por defecto en su funcionamiento básico."
    },
    {
        enunciado: "¿Qué versión de IP utiliza direcciones de 32 bits?",
        opciones: ["IPv3", "IPv4", "IPv5", "IPv6"],
        correcta: 1,
        explicacion: " La correcta es IPv4 porque usa direcciones de 32 bits. IPv6 usa 128 bits y las otras versiones no son las utilizadas de forma estándar."
    },
    {
        enunciado: "¿Qué versión de IP utiliza direcciones de 128 bits?",
        opciones: ["IPv4", "IPv5", "IPv6", "IPv7"],
        correcta: 2,
        explicacion: " La correcta es IPv6 porque usa direcciones de 128 bits. IPv4 usa 32 bits y las otras opciones no son la respuesta correcta."
    },
    {
        enunciado: "¿Cuántos octetos tiene una dirección IPv4?",
        opciones: ["2", "3", "4", "8"],
        correcta: 2,
        explicacion: " La correcta es 4 porque una dirección IPv4 tiene 32 bits repartidos en 4 octetos de 8 bits. Las demás opciones no encajan con esa estructura."
    },
    {
        enunciado: "¿Qué rango identifica a las direcciones de clase A?",
        opciones: ["0–127", "128–191", "192–223", "224–239"],
        correcta: 0,
        explicacion: " La correcta según la plantilla es 0–127 porque así aparece en la clasificación clásica por primer octeto. Aun así, esta pregunta es dudosa, porque muchas veces se matiza como 1–126, ya que 0 está reservado y 127 se usa para loopback."
    },
    {
        enunciado: "Una dirección que empieza por 10 pertenece a la clase:",
        opciones: ["A", "B", "C", "D"],
        correcta: 0,
        explicacion: " La correcta es A porque una dirección que empieza por 10 cae dentro del rango clásico de la clase A. Las demás clases empiezan en otros intervalos."
    },
    {
        enunciado: "¿Qué clase IPv4 tiene por defecto la máscara 255.255.255.0?",
        opciones: ["A", "B", "C", "D"],
        correcta: 2,
        explicacion: " La correcta es C porque la máscara por defecto de una red de clase C es 255.255.255.0. Clase A usa 255.0.0.0 y clase B 255.255.0.0."
    },
    {
        enunciado: "¿Cuál es el número máximo de hosts en una red de clase C?",
        opciones: ["256", "255", "254", "253"],
        correcta: 2,
        explicacion: " La correcta es 254 porque en una red clase C hay 256 direcciones totales, pero se restan 2: una para red y otra para broadcast. Por eso no son 256, 255 ni 253."
    },
    {
        enunciado: "¿Qué clase IPv4 está reservada para multicast?",
        opciones: ["C", "D", "E", "A"],
        correcta: 1,
        explicacion: " La correcta es D porque la clase D está reservada para multicast. Las demás clases tienen otros usos."
    },
    {
        enunciado: "¿Cuál de estas direcciones es privada?",
        opciones: ["8.8.4.4", "172.20.10.5", "100.64.0.1", "1.1.1.1"],
        correcta: 1,
        explicacion: " La correcta es 172.20.10.5 porque pertenece al rango privado 172.16.0.0–172.31.255.255. 8.8.4.4 y 1.1.1.1 son públicas, y 100.64.0.1 pertenece a CGNAT, no al rango privado clásico RFC 1918."
    },
    {
        enunciado: "¿Qué dirección representa “este host”?",
        opciones: ["127.0.0.1", "255.255.255.255", "0.0.0.0", "192.168.1.1"],
        correcta: 0, // POSIBLE ERROR: normalmente “este host” se asocia mejor con 0.0.0.0; 127.0.0.1 es loopback/localhost
        explicacion: " La correcta según la plantilla es 127.0.0.1, pero esta respuesta parece dudosa. Normalmente 127.0.0.1 se usa para loopback o localhost, mientras que 0.0.0.0 se asocia más con “este host” o dirección no especificada según el contexto."
    },
    {
        enunciado: "¿Qué dirección se usa para broadcast limitado?",
        opciones: ["127.0.0.1", "0.0.0.0", "192.168.1.255", "255.255.255.255"],
        correcta: 3,
        explicacion: " La correcta es 255.255.255.255 porque esa es la dirección de broadcast limitado. 192.168.1.255 sería broadcast dirigido de una red concreta, no limitado."
    },
    {
        enunciado: "¿Para qué se usa la dirección 127.0.0.1?",
        opciones: ["Multicast", "Red privada", "Loopback", "Broadcast"],
        correcta: 2,
        explicacion: " La correcta es Loopback porque 127.0.0.1 apunta al propio equipo. No es multicast, ni broadcast, ni una red privada de uso general."
    },
    {
        enunciado: "¿Cuál es la función principal de la máscara de red?",
        opciones: ["Asignar IP", "Separar red y host", "Enrutar paquetes", "Cifrar tráfico"],
        correcta: 1,
        explicacion: " La correcta es Separar red y host porque la máscara indica qué parte de la IP identifica la red y qué parte identifica el host. No asigna IP, no cifra y no enruta por sí sola."
    },
    {
        enunciado: "¿Qué operación lógica se usa para obtener la dirección de red?",
        opciones: ["OR", "XOR", "NOT", "AND"],
        correcta: 3,
        explicacion: " La correcta es AND porque la dirección de red se obtiene haciendo AND entre la IP y la máscara. Las demás operaciones no se usan para ese cálculo."
    },
    {
        enunciado: "¿Cuántos bits tiene la máscara /16?",
        opciones: ["8", "16", "24", "32"],
        correcta: 1,
        explicacion: " La correcta es 16 porque el prefijo /16 indica 16 bits a 1 en la máscara. Las otras opciones representarían otros prefijos."
    },
    {
        enunciado: "¿Cuántos hosts útiles tiene una red /24?",
        opciones: ["256", "255", "254", "252"],
        correcta: 2,
        explicacion: " La correcta es 254 porque en /24 hay 8 bits para hosts, es decir 256 direcciones, menos 2 por red y broadcast. Por eso no son 256 ni 255."
    },
    {
        enunciado: "¿Qué representa la última dirección de una red?",
        opciones: ["Gateway", "Red", "Host válido", "Broadcast"],
        correcta: 3,
        explicacion: " La correcta es Broadcast porque la última dirección de una red se reserva para difusión. No es la dirección de red, ni un host válido, ni tiene por qué ser el gateway."
    },
    {
        enunciado: "Subnetear consiste en:",
        opciones: ["Unir redes", "Dividir una red en varias", "Cambiar de protocolo", "Convertir IP a binario"],
        correcta: 1,
        explicacion: " La correcta es Dividir una red en varias porque subnetear crea subredes más pequeñas dentro de una red mayor. No une redes ni cambia de protocolo."
    },
    {
        enunciado: "¿Qué parte se “toma prestada” al crear subredes?",
        opciones: ["Bits de red", "Bits de host", "Octetos completos", "Bits de máscara"],
        correcta: 1,
        explicacion: " La correcta es Bits de host porque al subnetear se toman bits de la parte host para convertirlos en parte de subred. No se toman bits de red ya definidos."
    },
    {
        enunciado: "¿Qué máscara permite 14 hosts por subred?",
        opciones: ["/24", "/26", "/28", "/30"],
        correcta: 2,
        explicacion: " La correcta es /28 porque deja 4 bits para host: 2^4 = 16 direcciones, menos 2 = 14 hosts útiles. Las otras máscaras dan cantidades distintas."
    },
    {
        enunciado: "¿Cuántos bits son necesarios para obtener al menos 8 subredes?",
        opciones: ["2", "3", "4", "5"],
        correcta: 1,
        explicacion: " La correcta es 3 porque con 3 bits se obtienen 2^3 = 8 subredes. Con 2 bits solo serían 4."
    },
    {
        enunciado: "¿Qué valor se resta normalmente al calcular hosts por subred?",
        opciones: ["1", "2", "4", "8"],
        correcta: 1,
        explicacion: " La correcta es 2 porque se restan la dirección de red y la de broadcast. No se resta 1, 4 ni 8 en el cálculo estándar."
    },
    {
        enunciado: "¿Por qué se restan direcciones al calcular hosts?",
        opciones: ["Por la máscara", "Por eficiencia", "Por red y broadcast", "Por el router"],
        correcta: 2,
        explicacion: " La correcta es Por red y broadcast porque esas dos direcciones no pueden asignarse a hosts. No es por eficiencia ni por el router."
    },
    {
        enunciado: "¿Qué problema principal resuelve IPv6?",
        opciones: ["Seguridad", "Velocidad", "Falta de direcciones", "Compatibilidad"],
        correcta: 2,
        explicacion: " La correcta es Falta de direcciones porque IPv6 amplía muchísimo el espacio de direcciones. No nació principalmente por velocidad o compatibilidad."
    },
    {
        enunciado: "¿Cómo se representan las direcciones IPv6?",
        opciones: ["Decimal con puntos", "Binario", "Hexadecimal con dos puntos", "Octal"],
        correcta: 2,
        explicacion: " La correcta es Hexadecimal con dos puntos porque las direcciones IPv6 se escriben en grupos hexadecimales separados por dos puntos. No se expresan en decimal con puntos como IPv4."
    },
    {
        enunciado: "¿Cuántos grupos tiene una IPv6 completa?",
        opciones: ["4", "6", "8", "16"],
        correcta: 2,
        explicacion: " La correcta es 8 porque una IPv6 completa tiene 8 grupos de 16 bits. Las otras cantidades no corresponden a su formato estándar."
    },
    {
        enunciado: "¿Cuántas veces puede usarse “::” en una IPv6 abreviada?",
        opciones: ["Ninguna", "Una", "Dos", "Ilimitadas"],
        correcta: 1,
        explicacion: " La correcta es Una porque si se usara más de una vez no se podría reconstruir la dirección completa sin ambigüedad. Por eso no pueden ser dos ni ilimitadas."
    },
    {
        enunciado: "¿Qué tipo de dirección IPv6 empieza por FE80::?",
        opciones: ["Multicast", "Global", "Local en enlace", "Anycast"],
        correcta: 2,
        explicacion: " La correcta es Local en enlace porque FE80::/10 identifica direcciones link-local. No son globales ni multicast."
    },
    {
        enunciado: "¿Qué tipo de dirección IPv6 empieza por FF00::?",
        opciones: ["Unicast", "Anycast", "Multicast", "Link-local"],
        correcta: 2,
        explicacion: " La correcta es Multicast porque FF00::/8 está reservado para multicast en IPv6. No corresponde a unicast, anycast ni link-local."
    },
    {
        enunciado: "Ethernet es un estándar:",
        opciones: ["ISO", "IEEE 802.3", "IEEE 802.11", "TCP/IP"],
        correcta: 1,
        explicacion: " La correcta es IEEE 802.3 porque ese es el estándar de Ethernet. IEEE 802.11 corresponde a Wi-Fi y TCP/IP no es el estándar Ethernet."
    },
    {
        enunciado: "¿Qué tipo de efecto se crea en cables Ethernet enrollados?",
        opciones: [
            "Efecto Joule, que provoca un aumento de temperatura por el paso de corriente",
            "Efecto bobina (inductivo), que genera interferencias electromagnéticas",
            "Efecto fotoeléctrico, debido a la exposición a la luz",
            "Efecto capacitivo, que mejora la transmisión de datos"
        ],
        correcta: 1,
        explicacion: " La correcta es Efecto bobina (inductivo), que genera interferencias electromagnéticas porque al enrollar el cable se favorecen efectos inductivos no deseados. Las otras opciones no describen el problema típico en este contexto."
    },
    {
        enunciado: "¿Cuál es cable Ethernet que soporta mayor cantidad de interferencias?",
        opciones: ["UTP (Unshielded Twisted Pair)", "FTP (Foiled Twisted Pair)", "STP (Shielded Twisted Pair)", "SFTP (Shielded Foiled Twisted Pair)"],
        correcta: 3,
        explicacion: " La correcta es SFTP (Shielded Foiled Twisted Pair) porque es el que ofrece mayor apantallamiento frente a interferencias. UTP es el menos protegido, y FTP y STP ofrecen protección intermedia."
    },
    {
        enunciado: "¿Qué tipo de cable se usa para PC → Switch?",
        opciones: ["Cruzado", "Directo", "Coaxial", "Fibra"],
        correcta: 1,
        explicacion: " La correcta es Directo porque tradicionalmente entre dispositivos distintos, como PC y switch, se usa cable directo. Cruzado se asociaba más a dispositivos del mismo tipo."
    },
    {
        enunciado: "¿Qué categoría de UTP soporta hasta 10 Gbps a 55 m?",
        opciones: ["Cat 5", "Cat 5e", "Cat 6", "Cat 7"],
        correcta: 2,
        explicacion: " La correcta es Cat 6 porque puede soportar 10 Gbps hasta unos 55 metros en condiciones típicas. Cat 5 y 5e no llegan así, y Cat 7 no es la respuesta clásica que suele pedirse aquí."
    },
    {
        enunciado: "¿Qué ventaja principal tiene el cable STP frente al UTP?",
        opciones: ["Más barato", "Más flexible", "Menos interferencias", "Más velocidad"],
        correcta: 2,
        explicacion: " La correcta es Menos interferencias porque el apantallamiento del STP reduce el ruido electromagnético. No suele ser más barato ni más flexible."
    },
    {
        enunciado: "¿Qué medio utiliza pulsos de luz?",
        opciones: ["UTP", "STP", "Coaxial", "Fibra óptica"],
        correcta: 3,
        explicacion: " La correcta es Fibra óptica porque transmite la información mediante luz. Los otros medios son eléctricos."
    },
    {
        enunciado: "¿Qué tipo de fibra se usa para largas distancias (km)?",
        opciones: ["Multimodo", "Monomodo", "UTP", "STP"],
        correcta: 1,
        explicacion: " La correcta es Monomodo porque está pensada para largas distancias y menor dispersión de la señal. Multimodo se usa más en distancias cortas."
    },
    {
        enunciado: "¿Qué topología usa un switch central?",
        opciones: ["Bus", "Anillo", "Estrella", "Malla"],
        correcta: 2,
        explicacion: " La correcta es Estrella porque en esa topología todos los equipos se conectan a un dispositivo central, normalmente un switch. Las demás topologías tienen otra estructura."
    },
    {
        enunciado: "¿Qué topología cae completamente si se rompe el cable principal?",
        opciones: ["Estrella", "Bus", "Malla", "Árbol"],
        correcta: 1,
        explicacion: " La correcta es Bus porque depende de un cable principal compartido. Si ese cable falla, la red deja de funcionar."
    },
    {
        enunciado: "¿Qué topología ofrece mayor redundancia?",
        opciones: ["Bus", "Estrella", "Árbol", "Malla"],
        correcta: 3,
        explicacion: " La correcta es Malla porque ofrece múltiples caminos alternativos entre nodos. Las demás tienen menos redundancia."
    },
    {
        enunciado: "¿Qué topología es más común en LAN modernas?",
        opciones: ["Anillo", "Bus", "Estrella", "Malla"],
        correcta: 2,
        explicacion: " La correcta es Estrella porque es la topología más usada en redes LAN actuales, normalmente con switch central."
    },
    {
        enunciado: "¿Qué dispositivo trabaja principalmente en capa 2?",
        opciones: ["Router", "Switch", "Firewall", "Servidor"],
        correcta: 1,
        explicacion: " La correcta es Switch porque trabaja principalmente en la capa de enlace y usa direcciones MAC. Router trabaja en capa 3."
    },
    {
        enunciado: "¿Qué dispositivo separa redes distintas?",
        opciones: ["Hub", "Switch", "Router", "Repetidor"],
        correcta: 2,
        explicacion: " La correcta es Router porque separa redes distintas y enruta tráfico entre ellas. Hub y repetidor no separan redes, y switch normalmente trabaja dentro de la misma red capa 2."
    },
    {
        enunciado: "¿Qué significa QoS?",
        opciones: ["Calidad de Servicio", "Control de Red", "Protocolo de Seguridad", "Tipo de cable"],
        correcta: 0,
        explicacion: " La correcta es Calidad de Servicio porque QoS significa Quality of Service. Las demás opciones no corresponden a esas siglas."
    },
    {
        enunciado: "¿Qué tráfico suele priorizar QoS?",
        opciones: ["Descargas", "Copias de seguridad", "Videollamadas", "Correos electrónicos"],
        correcta: 2,
        explicacion: " La correcta es Videollamadas porque el tráfico en tiempo real suele ser el que más se beneficia de la priorización. Descargas y copias pueden esperar más, y el correo no suele requerir tanta prioridad."
    }


    /* FUERA DE TEMARIO:
    {
        enunciado: "TACACS+ utiliza por defecto (fuera temario):",
        opciones: ["UDP 49", "TCP 49", "UDP 1812", "TCP 1812"],
        correcta: 1,
        explicacion: " La correcta es TCP 49 porque TACACS+ utiliza ese puerto por defecto. UDP 49 no es la opción estándar; y UDP/TCP 1812 se asocian a RADIUS, no a TACACS+."
    },
    {
            enunciado: "QinQ (802.1ad) permite (fuera temario:",
            opciones: ["Encapsular una VLAN dentro de otra", "Cifrar VLANs", "Enrutar entre VLANs", "Eliminar la VLAN nativa"],
            correcta: 0,
            explicacion: " La correcta es Encapsular una VLAN dentro de otra porque QinQ añade una segunda etiqueta VLAN para transportar VLANs de cliente sobre una VLAN de proveedor. No cifra VLANs; no enruta entre VLANs, porque sigue siendo capa 2; y no elimina la VLAN nativa."
        },
    {
            enunciado: "NPTv6 realiza (fuera temario):",
            opciones: ["Port Address Translation", "Traducción de prefijos IPv6 (1:1)", "Traducción de IPv6 a IPv4", "SLAAC"],
            correcta: 1,
            explicacion: " La correcta es Traducción de prefijos IPv6 (1:1) porque NPTv6 modifica el prefijo IPv6 manteniendo una relación uno a uno entre direcciones. Port Address Translation corresponde a PAT; traducir IPv6 a IPv4 sería NAT64; y SLAAC es autoconfiguración, no traducción."
        },
        {
            enunciado: "NAT64 traduce (fuera temario):",
            opciones: ["IPv4 público a privado", "IPv6 a IPv4", "IPv4 a IPv6 y viceversa sin estado", "MAC a IP"],
            correcta: 1,
            explicacion: " La correcta es IPv6 a IPv4 porque NAT64 permite que clientes IPv6 accedan a servicios IPv4 mediante traducción entre ambos mundos. No se limita a pasar de IPv4 público a privado; la traducción sin estado bidireccional no define NAT64 aquí; y MAC a IP sería otra función, no NAT."
        },
        {
            enunciado: "El BSSID corresponde a (fuera temario):",
            opciones: ["Nombre de red", "MAC de la radio/SSID", "Canal del AP", "Clave PSK"],
            correcta: 1,
            explicacion: " La correcta es MAC de la radio/SSID porque el BSSID identifica la interfaz inalámbrica concreta del punto de acceso y suele coincidir con una dirección MAC. No es el nombre de red, que sería el SSID; no es el canal; y tampoco la clave PSK."
        },
        {
            enunciado: "El roaming rápido en Wi-Fi se asocia a (fuera temario):",
            opciones: ["802.11k/v/r", "802.11i", "802.11ax", "802.11be"],
            correcta: 0,
            explicacion: " La correcta es 802.11k/v/r porque esas extensiones se relacionan con optimización del roaming y transición más eficiente entre puntos de acceso. 802.11i se centra en seguridad; 802.11ax es Wi-Fi 6; y 802.11be es Wi-Fi 7."
        },
        {
            enunciado: "WMM está relacionado con (fuera temario):",
            opciones: ["QoS en Wi-Fi", "Cifrado WPA3", "Canales DFS", "Roaming 802.11r"],
            correcta: 0,
            explicacion: " La correcta es QoS en Wi-Fi porque WMM (Wi-Fi Multimedia) prioriza distintos tipos de tráfico inalámbrico, como voz, vídeo o datos. No es un sistema de cifrado WPA3; no define canales DFS; y no es el estándar de roaming 802.11r."
        },
        {
            enunciado: "En HSRP, 'preempt' implica (fuera temario):",
            opciones: ["Evitar que el switch sea root", "Permitir tomar el rol activo si tiene mayor prioridad", "Bloquear el grupo", "Reiniciar HSRP"],
            correcta: 1,
            explicacion: " La correcta es Permitir tomar el rol activo si tiene mayor prioridad porque preempt deja que un router que vuelve a estar disponible recupere el papel activo si su prioridad es superior. No tiene relación con el root bridge de STP; no bloquea el grupo; y tampoco reinicia HSRP por sí mismo."
        },
        {
            enunciado: "Comando para dar preferencia a un router como activo en HSRP (fuera temario):",
            opciones: ["standby 1 priority 110", "hsrp priority 110", "standby group 1 weight 110", "glbp 1 priority 110"],
            correcta: 0,
            explicacion: " La correcta es standby 1 priority 110 porque en HSRP la prioridad del grupo se ajusta con esa sintaxis para influir en qué router será el activo. hsrp priority 110 no es la forma clásica en ese contexto; standby group 1 weight 110 no es el comando esperado; y glbp 1 priority 110 pertenece a GLBP, no a HSRP."
        },
        {
            enunciado: "¿Qué método de acceso al medio describía Ethernet clásico? (fuera temario):",
            opciones: ["CSMA/CA", "Token Passing", "CSMA/CD", "TDMA"],
            correcta: 2,
            explicacion: " La correcta es CSMA/CD (Carrier Sense Multiple Access with Collision Detection) porque Ethernet clásico en medios compartidos detectaba colisiones y retransmitía. CSMA/CA se usa sobre todo en Wi-Fi; Token Passing pertenece a otras tecnologías; y TDMA reparte tiempos, no es el método clásico de Ethernet."
        },
    {
            enunciado: "¿Qué protocolo de agregación de enlaces es estándar? (fuera temario):",
            opciones: ["PAgP", "LACP", "DTP", "VTP"],
            correcta: 1,
            explicacion: " La correcta es LACP porque LACP (Link Aggregation Control Protocol) es el protocolo estándar para EtherChannel o agregación de enlaces. PAgP es propietario de Cisco; DTP negocia troncales; y VTP distribuye información de VLAN, no agrega enlaces."
        },
        {
                enunciado: "LACP opera en los modos (fuera temario):",
            opciones: ["on/off", "active/passive", "desirable/auto", "root/backup"],
            correcta: 1,
            explicacion: " La correcta es active/passive porque esos son los modos de negociación propios de LACP. desirable/auto pertenece a PAgP; on/off no es la pareja clásica de LACP; y root/backup no corresponde a este protocolo."
        }
    {
        enunciado: "PAgP opera en los modos (fuera temario):",
        opciones: ["active/passive", "desirable/auto", "on/off", "forward/block"],
        correcta: 1,
        explicacion: " La correcta es desirable/auto porque esos son los modos habituales de PAgP, el protocolo propietario de Cisco para agregación de enlaces. active/passive pertenece a LACP; on/off no es la respuesta típica de negociación PAgP; y forward/block son conceptos de STP, no de EtherChannel."
    },
    {
        enunciado: "DTP es un protocolo para (fuera temario):",
        opciones: ["Negociar troncales en Cisco", "Autenticación 802.1X", "QoS en Wi-Fi", "Agregación de enlaces estándar"],
        correcta: 0,
        explicacion: " La correcta es Negociar troncales en Cisco porque DTP (Dynamic Trunking Protocol) sirve para decidir automáticamente si un puerto funcionará como trunk o access. No se usa para autenticación 802.1X; no tiene relación con QoS en Wi-Fi; y tampoco es el protocolo estándar de agregación de enlaces, que sería LACP."
    },
    {
        enunciado: "Mejor práctica respecto a DTP en puertos trunk (fuera temario):",
        opciones: ["Dejar en dynamic desirable", "Forzar trunk o access y desactivar DTP", "Usar auto en ambos extremos", "Habilitar DTP en servidores"],
        correcta: 1,
        explicacion: " La correcta es Forzar trunk o access y desactivar DTP porque así se evita negociación innecesaria y se mejora el control y la seguridad del puerto. Dejar dynamic desirable o auto puede provocar negociaciones no deseadas; y habilitar DTP en servidores no es una práctica recomendada, ya que normalmente no deben negociar troncales."
    },
    {
        enunciado: "¿Qué protocolo se usa típicamente para sincronizar la hora en red? (fuera temario):",
        opciones: ["NTP", "SMTP", "TFTP", "RDP"],
        correcta: 0,
        explicacion: " La correcta es NTP porque NTP (Network Time Protocol) se usa para sincronizar la hora entre equipos de una red. SMTP (Simple Mail Transfer Protocol) es correo; TFTP (Trivial File Transfer Protocol) es transferencia simple de archivos; y RDP (Remote Desktop Protocol) se usa para acceso remoto."
    },
    
    {
        enunciado: "¿Qué estándar define LLDP? (fuera temario):",
        opciones: ["IEEE 802.1AB", "IEEE 802.3ad", "IEEE 802.1Q", "IEEE 802.11i"],
        correcta: 0,
        explicacion: " La correcta es IEEE 802.1AB porque ese estándar define LLDP (Link Layer Discovery Protocol), usado para que los dispositivos anuncien su identidad e información básica a equipos vecinos. IEEE 802.3ad está relacionado con agregación de enlaces; IEEE 802.1Q con VLAN etiquetadas; e IEEE 802.11i con seguridad en redes Wi-Fi."
    },
    {
        enunciado: "¿Qué comando habilita LLDP globalmente en un switch Cisco? (fuera temario):",
        opciones: ["lldp run", "cdp enable", "enable lldp", "lldp discovery enable"],
        correcta: 0,
        explicacion: " La correcta es lldp run porque ese comando activa LLDP (Link Layer Discovery Protocol) de forma global en el switch Cisco. cdp enable corresponde a CDP; y enable lldp y lldp discovery enable no son los comandos estándar correctos para habilitar LLDP globalmente."
    },
    {
        enunciado: "VRRP es un estándar definido por (fuera temario):",
        opciones: ["IEEE", "IETF", "ISO", "ETSI"],
        correcta: 1,
        explicacion: " La correcta es IETF porque VRRP está definido mediante RFC del IETF. IEEE define muchos estándares de capa 2 y Wi-Fi; ISO tiene otros marcos de estandarización; y ETSI no es quien define VRRP."
    }, 
    {
        enunciado: "¿Qué FHRP es propietario de Cisco?",
        opciones: ["VRRP", "GLBP", "HSRP", "CARP"],
        correcta: 2,
        explicacion: " La correcta es HSRP porque HSRP (Hot Standby Router Protocol) es un FHRP propietario de Cisco. VRRP es estándar; CARP no es el protocolo Cisco clásico en este contexto; y aunque GLBP también es de Cisco, la respuesta típica esperada cuando se pregunta por el FHRP propietario más conocido es HSRP."
    },
    {
        enunciado: "¿Qué versión de SNMP incorpora autenticación y cifrado?",
        opciones: ["SNMPv1", "SNMPv2c", "SNMPv3", "Todas"],
        correcta: 2,
        explicacion: " La correcta es SNMPv3 porque es la versión que añade autenticación y cifrado, mejorando la seguridad respecto a SNMPv1 y SNMPv2c. SNMPv1 y SNMPv2c usan comunidades y no aportan ese nivel de protección; y no todas las versiones lo incorporan."
    },
    {
        enunciado: "En IPv6 RA, el flag 'M' indica:",
        opciones: ["Usar DHCPv6 para todo (managed)", "No hay IPv6", "Usar SLAAC exclusivamente", "Gateway no disponible"],
        correcta: 0,
        explicacion: " La correcta es Usar DHCPv6 para todo (managed) porque el flag M de un RA (Router Advertisement) indica modo administrado y señala que la dirección debe obtenerse mediante DHCPv6. No significa que no haya IPv6; tampoco obliga a usar solo SLAAC; y no indica ausencia de gateway, ya que el router sigue anunciándose en el RA."
    },
    {
        enunciado: "¿Qué estándar de PoE permite ~30W por puerto? (fuera temario):",
        opciones: ["802.3af", "802.3at (PoE+)", "802.3bt Tipo 3", "802.3bt Tipo 4"],
        correcta: 1,
        explicacion: " La correcta es 802.3at (PoE+) porque ese estándar permite aproximadamente 30 W por puerto. 802.3af ofrece menos potencia; y 802.3bt Tipo 3 y Tipo 4 permiten más, por lo que no encajan con ese valor aproximado."
    },
    {
        enunciado: "En DHCP, la opción que entrega la puerta de enlace por defecto es (fuera temario):",
        opciones: ["Opción 3", "Opción 6", "Opción 15", "Opción 43"],
        correcta: 0,
        explicacion: " La correcta es Opción 3 porque en DHCP (Dynamic Host Configuration Protocol) esa opción entrega la puerta de enlace por defecto al cliente. La opción 6 suele indicar servidores DNS (Domain Name System); la 15 el sufijo de dominio; y la 43 se usa para información específica de fabricante."
    },
    {
        enunciado: "¿Qué herramienta valida continuidad y mapa de pares en campo? (fuera temario):", 
        opciones: ["Certificador (Fluke)", "Tester básico", "Analizador de espectro", "OTDR obligatoriamente"],
        correcta: 1,
        explicacion: " La correcta es Tester básico porque es la herramienta habitual para comprobar continuidad y mapa de pares en instalaciones de cobre. Un certificador como Fluke hace pruebas más avanzadas y completas; un analizador de espectro tiene otro uso; y un OTDR (Optical Time Domain Reflectometer) se emplea en fibra óptica, no obligatoriamente aquí."
    },
    {
        enunciado: "En OSPF, ¿qué LSA anuncia redes externas? (fuera temario)",
        opciones: ["Tipo 1", "Tipo 3", "Tipo 5", "Tipo 7"],
        correcta: 2,
        explicacion: " La correcta es Tipo 5 porque las LSA de tipo 5 se usan para anunciar rutas externas en OSPF. Las tipo 1 describen routers dentro del área; las tipo 3 resumen redes entre áreas; y las tipo 7 se usan en NSSA antes de su traducción."
    },
    {
        enunciado: "¿Qué área OSPF permite LSAs tipo 7? (fuera temario)",
        opciones: ["Backbone", "Stub", "NSSA", "Totally stubby"],
        correcta: 2,
        explicacion: " La correcta es NSSA porque en un área NSSA (Not-So-Stubby Area) se utilizan LSA de tipo 7 para introducir rutas externas antes de convertirlas en tipo 5. Backbone, Stub y Totally Stubby no usan ese comportamiento como rasgo definitorio."
    },
    {
        enunciado: "¿Qué comando guarda logs en buffer en IOS? (fuera temario)",
        opciones: ["logging buffered 4096", "log buffer on", "service timestamps log", "logging console"],
        correcta: 0,
        explicacion: " La correcta es logging buffered 4096 porque ese comando activa el almacenamiento de logs en el buffer del dispositivo e indica su tamaño. log buffer on no es el comando estándar; service timestamps log añade marcas de tiempo; y logging console envía mensajes a la consola, no al buffer."
    },
    {
        enunciado: "¿Qué atributo BGP es local y específico de Cisco? (fuera temario)",
        opciones: ["LOCAL_PREF", "MED", "WEIGHT", "AS-PATH"],
        correcta: 2,
        explicacion: " La correcta es WEIGHT porque es un atributo local de Cisco y no se propaga a otros routers BGP. LOCAL_PREF sí se usa dentro del AS; MED puede anunciarse a vecinos externos; y AS-PATH refleja el camino por sistemas autónomos."
    },
{
        enunciado: "Distancia administrativa de eBGP por defecto (fuera temario):",
        opciones: ["20", "90", "110", "200"],
        correcta: 0,
        explicacion: " La correcta es 20 porque eBGP tiene una distancia administrativa muy baja por defecto en Cisco, de modo que suele preferirse frente a muchas otras rutas. 200 es la de iBGP; 110 la de OSPF; y 90 la de EIGRP interno."
    },
    {
        enunciado: "Distancia administrativa de iBGP (fuera temario):",
        opciones: ["90", "110", "170", "200"],
        correcta: 3,
        explicacion: " La correcta es 200 porque iBGP tiene por defecto una distancia administrativa mayor que eBGP en Cisco. 20 corresponde a eBGP; 110 a OSPF; y 90 a EIGRP interno."
    },
    */

];