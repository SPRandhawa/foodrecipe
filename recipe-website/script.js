const recipes = [
    {
        name: "Hakka Noodles",
        category: "chinese",
        image: "https://source.unsplash.com/300x200/?noodles",
        steps: "Boil noodles and stir fry with vegetables.",
        youtube: "https://www.youtube.com/results?search_query=noodles+recipe"
    },
    {
        name: "Gulab Jamun",
        category: "indiandessert",
        image: "https://source.unsplash.com/300x200/?gulab-jamun",
        steps: "Fry dough balls and soak in sugar syrup.",
        youtube: "https://www.youtube.com/results?search_query=gulab+jamun"
    },
    {
        name: "Pizza",
        category: "italian",
        image: "https://source.unsplash.com/300x200/?pizza",
        steps: "Bake dough with sauce, cheese, and toppings.",
        youtube: "https://www.youtube.com/results?search_query=pizza+recipe"
    }
];

let currentCategory = "all";

/* DISPLAY */
function displayRecipes() {
    const container = document.getElementById("recipes");
    container.innerHTML = "";

    recipes.forEach(r => {
        if (currentCategory === "all" || r.category === currentCategory) {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.image}">
                    <h3>${r.name}</h3>
                    <button onclick="showRecipe('${r.name}', '${r.steps}')">View Recipe</button>
                    <button onclick="window.open('${r.youtube}')">YouTube</button>
                </div>
            `;
        }
    });
}

/* CATEGORY */
function setCategory(cat) {
    currentCategory = cat;
    displayRecipes();
}

/* SEARCH */
document.getElementById("search").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

/* FILTER DROPDOWN */
document.getElementById("filter").addEventListener("change", function () {
    currentCategory = this.value;
    displayRecipes();
});

/* MODAL */
function showRecipe(name, steps) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = name;
    document.getElementById("modal-text").innerText = steps;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* LOAD */
window.onload = displayRecipes;
