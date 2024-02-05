import PropTypes from "prop-types";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

function Post(props) {
    const navigate = useNavigate();

    async function deleteHandler() {
        if (!confirm("Are you sure you want to delete this post?")) return;
        const url =
            "https://note-db-615ab-default-rtdb.asia-southeast1.firebasedatabase.app/posts";

        // const url = `http://localhost:8080/posts/${props.id}`

        await fetch(url + "/" + props.id + ".json", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigate("/");
    }

    function editHandler() {
        navigate(`/${props.id}`);
    }

    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
            <p className={styles.date}>{props.date}</p>
            <div className={styles.footer}>
                <button
                    type="button"
                    className={styles.edit}
                    onClick={editHandler}
                >
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
    // updateList: PropTypes.func.isRequired,
};

export default Post;
