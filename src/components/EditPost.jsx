import { useState } from "react";
import style from "./NewPost.module.css";

function EditPost({ initialData, onCancel }) {
    const [postData, setPostData] = useState(initialData);

    function inputChangeHandler(e) {
        const { name, value } = e.target;
        setPostData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    <form className={style.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea
                name="body"
                id="body"
                rows="3"
                required
                value={postData.body}
                onChange={inputChangeHandler}
            ></textarea>
        </p>
        <p>
            <label htmlFor="author">Your Name</label>
            <input
                type="text"
                id="author"
                required
                value={postData.author}
                onChange={inputChangeHandler}
            />
        </p>
        <p className={style.actions}>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
            <button>Post</button>
        </p>
    </form>;
}

export default EditPost;
