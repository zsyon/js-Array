let dizi = [2,5,8,11,15,17];

let yeniDizi = dizi.map(function(sayı) {
  if(sayı > 10){
    return sayı*5
  }
});

document.getElementById("cevap1").innerHTML = (`CEVAP : ${yeniDizi.join(" ")}`)





let dizi1 = [3,6,9,14,16];

let elementIsBiggerThanFive = "";
dizi1.some((element) => {
  if (element > 5) {
    elementIsBiggerThanFive = "Beşten büyük bir eleman mevcut.";
    return;
  }
  elementIsBiggerThanFive = "Beşten büyük bir eleman mevcut değil.";
});

document.getElementById("cevap2").innerHTML = (`CEVAP : ${elementIsBiggerThanFive}`)
let dizi2 = [2,3,4];

let çarpımSayı = 1;
let çarpım = dizi2.forEach(function(ever){
  return çarpımSayı = çarpımSayı * ever
})

document.getElementById("cevap3").innerHTML = (`CEVAP : ${çarpımSayı}`)
