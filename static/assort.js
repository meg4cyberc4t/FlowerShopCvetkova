// Генерация ассортимента
for (let flower of flowers) {
    document.querySelector("#scroll_assort_list").innerHTML += `
    <a class="flower_card" id="flower_card_${flower.title}">
            <h4>${flower.title}</h4>
            <img src="${"static/" + flower.link}" alt="${flower.title}">
            <h6>15 шт. - ${flower.price * 10}р</h6>
            <button>Заказать</button>
        </a>`;
}
