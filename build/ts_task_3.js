"use strict";
function getitems() {
    return fetch('./shopitems.json')
        .then(shop => shop.json())
        .then(shop => { return shop; });
}
getitems()
    .then(items => {
    console.log(items.map(x => `ProductId:${x.ProductId}\nProductName:${x.ProductName}\nProductPrice${x.Price}\nQuantity${x.Quantity}\n\n`).toString());
});
