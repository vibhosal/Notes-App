import NoteCard from './NoteCard';

export default function NotesList({ notes, onEdit, onDelete }) {
  if (!notes.length) {
    return <div className="empty-state">No notes yet. Create your first note.</div>;
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
