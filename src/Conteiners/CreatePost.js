import React, {useState} from "react";
import {PostDomain} from "../Domain/Post";

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

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // El mes es devuelto de 0 a 11, por lo que necesitas sumar 1
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
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
