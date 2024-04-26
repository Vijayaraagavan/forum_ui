import Post from "./Post";

export default function Posts({ posts, setPost }) {
  return (
    <>
      {posts &&
        posts.map((p) => {
          return <Post key={p._id} post={p} onUpdate={setPost} />;
        })}
    </>
  );
}
