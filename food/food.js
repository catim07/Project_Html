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
      <div data-bs-toggle="modal" data-bs-target="#addFoodModal" onclick="changeFood(${temp[i].id})"  
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
  <div data-bs-toggle="modal" data-bs-target="#addFoodModal" onclick="clearFoodModal()" style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px; background: white">
      <div style="font-size: 25px;">
          <i class="fa-regular fa-square-plus"></i>
          Create food
      </div>
  </div>
  `;

  dataFoods.innerHTML = data;
  renderFoodPagin(list); // Ensure pagination is rendered after the food list
}
renderFoodFromList(JSON.parse(localStorage.getItem("foodList")));


function renderFoodPagin(list) {
  let pagin = document.getElementById("foodPagin");
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
  foodList.sort((a, b) => {
    let start = a.macronutrients[selectedNutrient] || 0;
    let end = b.macronutrients[selectedNutrient] || 0;
    return end - start;
  });
  renderFoodFromList(foodList);
  renderFoodPagin(foodList)
}
function searchCategory() {
  let keyword = document.getElementById("category").value.toLowerCase();
  let foodList = JSON.parse(localStorage.getItem("foodList"));
  let filteredList = foodList.filter(food => food.category.toLowerCase().includes(keyword));
  renderFoodFromList(filteredList);
  renderFoodPagin(filteredList);
}

renderFoodFromList(foodList);
renderFoodPagin(foodList);

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

// Update the "changeFood" function to open the modal and populate data
function changeFood(id) {
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    const food = foodList.find(item => item.id === id);

    if (!food) {
        alert("Food not found!");
        return;
    }

    // Populate modal fields with food data
    document.querySelector('input[name="name"]').value = food.name || "";
    document.querySelector('input[name="source"]').value = food.source || "";
    document.querySelector('input[name="category"]').value = food.category || "";
    document.querySelector('input[name="quantity"]').value = food.quantity || 0;

    document.querySelector('input[name="energy"]').value = food.macronutrients.energy || 0;
    document.querySelector('input[name="carbohydrate"]').value = food.macronutrients.carbohydrate || 0;
    document.querySelector('input[name="fat"]').value = food.macronutrients.fat || 0;
    document.querySelector('input[name="protein"]').value = food.macronutrients.protein || 0;

    const micronutrients = food.micronutrients || {};
    document.querySelector('input[name="cholesterol"]').value = micronutrients.cholesterol || 0;
    document.querySelector('input[name="fiber"]').value = micronutrients.fiber || 0;
    document.querySelector('input[name="sodium"]').value = micronutrients.sodium || 0;
    document.querySelector('input[name="water"]').value = micronutrients.water || 0;
    document.querySelector('input[name="vitaminA"]').value = micronutrients.vitaminA || 0;
    document.querySelector('input[name="vitaminB6"]').value = micronutrients.vitaminB6 || 0;
    document.querySelector('input[name="vitaminB12"]').value = micronutrients.vitaminB12 || 0;
    document.querySelector('input[name="vitaminC"]').value = micronutrients.vitaminC || 0;
    document.querySelector('input[name="vitaminD"]').value = micronutrients.vitaminD || 0;
    document.querySelector('input[name="vitaminE"]').value = micronutrients.vitaminE || 0;
    document.querySelector('input[name="vitaminK"]').value = micronutrients.vitaminK || 0;
    document.querySelector('input[name="starch"]').value = micronutrients.starch || 0;
    document.querySelector('input[name="lactose"]').value = micronutrients.lactose || 0;
    document.querySelector('input[name="alcohol"]').value = micronutrients.alcohol || 0;
    document.querySelector('input[name="caffeine"]').value = micronutrients.caffeine || 0;
    document.querySelector('input[name="sugars"]').value = micronutrients.sugars || 0;
    document.querySelector('input[name="calcium"]').value = micronutrients.calcium || 0;
    document.querySelector('input[name="iron"]').value = micronutrients.iron || 0;
    document.querySelector('input[name="magnesium"]').value = micronutrients.magnesium || 0;
    document.querySelector('input[name="phosphorus"]').value = micronutrients.phosphorus || 0;
    document.querySelector('input[name="potassium"]').value = micronutrients.potassium || 0;
    document.querySelector('input[name="zinc"]').value = micronutrients.zinc || 0;
    document.querySelector('input[name="copper"]').value = micronutrients.copper || 0;
    document.querySelector('input[name="fluoride"]').value = micronutrients.fluoride || 0;
    document.querySelector('input[name="manganese"]').value = micronutrients.manganese || 0;
    document.querySelector('input[name="selenium"]').value = micronutrients.selenium || 0;
    document.querySelector('input[name="thiamin"]').value = micronutrients.thiamin || 0;
    document.querySelector('input[name="riboflavin"]').value = micronutrients.riboflavin || 0;
    document.querySelector('input[name="niacin"]').value = micronutrients.niacin || 0;
    document.querySelector('input[name="pantothenicAcid"]').value = micronutrients.pantothenicAcid || 0;
    document.querySelector('input[name="folateTotal"]').value = micronutrients.folateTotal || 0;
    document.querySelector('input[name="folicAcid"]').value = micronutrients.folicAcid || 0;
    document.querySelector('input[name="fattyAcidsTrans"]').value = micronutrients.fattyAcidsTrans || 0;
    document.querySelector('input[name="fattyAcidsSaturated"]').value = micronutrients.fattyAcidsSaturated || 0;
    document.querySelector('input[name="fattyAcidsMonounsaturated"]').value = micronutrients.fattyAcidsMonounsaturated || 0;
    document.querySelector('input[name="fattyAcidsPolyunsaturated"]').value = micronutrients.fattyAcidsPolyunsaturated || 0;
    document.querySelector('input[name="chloride"]').value = micronutrients.chloride || 0;

    // Open the modal
    const modal = new bootstrap.Modal(document.getElementById('addFoodModal'));
    modal.show();
}

// Add a function to clear modal fields
function clearFoodModal() {
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="source"]').value = "";
    document.querySelector('input[name="category"]').value = "";
    document.querySelector('input[name="quantity"]').value = 100;

    document.querySelector('input[name="energy"]').value = "";
    document.querySelector('input[name="carbohydrate"]').value = "";
    document.querySelector('input[name="fat"]').value = "";
    document.querySelector('input[name="protein"]').value = "";

    const micronutrientInputs = document.querySelectorAll('.micronutrient-grid input');
    micronutrientInputs.forEach(input => input.value = "");
}

// Add a function to save new food to localStorage
function saveFood() {
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];

    const newFood = {
        id: foodList.length > 0 ? foodList[foodList.length - 1].id + 1 : 1,
        name: document.querySelector('input[name="name"]').value,
        source: document.querySelector('input[name="source"]').value,
        category: document.querySelector('input[name="category"]').value,
        quantity: parseFloat(document.querySelector('input[name="quantity"]').value) || 0,
        macronutrients: {
            energy: parseFloat(document.querySelector('input[name="energy"]').value) || 0,
            carbohydrate: parseFloat(document.querySelector('input[name="carbohydrate"]').value) || 0,
            fat: parseFloat(document.querySelector('input[name="fat"]').value) || 0,
            protein: parseFloat(document.querySelector('input[name="protein"]').value) || 0
        },
        micronutrients: Array.from(document.querySelectorAll('.micronutrient-grid input')).reduce((acc, input) => {
            acc[input.name] = parseFloat(input.value) || 0;
            return acc;
        }, {})
    };

    foodList.push(newFood);
    localStorage.setItem("foodList", JSON.stringify(foodList));

    // Close the modal and refresh the food list
    const modal = bootstrap.Modal.getInstance(document.getElementById('addFoodModal'));
    modal.hide();
    renderFoodFromList(foodList);
}
