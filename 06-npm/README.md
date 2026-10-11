# Carpeta `06-npm`

Esta carpeta contiene la configuración inicial de un proyecto de Node.js con npm. A continuación se explica cada archivo presente y la función de sus campos.

## `package.json`

Es el manifiesto del proyecto: guarda sus metadatos y opciones para que npm y Node.js sepan cómo identificarlo y ejecutarlo.

- **`name`** (`inicio-npm`): nombre del proyecto. npm lo usa para identificarlo; aquí indica que es un proyecto de inicio con npm.
- **`version`** (`1.0.0`): versión actual del proyecto. Sigue el formato habitual `mayor.menor.parche`.
- **`description`** (`Es mi primer proyecto node`): descripción breve del propósito del proyecto.
- **`keywords`** (`["aprender-node"]`): palabras clave para clasificar o encontrar el proyecto. Es una lista, por eso aparece entre corchetes.
- **`license`** (`ISC`): licencia declarada para el proyecto. Indica bajo qué términos se autoriza su uso y distribución.
- **`author`** (`Mohammed lhabdellaui`): persona identificada como autora del proyecto.
- **`type`** (`commonjs`): indica que los archivos `.js` del proyecto usan el sistema de módulos CommonJS de Node.js, por ejemplo `require()` y `module.exports`.
- **`main`** (`app.js`): señala el archivo de entrada principal que se usaría si el paquete se carga desde otro módulo. En el estado actual de esta carpeta no aparece un archivo `app.js`; este campo solo establece la ruta esperada.
- **`scripts`**: contiene comandos que se pueden ejecutar con npm. El script **`test`** se ejecuta con `npm test`. Actualmente imprime `Error: no test specified` y termina con un código de error (`exit 1`), porque todavía no se ha configurado una prueba.

## Carpeta `src/js-fundamento`

### `01-template.js`

Define y exporta una plantilla de correo electrónico:

- **`correoTemplate`** es una cadena multilínea creada con una plantilla literal de JavaScript (delimitada por acentos graves). Su contenido es un fragmento HTML con un saludo, un mensaje de bienvenida y una firma.
- **`{{nombre}}`** es un marcador de posición escrito dentro del HTML. El archivo lo deja tal cual; no reemplaza automáticamente ese texto por el nombre de una persona.
- **`module.exports`** exporta un objeto con la propiedad `correoTemplate`, para que otros archivos CommonJS puedan importarlo con `require()`.

Este archivo solo define y exporta el contenido; no envía el correo ni genera una página HTML por sí mismo.

## Resumen

`package.json` configura los datos básicos del proyecto, el formato de módulos de Node.js y un comando de prueba provisional. `src/js-fundamento/01-template.js` contiene y exporta una plantilla HTML básica para un correo de bienvenida.
