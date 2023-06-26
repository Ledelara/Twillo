import "./EditPost.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [formError, setFormError] = useState("");

  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  const { updateDocument, response } = useUpdateDocument("posts");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
    }
  }, [post]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const data = {
      title,
      image,
    };

    updateDocument(id, data);

    navigate("/dashboard");
  };

  return (
    <div className='edit_post'>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name="text"
                required
                placeholder="Pense num bom título..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>URL da imagem:</span>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Insira uma imagem que representa seu post"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
            </label>
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
