import '../App.css';
import {Posts} from '../components/Posts';
import {PostDomain} from "../Domain/Post";
export default function Main() {
    const postList = getPost()
    return (
        <div className="main">
            <div className="showPosts">
                {postList.map((object, i) => <Posts post={object}/>)}
            </div>
        </div>
    );
}
const getPost = () => {
    return findPosts();
};

export const createPost = (titulo) => {
    let persistedPosts = findPosts();
    let listOfPosts = [...persistedPosts, new PostDomain(titulo)];
    localStorage.setItem('persistedPosts', JSON.stringify(listOfPosts));
}

const findPosts = () => {
    return JSON.parse(localStorage.getItem('persistedPosts')) || [];
}