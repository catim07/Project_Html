
function changeFood(index) {
    localStorage.setItem("selectedIndex", index);
    window.location.href = "/ingredient/ingredient.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const foodList = JSON.parse(localStorage.getItem("foodList"));
    const index = localStorage.getItem("selectedIndex");
    const food = foodList[index];
    document.querySelector('input[name="name"]').value = food.name;
    document.querySelector('input[name="source"]').value = food.source;
    document.querySelector('input[name="category"]').value = food.category;
    document.querySelector('input[name="quantity"]').value = food.quantity;

    document.querySelector('input[name="energy"]').value = food.macronutrients.energy;
    document.querySelector('input[name="carbohydrate"]').value = food.macronutrients.carbohydrate;
    document.querySelector('input[name="fat"]').value = food.macronutrients.fat;
    document.querySelector('input[name="protein"]').value = food.macronutrients.protein;
    const micronutrients = food.micronutrients;
    document.querySelector('input[name="cholesterol"]').value = micronutrients.cholesterol;
    document.querySelector('input[name="fiber"]').value = micronutrients.fiber;
    document.querySelector('input[name="sodium"]').value = micronutrients.sodium;
    document.querySelector('input[name="water"]').value = micronutrients.water;
    document.querySelector('input[name="vitaminA"]').value = micronutrients.vitaminA;
    document.querySelector('input[name="vitaminB6"]').value = micronutrients.vitaminB6;
    document.querySelector('input[name="vitaminB12"]').value = micronutrients.vitaminB12;
    document.querySelector('input[name="vitaminC"]').value = micronutrients.vitaminC;
    document.querySelector('input[name="vitaminD"]').value = micronutrients.vitaminD;
    document.querySelector('input[name="vitaminE"]').value = micronutrients.vitaminE;
    document.querySelector('input[name="vitaminK"]').value = micronutrients.vitaminK;
    document.querySelector('input[name="starch"]').value = micronutrients.starch;
    document.querySelector('input[name="lactose"]').value = micronutrients.lactose;
    document.querySelector('input[name="alcohol"]').value = micronutrients.alcohol;
    document.querySelector('input[name="caffeine"]').value = micronutrients.caffeine;
    document.querySelector('input[name="sugars"]').value = micronutrients.sugars;
    document.querySelector('input[name="calcium"]').value = micronutrients.calcium;
    document.querySelector('input[name="iron"]').value = micronutrients.iron;
    document.querySelector('input[name="magnesium"]').value = micronutrients.magnesium;
    document.querySelector('input[name="phosphorus"]').value = micronutrients.phosphorus;
    document.querySelector('input[name="potassium"]').value = micronutrients.potassium;
    document.querySelector('input[name="zinc"]').value = micronutrients.zinc;
    document.querySelector('input[name="copper"]').value = micronutrients.copper;
    document.querySelector('input[name="fluoride"]').value = micronutrients.fluoride;
    document.querySelector('input[name="manganese"]').value = micronutrients.manganese;
    document.querySelector('input[name="selenium"]').value = micronutrients.selenium;
    document.querySelector('input[name="thiamin"]').value = micronutrients.thiamin;
    document.querySelector('input[name="riboflavin"]').value = micronutrients.riboflavin;
    document.querySelector('input[name="niacin"]').value = micronutrients.niacin;
    document.querySelector('input[name="pantothenicAcid"]').value = micronutrients.pantothenicAcid;
    document.querySelector('input[name="folateTotal"]').value = micronutrients.folateTotal;
    document.querySelector('input[name="folicAcid"]').value = micronutrients.folicAcid;
    document.querySelector('input[name="fattyAcidsTrans"]').value = micronutrients.fattyAcidsTrans;
    document.querySelector('input[name="fattyAcidsSaturated"]').value = micronutrients.fattyAcidsSaturated;
    document.querySelector('input[name="fattyAcidsMonounsaturated"]').value = micronutrients.fattyAcidsMonounsaturated;
    document.querySelector('input[name="fattyAcidsPolyunsaturated"]').value = micronutrients.fattyAcidsPolyunsaturated;
    document.querySelector('input[name="chloride"]').value = micronutrients.chloride;

})


function saveFood() {
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    const index = localStorage.getItem("selectedIndex");

    const updatedFood = {
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

    if (index !== null && foodList[index]) {
        foodList[index] = updatedFood;
        localStorage.setItem("foodList", JSON.stringify(foodList));
        alert("Đã lưu thành công!");
        window.location.href = "/food/food.html"
    } else {
        alert("Không thể lưu: Dữ liệu không hợp lệ");
    }
}
