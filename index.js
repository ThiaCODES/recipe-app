const meals= document.getElementById('random')
const search = document.getElementById('search')
getRandomMeal()
async function getRandomMeal(){
   const resp= await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const Random = await resp.json()
    const randomMeal = Random.meals[0]
console.log(randomMeal);
    addMeal(randomMeal)

}

async function favorite() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const response = await resp.json()
    console.log(response)
    if(response.categories){
    response.categories.forEach(items=> {
        const foods = document.createElement('div')
        foods.classList.add('foods')
        foods.innerHTML=`

        <div class="foods">
       
        <img src='${items.strCategoryThumb}' alt='${items.strCategory}'>
        <p>${items.strCategory}</p>
        
        </div>

        `
        const favoriteMeal= document.getElementById('favorite')
    favoriteMeal.appendChild(foods)
    })}
    
}
favorite()

function addMeal(mealData) {
         const meal = document.createElement('div');
         meal.classList.add('meal');
         meal.innerHTML= `
         <div class="meal-header">
            <span>Random Recipes</span>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="name">
            <p>${mealData.strMeal}</p>
            <button class="btn">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            </button>
        </div>

         `

         meals.appendChild(meal);

const btn = meal.querySelector('.name .btn')
btn.addEventListener('click', ()=>{
       btn.classList.toggle('active')
       addMeal()
})
}

search.addEventListener('click',searchMeal);
  async function searchMeal(meal) {
         const enter = document.getElementById('text').value.trim();
       const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${enter}`)
        const response = await res.json();
        console.log(response)
        const foods= document.getElementById('searchMeal')
        foods. innerHTML = " ";
        if(enter===''){
            foods.innerHTML= " "

        }
        if (response.meals){
            response.meals.forEach(item=> {
                const food = document.createElement('div');
                food.classList.add('food');
                food.innerHTML=`
                 <div class="food-header">
            <img src="${item.strMealThumb}" alt="${item.strMeal}">
        </div>
        <div class="name">
            <p>${item.strMeal}</p>
            <button class="btn">
                Get Recipe
            </button>
        </div>
                `
        foods.appendChild(food)
    
            });

        }
        else{
            foods.innerHTML = `sorry, we can't find the meal`
        }
        document.body.classList.remove('meals')
      }
       
       


    
   
   searchMeal()