export const getDescription = async () => {
    const response = await fetch("http://127.0.0.1:8000/description");
    return response.json();
}