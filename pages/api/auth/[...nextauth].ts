import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

// Récupération des identifiants GitHub depuis les variables d'environnement
const githubId = process.env.NEXT_PUBLIC_GITHUB_ID;
const githubSecret = process.env.NEXT_PUBLIC_GITHUB_SECRET;

// Affichage des identifiants GitHub dans la console
console.log('githubId :', githubId);
console.log('githubSecret :', githubSecret);

// Vérification si les identifiants GitHub sont définis
if (!githubId || !githubSecret) {
    throw new Error('Les identifiants GitHub ne sont pas définis dans les variables d\'environnement');
}

// Configuration des options de NextAuth
const nextAuthOptions: NextAuthOptions = {
providers: [
  GitHubProvider({
    clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
  })
],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async signIn(params) {
            console.log('callbackUrl :', params.callbackUrl);
        },
        async error(params) {
            console.log('Erreur d\'authentification: ', params.req.query.error);
            // Autre logique pour gérer l'erreur d'authentification
            params.res.redirect('/auth-error');
        },
    },
};

// Création de l'application NextAuth avec les options configurées
const nextAuthApp = NextAuth(nextAuthOptions);

// Exportation de l'application NextAuth
export default nextAuthApp;
