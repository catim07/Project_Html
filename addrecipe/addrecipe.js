foodList = JSON.parse(localStorage.getItem("foodList"));

function showDropdown() {
    document.getElementById("new-category-wrapper").style.display = "none";
    document.getElementById("dropdown-wrapper").style.display = "block";
}


let fatChart, carbChart, proteinChart, fiberChart;

function createDoughnutChart(chartId, value, color) {
    const chart = new Chart(document.getElementById(chartId), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [1],
                backgroundColor: value === 0 ? '#f0f0f0' : color,
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });

    return chart;
}

fatChart = createDoughnutChart('fatChart', 0, '#E57373');
carbChart = createDoughnutChart('carbChart', 0, '#FFB74D');
proteinChart = createDoughnutChart('proteinChart', 0, '#4DB6AC');
fiberChart = createDoughnutChart('fiberChart', 0, '#90A4AE');

const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: ['Fat', 'Carbohydrate', 'Protein'],
    datasets: [{
        data: [38.3, 48.9, 12.8],
        backgroundColor: [
            '#e74c3c',
            '#f5b041',
            '#1abc9c'
        ],
        borderWidth: 1
    }]
};

const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});



let totalNutrition = {
    fat: 0,
    carbohydrate: 0,
    protein: 0
};

let selectedFoods = [];

function findFoodById(id) {
    return foodList.find(food => food.id === id);
}



function handleSelectFood(id) {
    if (!selectedFoodIds.includes(id)) {
        selectedFoodIds.push(id);
    }
}
let selectedFoodIds = [];

function addToTotal(id) {
    if (selectedFoods.includes(id)) {
        return;
    }
    const food = findFoodById(id);
    if (!food) {
        return;
    }

    selectedFoods.push(id);
    handleSelectFood(id);
    totalNutrition.fat += food.macronutrients.fat;
    totalNutrition.carbohydrate += food.macronutrients.carbohydrate;
    totalNutrition.protein += food.macronutrients.protein;
    updateSmallCharts();
    updateNutritionDetails();
    updateCharts();
    renderSelectedFoods();
}

function removeFromTotal(id) {
    selectedFoods = selectedFoods.filter(item => item !== id);
    selectedFoodIds = selectedFoodIds.filter(item => item !== id);
    const food = findFoodById(id);
    if (!food) {
        return;
    }

    totalNutrition.fat -= food.macronutrients.fat;
    totalNutrition.carbohydrate -= food.macronutrients.carbohydrate;
    totalNutrition.protein -= food.macronutrients.protein;
    updateSmallCharts();
    updateNutritionDetails();
    updateCharts();
    renderSelectedFoods();
}

function renderSelectedFoods() {
    const container = document.getElementById("renderFoodChoose");
    let html = "";

    for (let i = 0; i < selectedFoods.length; i++) {
        const id = selectedFoods[i];
        const food = findFoodById(id);
        if (!food) continue;

        html += `
            <div style="display: flex; width: 100%;">
                <div style="display: flex; flex-direction: column; width: 90%; padding: 5px; font-size: 10px; justify-content: space-between;">
                    <div style="border: 1px solid rgb(230, 227, 227); padding: 10px;">
                        1 serving of ${food.name} (${food.quantity} g)
                    </div>
                    <div style="border: 1px solid rgb(230, 227, 227); border-top: none; width: 100%; display: flex; height: 40px;">
                        <div style="width: 10%; background-color: #FAFAFB; display: flex; align-items: center; justify-content: center; color: #1AB394;">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <input type="text" style="height: 100%; width: 100%; border: none;" placeholder="Add new food equivalent">
                    </div>
                </div>
                <div style="display: flex; width: 10%; align-items: center; justify-content: center; background-color: #FAFAFB;" onclick="removeFromTotal(${id})">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}


function updateSmallCharts() {
    let totalFat = 0, totalCarb = 0, totalProtein = 0, totalFiber = 0;

    for (let i = 0; i < selectedFoods.length; i++) {
        let food = findFoodById(selectedFoods[i]);
        if (food && food.macronutrients) {
            totalFat += food.macronutrients.fat || 0;
            totalCarb += food.macronutrients.carbohydrate || 0;
            totalProtein += food.macronutrients.protein || 0;
            totalFiber += food.micronutrients.fiber || 0;
        }
    }
    let updateChart = (chart, value, color) => {
        chart.data.datasets[0].data = value > 0 ? [value] : [0.0001];
        chart.data.datasets[0].backgroundColor = value > 0 ? [color] : ['#f0f0f0'];
        chart.update();
    };

    updateChart(fatChart, totalFat, '#E57373');
    updateChart(carbChart, totalCarb, '#FFB74D');
    updateChart(proteinChart, totalProtein, '#4DB6AC');
    updateChart(fiberChart, totalFiber, '#90A4AE');

    document.getElementById("fatValue").textContent = `${Math.round(totalFat)}g`;
    document.getElementById("carbValue").textContent = `${Math.round(totalCarb)}g`;
    document.getElementById("proteinValue").textContent = `${Math.round(totalProtein)}g`;
    document.getElementById("fiberValue").textContent = `${Math.round(totalFiber)}g`;
}

function updateCharts() {
    myChart.data.datasets[0].data = [
        totalNutrition.fat,
        totalNutrition.carbohydrate,
        totalNutrition.protein
    ];
    myChart.update();
}


function getValueFromInput(e) {
    e.preventDefault();
    if (selectedFoodIds.length === 0) {
        alert("chọn ít nhất một nguyên liệu");
        return;
    }
    const recipes = JSON.parse(localStorage.getItem("recipe")) || [];
    const form = e.target;
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    const selectedIngredients = [];
    for (let i = 0; i < selectedFoodIds.length; i++) {
        const foundFood = foodList.find(food => food.id === selectedFoodIds[i]);
        if (foundFood) {
            selectedIngredients.push(foundFood);
        }
    }

    const newRecipe = {
        like: 0,
        likedUsers: [],
        id: recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 1,
        coverSrc: form.coverSrc.value.trim(),
        name: form.name.value.trim(),
        description: form.description.value.trim(),
        author: form.author.value.trim(),
        totalTime: form.totalTime.value.trim(),
        preparationTime: form.preparationTime.value.trim(),
        finalWeight: form.finalWeight.value.trim(),
        portions: form.portions.value.trim(),
        ingredients: selectedIngredients,
        cookingMethods: form.cookingMethods.value.trim(),
        category: form['category-input'].value.trim()
    };
    let timePattern = /^([0-9]{2}):([0-9]{2})$/;
    if (!newRecipe.coverSrc) {
        alert("nhập ảnh bìa"); return;
    }
    if (!newRecipe.name) {
        alert("nhập tên công thức"); return;
    }
    if (!newRecipe.description) {
        alert("nhập mô tả"); return;
    }
    if (!newRecipe.author) {
        alert("nhập tên tác giả"); return;
    }
    if (!newRecipe.totalTime) {
        alert("nhập tổng thời gian"); return;
    }
    if (!timePattern.test(newRecipe.totalTime)) {
        alert("nhập thời gian theo định dạng 00:00");
        return;
    }
    if (!newRecipe.preparationTime) {
        alert("nhập thời gian chuẩn bị"); return;
    }
    if (!timePattern.test(newRecipe.preparationTime)) {
        alert("nhập thời gian theo định dạng 00:00");
        return;
    }
    if (!newRecipe.finalWeight) {
        alert("nhập khối lượng cuối"); return;
    }
    if (!newRecipe.portions) {
        alert("nhập số khẩu phần"); return;
    }
    if (newRecipe.ingredients.length === 0) {
        alert("chọn ít nhất một nguyên liệu"); return;
    }
    if (!newRecipe.cookingMethods) {
        alert("nhập phương pháp nấu ăn"); return;
    }
    if (!newRecipe.category) {
        alert("nhập loại thức ăn"); return;
    }
    recipes.push(newRecipe);
    localStorage.setItem("recipe", JSON.stringify(recipes));
    selectedFoodIds = [];
    form.reset();
    window.location.href = "../recipes/recipes.html";
    alert("Lưu công thức thành công");
}








function handleUploadClick() {
    const uploadBtn = document.getElementById('uploadBtn');
    const input = document.getElementById('coverSrc');
    uploadBtn.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

let currentPage = 1;
const itemsPerPage = 3;



function renderIngredients(foodList) {
    let data = "";
    let renderIngredient = document.getElementById("renderIngredient");
    for (let i = 0; i < foodList.length; i++) {
        data += `
        <div class="ingredient-row" style="width: 100%; display: flex; border: 1px solid #EEEEEE; border-top: none;">
            <div style="width: 60%; background-color: white; padding: 10px; display: flex; flex-direction: column;">
                <div>${foodList[i].name}</div>
                <div style="font-size: 12px;">Community Recipes</div>
                <div style="width: 100%; display: flex; border: 1px solid #DDDDDD;">
                    <div style="width: 20%; border-right: 1px solid #DDDDDD; padding: 5px;">1</div>
                    <div style="width: 60%;border-right: 1px solid #DDDDDD;padding: 5px;">portion (${foodList[i].quantity}g)</div>
                    <div style="width: 20%;padding: 5px;">${foodList[i].quantity}g</div>
                </div>
            </div>
            <div style="width: 40%; display: flex;">
                <div style="display: flex; align-items: center; justify-content: center; width: calc(100% / 5); padding: 10px; font-size: 13px;">${foodList[i].macronutrients.energy} kcal</div>
                <div style="display: flex; align-items: center; justify-content: center; width: calc(100% / 5); padding: 10px; font-size: 13px;;">${foodList[i].macronutrients.fat}g</div>
                <div style="display: flex; align-items: center; justify-content: center; width: calc(100% / 5); padding: 10px; font-size: 13px;;">${foodList[i].macronutrients.carbohydrate}g</div>
                <div style="display: flex; align-items: center; justify-content: center; width: calc(100% / 5); padding: 10px; font-size: 13px;;">${foodList[i].macronutrients.protein}g</div>
                <div onclick="addToTotal(${foodList[i].id})" class="add-icon" style="display: flex; align-items: center; justify-content: center; width: calc(100% / 5); padding: 10px; font-size: 13px;background-color: #1AB394; color: white;">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>`;
    }
    renderIngredient.innerHTML = data;
}
// renderIngredients(foodList)


function renderPagin(foodList) {
    const totalPages = Math.ceil(foodList.length / itemsPerPage);
    let buttons = "";

    // Tạo nút phân trang cho tất cả các trang
    for (let i = 1; i <= totalPages; i++) {
        buttons += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="setIngredientPage(${i})">${i}</a>
            </li>
        `;
    }

    let renderPagin = document.getElementById("renderPagin");
    renderPagin.innerHTML = `
        <nav aria-label="Ingredient pagination example">
            <ul class="pagination d-flex justify-content-end">
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <a class="page-link" href="#" aria-label="Previous" onclick="setIngredientPage(${currentPage - 1})">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                ${buttons}
                <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                    <a class="page-link" href="#" aria-label="Next" onclick="setIngredientPage(${currentPage + 1})">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    `;
}



function searchFood() {
    let keyword = document.getElementById("search").value.toLowerCase();
    let allFoods = JSON.parse(localStorage.getItem("foodList"));
    let filteredFoods = [];
    for (let i = 0; i < allFoods.length; i++) {
        if (allFoods[i].name.toLowerCase().includes(keyword)) {
            filteredFoods.push(allFoods[i]);
        }
    }
    renderIngredients(filteredFoods);
}

function searchCategory() {
    let keyword = document.getElementById("category").value.toLowerCase();
    let allFoods = JSON.parse(localStorage.getItem("foodList"));

    let temp = [];

    for (let i = 0; i < allFoods.length; i++) {
        let category = allFoods[i].category || "";
        if (category.toLowerCase().includes(keyword)) {
            temp.push(allFoods[i]);
        }
    }

    renderIngredients(temp);
}

function sortByNutrient() {
    let nutrient = document.getElementById("sortNutrient").value;
    let foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    foodList.sort(function(a, b) {
        return (b.macronutrients[nutrient] || 0) - (a.macronutrients[nutrient] || 0);
    });
    renderPaginatedIngredients(foodList);
}

  

function setIngredientPage(index) {
    const foodList = JSON.parse(localStorage.getItem("foodList"));
    const totalPages = Math.ceil(foodList.length / itemsPerPage);

    if (index < 1) index = 1;
    if (index > totalPages) index = totalPages;

    currentPage = index;
    renderPaginatedIngredients(foodList);
}
function renderPaginatedIngredients(foodList) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const paginatedList = foodList.slice(startIndex, endIndex);
  
    renderIngredients(paginatedList);
    renderPagin(foodList)
  }
renderPaginatedIngredients(foodList);

function showDropdown() {
    document.getElementById("new-category-button").style.display = "none";
    document.getElementById("category-input").style.display = "block";
    document.getElementById("category-input").focus();
}


function updateNutritionDetails() {
    let totalSodium = 0,
        totalVitaminA = 0,
        totalVitaminB6 = 0,
        totalVitaminB12 = 0,
        totalVitaminC = 0,
        totalVitaminD = 0,
        totalVitaminE = 0,
        totalVitaminK = 0,
        totalSugars = 0,
        totalCalcium = 0,
        totalIron = 0,
        totalMagnesium = 0,
        totalPhosphorus = 0,
        totalPotassium = 0,
        totalZinc = 0,
        totalCopper = 0,
        totalFluoride = 0,
        totalManganese = 0,
        totalSelenium = 0,
        totalThiamin = 0,
        totalRiboflavin = 0,
        totalNiacin = 0,
        totalPantothenicAcid = 0,
        totalFolate = 0;

    selectedFoods.forEach(id => {
        const f = findFoodById(id);
        if (!f || !f.micronutrients) return;
        
        totalSodium    += f.micronutrients.sodium    || 0;
        totalVitaminA  += f.micronutrients.vitaminA  || 0;
        totalVitaminB6 += f.micronutrients.vitaminB6 || 0;
        totalVitaminB12+= f.micronutrients.vitaminB12|| 0;
        totalVitaminC  += f.micronutrients.vitaminC  || 0;
        totalVitaminD  += f.micronutrients.vitaminD  || 0;
        totalVitaminE  += f.micronutrients.vitaminE  || 0;
        totalVitaminK  += f.micronutrients.vitaminK  || 0;
        totalSugars     += f.micronutrients.sugars     || 0;
        totalCalcium    += f.micronutrients.calcium    || 0;
        totalIron       += f.micronutrients.iron       || 0;
        totalMagnesium  += f.micronutrients.magnesium  || 0;
        totalPhosphorus += f.micronutrients.phosphorus || 0;
        totalPotassium  += f.micronutrients.potassium  || 0;
        totalZinc       += f.micronutrients.zinc       || 0;
        totalCopper     += f.micronutrients.copper     || 0;
        totalFluoride   += f.micronutrients.fluoride   || 0;
        totalManganese  += f.micronutrients.manganese  || 0;
        totalSelenium   += f.micronutrients.selenium   || 0;
        totalThiamin    += f.micronutrients.thiamin    || 0;
        totalRiboflavin += f.micronutrients.riboflavin || 0;
        totalNiacin     += f.micronutrients.niacin     || 0;
        totalPantothenicAcid += f.micronutrients.pantothenicAcid || 0;
        totalFolate     += f.micronutrients.folate     || 0;
    });

    document.getElementById("sodium").textContent    = `${Math.round(totalSodium)} mg`;
    document.getElementById("vitaminA").textContent  = `${Math.round(totalVitaminA)} µg`;
    document.getElementById("vitaminB6").textContent = `${Math.round(totalVitaminB6)} mg`;
    document.getElementById("vitaminB12").textContent = `${Math.round(totalVitaminB12)} mg`;
    document.getElementById("vitaminC").textContent  = `${Math.round(totalVitaminC)} mg`;
    document.getElementById("vitaminD").textContent  = `${Math.round(totalVitaminD)} mg`;
    document.getElementById("vitaminE").textContent  = `${Math.round(totalVitaminE)} mg`;
    document.getElementById("vitaminK").textContent  = `${Math.round(totalVitaminK)} mg`;
    document.getElementById("sugars").textContent     = `${Math.round(totalSugars)} g`;
    document.getElementById("calcium").textContent    = `${Math.round(totalCalcium)} mg`;
    document.getElementById("iron").textContent       = `${Math.round(totalIron)} mg`;
    document.getElementById("magnesium").textContent  = `${Math.round(totalMagnesium)} mg`;
    document.getElementById("phosphorus").textContent = `${Math.round(totalPhosphorus)} mg`;
    document.getElementById("potassium").textContent  = `${Math.round(totalPotassium)} mg`;
    document.getElementById("zinc").textContent       = `${Math.round(totalZinc)} mg`;
    document.getElementById("copper").textContent     = `${Math.round(totalCopper)} mg`;
    document.getElementById("fluoride").textContent   = `${Math.round(totalFluoride)} mg`;
    document.getElementById("manganese").textContent  = `${Math.round(totalManganese)} mg`;
    document.getElementById("selenium").textContent   = `${Math.round(totalSelenium)} mg`;
    document.getElementById("thiamin").textContent    = `${Math.round(totalThiamin)} mg`;
    document.getElementById("riboflavin").textContent = `${Math.round(totalRiboflavin)} mg`;
    document.getElementById("niacin").textContent     = `${Math.round(totalNiacin)} mg`;
    document.getElementById("pantothenicAcid").textContent = `${Math.round(totalPantothenicAcid)} mg`;
    document.getElementById("folate").textContent    = `${Math.round(totalFolate)} µg`;
}
  
