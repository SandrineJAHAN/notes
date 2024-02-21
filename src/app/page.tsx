import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "./components/header/pages";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import INote from "@/@types/Note";

export default function Home() {


  return (
    <div className="p-10 bg-gray-100">
      <Navbar /> 
    <h1 className="text-4xl font-bold mb-4 pt-8 text-center">Bienvenue sur notre application de gestion des notes !</h1>
    <p className="text-lg mb-8 text-center">
        Vous pouvez voir la liste de vos notes, en ajouter, en modifier et en supprimer. Faites-en bon usage !
    </p>
    <div className="flex justify-end">
    <Link href="/loginForm">
    <Button className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 pr-6">Me connecter</Button>
    </Link>
    </div>
</div>
  );
}
