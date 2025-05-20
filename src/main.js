import { fetchPsalmVerse } from '/src/api.js';

document.addEventListener("DOMContentLoaded", function () {
  const verseCard = document.getElementById("verse-card");
  const refreshBtn = document.getElementById("refresh-btn");

    function displayVerse(data) {
    verseCard.innerHTML = `
      <strong>${data.reference}</strong><br>
      "${data.text}"
    `;
  }

  async function getRandomPsalmVerse() {
    const chapter = Math.floor(Math.random() * 150) + 1;
    const verse = Math.floor(Math.random() * 6) + 1;

    verseCard.innerHTML = "Loading...";

    try {
      const data = await fetchPsalmVerse(chapter, verse);
      displayVerse(data);
    } catch (error) {
      verseCard.innerHTML = "Could not load Verse, Try Again Later :("
    }
  }

  refreshBtn.addEventListener("click", getRandomPsalmVerse);

  getRandomPsalmVerse();
});

