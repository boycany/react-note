// import PropTypes from "prop-types";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
            <ul className={styles.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Green" body="Angular2.... " />
                <Post author="Duran" body="Dunk!!" />
            </ul>
        </>
    );
}

{
    /* PostsList.propTypes = {
    children: PropTypes.node.isRequired,
}; */
}

export default PostsList;
