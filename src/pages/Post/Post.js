// CSS
import "./Post.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className='post_container'>
      {post && (
        <>
          <p><span>{post.createdBy}</span></p>
          <p>{post.title}</p>
          <img src={post.image} alt=""/>
          <p><span>Publicado em: </span>{post.createdAt.toDate().toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Post;
