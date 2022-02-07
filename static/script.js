let flowers = [
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

let bouqet = [];

for (let item of flowers) {
    document.getElementById("roses").innerHTML += `
    <div draggable="true">
        <img src=${item.img_link} alt=${item.title}>
        <h1>${item.title}</h1>
    </div>`
}

for (let item of flowers) {
    document.getElementById("flowers_list_constructor").innerHTML += `
    <div class="flower_card_of_list" draggable="true" ondragstart="drag(event)" ondragover="return false;" id="${item.id}">
        <div class="flower_card_of_list__inner" draggable="false">
            <img src=${item.img_link} alt=${item.title} draggable="false">
            <h1 draggable="false">${item.title}</h1>
        </div>
    </div>`
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropInBouquet(ev) {
    ev.preventDefault();
    console.log(ev.target.className);
    if (ev.target.classList.contains("bouquet_list")) {
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}

function dropInFlowers(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains("flowers_list_constructor")) {
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}

document.getElementById("flowers_list_constructor").ondragover = allowDrop;
document.getElementById("flowers_list_constructor").ondrop = dropInFlowers;
document.getElementById("bouquet_list").ondragover = allowDrop;
document.getElementById("bouquet_list").ondrop = dropInBouquet;