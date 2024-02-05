export async function loader() {
    // console.log("import.meta.env.API_URL :>> ", import.meta.env.VITE_API_URL);
    const url = import.meta.env.VITE_API_URL;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    return data;
}
