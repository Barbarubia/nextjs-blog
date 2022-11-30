// Questa è la pagina che contiene tutti i posts del blog

import AllPosts from "../../components/posts/all-posts";

const postsArray = [
  {
    title: "1899",
    image: "1899.jpg",
    excerpt:
      "La crew e i passeggeri a bordo di un piroscafo in viaggio da Londra a New York sono coinvolti in un misterioso enigma dopo aver trovato una seconda nave alla deriva in mare aperto.",
    date: "2022-11-30",
    slug: "1899",
  },
  {
    title: "The Devil's Hour",
    image: "thedevilshour.jpg",
    excerpt:
      "Lucy si sveglia ogni notte alle 3:33 in punto. Per molto tempo, niente nella sua vita ha avuto senso. Ma le risposte si trovano là fuori, da qualche parte, alla fine di una scia di brutali omicidi.",
    date: "2022-11-30",
    slug: "the-devils-hour",
  },
  {
    title: "Night Sky",
    image: "nightsky.jpg",
    excerpt:
      "Franklin e Irene York hanno scoperto, anni fa, un'anticamera sepolta nel loro giardino che conduce a un pianeta deserto. Da allora, hanno mantenuto con cura il loro segreto. Tuttavia, un giovane enigmatico sconvolgerà le loro vite.",
    date: "2022-11-30",
    slug: "night-sky",
  },
  {
    title: "The Watcher",
    image: "thewatcher.jpg",
    excerpt:
      "Una famiglia si trasferisce nella casa dei suoi sogni, ma finirà per essere poi tormentata da lettere minacciose, strani vicini e sinistre minacce.",
    date: "2022-11-30",
    slug: "the-watcher",
  },
];

function AllPostsPage() {
  return <AllPosts posts={postsArray} />;
}

export default AllPostsPage;
