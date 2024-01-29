import {
    useLoaderData,
    Link,
    useNavigate,
    redirect,
    Form,
} from "react-router-dom";
import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";
import { useState } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

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

export async function loader({ params }) {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data.post;
}

export async function action({ request, params }) {
    console.log("params :>> ", params);
    const id = params.id;
    // data object with request property from react-router Form component
    const formData = await request.formData();
    console.log("request.formData :>> ", request.formData);

    dayjs.extend(localizedFormat);
    const postData = {
        body: formData.get("body"),
        author: formData.get("author"),
        date: dayjs().format("lll"),
    };
    console.log("postData :>> ", postData);
    // const postData = Object.fromEntries(formData);

    await fetch("http://localhost:8080/posts/" + id, {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return redirect("/");
}
