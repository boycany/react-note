import style from "./NewPost.module.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

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

NewPost.propTypes = {};

export default NewPost;

export async function action({ request }) {
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

    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return redirect("/");
}
