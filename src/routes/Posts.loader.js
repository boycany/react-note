export async function loader() {
    const url =
        "https://note-db-615ab-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json";

    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data;
}
