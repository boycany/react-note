import style from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form } from "react-router-dom";

function NewPost() {
    return (
        <Modal>
            <Form method="post" className={style.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        name="body"
                        id="body"
                        rows="3"
                        required
                    ></textarea>
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={style.actions}>
                    <Link to="/" type="button">
                        Cancel
                    </Link>
                    <button>Post</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;
