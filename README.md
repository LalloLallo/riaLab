# Laboratorio 2 - Taller de Aplicaciones de Internet Ricas

1. [Diseño y Tecnologías](#descripción)
2. [Configuración e Instalación](#configuración)
3. [Docker](#docker)
4. [Mock ups, mapas de navegación e historias de usuario](#mockups)
5. [Servicios REST](#servicios)

## Diseño y Tecnologías
La aplicación está construida utilizando la biblioteca React JS en conjunto con el framework Ionic.
La aplicación se dockerizó.

## Configuración e Instalación
 Se debe tener instalado Node.js para poder realizar los siguientes pasos de configuración e instalación.
 
```bash
# Instalar CLI de Ionic
$ npm install -g @ionic/cli

# Instalar dependencias necesarias
$ npm install

# Levantar el servicio 
$ ionic serve

```
Luego de realizar esos pasos podemos entrar a [FutbolApp](http://localhost:8100/).

## Docker
Cumpliendo con el requerimiento opcional de utilizar la tecnología Docker, se creó una imagen en docker de la aplicación sobre un sistema linux alpine.
La misma se puede descargar escribiendo el siguiente comando:
```bash
$ docker pull slorenzo91/futbolapp
```

Luego de descargada la imagen, puede crearse un contenedor instanciando dicha imagen de la siguiente manera:

```bash
$ docker run -p 8100:8100 futbolapp
```
Luego de realizar esos pasos podemos entrar a [FutbolApp](http://localhost:8100/).


## Mock ups, mapa de navegación e historias de usuario
### Mock ups
![Mockups1](https://github.com/LalloLallo/riaLab/assets/52962992/ead7b2f9-1776-49f0-994a-28b99d5c737a)
![Mockups2](https://github.com/LalloLallo/riaLab/assets/52962992/e312bbed-5508-4143-ad73-6368508027ee)
![Mockups3](https://github.com/LalloLallo/riaLab/assets/52962992/46d5ab6f-9744-4dbb-b577-70e1fb5d2ad2)
![Mockups4](https://github.com/LalloLallo/riaLab/assets/52962992/962936de-d993-4b34-897b-4731627785fb)
### Historias de Usuario
![Historias de Usuario](https://github.com/LalloLallo/riaLab/assets/52962992/48a16a55-2936-4547-8fe1-fbaca8e49898)

### Mapa de navegación
![MapaNavegación](https://github.com/LalloLallo/riaLab/assets/52962992/b25f0d38-e43e-49d5-ad25-b67c2fc4a1aa)


## Servicios REST
Se realizó una investigación de servicios Rest para obtener información de partidos de fútbol, tanto en tiempo real como partidos ya jugados o partidos futuros.
Se encontró variedad de servicios disponibles, los cúales la mayoría eran servicios pagos o servicios gratuitos pero que solicitan al usuario que se cargue una tarjeta de crédito,
lo cuál no nos resultó conveniente. Finalmente encontramos los servicios REST que utilizamos, que sí son gratuitos y no solicitan información adicional para poder utilizarlos.
Una de ellas es [AllSportsAPI](https://allsportapi.com/), la cuál devuelve información en tiempo real de los partidos que están siendo disputados.
La otra es [ScoreBat](https://www.scorebat.com/video-api/), qué nos brinda videos de los partidos ya finalizados.
