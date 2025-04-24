function rederFoods() {
    let dataFoods = document.getElementById("dataFoods");
    let data=``
    for(let i=0;i<foodList.length;i++){
        data+=`
        <div onclick="window.location.href='/ingredient/ingredient.html'" 
             style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px;">
            <span>
                ${foodList[i].name}<br>
                <small style="color: gray;">${foodList[i].source}</small>
            </span>
            <span>${foodList[i].macronutrients.energy} kcal <br><small>energy</small></span>
            <span>${foodList[i].macronutrients.fat} g <br><small>Fat</small></span>
            <span>${foodList[i].macronutrients.carbohydrate} g <br><small>Carbohydrate</small></span>
            <span>${foodList[i].macronutrients.protein} g <br><small>Protein</small></span>
        </div>
        `
    }
    data+=`
    <div  style="display: flex; justify-content: space-between; border: 1px solid #0c0c0c; padding: 10px; margin-right: 20px; padding-right: 30px;">
              <div onclick="nextpageaddfood()" style="font-size: 25px;">
                <i class="fa-regular fa-square-plus"></i>
                Create food
              </div>
            </div>
          </div>
            <div style="margin-top: 50px; display: flex; justify-content: flex-end; margin-right: 50px; margin-bottom: 30px;">
              <button><i class="fa-solid fa-left-long"></i></button>
              <button>1</i></button>
              <button>2</i></button>
              <button><i class="fa-solid fa-right-long"></i></button>
            </div>
    
    `
    dataFoods.innerHTML=data
}
rederFoods()
function nextpageaddfood(){
    window.location.href="/addfood/addfood.html"
}