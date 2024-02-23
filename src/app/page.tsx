'use client'

import Navbar from "./components/header/pages";
import React, { useState, useEffect } from 'react';
import LoginButton from "@/auth/loginButton";
import { SessionProvider} from 'next-auth/react';
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { useCookies } from 'react-cookie';

export default function Home() {
  
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
