// let flowers_list_tiles_html = "";
// for (let value of flowers) {
//     console.log(value);
//     flowers_list_tiles_html += `<a class="flower_list_tile" id="flower_list_tile_${value.id}">
//             <img src="${value.img_link}" alt="${value.title}">
//             <h5>${value.title}</h5>
//             <button onclick="addFlowerInBouquet(${value.id}); renderBouquet()">+</button>
//         </a>`;
// }
// document.getElementById("flowers_list_tiles").innerHTML += flowers_list_tiles_html;

// let bouquet = new Map();
//
// function addFlowerInBouquet(id) {
//     if (bouquet.has(flowers[id])) {
//         bouquet.set(flowers[id], bouquet.get(flowers[id]) + 1)
//     } else {
//         bouquet.set(flowers[id], 1)
//     }
// }
//
// function removeFlowerOutBouquet(id) {
//     if (bouquet.get(flowers[id]) <= 1) {
//         bouquet.delete(flowers[id]);
//     } else {
//         bouquet.set(flowers[id], parseInt(bouquet.get(flowers[id])) - 1)
//     }
//     console.log(bouquet);
// }
//
// function renderBouquet() {
//     let bouquet_html = "";
//     for (let [key, value] of bouquet) {
//         bouquet_html += `<a class="flower_list_tile" id="flower_list_tile_${key.id}">
//             <img src="${key.img_link}" alt="${key.title}">
//             <h5>${key.title}</h5>
//             <div class="flower_list_tile_buttons">
//                 <button onclick="addFlowerInBouquet(${key.id}); renderBouquet()">+</button>
//                 <h5>${value}</h5>
//                 <button onclick="removeFlowerOutBouquet(${key.id}); renderBouquet()">-</button>
//             </div>
//         </a>`;
//     }
//     if (bouquet_html.length === 0) {
//         bouquet_html = "<p>Пока ничего, но выбор слева!</p>";
//     } else {
//         bouquet_html += "<button style='padding-left: 20px; padding-right: 20px'>Заказать</button>";
//     }
//     document.getElementById("bouquet").innerHTML = bouquet_html;
// }
//
// renderBouquet();