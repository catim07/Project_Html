let userList = []

if (localStorage.getItem("userList")) {
  userList = JSON.parse(localStorage.getItem("userList"))
} else {
  localStorage.setItem("userList", JSON.stringify(userList))
}

function getElementData(dataForm) {
  let tempData = {}
  for (let eL of dataForm.elements) {
    if (eL.name != "") {
      tempData[eL.name] = eL.value
    }
  }
  return tempData
}
function updateData(userList) {
  localStorage.setItem("userList", JSON.stringify(userList))
}
function updateDataFood(foodList) {
  localStorage.setItem("foodList", JSON.stringify(foodList))
}
function logout() {
  if (!confirm("bạn có chắc đăng xuất không")) {
    return
  }
  localStorage.removeItem("userLogin")
  sessionStorage.removeItem("userLogin")
  window.location.href = "./authen/signin.html"
}
function nextPageFood() {
  window.location.href = ""
}



let foodList = [
  {
    "id": 1,
    "name": "Ackee, canned, drained",
    "source": "Minh Cuong Tran",
    "category": "Vegetables and Vegetable Products",
    "quantity": "100",
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
  },
  {
    "id": 2,
    "name": "Banana, raw",
    "source": "USDA",
    "category": "Fruits",
    "quantity": "100",
    "macronutrients": {
      "energy": 89,
      "carbohydrate": 22.8,
      "fat": 0.3,
      "protein": 1.1
    },
    "micronutrients": {
      "cholesterol": 0.0,
      "fiber": 2.6,
      "sodium": 1.0,
      "water": 74.9,
      "vitaminA": 64.0,
      "vitaminB6": 0.4,
      "vitaminB12": 0.0,
      "vitaminC": 8.7,
      "vitaminD": 0.0,
      "vitaminE": 0.1,
      "vitaminK": 0.5,
      "starch": 5.4,
      "lactose": 0.0,
      "alcohol": 0.0,
      "caffeine": 0.0,
      "sugars": 12.2,
      "calcium": 5.0,
      "iron": 0.3,
      "magnesium": 27.0,
      "phosphorus": 22.0,
      "potassium": 358.0,
      "zinc": 0.2,
      "copper": 0.08,
      "fluoride": 2.2,
      "manganese": 0.27,
      "selenium": 1.0,
      "thiamin": 0.03,
      "riboflavin": 0.07,
      "niacin": 0.67,
      "pantothenicAcid": 0.33,
      "folateTotal": 20.0,
      "folicAcid": 0.0,
      "fattyAcidsTrans": 0.0,
      "fattyAcidsSaturated": 0.11,
      "fattyAcidsMonounsaturated": 0.03,
      "fattyAcidsPolyunsaturated": 0.07,
      "chloride": 1.2
    }
  },
  {
    "id": 3,
    "name": "Egg, boiled",
    "source": "USDA",
    "category": "Protein Foods",
    "quantity": "100",
    "macronutrients": {
      "energy": 155,
      "carbohydrate": 1.1,
      "fat": 11.0,
      "protein": 13.0
    },
    "micronutrients": {
      "cholesterol": 373.0,
      "fiber": 0.0,
      "sodium": 124.0,
      "water": 76.0,
      "vitaminA": 487.0,
      "vitaminB6": 0.1,
      "vitaminB12": 1.1,
      "vitaminC": 0.0,
      "vitaminD": 2.0,
      "vitaminE": 1.0,
      "vitaminK": 0.3,
      "starch": 0.0,
      "lactose": 0.0,
      "alcohol": 0.0,
      "caffeine": 0.0,
      "sugars": 1.1,
      "calcium": 50.0,
      "iron": 1.2,
      "magnesium": 10.0,
      "phosphorus": 86.0,
      "potassium": 126.0,
      "zinc": 1.0,
      "copper": 0.08,
      "fluoride": null,
      "manganese": 0.03,
      "selenium": 30.0,
      "thiamin": 0.04,
      "riboflavin": 0.5,
      "niacin": 0.1,
      "pantothenicAcid": 1.4,
      "folateTotal": 44.0,
      "folicAcid": 0.0,
      "fattyAcidsTrans": 0.0,
      "fattyAcidsSaturated": 3.3,
      "fattyAcidsMonounsaturated": 4.1,
      "fattyAcidsPolyunsaturated": 1.4,
      "chloride": 126.0
    }
  },
  {
    "id": 4,
    "name": "White rice, cooked",
    "source": "FAO",
    "category": "Grains",
    "quantity": "100",
    "macronutrients": {
      "energy": 130,
      "carbohydrate": 28.0,
      "fat": 0.3,
      "protein": 2.7
    },
    "micronutrients": {
      "cholesterol": 0.0,
      "fiber": 0.4,
      "sodium": 1.0,
      "water": 68.4,
      "vitaminA": 0.0,
      "vitaminB6": 0.1,
      "vitaminB12": 0.0,
      "vitaminC": 0.0,
      "vitaminD": 0.0,
      "vitaminE": 0.0,
      "vitaminK": 0.0,
      "starch": 24.9,
      "lactose": 0.0,
      "alcohol": 0.0,
      "caffeine": 0.0,
      "sugars": 0.1,
      "calcium": 10.0,
      "iron": 1.2,
      "magnesium": 12.0,
      "phosphorus": 43.0,
      "potassium": 26.0,
      "zinc": 0.4,
      "copper": 0.07,
      "fluoride": null,
      "manganese": 0.38,
      "selenium": 7.5,
      "thiamin": 0.02,
      "riboflavin": 0.01,
      "niacin": 0.4,
      "pantothenicAcid": 0.3,
      "folateTotal": 58.0,
      "folicAcid": 0.0,
      "fattyAcidsTrans": 0.0,
      "fattyAcidsSaturated": 0.1,
      "fattyAcidsMonounsaturated": 0.1,
      "fattyAcidsPolyunsaturated": 0.1,
      "chloride": 1.0
    }
  },
  {
    "id": 5,
    "name": "Spinach, raw",
    "source": "USDA",
    "category": "Vegetables",
    "quantity": "100",
    "macronutrients": {
      "energy": 23,
      "carbohydrate": 3.6,
      "fat": 0.4,
      "protein": 2.9
    },
    "micronutrients": {
      "cholesterol": 0.0,
      "fiber": 2.2,
      "sodium": 79.0,
      "water": 91.4,
      "vitaminA": 469.0,
      "vitaminB6": 0.2,
      "vitaminB12": 0.0,
      "vitaminC": 28.1,
      "vitaminD": 0.0,
      "vitaminE": 2.0,
      "vitaminK": 482.9,
      "starch": 0.0,
      "lactose": 0.0,
      "alcohol": 0.0,
      "caffeine": 0.0,
      "sugars": 0.4,
      "calcium": 99.0,
      "iron": 2.7,
      "magnesium": 79.0,
      "phosphorus": 49.0,
      "potassium": 558.0,
      "zinc": 0.5,
      "copper": 0.13,
      "fluoride": null,
      "manganese": 0.9,
      "selenium": 1.0,
      "thiamin": 0.08,
      "riboflavin": 0.19,
      "niacin": 0.7,
      "pantothenicAcid": 0.1,
      "folateTotal": 194.0,
      "folicAcid": 0.0,
      "fattyAcidsTrans": 0.0,
      "fattyAcidsSaturated": 0.1,
      "fattyAcidsMonounsaturated": 0.0,
      "fattyAcidsPolyunsaturated": 0.2,
      "chloride": 70.0
    }
  }
];

if (localStorage.getItem("foodList")) {
  foodList = JSON.parse(localStorage.getItem("foodList"))
} else {
  localStorage.setItem("foodList", JSON.stringify(foodList))
}


let recipe = [
  {
    id: 1,
    coverSrc: "https://th.bing.com/th/id/OIP.DTUkk2lsKh_W2gOxkGJdZgHaE8?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Grilled Chicken Salad",
    description: "A healthy and refreshing salad with grilled chicken, fresh veggies, and a light vinaigrette.",
    author: "Lê Thanh Cường",
    totalTime: "00:30",
    preparationTime: "00:15",
    finalWeight: "600 grams",
    portions: 2,
    category: "Salad",
    cookingMethods: "STEP 1 Toast the bread slices.",
    like: 0,
    likedUsers: [],
    ingredients: [{
      "id": 4,
      "name": "White rice, cooked",
      "source": "FAO",
      "category": "Grains",
      "quantity": "100",
      "macronutrients": {
        "energy": 130,
        "carbohydrate": 28.0,
        "fat": 0.3,
        "protein": 2.7
      },
      "micronutrients": {
        "cholesterol": 0.0,
        "fiber": 0.4,
        "sodium": 1.0,
        "water": 68.4,
        "vitaminA": 0.0,
        "vitaminB6": 0.1,
        "vitaminB12": 0.0,
        "vitaminC": 0.0,
        "vitaminD": 0.0,
        "vitaminE": 0.0,
        "vitaminK": 0.0,
        "starch": 24.9,
        "lactose": 0.0,
        "alcohol": 0.0,
        "caffeine": 0.0,
        "sugars": 0.1,
        "calcium": 10.0,
        "iron": 1.2,
        "magnesium": 12.0,
        "phosphorus": 43.0,
        "potassium": 26.0,
        "zinc": 0.4,
        "copper": 0.07,
        "fluoride": null,
        "manganese": 0.38,
        "selenium": 7.5,
        "thiamin": 0.02,
        "riboflavin": 0.01,
        "niacin": 0.4,
        "pantothenicAcid": 0.3,
        "folateTotal": 58.0,
        "folicAcid": 0.0,
        "fattyAcidsTrans": 0.0,
        "fattyAcidsSaturated": 0.1,
        "fattyAcidsMonounsaturated": 0.1,
        "fattyAcidsPolyunsaturated": 0.1,
        "chloride": 1.0
      }
    },]
  },
  {
    id: 2,
    coverSrc: "https://th.bing.com/th/id/OIP.Ghc34RV9Cgg-W1YLvjAhcwHaHa?w=206&h=206&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich tomato and meat sauce.",
    author: "Lê Thanh Cường",
    totalTime: "00:45",
    preparationTime: "00:20",
    finalWeight: "800 grams",
    portions: 4,
    category: "Main Dish",
    cookingMethods: "STEP 1 Cook the pasta. STEP 2 Simmer the meat sauce.",
    like: 0,
    likedUsers: [],
    ingredients: [{
      "id": 5,
      "name": "Spinach, raw",
      "source": "USDA",
      "category": "Vegetables",
      "quantity": "100",
      "macronutrients": {
        "energy": 23,
        "carbohydrate": 3.6,
        "fat": 0.4,
        "protein": 2.9
      },
      "micronutrients": {
        "cholesterol": 0.0,
        "fiber": 2.2,
        "sodium": 79.0,
        "water": 91.4,
        "vitaminA": 469.0,
        "vitaminB6": 0.2,
        "vitaminB12": 0.0,
        "vitaminC": 28.1,
        "vitaminD": 0.0,
        "vitaminE": 2.0,
        "vitaminK": 482.9,
        "starch": 0.0,
        "lactose": 0.0,
        "alcohol": 0.0,
        "caffeine": 0.0,
        "sugars": 0.4,
        "calcium": 99.0,
        "iron": 2.7,
        "magnesium": 79.0,
        "phosphorus": 49.0,
        "potassium": 558.0,
        "zinc": 0.5,
        "copper": 0.13,
        "fluoride": null,
        "manganese": 0.9,
        "selenium": 1.0,
        "thiamin": 0.08,
        "riboflavin": 0.19,
        "niacin": 0.7,
        "pantothenicAcid": 0.1,
        "folateTotal": 194.0,
        "folicAcid": 0.0,
        "fattyAcidsTrans": 0.0,
        "fattyAcidsSaturated": 0.1,
        "fattyAcidsMonounsaturated": 0.0,
        "fattyAcidsPolyunsaturated": 0.2,
        "chloride": 70.0
      }
    }]
  },
  {
    id: 3,
    coverSrc: "https://th.bing.com/th/id/OIP.M_MDhxhAxfWYzTzedfbrcQHaHa?cb=iwp1&pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    name: "Avocado Toast",
    description: "Toasted bread topped with mashed avocado, salt, and lemon.",
    author: "Lê Thanh Cường",
    totalTime: "00:10",
    preparationTime: "00:05",
    finalWeight: "250 grams",
    portions: 1,
    category: "Breakfast",
    cookingMethods: "STEP 1 Toast the bread. STEP 2 Spread mashed avocado.",
    like: 0,
    likedUsers: [],
    ingredients: [{
      "id": 3,
      "name": "Egg, boiled",
      "source": "USDA",
      "category": "Protein Foods",
      "quantity": "100",
      "macronutrients": {
        "energy": 155,
        "carbohydrate": 1.1,
        "fat": 11.0,
        "protein": 13.0
      },
      "micronutrients": {
        "cholesterol": 373.0,
        "fiber": 0.0,
        "sodium": 124.0,
        "water": 76.0,
        "vitaminA": 487.0,
        "vitaminB6": 0.1,
        "vitaminB12": 1.1,
        "vitaminC": 0.0,
        "vitaminD": 2.0,
        "vitaminE": 1.0,
        "vitaminK": 0.3,
        "starch": 0.0,
        "lactose": 0.0,
        "alcohol": 0.0,
        "caffeine": 0.0,
        "sugars": 1.1,
        "calcium": 50.0,
        "iron": 1.2,
        "magnesium": 10.0,
        "phosphorus": 86.0,
        "potassium": 126.0,
        "zinc": 1.0,
        "copper": 0.08,
        "fluoride": null,
        "manganese": 0.03,
        "selenium": 30.0,
        "thiamin": 0.04,
        "riboflavin": 0.5,
        "niacin": 0.1,
        "pantothenicAcid": 1.4,
        "folateTotal": 44.0,
        "folicAcid": 0.0,
        "fattyAcidsTrans": 0.0,
        "fattyAcidsSaturated": 3.3,
        "fattyAcidsMonounsaturated": 4.1,
        "fattyAcidsPolyunsaturated": 1.4,
        "chloride": 126.0
      }
    },]
  },
  
];

if (localStorage.getItem("recipe")) {
  recipe = JSON.parse(localStorage.getItem("recipe"))
} else {
  localStorage.setItem("recipe", JSON.stringify(recipe))
}

let indexPage = window.location.pathname;

if (indexPage.includes('food.html')) {
  document.querySelector('[data-link="food"]').classList.add('active');
}
else if (indexPage.includes('recipes.html')) {
  document.querySelector('[data-link="recipes"]').classList.add('active');
}
else if (indexPage.includes('index.html') || indexPage === '/') {
  document.querySelector('[data-link="index"]').classList.add('active');
} else if (indexPage.includes('addrecipe.html')) {

  document.querySelector('[data-link="recipes"]').classList.add('active');
} else if (indexPage.includes('recipesdetail.html')) {

  document.querySelector('[data-link="recipes"]').classList.add('active');
}










