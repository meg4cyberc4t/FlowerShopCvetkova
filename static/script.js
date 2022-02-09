const flowers = [
    {
        id: 0,
        title: "Белые розы",
        img_link: "static/assets/flowers/white_roses.png"
    },
    {
        id: 1,
        title: "Красные розы",
        img_link: "static/assets/flowers/red_roses.png"
    },
    {
        id: 2,
        title: "Бежевые розы",
        img_link: "static/assets/flowers/beige_roses.png"
    }
];


for (let flower of flowers){
    document.querySelector("#scroll_assort_list").innerHTML += `
    <a class="flower_card" id="flower_card_${flower.id}">
            <img src="${flower.img_link}" alt="${flower.title}">
            <h5>${flower.title}</h5>
            <button>Заказать</button>
        </a>`;
}
