import { useEffect, useState } from "react";

export default function NoteForm({ onCreate, onUpdate, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNote) {
      onUpdate(editingNote.id, { title, content });
    } else {
      onCreate({ title, content });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>{editingNote ? "Edit Note" : "Add Note"}</h2>

      <input
        type="text"
        placeholder="Title"
        style={{ width: "100%", marginBottom: 10 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        style={{ width: "100%", marginBottom: 10 }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">{editingNote ? "Update" : "Create"}</button>
    </form>
  );
}
