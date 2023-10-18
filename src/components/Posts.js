export function Posts({post}) {
        return (
            <div className="posts">
                <h1> {post.title}</h1>
                <p>
                    {post.description}
                </p>
                <p>
                    {post.date}
                </p>
            </div>
        );
}

