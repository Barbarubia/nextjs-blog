// Questa è la pagina dinamica che contiene il singolo post selezionato

import PostContent from "../../components/posts/single-post/post-content";
import { getPostsFiles, getPostData } from "../../lib/posts-util";

function SinglePostPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context; // uso context che è una chiave per l'oggetto "params"
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };

  // ALTERNATIVA: per non generare tutte le possibili paths in fase di deployment
  // return {
  //     paths: [],
  //     fallback: 'blocking',
  // }
}

export default SinglePostPage;
