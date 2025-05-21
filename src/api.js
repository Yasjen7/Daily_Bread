//Exporting: This esync function fetches the api url, and the random verses.
export async function fetchPsalmVerse(chapter, verse) {
    try {
        // Call the API and responds with the given chaptr and verse
        const response = await fetch(
`https://bible-api.com/psalms+${chapter}:${verse}`);

        // If Statment: to check if the response is successful
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Converting response to JSON and returning the data
        const data = await response.json();
        return data;
    } catch (error) {
        // Caught error, logged error, thrown error to be handled
        console.error("Fetch error:", error);
        throw error;
}}