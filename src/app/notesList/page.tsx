import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Navbar from "../components/header/pages";

export default function Notes() {
  const notes = [
    { id: 1, text: 'Faire les courses' },
    { id: 2, text: 'Faire le repassage' },
    { id: 3, text: 'Faire le ménage' },
  ];
  
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
                🗑
              </span>
              <span className="notesList-span">
                <input type="text" value={note.text} />
                <button>🖊</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}