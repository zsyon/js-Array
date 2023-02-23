let dizi = [2,5,8,11,15,17];

let yeniDizi = dizi.map(function(sayı) {
  if(sayı > 10){
    return sayı*5
  }
});

console.log(yeniDizi)

document.write(`1. CEVAP : ${yeniDizi.join(" ")}`);

let dizi1 = [3,6,9,14,16];

dizi1.map((element)=>{
  if(element > 5) {
    document.write('Beşten büyük bir eleman mevcut.')
    break
  } 
  else {
    document.write('Beşten büyük bir eleman mevcut değil.')
    break
  }
})
