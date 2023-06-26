// CSS
import "./Home.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

// components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  
  const { documents: posts, loading } = useFetchDocuments("posts");

  return (
    <div className='home'>
      <h1>Seja bem-vindo(a)!</h1>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className='noposts'>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
