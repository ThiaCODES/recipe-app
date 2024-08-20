const meals = document.getElementById("random");
const search = document.getElementById("search");
const get = document.querySelectorAll("#recipe");
const searchFood = document.getElementById("searchMeal");
const result = document.querySelector(".result");
const showRecipe = document.querySelector(".meal");
const load = document.querySelector(".result-container");
const spin = document.getElementById("roll");
const resultTitle = document.getElementById("result-title");

getRandomMeal();

async function getRandomMeal() {
  spin.style.display = "none";
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const Random = await resp.json();
  const randomMeal = Random.meals[0];
  console.log(randomMeal);
  addMeal(randomMeal);
}

function addMeal(mealData) {
  meals.innerHTML = `
         <div class="meal-header">
            <span>Random Recipes</span>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="name">
            <p class='name-recipe'>${mealData.strMeal}</p>
            <button class="btn">
              <i class="fa-solid fa-eye"></i>
                
              
            </button>
        </div>

         `;

  const btn = meals.querySelector(".name .btn");
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    LoadRecipe([mealData]);
  });
}

search.addEventListener("click", searchMeal);
async function searchMeal(meal) {
  searchFood.innerHTML = " ";
  spin.style.display = "block";
  let enter = document.getElementById("text").value.trim();
  enter = enter.charAt(0).toUpperCase() + enter.slice(1).toLowerCase();
  const res =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${enter}
                `);
  const response = await res.json();
  console.log(response);
  setTimeout(() => {
    resultTitle.style.display = "block";
    searchFood.innerHTML = " ";
    if (response.meals) {
      response.meals.forEach((meal) => {
        const food = document.createElement("div");
        food.classList.add("food");
        food.innerHTML = `
                      <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
                        <p id = 'title'>${meal.strMeal}</p>
                        <br>
                       <a href="#" class="get-btn" data-id=${meal.idMeal}>Get Recipe</a>
                      `;

        searchFood.appendChild(food);
      });
    }
    spin.style.display = "none";
  }, 3000);
}
document.querySelectorAll(".type").forEach((item) => {
  item.addEventListener("click", loadMeal);
});
async function loadMeal(e) {
  searchFood.innerHTML = " ";
  spin.style.display = "block";
  const attribute = e.target.getAttribute("data-ingredient");
  const res =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${attribute}
    `);
  const response = await res.json();
  console.log(response);

  setTimeout(() => {
    resultTitle.style.display = "block";
    searchFood.innerHTML = " ";
    if (response.meals) {
      response.meals.forEach((meal) => {
        const food = document.createElement("div");
        food.classList.add("food");
        food.innerHTML = `
                      <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
                        <p id = 'title'>${meal.strMeal}</p>
                        <br>
                       <a href="#" class="get-btn" data-id=${meal.idMeal}>Get Recipe</a>
                      `;

        searchFood.appendChild(food);
      });
    }
    spin.style.display = "none";
  }, 3000);
}
searchFood.addEventListener("click", getRecipe);
async function getRecipe(e) {
  e.preventDefault();

  if (e.target.classList.contains("get-btn")) {
    const mealId = e.target.dataset.id;
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const response = await res.json();

    LoadRecipe(response.meals);
  }
}

function LoadRecipe(meal) {
  meal = meal[0];
  console.log(meal);
  let html = `
  
      <button>
      <i class="fa-solid fa-square-xmark"></i>
  </button>
  <h1 class="name-meal">${meal.strMeal}</h1>
  <h2 class="category">${meal.strCategory}</h2>
  <br>
  <h3 class="instruction">Instructions:</h3>
  <p>${meal.strInstructions}
  
  </p>
  <br>
  <h3>Main Ingredrients:</h3>
  <br>
  <p>${meal.strIngredient1}</p>
  <p>${meal.strIngredient2}</p>
  <p>${meal.strIngredient3}</p>
  <p>${meal.strIngredient4}</p>
  <p>${meal.strIngredient5}</p>
  <p>${meal.strIngredient6}</p>
  <img src="${meal.strMealThumb}" alt="recipe"></img>
    
      </div>
      
      
      
      `;
  console.log(meal);
  result.innerHTML = html;
  result.parentElement.style.display = "flex";
}
load.addEventListener("click", closeBtn);

function closeBtn(e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-square-xmark")) {
    result.parentElement.style.display = "none";
  }
}
