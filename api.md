# Anunciantes

### Crear perfil de anunciante

POST https://atlaz.vip/api/anunciante

### Traer anunciantes

GET https://atlaz.vip/api/anunciante

### Traer anunciante por ID

GET https://atlaz.vip/api/anunciante/:id

### Editar perfil anunciante

PATCH https://atlaz.vip/api/anunciante/:id?ACCION=1

### Eliminar perfil anunciante

PATCH https://atlaz.vip/api/anunciante/:id?ACCION=0

---

# Historias

### Crear historia

POST https://atlaz.vip/api/historia

### Traer Historias

GET https://atlaz.vip/api/historia

### Traer historia por ID

GET https://atlaz.vip/api/historia/:id

### Marcar historia destacada

PATCH https://atlaz.vip/api/historia/:id?ACCION=2

### Editar historia

PATCH https://atlaz.vip/api/historia/:id?ACCION=1

### Eliminar historia

PATCH https://atlaz.vip/api/anunciante/:id?ACCION=0

---

# Posts

### Crear perfil de post

POST https://atlaz.vip/api/post

### Traer Posts

GET https://atlaz.vip/api/post

### Traer post por ID

GET https://atlaz.vip/api/post/:id

### Editar perfil post

PATCH https://atlaz.vip/api/post/:id?ACCION=1

### Eliminar perfil post

PATCH https://atlaz.vip/api/post/:id?ACCION=0

---

# Comentarios (anunciantes, posts, articulos)

### Crear comentario

POST https://atlaz.vip/api/comentarios/
crearComentario(
idPost: string,
idUser: string,
text: string,
): Promise<boolean>;

Paso 1: Autenticacion - Verificar el token
Paso 2: Verificar id del usuario que exista
Paso 3: Verificar id del post que exista
Paso 4: Limpiar texto del comentario
Paso 5: Realizar consulta

### Traer comentarios por ID

GET https://atlaz.vip/api/comentarios/:tipo/:id
getAll(idPost: string): Promise<Comentarios[] | []>;

Paso 1: Autenticacion - Verificar el token
Paso 2: Verificar id del post que exista
Paso 3: Realizar consulta

### Editar comentario

PATCH https://atlaz.vip/api/comentarios/:tipo/:id?ACCION=1
editarComentario(id: string, idUser: string, text: string): Promise<boolean>;

Paso 1: Autenticacion - Verificar el token
Paso 2: Verificar id del usuario que exista
Paso 3: Verificar id del post que exista
Paso 4: Verificar id del comentario que exista
PAso 5: Verificar que el comentario es del usuario de id existente
Paso 6: Limpiar texto del comentario
Paso 7: Realizar consulta

### Eliminar comentario

PATCH https://atlaz.vip/api/comentarios/:tipo/:id?ACCION=0
eliminarComentario(id: string, idUser: string): Promise<boolean>;

Paso 1: Autenticacion - Verificar el token
Paso 2: Verificar id del usuario que exista
Paso 3: Verificar id del post que exista y traer id del creador del post
Paso 4: Verificar id del comentario que exista
PAso 5: Verificar que el comentario es del usuario de id existente o del creador del post
Paso 6: Realizar consulta

---

# Reacciones

### Reaccionar POST LIKE

PUT https://atlaz.vip/api/reaction/:post_id?ACTION=1

### Reaccionar POST DISLIKE

PUT https://atlaz.vip/api/reaction/:post_id?ACTION=0

### Reaccionar comentario LIKE

PUT https://atlaz.vip/api/reaction/:comentario_id?ACTION=1

### Reaccionar comentario DISLIKE

PUT https://atlaz.vip/api/reaction/:comentario_id?ACTION=0

---

# Seguir

### Follow

PUT https://atlaz.vip/api/reaction/:anunciante_id?ACTION=1

### Unfollow

PUT https://atlaz.vip/api/reaction/:anunciante_id?ACTION=0

---

# Mensajes

### Traer todas las conversaciones

GET https://atlaz.vip/api/messages/

### Traer todos los mensjaes de un chat (pueden ser primero 10 mensajes y luego 10 más)

GET https://atlaz.vip/api/message/:recivered_id?SORT=

### Enviar mensaje

POST https://atlaz.vip/api/messages/:recivered_id

### Borrar chat

PATCH https://atlaz.vip/api/messages/:conversation_id

### Mensaje leido

POST https://atlaz.vip/api/messages/:mesagge_id
