const recipes = [
    {
        name: "Hakka Noodles",
        category: "chinese",
        image: "https://www.google.com/search?q=hakka+noodles&sca_esv=b0e23ee05b473abd&hl=en-IN&udm=2&sxsrf=APpeQnvbLu8rN4DQOaG-8gfkhPjuUk8HpQ%3A1786124036211&ei=BBd2aqfBDPeVhvcPx6_4sAs&biw=393&bih=736&gs_ssp=eJz",
        steps: "Boil noodles and stir fry with vegetables.",
        youtube: "https://youtu.be/4Q12_scB6AY?si=i_OPtupXNeNHKGFD",
    },
    {
        name: "Gulab Jamun",
        category: "indiandessert",
        image: "https://share.google/j57s8lQfhekXmfjom",
        steps: "Fry dough balls and soak in sugar syrup.",
        youtube: "https://youtu.be/eQPZv_bwKGA?si=Sm4zMDWbbjE1i97J",
    },
    {
        name: "Pizza",
        category: "italian",
        image: "https://unsplash.com",
        steps: "Bake dough with sauce, cheese, and toppings.",
        youtube: "https://youtu.be/XY5nwHIRwKk?si=OLLY1CtHqBVZkBQf",
    }
];

let currentCategory = "all";

/* DISPLAY WITH FILTER & SEARCH COMBINED */
function displayRecipes() {
    const container = document.getElementById("recipes");
    if (!container) return;
    
    container.innerHTML = "";
    const searchValue = document.getElementById("search").value.toLowerCase();

    recipes.forEach(r => {
        // Match both Category filter and Search input simultaneously
        const matchesCategory = currentCategory === "all" || r.category === currentCategory;
        const matchesSearch = r.name.toLowerCase().includes(searchValue);

        if (matchesCategory && matchesSearch) {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.image}" alt="${r.name}">
                    <h3>${r.name}</h3>
                    <button onclick="showRecipe('${r.name.replace(/'/g, "\\'")}', '${r.steps.replace(/'/g, "\\'")}')">View Recipe</button>
                    <button onclick="window.open('${r.youtube}', '_blank')">YouTube</button>
                </div>
            `;
        }
    });
}

/* CATEGORY BUTTONS */
function setCategory(cat) {
    currentCategory = cat;
    // Sync dropdown value with button selection
    document.getElementById("filter").value = cat;
    displayRecipes();
}

/* FILTER DROPDOWN */
document.getElementById("filter").addEventListener("change", function () {
    currentCategory = this.value;
    displayRecipes();
});

/* SEARCH */
document.getElementById("search").addEventListener("input", displayRecipes);

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
