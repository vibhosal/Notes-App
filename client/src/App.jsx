import { useEffect, useState } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import EditNoteModal from './components/EditNoteModal';

const API_BASE = import.meta.env.VITE_API_BASE || '/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('notesTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('notesTheme', theme);
  }, [theme]);

  const loadNotes = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(API_BASE);
      setNotes(response.data);
    } catch (err) {
      setError('Failed to load notes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreate = async (note) => {
    try {
      const timestamp = new Date().toISOString();
      const response = await axios.post(API_BASE, {
        ...note,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      setNotes((current) => [response.data, ...current]);
    } catch (err) {
      setError('Failed to create note.');
    }
  };

  const handleUpdate = async (id, updated) => {
    try {
      const response = await axios.put(`${API_BASE}/${id}`, {
        ...updated,
        updatedAt: new Date().toISOString(),
      });
      setNotes((current) => current.map((note) => (note.id === id ? response.data : note)));
      setSelectedNote(null);
    } catch (err) {
      setError('Failed to update note.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setNotes((current) => current.filter((note) => note.id !== id));
    } catch (err) {
      setError('Failed to delete note.');
    }
  };

  return (
    <div className="app-shell">
      <header>
        <div className="header-row">
          <div>
            <h1>Notes App</h1>
            <p>Manage notes with create, edit, and delete.</p>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </header>

      <main>
        <section className="panel create-panel">
          <NoteForm onSubmit={handleCreate} />
        </section>

        <section className="panel notes-panel">
          <div className="notes-header">
            <h2>Your Notes</h2>
            <button type="button" onClick={loadNotes} className="secondary">
              Refresh
            </button>
          </div>

          {error && <div className="toast error">{error}</div>}
          {loading ? (
            <div className="loading">Loading notes...</div>
          ) : (
            <NotesList notes={notes} onEdit={setSelectedNote} onDelete={handleDelete} />
          )}
        </section>
      </main>

      {selectedNote && (
        <EditNoteModal note={selectedNote} onClose={() => setSelectedNote(null)} onSave={handleUpdate} />
      )}
    </div>
  );
}

export default App;
