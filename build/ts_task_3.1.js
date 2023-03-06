"use strict";
function getfakeapi() {
    fetch('https://fakestoreapi.com/products/1')
        .then(item => item.json())
        .then(json => console.log(json));
}
getfakeapi();
