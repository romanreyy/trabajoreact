import React from "react";
export default function CreatePost (){
        return (
            <div>
                <form className="createPost">
                    <h1>Crea tu Post</h1>
                    <br/>
                    <textarea
                        className="textArea"
                        name="textArea"
                        placeholder="Escribe Markdown"
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
