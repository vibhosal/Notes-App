import { useState } from 'react';

const initialForm = { title: '', content: '' };

export default function NoteForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    onSubmit({ title: form.title.trim(), content: form.content.trim() });
    setForm(initialForm);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Create Note</h2>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} placeholder="Note title" />
      </label>
      <label>
        Content
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Write your note..." rows="6" />
      </label>
      <button type="submit">Add Note</button>
    </form>
  );
}
