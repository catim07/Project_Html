function nameUserLogin() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
  let nameUserLogin = document.getElementById("nameUserLogin")
  let currentUser = userList.find(user => user.email === userLogin.email);
  nameUserLogin.innerText = `Hello, ${currentUser.name} !`
  nameUserLogin.style.fontSize = "20px"
}
nameUserLogin()

function loggout() {
  if (!confirm("bạn có chắc đăng xuất không")) {
    return
  }
  localStorage.removeItem("userLogin")
  sessionStorage.removeItem("userLogin")
  window.location.href = "../authen/signin.html"
}

function searchFood() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let foodList = JSON.parse(localStorage.getItem("foodList"));
  let filteredList = foodList.filter(food =>
    food.name.toLowerCase().includes(keyword)
  );
  renderFoodFromList(filteredList);
  renderFoodPagin(foodList)
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    searchFood();
});

const categoryInput = document.getElementById('category');
categoryInput.addEventListener('input', () => {
    searchCategory();
});

let curPageFood = 1;
const maxItemFood = 4;
function renderFoodFromList(list) {
  let dataFoods = document.getElementById("dataFoods");
  let startIndex = (curPageFood - 1) * maxItemFood;
  let endIndex = curPageFood * maxItemFood;
  let temp = list.slice(startIndex, endIndex);
  let data = ``;

  for (let i = 0; i < temp.length; i++) {
    data += `
      <div data-bs-toggle="modal" data-bs-target="#addFoodModal" onclick="changeFood(${temp[i].id})"  
           style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px; cursor:pointer;" 
           onmouseover="this.style.cssText += 'box-shadow: 0 8px 20px rgba(0,0,0,0.5); transform: translateY(-5px);'" 
onmouseout="this.style.cssText += 'box-shadow: none; transform: translateY(0);'">
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
  <div data-bs-toggle="modal" data-bs-target="#addFoodModal" onclick="clearFoodModal()" style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px; background: white;cursor: pointer" 
  onmouseover="this.style.cssText += 'box-shadow: 0 8px 20px rgba(0,0,0,0.5); transform: translateY(-5px);'" 
onmouseout="this.style.cssText += 'box-shadow: none; transform: translateY(0);'">
      <div style="font-size: 25px; ">
          <i class="fa-regular fa-square-plus"></i>
          Create food
      </div>
  </div>
  `;

  dataFoods.innerHTML = data;
  renderFoodPagin(list);
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


// function sortByNutrient() {
//   let selectedNutrient = document.getElementById("sortNutrient").value;
//   let foodList = JSON.parse(localStorage.getItem("foodList"));
//   foodList.sort((a, b) => {
//     let start = a.macronutrients[selectedNutrient] || 0;
//     let end = b.macronutrients[selectedNutrient] || 0;
//     return end - start;
//   });
//   renderFoodFromList(foodList);
//   renderFoodPagin(foodList)
// }


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
  let foodList = JSON.parse(localStorage.getItem("foodList"));
  if (sortOrder === 1) {
    foodList.sort((a, b) => {
      let start = a.macronutrients[selectedNutrient] || 0;
      let end = b.macronutrients[selectedNutrient] || 0;
      return start - end;
    });
    renderFoodFromList(foodList);
    renderFoodPagin(foodList)
  } else {
    foodList.sort((a, b) => {
      let start = a.macronutrients[selectedNutrient] || 0;
      let end = b.macronutrients[selectedNutrient] || 0;
      return end - start;
    });
    renderFoodFromList(foodList);
    renderFoodPagin(foodList)
  }
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
function changeFood(id) {
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    const food = foodList.find(item => item.id === id);

   
    document.querySelector('input[name="name"]').value = food.name || "";
    document.querySelector('input[name="source"]').value = food.source || "";

    document.querySelector('input[name="category"]').value = food.category || "";
    document.querySelector('input[name="quantity"]').value = parseFloat(food.quantity) || "";

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

    const saveButton = document.querySelector('#addFoodModal .btn-success');
    saveButton.onclick = () => {
        const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
        const foodIndex = foodList.findIndex(item => item.id === id);

        if (foodIndex !== -1) {
            foodList[foodIndex].name = document.querySelector('input[name="name"]').value;
            foodList[foodIndex].source = document.querySelector('input[name="source"]').value;
            foodList[foodIndex].category = document.querySelector('input[name="category"]').value;
            foodList[foodIndex].quantity = document.querySelector('input[name="quantity"]').value + 'g';
            foodList[foodIndex].macronutrients.energy = parseFloat(document.querySelector('input[name="energy"]').value) || 0;
            foodList[foodIndex].macronutrients.carbohydrate = parseFloat(document.querySelector('input[name="carbohydrate"]').value) || 0;
            foodList[foodIndex].macronutrients.fat = parseFloat(document.querySelector('input[name="fat"]').value) || 0;
            foodList[foodIndex].macronutrients.protein = parseFloat(document.querySelector('input[name="protein"]').value) || 0;

            const micronutrientInputs = document.querySelectorAll('.micronutrient-grid input');
            micronutrientInputs.forEach(input => {
                foodList[foodIndex].micronutrients[input.name] = parseFloat(input.value) || null;
            });

            localStorage.setItem("foodList", JSON.stringify(foodList));
            renderFoodFromList(foodList);
            const modal = bootstrap.Modal.getInstance(document.getElementById('addFoodModal'));
            modal.hide();
        }
    };
    const modal = new bootstrap.Modal(document.getElementById('addFoodModal'));
    modal.show();
}
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
function saveFood() {
    const nameInput = document.querySelector('input[name="name"]');
    const sourceInput = document.querySelector('input[name="source"]');
    const categoryInput = document.querySelector('input[name="category"]');
    const quantityInput = document.querySelector('input[name="quantity"]');

    if (!nameInput.value.trim()) {
        alert('mời bạn nhập tên thực phẩm');
        return;
    }

    if (!sourceInput.value.trim()) {
        alert('mời bạn nhập nguồn thực phẩm');
        return;
    }

    if (!categoryInput.value.trim()) {
        alert('mời bạn nhập danh mục thực phẩm');
        return;
    }
    if (!quantityInput.value.trim()) {
      alert('mời bạn nhập trọng lượng thực phẩm');
      return;
  }

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
        micronutrients: {
          cholesterol: parseFloat(document.querySelector('input[name="cholesterol"]').value) || 0,
          fiber: parseFloat(document.querySelector('input[name="fiber"]').value) || 0,
          sodium: parseFloat(document.querySelector('input[name="sodium"]').value) || 0,
          water: parseFloat(document.querySelector('input[name="water"]').value) || 0,
          vitaminA: parseFloat(document.querySelector('input[name="vitaminA"]').value) || 0,
          vitaminB6: parseFloat(document.querySelector('input[name="vitaminB6"]').value) || 0,
          vitaminB12: parseFloat(document.querySelector('input[name="vitaminB12"]').value) || 0,
          vitaminC: parseFloat(document.querySelector('input[name="vitaminC"]').value) || 0,
          vitaminD: parseFloat(document.querySelector('input[name="vitaminD"]').value) || 0,
          vitaminE: parseFloat(document.querySelector('input[name="vitaminE"]').value) || 0,
          vitaminK: parseFloat(document.querySelector('input[name="vitaminK"]').value) || 0,
          starch: parseFloat(document.querySelector('input[name="starch"]').value) || 0,
          lactose: parseFloat(document.querySelector('input[name="lactose"]').value) || 0,
          alcohol: parseFloat(document.querySelector('input[name="alcohol"]').value) || 0,
          caffeine: parseFloat(document.querySelector('input[name="caffeine"]').value) || 0,
          sugars: parseFloat(document.querySelector('input[name="sugars"]').value) || 0,
          calcium: parseFloat(document.querySelector('input[name="calcium"]').value) || 0,
          iron: parseFloat(document.querySelector('input[name="iron"]').value) || 0,
          magnesium: parseFloat(document.querySelector('input[name="magnesium"]').value) || 0,
          phosphorus: parseFloat(document.querySelector('input[name="phosphorus"]').value) || 0,
          potassium: parseFloat(document.querySelector('input[name="potassium"]').value) || 0,
          zinc: parseFloat(document.querySelector('input[name="zinc"]').value) || 0,
          copper: parseFloat(document.querySelector('input[name="copper"]').value) || 0,
          fluoride: parseFloat(document.querySelector('input[name="fluoride"]').value) || 0,
          manganese: parseFloat(document.querySelector('input[name="manganese"]').value) || 0,
          selenium: parseFloat(document.querySelector('input[name="selenium"]').value) || 0,
          thiamin: parseFloat(document.querySelector('input[name="thiamin"]').value) || 0,
          riboflavin: parseFloat(document.querySelector('input[name="riboflavin"]').value) || 0,
          niacin: parseFloat(document.querySelector('input[name="niacin"]').value) || 0,
          pantothenicAcid: parseFloat(document.querySelector('input[name="pantothenicAcid"]').value) || 0,
          folateTotal: parseFloat(document.querySelector('input[name="folateTotal"]').value) || 0,
          folicAcid: parseFloat(document.querySelector('input[name="folicAcid"]').value) || 0,
          fattyAcidsTrans: parseFloat(document.querySelector('input[name="fattyAcidsTrans"]').value) || 0,
          fattyAcidsSaturated: parseFloat(document.querySelector('input[name="fattyAcidsSaturated"]').value) || 0,
          fattyAcidsMonounsaturated: parseFloat(document.querySelector('input[name="fattyAcidsMonounsaturated"]').value) || 0,
          fattyAcidsPolyunsaturated: parseFloat(document.querySelector('input[name="fattyAcidsPolyunsaturated"]').value) || 0,
          chloride: parseFloat(document.querySelector('input[name="chloride"]').value) || 0
      }
      
    };

    foodList.push(newFood);
    localStorage.setItem("foodList", JSON.stringify(foodList));
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addFoodModal'));
    modal.hide();
    renderFoodFromList(foodList);
}
