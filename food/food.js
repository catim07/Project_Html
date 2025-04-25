
function nextpageaddfood() {
  window.location.href = "/addfood/addfood.html"
}
function nameUserLogin() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
  let nameUserLogin = document.getElementById("nameUserLogin")
  let currentUser = userList.find(user => user.email === userLogin.email);
  nameUserLogin.innerText = `Hello, ${currentUser.name} !`
  nameUserLogin.style.fontSize = "20px"
}
// nameUserLogin()

function searchFood() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let foodList = JSON.parse(localStorage.getItem("foodList"));
  let filteredList = foodList.filter(food =>
    food.name.toLowerCase().includes(keyword)
  );
  renderFoodFromList(filteredList);
  renderFoodPagin(foodList)
}


let curPageFood = 1;
const maxItemFood = 5;
function renderFoodFromList(list) {
  let dataFoods = document.getElementById("dataFoods");
  let startIndex = (curPageFood - 1) * maxItemFood;
  let endIndex = curPageFood * maxItemFood;
  let temp = list.slice(startIndex, endIndex);
  let data = ``;

  for (let i = 0; i < temp.length; i++) {
    data += `
      <div  onclick="changeFood(${i})" 
           style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px;">
          <span>
              ${temp[i].name}<br>
              <small style="color: gray;">${temp[i].source}</small>
          </span>
          <span>${temp[i].macronutrients.energy} kcal <br><small>Energy</small></span>
          <span>${temp[i].macronutrients.fat} g <br><small>Fat</small></span>
          <span>${temp[i].macronutrients.carbohydrate} g <br><small>Carbohydrate</small></span>
          <span>${temp[i].macronutrients.protein} g <br><small>Protein</small></span>
      </div>
      `;
  }

  data += `
  <div onclick="nextpageaddfood()" style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px; background: white">
      <div " style="font-size: 25px;">
          <i class="fa-regular fa-square-plus"></i>
          Create food
      </div>
  </div>
  <div id="foodPagin" style="margin-top: 50px; display: flex; justify-content: flex-end; margin-right: 50px; margin-bottom: 30px;">
      
  </div>
  `;

  dataFoods.innerHTML = data;
}
renderFoodFromList(JSON.parse(localStorage.getItem("foodList")));


function renderFoodPagin(list) {
  let pagin = document.getElementById("foodPagin");
  let countPage = Math.ceil(list.length / maxItemFood);
  let buttons = "";

  for (let i = 1; i <= countPage; i++) {
    buttons += `<button onclick="setPageFood(${i})" class="btn" style="color:${i === curPageFood ? 'red' : 'black'}">${i}</button>`;
  }

  pagin.innerHTML = `
    <button onclick="setPageFood(${curPageFood - 1})">Prev</button>
    ${buttons}
    <button onclick="setPageFood(${curPageFood + 1})">Next</button>
  `;
}

function setPageFood(index) {
  let foodList = JSON.parse(localStorage.getItem("foodList"))
  let countPage = Math.ceil(foodList.length / maxItemFood);
  if (index < 1) {
    index = 1;
  }
  if (index > countPage) {
    index = countPage;
  }
  curPageFood = index;
  renderFoodFromList(foodList);
  renderFoodPagin(foodList);
}




function sortByNutrient() {
  let selectedNutrient = document.getElementById("sortNutrient").value;
  let foodList = JSON.parse(localStorage.getItem("foodList"));

  if (!selectedNutrient) {
    renderFoodFromList(foodList);
    return;
  }

  foodList.sort((a, b) => {
    let start = a.macronutrients[selectedNutrient] || 0;
    let end = b.macronutrients[selectedNutrient] || 0;
    return end - start;
  });

  renderFoodFromList(foodList);
  renderFoodPagin(foodList)
}
function searchCategory() {
  let keyword = document.getElementById("category").value;
  let foodList = JSON.parse(localStorage.getItem("foodList"));
  let filteredList = foodList.filter(food => food.category.toLowerCase().includes(keyword.toLowerCase())
  );
  renderFoodFromList(filteredList);
  renderFoodPagin(localStorage)
}

renderFoodFromList(foodList);
renderFoodPagin(foodList);