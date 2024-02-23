
import Navbar from "./components/header/pages";
import React, { useState, useEffect } from 'react';
import LoginButton from "@/auth/loginButton";
import { SessionProvider} from 'next-auth/react';
import { getServerSession } from "next-auth";
<<<<<<< HEAD
import NextAuth from "next-auth/next";
import { useCookies } from 'react-cookie';
import { cookies } from "next/headers";
=======
import nextAuthApp from "../../pages/api/auth/[...nextauth]";
// require('dotenv').config()
>>>>>>> 76a49b76466ff3e3030fffa8b287fc9e261fabfd


export default function Home() {
  
const Home = async () => {

<<<<<<< HEAD
  const cooks = cookies();
  const allCookies = cooks.getAll();
  console.log("allCookies",allCookies);
=======
  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>;
  }
>>>>>>> 76a49b76466ff3e3030fffa8b287fc9e261fabfd
  
  allCookies.forEach((cookie) => {
    console.log(cookie);
    console.log(cookie.value);
  });
}
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
