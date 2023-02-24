s = "javascriptloops"

let string = ""
let dizi = s.split("")
    
for(let i=0 ; i<dizi.length ; i++){
  if(dizi[i] == "a" ){
    console.log(dizi[i])
  }
  else if(dizi[i] == "e"){
    console.log(dizi[i])
  }
  else if(dizi[i] == "i"){
    console.log(dizi[i])
  }
  else if(dizi[i] == "o"){
    console.log(dizi[i])
  }
  else if(dizi[i] == "u"){
    console.log(dizi[i])
  }
}


for (var i = 0; i <= 10; i++) {
  console.log("dış döngü: " + i);
  for (var j = 0; j <= 5; j++) {
    if (j == 3) {
      break;
    }
    console.log("iç döngü" + j);
  }
 }
 

