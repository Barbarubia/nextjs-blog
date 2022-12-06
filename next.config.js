/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "username mongodb", // sostituire con il nome impostato su MongoDB
    mongodb_password: "password mongodb", // sostituire con la psw impostata su MongoDB per l'user selezionato
    mongodb_clustername: "none cluster", // sostituire con il nome del cluster impostato su MongoDB
    mongodb_database: "nextjs-blog", // È il nome del DB che verrà creato su MongoDB
  },
};

module.exports = nextConfig;
