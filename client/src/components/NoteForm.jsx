import { useState } from 'react';

const initialForm = { title: '', content: '', priority: 'medium', category: 'general' };

export default function NoteForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    onSubmit({ 
      title: form.title.trim(), 
      content: form.content.trim(), 
      priority: form.priority,
      category: form.category 
    });
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
        Priority
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="low">Very Low</option>
            <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent Priority</option>
        </select>
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="ideas">Ideas</option>
        </select>
      </label>
      <label>
        Content of notes
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Write your note..." rows="6" />
      </label>
      <button type="submit">Add Note</button>
    </form>
  );
}
