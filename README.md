# KS2 TEST

## Carpetas

- **backend:** Directorio del servidor NodeJs (backend)

- **database:** Directorio Docker de Base de Datos

- **frontend:** Directorio de Reactjs

## Clonar el Proyecto

git remote add origin https://github.com/JhonnyJohany/ks2-test.git

### Base de Datos

**FORMA SEQUELIZE**

1. Ejecute este comando para instalar sequelize:

   ```bash
   npm install sequelize pg
   ```

2. Iniciar sequelize

   ```bash
   npx sequelize-cli init
   ```

3. Este crea el archivo migate:

   ```bash
   npx sequelize-cli migration:generate --name create-users-table
   ```

4. Por ultimo este comando para que haga la migración::

   ```bash
   npx sequelize-cli db:migrate
   ```

**FORMA Docker**

1. Navega al directorio del proyecto:

   ```bash
   cd database
   ```

2. Ejecuta el script de construcción:

   ```bash
   ./build.sh
   ```

3. Ejecuta el script para iniciar el contenedor de la base de datos:

   ```bash
   ./run.sh
   ```

**NOTA:**
Es necesario tener docker instalado en el sistema antes de ejecutar estos comandos y descomentar la parte del ks2.sql para que se cree la tabla automaticamente.

## Frontend

### Paso 1: Instalar Node Js v.20.11.1 o superior

https://nodejs.org/en/download

## Paso 2: Compilar el proyecto de React

1. Navegue hasta la carpeta raíz del proyecto en la terminal:

   ```bash
   cd frontend/ks2-test
   ```

2. Ejecute el siguiente comando para instalar las dependencias del proyecto de ReactJs:

- Instalar las librerias que requiere el proyecto:

  ```bash
  npm install
  ```

- Ejecuta el siguiente comando para levantar el proyecto de ReactJs:

  ```bash
  npm run dev
  ```

## Backend

1. Navegue hasta la carpeta raíz del proyecto en la terminal:

   ```bash
   cd backend
   ```

2. Ejecute el siguiente comando para instalar las dependencias del proyecto de nodejs:

- Instalar las librerias que requiere el proyecto:

  ```bash
  npm install
  ```

3. Ejecute el siguiente comando para ejecutar el en modo desarrollo proyecto de nodejs:

   ```bash
    npm run dev
   ```

   o el siguiente en modo produccion

   ```bash
    npm run start
   ```
