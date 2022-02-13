// Генерация конструктора цветов
let bouquet = [];

function renderConstructor() {
    let localHTML = "";
    let cost = 0;
    for (let flower of flowers) {
        let isActive = bouquet.indexOf(flower.title) !== -1;
        if (isActive){
            cost += flower.price;
        }
        localHTML += `
    <a class="flower_card flower_card_mini" id="flower_card_${flower.title}" style="${isActive ? '' : 'opacity:0.8;'}">
            <h4>${flower.title}</h4>
            <img src="${"static/" + flower.link}" alt="${flower.title}">
            <hr>
            <button onclick="changeFlowerInBouquet('${flower.title}'); renderConstructor();">${!isActive ? 'Добавить' : 'Убрать'}</button>
        </a>`;
    }
    document.querySelector("#scroll_constructor_list").innerHTML = localHTML;
    document.querySelector("#constructor_cost").innerHTML = cost ? `Итого: ${cost} Рублей` : "";
}

renderConstructor();

function changeFlowerInBouquet(title) {
    if (bouquet.indexOf(title) >= 0) {
        let index = bouquet.indexOf(title);
        delete bouquet[index];
    } else {
        bouquet.push(title)
    }
}