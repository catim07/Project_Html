function addfood() {
    let form1 = document.forms[0];
    let form2 = document.forms[1];
    let form3 = document.forms[2];
    let info = {};
    let macronutrients = {};
    let micronutrients = {};
    let data1 = getElementData(form1);
    info.name = data1.name;
    info.source = data1.source;
    info.category = data1.category;
    info.quantity =  "100"
    macronutrients = getElementData(form2);
    micronutrients =getElementData(form3);
    let newFood = {
    id: foodList[foodList.length - 1].id+1,
    name: info.name,
    source: info.source,
    category: info.category,
    quantity: info.quantity,

    like:0,
    likeUser: [],

    macronutrients: macronutrients,
    micronutrients: micronutrients
    };
    foodList.push(newFood)
    updateDataFood(foodList)
    window.location.href="/food/food.html"
}