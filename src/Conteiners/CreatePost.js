import React from "react";
export default function CreatePost ({onPostCreated}){
    const [postText, setPostText] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Crear una nueva publicación con el contenido y la fecha actual
    const newPost = new PostDomain(postText, "Contenido del nuevo post", getCurrentDate());
    onPostCreated(newPost);
    // Limpiar el área de texto después de crear el post
    setPostText("");
  };
        return (
            <div>
                <form className="createPost">
                    <h1>Crea tu Post</h1>
                    <br/>
                    <textarea
                        className="textArea"
                        name="textArea"
                        placeholder="Escribe Markdown"
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    />
                    <br/>
                    <button
                        className="posting"
                        type="submit"
                        value="Postear"

                    >
                        Postear
                    </button>
                </form>
            </div>
        );
    }
