const priorityLabels = {
  high: { label: 'High', className: 'priority-high' },
  medium: { label: 'Medium', className: 'priority-medium' },
  low: { label: 'Low', className: 'priority-low' },
};

export default function NoteCard({ note, onEdit, onDelete }) {
  const priority = priorityLabels[note.priority] || priorityLabels.medium;

  return (
    <article className="note-card">
      <div className="note-card-top">
        <span className={`priority-pill ${priority.className}`}>{priority.label}</span>
        <span>{new Date(note.updatedAt || note.createdAt).toLocaleDateString()}</span>
      </div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <div className="actions">
        <button type="button" onClick={() => onEdit(note)}>
          Edit content
        </button>
        <button type="button" className="danger" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
