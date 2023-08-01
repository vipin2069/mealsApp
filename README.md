
# Meal App
This is a simple meal app built using vanilla JavaScript that allows users to search for meals, add them to their favourites list, and view detailed information about each meal.

# Features
## Home Page
Search any meal from the API and display the search results on the frontend.
Search results update as you type, just like Google's suggestions.
Each search result has a "Favourite" button, clicking on which adds the meal to "My favourite meals" list.
Clicking on any search result opens a new page with more information about that meal (Meal Detail Page).
## Meal Detail Page
Shows information about the meal, including its name, photo, and instructions.
## My Favourite Meals Page
Displays a list of all the favourite meals.
The list of favourite meals persists even after closing or refreshing the browser.
Each meal in the list has a "Remove from Favourites" button to remove it from the list.
# How to Use
Clone this repository to your local machine.
```bash
git clone [https://github.com/your-username/meal-app.git](https://github.com/vipin2069/mealsApp.git)
cd meal-app
```
Open the index.html file in your web browser to launch the app.

Use the search input on the Home Page to search for meals. As you type, the search results will be displayed below the input field.

Click on the "Favourite" button of any search result to add that meal to your favourites list.

Click on any search result to view more information about that meal on the Meal Detail Page.

To view your favourite meals, click on the "My Favourite Meals" button on the Home Page. You can remove meals from the favourites list by clicking the "Remove from Favourites" button on the My Favourite Meals Page.

Technical Details
This app is built using only vanilla JavaScript, HTML, and CSS. No external libraries or frameworks are used for JavaScript.

The app utilizes the MealDB API (https://www.themealdb.com/api.php) to fetch meal data for searching and displaying meal details.
