export async function loader({ params }) {
    const url =
        "https://note-db-615ab-default-rtdb.asia-southeast1.firebasedatabase.app/posts";

    const response = await fetch(url + "/" + params.id + ".json");
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data;
}
