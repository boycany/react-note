import style from "./NewPost.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

function NewPost({ onCancel, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        dayjs.extend(localizedFormat);
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
            date: dayjs().format("lll"),
        };
        console.log("postData :>> ", postData);
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={style.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    name="body"
                    id="body"
                    rows="3"
                    required
                    onChange={bodyChangeHandler}
                ></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={authorChangeHandler}
                />
            </p>
            <p className={style.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button>Post</button>
            </p>
        </form>
    );
}

NewPost.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onAddPost: PropTypes.func.isRequired,
};

export default NewPost;
