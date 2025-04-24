function addfood(e) {
    e.preventDefault();
    const form1 = document.forms[0];
    const form2 = document.forms[1];
    const form3 = document.forms[2];
    let info = {};
    let macronutrients = {};
    let micronutrients = {};
    const data1 = getElementData(form1);
    info.name = data1.name || "";
    info.source = data1.source || "";
    info.category = data1.category || "";
    info.quantity =  "100"
    macronutrients = getElementData(form2);
    micronutrients =getElementData(form3);
    const newFood = {
        id: foodList[foodList.length - 1].id+1,
    name: info.name,
    source: info.source,
    category: info.category,
    quantity: info.quantity,
    macronutrients: macronutrients,
    micronutrients: micronutrients
    };
    foodList.push(newFood);
    alert("✅ Đã thêm món ăn:", newFood);
}