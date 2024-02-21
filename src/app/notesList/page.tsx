'use client'

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Navbar from "../components/header/pages";
import { useState } from "react";
import INote from "@/@types/Note";
import { log } from "console";
import NotesAdd from "../notesAdd/page";

export default function Notes() {
  const [notes, setNotes] = useState<INote[]>([
    { id: 1, text: 'Faire les courses' },
    { id: 2, text: 'Faire le repassage' },
    { id: 3, text: 'Faire le ménage' },
  ]); 
  
  const deleteNote = (id: number) => {
    console.log("entree dans la fonction delete");
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [editingNoteText, setEditingNoteText] = useState('');

  const handleEditNote = (id: number, text: string) => {
    setEditingNoteId(id);
    setEditingNoteText(text);
  };

  const handleSaveNote = (id: number) => {
    setEditingNoteId(null);
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: editingNoteText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div>
      <div className="notesList m-10 text-center">
      <Navbar />
      <NotesAdd setNotes={setNotes} />
      <ul className="notesList pt-6">
          {notes.map((note) => (
            <li key={note.id} className="notesList-li">
              <span className="notesList-span pr-16">
                <button onClick={() => deleteNote(note.id)}>🗑</button>
              </span>
              <span className="notesList-span">
                {editingNoteId === note.id ? (
                  <>
                    <input
                      type="text"
                      value={editingNoteText}
                      onChange={(e) => setEditingNoteText(e.target.value)}
                      autoFocus
                    />
                    <button onClick={() => handleSaveNote(note.id)}>✔️</button>
                  </>
                ) : (
                  <>
                    <input type="text" value={note.text} readOnly={true} />
                    <button onClick={() => handleEditNote(note.id, note.text)}>🖊️</button>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
