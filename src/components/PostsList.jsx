import styles from "./PostsList.module.css";
import Post from "./Post";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                body={post.body}
                                id={post.id}
                                date={post.date}
                            />
                        );
                    })}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>No posts yet.</p>
                </div>
            )}
        </>
    );
}

PostsList.propTypes = {
    onStopPosting: PropTypes.func,
};

export default PostsList;
