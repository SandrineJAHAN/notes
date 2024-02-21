'use client'

import React, { useState } from 'react';

export default function NotesAdd({ setNotes }) {
  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: prevNotes.length + 1, text: newNote },
    ]);
    setNewNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full space-y-4">
      <div className="pt-4">
        <label htmlFor="newNote" className="sr-only">
          Nouvelle note
        </label>
        <input
          type="text"
          id="newNote"
          name="newNote"
          value={newNote}
          onChange={handleChange}
          className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
          placeholder="Ajouter une nouvelle note"
        />
      </div>
      <button
        type="submit"
        className="w-72 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
        Ajouter la note
      </button>
    </form>
  );
}
