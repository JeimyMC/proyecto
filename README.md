# RecyBook

## ¡Bienvenido a Recybook!

Una aplicación para la venta de libros se segunda mano.

### Construido con

- [React](https://es.reactjs.org/)
- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [MySQL](https://www.mysql.com/)

# Instalación

1. Clonar el repositorio

```
git clone https://github.com/JeimyMC/proyecto.git
```

2. Instalar npm

```
npm install
```

3. Completar la información del .env_template
4. Lanzar el servidor

```
npm run dev
```

# Funcionalidad

Puedes buscar los libros publicados por:

```
Título
Código postal
Autor
Ciudad
```

### Categorías

```
Idiomas
Literatura española
Literatura extranjera
Infatil
Académicos
Comic/Manga
Juvenil
Hobbies
```

A parte de una sección que muestra los 6 últimos libros publicados.

Una vez registrado el usuario podrá hacer:

- Guardar libros en "Favoritos".
- Reservar libros, los cuales no podrán ser comprados en un plazo de 24h mínimo por otros usuarios. Tras ese tiempo, el dueño del libro podrá \* borrar la reserva. Estos libros se almacenan en "Reservados".
- Comprar libros con reserva o sin ella.
- Valorar la calidad del libro con puntuación de 5 estrellas y comentario.
- Publicar libros para vender.
- Editar un libro.
- Editar el perfil.

La comunicación de los usuarios se reazliza mediante el correo electrónico.

Si el usuario se olvida de la contraseña, se le enviará al correo electrónico una nueva, con la cual podrá acceder a su cuenta y cambiar su contraseña a una que prefiera.
