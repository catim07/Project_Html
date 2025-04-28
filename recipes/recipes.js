function nameUserLogin(){
  let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
  let nameUserLogin=document.getElementById("nameUserLogin")
  let currentUser = userList.find(user => user.email === userLogin.email);
  nameUserLogin.innerText=`Hello, ${currentUser.name} !`
  nameUserLogin.style.fontSize="20px"
}
nameUserLogin()





let curPageFood = 1;
const maxItemFood = 5;

function renderFoodFromList(list) {
let dataFoods = document.getElementById("dataRecipes");
let startIndex = (curPageFood - 1) * maxItemFood;
let endIndex = curPageFood * maxItemFood;
let temp = list.slice(startIndex, endIndex);
let data = ``;

for (let i = 0; i < temp.length; i++) {
  
  data += `
    <div onclick="nextPage(${i+(curPageFood - 1) * maxItemFood})"
            style=" width: calc(50% - 15px); height: auto; padding: 30px 0; border: 1px solid; margin-top: 30px; border-radius: 10px;">
            <div style="width: 100%; display: flex; padding-left: 20px;">
              <div
                style="height: 50px; width: 160px; box-shadow: 0px 2px 10px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: orange; margin-right: 40px; font-size: 15px;">
                <i class="fa-solid fa-people-group" style="margin-right: 5px;"></i>
                <div>Community Recipes</div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 10px; flex-grow: 1; position: relative;">
                <h5 style="margin: 0;">${temp[i].name}</h5>
                <div style="color: gray; padding-left: 30px;">${temp[i].source}</div>
                <div style="display: flex; align-items: center; gap: 5px;">
                  <i style="color: chocolate;" class="fa-solid fa-tag"></i>
                  <span>${temp[i].category}</span>
                </div>
                <div
                  style="position: absolute; right: 30px;  top: 30px; display: flex; align-items: center; gap: 5px;">
                  <button  onclick="likeFood(${i+(curPageFood - 1) * maxItemFood})" style="border: 1px solid #ddd; background: white; border-radius: 5px; padding: 5px 10px; display: flex; align-items: center;">
                    <i class="fa-regular fa-heart" style="color: gray;"></i>
                    <span style="margin-left: 5px; color: gray;">${temp[i].like}</span>
                  </button>
                </div>
                <hr style="margin: 10px 0;">
                <div style="display: flex; justify-content: space-around; text-align: center; font-size: 15px">
                  <div>
                    <small>by</small><br><strong>100g</strong>
                  </div>
                  <div>
                    <small>Energy</small><br><strong>${temp[i].macronutrients.energy} kcal</strong>
                  </div>
                  <div>
                    <small>Fat</small><br><strong>${temp[i].macronutrients.fat} g</strong>
                  </div>
                  <div>
                    <small>Carbohydrate</small><br><strong>${temp[i].macronutrients.carbohydrate} g</strong>
                  </div>
                  <div>
                    <small>Protein</small><br><strong>${temp[i].macronutrients.protein} g</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
}

data += `
<div id="homePagin" style="width: 90%; margin-top: 50px; display: flex; justify-content: flex-end; margin-right: 100px; margin-bottom: 30px;">
</div>
`;

dataFoods.innerHTML = data;
}
renderFoodFromList(JSON.parse(localStorage.getItem("foodList")));

function search() {
let keyword = document.getElementById("search").value.toLowerCase();
let foodList = JSON.parse(localStorage.getItem("foodList"));
let filteredList = foodList.filter(food =>
  food.name.toLowerCase().includes(keyword)
);
renderFoodFromList(filteredList);
renderFoodPagin(filteredList);
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
let foodList = JSON.parse(localStorage.getItem("foodList"));
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
foodList.sort((a, b) => {
  let start = a.macronutrients[selectedNutrient] || 0;
  let end = b.macronutrients[selectedNutrient] || 0;
  return end - start;
});
renderFoodFromList(foodList);
renderFoodPagin(foodList);
}

function searchCategory() {
let keyword = document.getElementById("category").value;
let foodList = JSON.parse(localStorage.getItem("foodList"));
let filteredList = foodList.filter(food => food.category.toLowerCase().includes(keyword.toLowerCase()));
renderFoodFromList(filteredList);
renderFoodPagin(filteredList);
}

renderFoodFromList(JSON.parse(localStorage.getItem("foodList")));
renderFoodPagin(JSON.parse(localStorage.getItem("foodList")));




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
