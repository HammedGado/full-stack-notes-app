import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const API = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");

  // Get all notes
  const fetchNotes = async () => {
    const res = await fetch(`${API}/api/notes`);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Create note
  const createNote = async (note) => {
    const res = await fetch(`${API}/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    const newNote = await res.json();
    setNotes([newNote, ...notes]);
  };

  // Update note
  const updateNote = async (id, note) => {
    const res = await fetch(`${API}/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    const updated = await res.json();
    setNotes(notes.map((n) => (n.id === id ? updated : n)));
    setEditingNote(null);
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`${API}/api/notes/${id}`, {
      method: "DELETE",
    });

    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Notes App (React + Express + Postgres)</h1>

      <NoteForm
        onCreate={createNote}
        onUpdate={updateNote}
        editingNote={editingNote}
      />

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 20 }}
      />

      <NoteList
        notes={notes.filter((note) =>
          (note.title + note.content)
            .toLowerCase()
            .includes(search.toLowerCase())
        )}
        onEdit={(note) => setEditingNote(note)}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default App;
