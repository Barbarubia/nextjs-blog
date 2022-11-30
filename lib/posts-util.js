import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "/data/posts");

//Scrivo una funzione che entra in un file, estrae il contenuto e lo memorizza in un oggetto
function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // uso il metodo replace e una regEx per togliere l'estensione al nome del file
  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// Scrivo una funzione che entra nella cartella /data/posts e controlla quanti files markdown ci sono e usa la funzione getPostData creata poco sopra per estrarre i metadata da ogni singolo file

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // ordino i posts in ordine di data dal più recente
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Scrivo una funzione che filtra i posts in base alla chiave isFeatured: true per poterli visualizzare in HomePage
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
