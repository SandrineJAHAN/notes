'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "./components/header/pages";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';
import INote from "@/@types/Note";
import LoginButton from "@/auth/loginButton";
import { getServers } from "dns";
import { getServerSession } from "next-auth";
import nextAuthApp from "../../pages/api/auth/[...nextauth]";
require('dotenv').config()

export default function Home() {
  const [session, setSession] = useState(null);

  // useEffect(async () => {
  //   console.error("log");
  //   const sessionData = await getServerSession(nextAuthApp);
  //   console.error(sessionData);
  //  setSession(sessionData);
  // }, [session]);

  // if (session) {
  //   return <p>{JSON.stringify(session, null, 2)}</p>;
  // }
  console.log(process.env.GITHUB_ID);
  console.log(process.env.GITHUB_SECRET);
  console.log(process.env.NEXT_PUBLIC_MY_VARIABLE);
  
  return (
    <div className="p-10 bg-gray-100">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4 pt-8 text-center">Bienvenue sur notre application de gestion des notes !</h1>
      <p className="text-lg mb-8 text-center">
        Vous pouvez voir la liste de vos notes, en ajouter, en modifier et en supprimer. Faites-en bon usage !!!!!!
      </p>
      <div className="flex justify-end">
        <LoginButton />
      </div>
    </div>
  );
}
