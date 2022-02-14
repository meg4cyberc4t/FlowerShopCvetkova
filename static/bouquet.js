// Рендер в самом начале
let localHTML = "";
for (let flower of flowers) {
    localHTML += `
        <a class="flower_card flower_card_mini" id="flower_card_construct_${flower.title.replace(' ', '_')}">
            <h4>${flower.title}</h4>
            <img src="${"static/" + flower.link}" alt="${flower.title}">
            <hr>
            <button onclick="changeFlowerInBouquet('${flower.title}'); updateCard('${flower.title}'); updateCost()">Добавить</button>
        </a>`;
}
document.querySelector("#scroll_constructor_list").innerHTML = localHTML;

// Генерация конструктора цветов
let bouquet = [];
let multipluer = 1;


function updateCost() {
    let cost = 0;
    let count = 0;
    for (let flowerTitle of bouquet) {
        if (flowerTitle === undefined){
            continue;
        }
        cost += flowers.find(e => e.title === flowerTitle.replace('_', ' ')).price;
        count++;
    }
    document.querySelector("#constructor_cost").innerHTML = cost ? `Итого: ${cost*multipluer} Рублей` : "";
    document.querySelector("#constructor_button_place").innerHTML = cost ? `<button style="width: 150px">Заказать</button>` : "";
    document.querySelector("#constructor_range_place").innerHTML = cost ? `<h5>Количество цветов: ${count*multipluer}</h5><input id="multipluer_range" type="range" min="0" value="${multipluer}" max="10">` : "";
    document.getElementById("multipluer_range").onchange = function (_) {
        multipluer = document.getElementById("multipluer_range").value;
        updateCost();
    }
}

function updateCard(title) {
    let flower = flowers.find(e => e.title === title);
    let isActive = bouquet.indexOf(title) !== -1;
    document.querySelector(`#flower_card_construct_${flower.title.replace(' ', '_')}`).innerHTML = `
        <a class="flower_card flower_card_mini" id="flower_card_${flower.title}" style="${isActive ? '' : 'opacity:0.8;'}">
            <h4>${flower.title}</h4>
            <img src="${"static/" + flower.link}" alt="${flower.title}">
            <hr>
            <button onclick="changeFlowerInBouquet('${flower.title}'); updateCard('${flower.title}'); updateCost()">${!isActive ? 'Добавить' : 'Убрать'}</button>
        </a>`;
}


function changeFlowerInBouquet(title) {
    if (bouquet.indexOf(title) >= 0) {
        let index = bouquet.indexOf(title);
        delete bouquet[index];
    } else {
        bouquet.push(title)
    }
}