import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'


export default NextAuth({
    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    pages: {
        signIn: '/notesList',
        error: '/error',
      },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 jours
        updateAge: 24 * 60 * 60, // 24 heures
      },
      
})