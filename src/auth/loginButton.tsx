"use client"

import { signIn } from 'next-auth/react';

const LoginButton = () => {
  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: 'http://localhost:3000/notesList' });
  };

  return (
    <div>
      <button onClick={handleSignIn}>
        Connexion avec GitHub
      </button>
    </div>
  );
};

export default LoginButton;
