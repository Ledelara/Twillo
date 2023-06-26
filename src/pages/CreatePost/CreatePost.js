import "./CreatePost.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      new URL(image);
    } catch (error) {
      console.log(error);
    }

    insertDocument({
      title,
      image,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <div className='create_post'>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe seus pensamentos com o mundo</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Conteúdo:</span>
          <textarea
            type="text"
            name="text"
            required
            placeholder="No que você está pensando hoje?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Inserir imagem: </span>
          <input 
            type="text"
            name="image"
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        {!response.loading && <button className="btn">Publicar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
