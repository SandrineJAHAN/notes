'use client'


import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Navbar from "../components/header/pages";
import { useState } from "react";
import INote from "@/@types/Note";
import { log } from "console";

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

  return (
    <div>
      <div className="notesList m-10 text-center">
      <Navbar />
      <Link href="/notesAdd">
      <Button className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Ajouter une note</Button>
      </Link>
      <ul className="notesList">
          {notes.map((note) => (
            <li key={note.id} className="notesList-li">
              <span className="notesList-span">
                <button onClick={() => deleteNote(note.id)}>🗑</button>
              </span>
              <span className="notesList-span">
                <input type="text" value={note.text} readOnly={true} />
                <button>🖊</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}