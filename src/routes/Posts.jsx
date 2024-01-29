import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data.posts;
}
