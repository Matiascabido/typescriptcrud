Proyecto en TypeScript con MongoDB (mongoose) 

Para comenzar se debe tener instalado de manera global

> Node\
> TypeScript\
> ts-node\
> nodemon

Con "tsc --init" para iniciarlizar el tsconfig.json
Con "npm init -y" para inicializar el package.json

> Express\
> Cors         // Fuente que hace a nuestra api, invocalbe desde distintos origenes\
> dotenv       // Paquete de gestion de variables de entorno\
> multer       // Carar archivos a la app\
> mongoose     // Orm para conexion a la db\
> bcryptjs     // Encriptado de contraseñas\
> jsonwebtoken // token para rastreo de sesion

Dependencias de desarrollo -D

> @types/express\
> @types/cors\
> @types/dotenv\
> @types/multer\
> @types/mongoose\
> @types/bcryptjs\
> @types/jsonwebtoken

Diseño propuesto [MVC]


Rutas

> las rutas estan nombradas por el nombre del archivo


Para poder ejecutar el proyecto con Docker

> Ejecutar comando npm run build
> cp .\docker-compose.yml  .\dist\
> cp .\Dockerfil  .\dist\
> cd .\dist\
> docker-compose up --build

En caso de quere realizar un nuevo build, se recomienda previo a la eleiminacion, conservar los archivos 
- docker-compose
- Dockerfile
Para que luego de realizado el nuevo build, solo haya que copiar nuevamente los archivos a la carpeta y levantar el proyecto.


> Create a Node API with Typescript. 
> Connect the Node API to MongoDB using Mongoose (desirable models in typescript).
> We need to develop three endpoints behind a basic authentication (username and password).
1 Create a user with name, last name, address, and profile picture (this should be a file).
2 Retrieve users.
3 Update user.