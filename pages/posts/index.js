// Questa è la pagina che contiene tutti i posts del blog

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.allPosts} />;
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
