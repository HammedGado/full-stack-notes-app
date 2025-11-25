// server/index.js
import { pool } from './db.js';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;


// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Express server is running' });
});

// --- DB TEST ROUTE ---
app.get('/api/db-test', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json({ success: true, time: result.rows[0].now });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // --- GET all notes ---
app.get("/api/notes", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM notes ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// --- GET single note ---
app.get("/api/notes/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length === 0)
      return res.status(404).json({ error: "Note not found" });

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// --- CREATE note ---
app.post("/api/notes", async (req, res) => {
  try {
    const { title, content } = req.body;

    const result = await pool.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// --- UPDATE note ---
app.put("/api/notes/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    const result = await pool.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ error: "Note not found" });

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// --- DELETE note ---
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ error: "Note not found" });

    res.json({ message: "Note deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
