/* =========================================================
   RecipeTown — app logic
   ========================================================= */

const DISHES = [
  {
    name: "Kadhai Paneer",
    img: "images/kadhai-paneer.jpg",
    meta: "30 min · Easy · Serves 4",
    desc: "Paneer and bell peppers simmered in a smoky tomato-onion masala with crushed coriander seeds.",
    accent: "#E8491C",
    accentLight: "#FF8B5E",
    accentSoft: "#FFDCC4",
    accentDark: "#A8330F",
    ingredients: [
      ["Paneer, cubed", "250 g"],
      ["Onion, sliced", "2"],
      ["Tomato, pureed", "3"],
      ["Capsicum, diced", "1"],
      ["Ginger-garlic paste", "1 tbsp"],
      ["Coriander seeds, crushed", "1 tbsp"],
      ["Kashmiri chilli powder", "1 tsp"],
      ["Garam masala", "1/2 tsp"],
      ["Oil", "2 tbsp"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Toast & crush", "Dry roast the coriander seeds until fragrant, then crush them coarsely."],
      ["Build the base", "Heat oil, sauté the onions until golden, then stir in the ginger-garlic paste."],
      ["Simmer the masala", "Add tomato puree, crushed coriander and chilli powder; cook until the oil separates."],
      ["Add the veggies", "Stir in the capsicum and cook for 3–4 minutes until just tender."],
      ["Finish with paneer", "Fold in the paneer cubes and garam masala, and simmer for 2 minutes."],
      ["Garnish & serve", "Top with fresh coriander and serve hot with roti or rice."]
    ],
    nutrition: { calories: 260, protein: 12, fat: 18, carbs: 14, fiber: 3 },
    vitamins: ["Vitamin A", "Vitamin C", "Calcium"]
  },
  {
    name: "Mushroom Masala",
    img: "images/mushroom-masala.jpg",
    meta: "25 min · Easy · Serves 4",
    desc: "Button mushrooms tossed in a silky onion-tomato gravy with a hint of black pepper.",
    accent: "#D98C12",
    accentLight: "#FFC85C",
    accentSoft: "#FFEBC2",
    accentDark: "#9C620A",
    ingredients: [
      ["Button mushrooms, halved", "300 g"],
      ["Onion, chopped", "2"],
      ["Tomato, pureed", "2"],
      ["Ginger-garlic paste", "1 tbsp"],
      ["Cumin seeds", "1 tsp"],
      ["Turmeric", "1/4 tsp"],
      ["Black pepper, crushed", "1/2 tsp"],
      ["Cream or cashew paste", "2 tbsp"],
      ["Oil", "2 tbsp"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Sauté aromatics", "Heat oil, splutter the cumin seeds, then cook the onions until golden."],
      ["Build the gravy", "Add ginger-garlic paste, turmeric and tomato puree; cook until thick."],
      ["Add mushrooms", "Stir in the mushrooms and salt, cover, and cook until they release their water."],
      ["Simmer down", "Uncover and simmer until the gravy clings to the mushrooms."],
      ["Finish rich", "Stir in the cream (or cashew paste) and black pepper."],
      ["Garnish & serve", "Scatter coriander leaves and serve warm with naan."]
    ],
    nutrition: { calories: 190, protein: 6, fat: 13, carbs: 12, fiber: 3 },
    vitamins: ["Vitamin D", "Potassium", "Selenium"]
  },
  {
    name: "Aloo Gobi",
    img: "images/aloo-gobi.jpg",
    meta: "35 min · Easy · Serves 4",
    desc: "Potatoes and cauliflower turmeric-tossed with cumin, ginger and a squeeze of lemon.",
    accent: "#C9A227",
    accentLight: "#F0D468",
    accentSoft: "#FBF0C7",
    accentDark: "#8F7318",
    ingredients: [
      ["Potato, cubed", "2"],
      ["Cauliflower, florets", "1 small"],
      ["Cumin seeds", "1 tsp"],
      ["Turmeric", "1/2 tsp"],
      ["Ginger, julienned", "1 inch"],
      ["Green chilli, slit", "1"],
      ["Red chilli powder", "1/2 tsp"],
      ["Oil", "2 tbsp"],
      ["Lemon juice", "to finish"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Temper the spices", "Heat oil, splutter the cumin seeds, then add ginger and green chilli."],
      ["Add potatoes", "Toss in the potato cubes with turmeric and salt; cover and cook for 8 minutes."],
      ["Add cauliflower", "Stir in the cauliflower florets and red chilli powder."],
      ["Cook through", "Cover and cook on low heat, stirring occasionally, until both are fork-tender."],
      ["Brighten it up", "Squeeze over fresh lemon juice."],
      ["Garnish & serve", "Finish with coriander leaves and serve with paratha."]
    ],
    nutrition: { calories: 170, protein: 4, fat: 7, carbs: 24, fiber: 5 },
    vitamins: ["Vitamin C", "Vitamin B6", "Folate"]
  },
  {
    name: "Butter Chicken",
    img: "images/butter-chicken.jpg",
    meta: "45 min · Medium · Serves 4",
    desc: "Chargrilled chicken simmered in a velvety tomato-butter gravy, finished with cream.",
    accent: "#E2574C",
    accentLight: "#FF9289",
    accentSoft: "#FFE0DC",
    accentDark: "#A83A32",
    ingredients: [
      ["Chicken, boneless", "500 g"],
      ["Yogurt", "1/2 cup"],
      ["Butter", "3 tbsp"],
      ["Tomato puree", "1.5 cups"],
      ["Kashmiri chilli powder", "1 tsp"],
      ["Garam masala", "1 tsp"],
      ["Ginger-garlic paste", "1 tbsp"],
      ["Kasuri methi (dried fenugreek)", "1 tsp"],
      ["Cream", "3 tbsp"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Marinate", "Coat the chicken in yogurt, ginger-garlic paste and half the spices; rest for 30 minutes."],
      ["Sear the chicken", "Pan-sear or grill the marinated chicken until charred at the edges."],
      ["Build the gravy", "Melt butter, add tomato puree and the remaining spices; simmer until thick."],
      ["Combine", "Add the seared chicken to the gravy and simmer until fully cooked."],
      ["Finish silky", "Stir in the cream and crushed kasuri methi."],
      ["Garnish & serve", "Top with a swirl of butter and serve with naan."]
    ],
    nutrition: { calories: 420, protein: 28, fat: 30, carbs: 10, fiber: 1 },
    vitamins: ["Vitamin A", "Vitamin B12", "Calcium"]
  },
  {
    name: "Chole",
    img: "images/chole.jpg",
    meta: "40 min · Medium · Serves 4",
    desc: "Chickpeas simmered in a tangy, deeply spiced tomato-onion masala.",
    accent: "#1E8A7A",
    accentLight: "#5FC3B4",
    accentSoft: "#D4F2EC",
    accentDark: "#125F53",
    ingredients: [
      ["Chickpeas, boiled", "2 cups"],
      ["Onion, pureed", "2"],
      ["Tomato, pureed", "2"],
      ["Chole masala", "2 tbsp"],
      ["Ginger-garlic paste", "1 tbsp"],
      ["Bay leaf", "1"],
      ["Oil", "2 tbsp"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Build the base", "Heat oil, add the bay leaf and onion puree, and cook until golden brown."],
      ["Add the masala", "Stir in ginger-garlic paste, tomato puree and chole masala; cook until the oil separates."],
      ["Add chickpeas", "Fold in the boiled chickpeas along with a little of their cooking liquid."],
      ["Simmer deep", "Let it simmer for 15–20 minutes so the chickpeas soak up the masala."],
      ["Mash a few", "Lightly mash a few chickpeas to thicken the gravy naturally."],
      ["Garnish & serve", "Finish with coriander and serve with bhature or rice."]
    ],
    nutrition: { calories: 280, protein: 13, fat: 9, carbs: 38, fiber: 10 },
    vitamins: ["Folate", "Iron", "Manganese"]
  },
  {
    name: "Rajma Masala",
    img: "images/rajma-masala.jpg",
    meta: "40 min · Medium · Serves 4",
    desc: "Kidney beans slow-simmered in a rich, spiced onion-tomato curry.",
    accent: "#A3336B",
    accentLight: "#E283AD",
    accentSoft: "#F6D9E6",
    accentDark: "#6E2049",
    ingredients: [
      ["Rajma (kidney beans), boiled", "1.5 cups"],
      ["Onion, chopped", "2"],
      ["Tomato, pureed", "3"],
      ["Ginger-garlic paste", "1 tbsp"],
      ["Cumin seeds", "1 tsp"],
      ["Garam masala", "1 tsp"],
      ["Red chilli powder", "1/2 tsp"],
      ["Oil", "2 tbsp"],
      ["Salt, to taste", ""]
    ],
    steps: [
      ["Temper", "Heat oil, splutter the cumin seeds, then cook the onions until deep golden."],
      ["Build the masala", "Add ginger-garlic paste and tomato puree; cook until the oil separates."],
      ["Add the beans", "Stir in the boiled rajma along with some of its cooking liquid."],
      ["Simmer long", "Let it simmer for 20 minutes so the curry thickens and the beans soften further."],
      ["Mash slightly", "Mash a few beans against the pot to naturally thicken the gravy."],
      ["Garnish & serve", "Top with coriander and serve with steamed rice."]
    ],
    nutrition: { calories: 300, protein: 15, fat: 8, carbs: 42, fiber: 12 },
    vitamins: ["Iron", "Folate", "Magnesium"]
  }
];

/* wheel slot layout — percentages within .wheel box */
const SLOTS = {
  big:  { left: 65, top: 78, size: 48, opacity: 1,    z: 6 },
  arc1: { left: 96, top: 44, size: 21, opacity: 0.95, z: 5 },
  arc2: { left: 80, top: 13, size: 16, opacity: 0.85, z: 4 },
  arc3: { left: 50, top: 4,  size: 14, opacity: 0.85, z: 4 },
  arc4: { left: 20, top: 13, size: 16, opacity: 0.8,  z: 3 },
  arc5: { left: 3,  top: 44, size: 18, opacity: 0.55, z: 2 }
};
const SLOT_ORDER = ["big", "arc1", "arc2", "arc3", "arc4", "arc5"];

let order = DISHES.map((_, i) => i);   // order[0] = index of dish currently "big"
let stepIndex = 0;
let autoTimer = null;

const $ = (id) => document.getElementById(id);

const orbitEl = $("orbit");
const dishMetaEl = $("dishMeta");
const dishNameEl = $("dishName");
const dishDescEl = $("dishDesc");
const dishDotsEl = $("dishDots");

const homeScreen = $("homeScreen");
const recipeScreen = $("recipeScreen");
const stepsView = $("stepsView");
const finalView = $("finalView");

/* ---------------------------------------------------------
   build the six food nodes once
--------------------------------------------------------- */
DISHES.forEach((dish, i) => {
  const btn = document.createElement("button");
  btn.className = "food-node";
  btn.type = "button";
  btn.dataset.index = i;
  btn.innerHTML = `<span class="plate"><img class="food-img" src="${dish.img}" alt="${dish.name}"></span>`;
  btn.addEventListener("click", () => onNodeClick(i));
  orbitEl.appendChild(btn);
});

DISHES.forEach(() => {
  const dot = document.createElement("span");
  dishDotsEl.appendChild(dot);
});

/* ---------------------------------------------------------
   theme + rendering
--------------------------------------------------------- */
function applyTheme(dish){
  const root = document.documentElement.style;
  root.setProperty("--accent", dish.accent);
  root.setProperty("--accent-light", dish.accentLight);
  root.setProperty("--accent-soft", dish.accentSoft);
  root.setProperty("--accent-dark", dish.accentDark);
}

function renderWheel(){
  const nodes = orbitEl.querySelectorAll(".food-node");
  order.forEach((dishIndex, slotPos) => {
    const slotName = SLOT_ORDER[slotPos];
    const slot = SLOTS[slotName];
    const node = nodes[dishIndex];
    node.dataset.slot = slotName;
    node.style.left = slot.left + "%";
    node.style.top = slot.top + "%";
    node.style.width = slot.size + "%";
    node.style.height = slot.size + "%";
    node.style.opacity = slot.opacity;
    node.style.zIndex = slot.z;
  });

  const big = DISHES[order[0]];
  applyTheme(big);
  dishMetaEl.textContent = big.meta;
  dishNameEl.textContent = big.name;
  dishDescEl.textContent = big.desc;

  [...dishDotsEl.children].forEach((dot, i) => {
    dot.classList.toggle("is-active", i === order[0]);
  });
}

function rotate(steps){
  if (steps > 0){
    for (let i = 0; i < steps; i++) order.push(order.shift());
  } else {
    for (let i = 0; i < -steps; i++) order.unshift(order.pop());
  }
  renderWheel();
  restartAutoRotate();
}

function onNodeClick(dishIndex){
  const slotPos = order.indexOf(dishIndex);
  if (slotPos === 0){
    openRecipe(dishIndex);
    return;
  }
  order = [...order.slice(slotPos), ...order.slice(0, slotPos)];
  renderWheel();
  restartAutoRotate();
}

function restartAutoRotate(){
  clearInterval(autoTimer);
  autoTimer = setInterval(() => rotate(1), 4800);
}

$("nextBtn").addEventListener("click", () => rotate(1));
$("prevBtn").addEventListener("click", () => rotate(-1));
$("viewRecipeBtn").addEventListener("click", () => openRecipe(order[0]));

renderWheel();
restartAutoRotate();

/* ---------------------------------------------------------
   recipe screen
--------------------------------------------------------- */
let currentDish = null;

function openRecipe(dishIndex){
  currentDish = DISHES[dishIndex];
  applyTheme(currentDish);
  stepIndex = 0;

  $("recipeEyebrow").textContent = currentDish.meta;
  $("recipeDishName").textContent = "Steps & Ingredients";

  const list = $("ingredientsList");
  list.innerHTML = "";
  currentDish.ingredients.forEach(([label, qty]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span>${qty ? `<span class="qty">${qty}</span>` : ""}`;
    li.addEventListener("click", () => li.classList.toggle("is-checked"));
    list.appendChild(li);
  });

  renderStep();

  homeScreen.hidden = true;
  recipeScreen.hidden = false;
  stepsView.hidden = false;
  finalView.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStep(){
  const total = currentDish.steps.length;
  const [title, text] = currentDish.steps[stepIndex];

  const card = $("stepCard");
  card.classList.add("is-swapping");

  setTimeout(() => {
    $("stepIndex").textContent = `Step ${stepIndex + 1} of ${total}`;
    $("stepTitle").textContent = title;
    $("stepText").textContent = text;
    card.classList.remove("is-swapping");
  }, 180);

  $("stepProgressFill").style.width = ((stepIndex + 1) / total) * 100 + "%";
  $("stepImg").src = currentDish.img;
  $("stepImg").alt = currentDish.name;
  $("backStepBtn").hidden = stepIndex === 0;
  $("nextStepBtn").textContent = stepIndex === total - 1 ? "Finish cooking" : "Next step";
}

$("nextStepBtn").addEventListener("click", () => {
  if (stepIndex < currentDish.steps.length - 1){
    stepIndex++;
    renderStep();
  } else {
    showFinal();
  }
});

$("backStepBtn").addEventListener("click", () => {
  if (stepIndex > 0){
    stepIndex--;
    renderStep();
  }
});

$("backToHome").addEventListener("click", goHome);
$("cookAnotherBtn").addEventListener("click", goHome);

function goHome(){
  recipeScreen.hidden = true;
  homeScreen.hidden = false;
  renderWheel();
}

/* ---------------------------------------------------------
   final plated view + nutrition
--------------------------------------------------------- */
function showFinal(){
  const n = currentDish.nutrition;

  $("bowlImg").src = currentDish.img;
  $("bowlImg").alt = currentDish.name;
  $("finalHeading").textContent = `Your ${currentDish.name} is ready!`;

  $("nutriImg").src = currentDish.img;
  $("nutriImg").alt = currentDish.name;

  $("nutriCalories").querySelector("strong").textContent = n.calories;
  $("nutriProtein").querySelector("strong").textContent = n.protein + "g";
  $("nutriCarbs").querySelector("strong").textContent = n.carbs + "g (" + n.fiber + "g fibre)";
  $("nutriFat").querySelector("strong").textContent = n.fat + "g";

  const tagWrap = $("vitaminTags");
  tagWrap.innerHTML = "";
  currentDish.vitamins.forEach(v => {
    const span = document.createElement("span");
    span.textContent = v;
    tagWrap.appendChild(span);
  });

  stepsView.hidden = true;
  finalView.hidden = false;
}
