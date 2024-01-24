import PropTypes from "prop-types";
import styles from "./Post.module.css";

function Post(props) {
    async function deleteHandler() {
        alert("Are you sure you want to delete this post?");
        const response = await fetch(
            `http://localhost:8080/posts/${props.id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log("data :>> ", data.message);
        props.updateList();
    }

    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
            <p className={styles.date}>{props.date}</p>
            <div className={styles.footer}>
                <button type="button" className={styles.edit}>
                    Edit
                </button>
                <button
                    type="button"
                    className={styles.delete}
                    onClick={deleteHandler}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    updateList: PropTypes.func.isRequired,
};

export default Post;
