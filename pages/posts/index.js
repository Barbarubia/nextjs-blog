// Questa è la pagina che contiene tutti i posts del blog

import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Tutti gli articoli</title>
        <meta name="description" content="I miei articoli sui film e le serie TV del momento" />
      </Head>
      <AllPosts posts={props.allPosts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  };
}

export default AllPostsPage;
