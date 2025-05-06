


function nameUserLogin() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
    let nameUserLogin = document.getElementById("nameUserLogin")
    let currentUser = userList.find(user => user.email === userLogin.email);
    nameUserLogin.innerText = `Hello, ${currentUser.name} !`
    nameUserLogin.style.fontSize = "20px"
}
nameUserLogin()



function render_content() {
    let data = document.getElementById("main-content")
    let id = JSON.parse(localStorage.getItem("idRecipes"));
    let recipes = JSON.parse(localStorage.getItem("recipe"))
    let recipe = recipes.find(r => r.id === id);
    let tempIngredient = ``
    // Macronutrients
    let totalEnergy = 0;
    let totalCarbohydrate = 0;
    let totalFat = 0;
    let totalProtein = 0;

    // Micronutrients
    let totalAlcohol = 0;
    let totalCaffeine = 0;
    let totalCalcium = 0;
    let totalChloride = 0;
    let totalCholesterol = 0;
    let totalCopper = 0;
    let totalFattyAcidsMonounsaturated = 0;
    let totalFattyAcidsPolyunsaturated = 0;
    let totalFattyAcidsSaturated = 0;
    let totalFattyAcidsTrans = 0;
    let totalFiber = 0;
    let totalFluoride = 0;
    let totalFolateTotal = 0;
    let totalFolicAcid = 0;
    let totalIron = 0;
    let totalLactose = 0;
    let totalMagnesium = 0;
    let totalManganese = 0;
    let totalNiacin = 0;
    let totalPantothenicAcid = 0;
    let totalPhosphorus = 0;
    let totalPotassium = 0;
    let totalRiboflavin = 0;
    let totalSelenium = 0;
    let totalSodium = 0;
    let totalStarch = 0;
    let totalSugars = 0;
    let totalThiamin = 0;
    let totalVitaminA = 0;
    let totalVitaminB6 = 0;
    let totalVitaminB12 = 0;
    let totalVitaminC = 0;
    let totalVitaminD = 0;
    let totalVitaminE = 0;
    let totalVitaminK = 0;
    let totalWater = 0;
    let totalZinc = 0;


    for (let i = 0; i < recipe.ingredients.length; i++) {
        let ingredient = recipe.ingredients[i];
        if (ingredient && ingredient.name && ingredient.quantity !== undefined) {
            tempIngredient += `
        <div class="ingredient-item">${ingredient.name} (${ingredient.quantity})</div>
        `;
        }
        if (ingredient.macronutrients) {
            totalEnergy += ingredient.macronutrients.energy || 0;
            totalCarbohydrate += ingredient.macronutrients.carbohydrate || 0;
            totalFat += ingredient.macronutrients.fat || 0;
            totalProtein += ingredient.macronutrients.protein || 0;
        }
        if (ingredient.micronutrients) {
            totalAlcohol += ingredient.micronutrients.alcohol || 0;
            totalCaffeine += ingredient.micronutrients.caffeine || 0;
            totalCalcium += ingredient.micronutrients.calcium || 0;
            totalChloride += ingredient.micronutrients.chloride || 0;
            totalCholesterol += ingredient.micronutrients.cholesterol || 0;
            totalCopper += ingredient.micronutrients.copper || 0;
            totalFattyAcidsMonounsaturated += ingredient.micronutrients.fattyAcidsMonounsaturated || 0;
            totalFattyAcidsPolyunsaturated += ingredient.micronutrients.fattyAcidsPolyunsaturated || 0;
            totalFattyAcidsSaturated += ingredient.micronutrients.fattyAcidsSaturated || 0;
            totalFattyAcidsTrans += ingredient.micronutrients.fattyAcidsTrans || 0;
            totalFiber += ingredient.micronutrients.fiber || 0;
            totalFluoride += ingredient.micronutrients.fluoride || 0;
            totalFolateTotal += ingredient.micronutrients.folateTotal || 0;
            totalFolicAcid += ingredient.micronutrients.folicAcid || 0;
            totalIron += ingredient.micronutrients.iron || 0;
            totalLactose += ingredient.micronutrients.lactose || 0;
            totalMagnesium += ingredient.micronutrients.magnesium || 0;
            totalManganese += ingredient.micronutrients.manganese || 0;
            totalNiacin += ingredient.micronutrients.niacin || 0;
            totalPantothenicAcid += ingredient.micronutrients.pantothenicAcid || 0;
            totalPhosphorus += ingredient.micronutrients.phosphorus || 0;
            totalPotassium += ingredient.micronutrients.potassium || 0;
            totalRiboflavin += ingredient.micronutrients.riboflavin || 0;
            totalSelenium += ingredient.micronutrients.selenium || 0;
            totalSodium += ingredient.micronutrients.sodium || 0;
            totalStarch += ingredient.micronutrients.starch || 0;
            totalSugars += ingredient.micronutrients.sugars || 0;
            totalThiamin += ingredient.micronutrients.thiamin || 0;
            totalVitaminA += ingredient.micronutrients.vitaminA || 0;
            totalVitaminB6 += ingredient.micronutrients.vitaminB6 || 0;
            totalVitaminB12 += ingredient.micronutrients.vitaminB12 || 0;
            totalVitaminC += ingredient.micronutrients.vitaminC || 0;
            totalVitaminD += ingredient.micronutrients.vitaminD || 0;
            totalVitaminE += ingredient.micronutrients.vitaminE || 0;
            totalVitaminK += ingredient.micronutrients.vitaminK || 0;
            totalWater += ingredient.micronutrients.water || 0;
            totalZinc += ingredient.micronutrients.zinc || 0;
        }
    }
    data.innerHTML = `
    <div class="content-container">
                    <div class="left-card">
                        <div class="card text-bg-dark" style="border: none; width: 100%; height: 300px; position: relative; overflow: hidden;">
                            <img src="${recipe.coverSrc}" class="card-img" alt="No photo" style="object-fit: cover; width: 100%; height: 100%;">
                            
                            <div class="card-img-overlay d-flex flex-column justify-content-between" style="color: black; padding: 10px; border: 1px solid gray; ">
                                <div style="display: flex; gap: 10px;">
                                    <div class="community-item">
                                        <div style="color: orange; font-size: 13px;">
                                            <i class="fa-solid fa-people-group"></i> Community Recipes
                                        </div>
                                    </div>
                                    <div class="community-item" style="width: 70px;">
                                        <div><i class="fa-regular fa-heart"></i>0 </div>
                                    </div>
                                </div>
                                <div style="box-shadow: 0px 2px 7px; width: fit-content; font-size: 15px; border-radius: 5px; background: white; padding: 5px 10px;">
                                    <i class="fa-solid fa-tag" style="color: rgb(212, 139, 4);"></i> Vegetarian dishes
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="favorite-button">
                            <div><i class="fa-solid fa-heart" style="color: red;"></i> add to favorite</div>
                        </div>
                    </div>

                    <div class="right-card">
                        <div class="right-card-inner">
                            <div>
                                <h2>Basic information</h2>
                                check and-edit recipe's basic information
                            </div>
                            <br>
                            <div class="basic-info">
                                <div class="info-row">
                                    <div class="info-label">Name</div>
                                    <div class="info-value">${recipe.name}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Description</div>
                                    <div class="info-value">${recipe.description}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Author</div>
                                    <div class="info-value">${recipe.author}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Total time</div>
                                    <div class="info-value">${recipe.totalTime}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Preparation time</div>
                                    <div class="info-value">${recipe.preparationTime}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Final weight</div>
                                    <div class="info-value">${recipe.finalWeight}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Portions</div>
                                    <div class="info-value">${recipe.portions}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="creation-section">
                    <div class="creation-header">
                        <h2>Creation</h2>
                        <h4>Create the recipe and choose the ingredients</h4>
                    </div>
                    <div class="ingredients-cooking">
                        <div class="ingredients-section">
                            <div class="ingredients-box">
                                <div class="ingredients-list">
                                    <h4>Ingredients</h4>
                                    Search and add ingredients to recipe
                                    ${tempIngredient}
                                </div>
                            </div>

                            <div class="cooking-method">
                                <div class="cooking-steps">
                                    <h4>Cooking method</h4>
                                    Give instructions to prepare this recipe
                                    <div class="cooking-step">
                                        <div class="step-number">1</div>
                                        <div class="step-instruction">${recipe.cookingMethods}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="analysis-panel">
                            <div class="analysis-box">
                                <h4>Global analysis per portion</h4>
                                <span>Energy, macronutrients and fiber distribution</span>
                                <br>
                                <div style="display: flex; justify-content: space-between;">
                                <div>Energy</div>
                                <div>${totalEnergy} kcal</div>
                                </div>
                                <hr>
                                <div class="analysis-charts">
                                    <div class="chart-wrapper">
                                        <canvas id="fatChart"></canvas>
                                        <div class="chart-label">${totalFat}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="carbChart"></canvas>
                                        <div class="chart-label">${totalCarbohydrate}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="proteinChart"></canvas>
                                        <div class="chart-label">${totalProtein}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="fiberChart"></canvas>
                                        <div class="chart-label">${totalFiber}g</div>
                                    </div>
                                </div>
                                <div class="chart-legend">
                                    <div>Fat</div>
                                    <div>Carbohydrate</div>
                                    <div>Protein</div>
                                    <div>Fiber</div>
                                </div>
                            </div>

                            <div class="analysis-box">
                                <h4>Macronutrients per portion</h4>
                                <span>Macronutrients distribution of the recipe</span>
                                <br>
                                <canvas id="myChart" width="400" height="400"></canvas>
                            </div>

                            <div class="analysis-box">
                                <h4>Macronutrients per portion</h4>
                                <span>Macronutrients distribution of the recipe</span>
                                <br>
                                <div class="nutrient-list">
                                    <div class="nutrient-item">
                                        <div>Sodium</div>
                                        <div>${totalSodium} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin A</div>
                                        <div>${totalVitaminA} mcg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin B-6</div>
                                        <div>${totalVitaminB6} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin B-12</div>
                                        <div>${totalVitaminB12} mcg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin C</div>
                                        <div>${totalVitaminC} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin D (D2 + D3)</div>
                                        <div>${totalVitaminD} mcg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin E</div>
                                        <div>${totalVitaminE} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin K</div>
                                        <div>${totalVitaminK} mcg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Sugars</div>
                                        <div>${totalSugars} g</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Calcium</div>
                                        <div>${totalCalcium} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Iron</div>
                                        <div>${totalIron} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Magnesium</div>
                                        <div>${totalMagnesium} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Phosphorus</div>
                                        <div>${totalPhosphorus} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Potassium</div>
                                        <div>${totalPotassium} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Zinc</div>
                                        <div>${totalZinc} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Copper</div>
                                        <div>${totalCopper} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Fluoride</div>
                                        <div>${totalFluoride} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Manganese</div>
                                        <div>${totalManganese} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Selenium</div>
                                        <div>${totalSelenium} mcg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Thiamin</div>
                                        <div>${totalThiamin} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Riboflavin</div>
                                        <div>${totalRiboflavin} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Niacin</div>
                                        <div>${totalNiacin} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Pantothenic acid</div>
                                        <div>${totalPantothenicAcid} mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Folate, total</div>
                                        <div>${totalFolateTotal} mcg</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
    
    
    `
    render_chart(totalFat, totalCarbohydrate, totalProtein, totalFiber)
}
render_content()





function render_chart(Fat, Carbohydrate, Protein, Fiber) {
    function createDoughnutChart(chartId, value, color) {
        new Chart(document.getElementById(chartId), {
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
    }
    createDoughnutChart('fatChart', Fat, '#E57373');
    createDoughnutChart('carbChart', Carbohydrate, '#FFB74D');
    createDoughnutChart('proteinChart', Protein, '#4DB6AC');
    createDoughnutChart('fiberChart', Fiber, '#90A4AE');

    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        labels: ['Fat', 'Carbohydrate', 'Protein'],
        datasets: [{
            data: [Fat, Carbohydrate, Protein],
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
}




let isCollapsed = false;
function toggleSidebar() {
    const sidebar = document.getElementById('sidebars');
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