import React from "react";
import '../App.css';
import {Posts} from '../components/Posts';
import {PostDomain} from "../Domain/Post";

export default function Main() {
    const postList = getPost()
    return (
        <div>
            <div className="showPosts">
                {postList.map((object, i) => <Posts post={object}/>)}
            </div>

        </div>

    );
}

const getPost = () => {
    const usePost = [];
    usePost.push(new PostDomain("hola argentina", "contenido 0", "12/08"))
    usePost.push(new PostDomain("hola barca", "contenido 4", "11/09"))
    usePost.push(new PostDomain("hola inter", "contenido 5", "30/04"))
    usePost.push(new PostDomain("hola hola", "contenido 10", "28/04"))

    return usePost;
};
