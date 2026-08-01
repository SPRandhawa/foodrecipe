
const recipes = {
    pizza: "Ingredients: Dough, Cheese, Tomato Sauce\nSteps: Bake at 200°C for 20 mins.",
    pasta: "Ingredients: Pasta, Cream, Garlic\nSteps: Boil pasta and mix with sauce.",
    burger: "Ingredients: Bun, Chicken Patty, Lettuce\nSteps: Assemble and serve."
};

// Show recipe
function showRecipe(name) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("recipe-title").innerText = name.toUpperCase();
    document.getElementById("recipe-details").innerText = recipes[name];
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Search functionality
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {
        let title = card.querySelector("h2").innerText.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
});
