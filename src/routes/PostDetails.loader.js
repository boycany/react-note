export async function loader({ params }) {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data.post;
}
