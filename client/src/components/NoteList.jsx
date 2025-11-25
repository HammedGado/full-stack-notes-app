import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) return <p>No notes yet.</p>;

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={() => onDelete(note.id)}
          onEdit={() => onEdit(note)}
        />
      ))}
    </div>
  );
}
