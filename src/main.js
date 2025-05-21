// The async function for the api is connected with this code.
import { fetchPsalmVerse } from '/src/api.js';

document.addEventListener("DOMContentLoaded", function () {
  const verseCard = document.getElementById("verse-card");
  const refreshBtn = document.getElementById("refresh-btn");

    // Displays the fetched verse in the card
    function displayVerse(data) {
    verseCard.innerHTML = `
      <strong>${data.reference}</strong><br>
      "${data.text}"
    `;
  }

  // Here the chapter and verse numbers are generated
  async function getRandomPsalmVerse() {
    const chapter = Math.floor(Math.random() * 150) + 1;
    const verse = Math.floor(Math.random() * 6) + 1;

    //loading message while it ... loads
    verseCard.innerHTML = "Loading...";

    // Fetching and displaying the verse data on the page
    try {
      const data = await fetchPsalmVerse(chapter, verse);
      displayVerse(data);
    } catch (error) {
      // Error message in case API fails
      verseCard.innerHTML = "Could not load Verse, Try Again Later :("
    }
  }

  // Click Event Listener for Refesh button
  refreshBtn.addEventListener("click", getRandomPsalmVerse);

  // Loads everything onto the page!
  getRandomPsalmVerse();
});

