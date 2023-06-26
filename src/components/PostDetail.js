import { Link } from "react-router-dom";

import "./PostDetail.css";

const PostDetail = ({ post }) => {
  return (
    <div className='post_detail'>
      <p className='createdby'>{post.createdBy}</p>
      <p>{post.title}</p>
      <img src={post.image} alt=''/>
      <p id="createdAt"><span>Publicado em: </span>{post.createdAt.toDate().toLocaleString()}</p>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ver mais
      </Link>
    </div>
  );
};

export default PostDetail;
