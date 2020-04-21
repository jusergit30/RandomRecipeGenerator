// get the reference to html elements via querySelector()
let name = document.querySelector('.recipeName');
let origin = document.querySelector('.recipeOrigin');
let category = document.querySelector('.recipeCategory');
let instruction = document.querySelector('.recipeInstruction');
let image = document.querySelector('.recipeImage');
let article = document.querySelector('.recipeArticle');
let button = document.querySelector('.btnClick');
let recipe = document.querySelector('.recipe');


// const proxy = 'https://cors-anywhere.herokuappp.com/';
const api = `https://www.themealdb.com/api/json/v1/1/random.php`;

//eventlistener callback function to update the html element and attributes
let display = meal => {
   recipe.classList.add('bg-light', 'text-dark')
   name.innerHTML = `Name: ${meal['strMeal']}`;
   category.innerHTML = `Type: ${meal['strCategory']}`;
   origin.innerHTML = `${meal['strArea']} recipe`
   instruction.innerHTML = meal['strInstructions'];
   image.classList.add('d-inline-flex');
   image.setAttribute('src', `${meal['strMealThumb']}`);
   image.setAttribute('height', '200');
   image.setAttribute('width', '450');

   if (meal['strSource']) {
      article.setAttribute('href', `${meal['strSource']}`);
      article.setAttribute('style', 'color:#0000cc;')
      article.innerHTML = `${meal['strSource']}`;
   }
}

// add the event listener to button click
button.addEventListener('click', () => {

   // get the date from the mealdb api using fetch() API call
   fetch(api)
      .then(response => {
         return response.json();
      }).then(data => {
         // const {strMeal, strArea, strInstructions, strMealThumb, strSource, strYoutube} = data;
         // console.log(strMeal, strArea, strInstructions, strMealThumb, strSource, strYoutube);
         display(data.meals[0]);
      }).catch(e => console.warn(e))

})
