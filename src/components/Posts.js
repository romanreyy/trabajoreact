import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Link} from "react-router-dom";

export function Posts({post}) {
    return (
        <div className="posts">
            <Markdown remarkPlugins={[remarkGfm]}>{post.title.slice(0, 25)}</Markdown>
            <Link to={`/DetailPost/${post.id}`} ><button>Ver Más</button></Link>
        </div>
    );
}

