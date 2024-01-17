import PropTypes from "prop-types";
import styles from "./Post.module.css";

function Post(props) {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
        </li>
    );
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Post;
