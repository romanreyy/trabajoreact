import React from "react";
import { useState } from 'react';
import { createPost } from "./Main";

export default function CreatePost () {
    const [post, setPost] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        createPost(post);
        setPost('');
    }

    return (
            <div>
                <form className="createPost" onSubmit={handleSubmit}>
                    <h1>Crea tu Post</h1>
                    <br/>
                    <textarea
                        className="textArea"
                        name="textArea"
                        placeholder="Escribe Markdown"
                        value={post}
                        onChange={event => {setPost(event.target.value);}}
                    />
                    <br/>
                    <input
                        className="posting"
                        type="submit"
                        value="postear"
                    />
                </form>
            </div>
        );
    }