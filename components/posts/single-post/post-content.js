import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const postData = {
  title: "1899",
  image: "1899.jpg",
  date: "2022-11-30",
  slug: "1899",
  content: "# Questo è il contenuto dell'articolo scritto in formato Markdown",
};

function PostContent() {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
