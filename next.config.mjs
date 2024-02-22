/** @type {import('next').NextConfig} */
export default {
    async redirects() {
      return [
        {
          source: '/api/auth/callback/github',
          destination: '/notesList',
          permanent: false,
        },
      ];
    },
  };