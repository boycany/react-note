// import PropTypes from "prop-types";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong!");
            }
            console.log("data :>> ", data);
            setPosts(data.posts);
            setUpdate(false);
            setIsLoading(false);
        }
        fetchPosts();
    }, [update]);

    function addPostHandler(postData) {
        async function createNewPost() {
            const response = await fetch("http://localhost:8080/posts", {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUpdate(true);
                console.log(data.message);
            } else {
                throw new Error(data.message || "Something went wrong!");
            }
        }
        createNewPost();
    }

    function updateList() {
        setUpdate(true);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {!isLoading && posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post, i) => {
                        return (
                            <Post
                                key={i}
                                author={post.author}
                                body={post.body}
                                id={post.id}
                                date={post.date}
                                updateList={updateList}
                            />
                        );
                    })}
                </ul>
            )}
            {!isLoading && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>No posts yet.</p>
                    {/* <p>Start adding some!</p> */}
                </div>
            )}
            {isLoading && (
                <div style={{ textAlign: "center", color: "white" }}>
                    Loading...
                </div>
            )}
        </>
    );
}

PostsList.propTypes = {
    isPosting: PropTypes.bool.isRequired,
    onStopPosting: PropTypes.func.isRequired,
};

export default PostsList;
