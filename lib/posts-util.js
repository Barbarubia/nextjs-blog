import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "/data/posts");

// Funzione per leggere tutti i nomi dei files dei posts
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// Funzione che entra in un file, estrae il contenuto e lo memorizza in un oggetto
export function getPostData(postIdentifier) {
  // uso il metodo replace e una regEx per togliere l'estensione al nome del file
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// Funzione che entra nella cartella /data/posts e controlla quanti files markdown ci sono e usa la funzione getPostData creata poco sopra per estrarre i metadata da ogni singolo file
export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // ordino i posts in ordine di data dal più recente
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Funzione che filtra i posts in base alla chiave isFeatured: true per poterli visualizzare in HomePage
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
