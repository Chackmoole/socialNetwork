import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ state, src }) => {
  return (
    <ul className={styles.posts}>
      {state.posts.map((post) => {
        return <Post message={post.message} likes={post.likes} src={src} />;
      })}
    </ul>
  );
};

export default Posts;
