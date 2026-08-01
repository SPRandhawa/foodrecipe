const recipes = [
    
    {
        name: "Noodles",
        category: "chinese",
        image: "https://via.placeholder.com/300",
        steps: "Boil noodles and stir fry.",
        youtube: "https://www.youtube.com/results?search_query=noodles+recipe"
    },
    {
        name: "Gulab Jamun",
        category: "dessert",
        image: "https://via.placeholder.com/300",
        steps: "Fry balls and dip in sugar syrup.",
        youtube: "https://www.youtube.com/results?search_query=gulab+jamun"
    },
    {
        name: "Pizza",
        category: "western",
        image: "https://via.placeholder.com/300",
        steps: "Bake pizza with toppings.",
        youtube: "https://www.youtube.com/results?search_query=pizza+recipe"
    }
];

let currentCategory = "all";

// Display recipes
function displayRecipes() {
    const container = document.getElementById("recipes");
    container.innerHTML = "";

    recipes.forEach(r => {
        if (currentCategory === "all" || r.category === currentCategory) {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.image}">
                    <h3>${r.name}</h3>
                    <button onclick="showSteps('${r.name}', '${r.steps}')">View Recipe</button>
                    <button onclick="window.open('${r.youtube}')">YouTube</button>
                </div>
            `;
        }
    });
}

// Filter category
function filterCategory(cat) {
    currentCategory = cat;
    displayRecipes();
}

// Show modal
function showSteps(name, steps) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("title").innerText = name;
    document.getElementById("details").innerText = steps;
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Search
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

// Initial load
displayRecipes();
