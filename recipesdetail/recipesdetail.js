



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
    let index = JSON.parse(localStorage.getItem("indexRecipes"));
    let recipes = JSON.parse(localStorage.getItem("recipe"))
    let recipe = recipes[index];
    console.log(recipe)
    data.innerHTML = `
    <div class="content-container">
                    <div class="left-card">
                        <div class="card text-bg-dark" style="border: none; width: 100%; height: 300px; position: relative; overflow: hidden;">
                            <img src="../ChatGPT Image 10_59_20 21 thg 4, 2025.png" class="card-img" alt="..." style="object-fit: cover; width: 100%; height: 100%;">
                            
                            <div class="card-img-overlay d-flex flex-column justify-content-between" style="color: black; padding: 10px; border: 1px solid gray; ">
                                <div style="display: flex; gap: 10px;">
                                    <div class="community-item">
                                        <div style="color: orange; font-size: 13px;">
                                            <i class="fa-solid fa-people-group"></i> Community Recipes
                                        </div>
                                    </div>
                                    <div class="community-item" style="width: 70px;">
                                        <div><i class="fa-regular fa-heart"></i> ${foodLists.like}</div>
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
                                    <div class="info-value">${recipe.name != null && recipe.name !== "" ? recipe.name : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Description</div>
                                    <div class="info-value">${recipe.description != null && recipe.description !== "" ? recipe.description : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Author</div>
                                    <div class="info-value">${recipe.author != null && recipe.author !== "" ? recipe.author : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Total time</div>
                                    <div class="info-value">${recipe.totalTime != null && recipe.totalTime !== "" ? recipe.totalTime : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Preparation time</div>
                                    <div class="info-value">${recipe.preparationTime != null && recipe.preparationTime !== "" ? recipe.preparationTime : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Final weight</div>
                                    <div class="info-value">${recipe.finalWeight != null && recipe.finalWeight !== "" ? recipe.finalWeight : 0}</div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">Portions</div>
                                    <div class="info-value">${recipe.portions != null && recipe.portions !== "" ? recipe.portions : 0}</div>
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
                                    <div class="ingredient-item">1 chopped cup (1/2" pieces) of cauliflower, raw (107 g)</div>
                                    <div class="ingredient-item">1 tsp of spices, turmeric, ground (3 g)</div>
                                    <div class="ingredient-item">1 tbsp of olive oil (14 g)</div>
                                    <div class="ingredient-item">100 grams of rice, brown, medium-grain, raw</div>
                                    <div class="ingredient-item">150 grams of edamame, frozen, unprepared</div>
                                    <div class="ingredient-item">1 cup, sections of lemons, raw, without peel (212 g)</div>
                                    <div class="ingredient-item">1 cup slices of cucumber, with peel, raw (104 g)</div>

                                    <div class="ingredient-item">4 tbsps of parsley, fresh (15 g)</div>
                                    <div class="ingredient-item">50 grams of nuts, cashew nuts, oil roasted, with salt added</div>
                                    <div class="ingredient-item">5 tbsps of vinegar, balsamic (80 g)</div>
                                    <div class="ingredient-item">4 tbsps of soy sauce made from soy (tamari) (72 g)</div>
                                    <div class="ingredient-item">1 tablespoon of oil, sesame, salad or cooking (14 g)</div>
                                    <div class="ingredient-item">1 tbsp of sauce, fish, ready-to-serve (18 g)</div>
                                    <div class="ingredient-item">2 tbsps of syrups, maple (40 g)</div>
                                </div>
                            </div>

                            <div class="cooking-method">
                                <div class="cooking-steps">
                                    <h4>Cooking method</h4>
                                    Give instructions to prepare this recipe
                                    <div class="cooking-step">
                                        <div class="step-number">1</div>
                                        <div class="step-instruction">${recipe.cookingMethods[0].content}</div>
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
                                <div>${foodLists.macronutrients.energy} kcal</div>
                                </div>
                                <hr>
                                <div class="analysis-charts">
                                    <div class="chart-wrapper">
                                        <canvas id="fatChart"></canvas>
                                        <div class="chart-label">${foodLists.macronutrients.fat}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="carbChart"></canvas>
                                        <div class="chart-label">${foodLists.macronutrients.carbohydrate}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="proteinChart"></canvas>
                                        <div class="chart-label">${foodLists.macronutrients.protein}g</div>
                                    </div>
                                    <div class="chart-wrapper">
                                        <canvas id="fiberChart"></canvas>
                                        <div class="chart-label">${foodLists.micronutrients.fiber ? foodLists.micronutrients.fiber : 0}g</div>
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
                                        <div>${foodLists.micronutrients.sodium != null && foodLists.micronutrients.sodium !== "" ? foodLists.micronutrients.sodium : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin A</div>
                                        <div>${foodLists.micronutrients.vitaminA != null && foodLists.micronutrients.vitaminA !== "" ? foodLists.micronutrients.vitaminA : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin B-6</div>
                                        <div>${foodLists.micronutrients.vitaminB6 != null && foodLists.micronutrients.vitaminB6 !== "" ? foodLists.micronutrients.vitaminB6 : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin B-12</div>
                                        <div>${foodLists.micronutrients.vitaminB12 != null && foodLists.micronutrients.vitaminB12 !== "" ? foodLists.micronutrients.vitaminB12 : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin C</div>
                                        <div>${foodLists.micronutrients.vitaminC != null && foodLists.micronutrients.vitaminC !== "" ? foodLists.micronutrients.vitaminC : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin D</div>
                                        <div>${foodLists.micronutrients.vitaminD != null && foodLists.micronutrients.vitaminD !== "" ? foodLists.micronutrients.vitaminD : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin E</div>
                                        <div>${foodLists.micronutrients.vitaminE != null && foodLists.micronutrients.vitaminE !== "" ? foodLists.micronutrients.vitaminE : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Vitamin K</div>
                                        <div>${foodLists.micronutrients.vitaminK != null && foodLists.micronutrients.vitaminK !== "" ? foodLists.micronutrients.vitaminK : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Calcium</div>
                                        <div>${foodLists.micronutrients.calcium != null && foodLists.micronutrients.calcium !== "" ? foodLists.micronutrients.calcium : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Iron</div>
                                        <div>${foodLists.micronutrients.iron != null && foodLists.micronutrients.iron !== "" ? foodLists.micronutrients.iron : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Magnesium</div>
                                        <div>${foodLists.micronutrients.magnesium != null && foodLists.micronutrients.magnesium !== "" ? foodLists.micronutrients.magnesium : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Phosphorus</div>
                                        <div>${foodLists.micronutrients.phosphorus != null && foodLists.micronutrients.phosphorus !== "" ? foodLists.micronutrients.phosphorus : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Potassium</div>
                                        <div>${foodLists.micronutrients.potassium != null && foodLists.micronutrients.potassium !== "" ? foodLists.micronutrients.potassium : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Zinc</div>
                                        <div>${foodLists.micronutrients.zinc != null && foodLists.micronutrients.zinc !== "" ? foodLists.micronutrients.zinc : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Copper</div>
                                        <div>${foodLists.micronutrients.copper != null && foodLists.micronutrients.copper !== "" ? foodLists.micronutrients.copper : 0}mg</div>
                                    </div>
                                    <div class="nutrient-item">
                                        <div>Chloride</div>
                                        <div>${foodLists.micronutrients.chloride != null && foodLists.micronutrients.chloride !== "" ? foodLists.micronutrients.chloride : 0}mg</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    
    
    `
    render_chart(foodLists.macronutrients.fat, foodLists.macronutrients.carbohydrate, foodLists.macronutrients.protein, foodLists.micronutrients.fiber ? foodLists.micronutrients.fiber : 0)
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


    console.log(Carbohydrate)
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