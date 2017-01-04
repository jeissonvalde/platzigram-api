<h1>APi de platzigram</h1>

Creación de api de platzigram con ECMAScript6 soportado gracias
a babel, ava, micro y http-hash que me permiten escribir los endpoints
con promesas.

Pueden suceder algunos inconvenientes de compatibilidad, por eso es 
recomendado instalar micro@4.1.1 tanto en global como en el package.

Para verificar ó instalar las dependencias que están en el package.json, 
utilizamos el comando `~$ npm i`

Puedo enlazar proyectos o dependencias que yo haya desarrollado, gracias
a `~$ npm link`. funciona así:
    1. Me ubico en el proyecto que deseo como dependencia y escribo el
    comando npm link con la ubicación, en este caso punto.
      ej: `platzigram-db$ npm link .`.
    2. Me dirijo hacia el proyecto que deseo instalar este platzigram-db
    como dependencia y escribo el comando relacionando las dos mencionadas:
      ej: `platzigram-api$ npm link platzigram-db`
    3. verificar en la carpeta node_modules si se encuentra el modulo platzigram-db.

Hay una técnica para hacer test de bases de datos, con datos, pero sin ir directamente a la 
base de datos. Esta técnica me facilita hacer los test sin datos reales e innecesarios.
Tengo dos formas que son Mocks, objetos para hacer pruebas; y stubs métodos solamente para hacer pruebas.

Hay un módulo llamado Proxyquire, que me sirve para señalar o decirle al js con qué tipo de datos estoy haciendo
pruebas con Stub.


