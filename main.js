let userList=[]

if(localStorage.getItem("userList")){
    userList=JSON.parse(localStorage.getItem("userList"))
}else{
    localStorage.setItem("userList",JSON.stringify(userList))
}

function getElementData(dataForm){
    let tempData={}
    for(let eL of dataForm.elements){
        if(eL.name!=""){
            tempData[eL.name]=eL.value
        }
    }
    return tempData
}
function updateData(userList){
    localStorage.setItem("userList",JSON.stringify(userList))
}
function updateDataFood(foodList){
    localStorage.setItem("foodList",JSON.stringify(foodList))
}
function logout(){
    if(!confirm("bạn có chắc đăng xuất không")){
        return
    }
    localStorage.removeItem("userLogin")
    sessionStorage.removeItem("userLogin")
    window.location.href="./authen/signin.html"
}
function nextPageFood(){
    window.location.href=""
}



let foodList=[
    {
        "like": 0,
        "likedUsers": [],
      "id": 1,
      "name": "Ackee, canned, drained",
      "source": "Minh Cuong Tran",
      "category": "Vegetables and Vegetable Products",
      "quantity": "100g",
      "macronutrients": {
        "energy": 151,
        "carbohydrate": 0.8,
        "fat": 15.2,
        "protein": 2.9
      },
      "micronutrients": {
        "cholesterol": 0.0,
        "fiber": null,
        "sodium": 240.0,
        "water": 76.7,
        "vitaminA": null,
        "vitaminB6": 0.06,
        "vitaminB12": 0.0,
        "vitaminC": 30.0,
        "vitaminD": 0.0,
        "vitaminE": null,
        "vitaminK": null,
        "starch": 0.0,
        "lactose": 0.0,
        "alcohol": null,
        "caffeine": null,
        "sugars": 0.8,
        "calcium": 35.0,
        "iron": 0.7,
        "magnesium": 40.0,
        "phosphorus": 47.0,
        "potassium": 270.0,
        "zinc": 0.6,
        "copper": 0.27,
        "fluoride": null,
        "manganese": null,
        "selenium": null,
        "thiamin": 0.03,
        "riboflavin": 0.07,
        "niacin": 0.6,
        "pantothenicAcid": null,
        "folateTotal": 41.0,
        "folicAcid": null,
        "fattyAcidsTrans": 0.0,
        "fattyAcidsSaturated": null,
        "fattyAcidsMonounsaturated": null,
        "fattyAcidsPolyunsaturated": null,
        "chloride": 340.0
      }
    }
]
if(localStorage.getItem("foodList")){
    foodList=JSON.parse(localStorage.getItem("foodList"))
}else{
    localStorage.setItem("foodList",JSON.stringify(foodList))
}


let recipe=[
  {
    "id": 1,
    "coverSrc": "https://nutriumstorageaccount.blob.core.windows.net/rails-active-storage/6qim5uox87nr22st6i7nzt8",
    "name": "Turmeric Roasted Cauliflower Salad (lowfodmap)",
    "description": "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
    "author": "Joana Jardim",
    "totalTime": "00:40",
    "preparationTime": "00:40",
    "finalWeight": "978.8 grams",
    "portions": 4,
    "ingredients": [
      
    ],
    "cookingMethods": [
      {
        "id": 1,
        "content": "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin,"
      }
    ],
    "category": [
      {
        "id": 1,
        "name": "vegetarian"
      },
      {
        "id": 2,
        "name": "appetizer"
      }
    ]
  }
]
if(localStorage.getItem("recipe")){
  recipe=JSON.parse(localStorage.getItem("recipe"))
}else{
  localStorage.setItem("recipe",JSON.stringify(recipe))
}





function likeFood(index) {
    let foodList = JSON.parse(localStorage.getItem('foodList'));
    let userLogin = JSON.parse(localStorage.getItem('userLogin')) || JSON.parse(sessionStorage.getItem('userLogin'));
  
    if (!userLogin || userLogin.length === 0) {
      alert("Bạn cần đăng nhập trước khi like!");
      return;
    }
  
    let currentUserEmail = userLogin.email;
  
    if (!foodList[index].likedUsers) {
      foodList[index].likedUsers = [];
    }
  
    if (!foodList[index].likedUsers.includes(currentUserEmail)) {
      foodList[index].like += 1;
      foodList[index].likedUsers.push(currentUserEmail);
    } else {
      foodList[index].like -= 1;
      foodList[index].likedUsers = foodList[index].likedUsers.filter(email => email !== currentUserEmail);
    }
  
    localStorage.setItem("foodList", JSON.stringify(foodList));
    renderFoodFromList(foodList);
    renderFoodPain(foodList);
  }
  


  
