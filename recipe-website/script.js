const recipes = [
    {
        name: "Hakka Noodles",
        category: "chinese",
        image: "https://images.pexels.com/photos/14457500/pexels-photo-14457500.jpeg",
        steps: "Ingredients: 200g Hakka noodles, 1 cup sliced veggies (capsicum, cabbage, carrot, onion), 1 tbsp soy sauce, 1 tbsp chili sauce, 1 tsp vinegar, 2 tbsp oil, 1 tsp finely chopped garlic, salt, and pepper.\n\nStep 1: Boil 4 cups of water in a pot, add 1/2 tsp salt and 1 tsp oil, then cook the noodles for 3 to 4 minutes until al dente. Drain and rinse with cold water.\nStep 2: Heat 2 tbsp oil in a wok or deep skillet on high flame. Add finely chopped garlic and sliced onions, and stir-fry for 1 minute.\nStep 3: Add the capsicum, cabbage, and carrots. Stir-fry on high heat for 2 minutes to keep them crunchy.\nStep 4: Pour in 1 tbsp soy sauce, 1 tbsp chili sauce, and 1 tsp vinegar. Mix well.\nStep 5: Toss in the boiled noodles, season with salt and pepper, and stir-fry gently for 2 minutes until everything is evenly combined.",
        youtube: "https://youtu.be/4Q12_scB6AY?si=i_OPtupXNeNHKGFD",
    },
    {
        name: "Rasmalai",
        category: "indiandessert",
        image: "https://t4.ftcdn.net/jpg/09/57/47/67/240_F_957476745_su6xORsIwsCICelPjbe1Ax2CHqZjD83T.jpg",
        steps: "Ingredients: 1 liter full-fat milk (for rabri), 1 liter full-fat milk (for paneer/chenna), 2 tbsp lemon juice, 1 cup sugar, 4 cups water, 1/2 tsp cardamom powder, 10-12 saffron strands, 2 tbsp chopped nuts (pistachios, almonds).\n\nStep 1: Boil 1 liter milk in a wide pan for rabri. Simmer on low heat until reduced to half, adding sugar, saffron strands, and cardamom powder. Set aside to cool.\nStep 2: Boil the second batch of milk, turn off the flame, add lemon juice gradually to curdle the milk, and strain through a cheesecloth to get fresh chenna.\nStep 3: Rinse the chenna with cold water, squeeze out excess whey, and knead thoroughly for 8-10 minutes until smooth and non-sticky. Form small flattened disks.\nStep 4: Prepare syrup by boiling 1 cup sugar with 4 cups water. Gently drop the chenna disks into the boiling syrup, cover, and cook for 15 minutes.\nStep 5: Remove the disks, squeeze gently to drain excess syrup, and submerge them into the prepared saffron rabri. Chilling in the refrigerator for at least 2 hours before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Paneer Tikka Masala",
        category: "indian",
        image: "https://t3.ftcdn.net/jpg/02/39/85/08/240_F_239850803_mbpWlelBCN6sWQXAoZoHWLmdJMsBF6Sr.jpg",
        steps: "Ingredients: 250g paneer (cubed), 1/2 cup curd, 1 tbsp ginger-garlic paste, 1 tsp Kashmiri red chili powder, 1/2 tsp turmeric, 1 tsp garram masala, 1 large onion (chopped), 2 pureed tomatoes, 2 tbsp butter/oil, 2 tbsp fresh cream, salt to taste.\n\nStep 1: In a bowl, mix curd, ginger-garlic paste, red chili powder, turmeric, garam masala, and salt. Add paneer cubes and marinate for 30 minutes.\nStep 2: Grill or pan-fry the marinated paneer cubes in 1 tbsp oil until golden on all sides, then remove and set aside.\nStep 3: In the same pan, melt butter and sauté chopped onions until translucent. Add pureed tomatoes and cook until oil separates.\nStep 4: Add remaining spices, salt, and 1/2 cup water. Simmer into a smooth gravy for 5 minutes.\nStep 5: Stir in the grilled paneer cubes, add 2 tbsp fresh cream, cover and simmer for 2 minutes, and garnish with crushed kasuri methi.",
        youtube: "https://youtu.be",
    },
    {
        name: "Margherita Pizza",
        category: "italian",
        image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        steps: "Ingredients: 1 pizza dough base, 1/2 cup tomato pizza sauce, 1 cup fresh mozzarella cheese (sliced or shredded), 5-6 fresh basil leaves, 1 tbsp olive oil, pinch of dried oregano and chili flakes.\n\nStep 1: Preheat your oven to 220°C (425°F) and grease a pizza tray.\nStep 2: Stretch or roll out the pizza dough into an 8-10 inch circle on a floured surface.\nStep 3: Spread 1/2 cup of tomato pizza sauce evenly over the dough, leaving a small border around the edge.\nStep 4: Arrange the fresh mozzarella cheese evenly over the sauce.\nStep 5: Bake in the preheated oven for 12 to 15 minutes until the crust is golden and cheese is melted. Garnish with fresh basil, olive oil, and oregano before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Kaju Katli",
        category: "indiandessert",
        image: "https://t4.ftcdn.net/jpg/09/97/82/29/240_F_997822953_oCCk7NFp6zaqhLCxnu4IH8n5BdIW3sjn.jpg",
        steps: "Ingredients: 1 cup raw cashews (kaju), 1/2 cup sugar, 1/4 cup water, 1 tsp ghee, 1/4 tsp cardamom powder, edible silver foil (optional).\n\nStep 1: Grind raw cashews in a blender in short pulses until a fine powder is formed (do not overblend into a paste).\nStep 2: In a non-stick pan, combine 1/2 cup sugar and 1/4 cup water. Heat until the sugar dissolves and forms a half-thread consistency.\nStep 3: Lower the flame, add cashew powder, and stir continuously to avoid lumps.\nStep 4: Cook on low heat while stirring until the mixture thickens into a soft dough and leaves the sides of the pan. Add 1 tsp ghee.\nStep 5: Transfer dough to parchment paper, roll out flat to 1/4 inch thickness, let cool slightly, and cut into diamond shapes.",
        youtube: "https://youtu.be",
    },
    {
        name: "Apple Pie",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/6163268/pexels-photo-6163268.jpeg",
        steps: "Ingredients: 2 pie crust sheets, 5 cups sliced apples (peeled and cored), 1/2 cup sugar, 1 tsp cinnamon powder, 1/4 tsp nutmeg, 1 tbsp lemon juice, 2 tbsp butter, 1 egg (for egg wash).\n\nStep 1: In a large bowl, toss sliced apples with sugar, cinnamon powder, nutmeg, and lemon juice.\nStep 2: Line a 9-inch pie dish with one pie crust sheet and trim the edges.\nStep 3: Fill the crust with the spiced apple mixture and dot top with butter pieces.\nStep 4: Cover with the second pie crust, crimp edges to seal, and cut small vents on top for steam.\nStep 5: Brush top with beaten egg and bake at 200°C (400°F) for 40 to 45 minutes until crust is golden brown and filling bubbles.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veggie Burger",
        category: "western",
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        steps: "Ingredients: 2 burger buns, 1 cup boiled mashed potatoes, 1/2 cup boiled mixed veggies (peas, corn, carrots), 1/2 tsp cumin powder, 1/2 tsp chili powder, 1/2 cup breadcrumbs, 2 tbsp mayonnaise, lettuce, sliced tomato, cucumber, cheese slice, butter.\n\nStep 1: In a bowl, combine mashed potatoes, mixed veggies, cumin powder, chili powder, and salt. Mix thoroughly.\nStep 2: Shape the mixture into thick patties and coat each patty with breadcrumbs.\nStep 3: Heat 2 tbsp oil in a pan and shallow-fry the patties on medium heat until golden and crispy on both sides.\nStep 4: Lightly toast burger buns in butter on a skillet.\nStep 5: Spread mayonnaise on bun bases, lay fresh lettuce, place the crisp patty, top with cheese slice, tomato, and cucumber slices, and close with the top bun.",
        youtube: "https://youtu.be",
    },
    {
        name: "Chocolate Brownie",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
        steps: "Ingredients: 1/2 cup melted butter, 1 cup sugar, 2 eggs, 1 tsp vanilla extract, 1/3 cup cocoa powder, 1/2 cup all-purpose flour, 1/4 tsp salt, 1/2 cup chocolate chips.\n\nStep 1: Preheat oven to 175°C (350°F) and grease an 8x8 inch baking pan.\nStep 2: In a mixing bowl, whisk together melted butter and sugar until smooth. Add eggs one at a time, along with vanilla extract.\nStep 3: Sift in cocoa powder, all-purpose flour, and salt. Fold gently until completely combined without overmixing.\nStep 4: Fold in 1/2 cup chocolate chips and pour batter into prepared baking pan.\nStep 5: Bake for 20 to 25 minutes until the edges are firm and a toothpick inserted in center comes out with moist crumbs.",
        youtube: "https://youtu.be",
    },
    {
        name: "Gulab Jamun",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/37294501/pexels-photo-37294501.jpeg",
        steps: "Ingredients: 1 cup khoya/mawa (or milk powder + ghee mix), 2 tbsp all-purpose flour (maida), 1/4 tsp baking powder, 1.5 cups sugar, 1.5 cups water, 4 cardamom pods, 1 tsp rose water, oil or ghee for deep frying.\n\nStep 1: Prepare sugar syrup by boiling 1.5 cups sugar and 1.5 cups water with crushed cardamoms for 8-10 minutes until sticky. Add rose water and keep warm.\nStep 2: In a bowl, grate khoya, mix with all-purpose flour and baking powder. Knead softly into a smooth dough without cracks.\nStep 3: Divide dough into small, crack-free smooth balls.\nStep 4: Heat ghee or oil on low heat and deep-fry balls, rolling them continuously until dark golden brown.\nStep 5: Drain oil and submerge fried jamuns directly into warm sugar syrup for at least 2 hours before serving.",
        youtube: "https://youtu.be/eQPZv_bwKGA?si=Sm4zMDWbbjE1i97J",
    },
    {
        name: "Jalebi",
        category: "indiandessert",
        image: "https://t3.ftcdn.net/jpg/07/11/42/02/240_F_711420295_BiOlcl1vmtZaqdSwmP5r372ZYs58aEhb.jpg",
        steps: "Ingredients: 1 cup all-purpose flour (maida), 2 tbsp cornflour, 1/2 cup yogurt, 1/2 tsp baking soda, 1 cup sugar, 1/2 cup water, pinch of saffron/orange food color, 1 tsp lemon juice, oil or ghee for frying.\n\nStep 1: Whisk all-purpose flour, cornflour, yogurt, food color, and water into a smooth batter. Ferment for 8 hours (or use baking soda for instant batter).\nStep 2: Boil sugar and 1/2 cup water until 1-string consistency. Stir in lemon juice and saffron, then keep warm.\nStep 3: Pour the fermented batter into a squeeze bottle or cloth piping bag with a small hole.\nStep 4: Heat oil in a flat-bottomed pan on medium heat. Squeeze batter in concentric spiral rings directly into oil.\nStep 5: Fry until crisp and golden on both sides, transfer instantly into warm sugar syrup for 1 minute, drain, and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pizza",
        category: "italian",
        image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
        steps: "Ingredients: 1 pizza crust, 1/2 cup pizza sauce, 1.5 cups mozzarella cheese, sliced bell peppers, sweet corn, onions, olives, 1 tsp oregano, 1 tsp chili flakes.\n\nStep 1: Preheat oven to 220°C (425°F) or prepare a large heavy-bottomed skillet.\nStep 2: Spread pizza sauce evenly across pizza base.\nStep 3: Sprinkle half of the shredded mozzarella cheese over sauce.\nStep 4: Add sliced bell peppers, sweet corn, onions, and olives evenly across pizza.\nStep 5: Cover with remaining cheese, bake for 12-15 minutes (or pan-cook covered on low flame), top with oregano and chili flakes, then slice and serve.",
        youtube: "https://youtu.be/XY5nwHIRwKk?si=OLLY1CtHqBVZkBQf",
    },
    {
        name: "North Indian Veg Thali",
        category: "indian",
        image: "https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg",
        steps: "Ingredients: 1/2 cup yellow lentils (toor dal), 1 cup basmati rice, 2 cups whole wheat flour (for rotis), 1 tsp cumin seeds, 2 tbsp ghee, 1 chopped tomato, 1 chopped onion, turmeric, salt, spices.\n\nStep 1: Pressure cook yellow lentils with salt, turmeric, and water for 4 whistles to make Dal.\nStep 2: In a pot, cook washed basmati rice with cumin seeds tempered in 1 tsp ghee.\nStep 3: Heat 1 tbsp ghee in a pan, add cumin, chopped onions, and tomatoes to prepare temper, then pour into cooked dal.\nStep 4: Knead wheat flour with water into soft dough, roll out thin flatbreads (rotis), and cook on a hot griddle until puffed.\nStep 5: Plate cumin rice, hot dal, puffed rotis, salad, and pickles together on a round thali plate.",
        youtube: "https://youtu.be"
    },
    {
        name: "Masala Dosa",
        category: "indian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
        steps: "Ingredients: 2 cups dosa batter (fermented rice and urad dal batter), 3 boiled mashed potatoes, 1 sliced onion, 1 tsp mustard seeds, 1/2 tsp turmeric, curry leaves, 2 green chilies, oil/butter.\n\nStep 1: Heat 1 tbsp oil in a pan, add mustard seeds, curry leaves, chopped chilies, and sliced onions until soft.\nStep 2: Stir in turmeric, salt, mashed potatoes, and 3 tbsp water. Cook for 3 minutes to form potato masala.\nStep 3: Heat a flat non-stick tawa griddle, sprinkle water drops, and wipe clean.\nStep 4: Pour a ladleful of fermented dosa batter in center and spread thin in circular motion outward.\nStep 5: Drizzle oil around edges, cook until golden and crisp, place potato filling in center, fold, and serve with chutney.",
        youtube: "https://youtu.be"
    },
    {
        name: "Chole Bhature",
        category: "indian",
        image: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=2048x2048&w=is&k=20&c=zhmGombUCMWWkdI2COP1vh1bDma-3wS_FOv4GmHE41s=",
        steps: "Ingredients: 1 cup soaked chickpeas (chole), 2 pureed tomatoes, 1 chopped onion, 1 tbsp chole masala, 2 cups all-purpose flour (maida), 2 tbsp semolina (sooji), 1/2 cup curd, oil for deep frying.\n\nStep 1: Pressure cook soaked chickpeas with tea bag, salt, and water for 6 whistles until soft.\nStep 2: Heat 2 tbsp oil in a pan, sauté onions, add pureed tomatoes, chole masala, and cook until oil separates. Mix cooked chickpeas and simmer for 10 minutes.\nStep 3: For bhature, knead all-purpose flour, semolina, curd, pinch of baking powder, and warm water into soft dough. Rest for 2 hours.\nStep 4: Roll dough into oval discs.\nStep 5: Deep-fry in hot oil until bhature puff up golden on both sides. Serve hot with spicy chole.",
        youtube: "https://youtu.be"
    },
    {
        name: "Palak Paneer",
        category: "indian",
        image: "https://images.pexels.com/photos/17200452/pexels-photo-17200452.jpeg",
        steps: "Ingredients: 200g spinach leaves (palak), 200g paneer cubes, 1 chopped onion, 1 tbsp ginger-garlic paste, 2 green chilies, 1/2 tsp cumin seeds, 2 tbsp fresh cream, 1 tbsp butter/oil, salt.\n\nStep 1: Blanch spinach leaves in boiling water for 2 minutes, plunge into ice water, and blend into smooth puree with green chilies.\nStep 2: Heat butter in a pan, add cumin seeds, chopped onions, and ginger-garlic paste. Fry until light brown.\nStep 3: Add spinach puree, salt, and 1/4 cup water. Simmer on medium flame for 5 minutes.\nStep 4: Add raw or lightly pan-seared paneer cubes into gravy.\nStep 5: Stir in fresh cream, cook for another 2 minutes, and serve hot with naan or rice.",
        youtube: "https://youtu.be"
    },
    {
        name: "Falafel Wrap",
        category: "western",
        image: "https://images.pexels.com/photos/27556250/pexels-photo-27556250.jpeg",
        steps: "Ingredients: 1 cup soaked chickpeas, 1/2 cup fresh parsley, 3 garlic cloves, 1 tsp cumin, 1/2 cup flour, flatbreads/pita, tahini sauce, chopped lettuce, tomatoes, cucumbers.\n\nStep 1: Blend soaked chickpeas, parsley, garlic, cumin, salt, and flour in a food processor until coarse mix.\nStep 2: Shape mixture into small balls or thick patties.\nStep 3: Deep-fry or bake falafels at 190°C until golden brown and crispy on exterior.\nStep 4: Warm flatbreads or pita pockets on skillet.\nStep 5: Spread tahini sauce on flatbread, layer with shredded lettuce, chopped tomatoes, cucumbers, place hot falafel balls, wrap tightly, and serve.",
        youtube: "https://youtu.be"
    },
    {
        name: "Vegetarian Bibimbap",
        category: "western",
        image: "https://media.istockphoto.com/id/1404679258/photo/korean-vegetarian-bibimbap-fried-tofu-bento-box-hot-stone-bowl-with-salads-kimchi-bibimbap.jpg?s=2048x2048&w=is&k=20&c=FcZHvBqMFOBK5CLBAnubbqJpMOcmJ06T_Q2q4fzd6t8=",
        steps: "Ingredients: 2 cups cooked warm rice, 1/2 cup sautéed spinach, 1/2 cup sautéed carrots, 1/2 cup sautéed zucchini, 1/2 cup sautéed mushrooms, 1 egg (or pan-fried tofu), 2 tbsp Gochujang (Korean chili paste), 1 tsp sesame oil.\n\nStep 1: Cook short-grain white or brown rice.\nStep 2: Individually sauté spinach, julienned carrots, sliced zucchini, and mushrooms in sesame oil with salt.\nStep 3: Fry an egg sunny-side up (or fry tofu slices).\nStep 4: Scoop warm cooked rice into a bowl base.\nStep 5: Arrange sautéed vegetables side-by-side over rice, top with fried egg in center, and serve with Gochujang paste.",
        youtube: "https://youtu.be"
    },
    {
        name: "Khachapuri",
        category: "western",
        image: "https://images.pexels.com/photos/17027447/pexels-photo-17027447.jpeg",
        steps: "Ingredients: 2 cups bread flour, 1/2 tsp yeast, 3/4 cup warm water, 1/2 cup mozzarella, 1/2 cup feta/suluguni cheese, 1 egg yolk, 1 tbsp butter, salt.\n\nStep 1: Mix flour, yeast, salt, water, and knead into soft dough. Let rise for 1 hour.\nStep 2: Mix shredded mozzarella and crumbled feta cheese in a bowl.\nStep 3: Roll dough into oval shape, roll up opposite edges inward to form boat shape, and pinch ends closed.\nStep 4: Fill center boat cavity generously with cheese mixture.\nStep 5: Bake at 220°C (425°F) for 15 minutes, make a small well in center cheese, drop egg yolk with butter slice, bake 2 minutes more, and mix egg into hot cheese before eating.",
        youtube: "https://youtu.be"
    },
    {
        name: "Rasgulla",
        category: "indiandessert",
        image: "https://media.istockphoto.com/id/495022082/photo/indian-sweet-rasgulla-is-a-syrupy-dessert-indian-cottage-cheese.jpg?b=1&s=612x612&w=0&k=20&c=TSpoDZ-UUnja-OnuoIPDNE_fpVJjmFVAmDAy7dv9slw=",
        steps: "Ingredients: 1 liter cow milk, 2 tbsp lemon juice, 1 cup sugar, 4 cups water, 1/4 tsp cardamom powder.\n\nStep 1: Boil milk, turn off flame, stir in diluted lemon juice to curdle, then strain whey using cheesecloth.\nStep 2: Rinse fresh chenna under cold tap water and squeeze thoroughly to eliminate whey moisture.\nStep 3: Knead chenna on flat counter with heel of palm for 8-10 minutes until smooth and non-greasy, then roll into small smooth balls.\nStep 4: Boil sugar and 4 cups water in deep pot until bubbling high.\nStep 5: Drop chenna balls into boiling syrup, cover tight, and cook on high flame for 15 minutes until expanded and spongy. Serve chilled.",
        youtube: "https://youtu.be"
    },
    {
        name: "Kheer",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/31109623/pexels-photo-31109623.jpeg",
        steps: "Ingredients: 1 liter full-fat milk, 1/4 cup basmati rice (soaked for 30 minutes), 1/2 cup sugar, 4 crushed cardamom pods, 10 saffron strands, 2 tbsp sliced almonds and pistachios.\n\nStep 1: Rinse basmati rice and coarsely crush soaked grains using fingers.\nStep 2: Bring full-fat milk to boil in heavy-bottom pot, then lower flame.\nStep 3: Add crushed rice and cook on low heat for 25 minutes, stirring continuously to prevent sticking.\nStep 4: Once rice turns soft and milk thickens to creamy consistency, stir in sugar, saffron, and cardamom powder.\nStep 5: Simmer for another 5 minutes, garnish with sliced almonds and pistachios, and serve hot or chilled.",
        youtube: "https://youtu.be"
    },
        {
        name: "Waffles",
        category: "westerndessert",
        image: "https://pexels.com",
        steps: "Ingredients: 1 cup all-purpose flour, 1 tsp baking powder, 1 tbsp sugar, 1/4 tsp salt, 3/4 cup milk, 2 tbsp melted butter, 1 tsp vanilla extract, maple syrup or berries for serving.\n\nStep 1: Preheat your waffle iron according to the manufacturer's instructions.\nStep 2: In a large bowl, whisk together the all-purpose flour, baking powder, sugar, and salt.\nStep 3: Pour in the milk, melted butter, and vanilla extract. Whisk gently until just combined (minor lumps are fine).\nStep 4: Lightly grease the waffle iron plates with oil or butter spray.\nStep 5: Pour the batter onto the hot iron, close, and cook for 4 to 5 minutes until golden brown and crisp. Serve hot with maple syrup.",
        youtube: "https://youtu.be",
    },
    {
        name: "Idli",
        category: "indian",
        image: "https://ftcdn.net",
        steps: "Ingredients: 3 cups parboiled rice, 1 cup whole skinned urad dal (black gram), 1 tsp fenugreek seeds, salt to taste, oil for greasing.\n\nStep 1: Wash and soak rice and urad dal (with fenugreek seeds) in separate bowls of water for 4 to 6 hours.\nStep 2: Grind the urad dal into a fluffy paste and the rice into a slightly coarse batter. Mix both together with salt.\nStep 3: Cover and let the batter ferment in a warm place for 8 to 12 hours until it rises and doubles in volume.\nStep 4: Grease idli mould plates with oil and gently pour the fermented batter into each cavity.\nStep 5: Steam in an idli cooker or steamer on medium-high heat for 10 to 12 minutes. Let cool slightly before scooping out.",
        youtube: "https://youtu.be",
    },
    {
        name: "Vegetable Stew",
        category: "western",
        image: "https://pexels.com",
        steps: "Ingredients: 1 cup cubed potatoes, 1/2 cup chopped carrots, 1/2 cup green peas, 1 small onion (chopped), 2 cloves garlic (minced), 2 cups vegetable broth, 1 tbsp olive oil, 1 tsp dried thyme, salt, and black pepper.\n\nStep 1: Heat olive oil in a large deep pot over medium heat.\nStep 2: Add the minced garlic and chopped onions, sautéing for 2 to 3 minutes until translucent.\nStep 3: Toss in the potatoes, carrots, and green peas. Stir-fry everything together for about 2 minutes.\nStep 4: Pour in the vegetable broth and season with dried thyme, salt, and black pepper.\nStep 5: Bring to a boil, then cover and simmer on low heat for 20 minutes until the vegetables are completely tender.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Shepherd's Pie",
        category: "western",
        image: "https://pexels.com",
        steps: "Ingredients: 1 cup cooked brown lentils, 1 cup mixed veggies (corn, peas, carrots), 1 onion (chopped), 2 tbsp tomato paste, 1/2 cup vegetable broth, 3 large boiled potatoes, 2 tbsp milk, 1 tbsp butter, salt, and pepper.\n\nStep 1: Mash the boiled potatoes with butter, milk, salt, and pepper until smooth, then set aside.\nStep 2: Sauté onions in a pan, then add the mixed veggies, cooked lentils, tomato paste, and vegetable broth.\nStep 3: Simmer the lentil and vegetable filling for 5 minutes until the gravy thickens slightly.\nStep 4: Spread the veggie filling evenly into the bottom of a baking dish, then spread the mashed potatoes smoothly over the top.\nStep 5: Bake at 200°C (400°F) for 20 minutes until the potato topping turns golden brown and bubbles at the edges.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Hot Sizzler",
        category: "chinese",
        image: "https://ftcdn.net",
        steps: "Ingredients: 1 cup cooked fried rice or noodles, 1 Veggie Burger patty, 1/2 cup stir-fried veggies, 2 cabbage leaves, 2 tbsp barbeque sauce, 1 tsp chili flakes, 1 tbsp butter.\n\nStep 1: Prepare your fried rice/noodles, veggie patty, and stir-fried vegetables separately according to preference.\nStep 2: Heat an iron sizzler plate directly over a gas flame for 8 to 10 minutes until it becomes smoking hot.\nStep 3: Carefully place the hot iron plate onto its wooden base and line it immediately with fresh cabbage leaves to prevent burning.\nStep 4: Arrange portions of rice/noodles, the veggie patty, and stir-fried veggies side-by-side on top of the cabbage leaves.\nStep 5: Pour barbeque sauce over the food and drop a tablespoon of butter onto the edges of the hot iron plate to create steam and sizzle.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pav Bhaji",
        category: "indian",
        image: "https://images.pexels.com/photos/12476774/pexels-photo-12476774.jpeg",
        steps: "Ingredients: 2 cups mixed boiled veggies (potatoes, cauliflower, peas, carrots), 1 chopped onion, 2 pureed tomatoes, 1 tbsp pav bhaji masala, 1/2 cup butter, fresh coriander, lemon juice, 4 pav buns.\n\nStep 1: Mash all boiled vegetables thoroughly into a smooth mixture using a potato masher.\nStep 2: Heat 2 tbsp butter in a flat pan, sauté chopped onions until translucent, then add ginger-garlic paste.\nStep 3: Add pureed tomatoes, pav bhaji masala, red chili powder, and salt. Cook until butter separates.\nStep 4: Mix in the mashed vegetables along with 1/2 cup water. Simmer on low flame for 10 minutes, stirring occasionally.\nStep 5: Toast pav buns in butter on a griddle. Serve hot bhaji topped with fresh butter, coriander, and lemon juice alongside toasted pav.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Fried Rice",
        category: "chinese",
        image: "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg",
        steps: "Ingredients: 2 cups cooked cooled rice, 1 cup finely chopped veggies (carrots, beans, capsicum, spring onions), 1 tbsp soy sauce, 1 tsp vinegar, 1 tsp chopped garlic, 2 tbsp oil, salt, and black pepper.\n\nStep 1: Cook rice ahead of time and let it cool completely so the grains stay separate.\nStep 2: Heat 2 tbsp oil in a wok on high flame. Add chopped garlic and green chilies, stir-frying for 30 seconds.\nStep 3: Add the chopped carrots, beans, and capsicum. Toss continuously on high heat for 2 minutes to keep them crisp.\nStep 4: Add the cooked rice, soy sauce, vinegar, salt, and black pepper.\nStep 5: Toss everything gently on high heat for 2 minutes. Garnish with chopped spring onion greens and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Penne Arrabbiata",
        category: "italian",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        steps: "Ingredients: 200g penne pasta, 3 pureed tomatoes, 3 chopped garlic cloves, 1 tsp red chili flakes, 1 tbsp olive oil, fresh basil leaves, salt, and grated parmesan cheese.\n\nStep 1: Boil penne pasta in salted water until al dente, drain, and reserve 1/2 cup pasta water.\nStep 2: Heat olive oil in a pan over medium heat, add minced garlic and red chili flakes, sautéing until fragrant.\nStep 3: Add pureed tomatoes and salt, simmering for 10 minutes until the sauce thickens.\nStep 4: Stir in the boiled penne pasta along with a splash of reserved pasta water to coat evenly.\nStep 5: Toss with fresh basil leaves, sprinkle with parmesan cheese, and serve warm.",
        youtube: "https://youtu.be",
    }

];

let currentCategory = "all";

/* DISPLAY RECIPES */
function displayRecipes() {
    const container = document.getElementById("recipes");
    if (!container) return;

    container.innerHTML = "";
    const searchValue = document.getElementById("search").value.toLowerCase();

    recipes.forEach((r, index) => {
        const matchesCategory = currentCategory === "all" || r.category === currentCategory;
        const matchesSearch = r.name.toLowerCase().includes(searchValue);

        if (matchesCategory && matchesSearch) {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.image}" alt="${r.name}">
                    <h3>${r.name}</h3>
                    <button onclick="showRecipe(${index})">
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
function showRecipe(index) {
    const recipe = recipes[index];
    if (!recipe) return;

    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = recipe.name;
    document.getElementById("modal-text").innerText = recipe.steps;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* INITIAL LOAD */
document.addEventListener("DOMContentLoaded", displayRecipes);
