# Hello API

Small Node.js REST API built with Express.

## Endpoints

| Method | Path          | Description                          |
|--------|---------------|--------------------------------------|
| GET    | `/`           | Lista todos los endpoints disponibles|
| GET    | `/hello`      | Saludo general                       |
| GET    | `/greet/:name`| Saludo personalizado con tu nombre   |

## Instalación

```bash
npm install
```

## Uso

**Producción:**
```bash
npm start
```

**Desarrollo (con auto-reload):**
```bash
npm run dev
```

El servidor inicia en `http://localhost:3000`

## Ejemplos

```bash
# Saludo general
GET http://localhost:3000/hello
# → { "message": "¡Hola! Bienvenido a la API 👋", "status": "ok" }

# Saludo con nombre
GET http://localhost:3000/greet/Maria
# → { "message": "¡Hola, Maria! 🎉", "name": "Maria", "status": "ok" }
```
# api_server_test
