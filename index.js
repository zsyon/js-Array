let dizi = [2,5,8,11,15,17];

let yeniDizi = dizi.map(function(sayı) {
  if(sayı > 10){
    return sayı*5
  }
});

console.log(yeniDizi)

document.write(`1. CEVAP : ${yeniDizi.join(" ")}`);