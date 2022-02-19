let search_pattern = "";
let multipluer = 1;

// Генерация конструктора цветов
let bouquet = new Map(); // Цветок - bool

for (let flower of flowers) {
    bouquet.set(flower, false);
}

function switchFlowerInBouquet(title) {
    let flower = flowers.find(e => e.title === title);
    bouquet.set(flower, !bouquet.get(flower))
}

function loadingCards() {
    let localHTML = "";
    for (let [flower, value] of bouquet) {
        if (flower.title.toLowerCase().indexOf(search_pattern) === -1) continue;
        let id = `flower_card_construct_${flower.title.replace(' ', '_')}`;
        localHTML += `
        <a class="flower_card" id="${id}">
            <h4>${flower.title}</h4>
            <img src="${"static/" + flower.link}" alt="${flower.title}">
            <hr>
            <button value="${value}" onclick="switchFlowerInBouquet('${flower.title}');updateCard('${flower.title}');updateCost();">${value ? "Удалить" : "Заказать"}</button>
        </a>`
    }
    document.querySelector("#scroll_constructor_list").innerHTML = localHTML;
}

loadingCards();

function updateCard(title) {
    let flower = flowers.find(e => e.title === title);
    let id = `flower_card_construct_${flower.title.replace(' ', '_')}`;
    let value = bouquet.get(flower) === true;
    document.getElementById(id).innerHTML = `
    <a class="flower_card" id="${id}">
        <h4>${flower.title}</h4>
        <img src="${"static/" + flower.link}" alt="${flower.title}">
        <hr>
        <button value="${value}" onclick="switchFlowerInBouquet('${flower.title}');updateCard('${flower.title}');updateCost();">${value ? "Удалить" : "Заказать"}</button>
    </a>`;
}


function updateCost() {
    let cost = 0;
    let count = 0;
    for (let [flower, value] of bouquet) {
        if (value === false) continue;
        cost += flower.price;
        count++;
    }
    document.querySelector("#constructor_cost").innerHTML = cost ? `Итого: ${cost * multipluer} Рублей` : "";
    document.querySelector("#constructor_button_place").innerHTML = cost ? `<button style="width: 150px">Заказать</button>` : "";
    document.querySelector("#constructor_range_place").innerHTML = cost ? `<h5>Количество цветов: ${count * multipluer}</h5><input id="multipluer_range" type="range" min="0" value="${multipluer}" max="10">` : "";
    document.getElementById("multipluer_range").onchange = function (_) {
        multipluer = document.getElementById("multipluer_range").value;
        updateCost();
    }
}

document.getElementById("search_field").oninput = function (e) {
    e.preventDefault();
    search_pattern = document.getElementById("search_field").value.trim().toLowerCase();
    loadingCards();
}