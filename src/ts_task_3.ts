interface shopitems {
 ProductId: number;
 ProductName: string;
 Price: number;
 Quantity: number;
}
function getitems(): Promise<shopitems[]> {

 return fetch('/shopitems.json')
  .then(shop => shop.json())
  .then(shop => { return shop as shopitems[] })
}

getitems()
 .then(items => {
  console.log(items.map(x => `ProductId:${x.ProductId}\nProductName:${x.ProductName}\nProductPrice${x.Price}\nQuantity${x.Quantity}\n\n`).toString())
 })