

function nameUserLogin() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
  let nameUserLogin = document.getElementById("nameUserLogin");
  let currentUser = userList.find(user => user.email === userLogin.email);
  nameUserLogin.innerText = `Hello, ${currentUser.name} !`;
  nameUserLogin.style.fontSize = "20px";
}
nameUserLogin();

function nextPage(id) {
  localStorage.setItem("idRecipes", JSON.stringify(id));
  window.location.href = "/recipesdetail/recipesdetail.html";
}

let curPageFood = 1;
const maxItemFood = 4;
let currentFoodList = JSON.parse(localStorage.getItem("recipe")) || [];

function renderFoodFromList(list) {
  const dataFoods = document.getElementById("dataRecipes");
  const startIndex = (curPageFood - 1) * maxItemFood;
  const endIndex   = curPageFood * maxItemFood;
  const temp       = list.slice(startIndex, endIndex);
  let data          = "";

  for (let i = 0; i < temp.length; i++) {
    let ingredients = temp[i].ingredients || [];

    let totalEnergy = 0;
    for (let j = 0; j < ingredients.length; j++) {
      totalEnergy += (ingredients[j].macronutrients?.energy || 0);
    }

    let totalFat = 0;
    for (let j = 0; j < ingredients.length; j++) {
      totalFat += (ingredients[j].macronutrients?.fat || 0);
    }
    let totalCarbohydrate = 0;
    for (let j = 0; j < ingredients.length; j++) {
      totalCarbohydrate += (ingredients[j].macronutrients?.carbohydrate || 0);
    }
    let totalProtein = 0;
    for (let j = 0; j < ingredients.length; j++) {
      totalProtein += (ingredients[j].macronutrients?.protein || 0);
    }
    let totalQuantity = 0;
    for (let j = 0; j < ingredients.length; j++) {
      totalQuantity += (ingredients[j].macronutrients?.quantity || 0);
    }

    data += `
      


      <div onclick="nextPage(${temp[i].id})"
  style=" 
    width: calc(50% - 15px); 
    height: auto; 
    padding: 30px 0; 
    border: 1px solid; 
    margin-top: 30px; 
    border-radius: 10px;
    background: url('${temp[i].coverSrc}') center/cover no-repeat;
    position: relative;
    color: white;
    overflow: hidden;
  " onmouseover="this.style.cssText += 'box-shadow: 0 8px 20px rgba(0,0,0,0.5); transform: translateY(-5px);'" 
onmouseout="this.style.cssText += 'box-shadow: none; transform: translateY(0);'">

  <!-- Lớp phủ tối để chữ dễ đọc -->
  <div style="
    position: absolute; 
    top: 0; left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0,0,0,0.4); 
    border-radius: 10px;
    z-index: 1;"
    >
  </div>

  <!-- Nội dung chính -->
  <div  style="position: relative; z-index: 2; width: 100%; display: flex; padding-left: 20px;">
    <div 
      style="height: 50px; width: 160px; box-shadow: 0px 2px 10px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: orange; margin-right: 40px; font-size: 15px;">
      <i class="fa-solid fa-people-group" style="margin-right: 5px;"></i>
      <div>Community Recipes</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; flex-grow: 1; position: relative;">
      <h5 style="margin: 0;">${temp[i].name}</h5>
      <div style="color: #ddd; padding-left: 30px;">${temp[i].author}</div>
      <div style="display: flex; align-items: center; gap: 5px;">
        <i style="color: chocolate;" class="fa-solid fa-tag"></i>
        <span>${temp[i].category}</span>
      </div>
      <div
        style=" position: absolute; right: 30px;  top: 30px; display: flex; align-items: center; gap: 5px;">
        <div onclick="likeFood(${i+(curPageFood - 1) * maxItemFood})"
                style="background: transparent; border: 1px solid #ddd; border-radius: 5px; padding: 5px 10px; display: flex; align-items: center;">
          <i class="fa-regular fa-heart" style="color: white;"></i>
          <span style="margin-left: 5px; color: white;">${temp[i].like}</span>
        </div>
      </div>
      <hr style="margin: 10px 0; border-color: rgba(254, 254, 254, 0.3); ">
      <div style="display: flex; justify-content: space-around; text-align: center; font-size: 15px">
        <div>
          <small>by</small><br><strong>${temp[i].finalWeight}</strong>
        </div>
        <div>
          <small>Energy</small><br><strong>${totalEnergy} kcal</strong>
        </div>
        <div>
          <small>Fat</small><br><strong>${totalFat} g</strong>
        </div>
        <div>
          <small>Carbohydrate</small><br><strong>${totalCarbohydrate} g</strong>
        </div>
        <div>
          <small>Protein</small><br><strong>${totalProtein} g</strong>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  }

  data += `
    <div id="homePagin" style="width:90%; margin:50px 0 30px; display:flex; justify-content:flex-end;"></div>
  `;

  dataFoods.innerHTML = data;
}



function renderFoodPagin(list) {
  let pagin = document.getElementById("homePagin");
  let countPage = Math.ceil(list.length / maxItemFood);
  let buttons = "";

  for (let i = 1; i <= countPage; i++) {
    buttons += `
      <li class="page-item ${i === curPageFood ? 'active' : ''}">
        <a class="page-link" href="#" onclick="setPageFood(${i})">${i}</a>
      </li>
    `;
  }

  pagin.innerHTML = `
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item ${curPageFood === 1 ? 'disabled' : ''}">
          <a class="page-link" href="#" onclick="setPageFood(${curPageFood - 1})" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        ${buttons}
        <li class="page-item ${curPageFood === countPage ? 'disabled' : ''}">
          <a class="page-link" href="#" onclick="setPageFood(${curPageFood + 1})" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  `;
}

function setPageFood(index) {
  let countPage = Math.ceil(currentFoodList.length / maxItemFood);
  if (index < 1) index = 1;
  if (index > countPage) index = countPage;
  curPageFood = index;
  renderFoodFromList(currentFoodList);
  renderFoodPagin(currentFoodList);
}

function search() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let foodList = JSON.parse(localStorage.getItem("recipe")) || [];
  currentFoodList = foodList.filter(food =>
    food.name.toLowerCase().includes(keyword)
  );
  curPageFood = 1;
  renderFoodFromList(currentFoodList);
  renderFoodPagin(currentFoodList);
}

// function sortByNutrient() {
//   let selectedNutrient = document.getElementById("sortNutrient").value;
//   let recipeList = JSON.parse(localStorage.getItem("recipe"));
//   recipeList.sort((a, b) =>{
//     let aTotal = 0;
//     for (let i = 0; i < a.ingredients.length; i++) {
//         aTotal += a.ingredients[i].macronutrients?.[selectedNutrient] || 0;
//     }
//     let bTotal = 0;
//     for (let i = 0; i < b.ingredients.length; i++) {
//         bTotal += b.ingredients[i].macronutrients?.[selectedNutrient] || 0;
//     }
//     return bTotal - aTotal;
// });
//   renderFoodFromList(recipeList);
//   renderFoodPagin(recipeList);
// }

function searchCategory() {
  let keyword = document.getElementById("category").value.toLowerCase();
  let foodList = JSON.parse(localStorage.getItem("recipe")) || [];
  currentFoodList = foodList.filter(food =>
    food.category.toLowerCase().includes(keyword)
  );
  curPageFood = 1;
  renderFoodFromList(currentFoodList);
  renderFoodPagin(currentFoodList);
}

renderFoodFromList(currentFoodList);
renderFoodPagin(currentFoodList);

let isCollapsed = false;
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  if (!isCollapsed) {
    sidebar.style.display = 'none';
    content.style.width = '100%';
  } else {
    sidebar.style.display = 'flex';
    sidebar.style.width = '20%';
    content.style.width = '80%';
  }
  isCollapsed = !isCollapsed;
}

let sortOrder = 1;

function toggleSortOrder() {
  const icon = document.getElementById("sortIcon");

  if (sortOrder === 1) {
    sortOrder = 2;
    icon.className = "fa-solid fa-arrow-up-wide-short";
  } else {
    sortOrder = 1;
    icon.className = "fa-solid fa-arrow-up-short-wide";
  }

  sortByNutrient();
}

function sortByNutrient() {
  let selectedNutrient = document.getElementById("sortNutrient").value;
  let recipeList = JSON.parse(localStorage.getItem("recipe"));
  if (sortOrder === 1) {
  recipeList.sort((a, b) =>{
    let aTotal = 0;
    for (let i = 0; i < a.ingredients.length; i++) {
        aTotal += a.ingredients[i].macronutrients?.[selectedNutrient] || 0;
    }
    let bTotal = 0;
    for (let i = 0; i < b.ingredients.length; i++) {
        bTotal += b.ingredients[i].macronutrients?.[selectedNutrient] || 0;
    }
    return aTotal - bTotal;
});
  renderFoodFromList(recipeList);
  renderFoodPagin(recipeList);
  } else {;
  recipeList.sort((a, b) =>{
    let aTotal = 0;
    for (let i = 0; i < a.ingredients.length; i++) {
        aTotal += a.ingredients[i].macronutrients?.[selectedNutrient] || 0;
    }
    let bTotal = 0;
    for (let i = 0; i < b.ingredients.length; i++) {
        bTotal += b.ingredients[i].macronutrients?.[selectedNutrient] || 0;
    }
    return bTotal - aTotal;
});
  renderFoodFromList(recipeList);
  renderFoodPagin(recipeList);
  }
}
