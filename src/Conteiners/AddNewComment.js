import {useState} from "react";
import {createComment} from "./DetailPost";
import {useParams} from "react-router-dom";
export default function CreateComment () {
    const [comment, setComment] = useState('');
    const { postId } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        createComment(postId, comment);
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="formComment">
                <textarea
                    type="text"
                    className="textArea"
                    name="inputComment"
                    placeholder="Escribe tu opinion sobre este post..."
                    value={comment}
                    onChange={event => {
                        setComment(event.target.value);
                    }}
                />
                <input type="submit" value="Postear comentario" className="postear"/>
            </form>
        </div>
    );
}
