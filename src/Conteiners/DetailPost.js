import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Link, useParams} from "react-router-dom";
import {commentPostDomain} from "../Domain/Comment";
import ShowComments from "../components/ShowComments";

export default function DetailPost() {

    const { id } = useParams();
    const post = getPost(id);
    const comments = getComment(id);

    return (
        <div className="main">
            <div className="posts">
                <Markdown remarkPlugins={[remarkGfm]}>{post.title}</Markdown>
            </div>
            <hr/>
            <div className="conteinerShowPost">
                <div>
                    <h2>Comentarios:</h2>
                </div>
                <Link to={`/DetailPost/${id}/Comment`}><button className="buttonComment">agregar comentario</button></Link>
                <div>
                    {comments.map((object, i) => <ShowComments comment={object}/>)}
                </div>
            </div>
        </div>
    );
}

const getPost = (id) => {
    return findPosts().filter(post =>{
        return (post.id.toString() === id.toString());
    })[0];
}

const findPosts = () => {
    return JSON.parse(localStorage.getItem('persistedPosts')) || [];
};

const getComment = (postId) => {
    return findComments(postId);
};

export const createComment = (postId, comment) => {
    let comments = findComments(postId);
    let listOfComments = [...comments, new commentPostDomain(comment)];
    localStorage.setItem(postId, JSON.stringify(listOfComments));
};

const findComments = (postId) => {
    return JSON.parse(localStorage.getItem(postId)) || [];
};