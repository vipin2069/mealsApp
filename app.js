const favMealList = document.getElementById("fav-meals");
const searchMealList = document.getElementById("search-meals");
const searchInput = document.getElementById("searchInput");
const noSearchMeals = document.getElementById("noSearchMeals");
const noFavMeals = document.getElementById("noFavMeals");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

let favourites = [];

// Fetch meal suggestions from API
async function fetchSuggestions(query) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  return data.meals || [];
}

function backTo() {
  firstPage.style.display = "flex";
  secondPage.style.display = "none";
}

function showMealDetails(meal) {
  const youtubeID = meal.strYoutube.split("=")[1];
  firstPage.style.display = "none";
  secondPage.style.display = "flex";

  const recipeDetails = `        <div class="recipeHeader">
    <button class="backToHome" onclick="backTo()"><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 26.676 26.676" xml:space="preserve">
    <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59
    c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815
    C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029
    c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562
    C26.18,21.891,26.141,21.891,26.105,21.891z"/>
    </svg></button>
    
    <h1>${meal.strMeal}</h1>
    <h3>${meal.strArea} ${meal.strCategory}</h3>
    </div>
    <div class="recipeContainer">
    <div class="recipeImg">
    <img src="${meal.strMealThumb}" alt="" />
    </div>
    <div class="recipeIngredients">
    <h4>INGREDIENTS</h4>
    <table>
    <tr>
    <th>${meal.strMeasure1}</th>
    <td>${meal.strIngredient1}</td>
    </tr>
    
    <tr>
    <th>${meal.strMeasure2}</th>
    <td>${meal.strIngredient2}</td>
    </tr>
    
    <tr>
    <th>${meal.strMeasure3}</th>
    <td>${meal.strIngredient3}</td>
    </tr>
    
        <tr>
        <th>${meal.strMeasure4}</th>
        <td>${meal.strIngredient4}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure5}</th>
        <td>${meal.strIngredient5}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure6}</th>
        <td>${meal.strIngredient6}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure7}</th>
        <td>${meal.strIngredient7}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure8}</th>
        <td>${meal.strIngredient8}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure9}</th>
        <td>${meal.strIngredient9}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure10}</th>
        <td>${meal.strIngredient10}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure11}</th>
        <td>${meal.strIngredient11}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure12}</th>
        <td>${meal.strIngredient12}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure13}</th>
        <td>${meal.strIngredient13}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure14}</th>
        <td>${meal.strIngredient14}</td>
        </tr>
        
        <tr>
        <th>${meal.strMeasure15}</th>
        <td>${meal.strIngredient15}</td>
        </tr>
        </table>
        </div>
        </div>
        <div class="recipeDetails">
        <h4>INSTRUCTIONS</h4>
        <p>
        ${meal.strInstructions}
        </p>
        <div class="video-container">
        <iframe id="youtube-player" width="560" height="315"
        src="https://www.youtube.com/embed/${youtubeID}?enablejsapi=1&autoplay=0&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<button class="backToHome" onclick="backTo()">Back To Home</button>
</div>`;

  secondPage.innerHTML = recipeDetails;
}
function addToFavourites(meal) {
  favourites.push(meal);
  renderFavourites();
}
// Remove meal from favourites
function removeFromFavourites(meal) {
  resetFVT(meal.idMeal);
  favourites = favourites.filter((favMeal) => favMeal.idMeal !== meal.idMeal);
  renderFavourites();
}

// function to reset favourite button

function resetFVT(id) {
  document.getElementById(id).classList.remove("active");
}

// Render favourites list
function renderFavourites() {
  if (favourites.length > 0) {
    favMealList.innerHTML = "";
    favourites.forEach((meal) => {
      const listItem = document.createElement("div");
      listItem.classList.add("meal");
      listItem.innerHTML = `
      <img class="mealImg" src="${meal.strMealThumb}" alt="${meal.strMeal}" title="click to see more details" />
      <div class="mealFeature">
      <div>
      <h3 title="${meal.strMeal}">${meal.strMeal}</h3>
      <p>${meal.strArea} ${meal.strCategory}</p>
      </div>
      <button class="favorite-btn">     <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11V17" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 11V17" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 7H20" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>
      </div>
      `;

      favMealList.appendChild(listItem);
      // Add event listener to the image
      const mealImg = listItem.querySelector(".mealImg");
      mealImg.addEventListener("click", () => {
        showMealDetails(meal);
      });

      // Add event listener to the favorite button
      const favoriteBtn = listItem.querySelector(".favorite-btn");
      favoriteBtn.addEventListener("click", (event) => {
        if (favoriteBtn.classList.value !== "favorite-btn active") {
          favoriteBtn.classList.remove("active");
          removeFromFavourites(meal);
        }
        event.stopPropagation();
      });
    });
    favMealList.style.display = "flex";
    noFavMeals.style.display = "none";
  } else {
    favMealList.style.display = "none";
    noFavMeals.style.display = "flex";
  }
}

searchInput.addEventListener("input", async (e) => {
  const query = e.target.value.trim();
  if (query.length === 0) {
    searchMealList.style.display = "none";
    noSearchMeals.style.display = "flex";
    return;
  }

  const suggestions = await fetchSuggestions(query);
  if (suggestions.length > 0) {
    searchMealList.innerHTML = "";
    suggestions.forEach((meal) => {
      const listItem = document.createElement("div");
      listItem.classList.add("meal");
      listItem.innerHTML = `
      <img class="mealImg" src="${meal.strMealThumb}" alt="${meal.strMeal}" title="click to see more details" />
      <div class="mealFeature">
      <div>
      <h3 title="${meal.strMeal}">${meal.strMeal}</h3>
      <p>${meal.strArea} ${meal.strCategory}</p>
      </div>
      <button class="favorite-btn" id="${meal.idMeal}">        <?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px"
      height="30px">
      <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
      </svg></button>
      </div>
      `;

      searchMealList.appendChild(listItem);

      // Add event listener to the image
      const mealImg = listItem.querySelector(".mealImg");
      mealImg.addEventListener("click", () => {
        showMealDetails(meal);
      });

      // Add event listener to the favorite button
      const favoriteBtn = listItem.querySelector(".favorite-btn");
      favoriteBtn.addEventListener("click", (event) => {
        if (favoriteBtn.classList.value !== "favorite-btn active") {
          favoriteBtn.classList.add("active");
          addToFavourites(meal);
        }
        event.stopPropagation();
      });
    });
    searchMealList.style.display = "flex";
    noSearchMeals.style.display = "none";
  } else {
    searchMealList.style.display = "none";
    noSearchMeals.style.display = "flex";
  }
});
