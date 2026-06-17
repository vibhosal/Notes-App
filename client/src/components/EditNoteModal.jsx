import { useState } from 'react';

export default function EditNoteModal({ note, onClose, onSave }) {
  const [form, setForm] = useState({ title: note.title, content: note.content });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(note.id, { title: form.title.trim(), content: form.content.trim() });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <header>
          <h2>Edit Note</h2>
          <button type="button" onClick={onClose} className="close-button">
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input name="title" value={form.title} onChange={handleChange} />
          </label>
          <label>
            Content
            <textarea name="content" value={form.content} onChange={handleChange} rows="6" />
          </label>
          <div className="modal-actions">
            <button type="button" className="secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
