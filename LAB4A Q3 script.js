
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
    numberList.textContent = "";

    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");

        listItem.textContent = "The number is " + i;

        numberList.appendChild(listItem);
    }
}

generateBtn.addEventListener("click", generateNumbers);
