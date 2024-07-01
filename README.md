# Product Gallery API

Esta api se nos fue proporcionado para el uso en el diseño del proyecto en el modulo 4 aqui estamos haciendo una replica para el uso en el testing

URL original del ing. que nos proporciono 

  ```bash
   git clone (https://github.com/IonVillarreal/product-gallery)
   ```
Codigo para testing modulo 5

Esta es una API para gestionar una galería de productos utilizando NestJS, Prisma, SQLite y JWT para la autenticación. La API permite crear, leer, actualizar y eliminar productos, con rutas protegidas para la creación y edición de productos.

## Requisitos

- Node.js (versión 20 o superior)
- npm (versión 10 o superior)

## Instalación

Sigue los pasos a continuación para instalar y ejecutar la aplicación:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Vhenrry/apiProductosTest.git
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Configurar el archivo `.env`:

   - Crea un archivo `.env` en el directorio raíz del proyecto y agrega la siguiente línea:
     ```plaintext
     JWT_SECRET=your_jwt_secret_key
     ```

4. Configurar Prisma:

   - Asegúrate de que el archivo `prisma/.env` contenga la URL de la base de datos apuntando a `file:./dev.db`.

5. Inicializar la base de datos:

   ```bash
   npx prisma migrate dev --name init
   ```

6. Ejecutar el script de seed para agregar datos de prueba:

   ```bash
   npm run seed
   ```

7. Iniciar la aplicación:

   ```bash
   npm run start:dev
   ```

8. Acceder a la documentación de la API:
   - Abre tu navegador y navega a `http://localhost:3000/api` para ver la documentación de Swagger.
