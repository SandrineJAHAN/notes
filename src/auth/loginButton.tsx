"use client"

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <button
        onClick={async () => {
          console.log('Clic sur le bouton de connexion');
          await signIn('github');
        }}
      >
        Connexion avec GitHub
      </button>
    </div>
  );
}