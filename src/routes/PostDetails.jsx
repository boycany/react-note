import { useLoaderData, Link, useNavigate, Form } from "react-router-dom";
import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";
import { useState } from "react";

function PostDetails() {
    const [post, setPost] = useState(useLoaderData());
    const navigate = useNavigate();
    // const post = useLoaderData();

    function inputChangeHandler(e) {
        const { name, value } = e.target;

        setPost((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function cancelHandler() {
        navigate("..");
    }

    if (!post) {
        return (
            <Modal>
                <main className={styles.details}>
                    <h1>Could not find the post.</h1>
                    <p>Please try again later.</p>
                    <p>
                        <Link to=".." className={styles.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <Form method="post" className={styles.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        name="body"
                        id="body"
                        rows="3"
                        required
                        value={post.body}
                        onChange={inputChangeHandler}
                    ></textarea>
                </p>
                <p>
                    <label htmlFor="author">Your Name</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        required
                        value={post.author}
                        onChange={inputChangeHandler}
                    />
                </p>
                <p className={styles.actions}>
                    <button type="button" onClick={cancelHandler}>
                        Cancel
                    </button>
                    <button>Update</button>
                </p>
            </Form>
        </Modal>
    );
}

export default PostDetails;
