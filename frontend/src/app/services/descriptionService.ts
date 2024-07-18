export const getDescription = async () => {
    const response = await fetch(process.env.BACKEND_HOST + "/description");
    return response.json();
}