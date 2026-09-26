const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// ────────────────────────────────────────────────
// GET /hello  → responde con un saludo fijo
// ────────────────────────────────────────────────
app.get('/hello', (req, res) => {
  res.json({
    message: '¡Hola! Bienvenido a la API 👋',
    status: 'ok',
  });
});

// ────────────────────────────────────────────────
// GET /greet/:name  → recibe un nombre y lo retorna
// ────────────────────────────────────────────────
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;

  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'El parámetro "name" es requerido' });
  }

  res.json({
    message: `¡Hola, ${name}! 🎉`,
    name,
    status: 'ok',
  });
});

// ────────────────────────────────────────────────
// Ruta raíz con info de los endpoints disponibles
// ────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    api: 'Hello API',
    version: '1.0.0',
    endpoints: [
      { method: 'GET', path: '/hello', description: 'Saludo general' },
      { method: 'GET', path: '/greet/:name', description: 'Saludo personalizado con nombre' },
    ],
  });
});

// ────────────────────────────────────────────────
// 404 handler
// ────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`   GET /hello`);
  console.log(`   GET /greet/:name`);
});
