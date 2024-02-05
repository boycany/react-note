export async function loader({ params }) {
    const url = import.meta.env.VITE_API_POST_URL;

    const response = await fetch(url + "/" + params.id + ".json");
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data;
}
