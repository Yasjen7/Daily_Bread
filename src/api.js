export async function fetchPsalmVerse(chapter, verse) {
    try {
        const response = await fetch(
`https://bible-api.com/psalms+${chapter}:${verse}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
}}