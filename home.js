function renderRecipes(){
    let dataRecipes=document.getElementById("dataRecipes")
    let data=``
    for(let i=0;i<foodList.length;i++){
        data+=`
        <div
              style=" width: calc(50% - 15px); height: auto; padding: 30px 0; border: 1px solid; margin-top: 30px; border-radius: 10px;">
              <div style="width: 100%; display: flex; padding-left: 20px;">
                <div
                  style="height: 50px; width: 160px; box-shadow: 0px 2px 10px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: orange; margin-right: 40px; font-size: 15px;">
                  <i class="fa-solid fa-people-group" style="margin-right: 5px;"></i>
                  <div>Community Recipes</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; flex-grow: 1; position: relative;">
                  <h5 style="margin: 0;">${foodList[i].name}</h5>
                  <div style="color: gray; padding-left: 30px;">${foodList[i].source}</div>
                  <div style="display: flex; align-items: center; gap: 5px;">
                    <i style="color: chocolate;" class="fa-solid fa-tag"></i>
                    <span>${foodList[i].category}</span>
                  </div>
                  <div
                    style="position: absolute; right: 30px;  top: 30px; display: flex; align-items: center; gap: 5px;">
                    <button
                      style="border: 1px solid #ddd; background: white; border-radius: 5px; padding: 5px 10px; display: flex; align-items: center;">
                      <i class="fa-regular fa-heart" style="color: gray;"></i>
                      <span style="margin-left: 5px; color: gray;">37</span>
                    </button>
                  </div>
                  <hr style="margin: 10px 0;">
                  <div style="display: flex; justify-content: space-around; text-align: center; font-size: 15px">
                    <div>
                      <small>by</small><br><strong>100g</strong>
                    </div>
                    <div>
                      <small>Energy</small><br><strong>${foodList[i].macronutrients.energy} kcal</strong>
                    </div>
                    <div>
                      <small>Fat</small><br><strong>${foodList[i].macronutrients.fat} g</strong>
                    </div>
                    <div>
                      <small>Carbohydrate</small><br><strong>${foodList[i].macronutrients.carbohydrate} g</strong>
                    </div>
                    <div>
                      <small>Protein</small><br><strong>${foodList[i].macronutrients.protein} g</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
    }
    data+=`
    <div style="width: 90%; margin-top: 50px; display: flex; justify-content: flex-end; margin-right: 100px; margin-bottom: 30px;">
                <button><i class="fa-solid fa-left-long"></i></button>
                <button>1</i></button>
                <button>2</i></button>
                <button><i class="fa-solid fa-right-long"></i></button>
              </div>
    `
    dataRecipes.innerHTML=data
}
renderRecipes()
function nameUserLogin(){
    let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
    let nameUserLogin=document.getElementById("nameUserLogin")
    let currentUser = userList.find(user => user.email === userLogin.email);
    nameUserLogin.innerText=`Hello, ${currentUser.name} !`
    nameUserLogin.style.fontSize="20px"
}
nameUserLogin()