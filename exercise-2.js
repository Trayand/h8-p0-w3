var arr = 'Hello World!'

function balikKata(kata){
var tampung = []
var text = ''
for(var i=kata.length-1;i>=0;i--){
  // tampung.push(kata[i])
  tampung[tampung.length] = kata[i]
  // console.log(tampung);
}
for(var j=0;j<tampung.length;j++){
  text += tampung[j]
  // console.log(text);
}
console.log(text);


}

balikKata(arr)
// balikKata('HALOHALO')