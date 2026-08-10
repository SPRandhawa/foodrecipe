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
        image: "https://images.pexels.com/photos/36999587/pexels-photo-36999587.jpeg",
        steps: "Ingredients: 1 cup all-purpose flour, 1 tsp baking powder, 1 tbsp sugar, 1/4 tsp salt, 3/4 cup milk, 2 tbsp melted butter, 1 tsp vanilla extract, maple syrup or berries for serving.\n\nStep 1: Preheat your waffle iron according to the manufacturer's instructions.\nStep 2: In a large bowl, whisk together the all-purpose flour, baking powder, sugar, and salt.\nStep 3: Pour in the milk, melted butter, and vanilla extract. Whisk gently until just combined (minor lumps are fine).\nStep 4: Lightly grease the waffle iron plates with oil or butter spray.\nStep 5: Pour the batter onto the hot iron, close, and cook for 4 to 5 minutes until golden brown and crisp. Serve hot with maple syrup.",
        youtube: "https://youtu.be",
    },
    {
        name: "Idli",
        category: "indian",
        image: "https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg",
        steps: "Ingredients: 3 cups parboiled rice, 1 cup whole skinned urad dal (black gram), 1 tsp fenugreek seeds, salt to taste, oil for greasing.\n\nStep 1: Wash and soak rice and urad dal (with fenugreek seeds) in separate bowls of water for 4 to 6 hours.\nStep 2: Grind the urad dal into a fluffy paste and the rice into a slightly coarse batter. Mix both together with salt.\nStep 3: Cover and let the batter ferment in a warm place for 8 to 12 hours until it rises and doubles in volume.\nStep 4: Grease idli mould plates with oil and gently pour the fermented batter into each cavity.\nStep 5: Steam in an idli cooker or steamer on medium-high heat for 10 to 12 minutes. Let cool slightly before scooping out.",
        youtube: "https://youtu.be",
    },
    {
        name: "Vegetable Stew",
        category: "western",
        image: "https://images.pexels.com/photos/5378533/pexels-photo-5378533.jpeg",
        steps: "Ingredients: 1 cup cubed potatoes, 1/2 cup chopped carrots, 1/2 cup green peas, 1 small onion (chopped), 2 cloves garlic (minced), 2 cups vegetable broth, 1 tbsp olive oil, 1 tsp dried thyme, salt, and black pepper.\n\nStep 1: Heat olive oil in a large deep pot over medium heat.\nStep 2: Add the minced garlic and chopped onions, sautéing for 2 to 3 minutes until translucent.\nStep 3: Toss in the potatoes, carrots, and green peas. Stir-fry everything together for about 2 minutes.\nStep 4: Pour in the vegetable broth and season with dried thyme, salt, and black pepper.\nStep 5: Bring to a boil, then cover and simmer on low heat for 20 minutes until the vegetables are completely tender.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Shepherd's Pie",
        category: "western",
        image: "https://images.pexels.com/photos/33674221/pexels-photo-33674221.jpeg",
        steps: "Ingredients: 1 cup cooked brown lentils, 1 cup mixed veggies (corn, peas, carrots), 1 onion (chopped), 2 tbsp tomato paste, 1/2 cup vegetable broth, 3 large boiled potatoes, 2 tbsp milk, 1 tbsp butter, salt, and pepper.\n\nStep 1: Mash the boiled potatoes with butter, milk, salt, and pepper until smooth, then set aside.\nStep 2: Sauté onions in a pan, then add the mixed veggies, cooked lentils, tomato paste, and vegetable broth.\nStep 3: Simmer the lentil and vegetable filling for 5 minutes until the gravy thickens slightly.\nStep 4: Spread the veggie filling evenly into the bottom of a baking dish, then spread the mashed potatoes smoothly over the top.\nStep 5: Bake at 200°C (400°F) for 20 minutes until the potato topping turns golden brown and bubbles at the edges.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Hot Sizzler",
        category: "chinese",
        image: "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg",
        steps: "Ingredients: 1 cup cooked fried rice or noodles, 1 Veggie Burger patty, 1/2 cup stir-fried veggies, 2 cabbage leaves, 2 tbsp barbeque sauce, 1 tsp chili flakes, 1 tbsp butter.\n\nStep 1: Prepare your fried rice/noodles, veggie patty, and stir-fried vegetables separately according to preference.\nStep 2: Heat an iron sizzler plate directly over a gas flame for 8 to 10 minutes until it becomes smoking hot.\nStep 3: Carefully place the hot iron plate onto its wooden base and line it immediately with fresh cabbage leaves to prevent burning.\nStep 4: Arrange portions of rice/noodles, the veggie patty, and stir-fried veggies side-by-side on top of the cabbage leaves.\nStep 5: Pour barbeque sauce over the food and drop a tablespoon of butter onto the edges of the hot iron plate to create steam and sizzle.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pav Bhaji",
        category: "indian",
        image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg",
        steps: "Ingredients: 2 cups mixed boiled veggies (potatoes, cauliflower, peas, carrots), 1 chopped onion, 2 pureed tomatoes, 1 tbsp pav bhaji masala, 1/2 cup butter, fresh coriander, lemon juice, 4 pav buns.\n\nStep 1: Mash all boiled vegetables thoroughly into a smooth mixture using a potato masher.\nStep 2: Heat 2 tbsp butter in a flat pan, sauté chopped onions until translucent, then add ginger-garlic paste.\nStep 3: Add pureed tomatoes, pav bhaji masala, red chili powder, and salt. Cook until butter separates.\nStep 4: Mix in the mashed vegetables along with 1/2 cup water. Simmer on low flame for 10 minutes, stirring occasionally.\nStep 5: Toast pav buns in butter on a griddle. Serve hot bhaji topped with fresh butter, coriander, and lemon juice alongside toasted pav.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Fried Rice",
        category: "chinese",
        image: "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg",
        steps: "Ingredients: 2 cups cooked cooled rice, 1 cup finely chopped veggies (carrots, beans, capsicum, spring onions), 1 tbsp soy sauce, 1 tsp vinegar, 1 tsp chopped garlic, 2 tbsp oil, salt, and black pepper.\n\nStep 1: Cook rice ahead of time and let it cool completely so the grains stay separate.\nStep 2: Heat 2 tbsp oil in a wok on high flame. Add chopped garlic and green chilies, stir-frying for 30 seconds.\nStep 3: Add the chopped carrots, beans, and capsicum. Toss continuously on high heat for 2 minutes to keep them crisp.\nStep 4: Add the cooked rice, soy sauce, vinegar, salt, and black pepper.\nStep 5: Toss everything gently on high heat for 2 minutes. Garnish with chopped spring onion greens and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Penne Arrabbiata",
        category: "italian",
        image: "https://images.pexels.com/photos/11161425/pexels-photo-11161425.jpeg",
        steps: "Ingredients: 200g penne pasta, 3 pureed tomatoes, 3 chopped garlic cloves, 1 tsp red chili flakes, 1 tbsp olive oil, fresh basil leaves, salt, and grated parmesan cheese.\n\nStep 1: Boil penne pasta in salted water until al dente, drain, and reserve 1/2 cup pasta water.\nStep 2: Heat olive oil in a pan over medium heat, add minced garlic and red chili flakes, sautéing until fragrant.\nStep 3: Add pureed tomatoes and salt, simmering for 10 minutes until the sauce thickens.\nStep 4: Stir in the boiled penne pasta along with a splash of reserved pasta water to coat evenly.\nStep 5: Toss with fresh basil leaves, sprinkle with parmesan cheese, and serve warm.",
        youtube: "https://youtu.be",
    },
    {
        name: "Amritsari Kulcha",
        category: "indian",
        image: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg",
        steps: "Ingredients: 2 cups maida, 3 boiled potatoes, 1 finely chopped onion, 1 tsp crushed coriander seeds, 1/2 tsp ajwain, 1 tsp dry mango powder (amchur), green chilies, fresh coriander, butter, salt.\n\nStep 1: Knead maida with water, a pinch of baking powder, and 1 tbsp ghee into a smooth dough; rest for 30 minutes.\nStep 2: Mash boiled potatoes with onions, green chilies, coriander seeds, ajwain, amchur, fresh coriander, and salt.\nStep 3: Roll out a dough ball, place potato stuffing inside, seal tightly, and gently roll into a thick disc.\nStep 4: Press crushed coriander seeds and fresh coriander on top; bake in a tandoor or cook on a tawa until golden.\nStep 5: Apply generous butter, crush lightly with hands, and serve hot with chole and tamarind chutney.",
        youtube: "https://youtu.be",
    },
    {
        name: "Sarson ka Saag",
        category: "indian",
        image: "https://images.pexels.com/photos/8625948/pexels-photo-8625948.jpeg",
        steps: "Ingredients: 500g mustard greens (sarson), 250g spinach (palak), 125g bathua, 2 tbsp maize flour (makki atta), 2 tbsp ghee, 1 inch ginger, 6-8 garlic cloves, 2 onions, 2 tomatoes, green chilies, salt.\n\nStep 1: Chop all greens finely and pressure cook with ginger, garlic, green chilies, water, and salt for 4-5 whistles.\nStep 2: Mash the greens thoroughly with a wooden masher while gradually adding maize flour to thicken.\nStep 3: Heat 2 tbsp ghee in a pan, sauté chopped onions and tomatoes until oil separates.\nStep 4: Pour the mashed greens into the tempering and simmer on low heat for 15-20 minutes.\nStep 5: Serve steaming hot with a dollop of white butter and fresh Makki ki Roti.",
        youtube: "https://youtu.be",
    },
    {
        name: "Rajma Chawal",
        category: "indian",
        image: "https://images.pexels.com/photos/12737913/pexels-photo-12737913.jpeg",
        steps: "Ingredients: 1 cup kidney beans (rajma), 2 chopped onions, 2 pureed tomatoes, 1 tbsp ginger-garlic paste, 1 tsp cumin, 1 tsp garam masala, 1 tsp red chili powder, 2 tbsp oil, cooked basmati rice, salt.\n\nStep 1: Soak rajma overnight and pressure cook with salt and water for 6-7 whistles until completely soft.\nStep 2: Heat oil in a pan, add cumin seeds, chopped onions, and ginger-garlic paste; sauté until golden brown.\nStep 3: Add tomato puree, red chili powder, turmeric, and cook until oil separates from the masala.\nStep 4: Add boiled rajma along with its cooking water, mash a few beans to thicken, and simmer for 15 minutes.\nStep 5: Garnish with fresh coriander and garam masala, and serve hot over steamed basmati rice.",
        youtube: "https://youtu.be",
    },
    {
        name: "Poori Chole",
        category: "indian",
        image: "https://images.pexels.com/photos/20422124/pexels-photo-20422124.jpeg",
        steps: "Ingredients: 2 cups whole wheat flour (atta), 1 tsp semolina (sooji), 1/2 tsp ajwain, oil for deep frying, salt, cooked spicy chickpea curry (chole).\n\nStep 1: Mix whole wheat flour, semolina, ajwain, salt, and 1 tsp oil; knead into a firm, tight dough.\nStep 2: Rest dough for 15 minutes, then divide into small equal-sized balls.\nStep 3: Roll each ball into a small, medium-thick disc applying a drop of oil.\nStep 4: Heat oil on high flame and slide the poori in, pressing lightly with a slotted spoon until it puffs up completely.\nStep 5: Flip and fry until golden brown on both sides; drain on paper towels and serve hot with spicy chole.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Momos",
        category: "chinese",
        image: "https://images.pexels.com/photos/28445593/pexels-photo-28445593.jpeg",
        steps: "Ingredients: 1.5 cups all-purpose flour (maida), 1 cup finely shredded cabbage, 1/2 cup grated carrots, 1/4 cup chopped spring onion, 1 tsp soy sauce, 1 tsp minced garlic, salt, pepper.\n\nStep 1: Knead maida with water and a pinch of salt into a smooth, firm dough; cover and rest for 20 minutes.\nStep 2: Sauté cabbage, carrots, spring onions, garlic, soy sauce, pepper, and salt in 1 tsp oil on high heat for 2 minutes.\nStep 3: Roll dough into small, thin circular wrappers with thinner edges.\nStep 4: Place a spoonful of veg filling in the center, pleat the edges together, and pinch to seal top.\nStep 5: Steam momos in a greased steamer for 10-12 minutes until translucent, and serve hot with spicy red chili sauce.",
        youtube: "https://youtu.be",
    },
    {
        name: "Steamed Dumplings",
        category: "chinese",
        image: "https://images.pexels.com/photos/3911225/pexels-photo-3911225.jpeg",
        steps: "Ingredients: 1.5 cups flour, 1 cup minced mushrooms, 1/2 cup minced paneer/tofu, 1 tsp sesame oil, 1 tbsp soy sauce, 1 tsp minced ginger, spring onions, salt.\n\nStep 1: Knead flour and warm water into a soft dough and let it rest under a damp cloth for 30 minutes.\nStep 2: Mix minced mushrooms, tofu, ginger, spring onions, soy sauce, sesame oil, and salt in a bowl for the filling.\nStep 3: Roll dough into thin wrappers, add filling in the middle, fold in half, and pinch folded edges into half-moon shapes.\nStep 4: Place dumplings on cabbage leaves inside a bamboo steamer.\nStep 5: Steam for 10-12 minutes until wrappers look glossy, and serve warm with soy-dip sauce.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pani Puri",
        category: "indian",
        image: "https://images.pexels.com/photos/12318206/pexels-photo-12318206.jpeg",
        steps: "Ingredients: 30 crispy puris, 1 cup mint leaves, 1/2 cup coriander leaves, 2 green chilies, 1 inch ginger, 1 tbsp tamarind paste, 1 tsp black salt, 1 tsp roasted cumin powder, boiled potatoes, boiled chickpeas, nylon sev.\n\nStep 1: Blend mint, coriander, green chilies, and ginger into a smooth paste.\nStep 2: Mix paste with 4 cups chilled water, tamarind paste, black salt, and cumin powder to prepare spicy 'teekha pani'.\nStep 3: Mash boiled potatoes and chickpeas together with salt and cumin powder for the stuffing.\nStep 4: Crack a hole in the top of a crispy puri and fill with potato-chickpea mixture.\nStep 5: Fill to the brim with chilled spicy mint water and consume immediately.",
        youtube: "https://youtu.be",
    },
    {
        name: "Samosa Chaat",
        category: "indian",
        image: "https://images.pexels.com/photos/32894826/pexels-photo-32894826.jpeg",
        steps: "Ingredients: 2 crisp samosas, 1 cup warm ragda/chole curry, 2 tbsp whisked sweet curd, 1 tbsp green mint chutney, 1 tbsp sweet tamarind chutney, chopped onions, coriander, nylon sev, chaat masala.\n\nStep 1: Lightly break samosas into large bite-sized chunks and place them on a shallow serving plate.\nStep 2: Pour warm chole or ragda curry generously over the broken samosas.\nStep 3: Drizzle whisked sweet curd, spicy green mint chutney, and tangy sweet tamarind chutney on top.\nStep 4: Sprinkle finely chopped onions, fresh coriander leaves, nylon sev, and a pinch of chaat masala.\nStep 5: Serve immediately while crisps stay crunchy.",
        youtube: "https://youtu.be",
    },
    {
        name: "Bhel Puri",
        category: "indian",
        image: "https://images.pexels.com/photos/38878940/pexels-photo-38878940.jpeg",
        steps: "Ingredients: 2 cups puffed rice (muri), 1/2 cup papdi (crushed), 1/2 cup boiled potato (cubed), 1/4 cup finely chopped onion, 1/4 cup chopped tomato, 2 tbsp sweet tamarind chutney, 1 tbsp green chutney, nylon sev, fresh coriander.\n\nStep 1: Dry roast puffed rice in a pan on low flame for 2 minutes to make it extra crispy.\nStep 2: In a large bowl, mix roasted puffed rice, crushed papdis, cubed potatoes, chopped onions, and tomatoes.\nStep 3: Add green chili chutney and sweet tamarind chutney according to taste.\nStep 4: Toss everything quickly and thoroughly using two spoons so puffed rice doesn't get soggy.\nStep 5: Garnish with generous nylon sev, fresh coriander, and serve right away.",
        youtube: "https://youtu.be",
    },
    {
        name: "Potato Twist",
        category: "western",
        image: "https://images.pexels.com/photos/29997892/pexels-photo-29997892.jpeg",
        steps: "Ingredients: 2 large whole potatoes, wooden skewers, 3 tbsp cornflour, 2 tbsp maida, 1/2 tsp chili powder, 1/2 tsp peri-peri seasoning or chaat masala, oil for deep frying, mayo.\n\nStep 1: Insert a wooden skewer through the length of a whole washed potato.\nStep 2: Cut spiral slices around the potato, carefully pulling sections apart along the skewer to form a spiral/tornado shape.\nStep 3: Make a thin batter with cornflour, maida, chili powder, salt, and water; brush evenly over potato spiral.\nStep 4: Deep fry in hot oil, turning constantly until golden and crisp on all edges.\nStep 5: Drain oil, sprinkle peri-peri seasoning or chaat masala, drizzle mayonnaise, and serve hot on skewer.",
        youtube: "https://youtu.be",
    },
    {
        name: "South Indian Sambar",
        category: "indian",
        image: "https://images.pexels.com/photos/35267278/pexels-photo-35267278.jpeg",
        steps: "Ingredients: 1/2 cup toor dal, 1 cup mixed veggies (drumsticks, carrots, pumpkin, shallots), 2 tbsp sambar powder, 1 tbsp tamarind extract, 1/2 tsp mustard seeds, curry leaves, 2 dry red chilies, 1 tbsp ghee/oil, salt.\n\nStep 1: Pressure cook toor dal with turmeric and water until soft and mash thoroughly.\nStep 2: Cook drumsticks, shallots, and vegetables in water with tamarind extract and salt until tender.\nStep 3: Add mashed dal and sambar powder into cooked vegetables; simmer on medium flame for 8-10 minutes.\nStep 4: Heat ghee in a small pan, crackle mustard seeds, dry red chilies, and curry leaves.\nStep 5: Pour hot tempering into simmering sambar, cover immediately with lid, and serve with idli, dosa, or rice.",
        youtube: "https://youtu.be",
    },
    {
        name: "Coconut Chutney",
        category: "indian",
        image: "https://images.pexels.com/photos/28915086/pexels-photo-28915086.jpeg",
        steps: "Ingredients: 1 cup fresh grated coconut, 2 tbsp roasted chana dal (dalia), 2 green chilies, 1/2 inch ginger, salt, water, 1 tsp oil, 1/2 tsp mustard seeds, 1 dry red chili, curry leaves.\n\nStep 1: Put fresh grated coconut, roasted chana dal, green chilies, ginger, salt, and 1/4 cup water into a blender.\nStep 2: Grind to a smooth or slightly coarse paste, adjusting water consistency as needed.\nStep 3: Transfer ground chutney into a serving bowl.\nStep 4: Heat 1 tsp oil in a tadka pan, add mustard seeds, dry red chili, and fresh curry leaves until spluttering.\nStep 5: Pour hot tempering over chutney, mix gently, and serve alongside idlis, dosas, or vada.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Grilled Sandwich",
        category: "western",
        image: "https://images.pexels.com/photos/36268509/pexels-photo-36268509.jpeg",
        steps: "Ingredients: 4 bread slices, 1/2 cup butter, 2 tbsp green chutney, 1 sliced cucumber, 1 sliced tomato, 1 sliced boiled potato, 1 sliced onion, chaat masala, cheese slice (optional).\n\nStep 1: Spread butter on one side of all bread slices, then layer green chutney over them.\nStep 2: Arrange cucumber, tomato, potato, and onion slices evenly on two bread slices.\nStep 3: Sprinkle chaat masala and black salt over veggies, then top with a cheese slice.\nStep 4: Cover with remaining bread slices and grill on a sandwich maker or skillet with butter.\nStep 5: Grill until golden brown and crispy, cut diagonally, and serve hot with tomato ketchup.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Tacos",
        category: "western",
        image: "https://images.pexels.com/photos/38932103/pexels-photo-38932103.jpeg",
        steps: "Ingredients: 4 hard or soft taco shells, 1 cup cooked seasoned beans (or rajma), 1/2 cup shredded lettuce, 1/2 cup diced tomatoes, 1/4 cup diced onions, sour cream or mayo, shredded cheddar cheese, salsa.\n\nStep 1: Heat taco shells in an oven or on a warm griddle for 1-2 minutes.\nStep 2: Fill the bottom of each shell with a spoonful of warm seasoned beans.\nStep 3: Layer shredded lettuce, diced tomatoes, and chopped onions over the beans.\nStep 4: Spoon fresh tomato salsa and a dollop of sour cream or mayo on top.\nStep 5: Sprinkle shredded cheddar cheese generously and serve immediately.",
        youtube: "https://youtu.be",
    },
    {
        name: "French Fries",
        category: "western",
        image: "https://images.pexels.com/photos/29150162/pexels-photo-29150162.jpeg",
        steps: "Ingredients: 3 large russet or regular potatoes, oil for deep frying, salt to taste, chaat masala or peri-peri seasoning (optional).\n\nStep 1: Peel potatoes and cut into uniform 1/4-inch thick long strips.\nStep 2: Soak potato strips in ice-cold water for 30 minutes, then pat completely dry using a kitchen towel.\nStep 3: Heat oil on medium flame and double-fry: first fry strips for 3-4 minutes without browning, then remove and cool.\nStep 4: Heat oil to high flame and fry potato strips a second time for 2-3 minutes until golden brown and super crispy.\nStep 5: Drain on paper towels, toss immediately with salt and seasoning, and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Hot Dog",
        category: "western",
        image: "https://media.istockphoto.com/id/1205054446/photo/veg-hot-dog-paneer-hot-dog.jpg?b=1&s=612x612&w=0&k=20&c=PaPQ9V8-vBxqN5tHjUsUCkm1ARlUmycNadDlxCUdY9o=",
        steps: "Ingredients: 2 hot dog buns, 2 veg frankfurters/patties, 1 tbsp butter, 2 tbsp mustard sauce, 2 tbsp tomato ketchup, shredded cabbage or lettuce, caramelized onions.\n\nStep 1: Grill or pan-fry veg frankfurters in butter until warm and lightly browned on all sides.\nStep 2: Slice hot dog buns lengthways down the center without cutting all the way through.\nStep 3: Toast the inside of buns with butter on a skillet for 1 minute.\nStep 4: Line bun with shredded lettuce or cabbage, then insert hot veg frankfurter.\nStep 5: Top with caramelized onions, drizzle yellow mustard and tomato ketchup, and serve.",
        youtube: "https://youtu.be",
    },
    {
        name: "Crispy Samosa",
        category: "indian",
        image: "https://images.pexels.com/photos/36170557/pexels-photo-36170557.jpeg",
        steps: "Ingredients: 2 cups maida, 4 tbsp oil/ghee (for moyan), 3 boiled potatoes, 1/2 cup boiled peas, 1 tsp cumin seeds, 1 tsp crushed coriander seeds, 1/2 tsp garam masala, 1 tsp amchur, oil for deep frying, salt.\n\nStep 1: Rub maida with oil and salt until crumbly, then knead with cold water into a stiff dough; rest 30 minutes.\nStep 2: Sauté cumin, coriander seeds, mashed potatoes, peas, and spices in 1 tbsp oil to make stuffing; let cool.\nStep 3: Divide dough into balls, roll into ovals, cut in half, and shape each half into a cone using water to seal.\nStep 4: Fill cone with potato mixture and pinch base flat to seal shape tightly.\nStep 5: Deep-fry on low flame for 15-20 minutes until crust is crispy and golden brown.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Spring Roll",
        category: "chinese",
        image: "https://images.pexels.com/photos/12356601/pexels-photo-12356601.jpeg",
        steps: "Ingredients: 8 spring roll sheets, 1 cup shredded cabbage, 1/2 cup julienned carrots, 1/2 cup capsicum, 1 tbsp soy sauce, 1 tsp vinegar, pepper, salt, slurry (2 tbsp flour + water), oil for frying.\n\nStep 1: Stir-fry shredded cabbage, carrots, and capsicum in 1 tbsp oil on high heat for 2 minutes.\nStep 2: Add soy sauce, vinegar, black pepper, salt, toss well, and let mixture cool completely.\nStep 3: Place filling on one edge of a spring roll sheet, roll tightly, fold side edges inward, and seal end with flour slurry.\nStep 4: Heat oil in a pan and deep-fry spring rolls on medium heat.\nStep 5: Fry until golden brown and crispy, slice diagonally, and serve with sweet chili sauce.",
        youtube: "https://youtu.be",
    },
    {
        name: "Paneer Makhani",
        category: "indian",
        image: "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg",
        steps: "Ingredients: 250g paneer cubes, 4 tomatoes (pureed), 2 tbsp butter, 1 tbsp fresh cream, 1 tbsp cashew paste, 1 tsp Kashmiri red chili powder, 1/2 tsp kasuri methi, 1/2 tsp garam masala, salt.\n\nStep 1: Melt 2 tbsp butter in a pan, add tomato puree and cashew paste, and cook until oil separates.\nStep 2: Add Kashmiri red chili powder, garam masala, salt, and 1/2 cup water; simmer into a smooth gravy.\nStep 3: Add fresh paneer cubes gently into the bubbling gravy.\nStep 4: Stir in fresh cream and crush kasuri methi between palms over the curry.\nStep 5: Simmer for 2 minutes, top with a extra butter, and serve hot with naan or roti.",
        youtube: "https://youtu.be",
    },
    {
        name: "Shahi Tukda",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/14242068/pexels-photo-14242068.jpeg",
        steps: "Ingredients: 4 white bread slices, ghee for shallow frying, 2 cups thick rabri (condensed sweet milk), 1/2 cup sugar syrup (chashni), saffron, crushed cardamoms, sliced almonds and pistachios.\n\nStep 1: Trim crusts off bread slices and cut diagonally into triangular pieces.\nStep 2: Shallow-fry bread triangles in ghee on medium heat until golden and crispy on both sides.\nStep 3: Dip fried bread slices into warm saffron sugar syrup for 10 seconds and remove to a plate.\nStep 4: Pour rich cardamom rabri generously over the syrup-soaked bread triangles.\nStep 5: Garnish with sliced pistachios, almonds, and saffron strands before serving warm or chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Classic Cheesecake",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/32517227/pexels-photo-32517227.jpeg",
        steps: "Ingredients: 1.5 cups digestive biscuit crumbs, 1/4 cup melted butter, 400g cream cheese, 1/2 cup powdered sugar, 1/2 cup heavy cream, 1 tsp vanilla extract, 1 tbsp lemon juice.\n\nStep 1: Mix biscuit crumbs with melted butter, press firmly into the bottom of a springform pan, and chill 20 minutes.\nStep 2: Beat softened cream cheese and powdered sugar together until smooth and lump-free.\nStep 3: Whip heavy cream in a separate bowl until soft peaks form, then fold gently into cream cheese mixture.\nStep 4: Stir in vanilla extract and lemon juice, then pour filling over the chilled biscuit base.\nStep 5: Smooth top with a spatula and refrigerate for at least 6 hours (or overnight) to set before slicing.",
        youtube: "https://youtu.be",
    },
    {
        name: "Vanilla Custard",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/11397866/pexels-photo-11397866.jpeg",
        steps: "Ingredients: 2 cups milk, 2 tbsp vanilla custard powder, 3 tbsp sugar, chopped mixed fruits (apple, banana, pomegranate, grapes).\n\nStep 1: Mix 2 tbsp custard powder with 1/4 cup cold milk in a bowl to make a smooth, lump-free slurry.\nStep 2: Boil remaining milk with sugar in a saucepan on medium flame.\nStep 3: Lower heat and slowly pour in custard slurry while whisking continuously to prevent lumps.\nStep 4: Cook on low heat for 3-4 minutes until mixture thickens and coats the back of a spoon.\nStep 5: Allow custard to cool completely, mix in fresh chopped fruits, chill in fridge, and serve cold.",
        youtube: "https://youtu.be",
    },
    {
        name: "Caramel Custard",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/15639799/pexels-photo-15639799.jpeg",
        steps: "Ingredients: 1/2 cup sugar (for caramel), 2 cups full-fat milk, 3 eggs (or 1/2 cup condensed milk + 2 tbsp custard powder for eggless), 1/4 cup sugar, 1 tsp vanilla extract.\n\nStep 1: Melt 1/2 cup sugar in a pan on medium heat until golden caramel forms; quickly pour into ramekins/molds to set.\nStep 2: Whisk milk, sugar, eggs (or condensed milk/custard powder substitute), and vanilla extract until smooth.\nStep 3: Strain mixture through a sieve and pour over caramel in the ramekins.\nStep 4: Cover molds with foil and steam in a steamer or bake in a water bath at 180°C for 30 minutes.\nStep 5: Chill in refrigerator for 3 hours, run a knife around edges, invert onto plates, and serve.",
        youtube: "https://youtu.be",
    },
    {
        name: "Fresh Orange Juice",
        category: "western",
        image: "https://images.pexels.com/photos/17612821/pexels-photo-17612821.jpeg",
        steps: "Ingredients: 4 fresh sweet oranges, 1 pinch black salt, 1 tsp sugar or honey (optional), ice cubes.\n\nStep 1: Peel oranges and remove seeds to prevent bitterness in juice.\nStep 2: Place orange segments into a blender or juicer with 2-3 tablespoons of water.\nStep 3: Pulse gently for 15-20 seconds so pulp breaks without crushing remaining seeds.\nStep 4: Strain juice through a coarse mesh sieve into a pitcher.\nStep 5: Add a pinch of black salt, stir in ice cubes, and serve fresh immediately.",
        youtube: "https://youtu.be",
    },
    {
        name: "Buttermilk",
        category: "indian",
        image: "https://images.pexels.com/photos/6808667/pexels-photo-6808667.jpeg",
        steps: "Ingredients: 1 cup thick plain curd (yogurt), 2 cups chilled water, 1/2 tsp roasted cumin powder, 1/2 tsp black salt, 1 chopped green chili, 1 tbsp chopped coriander, mint leaves.\n\nStep 1: Whisk curd thoroughly in a pitcher or churner until smooth.\nStep 2: Pour in chilled water and blend well to form thin buttermilk.\nStep 3: Add roasted cumin powder, black salt, finely chopped green chili, and torn mint leaves.\nStep 4: Whisk again until a thin frothy layer forms on top.\nStep 5: Garnish with fresh coriander leaves, add ice cubes, and serve chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Kashmiri Pink Tea",
        category: "indian",
        image: "https://images.pexels.com/photos/30307776/pexels-photo-30307776.jpeg",
        steps: "Ingredients: 2 tsp green tea leaves (Kashmiri chai leaves), 1/4 tsp baking soda, 2 cups ice-cold water, 2 cups milk, 2 crushed cardamoms, 1 pinch salt, chopped pistachios and almonds.\n\nStep 1: Boil tea leaves, crushed cardamoms, and baking soda with 1 cup cold water for 15 minutes until liquid reduces.\nStep 2: Pour in 1 cup ice-cold water and shock the brew by whisking vigorously until deep reddish-pink.\nStep 3: Strain this tea concentrate (kehwa) into a fresh pot.\nStep 4: Add milk and a pinch of salt; boil until it turns a soft pastel pink color.\nStep 5: Pour hot pink tea into cups and top with crushed pistachios and almonds.",
        youtube: "https://youtu.be",
    },
    {
        name: "Simple Masala Tea",
        category: "indian",
        image: "https://images.pexels.com/photos/20270270/pexels-photo-20270270.jpeg",
        steps: "Ingredients: 1 cup water, 1 cup milk, 2 tsp black tea leaves, 2 tsp sugar, 1 crushed cardamom pod, 1/2 inch crushed ginger.\n\nStep 1: Heat water in a saucepan and add crushed ginger and cardamom pod.\nStep 2: Bring water to a rolling boil so spices infuse their flavors for 2 minutes.\nStep 3: Add black tea leaves and sugar, simmering for another 2 minutes until color darkens.\nStep 4: Pour in milk and bring tea to a boil 2-3 times, adjusting heat up and down.\nStep 5: Strain hot tea directly into cups and serve with biscuits.",
        youtube: "https://youtu.be",
    },
    {
        name: "Sugarcane Juice",
        category: "indian",
        image: "https://images.pexels.com/photos/15800371/pexels-photo-15800371.jpeg",
        steps: "Ingredients: 2 cups chopped fresh sugarcane pieces (peeled) or sugarcane syrup/jaggery base, 1/2 inch ginger, 10 mint leaves, 1 tbsp lemon juice, 1/2 tsp black salt, ice cubes.\n\nStep 1: Blend small chopped sugarcane pieces with ginger, mint leaves, and 1/2 cup cold water in a heavy-duty blender.\nStep 2: Strain mixture through a muslin cloth, squeezing tightly to extract pure juice.\nStep 3: Stir fresh lemon juice and black salt into extracted sugarcane juice.\nStep 4: Add plenty of ice cubes to a tall glass.\nStep 5: Pour chilled juice over ice and serve immediately.",
        youtube: "https://youtu.be",
    },
    {
        name: "Sirka Pyaz (Vinegar Onions)",
        category: "indian",
        image: "https://images.pexels.com/photos/12181051/pexels-photo-12181051.jpeg",
        steps: "Ingredients: 15-20 small pearl onions (sambar onions), 1/2 cup white vinegar, 1/2 cup water, 1 small beetroot (sliced), 1 tbsp sugar, 1 tsp salt, 2 green chilies (slit).\n\nStep 1: Peel pearl onions and cut a small 'X' mark at the top of each without cutting through.\nStep 2: In a glass jar, combine white vinegar, water, sugar, and salt until dissolved.\nStep 3: Add peeled onions, slit green chilies, and sliced beetroot into the vinegar liquid.\nStep 4: Seal jar tightly and let onions marinate at room temperature for at least 12 to 24 hours.\nStep 5: Serve crunchy pink pickled onions as an accompaniment to dhabas/restaurant-style meals.",
        youtube: "https://youtu.be",
    },
    {
        name: "Veg Pancakes",
        category: "western",
        image: "https://images.pexels.com/photos/37648012/pexels-photo-37648012.jpeg",
        steps: "Ingredients: 1 cup all-purpose flour (maida), 1/2 cup finely chopped veggies (capsicum, sweet corn, grated carrots, onions), 1/2 tsp baking powder, 3/4 cup milk or water, 1 tbsp melted butter, 1/2 tsp black pepper, salt to taste.\n\nStep 1: Whisk all-purpose flour, baking powder, salt, and black pepper together in a mixing bowl.\nStep 2: Gradually pour in milk or water while whisking continuously to form a smooth, lump-free batter.\nStep 3: Stir in the finely chopped veggies (capsicum, sweet corn, carrots, onions) and melted butter into the batter.\nStep 4: Heat a non-stick pan over medium flame and brush lightly with butter or oil.\nStep 5: Pour a ladleful of batter onto the pan without spreading too thin, cook until bubbles appear on surface, flip and cook until golden brown on both sides. Serve hot with tomato sauce or mayo.",
        youtube: "https://youtu.be",
    },
    {
        name: "Hot Frothy Coffee",
        category: "western",
        image: "https://images.pexels.com/photos/16628466/pexels-photo-16628466.jpeg",
        steps: "Ingredients: 1 cup milk, 1.5 tsp instant coffee powder, 2 tsp sugar, 1 tbsp hot water, cocoa powder or chocolate syrup for garnish.\n\nStep 1: Add instant coffee powder, sugar, and 1 tbsp hot water into a cup or mug.\nStep 2: Whisk or beat the mixture vigorously using a spoon or hand frother for 3-5 minutes until it becomes light, thick, and creamy-pale.\nStep 3: Boil milk in a saucepan until hot and frothy.\nStep 4: Pour hot boiling milk from a height into the prepared coffee cream base, stirring gently to combine.\nStep 5: Top with leftover frothy milk foam, sprinkle a pinch of cocoa powder on top, and serve piping hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Cold Coffee",
        category: "western",
        image: "https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg",
        steps: "Ingredients: 1.5 cups chilled full-fat milk, 2 tsp instant coffee powder, 2 tbsp warm water, 2 tbsp sugar, 1 scoop vanilla ice cream, 4-5 ice cubes, chocolate syrup.\n\nStep 1: Dissolve instant coffee powder and sugar in 2 tbsp warm water to make a quick coffee liquid.\nStep 2: Drizzle chocolate syrup around the inner walls of a tall glass and chill in fridge.\nStep 3: In a blender, add chilled milk, coffee liquid, ice cubes, and vanilla ice cream.\nStep 4: Blend on high speed for 1-2 minutes until thick, frothy, and creamy.\nStep 5: Pour cold coffee into the chocolate-lined glass, top with extra foam or cocoa powder, and serve chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Chocolate Milkshake",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/34541593/pexels-photo-34541593.jpeg",
        steps: "Ingredients: 1.5 cups chilled milk, 2 scoops chocolate ice cream, 2 tbsp cocoa powder or chocolate syrup, 1 tbsp sugar, 4-5 ice cubes, whipped cream, chocolate shavings for garnish.\n\nStep 1: Drizzle chocolate syrup around the inner sides of a tall glass and place it in the freezer for 5 minutes.\nStep 2: In a blender, combine chilled milk, chocolate ice cream, cocoa powder or chocolate syrup, sugar, and ice cubes.\nStep 3: Blend on high speed for 1-2 minutes until thick, smooth, and frothy.\nStep 4: Pour the creamy milkshake into the prepared chilled glass.\nStep 5: Top with a swirl of whipped cream, extra chocolate syrup, and chocolate shavings before serving chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Strawberry Smoothie",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/17612782/pexels-photo-17612782.jpeg",
        steps: "Ingredients: 1 cup fresh or frozen strawberries, 1/2 cup Greek yogurt or plain curd, 1/2 cup chilled milk, 1-2 tbsp honey or maple syrup, 1/2 tsp vanilla extract, 4-5 ice cubes.\n\nStep 1: Wash strawberries thoroughly, remove the green hulls, and slice them into halves.\nStep 2: Add sliced strawberries, Greek yogurt, chilled milk, honey, and vanilla extract into a high-speed blender.\nStep 3: Toss in ice cubes for a extra thick and frosty texture.\nStep 4: Blend on high speed for 1 to 2 minutes until smooth, creamy, and completely lump-free.\nStep 5: Pour into a tall serving glass, garnish with a sliced fresh strawberry on the rim, and serve chilled immediately.",
        youtube: "https://youtu.be",
    },
    {
        name: "Spicy Soya Chunks",
        category: "indian",
        image: "https://images.pexels.com/photos/16899782/pexels-photo-16899782.jpeg",
        steps: "Ingredients: 1 cup soya chunks, 1 large chopped onion, 2 pureed tomatoes, 1 tbsp ginger-garlic paste, 1 tsp cumin seeds, 1 tsp Kashmiri red chili powder, 1/2 tsp turmeric, 1 tsp coriander powder, 1/2 tsp garam masala, 2 tbsp oil, fresh coriander, salt.\n\nStep 1: Boil soya chunks in hot water with a pinch of salt for 5 minutes. Drain, rinse under cold water, and squeeze out all excess water thoroughly.\nStep 2: Heat 1 tbsp oil in a pan and lightly stir-fry the squeezed soya chunks for 3-4 minutes until pale golden; set aside.\nStep 3: Heat remaining 1 tbsp oil in the same pan, add cumin seeds, chopped onions, and ginger-garlic paste. Sauté until golden brown.\nStep 4: Stir in tomato puree along with red chili powder, turmeric, coriander powder, and salt. Cook until oil separates from the masala.\nStep 5: Add the fried soya chunks and 1/2 cup water. Simmer on low heat for 5-7 minutes until the gravy thickens and coats the chunks. Sprinkle garam masala and fresh coriander before serving hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Chilli Paneer",
        category: "chinese",
        image: "https://images.pexels.com/photos/7160695/pexels-photo-7160695.jpeg",
        steps: "Ingredients: 250g paneer cubes, 1 diced capsicum, 1 diced onion, 2 tbsp cornflour, 1 tbsp all-purpose flour (maida), 1 tbsp soy sauce, 1 tbsp red chili sauce, 1 tbsp tomato ketchup, 1 tsp vinegar, 1 tbsp minced garlic, 2 slit green chilies, oil, salt, black pepper.\n\nStep 1: Mix 1 tbsp cornflour, maida, salt, pepper, and a little water to form a thick batter. Coat paneer cubes and shallow or deep fry in hot oil until crispy and golden; set aside.\nStep 2: Heat 2 tbsp oil in a wok on high flame. Add minced garlic and green chilies, and sauté for 30 seconds.\nStep 3: Add the diced onions and capsicum. Stir-fry vigorously on high heat for 2 minutes so they retain their crunch.\nStep 4: Stir in soy sauce, red chili sauce, tomato ketchup, vinegar, and a pinch of black pepper.\nStep 5: Add a quick slurry of 1 tsp cornflour mixed with 1/4 cup water. Once the sauce turns glossy and thickens, toss in the fried paneer cubes to coat evenly. Garnish with spring onions and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Fresh Lemonade",
        category: "western",
        image: "https://images.pexels.com/photos/33107433/pexels-photo-33107433.jpeg",
        steps: "Ingredients: 3 fresh lemons, 3-4 tbsp sugar (or honey), 2.5 cups chilled water, 1/4 tsp black salt, fresh mint leaves, lemon slices, ice cubes.\n\nStep 1: Squeeze fresh juice from 3 lemons into a bowl, making sure to remove all seeds.\nStep 2: Add sugar and 1/2 cup of warm water into a pitcher, stirring until the sugar is completely dissolved into a syrup.\nStep 3: Pour in the fresh lemon juice, black salt, and the remaining 2 cups of chilled water.\nStep 4: Stir thoroughly to combine all ingredients evenly.\nStep 5: Fill serving glasses with ice cubes and fresh mint leaves, pour the chilled lemonade over the top, garnish with a lemon wheel, and serve cold.",
        youtube: "https://youtu.be",
    },
    {
        name: "Palak Pakoda",
        category: "indian",
        image: "https://images.pexels.com/photos/33104648/pexels-photo-33104648.jpeg",
        steps: "Ingredients: 2 cups fresh spinach leaves (palak, chopped or whole), 1 cup gram flour (besan), 2 tbsp rice flour (for extra crispiness), 1 finely chopped green chili, 1/2 tsp ajwain (carom seeds), 1/2 tsp red chili powder, 1/4 tsp turmeric, 1 pinch baking soda, salt to taste, oil for deep frying.\n\nStep 1: Wash spinach leaves thoroughly and dry them completely using a kitchen towel.\nStep 2: In a mixing bowl, combine besan, rice flour, ajwain, green chili, red chili powder, turmeric, baking soda, and salt.\nStep 3: Gradually add a little water to form a thick, smooth batter that can easily coat the spinach.\nStep 4: Toss the spinach into the batter, ensuring each leaf is evenly coated.\nStep 5: Heat oil in a deep pan over medium flame, drop batter-coated spinach in batches, and deep fry until crispy and golden brown. Drain on paper towels and serve hot with green chutney or hot chai.",
        youtube: "https://youtu.be",
    },
    {
        name: "Paneer Pakoda",
        category: "indian",
        image: "https://images.pexels.com/photos/36460902/pexels-photo-36460902.jpeg",
        steps: "Ingredients: 250g paneer (cut into thick cubes or rectangles), 1 cup gram flour (besan), 2 tbsp rice flour, 1/2 tsp ajwain (carom seeds), 1/2 tsp red chili powder, 1/4 tsp turmeric, 1/2 tsp chaat masala, 1 pinch baking soda, salt to taste, oil for deep frying, mint chutney.\n\nStep 1: Slice paneer into uniform thick cubes. Optionally, slit them slightly down the middle and sandwich a thin layer of mint chutney or chaat masala inside for extra flavor.\nStep 2: In a bowl, mix besan, rice flour, ajwain, red chili powder, turmeric, baking soda, and salt.\nStep 3: Gradually add water while whisking to make a smooth, thick batter that comfortably coats the back of a spoon.\nStep 4: Heat oil in a deep pan over medium-high flame. Dip each paneer slice into the batter to coat thoroughly on all sides.\nStep 5: Gently drop into hot oil and fry in batches until crisp and golden brown. Drain on paper towels, sprinkle chaat masala on top, and serve hot with chutney or sauce.",
        youtube: "https://youtu.be",
    },
    {
        name: "Bread Pakoda",
        category: "indian",
        image: "https://images.pexels.com/photos/14827666/pexels-photo-14827666.jpeg",
        steps: "Ingredients: 4 bread slices, 2 boiled mashed potatoes, 1 cup gram flour (besan), 2 tbsp rice flour, 1/2 tsp ajwain (carom seeds), 1/2 tsp red chili powder, 1/2 tsp garam masala, 1 tsp amchur (mango powder), 1 tbsp chopped coriander, green chutney, oil for deep frying, salt to taste.\n\nStep 1: Mix boiled mashed potatoes with red chili powder, garam masala, amchur, fresh coriander, and salt to make the spiced potato filling.\nStep 2: Spread green chutney on one side of two bread slices, stuff generously with the potato mixture, top with the other bread slices, and cut diagonally into triangles.\nStep 3: In a bowl, whisk besan, rice flour, ajwain, a pinch of red chili powder, salt, and water to make a smooth, medium-thick batter.\nStep 4: Heat oil in a deep pan on medium heat. Dip each stuffed bread sandwich into the besan batter, coating all edges thoroughly.\nStep 5: Carefully drop into hot oil and deep-fry until golden brown and crispy on both sides. Drain on paper towels and serve hot with tomato ketchup or chai.",
        youtube: "https://youtu.be",
    },
    {
        name: "Amritsari Nutri Kulcha",
        category: "indian",
        image: "https://media.istockphoto.com/id/1404054597/photo/indian-vegetable-spicy-paneer-bhurji.jpg?b=1&s=612x612&w=0&k=20&c=rXUZD77GF0URv-1ijfFWHm-PHGm9PIooKz5J3smkzsc=",
        steps: "Ingredients: 1 cup soya chunks/granules, 4 soft kulcha buns, 2 finely chopped onions, 2 pureed tomatoes, 1 tbsp ginger-garlic paste, 1 tbsp tea leaves (boiled in water for dark color), 1 tsp pav bhaji masala or chole masala, 1 tsp Kashmiri red chili powder, 1/2 tsp garam masala, 2 tbsp butter, fresh coriander, salt.\n\nStep 1: Boil soya chunks in water with tea-infused dark water and a pinch of salt for 5-7 minutes. Drain, rinse with cold water, squeeze out all excess liquid, and coarsely chop or mash.\nStep 2: Heat 1 tbsp butter and 1 tbsp oil in a pan, add chopped onions and ginger-garlic paste, sautéing until rich golden brown.\nStep 3: Stir in tomato puree along with pav bhaji masala, red chili powder, and salt. Cook until butter separates from the masala.\nStep 4: Add the prepared soya granules along with 1/2 cup of reserved dark tea water. Simmer on low heat for 8-10 minutes until thick and rich in dark color.\nStep 5: Toast soft kulcha buns generously with butter on a griddle. Serve hot spicy nutri gravy topped with butter, sliced onions, and green chutney alongside buttered kulchas.",
        youtube: "https://youtu.be",
    },
    {
        name: "Amritsari Butter Naan",
        category: "indian",
        image: "https://media.istockphoto.com/id/465149212/photo/naan-bread.jpg?b=1&s=612x612&w=0&k=20&c=u9lhpAeG73JSDivWyJMO3MgsR34NCYQEBVxaAw3k0_8=",
        steps: "Ingredients: 2 cups all-purpose flour (maida), 1/4 cup plain curd (yogurt), 1/2 tsp baking powder, 1/4 tsp baking soda, 1 tsp sugar, 1/2 tsp salt, 2 tbsp oil, warm water for kneading, nigella seeds (kalonji), fresh coriander, butter for brushing.\n\nStep 1: In a large bowl, combine maida, baking powder, baking soda, sugar, and salt. Add curd, oil, and warm water gradually to knead a soft, pliable dough.\nStep 2: Cover dough with a damp cloth and rest in a warm place for 2 hours to ferment lightly.\nStep 3: Divide dough into equal balls, roll into tear-drop shapes, and sprinkle kalonji and fresh coriander on top, pressing lightly with a rolling pin.\nStep 4: Flip the naan and brush water generously over the back side. Place the wet side down onto a hot iron tawa so it sticks.\nStep 5: Cook until bubbles form, then invert the tawa directly over a high flame to roast top side until golden charred spots appear. Brush generously with melted butter and serve hot with paneer or dal makhani.",
        youtube: "https://youtu.be",
    },
    {
        name: "Red Sauce Pasta",
        category: "italian",
        image: "https://images.pexels.com/photos/8156470/pexels-photo-8156470.jpeg",
        steps: "Ingredients: 200g penne pasta, 4 pureed tomatoes, 1 finely chopped onion, 4 minced garlic cloves, 1 tbsp olive oil, 1 tsp chili flakes, 1 tsp oregano, fresh basil leaves, salt, pepper, grated parmesan.\n\nStep 1: Boil penne pasta in salted water until al dente; drain and set aside 1/2 cup pasta water.\nStep 2: Heat olive oil in a pan, add minced garlic and chili flakes, sautéing for 1 minute until fragrant.\nStep 3: Add chopped onions and cook until soft, then stir in the fresh tomato puree, oregano, salt, and black pepper.\nStep 4: Simmer sauce on medium heat for 8-10 minutes until thick and rich.\nStep 5: Toss boiled penne into the sauce with a splash of pasta water, garnish with fresh basil and grated parmesan, and serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "White Sauce Pasta",
        category: "italian",
        image: "https://images.pexels.com/photos/31109622/pexels-photo-31109622.jpeg",
        steps: "Ingredients: 200g penne or fusilli pasta, 2 tbsp butter, 2 tbsp all-purpose flour (maida), 1.5 cups milk, 1/2 cup mixed veggies (sweet corn, capsicum, broccoli), 1/2 tsp chili flakes, 1/2 tsp oregano, 1/4 cup shredded mozzarella/cheddar cheese, salt, black pepper.\n\nStep 1: Boil pasta in salted water until tender; drain and set aside.\nStep 2: Sauté mixed veggies in 1 tsp butter for 2-3 minutes until crisp-tender; remove from pan.\nStep 3: Melt 2 tbsp butter in the same pan, add flour, and whisk continuously on low heat for 1-2 minutes without browning.\nStep 4: Slowly pour in cold milk while whisking constantly to prevent lumps; cook until the roux thickens into a smooth, creamy sauce.\nStep 5: Add cheese, chili flakes, oregano, salt, pepper, sautéed veggies, and boiled pasta. Mix well to coat evenly and serve warm.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pink Sauce Pasta",
        category: "italian",
        image: "https://images.pexels.com/photos/30726614/pexels-photo-30726614.jpeg",
        steps: "Ingredients: 200g penne pasta, 2 pureed tomatoes, 1 tbsp butter, 1 tbsp flour, 1 cup milk, 2 tbsp fresh cream, 3 minced garlic cloves, 1/2 tsp chili flakes, 1/2 tsp oregano, 1/4 cup grated cheese, olive oil, salt, pepper.\n\nStep 1: Boil pasta in salted water until al dente, drain, and set aside.\nStep 2: Prepare red sauce: Heat olive oil in a pan, sauté minced garlic, add tomato puree, chili flakes, salt, and cook until thick.\nStep 3: Prepare white sauce: Melt butter in another pan, whisk in flour, gradually add milk, and cook until smooth and creamy.\nStep 4: Combine the red sauce and white sauce together in one pan to create a rich pink sauce. Stir in fresh cream and grated cheese.\nStep 5: Toss in the cooked penne pasta, mix well on low heat for 2 minutes, and serve hot topped with extra herbs and cheese.",
        youtube: "https://youtu.be",
    },
    {
        name: "Garlic Bread",
        category: "western",
        image: "https://images.pexels.com/photos/27126846/pexels-photo-27126846.jpeg",
        steps: "Ingredients: 1 French baguette or garlic bread loaf, 4 tbsp softened butter, 2 tbsp finely minced garlic, 1 tbsp finely chopped fresh parsley or coriander, 1/2 tsp chili flakes, 1/2 tsp oregano, 1/2 cup shredded mozzarella cheese (optional).\n\nStep 1: In a small bowl, mix softened butter, minced garlic, chopped parsley, chili flakes, and oregano until smooth.\nStep 2: Slice the baguette into 3/4-inch thick slices without cutting all the way through (or cut completely into separate slices).\nStep 3: Generously spread the garlic butter mixture over one side of each bread slice.\nStep 4: Top with shredded mozzarella cheese if making cheesy garlic bread.\nStep 5: Bake in a preheated oven at 180°C for 8-10 minutes (or toast on a griddle/tawa over low heat covered with a lid) until edges are golden crisp and cheese is fully melted. Serve hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "Royal Falooda",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg",
        steps: "Ingredients: 2 cups chilled milk, 2 tbsp rose syrup, 2 tbsp soaked basil seeds (sabja), 1/2 cup cooked falooda sev, 2 scoops vanilla or kulfi ice cream, chopped pistachios and almonds, cherry for garnish.\n\nStep 1: Soak sabja seeds in water for 15 minutes until plump; cook falooda sev, drain, and chill.\nStep 2: Mix 1 tbsp rose syrup into chilled milk until pale pink.\nStep 3: In a tall glass, layer soaked sabja seeds at the bottom, followed by cooked falooda sev.\nStep 4: Drizzle extra rose syrup inside the glass and pour the chilled rose milk over the layers.\nStep 5: Top with a generous scoop of ice cream, garnish with chopped nuts and a cherry, and serve with a long spoon.",
        youtube: "https://youtu.be",
    },
    {
        name: "Volcano Pizza",
        category: "western",
        image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
        steps: "Ingredients: 1 thick pizza base, 1/2 cup pizza sauce, 1.5 cups shredded mozzarella cheese, 1/2 cup liquid cheese sauce, 1/2 cup mixed diced veggies (capsicum, corn, onions, jalapenos), oregano, chili flakes.\n\nStep 1: Pre-bake the pizza base lightly and scoop out a small center cavity to form a volcano crater.\nStep 2: Spread pizza sauce around the edges, add diced veggies, and cover generously with shredded mozzarella cheese.\nStep 3: Pour rich liquid cheese sauce into the center crater to create the volcano core.\nStep 4: Bake at 200°C for 10-12 minutes until the outer cheese melts and turns bubbly golden brown.\nStep 5: Sprinkle oregano and chili flakes, slice carefully, and watch the center cheese overflow like lava before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Cham Cham",
        category: "indiandessert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTav9YjwJSCroQLeg8_wGnKBOszIiCkvfbpEGBkgb4a9PFvrM3tAubWM-A&s=10",
        steps: "Ingredients: 1 liter full-fat milk, 2 tbsp lemon juice (for chenna), 1.5 cups sugar, 4 cups water, 1/2 cup khoya (mawa) for filling, cardamoms, saffron, desiccated coconut.\n\nStep 1: Curdle boiling milk with lemon juice, strain whey using a muslin cloth, rinse, and knead chenna until smooth.\nStep 2: Shape chenna into cylindrical oval portions.\nStep 3: Boil sugar and water to make a thin syrup; drop chenna ovals in and cook covered for 15-18 minutes until spongy.\nStep 4: Remove cham chams from syrup, let cool, and slit each vertically down the center.\nStep 5: Stuff with sweetened grated khoya, roll in desiccated coconut, garnish with saffron, and serve chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Shahi Rabri",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/33430555/pexels-photo-33430555.jpeg",
        steps: "Ingredients: 1.5 liters full-fat milk, 1/4 cup sugar, 1/2 tsp cardamom powder, saffron strands, chopped pistachios and almonds.\n\nStep 1: Bring milk to a boil in a wide, heavy-bottomed kadai on medium heat.\nStep 2: As cream forms on top, gently push it to the sides of the pan using a spatula.\nStep 3: Repeat the process until milk reduces to 1/3 of its original volume and layers collect on sides.\nStep 4: Add sugar, saffron, and cardamom powder; scrape all cream layers from the sides back into the milk.\nStep 5: Simmer for 2 minutes, let cool, garnish with chopped nuts, and serve chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Coconut Ladoo",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/7133657/pexels-photo-7133657.jpeg",
        steps: "Ingredients: 2 cups fresh or desiccated coconut, 1 cup sweetened condensed milk, 1/2 tsp cardamom powder, 1 tbsp ghee, extra coconut for rolling.\n\nStep 1: Heat ghee in a pan on low flame and roast desiccated coconut for 2-3 minutes until fragrant without browning.\nStep 2: Pour in condensed milk and mix thoroughly on low flame.\nStep 3: Cook mixture continuously until it thickens and begins to leave the sides of the pan.\nStep 4: Stir in cardamom powder, turn off heat, and let mixture cool slightly until safe to touch.\nStep 5: Grease hands with ghee, roll mixture into smooth round ladoos, roll in dry coconut, and serve.",
        youtube: "https://youtu.be",
    },
    {
        name: "Besan Ladoo",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/28437003/pexels-photo-28437003.jpeg",
        steps: "Ingredients: 2 cups coarse gram flour (besan), 1/2 cup ghee, 1 cup powdered sugar (boora/tagar), 1/2 tsp cardamom powder, chopped slivered almonds.\n\nStep 1: Melt ghee in a heavy-bottomed pan, add besan, and roast on low flame continuous stirring.\nStep 2: Roast for 20-25 minutes until besan turns golden brown and releases a rich nutty aroma.\nStep 3: Sprinkle 1 tbsp water at the end to create a grainy (danedar) texture; turn off flame and cool completely.\nStep 4: Mix in powdered sugar and cardamom powder thoroughly into the cooled besan mixture.\nStep 5: Shape tightly into round medium balls, press almond slices on top, and store in an airtight container.",
        youtube: "https://youtu.be",
    },
    {
        name: "Milk Cake",
        category: "indiandessert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDPJy3Q4H1k9iINiXxNyhx5zqkhPYbKwlXU8EAVr3NheaeyW2amhv2Dg&s=1",
        steps: "Ingredients: 2 liters full-cream milk, 3/4 cup sugar, 1/4 tsp alum powder (phitkari) or lemon juice, 2 tbsp ghee.\n\nStep 1: Boil milk in a large heavy kadai, stirring continuously until reduced to half.\nStep 2: Add alum powder or lemon juice in tiny pinches to curdle the milk into tiny grains (danas).\nStep 3: Continue boiling on medium heat until milk thickens into a grainy paste.\nStep 4: Add sugar gradually in portions while stirring, followed by 2 tbsp ghee until mixture turns light brown.\nStep 5: Transfer hot grainy mixture into a deep greased container, cover with a warm towel for 4-5 hours to develop a dark dual-toned core, slice, and serve.",
        youtube: "https://youtu.be",
    },
    {
        name: "Pista Kulfi",
        category: "indiandessert",
        image: "https://media.istockphoto.com/id/843623218/photo/kulfi.jpg?b=1&s=612x612&w=0&k=20&c=rcrksdyc2LJaNuZGy0GKZLQnA53vv_2UiwzQj0Q91GA=",
        steps: "Ingredients: 1 liter full-fat milk, 1/2 cup sugar, 1/4 cup finely blanched and chopped pistachios, 1/2 tsp cardamom powder, green food color (optional), 2 tbsp cornflour or milk powder.\n\nStep 1: Boil milk in a pan and simmer until reduced to half its original quantity.\nStep 2: Mix cornflour in 2 tbsp cold milk, pour into boiling milk, and cook for 5 minutes until thick.\nStep 3: Stir in sugar, cardamom powder, and finely chopped pistachios until dissolved.\nStep 4: Allow kulfi base to cool completely, then pour into kulfi molds or small glasses.\nStep 5: Seal tightly with foil, insert ice cream sticks, and freeze for 8 hours; unmold and serve chilled.",
        youtube: "https://youtu.be",
    },
    {
        name: "Khoya Kulfi",
        category: "indiandessert",
        image: "https://media.istockphoto.com/id/1406503828/photo/special-indian-shahi-pista-kulfi-served-in-glass-isolated-on-dark-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=QsD4Fg9gwhXhp8iIWetLa8t2td-GIS8YmUdGE-0tZnk=",
        steps: "Ingredients: 1 liter milk, 100g crumbled khoya (mawa), 1/2 cup sugar, 1/2 tsp cardamom powder, saffron strands, mixed chopped nuts (almonds, cashews).\n\nStep 1: Boil milk in a heavy pan until reduced to half.\nStep 2: Add crumbled khoya and whisk continuously on low heat until completely dissolved and lump-free.\nStep 3: Mix in sugar, crushed cardamoms, saffron, and chopped nuts; cook for another 5 minutes.\nStep 4: Let mixture cool completely to room temperature.\nStep 5: Pour creamy mix into kulfi cones, cover with foil, and freeze for 8 hours before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Mishti Doi",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/30403808/pexels-photo-30403808.jpeg",
        steps: "Ingredients: 1 liter full-fat milk, 1/2 cup sugar (for caramel), 2 tbsp thick curd (starter culture), earthen pot for setting.\n\nStep 1: Boil milk until reduced to 3/4 volume.\nStep 2: In a separate pan, melt sugar on medium heat without water until it turns dark golden amber caramel.\nStep 3: Carefully pour warm reduced milk into caramel while whisking until completely blended.\nStep 4: Allow caramel milk to cool down until warm to touch; whisk in curd starter.\nStep 5: Pour mixture into an earthen clay pot, cover with foil, wrap in a warm cloth, and set undisturbed for 8-10 hours in a warm place until set; chill before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Medu Vada",
        category: "indian",
        image: "https://images.pexels.com/photos/37421009/pexels-photo-37421009.jpeg",
        steps: "Ingredients: 1 cup urad dal (whole white lentil), 1 tsp cumin seeds, 10-12 peppercorns, 1 chopped green chili, 1/2 inch ginger, curry leaves, oil for deep frying, salt.\n\nStep 1: Soak urad dal in water for 4 hours, drain completely, and grind into a thick, fluffy batter using minimal water.\nStep 2: Aerate batter by whipping vigorously with hands for 5 minutes until light.\nStep 3: Mix cumin, crushed peppercorns, ginger, green chilies, curry leaves, and salt into batter.\nStep 4: Wet palms with water, take a portion of batter, shape into a ball, and press a hole in the center to make a donut shape.\nStep 5: Drop carefully into hot oil and deep fry on medium heat until golden brown and crisp; serve hot with sambar and coconut chutney.",
        youtube: "https://youtu.be",
    },
    {
        name: "Vada Pav",
        category: "indian",
        image: "https://images.pexels.com/photos/34682732/pexels-photo-34682732.jpeg",
        steps: "Ingredients: 4 pav buns, 3 boiled potatoes, 1 cup besan batter, 1 tsp mustard seeds, curry leaves, 1 tbsp ginger-garlic-chili paste, dry garlic chutney, green chutney, oil for frying.\n\nStep 1: Temper mustard seeds, curry leaves, and ginger-garlic-chili paste in 1 tbsp oil; mix with mashed potatoes and salt.\nStep 2: Shape potato mixture into round balls, dip into thick seasoned besan batter, and deep fry until golden crisp batata vadas.\nStep 3: Slice pav buns horizontally keeping one edge connected.\nStep 4: Spread green chutney on one inner side and dry spicy garlic chutney on the other.\nStep 5: Place a piping hot batata vada inside, press gently, and serve with fried green chili.",
        youtube: "https://youtu.be",
    },
    {
        name: "Ukadiche Modak",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/8887067/pexels-photo-8887067.jpeg",
        steps: "Ingredients: 1 cup rice flour, 1 cup water, 1 tsp ghee, 1 cup fresh grated coconut, 3/4 cup jaggery, 1/2 tsp cardamom powder, pinch of nutmeg.\n\nStep 1: Heat coconut and jaggery in a pan until jaggery melts and thickens; stir in cardamom and nutmeg to make filling.\nStep 2: Boil water with 1 tsp ghee and a pinch of salt; stir in rice flour, cover, and steam off heat for 10 minutes.\nStep 3: Knead rice dough while warm into a smooth, crack-free dough.\nStep 4: Flatten a dough portion into a small thin disc, place coconut-jaggery filling in center, pleat edges, and pinch top together into a flower shape.\nStep 5: Steam modaks in a steamer lined with banana leaf or damp cloth for 10-12 minutes; drizzle warm ghee on top before serving.",
        youtube: "https://youtu.be",
    },
    {
        name: "Motichoor Ladoo",
        category: "indiandessert",
        image: "https://images.pexels.com/photos/8887021/pexels-photo-8887021.jpeg",
        steps: "Ingredients: 1 cup fine besan, 1 cup sugar, 1/2 cup water, orange food color, 1/2 tsp cardamom powder, 1 tbsp melon seeds (magaz), ghee or oil for deep frying.\n\nStep 1: Whisk besan and water to form a thin, smooth batter.\nStep 2: Heat ghee/oil, pour batter through a fine perforated boondi ladle, and deep fry tiny boondis for 30 seconds without crisping.\nStep 3: Make sugar syrup with sugar, water, and orange food color until 1-thread consistency is reached.\nStep 4: Add fried boondi, cardamom powder, and melon seeds directly into hot sugar syrup; cover and rest for 30 minutes so boondi absorbs syrup.\nStep 5: Shape warm mixture tightly into round ladoos and let set.",
        youtube: "https://youtu.be",
    },
    {
        name: "South Indian Filter Coffee",
        category: "western",
        image: "https://images.pexels.com/photos/38201891/pexels-photo-38201891.png",
        steps: "Ingredients: 3 tbsp filter coffee powder (chicory blend), 1 cup boiling water, 1 cup full-fat milk, 2 tsp sugar, traditional metal coffee filter and dabara set.\n\nStep 1: Place coffee powder in the top chamber of a traditional coffee filter and press gently with umbrella plunger.\nStep 2: Pour boiling water over filter, close lid, and let thick decoction drip into bottom chamber for 15 minutes.\nStep 3: Boil milk in a pan until frothy.\nStep 4: Pour 2-3 tbsp of strong decoction and sugar into a metal tumbler.\nStep 5: Pour hot milk from a height to build a thick frothy top; pour back and forth between tumbler and dabara cup and serve steaming hot.",
        youtube: "https://youtu.be",
    },
    {
        name: "South Indian Lemon Rice",
        category: "indian",
        image: "https://images.pexels.com/photos/4595312/pexels-photo-4595312.jpeg",
        steps: "Ingredients: 2 cups cooked rice (cooled), 3 tbsp lemon juice, 1 tsp mustard seeds, 1 tbsp chana dal, 1 tbsp urad dal, 2 tbsp raw peanuts, 2 green chilies (slit), curry leaves, 1/2 tsp turmeric, 2 tbsp oil, salt.\n\nStep 1: Heat oil in a pan, add peanuts and fry until golden; remove peanuts and set aside.\nStep 2: In same oil, crackle mustard seeds, chana dal, urad dal, green chilies, and curry leaves until lentils turn golden.\nStep 3: Turn heat to low, add turmeric powder and salt.\nStep 4: Add cooked cooled rice and toss gently to coat yellow evenly without breaking grains.\nStep 5: Turn off heat, pour fresh lemon juice and fried peanuts, mix thoroughly, and serve warm or at room temperature.",
        youtube: "https://youtu.be",
    },
    {
        name: "Dal Khichdi",
        category: "indian",
        image: "https://images.pexels.com/photos/34159111/pexels-photo-34159111.jpeg",
        steps: "Ingredients: 1/2 cup rice, 1/2 cup yellow moong dal, 1 chopped onion, 1 chopped tomato, 1 tsp cumin seeds, 1/2 tsp turmeric, 1 tbsp ghee, ginger, green chilies, salt, fresh coriander.\n\nStep 1: Wash rice and moong dal together and soak for 20 minutes.\nStep 2: Heat 1 tbsp ghee in a pressure cooker, add cumin seeds, chopped ginger, green chilies, and onions; sauté until soft.\nStep 3: Add tomatoes, turmeric, and salt; cook until tomatoes turn soft.\nStep 4: Add soaked rice and dal with 4 cups of water; pressure cook for 4-5 whistles on medium flame for a soft consistency.\nStep 5: Stir in fresh coriander, top with extra ghee, and serve hot with curd or papad.",
        youtube: "https://youtu.be",
    },
    {
        name: "Yellow Dal Tadka",
        category: "indian",
        image: "https://images.pexels.com/photos/30203314/pexels-photo-30203314.jpeg",
        steps: "Ingredients: 1 cup toor dal (pigeon peas), 1/2 tsp turmeric, 1 chopped onion, 1 chopped tomato, 1 tbsp ginger-garlic paste, 1 tsp cumin seeds, 2 dry red chilies, 1/2 tsp Kashmiri red chili powder, 2 tbsp ghee, salt, coriander.\n\nStep 1: Pressure cook toor dal with water, salt, and turmeric for 4 whistles; whisk cooked dal gently.\nStep 2: Heat 1 tbsp ghee in a pan, sauté onions, ginger-garlic paste, and tomatoes until soft; mix in cooked dal and simmer 5 minutes.\nStep 3: Prepare tadka: Heat remaining ghee in a small pan, add cumin seeds, dry red chilies, and Kashmiri chili powder.\nStep 4: Pour sizzling hot tempering directly over dal and cover with a lid immediately to trap aromas.\nStep 5: Garnish with fresh chopped coriander leaves and serve with rice or roti.",
        youtube: "https://youtu.be",
    },
    {
        name: "Spicy Green Chutney",
        category: "indian",
        image: "https://media.istockphoto.com/id/1254338014/photo/raw-mango-chutney%C2%A0also-known-as%C2%A0green-aam-or-kairi-chutney.jpg?b=1&s=612x612&w=0&k=20&c=qwmD1-BFzdY_lpgE36F0dmJ3x8tjIHpSCNUlsXS7t1k=",
        steps: "Ingredients: 2 cups fresh coriander leaves, 1/2 cup fresh mint leaves, 3-4 green chilies, 1 inch ginger, 1 tbsp roasted chana dal or peanuts, 1 tbsp lemon juice, 1/2 tsp black salt, 1/2 tsp cumin powder, salt, 2 tbsp cold water.\n\nStep 1: Wash fresh coriander and mint leaves thoroughly in cold water.\nStep 2: Transfer coriander, mint, green chilies, and ginger into a blender jar.\nStep 3: Add roasted chana dal (or peanuts), cumin powder, black salt, regular salt, and fresh lemon juice.\nStep 4: Pour 2 tbsp ice-cold water (this keeps chutney bright green).\nStep 5: Blend into a smooth thick paste, transfer to a glass jar, and serve with snacks.",
        youtube: "https://youtu.be",
    },
    {
        name: "Boba Tea (Bubble Tea)",
        category: "western",
        image: "https://images.pexels.com/photos/8911656/pexels-photo-8911656.jpeg",
        steps: "Ingredients: 1/2 cup black tapioca pearls, 2 black tea bags (or 1 tbsp loose black tea), 1.5 cups milk (or oat/condensed milk), 2 tbsp brown sugar or boba pearls syrup, 1 cup boiling water, ice cubes.\n\nStep 1: Boil tapioca pearls in water for 15 minutes, turn off heat, cover and let sit for 15 minutes until chewy. Drain and coat in brown sugar syrup.\nStep 2: Steep black tea bags in 1 cup of boiling water for 5 minutes to create a strong tea base, then let cool completely.\nStep 3: Spoon cooked sweet tapioca pearls into the bottom of a tall glass.\nStep 4: Fill the glass halfway with ice cubes and pour in the cooled black tea.\nStep 5: Top with milk, stir well with a wide boba straw, and enjoy cold.",
        youtube: "https://youtu.be",
    },
    {
        name: "Swiss Roll",
        category: "westerndessert",
        image: "https://images.pexels.com/photos/8876156/pexels-photo-8876156.jpeg",
        steps: "Ingredients: 4 eggs, 1/2 cup granulated sugar, 1/2 cup all-purpose flour (maida), 1 tsp vanilla extract, 1/2 tsp baking powder, 1/4 tsp salt, 3/4 cup whipped cream or strawberry jam, powdered sugar for dusting.\n\nStep 1: Beat eggs and sugar using an electric mixer for 5-7 minutes until pale, thick, and fluffy.\nStep 2: Gently fold in sifted all-purpose flour, baking powder, salt, and vanilla extract until just combined.\nStep 3: Spread batter evenly on a lined baking tray and bake at 190°C (375°F) for 10-12 minutes until springy to touch.\nStep 4: Turn hot cake onto a parchment paper dusted with powdered sugar, peel off baking paper, and roll tightly while still warm; let cool completely.\nStep 5: Unroll gently, spread a thick layer of whipped cream or jam, roll it back up, chill for 1 hour, slice, and serve.",
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
