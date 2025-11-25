export default function NoteItem({ note, onDelete, onEdit }) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      >
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <small>{new Date(note.created_at).toLocaleString()}</small>
  
        <div style={{ marginTop: 10 }}>
          <button onClick={onEdit} style={{ marginRight: 10 }}>
            Edit
          </button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  }
  