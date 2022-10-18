let urunler = [
  { fiyat: 100, ad: "Ürün 1", discount: true, rate: 15 },
  { fiyat: 150, ad: "Ürün 2", discount: false, rate: 15 },
  { fiyat: 200, ad: "Ürün 3", discount: true, rate: 2.5 },
];
let mass = urunler.map((urun) => {
    return {
      fiyat: urun.fiyat,
      ...urun,
    };
  });
  
  console.log(mass);
let maplenmisArray = urunler.map((urun) => {
 
  return {
    fiyat: urun.discount===true? urun.fiyat-urun.fiyat * (urun.rate / 100):urun.fiyat,
    ad: urun.ad,
    indirimTutari:urun.fiyat * (urun.rate / 100)
  };
});

console.log(maplenmisArray);


let cart = [
    {id:1,productName: "product 1", quantity:3,unitPrice:3000},
    {id:2,productName: "product 2", quantity:2,unitPrice:1000},
    {id:3,productName: "product 3", quantity:1,unitPrice:500}, 
]
//{ totalPrice: 11500, totalProductCount: 6 }
/*let totalPrice=0;
let totalProductCount=0;
cart.forEach(item=>{
    totalPrice+=item.quantity*item.unitPrice
    totalProductCount+=item.quantity;
})
let total={
    totalPrice:totalPrice,
    totalProductCount:totalProductCount
}
console.log(total);*/
 
let totalProduct=cart.reduce((total,item)=>{
 
  return {
        totalPrice:  total.totalPrice+ item.unitPrice*item.quantity,
        totalProductCount:total.totalProductCount+item.quantity
    }
 
},{
    totalPrice:0,
    totalProductCount:0
})
console.log(totalProduct);

 