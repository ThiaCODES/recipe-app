async function favorite() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const response = await resp.json();
  console.log(response);
  const favoriteMeal = document.getElementById("favorite");

  if (response.categories) {
    let carouselItems = "";

    for (let i = 0; i < response.categories.length; i += 3) {
      let mealSet = response.categories.slice(i, i + 3);

      // Use the correct index to determine the active item
      carouselItems += `
          <div class="carousel-item ${i === 0 ? "active" : ""}">
           <div class="d-flex flex-row">
              ${mealSet
                .map(
                  (item) => `
                    <div class="d-flex flex-column me-2">
                    <img class="d-block w-100" src="${item.strCategoryThumb}" alt="${item.strCategory}">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${item.strCategory}</h5>
                      
                      <p><p/>
                    </div>
                  </div>
                `
                )
                .join("")}
            </div>
          </div>`;
    }onst getFood = document.createElement("div");
    getFood.classList.add("get");
    get.innerHTML = `
  <button>
      <i class="fa-solid fa-square-xmark"></i>
  </button>
  <h2 class="name-meal">${meal.strMeal}</h2>
  <h4 class="category">${meal.strMeal}</h4>
  <h3 class="instruction"> Instructions </h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rerum adipisci eveniet molestias, nihil nesciunt dolore totam itaque iste laudantium quod aperiam, voluptates fugiat error debitis cupiditate. Natus, ipsum maiores.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quis velit eum enim quidem explicabo cum ipsam vero inventore, sapiente accusantium, beatae maiores earum pariatur cupiditate saepe incidunt assumenda provident!
  </p>
  <img src="${meal.strMealThumb}" alt="recipe"></img>
  <div class="recipe-link">
      <a href="${meal.strYoutube}">Watch the video</a>
  </div>`;
    content.appendChild(get);
  }
  

    favoriteMeal.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carouselItems}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>`;
  }
}

// Call the function to populate the carousel

favorite();


const get = document.querySelectorAll('.')
<div class="content">
<button>
    <i class="fa-solid fa-square-xmark"></i>
</button>
<h2 class="name-meal">Meals Name Here</h2>
<h4 class="category">Category Name</h4>
<h3 class="instruction"> Instructions </h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rerum adipisci eveniet molestias, nihil nesciunt dolore totam itaque iste laudantium quod aperiam, voluptates fugiat error debitis cupiditate. Natus, ipsum maiores.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quis velit eum enim quidem explicabo cum ipsam vero inventore, sapiente accusantium, beatae maiores earum pariatur cupiditate saepe incidunt assumenda provident!
</p>
<img src="https://www.themealdb.com/images/media/meals/1525873040.jpg" alt="recipe"></img>
<div class="recipe-link">
    <a href="#">Watch the video</a>
</div>
