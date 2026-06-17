export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <article className="note-card">
      <div className="note-meta">
        <span>{new Date(note.updatedAt || note.createdAt).toLocaleDateString()}</span>
      </div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <div className="actions">
        <button type="button" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button type="button" className="danger" onClick={() => onDelete(note._id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
