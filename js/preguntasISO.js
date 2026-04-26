const preguntasISO = [

  /* Preguntas test del repositorio de Jesús */
  /* Virtualización  */
  {
    enunciado: "¿Qué es el núcleo (kernel) de un sistema operativo?",
    opciones: [
      "Un programa de ofimática",
      "El componente que gestiona hardware, procesos y recursos",
      "Un antivirus integrado",
      "Una carpeta donde se guardan los usuarios"
    ],
    correcta: 1,
    explicacion: " La correcta es El componente que gestiona hardware, procesos y recursos porque el kernel es la parte central del sistema operativo y se encarga de comunicar software y hardware. No es un programa de ofimática ni un antivirus; y tampoco es una carpeta de usuarios, sino el núcleo que controla recursos como memoria, CPU y dispositivos."
  },
  {
    enunciado: "¿Qué comando permite ver la versión del núcleo en Linux?",
    opciones: [
      "ping",
      "uname -r",
      "sysinfo",
      "kernel --show"
    ],
    correcta: 1,
    explicacion: " La correcta es uname -r porque ese comando muestra la versión del kernel cargado en el sistema Linux; ping sirve para probar conectividad de red; sysinfo no es el comando estándar esperado aquí; y kernel --show no es una orden habitual válida en Linux para este propósito."
  },
  {
    enunciado: "¿Qué utilidad muestra mensajes del arranque relacionados con el kernel?",
    opciones: [
      "dmesg",
      "sudo start-kernel",
      "bootmsg",
      "kernelview"
    ],
    correcta: 0,
    explicacion: " La correcta es dmesg porque muestra mensajes del kernel, especialmente los relacionados con el arranque y el hardware detectado. sudo start-kernel, bootmsg y kernelview no son las utilidades estándar habituales de Linux para consultar esos mensajes."
  },
  {
    enunciado: "¿Qué es un hipervisor?",
    opciones: [
      "Un servidor DNS",
      "Un software que permite ejecutar máquinas virtuales",
      "Una herramienta para editar particiones",
      "Un programa para comprimir archivos"
    ],
    correcta: 1,
    explicacion: " La correcta es Un software que permite ejecutar máquinas virtuales porque el hipervisor se encarga de crear y gestionar máquinas virtuales sobre el hardware físico. No es un servidor DNS; no edita particiones; y tampoco es una herramienta de compresión."
  },
  {
    enunciado: "¿Qué programa se usa para virtualización en tu práctica?",
    opciones: [
      "Photoshop",
      "VirtualBox",
      "Premiere",
      "Notepad++"
    ],
    correcta: 1,
    explicacion: " La correcta es VirtualBox porque es un programa de virtualización usado para crear y ejecutar máquinas virtuales. Photoshop y Premiere son programas multimedia; y Notepad++ es un editor de texto, no una herramienta de virtualización."
  },
  {
    enunciado: "¿Qué debes instalar para tener un servidor Linux funcional?",
    opciones: [
      "Ubuntu Server",
      "Windows XP",
      "Android OS",
      "MS-DOS"
    ],
    correcta: 0,
    explicacion: " La correcta es Ubuntu Server porque es una distribución Linux pensada para funcionar como servidor. Windows XP y MS-DOS no son sistemas Linux modernos para este uso; y Android OS está orientado a dispositivos móviles, no a un servidor Linux típico."
  },
  {
    enunciado: "UEFI es…",
    opciones: [
      "La versión moderna del BIOS",
      "Un sistema de archivos de Linux",
      "Un servicio de impresión",
      "Un antivirus de arranque"
    ],
    correcta: 0,
    explicacion: " La correcta es La versión moderna del BIOS porque UEFI sustituye al BIOS tradicional y gestiona el arranque del sistema de forma más moderna. No es un sistema de archivos; no es un servicio de impresión; y tampoco un antivirus."
  },
  {
    enunciado: "MBR y GPT se usan para…",
    opciones: [
      "Crear usuarios",
      "Organizar particiones en un disco",
      "Configurar redes inalámbricas",
      "Instalar drivers de vídeo"
    ],
    correcta: 1,
    explicacion: " La correcta es Organizar particiones en un disco porque MBR y GPT son esquemas de particionado. No sirven para crear usuarios, ni para redes Wi-Fi, ni para instalar controladores de vídeo."
  },
  {
    enunciado: "¿Qué gestor de arranque es común en Linux moderno?",
    opciones: [
      "GRUB",
      "SYSBOOT",
      "UBOOT",
      "BOOTX"
    ],
    correcta: 0,
    explicacion: " La correcta es GRUB porque es uno de los gestores de arranque más comunes en sistemas Linux actuales. SYSBOOT, UBOOT y BOOTX no son la respuesta típica esperada aquí para un Linux de escritorio o servidor general."
  },
  {
    enunciado: "En modo Bridge, la máquina virtual…",
    opciones: [
      "No tiene IP",
      "Se conecta a la red como un dispositivo más con su propia IP",
      "Solo se comunica consigo misma",
      "Pierde acceso al adaptador de red"
    ],
    correcta: 1,
    explicacion: " La correcta es Se conecta a la red como un dispositivo más con su propia IP porque en modo Bridge la máquina virtual aparece en la red igual que otro equipo físico. No se queda sin IP; no se comunica solo consigo misma; y no pierde acceso al adaptador, sino que lo usa a través del puente."
  },
  {
    enunciado: "Ping sirve para…",
    opciones: [
      "Instalar actualizaciones",
      "Probar conectividad entre dos dispositivos",
      "Crear cuentas de usuario",
      "Formatear particiones"
    ],
    correcta: 1,
    explicacion: " La correcta es Probar conectividad entre dos dispositivos porque ping verifica si hay comunicación de red entre origen y destino. No instala actualizaciones; no crea usuarios; y tampoco formatea discos o particiones."
  },
  {
    enunciado: "¿Qué herramienta crea un USB de instalación de Windows 10?",
    opciones: [
      "Media Creation Tool",
      "winusb.exe",
      "usbmaker",
      "Disk Creator Pro"
    ],
    correcta: 0,
    explicacion: " La correcta es Media Creation Tool porque es la herramienta oficial de Microsoft para crear un USB de instalación de Windows 10. Las otras opciones no son la utilidad estándar esperada en este contexto."
  },
  {
    enunciado: "¿Para qué sirve mbr2gpt /validate durante una instalación?",
    opciones: [
      "Para crear un usuario nuevo",
      "Para comprobar si un disco MBR puede convertirse a GPT",
      "Para borrar el disco duro",
      "Para activar Windows"
    ],
    correcta: 1,
    explicacion: " La correcta es Para comprobar si un disco MBR puede convertirse a GPT porque ese parámetro valida si la conversión es posible sin ejecutarla todavía. No crea usuarios; no borra el disco; y no sirve para activar Windows."
  },
  {
    enunciado: "¿Qué es WSL en Windows?",
    opciones: [
      "Un servidor web",
      "Un subsistema que permite ejecutar Linux dentro de Windows",
      "Un gestor de particiones",
      "Un editor del registro"
    ],
    correcta: 1,
    explicacion: " La correcta es Un subsistema que permite ejecutar Linux dentro de Windows porque WSL significa Windows Subsystem for Linux. No es un servidor web; no gestiona particiones; y tampoco es un editor del registro."
  },
  {
    enunciado: "Si creas un usuario local en Windows y lo añades al grupo “Usuarios de Escritorio remoto”, podrás…",
    opciones: [
      "Instalar actualizaciones",
      "Conectarte por RDP con ese usuario",
      "Usarlo solo en modo seguro",
      "Desactivar el firewall"
    ],
    correcta: 1,
    explicacion: " La correcta es Conectarte por RDP con ese usuario porque pertenecer a ese grupo permite iniciar sesión mediante Escritorio remoto. No concede por sí solo permisos para instalar actualizaciones; no limita el uso al modo seguro; y tampoco desactiva el firewall."
  },
  {
    enunciado: "¿Qué se instala en Windows Server para gestionar dominios?",
    opciones: [
      "DHCP",
      "Active Directory Domain Services",
      "Hyper-V",
      "Paint"
    ],
    correcta: 1,
    explicacion: " La correcta es Active Directory Domain Services porque ese rol permite gestionar dominios, usuarios, equipos y políticas en Windows Server. DHCP asigna IPs; Hyper-V virtualiza; y Paint no tiene relación con la administración de dominios."
  },
  {
    enunciado: "En un entorno con Active Directory, una carpeta “Perfiles” suele usarse para…",
    opciones: [
      "Guardar fondos de pantalla",
      "Almacenar perfiles móviles o directorios personales de usuarios del dominio",
      "Compartir vídeos",
      "Guardar copias del kernel"
    ],
    correcta: 1,
    explicacion: " La correcta es Almacenar perfiles móviles o directorios personales de usuarios del dominio porque en Active Directory es habitual usar carpetas compartidas para perfiles o datos de usuario. No se refiere solo a fondos de pantalla; no es una carpeta pensada para vídeos en general; y no guarda copias del kernel."
  },

  /* Linux, fhs, lvm y raid  */
  {
    enunciado: "¿Qué muestra el comando ls -l /?",
    opciones: [
      "El contenido de la carpeta personal del usuario",
      "Los directorios principales del sistema Linux",
      "Los procesos en ejecución",
      "La configuración de red actual"
    ],
    correcta: 1,
    explicacion: " La correcta es Los directorios principales del sistema Linux porque ls -l / lista el contenido del directorio raíz /. No muestra la carpeta personal del usuario salvo que estés dentro de ella; no lista procesos; y tampoco enseña la configuración de red."
  },
  {
    enunciado: "¿Qué directorio suele almacenar archivos de configuración del sistema?",
    opciones: [
      "/etc",
      "/home",
      "/tmp",
      "/boot/grub/users"
    ],
    correcta: 0,
    explicacion: " La correcta es /etc porque en Linux ahí se almacenan muchos archivos de configuración del sistema y servicios. /home contiene datos de usuarios; /tmp archivos temporales; y /boot/grub/users no es el directorio general estándar de configuración."
  },
  {
    enunciado: "¿Qué comando te permite consultar la jerarquía estándar del sistema de archivos (FHS)?",
    opciones: [
      "man list",
      "man hier",
      "man root",
      "fhs --help"
    ],
    correcta: 1,
    explicacion: " La correcta es man hier porque esa página del manual describe la jerarquía estándar de directorios del sistema Linux. man list y man root no son la referencia típica esperada aquí; y fhs --help no es el comando estándar habitual."
  },
  {
    enunciado: "¿Qué herramienta se usa para crear particiones en un disco?",
    opciones: [
      "fdisk o gparted",
      "ssh",
      "mkhome",
      "passwd"
    ],
    correcta: 0,
    explicacion: " La correcta es fdisk o gparted porque ambas herramientas permiten crear y gestionar particiones. ssh sirve para acceso remoto; mkhome no es la utilidad típica estándar aquí; y passwd cambia contraseñas."
  },
  {
    enunciado: "¿Qué hace el comando pvcreate?",
    opciones: [
      "Crea un archivo de texto vacío",
      "Convierte una partición en un volumen físico para LVM",
      "Crea un RAID 5 automáticamente",
      "Reinicia el gestor de volúmenes"
    ],
    correcta: 1,
    explicacion: " La correcta es Convierte una partición en un volumen físico para LVM porque pvcreate inicializa un disco o partición para usarlo con LVM (Logical Volume Manager). No crea archivos de texto; no crea un RAID automáticamente; y no reinicia el gestor de volúmenes."
  },
  {
    enunciado: "¿Para qué sirve vgcreate?",
    opciones: [
      "Crear un nuevo usuario",
      "Crear un grupo de volúmenes a partir de varios PV",
      "Crear un directorio compartido",
      "Convertir un disco a NTFS"
    ],
    correcta: 1,
    explicacion: " La correcta es Crear un grupo de volúmenes a partir de varios PV porque vgcreate une volúmenes físicos en un volumen group dentro de LVM. No crea usuarios; no crea carpetas compartidas; y no convierte discos a NTFS."
  },
  {
    enunciado: "¿Qué permite lvcreate?",
    opciones: [
      "Crear un volumen lógico dentro del grupo de volúmenes",
      "Instalar paquetes",
      "Cambiar permisos de usuario",
      "Eliminar la tabla de particiones"
    ],
    correcta: 0,
    explicacion: " La correcta es Crear un volumen lógico dentro del grupo de volúmenes porque lvcreate genera el volumen lógico que luego puedes formatear y montar. No instala paquetes; no cambia permisos; y no elimina la tabla de particiones."
  },
  {
    enunciado: "¿Qué debes hacer antes de montar un LV o RAID en un directorio?",
    opciones: [
      "Cambiar el hostname",
      "Formatearlo con un sistema de archivos (por ejemplo, mkfs.ext4)",
      "Reiniciar el ordenador",
      "Crear un usuario root nuevo"
    ],
    correcta: 1,
    explicacion: " La correcta es Formatearlo con un sistema de archivos (por ejemplo, mkfs.ext4) porque antes de montarlo debe tener un sistema de archivos utilizable. Cambiar el hostname no influye; reiniciar no lo prepara por sí solo; y no necesitas crear otro usuario root."
  },
  {
    enunciado: "Si añades tres discos de 1GB a una VM Linux y quieres RAID 5, usas el comando:",
    opciones: [
      "mdadm --create /dev/md0 --level=5 --raid-devices=3",
      "raid --new",
      "create-raid5 /dev/md0",
      "mkfs.raid /dev/md0"
    ],
    correcta: 0,
    explicacion: " La correcta es mdadm --create /dev/md0 --level=5 --raid-devices=3 porque mdadm es la herramienta estándar para crear RAID por software en Linux. Las otras opciones no son comandos habituales válidos para crear un RAID 5."
  },
  {
    enunciado: "¿Qué característica tiene RAID 5?",
    opciones: [
      "Copias idénticas (mirroring) de todos los discos",
      "Divide datos + paridad distribuida, permitiendo que falle 1 disco",
      "No ofrece tolerancia a fallos",
      "Solo funciona con 2 discos"
    ],
    correcta: 1,
    explicacion: " La correcta es Divide datos + paridad distribuida, permitiendo que falle 1 disco porque RAID 5 distribuye datos y paridad entre varios discos para tolerar un fallo. El mirroring corresponde más a RAID 1; sí ofrece tolerancia a fallos; y no funciona solo con 2 discos, normalmente requiere al menos 3."
  },
  {
    enunciado: "¿Qué comando formatea un RAID recién creado para poder usarlo?",
    opciones: [
      "mkraid.ext4",
      "mkfs.ext4 /dev/md0",
      "format-raid /dev/md0",
      "raidformat /dev/md0"
    ],
    correcta: 1,
    explicacion: " La correcta es mkfs.ext4 /dev/md0 porque crea un sistema de archivos ext4 sobre el dispositivo RAID. Las otras opciones no son los comandos estándar esperados en Linux para este propósito."
  },
  {
    enunciado: "¿Qué debes hacer para usar el RAID 5 tras formatearlo?",
    opciones: [
      "Compilar el kernel",
      "Montarlo en un directorio (por ejemplo, /mnt/raid5)",
      "Desinstalar mdadm",
      "Activar UEFI"
    ],
    correcta: 1,
    explicacion: " La correcta es Montarlo en un directorio (por ejemplo, /mnt/raid5) porque, una vez formateado, debes montarlo para acceder a su contenido. Compilar el kernel no hace falta; desinstalar mdadm sería contraproducente; y activar UEFI no tiene relación con usar el RAID ya creado."
  },
  {
    enunciado: "¿Dónde se encuentran los directorios personales de los usuarios?",
    opciones: [
      "/home",
      "/root",
      "/user",
      "/var/users"
    ],
    correcta: 0,
    explicacion: " La correcta es /home porque ahí suelen estar los directorios personales de los usuarios normales en Linux. /root es el directorio del superusuario; /user no es la ruta estándar; y /var/users tampoco es la ubicación habitual."
  },
  {
    enunciado: "¿Para qué se utiliza el paquete mdadm en Linux?",
    opciones: [
      "Para gestionar impresoras de red",
      "Para administrar RAID por software",
      "Para configurar cortafuegos",
      "Para crear máquinas virtuales"
    ],
    correcta: 1,
    explicacion: " La correcta es Para administrar RAID por software porque mdadm es la herramienta clásica en Linux para crear, gestionar y consultar arrays RAID software. No se usa para impresoras; no configura cortafuegos; y no es una herramienta de virtualización."
  },
  {
    enunciado: "¿Qué comando instala mdadm en una distro basada en Debian/Ubuntu?",
    opciones: [
      "sudo apt-get update && sudo apt-get install -y mdadm",
      "sudo yum install mdadm",
      "sudo install mdadm",
      "sudo pacman -S openssh"
    ],
    correcta: 0,
    explicacion: " La correcta es sudo apt-get update && sudo apt-get install -y mdadm porque apt-get es el gestor típico en Debian y Ubuntu. yum se usa en otras familias; sudo install mdadm no es el método estándar; y pacman -S openssh instala otro paquete y además pertenece a otra distribución."
  },
  {
    enunciado: "Si quieres crear un RAID 5 en /dev/md0 con los discos /dev/sdb /dev/sdc /dev/sdd, ¿qué comando es correcto?",
    opciones: [
      "mdadm --create /dev/md0 --level=1 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd",
      "mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd",
      "mdadm --new-raid5 /dev/md0 /dev/sdb /dev/sdc /dev/sdd",
      "raid5 --build /dev/md0 /dev/sdb /dev/sdc /dev/sdd"
    ],
    correcta: 1,
    explicacion: " La correcta es mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd porque indica correctamente nivel RAID, número de discos y dispositivos. La primera usa level=1, que sería RAID 1; y las otras dos no son sintaxis estándar válidas de mdadm."
  },
  {
    enunciado: "Después de crear un RAID en /dev/md0, ¿qué debes hacer para poder almacenar datos en él?",
    opciones: [
      "Ejecutar mkfs.ext4 /dev/md0 para formatearlo",
      "Ejecutar fsaeraid /dev/md0",
      "Reiniciar el sistema para que se formatee solo",
      "Cambiar el kernel por uno nuevo"
    ],
    correcta: 0,
    explicacion: " La correcta es Ejecutar mkfs.ext4 /dev/md0 para formatearlo porque el RAID necesita un sistema de archivos antes de poder guardar datos. fsaeraid no es el comando estándar; no se formatea solo al reiniciar; y cambiar el kernel no es necesario para este paso."
  },

  {
    enunciado: "¿Qué comando te muestra información detallada de un array RAID concreto, como nivel, discos y estado?",
    opciones: [
      "mdadm --detail /dev/md0",
      "raidstatus /dev/md0",
      "cat /etc/raid.conf",
      "showraid --all"
    ],
    correcta: 0,
    explicacion: " La correcta es mdadm --detail /dev/md0 porque ese comando muestra detalles del array RAID, como nivel, discos miembros y estado. Las otras opciones no son el comando estándar esperado para consultar esa información de forma directa."
  },

  /* Copias, permisos y firewall */

  {
    enunciado: "En PowerShell, ¿qué hace este comando? Copy-Item -Path \"C:\\Users\\Usuario\\Documentos\" -Destination \"D:\\Backup\\Documentos\" -Recurse -Force",
    opciones: [
      "Copia solo los archivos modificados hoy",
      "Copia toda la carpeta Documentos, con subcarpetas, sobrescribiendo si es necesario",
      "Mueve la carpeta Documentos a D:\\Backup",
      "Comprime automáticamente la carpeta en ZIP"
    ],
    correcta: 1,
    explicacion: " La correcta es Copia toda la carpeta Documentos, con subcarpetas, sobrescribiendo si es necesario porque Copy-Item con -Recurse copia recursivamente y -Force fuerza la operación en ciertos casos. No mueve la carpeta, porque eso sería otro comando; no filtra solo archivos de hoy; y tampoco comprime a ZIP."
  },
  {
    enunciado: "¿Qué comando en PowerShell crea un archivo ZIP con el contenido de una carpeta?",
    opciones: [
      "New-ZipFile",
      "Compress-Archive",
      "Zip-Item",
      "Archive-Now"
    ],
    correcta: 1,
    explicacion: " La correcta es Compress-Archive porque es el cmdlet estándar de PowerShell para crear archivos ZIP. Las otras opciones no son el comando estándar habitual esperado en este contexto."
  },
  {
    enunciado: "En el ejemplo, ¿qué hace este comando? Compress-Archive -Path \"C:\\Users\\Usuario\\Documentos\" -DestinationPath \"D:\\Backup\\Backup_Documentos.zip\"",
    opciones: [
      "Crea un ZIP con la carpeta Documentos en la ruta indicada",
      "Descomprime un ZIP en la carpeta Documentos",
      "Sincroniza Documentos con D:\\Backup",
      "Mueve Documentos al disco D sin comprimir"
    ],
    correcta: 0,
    explicacion: " La correcta es Crea un ZIP con la carpeta Documentos en la ruta indicada porque Compress-Archive comprime el contenido especificado en el archivo destino. No descomprime; no sincroniza carpetas; y tampoco mueve la carpeta sin comprimir."
  },
  {
    enunciado: "En Linux, ¿qué hace el comando siguiente? cp -r /home/usuario/Documentos /media/usuario/backup_docs",
    opciones: [
      "Copia solo los archivos de texto",
      "Copia recursivamente la carpeta Documentos al destino",
      "Mueve la carpeta Documentos y borra el original",
      "Elimina los archivos duplicados"
    ],
    correcta: 1,
    explicacion: " La correcta es Copia recursivamente la carpeta Documentos al destino porque cp -r copia directorios y su contenido de forma recursiva. No mueve ni borra el original; no selecciona solo archivos de texto; y tampoco elimina duplicados."
  },
  {
    enunciado: "En Linux, ¿qué comando permite cambiar los permisos de un archivo usando la notación numérica (por ejemplo, 755)?",
    opciones: [
      "chmod",
      "chown",
      "chgrp",
      "permset"
    ],
    correcta: 0,
    explicacion: " La correcta es chmod porque ese comando cambia los permisos de archivos y directorios, también con notación numérica como 755. chown cambia propietario; chgrp cambia grupo; y permset no es el comando estándar de Linux para esta función."
  },
  {
    enunciado: "Si ejecutas chmod 750 fichero, ¿qué permisos tiene el grupo sobre ese archivo?",
    opciones: [
      "Solo lectura",
      "Lectura y ejecución",
      "Lectura, escritura y ejecución",
      "Solo escritura"
    ],
    correcta: 1,
    explicacion: " La correcta es Lectura y ejecución porque en 750 el propietario tiene 7, el grupo 5 y otros 0. El 5 equivale a lectura (4) más ejecución (1). No incluye escritura, así que las otras combinaciones no encajan."
  },
  {
    enunciado: "En la salida de ls -l, ¿qué indica la primera columna, por ejemplo -rwxr-xr--?",
    opciones: [
      "El tamaño del archivo",
      "El tipo de archivo y los permisos de propietario, grupo y otros",
      "El nombre del propietario y del grupo",
      "La fecha de creación del archivo"
    ],
    correcta: 1,
    explicacion: " La correcta es El tipo de archivo y los permisos de propietario, grupo y otros porque esa cadena muestra primero el tipo y después los permisos en bloques. No indica tamaño; no es el nombre del propietario; y tampoco corresponde a la fecha de creación."
  },
  {
    enunciado: "¿Cuál de las siguientes letras representa el permiso de ejecución en Linux?",
    opciones: [
      "r",
      "w",
      "x",
      "p"
    ],
    correcta: 2,
    explicacion: " La correcta es x porque en Linux los permisos se representan con r para lectura, w para escritura y x para ejecución. p no es la letra estándar de permiso de ejecución."
  },
  {
    enunciado: "¿Qué ocurre al ejecutar sudo ufw enable en Ubuntu?",
    opciones: [
      "Activa el firewall y aplica las reglas configuradas",
      "Elimina todas las reglas",
      "Reinicia la red",
      "Permite todo el tráfico"
    ],
    correcta: 0,
    explicacion: " La correcta es Activa el firewall y aplica las reglas configuradas porque ufw enable pone en funcionamiento UFW con las reglas actuales. No elimina reglas; no reinicia la red como función principal; y no permite todo el tráfico por defecto."
  },
  {
    enunciado: "¿Qué efecto tiene sudo ufw allow ssh?",
    opciones: [
      "Bloquea SSH",
      "Reinicia el servicio SSH",
      "Permite conexiones entrantes al puerto SSH",
      "Elimina reglas"
    ],
    correcta: 2,
    explicacion: " La correcta es Permite conexiones entrantes al puerto SSH porque esa regla abre el servicio SSH en el firewall. No lo bloquea; no reinicia el servicio; y tampoco elimina reglas existentes."
  },
  {
    enunciado: "¿Qué comando permite ver reglas activas numeradas en UFW?",
    opciones: [
      "ufw show",
      "ufw list",
      "ufw status",
      "ufw status numbered"
    ],
    correcta: 3,
    explicacion: " La correcta es ufw status numbered porque muestra el estado y las reglas numeradas, útil para borrarlas por número. ufw status enseña estado sin esa numeración concreta; y ufw show o ufw list no son la forma estándar esperada aquí."
  },
  {
    enunciado: "¿Qué ocurre si ejecutas sudo ufw disable?",
    opciones: [
      "Se desactiva el firewall completamente",
      "Se eliminan reglas",
      "Se bloquea todo el tráfico",
      "Solo desactiva SSH"
    ],
    correcta: 0,
    explicacion: " La correcta es Se desactiva el firewall completamente porque ufw disable apaga UFW. No elimina necesariamente las reglas guardadas; no bloquea todo el tráfico; y no afecta solo a SSH."
  },

  /* Monitorización */
  {
    enunciado: "El comando journalctl -u sshd permite:",
    opciones: [
      "Ver CPU",
      "Ver usuarios",
      "Ver red",
      "Ver logs del servicio SSH"
    ],
    correcta: 3,
    explicacion: " La correcta es Ver logs del servicio SSH porque journalctl -u sshd filtra el diario del sistema por la unidad sshd. No muestra uso de CPU; no lista usuarios; y tampoco enseña directamente la red."
  },
  {
    enunciado: "En Windows, el Visor de Eventos permite:",
    opciones: [
      "Crear usuarios",
      "Monitorizar CPU",
      "Ejecutar scripts",
      "Analizar registros del sistema"
    ],
    correcta: 3,
    explicacion: " La correcta es Analizar registros del sistema porque el Visor de Eventos muestra eventos y registros del sistema, seguridad y aplicaciones. No crea usuarios; no es una herramienta principal de monitorización de CPU; y no se usa para ejecutar scripts."
  },
  {
    enunciado: "¿Qué comando en Linux muestra procesos en tiempo real?",
    opciones: [
      "top",
      "df",
      "du",
      "uptime"
    ],
    correcta: 0,
    explicacion: " La correcta es top porque muestra procesos y consumo de recursos en tiempo real. df enseña disco; du uso de espacio por directorios; y uptime tiempo encendido y carga media."
  },
  {
    enunciado: "¿Qué ventaja tiene htop frente a top?",
    opciones: [
      "Consume más CPU",
      "Interfaz interactiva y más visual",
      "No muestra procesos",
      "No permite ordenar"
    ],
    correcta: 1,
    explicacion: " La correcta es Interfaz interactiva y más visual porque htop suele ser más cómodo, permite navegar mejor y muestra la información de forma más clara. No es una ventaja consumir más CPU; sí muestra procesos; y sí permite ordenar."
  },
  {
    enunciado: "¿Qué comando permite ver memoria RAM rápidamente?",
    opciones: [
      "top",
      "ps",
      "free",
      "uptime"
    ],
    correcta: 2,
    explicacion: " La correcta es free porque muestra memoria total, usada y disponible de forma rápida. top también da información de RAM, pero la respuesta directa esperada aquí es free; ps lista procesos; y uptime no está centrado en la RAM."
  },
  {
    enunciado: "¿Qué herramienta es más completa como dashboard de monitorización en Linux?",
    opciones: [
      "top",
      "free",
      "glances",
      "ps"
    ],
    correcta: 2,
    explicacion: " La correcta es glances porque ofrece una vista muy completa de CPU, RAM, disco, red y más, tipo panel de monitorización. top es más básico; free solo muestra memoria; y ps se centra en procesos."
  },
  {
    enunciado: "El comando ps aux muestra:",
    opciones: [
      "Disco",
      "Lista completa de procesos",
      "Red",
      "Usuarios"
    ],
    correcta: 1,
    explicacion: " La correcta es Lista completa de procesos porque ps aux muestra procesos del sistema con bastante detalle. No enseña disco como función principal; no es un comando de red; y no muestra simplemente usuarios conectados."
  },
  {
    enunciado: "¿Qué muestra df -h?",
    opciones: [
      "RAM",
      "CPU",
      "Espacio en disco",
      "Procesos"
    ],
    correcta: 2,
    explicacion: " La correcta es Espacio en disco porque df -h muestra uso y disponibilidad de sistemas de archivos en formato legible. No enseña RAM, CPU ni lista procesos."
  },
  {
    enunciado: "¿Qué indica uptime?",
    opciones: [
      "Disco",
      "Tiempo encendido y carga media",
      "Usuarios",
      "Red"
    ],
    correcta: 1,
    explicacion: " La correcta es Tiempo encendido y carga media porque uptime muestra cuánto lleva encendido el sistema y la carga media. No está pensado para disco, red ni solo usuarios."
  },
  {
    enunciado: "¿Qué comando muestra puertos abiertos en Linux?",
    opciones: [
      "dir",
      "ping",
      "df",
      "ss -tulnp"
    ],
    correcta: 3,
    explicacion: " La correcta es ss -tulnp porque permite ver sockets y puertos abiertos, incluidos TCP y UDP, con procesos asociados. dir no es el comando esperado en Linux para esto; ping prueba conectividad; y df muestra disco."
  },
  {
    enunciado: "¿Qué hace sar -u 1 5?",
    opciones: [
      "Muestra estadísticas de CPU en intervalos",
      "Muestra disco",
      "Muestra usuarios",
      "Muestra red"
    ],
    correcta: 0,
    explicacion: " La correcta es Muestra estadísticas de CPU en intervalos porque sar -u 1 5 toma muestras del uso de CPU cada 1 segundo, 5 veces. No está mostrando usuarios; no se centra en disco; ni en red con esa opción."
  },
  {
    enunciado: "¿Qué hace Get-Process en PowerShell?",
    opciones: [
      "Ver red",
      "Listar procesos activos",
      "Ver disco",
      "Ver usuarios"
    ],
    correcta: 1,
    explicacion: " La correcta es Listar procesos activos porque Get-Process muestra los procesos del sistema en PowerShell. No es el comando principal para red, disco o usuarios."
  },
  {
    enunciado: "Sort-Object CPU -Descending sirve para:",
    opciones: [
      "Borrar procesos",
      "Ordenar procesos por uso de CPU descendente",
      "Reiniciar procesos",
      "Filtrar memoria"
    ],
    correcta: 1,
    explicacion: " La correcta es Ordenar procesos por uso de CPU descendente porque Sort-Object usa la propiedad CPU y -Descending los ordena de mayor a menor. No borra ni reinicia procesos; y no filtra memoria como función principal."
  },
  {
    enunciado: "¿Qué hace Select-Object -First 10?",
    opciones: [
      "Selecciona últimos",
      "Filtra errores",
      "Selecciona los primeros elementos",
      "Ordena"
    ],
    correcta: 2,
    explicacion: " La correcta es Selecciona los primeros elementos porque -First 10 devuelve los 10 primeros resultados del flujo. No selecciona los últimos; no filtra errores; y tampoco ordena por sí solo."
  },
  {
    enunciado: "¿Qué muestra Get-Service?",
    opciones: [
      "Estado de servicios del sistema",
      "Usuarios",
      "Red",
      "Disco"
    ],
    correcta: 0,
    explicacion: " La correcta es Estado de servicios del sistema porque Get-Service lista servicios y su estado en Windows/PowerShell. No muestra usuarios, red o disco como función principal."
  },
  {
    enunciado: "¿Qué mide Get-Counter '\\Processor(_Total)% Processor Time'?",
    opciones: [
      "RAM",
      "Uso de CPU",
      "Disco",
      "Red"
    ],
    correcta: 1,
    explicacion: " La correcta es Uso de CPU porque ese contador consulta el tiempo de procesador total usado. No mide RAM, disco ni red."
  },
  {
    enunciado: "¿Qué mide Get-Counter '\\Memory\\Available MBytes'?",
    opciones: [
      "CPU",
      "Disco",
      "Memoria disponible",
      "Red"
    ],
    correcta: 2,
    explicacion: " La correcta es Memoria disponible porque ese contador indica cuánta RAM libre o disponible queda en megabytes. No mide CPU, disco ni red."
  },
  {
    enunciado: "¿Qué hace Test-Connection google.es?",
    opciones: [
      "Ver CPU",
      "Ver RAM",
      "Probar conectividad de red",
      "Ver disco"
    ],
    correcta: 2,
    explicacion: " La correcta es Probar conectividad de red porque Test-Connection es el equivalente en PowerShell a comprobar si un destino responde en red. No sirve para CPU, RAM o disco."
  },
  {
    enunciado: "¿Qué muestra Get-NetTCPConnection?",
    opciones: [
      "Conexiones TCP activas",
      "Usuarios",
      "CPU",
      "RAM"
    ],
    correcta: 0,
    explicacion: " La correcta es Conexiones TCP activas porque ese cmdlet muestra conexiones TCP en el sistema. No enseña usuarios, CPU ni RAM."
  },
  {
    enunciado: "¿Qué muestra Get-NetAdapter?",
    opciones: [
      "CPU",
      "RAM",
      "Interfaces de red",
      "Disco"
    ],
    correcta: 2,
    explicacion: " La correcta es Interfaces de red porque Get-NetAdapter lista adaptadores o interfaces de red del sistema. No muestra CPU, RAM o disco."
  },
  {
    enunciado: "¿Qué hace Get-WinEvent -LogName System?",
    opciones: [
      "Reinicia sistema",
      "Ver procesos",
      "Mostrar eventos del sistema",
      "Crear logs"
    ],
    correcta: 2,
    explicacion: " La correcta es Mostrar eventos del sistema porque consulta el registro System del Visor de Eventos. No reinicia el sistema; no muestra procesos como función principal; y no crea logs nuevos."
  },
  {
    enunciado: "¿Qué hace who en Linux?",
    opciones: [
      "CPU",
      "Usuarios conectados",
      "Disco",
      "Red"
    ],
    correcta: 1,
    explicacion: " La correcta es Usuarios conectados porque who muestra qué usuarios tienen sesión iniciada en el sistema. No da información principal de CPU, disco o red."
  },
  {
    enunciado: "¿Qué hace df -h / | tail -n 1?",
    opciones: [
      "RAM",
      "CPU",
      "Muestra uso de disco de la raíz",
      "Red"
    ],
    correcta: 2,
    explicacion: " La correcta es Muestra uso de disco de la raíz porque df -h / consulta el sistema de archivos de / y tail -n 1 deja la línea relevante del resultado. No mide RAM, CPU ni red."
  }

];