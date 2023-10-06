import React, {useState} from "react";
export default function CreatePost (){
    const  [title, setText] = useState([]);
    const handleAddPost = () => {
        const newTitle = {
            titulo: ""
        }
        setText([...title, newTitle])
    };
        return (
            <div>
                <form onSubmit={handleAddPost}
                      style={{
                          margin: "0 auto",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                      }}
                >
                    <h1>Crea tu Post</h1>
                    <br/>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="titulo"
                        onChange={handleAddPost}
                        style={{
                            height: "40px",
                            width: "300px",
                            fontSize: "18px"
                        }}
                    />
                    <br/>
                    <textarea
                        name="textArea"
                        placeholder="Contenido"

                        style={{
                            height: "200px",
                            width: "500px",
                            fontSize: "14px"
                        }}
                    />
                    <br/>
                    <button onSubmit={handleAddPost} type="submit" value="Postear"
                           style={{
                               height: "40px",
                               width: "100px"
                           }}
                    >
                        postear
                    </button>
                </form>

                <ul>
                    {title.map((title) => (
                        <li key={title.titulo}>{title.titulo}</li>
                    ))}
                </ul>
            </div>
        );
    }
