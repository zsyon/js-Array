let dizi = [2,5,8,11,15,17];

let yeniDizi = dizi.map(function(sayı) {
  if(sayı > 10){
    return sayı*5
  }
});

console.log(yeniDizi)

document.write(`1. CEVAP : ${yeniDizi.join(" ")}`);

let dizi1 = [3,6,9,14,16];

const yeniDizi1 = dizi1.some(function(sayi1) {
  return sayi1 > 5 ;
});
  
document.write(`2. CEVAP : ${yeniDizi1}`);
