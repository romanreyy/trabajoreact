import React, {useState, useEffect} from "react";
import '../App.css';
import {Posts} from '../components/Posts';
import {PostDomain} from "../Domain/Post";

export default function Main() {
    const postList = getPost()
    const [posteos, setPosteos] = useState([]);
    useEffect(() => {
        fetch('https://eo2s17azopubtjb.m.pipedream.net/')
            .then((response) => response.json())
            .then((data) => {
                setPosteos(data);
            })
    }, []);
    return (
        <div>
            <div className="showPosts">
                {postList.map((object, i) => <Posts post={object}/>)}
            </div>
            {posteos.map(posteos => (
                <div className="posts" key={posteos.id}>{posteos.title} {posteos.description}</div>
            ))}
        </div>

    );
}

const getPost = () => {
    const usePost = [];
    usePost.push(new PostDomain("hola argentina", "contenido 0", "12/08"))
    usePost.push(new PostDomain("hola barca", "contenido 4", "11/09"))
    usePost.push(new PostDomain("hola inter", "contenido 5", "30/04"))
    usePost.push(new PostDomain("hola hola", "contenido 10", "28/04"))
    usePost.push(new PostDomain("hola hola", "contenido 10", "28/04"))

    return usePost;
};