
const firstTitle = document.getElementById("firstTitle");
const secondAuthor = document.getElementById("secondAuthor");
const genresList = document.getElementById("genresList");
const error = document.getElementById("error");

async function loadBooks() {
    try {
        const response = await fetch("books.json");

        if (!response.ok) {
            throw new Error("Could not load the book data.");
        }

        const data = await response.json();

        if (!Array.isArray(data.books) || data.books.length < 2) {
            throw new Error("The book data is incomplete.");
        }

        const book1 = data.books[0];
        const book2 = data.books[1];

        if (
            typeof book1.title !== "string" ||
            typeof book2.author !== "string" ||
            !Array.isArray(book1.genres) ||
            !Array.isArray(book2.genres)
        ) {
            throw new Error("The book data has an invalid format.");
        }

        firstTitle.textContent = "First book title: " + book1.title;
        secondAuthor.textContent = "Second book author: " + book2.author;

        [book1, book2].forEach(function(book) {
            const item = document.createElement("li");
            item.textContent = book.title + " — " + book.genres.join(", ");
            genresList.appendChild(item);
        });

    } catch (err) {
        error.textContent =
            "Unable to display book data. Please check the JSON file and try again.";
        console.error(err);
    }
}

loadBooks();
