import style from "./NewPost.module.css";
import PropTypes from "prop-types";

function NewPost({ onBodyChange, onAuthorChange }) {
    return (
        <form className={style.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    name="body"
                    id="body"
                    rows="3"
                    required
                    onChange={onBodyChange}
                ></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={onAuthorChange}
                />
            </p>
        </form>
    );
}

NewPost.propTypes = {
    onBodyChange: PropTypes.func.isRequired,
    onAuthorChange: PropTypes.func.isRequired,
};

export default NewPost;
