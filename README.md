
Note: I recommend an alternative module called fullpath.  Fullpath module has more options than directory-path module. But if you want to use this module, here again information about how to use directory-path.
>#English version

# directory-path


[![NPM](https://img.shields.io/npm/v/directory-path.svg)](https://www.npmjs.com/package/directory-path)
[![Downloads](https://img.shields.io/npm/dm/directory-path.svg)](http://npm-stat.com/charts.html?package=directory-path)

A node.js module for recursively reading directory and nested directories paths.

### Installation
```
$ [sudo] npm install directory-path --save
```
### How to use

The following example attaches directory-path to a simple  Node.JS app

#####_Directory structure:_
```
├── full/
│   ├── nested /
│   │   ├── nested-a/
│   │   │   ├── a1/
│   │   │   │   ├── empty.js/
│   │   │   ├── a2/
│   │   │   │   ├── a21/
│   │   │   │   │   ├── a211/
│   │   │   │   │   │   ├── empty.js/
│   │   │   │   │   │   ├── example.js/
│   │   ├── nested-b/
│   │   │   ├── b1/
│   │   │   │   ├── b11/
│   │   │   │   │   ├── empty.js/
│   │   │   ├── b2/
│   │   │   │   ├── b21/

```
index.js
```js
var directory = require('directory-path');

console.log(directory('full'));

```
Run the app:
```
node index.js
```
gives the following output
```
[ 'full/nested',
  'full/nested/nested-a',
  'full/nested/nested-b',
  'full/nested/nested-a/a1',
  'full/nested/nested-a/a2',
  'full/nested/nested-b/b1',
  'full/nested/nested-b/b2',
  'full/nested/nested-a/a2/a21',
  'full/nested/nested-b/b1/b11',
  'full/nested/nested-b/b2/b21',
  'full/nested/nested-a/a2/a21/a211' ]

```

## Support

If you need help using directory-path, or have found a bug, please create an issue on the
<a href="https://github.com/davidenq/directory-path/issues" target="_blank">GitHub repo</a>.

## License

MIT Licence


>#Versión Español

#directory-path

Un modulo para node.js que lee de forma recursiva la ruta de una carpeta de archivos y sus carpetas aninadas.

###Instalación

$ [sudo] npm install directory-path --save

###¿Cómo usar?

A continuación se muestra un ejemplo sensillo de la ejecución del modulo.

#####_Estructura del directorio_

```
├── full/
│   ├── nested /
│   │   ├── nested-a/
│   │   │   ├── a1/
│   │   │   │   ├── empty.js/
│   │   │   ├── a2/
│   │   │   │   ├── a21/
│   │   │   │   │   ├── a211/
│   │   │   │   │   │   ├── empty.js/
│   │   │   │   │   │   ├── example.js/
│   │   ├── nested-b/
│   │   │   ├── b1/
│   │   │   │   ├── b11/
│   │   │   │   │   ├── empty.js/
│   │   │   ├── b2/
│   │   │   │   ├── b21/

```

index.js

```js
var directory = require('directory-path');

console.log(directory('full'));

```
Ejecutar
```
node index.js
```
Se obtiene cómo resultado
```
[ 'full/nested',
  'full/nested/nested-a',
  'full/nested/nested-b',
  'full/nested/nested-a/a1',
  'full/nested/nested-a/a2',
  'full/nested/nested-b/b1',
  'full/nested/nested-b/b2',
  'full/nested/nested-a/a2/a21',
  'full/nested/nested-b/b1/b11',
  'full/nested/nested-b/b2/b21',
  'full/nested/nested-a/a2/a21/a211' ]

```

## Soporte

Si necesitas ayuda usando el módulo directory-path, o si encuentras un bug, por favor créa un issue en <a href="https://github.com/davidenq/directory-path/issues" target="_blank">GitHub repo</a>.

## Licencia

MIT Licence