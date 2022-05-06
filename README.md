# Challenge Backend Tap

## Objetivo

Se basa en implementar al menos un método API REST que serán parte 
del backend para un buscaminas.

## Para comenzar

- Descargar y ejecutar el script ubicado en la carpeta "db".
- En la carpeta raíz del proyecto instalar las dependencias con el siguiente comando:

```bash
npm i
```

## Ejecución del proyecto

```bash
npm start 
```

## Funcionalidad (rutas)

#### GET /game
Esta ruta al no tener un ID informado, creará una nueva partida. Automáticamente tendrá su ID, fecha de creación y estado. Nos retornará un objeto con los datos de nuestra nueva partida.

#### GET /game/{id}
Esta ruta busca en la base de datos una partida según su ID y devuelve un objeto con los datos de la misma.

#### POST /game
Esta ruta guarda una partida ya iniciada y nos devuelve sus datos actualizados. Espera recibir por body el identificador de la partida (id) y el tablero de la misma (cells). 
Ejemplo de body correcto:

{

"id": 4,

"cells": ["A1","B2","C3"]

}


## Testing
```bash
npm test
```
