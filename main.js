let userList = [
  {
    email: "cuong@gmail.com",
    name: "Lê Thanh Cường",
    password: "123456789",
  },
  {
    email: "catim@gmail.com",
    name: "Nguyễn Văn A",
    password: "123456789",
  }
]

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
  {
    "id": 4,
    "coverSrc": "https://th.bing.com/th/id/OIP.nos6GD5OnjQC_0Q1briAVgHaE8?w=186&h=124&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    "name": "Pancakes",
    "description": "Fluffy pancakes served with syrup and fresh fruit.",
    "author": "Lê Thanh Cường",
    "totalTime": "00:15",
    "preparationTime": "00:10",
    "finalWeight": "300 grams",
    "portions": 2,
    "category": "Breakfast",
    "cookingMethods": "STEP 1 Mix flour, eggs, milk, and baking powder. STEP 2 Cook pancakes on a griddle.",
    "like": 0,
    "likedUsers": [],
    "ingredients": [
      {
        "id": 4,
        "name": "Egg, beaten",
        "source": "USDA",
        "category": "Protein Foods",
        "quantity": "50",
        "macronutrients": {
          "energy": 72,
          "carbohydrate": 0.4,
          "fat": 5.0,
          "protein": 6.3
        },
        "micronutrients": {
          "cholesterol": 186.0,
          "fiber": 0.0,
          "sodium": 63.0,
          "water": 37.0,
          "vitaminA": 270.0,
          "vitaminB6": 0.1,
          "vitaminB12": 0.5,
          "vitaminC": 0.0,
          "vitaminD": 1.0,
          "vitaminE": 0.5,
          "vitaminK": 0.1,
          "starch": 0.0,
          "lactose": 0.0,
          "alcohol": 0.0,
          "caffeine": 0.0,
          "sugars": 0.5,
          "calcium": 28.0,
          "iron": 0.5,
          "magnesium": 6.0,
          "phosphorus": 50.0,
          "potassium": 63.0,
          "zinc": 0.5,
          "copper": 0.05,
          "fluoride": null,
          "manganese": 0.02,
          "selenium": 15.0,
          "thiamin": 0.02,
          "riboflavin": 0.1,
          "niacin": 0.1,
          "pantothenicAcid": 0.5,
          "folateTotal": 25.0,
          "folicAcid": 0.0,
          "fattyAcidsTrans": 0.0,
          "fattyAcidsSaturated": 1.5,
          "fattyAcidsMonounsaturated": 2.0,
          "fattyAcidsPolyunsaturated": 1.0,
          "chloride": 63.0
        }
      }
    ]
  },
  
  {
    "id": 5,
    "coverSrc": "https://th.bing.com/th/id/OIP.MaWtkzTZb_gzcvUK68XRvwHaHa?w=186&h=186&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    "name": "Quinoa Veggie Bowl",
    "description": "A nourishing bowl of quinoa, roasted vegetables, and hummus.",
    "author": "Lê Thanh Cường",
    "totalTime": "00:25",
    "preparationTime": "00:15",
    "finalWeight": "450 grams",
    "portions": 2,
    "category": "Lunch",
    "cookingMethods": "STEP 1 Cook quinoa. STEP 2 Roast vegetables. STEP 3 Assemble with hummus.",
    "like": 0,
    "likedUsers": [],
    "ingredients": [
      {
        "id": 7,
        "name": "Cooked quinoa",
        "source": "USDA",
        "category": "Grains",
        "quantity": "185",
        "macronutrients": {
          "energy": 222,
          "carbohydrate": 39.4,
          "fat": 3.6,
          "protein": 8.1
        },
        "micronutrients": {
          "cholesterol": 0.0,
          "fiber": 5.2,
          "sodium": 13.0,
          "water": 132.0,
          "vitaminA": 9.0,
          "vitaminB6": 0.2,
          "vitaminB12": 0.0,
          "vitaminC": 0.0,
          "vitaminD": 0.0,
          "vitaminE": 1.2,
          "vitaminK": 0.0,
          "starch": 32.0,
          "lactose": 0.0,
          "alcohol": 0.0,
          "caffeine": 0.0,
          "sugars": 1.6,
          "calcium": 31.0,
          "iron": 2.8,
          "magnesium": 118.0,
          "phosphorus": 281.0,
          "potassium": 318.0,
          "zinc": 2.0,
          "copper": 0.4,
          "fluoride": null,
          "manganese": 1.2,
          "selenium": 5.2,
          "thiamin": 0.2,
          "riboflavin": 0.2,
          "niacin": 0.8,
          "pantothenicAcid": 0.7,
          "folateTotal": 78.0,
          "folicAcid": 0.0,
          "fattyAcidsTrans": 0.0,
          "fattyAcidsSaturated": 0.4,
          "fattyAcidsMonounsaturated": 1.0,
          "fattyAcidsPolyunsaturated": 1.6,
          "chloride": 13.0
        }
      }
    ]
  },
  
  
  {
    "id": 6,
    "coverSrc": "https://th.bing.com/th/id/OIP.RCUR_7ARsUg1R53ipvqHDwHaHa?w=186&h=186&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    "name": "Vegetable Stir-fry",
    "description": "A medley of vegetables stir-fried in a light sauce.",
    "author": "Lê Thanh Cường",
    "totalTime": "00:15",
    "preparationTime": "00:10",
    "finalWeight": "350 grams",
    "portions": 2,
    "category": "Dinner",
    "cookingMethods": "STEP 1 Stir-fry vegetables in oil. STEP 2 Add sauce and cook for another 5 minutes.",
    "like": 0,
    "likedUsers": [],
    "ingredients": [
      {
        "id": 6,
        "name": "Bell pepper, sliced",
        "source": "USDA",
        "category": "Vegetables",
        "quantity": "100",
        "macronutrients": {
          "energy": 20,
          "carbohydrate": 4.6,
          "fat": 0.2,
          "protein": 0.9
        },
        "micronutrients": {
          "cholesterol": 0.0,
          "fiber": 1.5,
          "sodium": 2.0,
          "water": 92.0,
          "vitaminA": 157.0,
          "vitaminB6": 0.2,
          "vitaminB12": 0.0,
          "vitaminC": 127.0,
          "vitaminD": 0.0,
          "vitaminE": 0.5,
          "vitaminK": 9.0,
          "starch": 0.0,
          "lactose": 0.0,
          "alcohol": 0.0,
          "caffeine": 0.0,
          "sugars": 2.4,
          "calcium": 7.0,
          "iron": 0.4,
          "magnesium": 12.0,
          "phosphorus": 19.0,
          "potassium": 171.0,
          "zinc": 0.2,
          "copper": 0.03,
          "fluoride": null,
          "manganese": 0.1,
          "selenium": 0.5,
          "thiamin": 0.03,
          "riboflavin": 0.1,
          "niacin": 0.3,
          "pantothenicAcid": 0.2,
          "folateTotal": 15.0,
          "folicAcid": 0.0,
          "fattyAcidsTrans": 0.0,
          "fattyAcidsSaturated": 0.0,
          "fattyAcidsMonounsaturated": 0.0,
          "fattyAcidsPolyunsaturated": 0.0,
          "chloride": 2.0
        }
      }
    ]
  },
  {
    "id": 7,
    "coverSrc": "https://th.bing.com/th/id/OIP.r3_1irfe7_DUzWcagn-lqgHaLG?w=204&h=306&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    "name": "Berry Yogurt Parfait",
    "description": "Layers of yogurt, berries, and granola in a glass.",
    "author": "Lê Thanh Cường",
    "totalTime": "00:10",
    "preparationTime": "00:10",
    "finalWeight": "300 grams",
    "portions": 1,
    "category": "Snack",
    "cookingMethods": "STEP 1 Layer yogurt. STEP 2 Add berries. STEP 3 Sprinkle granola.",
    "like": 0,
    "likedUsers": [],
    "ingredients": [
      {
        "id": 8,
        "name": "Plain yogurt, low-fat",
        "source": "USDA",
        "category": "Dairy",
        "quantity": "150",
        "macronutrients": {
          "energy": 97,
          "carbohydrate": 7.0,
          "fat": 3.3,
          "protein": 9.5
        },
        "micronutrients": {
          "cholesterol": 13.0,
          "fiber": 0.0,
          "sodium": 70.0,
          "water": 115.0,
          "vitaminA": 28.0,
          "vitaminB6": 0.1,
          "vitaminB12": 0.8,
          "vitaminC": 1.5,
          "vitaminD": 1.0,
          "vitaminE": 0.1,
          "vitaminK": 0.2,
          "starch": 0.0,
          "lactose": 6.0,
          "alcohol": 0.0,
          "caffeine": 0.0,
          "sugars": 7.0,
          "calcium": 300.0,
          "iron": 0.1,
          "magnesium": 27.0,
          "phosphorus": 233.0,
          "potassium": 379.0,
          "zinc": 1.0,
          "copper": 0.02,
          "fluoride": null,
          "manganese": 0.01,
          "selenium": 8.0,
          "thiamin": 0.04,
          "riboflavin": 0.3,
          "niacin": 0.2,
          "pantothenicAcid": 0.9,
          "folateTotal": 15.0,
          "folicAcid": 0.0,
          "fattyAcidsTrans": 0.0,
          "fattyAcidsSaturated": 2.0,
          "fattyAcidsMonounsaturated": 0.8,
          "fattyAcidsPolyunsaturated": 0.2,
          "chloride": 70.0
        }
      }
    ]
  },
  {
    "id": 8,
    "coverSrc": "https://th.bing.com/th/id/OIP.cBxBiRgv0mE0CyhUKQtufwHaE8?w=206&h=138&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3",
    "name": "Spaghetti Aglio e Olio",
    "description": "Simple Italian pasta with garlic and olive oil.",
    "author": "Lê Thanh Cường",
    "totalTime": "00:15",
    "preparationTime": "00:05",
    "finalWeight": "350 grams",
    "portions": 2,
    "category": "Dinner",
    "cookingMethods": "STEP 1 Cook pasta. STEP 2 Sauté garlic in oil. STEP 3 Combine.",
    "like": 0,
    "likedUsers": [],
    "ingredients": [
      {
        "id": 9,
        "name": "Cooked spaghetti",
        "source": "USDA",
        "category": "Grains",
        "quantity": "200",
        "macronutrients": {
          "energy": 220,
          "carbohydrate": 43.2,
          "fat": 1.3,
          "protein": 8.1
        },
        "micronutrients": {
          "cholesterol": 0.0,
          "fiber": 2.5,
          "sodium": 1.0,
          "water": 130.0,
          "vitaminA": 0.0,
          "vitaminB6": 0.1,
          "vitaminB12": 0.0,
          "vitaminC": 0.0,
          "vitaminD": 0.0,
          "vitaminE": 0.1,
          "vitaminK": 0.0,
          "starch": 38.0,
          "lactose": 0.0,
          "alcohol": 0.0,
          "caffeine": 0.0,
          "sugars": 0.8,
          "calcium": 7.0,
          "iron": 1.5,
          "magnesium": 25.0,
          "phosphorus": 78.0,
          "potassium": 62.0,
          "zinc": 0.7,
          "copper": 0.1,
          "fluoride": null,
          "manganese": 0.4,
          "selenium": 28.0,
          "thiamin": 0.3,
          "riboflavin": 0.1,
          "niacin": 2.0,
          "pantothenicAcid": 0.3,
          "folateTotal": 100.0,
          "folicAcid": 75.0,
          "fattyAcidsTrans": 0.0,
          "fattyAcidsSaturated": 0.2,
          "fattyAcidsMonounsaturated": 0.3,
          "fattyAcidsPolyunsaturated": 0.4,
          "chloride": 1.0
        }
      }
    ]
  }
  
  
  
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
else if (indexPage.includes('index.html')) {
  document.querySelector('[data-link="index"]').classList.add('active');
} else if (indexPage.includes('addrecipe.html')) {

  document.querySelector('[data-link="recipes"]').classList.add('active');
} else if (indexPage.includes('recipesdetail.html')) {

  document.querySelector('[data-link="recipes"]').classList.add('active');
}
