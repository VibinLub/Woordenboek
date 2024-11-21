document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const wordList = document.getElementById("word-list");
    const words = Array.from(wordList.getElementsByTagName("li"));

    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();

        words.forEach((word) => {
            const text = word.textContent.toLowerCase();
            word.style.display = text.includes(query) ? "" : "none";
        });
    });
});