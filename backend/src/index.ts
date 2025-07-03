import express, { Request, Response } from "express";
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());

app.use(cors()); // Permite todas las peticiones cross-origin (para desarrollo)

app.get("/", (_req, res) => {
  res.send("Bob’s Corn API is running!");
});

// Init SQLite DB
const db = new Database("bobcorn.db");

// Crear tabla si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS corn_purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// Ruta para comprar maíz
app.post("/buy-corn", (req: Request, res: Response) => {
  const { client_id } = req.body;
  if (!client_id) {
    return res.status(400).json({ error: "client_id is required" });
  }

  // Obtener la última compra del cliente
  const lastPurchase = db
    .prepare(`
      SELECT created_at FROM corn_purchases 
      WHERE client_id = ? 
      ORDER BY created_at DESC LIMIT 1
    `)
    .get(client_id) as { created_at: string } | undefined;

  const now = new Date();

  if (lastPurchase) {
    const last = new Date(lastPurchase.created_at);
    const diff = (now.getTime() - last.getTime()) / 1000; // seconds
    if (diff < 60) {
      return res.status(429).json({ error: "Too many corns!" });
    }
  }

  // Registrar nueva compra
  db.prepare(`
    INSERT INTO corn_purchases (client_id) VALUES (?)
  `).run(client_id);

  res.status(200).json({ message: "🌽 Enjoy your corn!" });
});

app.listen(port, () => {
  console.log(`🧱 Bob’s Corn API running on http://localhost:${port}`);
});
