import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { redirect } from "react-router-dom";

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
