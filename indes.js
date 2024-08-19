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
