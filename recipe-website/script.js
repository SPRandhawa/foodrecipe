const recipes = [
    {
        name: "Hakka Noodles",
        category: "chinese",
        image: "https://images.pexels.com/photos/14457500/pexels-photo-14457500.jpeg",
        steps: "Boil noodles and stir fry with vegetables.",
        youtube: "https://youtu.be/4Q12_scB6AY?si=i_OPtupXNeNHKGFD",
    },
    {
        name: "Rasmalai",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/12737808/pexels-photo-12737808.jpeg",
        steps: "Soak flattened cottage cheese balls in sweet, thickened saffron milk.",
        youtube: "https://youtu.be",
    },
    {
        name: "Paneer Tikka Masala",
        category: "indian",
        image: "https://images.pexels.com/photos/9603930/pexels-photo-9603930.jpeg",
        steps: "Grill marinated cottage cheese and simmer in a spiced tomato gravy.",
        youtube: "https://youtu.be",
    },
    {
        name: "Margherita Pizza",
        category: "italian",
        image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        steps: "Top freshly rolled dough with tomato sauce, mozzarella, and basil.",
        youtube: "https://youtu.be",
    },
    {
        name: "Kaju Katli",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/14883750/pexels-photo-14883750.jpeg",
        steps: "Cook ground cashew paste with sugar syrup and roll into diamonds.",
        youtube: "https://youtu.be",
    },
    {
        name: "Apple Pie",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/6163268/pexels-photo-6163268.jpeg",
        steps: "Bake spiced apple slices inside a flaky, golden pastry crust.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veggie Burger",
        category: "western",
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        steps: "Grill a mixed vegetable patty and serve in a bun with fresh lettuce.",
        youtube: "https://youtu.be",
    },
    {
        name: "Chocolate Brownie",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
        steps: "Bake a rich chocolate and butter batter until fudgy in the center.",
        youtube: "https://youtu.be",
    },
    {
        name: "Grilled Steak",
        category: "western",
        image: "https://images.pexels.com/photos/361184/pexels-photo-361184.jpeg",
        steps: "Sear seasoned meat on a hot grill and baste with garlic herb butter.",
        youtube: "https://youtu.be",
    },
    {
        name: "Gulab Jamun",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/37294501/pexels-photo-37294501.jpeg",
        steps: "Fry dough balls and soak in sugar syrup.",
        youtube: "https://youtu.be/eQPZv_bwKGA?si=Sm4zMDWbbjE1i97J",
    },
    {
        name: "Jalebi",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/12028892/pexels-photo-12028892.jpeg",
        steps: "Deep-fry fermented batter in spirals and soak in sugar syrup.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pizza",
        category: "italian",
        image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
        steps: "Bake dough with sauce, cheese, and toppings.",
        youtube: "https://youtu.be/XY5nwHIRwKk?si=OLLY1CtHqBVZkBQf",
    }
];

let currentCategory = "all";

/* DISPLAY RECIPES */
function displayRecipes() {
    const container = document.getElementById("recipes");
    if (!container) return;

    container.innerHTML = "";
    const searchValue = document.getElementById("search").value.toLowerCase();

    recipes.forEach(r => {
        const matchesCategory = currentCategory === "all" || r.category === currentCategory;
        const matchesSearch = r.name.toLowerCase().includes(searchValue);

        if (matchesCategory && matchesSearch) {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.image}" alt="${r.name}">
                    <h3>${r.name}</h3>
                    <button onclick="showRecipe('${r.name.replace(/'/g, "\\'")}', '${r.steps.replace(/'/g, "\\'")}')">
                        View Recipe
                    </button>
                    <button onclick="window.open('${r.youtube}', '_blank')">
                        YouTube
                    </button>
                </div>
            `;
        }
    });
}

/* CATEGORY SELECTION */
function setCategory(cat) {
    currentCategory = cat;
    document.getElementById("filter").value = cat;
    displayRecipes();
}

/* FILTER DROPDOWN EVENT */
document.getElementById("filter").addEventListener("change", function () {
    currentCategory = this.value;
    displayRecipes();
});

/* SEARCH EVENT */
document.getElementById("search").addEventListener("input", displayRecipes);

/* MODAL CONTROL */
function showRecipe(name, steps) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = name;
    document.getElementById("modal-text").innerText = steps;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* INITIAL LOAD */
document.addEventListener("DOMContentLoaded", displayRecipes);
