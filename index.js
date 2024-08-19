const meals = document.getElementById("random");
const search = document.getElementById("search");
getRandomMeal();
async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const Random = await resp.json();
  const randomMeal = Random.meals[0];
  console.log(randomMeal);
  addMeal(randomMeal);
}

function addMeal(mealData) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `
         <div class="meal-header">
            <span>Random Recipes</span>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="name">
            <p>${mealData.strMeal}</p>
            <button class="btn">
                <i class="fa-solid fa-heart"></i>
                <i art"></i>
              
            </button>
        </div>

         `;

  meals.appendChild(meal);

  const btn = meal.querySelector(".name .btn");
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    addMeal();
  });
}

search.addEventListener("click", searchMeal);
async function searchMeal(meal) {
  let enter = document.getElementById("text").value.trim();
  enter = enter.charAt(0).toUpperCase() + enter.slice(1).toLowerCase();
  const res =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${enter}
                `);
  const response = await res.json();
  console.log(response);
  const searchMeal = document.getElementById("searchMeal");
  searchMeal.innerHTML = " ";
  if (response.meals) {
    response.meals.forEach((meal) => {
      const food = document.createElement("div");
      food.classList.add("food");
      food.innerHTML = `
                    <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
                      <p id = 'title'>${meal.strMeal}</p>
                     <p id='recipe'>Get Recipe</p>
                    `;

      searchMeal.appendChild(food);
    });
  }
}

searchMeal();

document.querySelectorAll(".type").forEach((item) => {
  item.addEventListener("click", loadMeal);
});
async function loadMeal(e) {
  const attribute = e.target.getAttribute("data-ingredient");
  const res =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${attribute}
    `);
  const response = await res.json();
  console.log(response);
  const searchMeal = document.getElementById("searchMeal");
  searchMeal.innerHTML = " ";
  if (response.meals) {
    response.meals.forEach((meal) => {
      const food = document.createElement("div");
      food.classList.add("food");
      food.innerHTML = `
                    <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
                      <p id = 'title'>${meal.strMeal}</p>
                      <p id='recipe'>Get Recipe</p>
                    `;

      searchMeal.appendChild(food);
    });
  }
}
